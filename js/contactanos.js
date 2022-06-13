const inputs = document.querySelectorAll('input');

// let Username = document.getElementById("username");
// let username = username.trim();


const patterns = {
  // username: /^[a-zA-Zs]{2,15}[^0-9]$/i,
  username: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,15}[^0-9]$/i,
  lastName: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,15}[^0-9]$/i,
  email: /^([^0-9][a-zA-Z\d\.-_-\u00f1\u00d1]+)@([a-z\d-][^0-9]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/,
  phone: /^[0-9]{10}$/
  // textBox: /^[a-z\d]{1,256}$/i
  // textBox: /^[a-zA-ZÀ-ÿ\u00f1\u00d10-9!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~\s]{0,2}$/i
};

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.id.value]);
  });
});

function validate(field, regex) {
  if (regex.test(field.value)) {
    return field.className = 'form-control valid';
  } else {
    return field.className = 'form-control invalid';
  }
}



function sendEmail() {
  Email.send({
	Host: "smtp.gmail.com",
	Username : document.getElementById(email),
	Password : "<email password>",
	To : 'sockitteam3@gmail.com',
	From : document.getElementById(email),
	Subject : "<email subject>",
	Body : document.getElementById(textBox),
	}).then(
		message => Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Correo enviado!',
      showConfirmButton: false,
      timer: 2000
    })
	);
}
