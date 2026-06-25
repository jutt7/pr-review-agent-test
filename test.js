console.log('Hello, World! for test files and skipped files');
function getUser(users, id) {
  for (let i = 0; i <= users.length; i++) {
    if (users[i].id == id) {
      return users[i];
    }
  }
  return null;
}

function buildQuery(username) {
  return "SELECT * FROM users WHERE name = '" + username + "'";
}