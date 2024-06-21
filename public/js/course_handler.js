// Define the course content
const courseContent = [
    {
      title: 'Module 1: Introduction to Programming',
      lessons: [
        { title: 'Lesson 1: Variables and Data Types', completed: false },
        { title: 'Lesson 2: Operators and Conditional Statements', completed: false },
        { title: 'Lesson 3: Functions and Control Flow', completed: false }
      ]
    },
    {
      title: 'Module 2: Data Structures and Algorithms',
      lessons: [
        { title: 'Lesson 1: Arrays and Lists', completed: false },
        { title: 'Lesson 2: Objects and Maps', completed: false },
        { title: 'Lesson 3: Sorting and Searching', completed: false }
      ]
    },
    // Add more modules and lessons as needed
  ];
  
  // Function to update the progress of a lesson
  function updateLessonProgress(moduleIndex, lessonIndex, completed) {
    courseContent[moduleIndex].lessons[lessonIndex].completed = completed;
  }
  
  // Function to display the course content and learners' progress
  function displayCourseContent() {
    const courseContainer = document.getElementById('course-container');
  
    // Clear the existing content
    courseContainer.innerHTML = '';
  
    // Display the course modules
    courseContent.forEach((module, moduleIndex) => {
      const moduleElement = document.createElement('div');
      moduleElement.classList.add('module');
  
      const moduleTitleElement = document.createElement('h2');
      moduleTitleElement.textContent = module.title;
      moduleElement.appendChild(moduleTitleElement);
  
      // Display the lessons in the module
      module.lessons.forEach((lesson, lessonIndex) => {
        const lessonElement = document.createElement('div');
        lessonElement.classList.add('lesson');
  
        const lessonTitleElement = document.createElement('h3');
        lessonTitleElement.textContent = lesson.title;
        lessonElement.appendChild(lessonTitleElement);
  
        const progressElement = document.createElement('div');
        progressElement.classList.add('progress');
  
        const progressBarElement = document.createElement('div');
        progressBarElement.classList.add('progress-bar');
        progressBarElement.style.width = lesson.completed ? '100%' : '0%';
        progressElement.appendChild(progressBarElement);
  
        const progressTextElement = document.createElement('span');
        progressTextElement.textContent = lesson.completed ? 'Completed' : 'Incomplete';
        progressElement.appendChild(progressTextElement);
  
        lessonElement.appendChild(progressElement);
        moduleElement.appendChild(lessonElement);
      });
  
      courseContainer.appendChild(moduleElement);
    });
  }
  
  // Call the displayCourseContent function to initially display the course content
  displayCourseContent();
  
  // Example: Update progress of Module 1, Lesson 2 to completed
  updateLessonProgress(0, 1, true);
  
  // Display the updated course content after progress update
  displayCourseContent();