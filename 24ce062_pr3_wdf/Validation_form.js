window.onload = function ()
{
  const form = document.querySelector("form");
  const submitBtn = document.querySelector("button[type='submit']");
  const fields = [
    "fullname",
    "email",
    "username",
    "password",
    "confirmpassword",
    "phone",
    "studentid"
  ];

  const patterns = {
    fullname: /^[a-zA-Z\s]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
    username: /^[a-zA-Z0-9]{5,15}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    phone: /^[0-9]{10}$/,
    studentid: /^[a-zA-Z0-9]+$/
  };

  const messages = {
    fullname: "Only letters and spaces allowed",
    email: "Please enter a valid email address",
    username: "5–15 alphanumeric characters",
    password: "At least 8 chars, 1 letter, 1 number, 1 special char",
    confirmpassword: "Passwords must match",
    phone: "Exactly 10 digits",
    studentid: "Only letters and numbers allowed"
  };

  fields.forEach((field) => {
    const input = document.getElementById(field);
    input.addEventListener("blur", () => validateField(field));
  });

  submitBtn.onclick = function (e) {
    e.preventDefault();
    let allValid = true;
    fields.forEach((field) => {
      if (!validateField(field)) allValid = false;
    });

    const successMsg = document.getElementById("successMessage");
    if (allValid) {
      successMsg.textContent = "🎉 All fields are successfully validated!";
      successMsg.style.color = "#28a745";
      successMsg.style.fontWeight = "bold";
      successMsg.style.marginTop = "10px";
      displayFormData();
    } else {
      successMsg.textContent = "";
    }
  };

  function validateField(field) {
    const input = document.getElementById(field);
    const error = document.getElementById(field + "Error");
    input.classList.remove("input-error");
    error.textContent = "";

    if (field === "confirmpassword") {
      const pwd = document.getElementById("password").value;
      if (input.value !== pwd) {
        showError(input, error, messages[field]);
        return false;
      }
      return true;
    }

    if (patterns[field] && !patterns[field].test(input.value.trim())) {
      showError(input, error, messages[field]);
      return false;
    }
    return true;
  }

  function showError(input, errorSpan, msg) {
    input.classList.add("input-error");
    errorSpan.textContent = msg;
    errorSpan.classList.add("input-error-message");
  }

  function displayFormData() {
    const output = document.getElementById("displayData");
    output.innerHTML = `
      <div class="success-display">
        <h3>✅ Registration Summary:</h3>
        <ul>
          <li><strong>Full Name:</strong> ${document.getElementById("fullname").value}</li>
          <li><strong>Email:</strong> ${document.getElementById("email").value}</li>
          <li><strong>Username:</strong> ${document.getElementById("username").value}</li>
          <li><strong>Phone:</strong> ${document.getElementById("phone").value}</li>
          <li><strong>Student ID:</strong> ${document.getElementById("studentid").value}</li>
        </ul>
      </div>
    `;
  }

  // Add CSS styles for error messages if not already added
  if (!document.getElementById("input-error-message-style")) {
    const style = document.createElement("style");
    style.id = "input-error-message-style";
    style.innerHTML = `
      .input-error-message {
        color: #ff4d6d;
        font-size: 0.9rem;
        margin-left: 8px;
        font-weight: 600;
        display: inline-block;
      }
      .input-error {
        border: 2px solid #ff4d6d !important;
        background-color: #ffe6e6 !important;
      }
      .success-display {
        background-color: #e6ffe6;
        border: 1px solid #28a745;
        padding: 10px;
        margin-top: 15px;
        border-radius: 8px;
      }
    `;
     document.head.appendChild(style);
  }
};
