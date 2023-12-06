logins = ["user1", "mitya", "user228"];

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (isLoginValid(login) == false) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }
  if (isLoginUnique(allLogins, login) == false) {
    return "Такий логін уже використовується!";
  }

  allLogins.push(login);
  return "Логін успішно доданий!";
}

console.log(addLogin(logins, "123"));

console.log(addLogin(logins, "12345678910111213141516"));

console.log(addLogin(logins, "user1"));

console.log(addLogin(logins, "newUser"));
