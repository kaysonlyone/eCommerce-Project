// function validate() {
//     let name = document.getElementById("name").value; 
//     let phone = document.getElementById("phone").value; 
//     let email = document.getElementById("email").value; 
//     let message = document.getElementById("message").value; 
//     let error_message = document.getElementById("error_message"); 
  
//     error_message.style.padding = "10px"; 
    
  
//     let errors = []; 
  
//     if (name.length < 5) { 
//         errors.push("Please Enter a valid Name");} 
//     if (isNaN(phone) || phone.length != 10) { 
//         errors.push("Please Enter a valid Phone Number");} 
//     if (email.indexOf("@") == -1 || email.length < 6) { 
//         errors.push( 
//             "Please Enter a valid Email");} 
//     if (message.length <= 40) { 
//         errors.push( 
//             "Please Enter More Than 40 Characters");} 
//     if (errors.length > 0) { 
//         error_message.innerHTML = 
//             errors.join("<br>");
//         return false;
//     } 
//     else { 
//         alert( 
//             "Form Submitted Successfully!"); 
//         }}

function validateInput(){
    const name = document.forms["myform"]["name"].value; 
    const lastName = document.forms["Last Name"];
    const email = document.forms("phone");
 

    if (name === "" ){
        alert('finish filling out form')
        return false;
    }
    
    return true;
    }

    // const myForm = document.getElementById('my-form');
    // myForm.addEventListener('submit', function(event){
//     //     if(!validateInput()){
//     //         event.preventDefault();
//     }

