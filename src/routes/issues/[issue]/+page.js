// Import the issues data from the JSON file
import issuesData from "../../../lib/issues.json";
import articlesData from "../../../lib/articles.json";


import { error } from '@sveltejs/kit';

// Define the load function
export async function load({ params }) {
    
    // Get the issue value from the params object
    const issueSlug = params.issue;
    // Find the issue that matches the issueSlug
    const issue = issuesData.find(issue => issue.issueNumber === issueSlug);

    if (issue) {
        // Filter articles for the current issue
        const relatedArticles = articlesData.filter(article => article.parentIssue === issue.issueNumber);
        console.log("Filtered Articles:", relatedArticles)
        return {
            props: {
                issue,
                articles: relatedArticles
            }
        };
        
    } else {
        return error(404, 'Issue not found');
    }
    
}
