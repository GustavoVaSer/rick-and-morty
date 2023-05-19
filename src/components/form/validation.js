export default function validation(input) {
    //input = {email: _____, password: _______}
    const error = {};

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(!regexEmail.test(input.email)) {
        error.email = "Debe ingresar un email valido";
    }
    if(!input.email) {
        error.email = "Debe ingresar un nombre";
    }
    if(input.email.length > 35) {
        error.email = "No debe ser mayor a 35 caracteres";
    }
    if(!regexPassword.test(input.password)) {
        error.password = "Al menos un numero";
    }
    if(input.password.length < 6 || input.password.length > 10) {
        error.password = "Debe tener entre 6 a 10 caracteres";
    }
    return error;
}