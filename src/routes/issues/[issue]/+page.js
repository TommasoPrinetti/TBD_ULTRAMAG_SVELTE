// THIS IS +PAGE.JS
// Import the articles data from the JSON file
import articlesData from "../../../lib/articles.json";

import { error } from '@sveltejs/kit';

// Define the load function
export async function load({ params }) {
    // Get the issue value from the params object
    const issue = params.issue;

    // Find the article that matches the issue
    const article = articlesData.find(article => article.issue === issue);

    // If article is found, return it
    if (article) {
        return {
            props: {
                article
            }
        };
    } else {
        // If article is not found, throw a 404 error
        return error(404, 'Not found');
    }
}
