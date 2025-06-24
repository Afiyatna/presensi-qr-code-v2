// Session management untuk user
function setUserSession(user) {
  localStorage.setItem('user', JSON.stringify(user));
}
function getUserSession() {
  return JSON.parse(localStorage.getItem('user'));
}
function clearUserSession() {
  localStorage.removeItem('user');
}
function logoutUser() {
  clearUserSession();
  window.location.href = 'login.html';
}

// Session management untuk admin
function setAdminSession(admin) {
  localStorage.setItem('admin', JSON.stringify(admin));
}
function getAdminSession() {
  return JSON.parse(localStorage.getItem('admin'));
}
function clearAdminSession() {
  localStorage.removeItem('admin');
}
function logoutAdmin() {
  clearAdminSession();
  window.location.href = 'login.html';
} 