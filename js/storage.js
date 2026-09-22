// ===== STORAGE HELPER FUNCTIONS =====
// Ye functions localStorage ke saath baat karte hain

// Saare registered users ki list nikalo
function getUsers() {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
}

// Naye user ko list mein add karke save karo
function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

// Email se user dhundo (login check karne ke liye)
function findUserByEmail(email) {
  const users = getUsers();
  return users.find(user => user.email === email);
}

// Abhi kaun login hai, usko save karo
function setCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

// Abhi kaun login hai, wo nikalo
function getCurrentUser() {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
}

// Logout karo (current user hata do)
function logoutUser() {
  localStorage.removeItem("currentUser");
}