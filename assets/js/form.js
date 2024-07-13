const form = document.getElementById("fillout-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Create element objects
    const user = document.getElementById("username");
    const title = document.getElementById("title");
    const content = document.getElementById("content");

    // Create post object with element object values
    const post = {
        user: user.value,
        title: title.value,
        content: content.value
    };

    // Get recent posts or create empty array
    const recentPosts = JSON.parse(localStorage.getItem("allPosts")) || [];

    // Add new post object onto array
    recentPosts.push(post);

    // Store all posts now in array onto local storage
    localStorage.setItem("allPosts", JSON.stringify(recentPosts));

    window.location.href = "./blog.html";
});

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

