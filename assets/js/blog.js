// Retrieve all posts from localStorage
let allPosts;
const storedPosts = localStorage.getItem("allPosts");

if (storedPosts) {
    allPosts = JSON.parse(storedPosts);
} else {
    allPosts = [];
}
    
// Target area of insertion <main>
const allPostsDiv = document.getElementById("allPosts");

if (allPosts.length > 0) {

    for (var i = 0; i < allPosts.length; i++) {
        let post = allPosts[i];
        let newDiv = document.createElement('div');
        newDiv.classList.add("post-container");
        allPostsDiv.appendChild(newDiv);
        newDiv.innerHTML = 
                           "<p class='title'>" + post.title + "</p>" + '<hr/>' +
                           "<p class='textarea'>Text:" + post.content + "</p>" +
                           "<p class='username'>@" + post.user + "</p>";
    }

} else {

    allPostsDiv.innerHTML = ""; 
}