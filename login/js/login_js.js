function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "ngo@example.com" && password === "ngo1234") {
    // If NGO login successful
    localStorage.setItem("role", "ngo");
    window.location.href = "/food-donation-pipeline-project/NGO/html/home.html";
  } else if (email === "restaurant@example.com" && password === "restaurant1234") {
    // If Restaurant login successful
    localStorage.setItem("role", "restaurant");
  window.location.href = "/food-donation-pipeline-project/owner/html/index.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
}
