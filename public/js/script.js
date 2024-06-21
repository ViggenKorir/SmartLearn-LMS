// Function to toggle the menu
function toggleMenu() {
  var menuToggle = document.querySelector('.menu-toggle');
  var dropdown = document.getElementById('myDropdown');

  menuToggle.classList.toggle('menu-open');
  dropdown.classList.toggle('dropdown-show');
}

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show/hide scroll to top button based on scroll position
window.onscroll = function () {
  var scrollToTopButton = document.getElementById("scrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

function toggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.main-nav-links');
  const dropdown = document.getElementById('myDropdown');

  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Simulated course structure based on user pace
const courseStructure = [
  { title: "Introduction", completed: true },
  { title: "Lesson 1", completed: true },
  { title: "Lesson 2", completed: false },
  { title: "Lesson 3", completed: false },
  { title: "Conclusion", completed: false }
];

const courseList = document.getElementById('courseList');
const content = document.getElementById('courseDetails');

// Function to render course navigation
function renderCourseNav() {
  courseList.innerHTML = '';
  courseStructure.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = item.title;

      if (item.completed) {
          li.classList.add('completed');
      } else if (index === 0 || courseStructure[index - 1].completed) {
          li.classList.add('active');
      } else {
          li.classList.add('locked');
          li.innerHTML += ' <span class="lock-icon">🔒</span>';
      }

      li.addEventListener('click', () => {
          if (li.classList.contains('active') || li.classList.contains('completed')) {
              courseStructure.forEach((_, idx) => {
                  if (idx <= index) {
                      courseStructure[idx].completed = true;
                  }
              });
              renderCourseNav();
              loadCourseContent(index);
          }
      });

      courseList.appendChild(li);
  });
}

function loadCourseContent(index) {
  const course = courseStructure[index];
  content.innerHTML = `<h2>${course.title}</h2><p>Content for ${course.title}</p>`;
}

renderCourseNav();

function prevTopic() {
  const currentIndex = courseStructure.findIndex(item => item.completed);
  if (currentIndex > 0) {
      loadCourseContent(currentIndex - 1);
  }
}

function nextTopic() {
  const currentIndex = courseStructure.findIndex(item => item.completed);
  if (currentIndex < courseStructure.length - 1 && courseStructure[currentIndex + 1].completed) {
      loadCourseContent(currentIndex + 1);
  }
}

//Password Confirmation:

var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

// Function to check if the user has scrolled to the bottom of the page
function isScrolledToBottom() {
  return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
}

// Function to load more content
function loadMoreContent() {
  // Add your logic to load more content here
  // For example, you can fetch additional data via AJAX and append it to the existing content
}

// Event listener for scrolling
window.addEventListener('scroll', function() {
  if (isScrolledToBottom()) {
      loadMoreContent();
  }
});

// script.js
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const loginSection = document.getElementById('login-section');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm_password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Send the registration data to the backend for processing
  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('Registration successful!');
      } else {
        alert('Registration failed!');
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Send the login data to the backend for processing
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...(email ? { email } : { username }),
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('Login successful!');
      } else {
        alert('Login failed!');
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

// Toggle the login section
document.getElementById('login-link').addEventListener('click', () => {
  loginSection.classList.toggle('show');
});