var q = function (element) {
  return document.querySelector(element);
};
var qAll = function (element) {
  return document.querySelectorAll(element);
};
// ^[a-z]{3,20}$ any letter of alphabet minum 3 maximum 20
//emaill: ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$
//password: ^(?=.*\d.*\d).{8,}$ // minimum 2 numbers at least 8 charachters

function Validation() {
    this.patterns = {
    name: /^[a-z0-9]{4,22}$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    password: /^(?=.*\d.*\d).{8,}$/i
    }
};
Validation.prototype.name = function (input) {
  return this.patterns.name.test(input)
},
Validation.prototype.email = function (input) {
  return this.patterns.email.test(input)
},
Validation.prototype.password = function (input) {
  return this.patterns.password.test(input)
}



var valid = new Validation();

for (var i = 0; i < 3; i++) {
  qAll('form input')[i].addEventListener('input', function () {
    check(valid[this.name](this.value), this);
  });
};
q('#password').addEventListener('input', function () {
  q('#password-repeat').disabled = false;
})

q('#password-repeat').addEventListener('click', function () {
  if (q('#password').value == '') {
    this.disabled = true;
  }
})
q('#password-repeat').addEventListener('input', function () {
  var userPassword = q('#password').value;
  check(this.value == userPassword, this);
});
q('form button').addEventListener('click', function (e) {
  e.preventDefault();
  var checkAll = [];

  for (var i = 0; i < 4; i++) {
    var inputToCheck = qAll('form input')[i].getAttribute('valid');
    if (inputToCheck == 'true') {
      checkAll.push(i)
    }
  };

  if (checkAll.length == 4) {
    alert('Excellent, you just created an account')
  } else {
    alert('Sign up not possible')
  }
})






// form input ui

function check(value, element) {
  if (value) {
    element.style.borderColor = ' rgb(57, 221, 7)';
    element.setAttribute('valid', 'true');
  } else {
    element.style.borderColor = ' rgb(220, 20, 20)';
    element.setAttribute('valid', 'false');
  }
}


for (let i = 0; i < qAll('.inputContainer input').length; i++) {
  qAll('.inputContainer input')[i].addEventListener('focus', function () {
    qAll('.inputContainer label')[i].style.fontSize = '10px';
    qAll('.inputContainer label')[i].style.height = '20px';

  })
  qAll('.inputContainer input')[i].addEventListener('blur', function () {
    if (qAll('.inputContainer input')[i].value == '') {

      qAll('.inputContainer input')[i].style.borderColor = 'rgb(77, 178, 245)';

      qAll('.inputContainer label')[i].style.fontSize = '14px';
      qAll('.inputContainer label')[i].style.height = '40px';
    }
  })
}