// ===== PROTECT DASHBOARD PAGES =====
// Agar koi login kiye bina dashboard kholne ki koshish kare, use login page pe bhej do
const currentUser = getCurrentUser();

if (!currentUser) {
  window.location.href = "../login.html";
}

// ===== SHOW LOGGED-IN USER'S NAME/EMAIL =====
if (currentUser) {
  const userNameEls = document.querySelectorAll(".user-name");
  const userEmailEls = document.querySelectorAll(".user-email");

  userNameEls.forEach(el => {
    el.textContent = currentUser.fname + " " + currentUser.lname;
  });

  userEmailEls.forEach(el => {
    el.textContent = currentUser.email;
  });
}

// ===== SIGN OUT BUTTON =====
const signOutLinks = document.querySelectorAll(".sidebar a[href='../login.html']");

signOutLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    logoutUser();
    window.location.href = "../login.html";
  });
});