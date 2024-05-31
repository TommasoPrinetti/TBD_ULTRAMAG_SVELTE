// Import the issues data from the JSON file
import issuesData from "$lib/issues_new.json";
import articlesData from "$lib/articles_new.json";

import { error } from '@sveltejs/kit';

// Define the transformPath function
function transformPath(pathWithAlias) {
    if (pathWithAlias) {
      return pathWithAlias.replace('$webresources', 'src/lib/webresources/');
    } else {
      return ''; // Return a default value or handle it accordingly
    }
  }

export async function load({ params }) {
    // Get the issue value from the params object
    const issueSlug = params.issue;
    // Find the issue that matches the issueSlug
    const issue = issuesData.find(issue => issue.issueNumber === issueSlug);

    if (issue) {
        
        // Transform paths in the issue object
        issue.issueThumbnail = transformPath(issue.issueThumbnail);
        issue.issueCover = transformPath(issue.issueCover);
        issue.magGalleryFolder = transformPath(issue.magGalleryFolder);
        
        // Filter articles for the current issue
        const relatedArticles = articlesData.filter(article => article.parentIssue === issue.issueNumber).map(article => {
            // Transform the necessary paths within each article object
            return {
                ...article,
                articleImg: transformPath(article.articleImg),
                textImage: transformPath(article.textImage),
                // Add more transformations here if needed
            };
        });

        // console.log("Filtered Articles:", relatedArticles)
        return {
            props: {
                issue,
                articles: relatedArticles
            }
        };
        
    } else {
        throw error(404, 'Issue not found');
    }
}
