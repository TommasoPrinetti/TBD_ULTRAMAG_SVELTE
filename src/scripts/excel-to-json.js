import ExcelJS from 'exceljs';
import fs from 'fs/promises';

// Define the worksheet name to convert
const worksheetNameToConvert = 'articles_new';

// Define input and output paths and filenames
const inputFilePath = 'src/scripts/xslx/TBD_DB.xlsx';
const outputFilePath = `src/lib/${worksheetNameToConvert}.json`;

// Function to convert Excel rich text to HTML
const convertRichTextToHTML = (richText) => {
  return richText.map(part => {
    let text = part.text;
    if (part.font) {
      if (part.font.bold) text = `<b>${text}</b>`;
      if (part.font.italic) text = `<i>${text}</i>`;
      if (part.font.underline) text = `<u>${text}</u>`;
    }
    return text;
  }).join('').replace(/\n/g, '<br>');
};

// Load the Excel file
(async () => {
  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(inputFilePath);

    // Get the specified worksheet
    const worksheet = workbook.getWorksheet(worksheetNameToConvert);

    if (!worksheet) {
      throw new Error(`Worksheet '${worksheetNameToConvert}' not found in the Excel file.`);
    }

    const headers = [];
    worksheet.getRow(1).eachCell({ includeEmpty: true }, (cell, colNumber) => {
      headers[colNumber] = cell.value;
    });

    const data = [];

    // Helper function to set nested values
    const setNestedValue = (obj, path, value) => {
      const keys = path.split('/');
      let current = obj;
      while (keys.length > 1) {
        const key = keys.shift();
        if (!current[key]) {
          current[key] = {};
        }
        current = current[key];
      }
      current[keys[0]] = value;
    };

    // Iterate through each row starting from the second row to skip the header
    worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
      if (rowNumber === 1) return; // Skip header row

      const rowData = {};

      // Iterate through each cell in the row
      row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        const header = headers[colNumber]; // Use the header extracted
        if (header) {
          let cellValue = cell.value;

          // Check if the cell has rich text
          if (cellValue && typeof cellValue === 'object' && cellValue.richText) {
            cellValue = convertRichTextToHTML(cellValue.richText);
          } else if (cellValue === null || cellValue === undefined) {
            cellValue = ''; // Handle empty cells as empty strings
          } else if (cell.formula) {
            cellValue = cell.result; // Use the formula result instead of the formula itself
          } else if (typeof cellValue === 'string') {
            cellValue = cellValue.replace(/\n/g, '<br><br>'); // Replace newlines with <br><br>
          }

          setNestedValue(rowData, header, cellValue);
        }
      });

      // Add row data object to main data array
      data.push(rowData);
    });

    // Write JSON data to file
    await fs.writeFile(outputFilePath, JSON.stringify(data, null, 2));
    console.log(`Conversion completed. JSON data written to ${outputFilePath}`);
  } catch (error) {
    console.error('Error:', error);
  }
})();
