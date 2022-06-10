const inputs = document.querySelectorAll('input');
// let Username = document.getElementById("username");
// let username = username.trim();
const patterns = {
  username: /^[a-z\d]{3,15}$[^0-9]/i,
  lastName: /^[a-z\d]{3,15}$[^0-9]/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  phone: /^[0-9]{10}$/,
  textBox: /^[a-z\d]{1,256}$/i
};

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.id.value]);
  });
});

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'form-control valid';
  } else {
    field.className = 'form-control invalid';
  }
}
