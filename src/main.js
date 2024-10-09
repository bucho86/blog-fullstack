import './style.css'
// import javascriptLogo from '../javascript.svg'
// import viteLogo from '/vite.svg'
// import {setupCounter} from '../counter.js'

document.querySelector('#app').innerHTML = `
  <div class="navbar bg-base-100">
    <div class="navbar-start">
        <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                    <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li>
                    <a>Parent</a>
                    <ul class="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
        </div>
        <a class="btn btn-ghost text-xl">Blog Full Stack</a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li>
                <details>
                    <summary>Parent</summary>
                    <ul class="p-2">
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </details>
            </li>
            <li><a>Item 3</a></li>
        </ul>
    </div>
    <div class="navbar-end">
        <a class="btn">Button</a>
    </div>
</div>
<!-- // End Navbar -->

<!-- // Start  Main section -->
<main class="container mx-auto p-4 flex flex-col md:flex-row gap-8">
    <section class="md:w-2/3">
        <h2 class="text-2xl font-semibold mb-4">Recent Posts</h2>
        <div class="space-y-6" id="posts">
            <!-- inserts the dynamic posts here-->
        </div>
    </section>

    <aside class="md:w-1/3">
        <h2 class="text-2xl font-semibold mb-4">Add New Post</h2>
        <form class="card bg-base-100 shadow-xl" id="add-post">
            <div class="card-body">
                <div class="form-control">
                    <label class="label" for="title">
                        <span class="label-text">Title</span>
                    </label>
                    <input type="text" id="title" placeholder="Enter post title" class="input input-bordered" required>
                </div>
                <div class="form-control">
                    <label class="label" for="author">
                        <span class="label-text">Author</span>
                    </label>
                    <input type="text" id="author" placeholder="Enter author name" class="input input-bordered" required>
                </div>
                <div class="form-control">
                    <label class="label" for="content">
                        <span class="label-text">Content</span>
                    </label>
                    <textarea id="content" placeholder="Write your blog post here" class="textarea textarea-bordered h-24" required></textarea>
                </div>
                <div class="form-control mt-6">
                    <button class="btn btn-primary">Submit Post</button>
                </div>
            </div>
        </form>
    </aside>
</main>

<footer class="bg-neutral text-neutral-content mt-8">
    <div class="container mx-auto p-4 text-center">
        <p>&copy; 2024 Blog Builder Project. All rights reserved.</p>
    </div>
</footer>`