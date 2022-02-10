let firstName = document.getElementById('Fname');
let lastName = document.getElementById('Lname');
// let genders = document.querySelectorAll('input[name="gender"]');
let genders = document.getElementsByName('gender');
let nickname = document.getElementById('nickname');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confpassword');
let countries = document.querySelector('#countries');
// let countriesValue = countries.options[countries.selectedIndex].value;
let mails = document.getElementById('mails');
let signUpbtn = document.getElementById('signUp');

// the error variables
let firstnameError = document.getElementById('fname-error');
let lastnameError = document.getElementById('lname-error');

let genderError = document.getElementById('genderError');
let nicknameError = document.getElementById('nickname-error');
let passwordError = document.getElementById('passwordError');
let confirmpasswordError = document.getElementById('confpasswordError');
let countryError = document.getElementById('errorCountry');

function checkName (input, input_error, field){
    if(input.value.length >= 3){
        input_error.style.display = 'none';
        return 1;
    } else if(input.value === ''){
        input_error.style.display = 'inline-block';
        input_error.textContent = 'Your ' + field + ' is missing!';
        return 0;
    } else {
        input_error.style.display = 'inline-block';
        input_error.textContent = 'The characters in ' + field + ' should be more than 2';
        return 0;
    } 
}

function checkNickname(){
    if(nickname.value.length >= 4){
        nicknameError.style.display = 'none';
        return 1;
    } else if(nickname.value === ''){
        nicknameError.style.display = 'inline-block';
        nicknameError.textContent = 'Write in your nickname';
        return 0;
    } else{
        nicknameError.style.display = 'block';
        nicknameError.textContent = 'Your Nickname must have 4 character and above';
    }
}


function checkGender(){
    //one gender in array gender should be checked, once checked 
    // return a true value
    if(genders[0].checked || genders[1].checked){
        genderError.style.display = 'none';
        return 1;
    } else{
        genderError.style.display = 'inline-block';
        genderError.textContent = 'Please select your sex';
        return 0;
    }
}

function checkPassword(){
    // confirm the password length
    if(password.value.length >= 6){
        passwordError.style.display = 'none';
        return 1;
        // make sure the password is not empty
    } else if(password.value == ''){
        passwordError.style.display = 'inline-block';
        passwordError.textContent = 'Enter a password';
        return 0;
        // if length dont correspond, give an error
    } else{
        passwordError.style.display = 'inline-block';
        passwordError.textContent = 'Password is not strong enough';
        return 0;
    }
}

function checkConfirmPassword(){
    let passwordValue = password.value;
    let confirmPasswordValue = confirmPassword.value;
    
    // check if confirm password matches the password 
    if(confirmPasswordValue == passwordValue){
        confirmpasswordError.style.display = 'none';
        return 1;
    } else{
        confirmpasswordError.style.display = 'inline-block';
        confirmpasswordError.textContent = "Your Password doesn't match!";
        return 0;
    }
}

function checkSelectedCountry(){
    // user must select a country and th
    if(countries.value == 'Select Country'){
        return 0;
    } else if(countries.value == ''){
        countryError.style.display = 'inline-block';
        countryError.textContent = 'Country not selected!';
        return 0;
    } else{
        countryError.style.display = 'none';
        return 1
    }
}

if(firstName){ //if the firstname field exists...
    firstName.addEventListener('keyup', function(){
        // hide the error message
        firstnameError.style.display = 'none';
    });
}

if(lastName){
    lastName.addEventListener('keyup', function(){
        lastnameError.style.display = 'none';
    });
}

if(countries){
    countries.addEventListener('click', function(){
        if(countries.value == 'Select Country'){
            return 0;
        } else{
            // alert(countries.value);
            return 1;
        }
    });
}


// once the sign up button is clicked on, all values are being checked
if(signUpbtn){
    signUpbtn.addEventListener('click', function(a){
        a.preventDefault();
        if(checkName(firstName, firstnameError, 'first name') == 1){    
            if(checkName(lastName, lastnameError, 'last name')){
                if(checkGender() === 1){
                    if(checkNickname() === 1){
                        if(checkPassword() === 1 && checkConfirmPassword() === 1){
                            if(countries.value !='Select Country'){
                                alert('Form Completed Successfully'); 
                                return 1;
                            } else if(countries.value == ''){
                                countryError.style.display = 'inline-block';
                                countryError.textContent = 'Country not selected!';
                                return 0;
                            } else{
                                // alert('Something is wrong with country');
                                return 0;
                            }
                        }else{
                            // alert("Something is wrong with password");
                            return 0;
                        }
                    }else{
                        // alert("There's something wrong with the nickname");
                        return 0;
                    }
                } else{
                    // alert('Something is wrong with the gender');
                    return 0;
                }
            } else{
                // alert('Something is wrong with last name');
                return 0;
            }
        } else {
            // alert('something is wrong with first name');
            return 0;
        }
    });
}






