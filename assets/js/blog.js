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

// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#darkmode-toggle');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'light';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});