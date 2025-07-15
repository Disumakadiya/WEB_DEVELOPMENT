// Run when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    const email = document.getElementById("email").value.trim();
    const otp = document.getElementById("otp").value.trim();

    // Check if both fields are filled
    if (email !== "" && otp !== "") {
      // Save session info (optional)
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);

      // Redirect to dashboard
      window.location.href = "dashboard.html";
    } else {
      alert("Please enter both Email/Mobile and OTP.");
    }
  });
});
