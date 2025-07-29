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
    let modal = document.getElementById("displayModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "displayModal";
      modal.innerHTML = `
        <div class="modal-content">
          <button id="closeModalBtn" class="close-modal-btn">&times;</button>
          <div id="modalLoading"></div>
          <ul id="modalDataList" style="display:none;"></ul>
        </div>
      `;
      document.body.appendChild(modal);
      document.getElementById("closeModalBtn").onclick = function() {
        modal.style.display = "none";
      };
    }
    // Show loading message
    const loadingDiv = modal.querySelector("#modalLoading");
    const dataList = modal.querySelector("#modalDataList");
    loadingDiv.innerHTML = '<h3 style="text-align:center;">Loading...</h3>';
    dataList.style.display = 'none';
    modal.style.display = "flex";

    // Gather data (excluding password and phone)
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const studentid = document.getElementById("studentid").value;
    // Log details to console
    console.log({ fullname, email, username, studentid });

    // After 1.5s, show the details block
    setTimeout(() => {
      loadingDiv.innerHTML = '<h3>✅ Registration Details</h3>';
      dataList.innerHTML = `
        <li><strong>Full Name:</strong> ${fullname}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Username:</strong> ${username}</li>
        <li><strong>Student ID:</strong> ${studentid}</li>
      `;
      dataList.style.display = 'block';
    }, 1500);
  }

  // Add CSS styles for error messages and modal if not already added
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
      #displayModal {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.4);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      }
      .modal-content {
        background: #fff;
        padding: 32px 28px 24px 28px;
        border-radius: 14px;
        min-width: 320px;
        max-width: 90vw;
        box-shadow: 0 8px 32px rgba(0,0,0,0.18);
        position: relative;
        animation: fadeInModal 0.4s;
      }
      .close-modal-btn {
        position: absolute;
        top: 10px;
        right: 16px;
        background: none;
        border: none;
        font-size: 2rem;
        color: #e53e3e;
        cursor: pointer;
        font-weight: bold;
      }
      @keyframes fadeInModal {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }
};
