// Import the issues data from the JSON file
import articlesData from "$lib/articles.json";

import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */



export function load({ params }) {
    const article = articlesData.find(a => a.articleName === params.article);

    // console.log("Page.js", article)
    // Define the transformPath function here
    function transformPath(pathWithAlias) {
        return pathWithAlias.replace('$webresources', '/src/lib/webresources/');
    }

    // Check if article exists
    if (article) {
        article.articleImg = transformPath(article.articleImg);
        article.textImage = transformPath(article.textImage);
        // Transform paths in articleContent if needed, example for `img1`, `img2`, `gallery1`
        if (article.articleContent) {
            Object.keys(article.articleContent).forEach(key => {
                if (typeof article.articleContent[key] === 'string' && article.articleContent[key].includes('$webresources')) {
                    article.articleContent[key] = transformPath(article.articleContent[key]);
                }
            });
        }

        return {
            props: {
                article,
            }
        };
    } else {
        return error(404, 'Article not found');
    }
    
}

