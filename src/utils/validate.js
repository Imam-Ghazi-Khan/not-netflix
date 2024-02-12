export const checkValidData = (email,password) => {
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(emailRegex) && password.length<4) return "Email & password are not valid";
    if(!email.match(emailRegex)) return "Email is not valid";
    if(password.length<4) return "Password is too small";
    return null;
}

