const expressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const fields = {
    name: false,
    email: false,
    phone: false,
}

const checkSumbit = (fields) =>{
    let areValid = true;
    for(let f in fields){
        if(fields[f]==false){
            areValid = false;
        }
    }
    return areValid;
}

const validateForm = (e) => {
    console.log(e.target.id);
    switch(e.target.id){
        case 'name':
            validateField(expressions.name, e.target, 'name');
            break;
        case 'email':
            validateField(expressions.email, e.target, 'email');
            break;
            case 'phone':
            validateField(expressions.phone, e.target, 'phone');
            break;
    }
}

const validateField = (expresion, input, field) => {
    if(expresion.test(input.value)){
        document.getElementById(`group__${field}`).classList.remove('form__group-error');
        document.getElementById(`group__${field}`).classList.add('form__group-correct');
        
        document.querySelector(`#group__${field} i`).classList.add('fa-circle-check');
        document.querySelector(`#group__${field} i`).classList.remove('fa-circle-xmark');
        
        document.querySelector(`#group__${field} .form__input-error`).classList.remove('form__input-error--active');
        
        console.log('Input validated');
        fields[field] = true;
    } else {
        document.getElementById(`group__${field}`).classList.add('form__group-error');
        document.getElementById(`group__${field}`).classList.remove('form__group-correct');
        
        document.querySelector(`#group__${field} i`).classList.remove('fa-circle-check');
        document.querySelector(`#group__${field} i`).classList.add('fa-circle-xmark');
        
        document.querySelector(`#group__${field} .form__input-error`).classList.add('form__input-error--active');

        console.log('Input not validated');
        fields[field] = false;
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});

form.addEventListener('sumbit',(e)=>{
    e.preventDefault();
    if(areValid(fields)){
        console.log('form is valid');
        form.reset();
        document.getElementById('form__message-sucess').classList.add('form__message-sucess--active');
        setTimeout(()=>{
            document.getElementById('form__message-sucess').classList.remove('form__message-sucess--active');
        }, 5000);
        document.querySelectorAll('.form__group-correct').forEach((icon) => {
            icon.classList.remove('form__group-correct');
        }) 
    } else {
        console.log('form is not valid');
    }
});