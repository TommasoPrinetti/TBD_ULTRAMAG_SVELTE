// Import the issues data from the JSON file
import issuesData from "../../../lib/issues.json";

import { error } from '@sveltejs/kit';

// Define the load function
export async function load({ params }) {
    // Get the issue value from the params object
    const issueSlug = params.issue;

    console.log("Params:", params);

    // Find the issue that matches the issueSlug
    const issue = issuesData.find(issue => issue.IssueNumber === issueSlug);
    console.log("Issue:", issue);
    // If issue is found, return it as props
    if (issue) {
        return {
            props: {
                issue
            }
        };
    } else {
        // If issue is not found, throw a 404 error
        return error(404, 'Issue not found');
    }
}