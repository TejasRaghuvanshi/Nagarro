let clickme_button = $('.clickme')
let box = $('.box')
let submit_button = $('.submit')
let cross_button = $('.cross')

let username = $('#username')
let email = $('#email')
let password = $('#password')
let retypepassword = $('#retypepassword')

let username_error = $('.username')
let email_error = $('.email')
let password_error = $('.password')
let retypepassword_error = $('.retypepassword')

let inputs = $('.row')
let validations = $('.validation')


clickme_button.click(function(){
    box.css({'visibility': 'visible'})
})

submit_button.click(function(){
    if(validations.text() !== ""){
        // Do nothing if there are still errors
    }
    else if(username.val() == "" || email.val() == "" || password.val() == "" || retypepassword.val() == ""){
        // Do nothing if there any row is empty
    }
    else{
        box.css({'visibility': 'hidden'})
        inputs.val("")
        validations.text("")
    }
})

cross_button.click(function(){
    box.css({'visibility': 'hidden'})
    inputs.val("")
    validations.text("")
})


username.keyup(username_validation)
email.keyup(email_validation)
password.keyup(password_validation)
retypepassword.keyup(retypepassword_validation)

function username_validation(){
    if(username.val().length < 4){
        username_error.text("username must have atlest 4 characters")
    }
    else{
        username_error.text("")
    }
}

function email_validation(){
    let email_pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,3})?$/

    if(!email_pattern.test(email.val())){
        email_error.text("email is not of correct format")
    }
    else{
        email_error.text("")
    }
}

function password_validation(){
    let password_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/

    if(!password_pattern.test(password.val())){
        password_error.text("password must be 7 to 15 characters which contain at least one numeric digit and a special character")
    }
    else{
        password_error.text("")
    }
}

function retypepassword_validation(){
    if(password.val() !== retypepassword.val()){
        retypepassword_error.text("passwords do not match")
    }
    else{
        retypepassword_error.text("")
    }
}

