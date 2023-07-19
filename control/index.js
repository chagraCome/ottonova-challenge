const form = document.getElementById('form')
const firstname =document.getElementById('firstname')
const lastname =document.getElementById('lastname')
const email =document.getElementById('email')
const telefone= document.getElementById('telefone')

//add event listner on the button submit to control the inputs

form.addEventListener('submit', e=>{
    // we prevent the form from submitting until we validate the data if it is in the right form
    e.preventDefault();

    validateInputs();

});


const isValidEmail = email => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return re.test(email);
}

const isValidName= name=>{
    const re=/^[A-Za-z]+$/;
    return re.test(name);
}

const isValidtelefone= telefone=>{
    const re=/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(telefone);
}

const sendError= (element,msg)=>{
    const inputControl=element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');
    errorDisplay.innerText=msg;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const sendSuccess= (element,msg)=>{
    const inputControl=element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}

const validateInputs=()=>{
    //validate first name
    if(firstname.value===''){
        sendError(firstname, 'first name is required')
    }else if (!isValidName(firstname.value.trim())) {
        sendError(firstname, 'Provide a valid name');
    }
    else{
        sendSuccess(firstname)
    }
    //validate last name
    if(lastname.value===''){
        sendError(lastname, 'last name is required')
    }else if (!isValidName(lastname.value.trim())) {
        sendError(lastname, 'Provide a valid name');
    }
    else{
        sendSuccess(lastname)
    }

    // validate email
    if(email.value === '') {
        sendError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        sendError(email, 'Provide a valid email address');
    } else {
        sendSuccess(email);
    }

    //validate telefone number

      if(telefone.value === '') {
        sendError(telefone, 'phone number is required');
    } else if (!isValidEmail(telefone.value)) {
        sendError(telefone, 'Provide a valid phone number');
    } else {
        sendSuccess(telefone);
    }
}