 import './style.css'
 import {getPosts} from "./posts.js";

// import javascriptLogo from '../javascript.svg'
// import viteLogo from '/vite.svg'
// import {setupCounter} from '../counter.js'
const postEl =document.querySelector('#posts');
const API_URL = "https://bkpybdqjxmrgxwaqmxqe.supabase.co/rest/v1"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrcHliZHFqeG1yZ3h3YXFteHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MjU5MTgsImV4cCI6MjAyNjAwMTkxOH0.1kLMTU1ZYusSamYBWHqs--GDYU-NGeYrX7qy4bNLTZU"

//  fetch(`${API_URL}/f24_posts?select=*&apikey=${API_KEY}`)
// .then(reponse=> response.json())
// .then(data => {
//     data. forEach(item => showPostWebView(item))
// })
 getPosts()
     .forEach(item=> showPostsWebView(item))
function showPostsWebView(item = {})

{
    const div = document .createElement('div');
    div.innerHTML = `
    <div class ="card bg-base-200 shadow-x1">
        <div class="card-body">
        <h3 class ="text-gray-800">Published on:
    ${item['pulishedOn']} by ${item['publishedBy']}</p>
            <p>${item['content']}</p>
            <div class="card-action justify-end">
            <botton class="btn btn-promary">Read
  More</button>
                     </div>
                 </div>
            </div>

    `
    postEl.appendChild(div);
}

 // document.querySelector('#app').innerHTML = `
 