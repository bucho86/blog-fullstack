 import './style.css'
 import {getPosts} from "../posts.js";

const postEl = document.querySelector('#posts');

 getPosts()
     .then(data => {
         console.log(data)
         data.forEach(item => console.log(item))
         data.forEach(item => showPostsWebView(item))
     })

function showPostsWebView(item = {})
{
     console.log("works")
    const div = document .createElement('div');
    div.innerHTML = `
        <div class ="card bg-base-200 shadow-x3">
            <div class="card-body">
            <h3 class ="text-red-0">Published on:${item['pulishedOn']} by ${item['publishedBy']}</p>
                <p>${item['content']}</p>
                <div class="card-action justify-end">
                <botton class="btn btn-promary">Read More</button>
                     </div>
                 </div>
            </div>

    `
    postEl.appendChild(div);
}

 // document.querySelector('#app').innerHTML = `
 