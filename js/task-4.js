const userLoginForm = document.querySelector('.login-form');
userLoginForm.addEventListener('submit', event => {
  event.preventDefault();

  const userFormData = {
    [userLoginForm.elements.email.name]:
      userLoginForm.elements.email.value.trim(),
    [userLoginForm.elements.password.name]:
      userLoginForm.elements.password.value.trim(),
  };

  if (userFormData.email === '' || userFormData.password === '') {
    alert(`All form fields must be filled in`);
    return;
  }

  console.log(userFormData);
  userLoginForm.reset();
});
