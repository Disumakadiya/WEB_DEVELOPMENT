// validation_form.js

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('studentForm');
  if (!form) return;

  // Get all fields
  const fullname = document.getElementById('fullname');
  const studentid = document.getElementById('studentid');
  const email = document.getElementById('email');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const confirmpass = document.getElementById('confirmpass');
  const phone = document.getElementById('phone');
  const gender = document.getElementsByName('gender');
  const hobbies = document.getElementsByName('hobbies');
  const country = document.getElementById('country');
  const bio = document.getElementById('bio');
  const dob = document.getElementById('dob');
  const file = document.getElementById('file');

  // Helper to highlight input
  function highlightInput(input, isError) {
    if (!input) return;
    if (isError) {
      input.style.backgroundColor = '#2e0b4f';
      input.style.border = '2px solid #ff4d6d';
    } else {
      input.style.backgroundColor = '#23234a';
      input.style.border = 'none';
    }
  }

  // Validation functions for each field
  function validateFullName() {
    const value = fullname.value.trim();
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      showError('fullnameError', 'Full Name must contain only letters and spaces.');
      highlightInput(fullname, true);
      return false;
    } else if (!/(march|test)/i.test(value)) {
      showError('fullnameError', 'Full Name must include "march" or "test".');
      highlightInput(fullname, true);
      return false;
    } else {
      showError('fullnameError', '');
      highlightInput(fullname, false);
      return true;
    }
  }
  function validateStudentId() {
    const value = studentid.value.trim();
    if (!/^[A-Za-z0-9]+$/.test(value)) {
      showError('studentidError', 'Student ID must be alphanumeric only.');
      highlightInput(studentid, true);
      return false;
    } else {
      showError('studentidError', '');
      highlightInput(studentid, false);
      return true;
    }
  }
  function validateEmail() {
    const value = email.value.trim();
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      showError('emailError', 'Enter a valid email address.');
      highlightInput(email, true);
      return false;
    } else {
      showError('emailError', '');
      highlightInput(email, false);
      return true;
    }
  }
  function validateUsername() {
    const value = username.value.trim();
    if (!/^[a-zA-Z0-9]{5,15}$/.test(value)) {
      showError('usernameError', 'Username must be 5-15 alphanumeric characters.');
      highlightInput(username, true);
      return false;
    } else {
      showError('usernameError', '');
      highlightInput(username, false);
      return true;
    }
  }
  function validatePassword() {
    const value = password.value;
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(value)) {
      showError('passwordError', 'Password must be at least 8 characters, include a letter, a digit, and a special character.');
      highlightInput(password, true);
      return false;
    } else {
      showError('passwordError', '');
      highlightInput(password, false);
      return true;
    }
  }
  function validateConfirmPass() {
    if (confirmpass.value !== password.value || confirmpass.value === '') {
      showError('confirmpassError', 'Passwords do not match.');
      highlightInput(confirmpass, true);
      return false;
    } else {
      showError('confirmpassError', '');
      highlightInput(confirmpass, false);
      return true;
    }
  }
  function validatePhone() {
    const value = phone.value.trim();
    if (!/^[0-9]{10}$/.test(value)) {
      showError('phoneError', 'Phone number must be a 10-digit number.');
      highlightInput(phone, true);
      return false;
    } else {
      showError('phoneError', '');
      highlightInput(phone, false);
      return true;
    }
  }
  function validateGender() {
    let checked = false;
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) checked = true;
    }
    if (!checked) {
      showError('genderError', 'Select your gender.');
      return false;
    } else {
      showError('genderError', '');
      return true;
    }
  }
  function validateHobbies() {
    let checked = false;
    for (let i = 0; i < hobbies.length; i++) {
      if (hobbies[i].checked) checked = true;
    }
    if (!checked) {
      showError('hobbiesError', 'Select at least one hobby.');
      return false;
    } else {
      showError('hobbiesError', '');
      return true;
    }
  }
  function validateCountry() {
    if (!country.value) {
      showError('countryError', 'Select your country.');
      highlightInput(country, true);
      return false;
    } else {
      showError('countryError', '');
      highlightInput(country, false);
      return true;
    }
  }
  function validateBio() {
    if (!bio.value.trim()) {
      showError('bioError', 'Enter your bio.');
      highlightInput(bio, true);
      return false;
    } else {
      showError('bioError', '');
      highlightInput(bio, false);
      return true;
    }
  }
  function validateDOB() {
    if (!dob.value) {
      showError('dobError', 'Select your date of birth.');
      highlightInput(dob, true);
      return false;
    } else {
      showError('dobError', '');
      highlightInput(dob, false);
      return true;
    }
  }
  function validateFile() {
    if (!file.value) {
      showError('fileError', 'Upload a file.');
      highlightInput(file, true);
      return false;
    } else {
      showError('fileError', '');
      highlightInput(file, false);
      return true;
    }
  }

  // Attach blur event listeners
  fullname.addEventListener('blur', validateFullName);
  studentid.addEventListener('blur', validateStudentId);
  email.addEventListener('blur', validateEmail);
  username.addEventListener('blur', validateUsername);
  password.addEventListener('blur', validatePassword);
  confirmpass.addEventListener('blur', validateConfirmPass);
  phone.addEventListener('blur', validatePhone);
  if (country) country.addEventListener('blur', validateCountry);
  if (bio) bio.addEventListener('blur', validateBio);
  if (dob) dob.addEventListener('blur', validateDOB);
  if (file) file.addEventListener('blur', validateFile);
  // For radio/checkbox, use change event
  if (gender.length) gender[0].form.addEventListener('change', validateGender);
  if (hobbies.length) hobbies[0].form.addEventListener('change', validateHobbies);

  // Show error
  function showError(id, message) {
    const el = document.getElementById(id);
    if (el) el.textContent = message;
  }

  // On submit
  form.addEventListener('submit', function(e) {
    let valid = true;
    if (!validateFullName()) valid = false;
    if (!validateStudentId()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validateUsername()) valid = false;
    if (!validatePassword()) valid = false;
    if (!validateConfirmPass()) valid = false;
    if (!validatePhone()) valid = false;
    if (!validateGender()) valid = false;
    if (!validateHobbies()) valid = false;
    if (!validateCountry()) valid = false;
    if (!validateBio()) valid = false;
    if (!validateDOB()) valid = false;
    if (!validateFile()) valid = false;
    if (!valid) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    displayData();
    form.reset();
    // Reset highlights
    highlightInput(fullname, false);
    highlightInput(studentid, false);
    highlightInput(email, false);
    highlightInput(username, false);
    highlightInput(password, false);
    highlightInput(confirmpass, false);
    highlightInput(phone, false);
    highlightInput(country, false);
    highlightInput(bio, false);
    highlightInput(dob, false);
    highlightInput(file, false);
  });

  // Display data below form
  function displayData() {
    let genderValue = '';
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) genderValue = gender[i].value;
    }
    let hobbiesValue = [];
    for (let i = 0; i < hobbies.length; i++) {
      if (hobbies[i].checked) hobbiesValue.push(hobbies[i].value);
    }
    const fileName = file.files[0] ? file.files[0].name : '';
    const dataDiv = document.getElementById('formDataDisplay');
    dataDiv.innerHTML = `
      <h2 style="color:#00e6e6;">Submitted Data</h2>
      <ul style="list-style:none;padding:0;">
        <li><b style="color:#ffb347;">Full Name:</b> ${fullname.value}</li>
        <li><b style="color:#ffb347;">Student ID:</b> ${studentid.value}</li>
        <li><b style="color:#ffb347;">Email:</b> ${email.value}</li>
        <li><b style="color:#ffb347;">Username:</b> ${username.value}</li>
        <li><b style="color:#ffb347;">Phone:</b> ${phone.value}</li>
        <li><b style="color:#ffb347;">Gender:</b> ${genderValue}</li>
        <li><b style="color:#ffb347;">Hobbies:</b> ${hobbiesValue.join(', ')}</li>
        <li><b style="color:#ffb347;">Country:</b> ${country.value}</li>
        <li><b style="color:#ffb347;">Bio:</b> ${bio.value}</li>
        <li><b style="color:#ffb347;">Date of Birth:</b> ${dob.value}</li>
        <li><b style="color:#ffb347;">File Uploaded:</b> ${fileName}</li>
      </ul>
    `;
  }
}); 