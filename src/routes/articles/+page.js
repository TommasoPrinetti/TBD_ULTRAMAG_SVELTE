const values = [
    {
        slug: "article",
        ArticleImg: "/Users/tommasoprinetti/Documents/TBD-SVELTE-FINAL/tbd_ultramag_svelte/src/WEBRESOURCES/ISSUE_COVERS/ISSUE-1.webp",
        ArticleTitle: "GNEK",
        ArticleText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
        ParentIssue: "Issue 1",
        TextImage: "path/to/text/image.jpg",
        showDidascalie: true,
        RowsDidascalie: [
            "Didascalia 1",
            "Didascalia 2",
            "Didascalia 3"
        ],
        showBibliografia: true,
        RowsBibliografia: [
            "Bibliografia 1",
            "Bibliografia 2",
            "Bibliografia 3"
        ],
        Autore: "John Doe",
        Editor: "Jane Smith"
    }
]

export function load(){

    return{
        items: values
    }
}