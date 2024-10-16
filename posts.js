import supabase from "./config.js";

const TABLE_NAME = 'blog-fullstack';
const COLUMNS = '*';

/**
 * Gets all the posts in the database
 * @returns {Promise<[ { publishedBy: string, publishedOn: string, id: number, title: string, content: string } ]>}
 */
export async function getPosts() {
    let { data, error } = await supabase.from(TABLE_NAME).select(COLUMNS);
    logError(error);
    return data;
}

/**
 * Logs error to the console
 * @param {object} error
 */
function logError(error) {
    if (error) {
        console.error('Error:', error);
    }
}

/**
 * Adds a new post to the database
 * @param {object} newPost - The new post details (title, author, content)
 * @returns {Promise<{data: object} | {error: object}>}
 */
export async function addPost(newPost = {}) {
    try {
        const { data, error } = await supabase
            .from(TABLE_NAME)
            .insert([
                {
                    title: newPost.title,
                    author: newPost.author,
                    content: newPost.content,
                    publishedBy: newPost.publishedBy, // Assuming this field exists
                    publishedOn: new Date().toISOString() // Capture current date and time
                }
            ]);

        logError(error);
        return { data, error };
    } catch (error) {
        logError(error);
        return { error };
    }
}

/**
 * Deletes a post by its ID
 * @param {number} id
 * @returns {string}
 */
export function deletePostById(id) {
    return `Deleting post with ID: ${id}`;
}

/**
 * Updates a post's title and fetches the updated post
 * @param {number} id - The ID of the post
 * @param {string} newTitle - The new title for the post
 * @returns {Promise<[Object] | null>} - The updated post or null if there's an error
 */
export async function updatePostTitle(id, newTitle) {
    const { data, error } = await supabase
        .from(TABLE_NAME)
        .update({ title: newTitle })  // Update post title
        .eq('id', id)                 // Where post ID matches
        .select();                    // Fetch the updated post
    logError(error);
    return error ? null : data;
}
