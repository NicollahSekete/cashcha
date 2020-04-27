if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
    if(form.pwd1.value.length < 4) {
      alert("Error: pin must contain at least six characters!");
      form.pwd1.focus();
      return false;

    }

  } else {
    alert("You entered a valid password: " + form.pwd1.value);
  return true;
  }

  

