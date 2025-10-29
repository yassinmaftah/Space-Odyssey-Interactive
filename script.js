const form = document.getElementById('contact-form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', function(e) {

  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = document.querySelector('input[name="subject"]:checked');

 const errorName = document.getElementById('error-name');
 const errorLastName = document.getElementById('errorLastName');
 const errorEmail = document.getElementById('errorEmail');
 const errorPhone = document.getElementById('errorPhone');


 let hasError = false;
   errorName.textContent = '';
   errorLastName.textContent = '';
   errorEmail.textContent = '';
   errorPhone.textContent = '';

  if (firstName === '' || firstName.length < 3) {
    errorName.textContent = 'First name is required';
    hasError = true;
  }

  if (lastName === '' || lastName < 3) {
    errorLastName.textContent = 'Last Name is required';
    hasError = true;
  }

  if (email === '') {
    errorEmail.textContent = 'Email is required';
    hasError = true;
  } else if (email === '' || !email.includes('@') || !email.includes('.')) {
    errorEmail.textContent = 'Enter a valid email';
    hasError = true;
  }

  if (phone === '') {
    errorPhone.textContent = 'Phone number is required';
    hasError = true;
  } else if (phone.length <= 9  || phone.length > 15) {
    errorPhone.textContent = 'Phone must be 10-15 digits';
    hasError = true;
  }

  if (!subject) {
    errorName.textContent = 'Select a subject';
    hasError = true;
  }

  if (message === '') {
    errorName.textContent = 'Message is required';
    hasError = true;
  }

  if (hasError) e.preventDefault();

});
