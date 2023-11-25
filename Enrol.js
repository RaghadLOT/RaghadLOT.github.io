function getChildrenNames() {
    var children = JSON.parse(localStorage.getItem('children'));
    return children || [];
}

// Define the courses array
const courses = [
    { name: "Python is fun", tutor: "T.Maha", prerequisite: null },
    { name: "Game programming 1 with Python", tutor: "T.Manal", prerequisite: "Python is fun" },
    { name: "Game programming 1 with Javascript", tutor: "T.Lama", prerequisite: "Python is fun" },
    { name: "Game programming 2 with Javascript", tutor: "T.Amal", prerequisite: "Python is fun" },
    { name: "Scratch Catch the Cat!", tutor: "T.Alex", prerequisite: "Game programming 1 with Python" },
    { name: "Scratch Fruit Slash", tutor: "T.Clara", prerequisite: "Game programming 1 with Python" },
    { name: "Advanced Python Programming", tutor: "T.Jess", prerequisite: "Python is fun" },
    { name: "Web Development with JavaScript", tutor: "T.Alen", prerequisite: null },
    { name: "Python for Data Science", tutor: "T.Flex", prerequisite: null } 
];

// Function to get unique values from an array
function getUniqueValues(arr) {
    return [...new Set(arr)];
}


const uniqueTutors = getUniqueValues(courses.map(course => course.tutor));
const uniquePrerequisites = getUniqueValues(courses.filter(course => course.prerequisite !== null).map(course => course.prerequisite));

// Populate filter options for tutors
const tutorDropdown = document.getElementById("tutor");
uniqueTutors.forEach(tutor => {
    const option = document.createElement("option");
    option.value = tutor;
    option.text = tutor;
    tutorDropdown.appendChild(option);
});

// Populate filter options for prerequisites
const prerequisiteDropdown = document.getElementById("prerequisite");
const allPrerequisitesOption = document.createElement("option");
allPrerequisitesOption.value = "All prerequisites";
allPrerequisitesOption.text = "All prerequisites";
prerequisiteDropdown.appendChild(allPrerequisitesOption);

uniquePrerequisites.forEach(prerequisite => {
    const option = document.createElement("option");
    option.value = prerequisite;
    option.text = prerequisite;
    prerequisiteDropdown.appendChild(option);
});

// Function to filter courses by tutor
function filterCoursesByTutor(tutor) {
  return courses.filter(course => course.tutor === tutor);
}

// Function to filter courses by prerequisite
function filterCoursesByPrerequisite(prerequisite) {
  return courses.filter(course => course.prerequisite === prerequisite);
}

// Event listener for filter selection by tutor
const tutorFilter = document.getElementById('tutor');
tutorFilter.addEventListener('change', function() {
  const selectedTutor = this.value;
  const filteredCourses = filterCoursesByTutor(selectedTutor);
  displayFilteredCourses(filteredCourses);
});

// Event listener for filter selection by prerequisite
const prerequisiteFilter = document.getElementById('prerequisite');
prerequisiteFilter.addEventListener('change', function() {
  const selectedPrerequisite = this.value;
  const filteredCourses = filterCoursesByPrerequisite(selectedPrerequisite);
  displayFilteredCourses(filteredCourses);
});

// Function to display filtered courses in the form
function displayFilteredCourses(filteredCourses) {
  const coursesForm = document.getElementById('enrollmentForm');
  const coursesSection = document.querySelector('.Course');
  
  // Clear previous courses displayed in the form
  coursesSection.innerHTML = '';

  // Display filtered courses in the form
  filteredCourses.forEach(course => {
    const courseBox = document.createElement('div');
    courseBox.classList.add('boox');
    
    const courseImg = document.createElement('img');
    courseImg.src = `photos/${course.name.replace(/\s+/g, '-').toLowerCase()}.png`;
    courseImg.alt = '';
    
    const courseTitle = document.createElement('h3');
    courseTitle.textContent = course.name;

    const courseCheckbox = document.createElement('label');
    courseCheckbox.innerHTML = `<input type="checkbox" name="course" value="${course.name}">`;

    courseBox.appendChild(courseImg);
    courseBox.appendChild(courseTitle);
    courseBox.appendChild(courseCheckbox);
    coursesSection.appendChild(courseBox);
  });
}

// Event listener for form submission
const form = document.getElementById('enrollmentForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const selectedChild = document.getElementById('children').value;
  const selectedCourses = document.querySelectorAll('input[name="course"]:checked');
  const selectedTutor = document.getElementById('tutor').value;

  if (selectedChild === 'All Kids' || selectedCourses.length === 0) {
    alert('Please select a child and at least one course.');
    return;
  }

// Prepare the information to display
let coursesInfo = '<br>Selected Courses:<br>';
  selectedCourses.forEach(course => {
    coursesInfo += `- ${course.value} (Tutor: ${selectedTutor})`;
  });

  // Find the div where you want to display the information
  const infoDisplay = document.getElementById('enrollmentInfo');

  // Display information about the selected kid and tutor
  infoDisplay.innerHTML = `Enrolled Kid: ${selectedChild} ${coursesInfo}`;
 
  // Clear the form or perform any additional actions here
  form.reset();
});

// ---------------------------------------------

            document.addEventListener("DOMContentLoaded", function () {
            // Check if local storage has parent's children
            let childrenData = localStorage.getItem("parentChildren");

            if (!childrenData) {
                // Local storage is empty, save 2 children's names
                const childrenNames = ["Fatima", "Hessa"]; // You can customize the names
                localStorage.setItem("parentChildren", JSON.stringify(childrenNames));
                displayChildren(childrenNames);
            } else {
                // Local storage has data, retrieve and display it
                const storedChildren = JSON.parse(childrenData);
                displayChildren(storedChildren);
            }

            function displayChildren(children) {
                // Assuming you have a section with the class "kids" to display children
                const kidsSection = document.querySelector(".kids");

                // Clear existing content
                kidsSection.innerHTML = "";

                // Display each child
                children.forEach(childName => {
                    const childBox = document.createElement("div");
                    childBox.className = "box";
                    childBox.innerHTML = `
                        <div class="K1">
                            <div class="kid-info">
                                <img src="photos/default_child_image.png" alt="">
                                <div class="infoK">
                                    <h3>${childName}</h3>
                                </div>
                            </div>
                        </div>
                    `;
                    kidsSection.appendChild(childBox);
                });
            }
        });
