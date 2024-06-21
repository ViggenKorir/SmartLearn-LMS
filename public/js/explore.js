// src/js/dashboard.js
import { auth, firestore } from "./firebase.js";

document.getElementById('logout').addEventListener('click', () => {
    auth.signOut()
        .then(() => {
            window.location.href = "login.html";
        });
});

auth.onAuthStateChanged(user => {
    if (user) {
        loadCourses();
    } else {
        window.location.href = "login.html";
    }
});

function loadCourses() {
    const courseList = document.getElementById('course-list');
    firestore.collection('courses').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                const course = doc.data();
                const courseElement = document.createElement('div');
                courseElement.innerHTML = `
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                `;
                courseList.appendChild(courseElement);
            });
        });
}
