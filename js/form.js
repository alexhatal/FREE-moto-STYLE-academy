
    var form = document.getElementById("md-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Děkujeme, brzy se Vám ozveme!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! Něco se nepovedlo. Kontaktujte nás příme n náš email."
      });
    }
    form.addEventListener("submit", handleSubmit)
