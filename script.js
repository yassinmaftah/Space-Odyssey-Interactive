
/*form validation*/

console.log("JS loaded!");

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
 const errorSubject = document.getElementById('errorSubject');
 const errorMessage = document.getElementById('errorMessage');


 let hasError = false;
   errorName.textContent = '';
   errorLastName.textContent = '';
   errorEmail.textContent = '';
   errorPhone.textContent = '';
   errorSubject.textContent = '';
   errorMessage.textContent = '';

   const true_name = /^\w{3,}$/; 
  if (firstName === '') {
    errorName.textContent = 'First name is required';
    hasError = true;
  }else if (!true_name.test(firstName)) {
    errorName.textContent = 'The name must be longer than 2 letters.';
    hasError = true;
  }


  if (lastName === '') {
    errorLastName.textContent = 'Last Name is required';
    hasError = true;
  }else if (!true_name.test(lastName)) {
    errorLastName.textContent = 'The Last name must be longer than 2 letters.';
    hasError = true;
  }

  const true_email = /^[\w._]+@[\w._]+\.\w+$/;

  if (email === '') {
    errorEmail.textContent = 'Email is required';
    hasError = true;
  } else if (email != true_email) {
    errorEmail.textContent = 'Enter a valid email';
    hasError = true;
  }

  
  if (phone === '') {
    errorPhone.textContent = 'Phone number is required';
    hasError = true;
  } else if (!/^\d{10,15}$/.test(phone)) {
    errorPhone.textContent = 'Phone must contain 10 to 15 digits only';
    hasError = true;
  } else {
    errorPhone.textContent = '';
  }

  if (!subject) {
    errorSubject.textContent = 'select an subject!!';
    hasError = true;
  }

  if (message === '') {
    errorMessage.textContent = 'message is empty';
    hasError = true;
  }

  if (hasError) e.preventDefault();

});

/*end of form validation*/