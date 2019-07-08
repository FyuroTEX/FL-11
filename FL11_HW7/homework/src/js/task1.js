let password, agenNewPass, newPassword, oldPassword;
const minLength = 6;
let email = prompt('ENTER EMAIL', '');
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
switch (true) {
    case email === login.admin.email:
    case email === login.user.email:
        password = prompt('ENTER PASSWORD', '');
        break;
    case email !== null && email.length < minLength && email.length !== 0:
        alert('I don\'t know any emails having name length less than 6 symbols');
        break;
    case email !== null && email.length >= minLength:
        alert('I don’t know you');
        break;
    case null:
    default:
        alert('Canceled.');
        break;
}
switch (password) {
    case login.admin.password:
    case login.user.password:
        confirm('Do you want to change your password?')
            ? oldPassword = prompt('Write the old password', '')
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
if (oldPassword === password && oldPassword.length >= minLength) {
    newPassword = prompt('Write the new password', '');
} else {
    alert('Canceled.');
}
if (newPassword.length < minLength) {
    alert('It’s too short password. Sorry.');
} else if (newPassword.length >= minLength) {
    agenNewPass = prompt('Enter password agen', '');
}
if (agenNewPass === newPassword && agenNewPass.length >= minLength) {
    alert('You have successfully changed your password.');
} else {
    alert('You wrote the wrong password.');
}