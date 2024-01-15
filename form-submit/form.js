function submitData() {
   console.log("submit fun working..")
    // Collect form data
    const formData = new FormData(document.getElementById('wf-form-Request-a-Demo'));//form id
    var Obtn = document.getElementById("submit_btn"); //submit button
    Obtn.innerHTML = "Please Wait..";
    Obtn.value="Please Wait"
    // Send data to Google Sheets (replace YOUR_GOOGLE_FORM_URL with the actual Google Form URL)
    const googleFormUrl = 'https://script.google.com/macros/s/AKfycbyRke3096k0ymI11l6-Q4UGhuGWKvJH8Ld1ZnTnQUviXY5sljcKv4tQxUKXZwMfwWM/exec';
    fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formData,
    })
      .then(response => {
        // Handle success or error if needed
        console.log('Order submitted successfully');
        // console.log(response);
        // window.location.href = "/success"; // Redirect to success page
        
       
          //Obtn.textContent = "Submitted Succes";
         Obtn.innerHTML = "successful..✅";
         Obtn.value="successful..✅"
        
      })
      .catch(error => {
        Obtn.innerHTML = "Err Occured..";
        Obtn.value="Ann ERR occured..!"
        // console.error('Error submitting order:', error);
        // window.location.href = "/err";
        // Optionally handle error and stay on the same page
      });
  }