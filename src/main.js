import './style.css';
import { getPosts, addPost } from "../posts.js";  // Import both getPosts and addPost from posts.js

const postEl = document.querySelector('#posts');

// Fetch and display all posts from the database
getPosts()
    .then(data => {
        console.log(data);
        data.forEach(item => showPostsWebView(item));
    });

// Function to display posts in the DOM
function showPostsWebView(item = {}) {
    console.log("works");
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card bg-base-200 shadow-x3">
            <div class="card-body">
                <h3 class="text-red-0">Published on: ${item['publishedOn']} by ${item['publishedBy']}</h3>
                <p>${item['content']}</p>
                <div class="card-action justify-end">
                    <button class="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    `;
    postEl.appendChild(div);
}

// Event listener for submitting a new post
document.querySelector('#add-post').querySelector('submit', async function(event) {
    event.preventDefault();  // Prevent page refresh on form submission
    console.log("form submission works");

    // Capture form data
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const author = document.querySelector('#author').value;
    const  publishedBy = document.querySelector('#publishedBy');
    const publishedOn = document.querySelector('#publishedOn');

    console.log({ title, content, author });  // Log the form values for debugging

    // Call the addPost function and pass the form data
    const result = await addPost({ title, author, content });

    // Handle the result of the addPost function
    if (result.error) {
        // Handle error
        console.error("Error adding post:", result.error.message);
    } else {
        // Handle success
        console.log('Post added successfully:', result.data);

        // Optionally, you can append the new post to the page
        showPostsWebView(result.data[0]);  // Assuming the data returned is an array with the new post as the first item
    }
});
