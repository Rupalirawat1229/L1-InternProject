// ===== SIGNUP FORM HANDLING =====
const signupForm = document.querySelector("#signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // page reload hone se roko

    const fname = document.querySelector("#fname").value;
    const lname = document.querySelector("#lname").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const cpassword = document.querySelector("#cpassword").value;

    // Validation checks
    if (password !== cpassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    if (findUserByEmail(email)) {
      alert("This email is already registered. Please login.");
      return;
    }

    // Naya user object banao
    const newUser = {
      fname: fname,
      lname: lname,
      email: email,
      password: password
    };

    saveUser(newUser);
    alert("Account created successfully! Please login.");
    window.location.href = "login.html"; // login page pe le jao
  });
}

// ===== LOGIN FORM HANDLING =====
const loginForm = document.querySelector("#loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const user = findUserByEmail(email);

    if (!user) {
      alert("No account found with this email. Please sign up.");
      return;
    }

    if (user.password !== password) {
      alert("Incorrect password. Try again.");
      return;
    }

    setCurrentUser(user);
    window.location.href = "dashboard/overview.html"; // dashboard pe le jao
  });
}