// If not logged in, redirect to login
window.onload = () => {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("⚠️ You must login first!");
    window.location.href = "login.html";
  }

  const name = localStorage.getItem("userEmail") || "Student";
  document.getElementById("userName").textContent = name.split('@')[0];
};

// Logout function
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
