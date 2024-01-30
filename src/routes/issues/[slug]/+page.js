// Import the $page store
import { $page } from '$app/stores';

// Import the articles data from the JSON file
import articlesData from "../../articles/articles.json";

// Define the load function
export async function load({ params }) {
  // Get the slug value from the $page store
  const slug = $page.params.slug;

  // Find the article that matches the slug
  const article = articlesData.find(article => article.slug === slug);

  // Return the article as a prop
  return {
    props: {
      article
    }
  };
}
