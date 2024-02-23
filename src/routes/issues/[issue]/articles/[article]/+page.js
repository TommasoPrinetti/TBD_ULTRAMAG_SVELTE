// src/routes/[article]/+page.server.js
import { error } from '@sveltejs/kit';
import articlesData from '$lib/articles.json'; // Assuming the file is accessible server-side

/** @type {import('@sveltejs/kit').PageServerLoad} */
export async function load({ params }) {
    // console.log("Loading article with params:", params); // Log the incoming params to see what article is being requested

    const article = articlesData.find(a => a.articleName === params.article);

    // console.log("Found article:", article); // Log the found article, if any

    if (article) {
        // console.log("Returning article data for:", article.articleName); // Confirm which article data is being returned
        return {
            props: {
                article,
            }
        };
    } else {
        // console.log("Article not found for:", params.article); // Log a message if the article isn't found
        return error(404, 'Article not found');
    }
}
