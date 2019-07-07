let oldPassword, newPassword, password;
let email = prompt('ENTER EMAIL');
let elength = 6;
let login = {
  admin: {
    email: 'admin@gmail.com',
    password: 'AdminPass'
  },
  user: {
    email: 'user@gmail.com',
    password: 'UserPass'
  }
};
//email
switch (true) {
  case email === login.admin.email:
  case email === login.user.email:
    password = prompt('ENTER PASSWORD');
    break;
  case email !== null && email.length < elength && email.length !== 0:
    alert("I don't know any emails having name length less than 6 symbols");
    break;
  case email !== null && email.length >= elength:
    alert('I don’t know you');
    break;
  case null:
  default:
    alert('Canceled.');
    break;
}
//password
switch (password) {
  case login.admin.password:
  case login.user.password:
    confirm('Do you want to change your password?')
      ? oldPassword = prompt('Write the old password')
      : alert('You have failed the change.');
    break;
  case password || !null:
    alert('Wrong password');
    break;
  case null:
  default:
    alert('Canceled.');
    break;
}
//write new password
switch (oldPassword) {
  case password:
    newPassword = prompt('Write the new password');
    break;
  default:
    alert('Canceled.');
    break;
}
