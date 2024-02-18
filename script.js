document.addEventListener("DOMContentLoaded", function () {
    const postsContainer = document.getElementById("posts-container");

    // Function to fetch and display posts
    function displayPosts() {
        for (let i = 1; i <= 2; i++) {  // Assuming you have post1.txt and post2.txt
            fetch(`posts/post${i}.txt`)
                .then(response => response.text())
                .then(content => {
                    const postDiv = document.createElement("div");
                    postDiv.innerHTML = `<h2>Post ${i}</h2><p>${content}</p>`;
                    postsContainer.appendChild(postDiv);
                })
                .catch(error => console.error(`Error fetching post${i}.txt:`, error));
        }
    }

    // Initial display
    displayPosts();
});
