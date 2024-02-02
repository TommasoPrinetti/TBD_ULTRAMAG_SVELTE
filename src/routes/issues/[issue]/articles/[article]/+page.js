// Import the issues data from the JSON file
import articlesData from "../../../../../lib/articles.js";

import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */



export function load({ params }) {
    const article = articlesData.find(a => a.articleName === params.article);

    console.log("Page.js", article)

    if (article) {
        return {
            props: {
                article,
            }
        };
        
    } else {
        return error(404, 'Issue not found');
    }
    
}

