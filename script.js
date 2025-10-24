//your JS code here. If required.
  const patterns = {
      name: /^[A-Za-z]{3,}$/,
      email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
      mobile: /^[0-9]{10}$/
    };

    function validateInput(input, regex) {
      if (regex.test(input.value)) {
        input.style.backgroundColor = "lightgreen";
      } else {
        input.style.backgroundColor = "pink";
      }
    }

    document.getElementById("name").addEventListener("input", function() {
      validateInput(this, patterns.name);
    });

    document.getElementById("email").addEventListener("input", function() {
      validateInput(this, patterns.email);
    });

    document.getElementById("mobile").addEventListener("input", function() {
      validateInput(this, patterns.mobile);
    });