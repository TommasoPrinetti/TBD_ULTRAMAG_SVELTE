// src/routes/[article]/+page.server.js
import { error } from '@sveltejs/kit';
import articlesData from '$lib/articles.json'; // Assuming the file is accessible server-side

/** @type {import('@sveltejs/kit').PageServerLoad} */
export async function load({ params }) {
    const article = articlesData.find(a => a.articleName === params.article);

    if (article) {
        return {
            props: {
                article,
            }
        };
    } else {
        return error(404, 'Article not found');
    }
}

