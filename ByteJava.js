

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn1')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show1')) {
          openDropdown.classList.remove('show1');
        }
      }
    }
  }

  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show2')) {
          openDropdown.classList.remove('show2');
        }
      }
    }
  }

const customizeBtn = document.getElementById('customizeBtn');
const body = document.body;

customizeBtn.addEventListener('click', () => {
  // Toggle between the two themes by adding/removing a class from the body
  body.classList.toggle('theme-two');
});

// dashboard.js

            document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('.btn').addEventListener('click', function(event) {
                event.preventDefault();

                const name = document.getElementById('name').value;
                const dob = new Date(document.getElementById('dob').value);
                const email = document.getElementById('email').value;
                const phone = document.getElementById('phone').value;
                const photo = document.getElementById('photo').files[0];

                if (name === '' || !/^[a-zA-Z]+$/.test(name.charAt(0))) {
                    alert('Name is required and should start with a letter.');
                    return;
                }
                
                if (email === '' ) {
                    alert('Email is required.');
                    return;
                }

                if (phone.length !== 10 || isNaN(phone)) {
                    alert('Phone number should be 10 digits.');
                    return;
                }

                const currentYear = new Date().getFullYear();
                const maxYear = currentYear - 6;

                if (dob.getFullYear() > maxYear) {
                    alert('Children younger than 6 years old are not accepted.');
                    return;
                }

                localStorage.setItem('childName', name);

                const reader = new FileReader();
                reader.onload = function(event) {
                    const image = document.getElementById('imagePreview');
                    image.style.display = 'block';
                    image.src = event.target.result;
                };
                reader.readAsDataURL(photo);

                const childInfo = `
                    <img src="${URL.createObjectURL(photo)}" alt="${name}'s photo" style="max-width: 100px; max-height: 100px;"><br>
                    Child Name: ${name}<br>
                    Date of Birth: ${dob.toLocaleDateString()}<br>
                    Gender: ${gender}<br>
                    Phone Number: ${phone}<br>
                    Email: ${email}
                `;
                document.getElementById('childInfo').innerHTML = childInfo;

            });
        });


