var form=document.getElementById("form");
var firstName=document.getElementById("firstName");
var lastName=document.getElementById("lastName");
var email=document.getElementById("email");
var password=document.getElementById("password");

const nameValidate=(name)=>{
				
				if (name.value.trim()===""){
						name.style.border="2px solid red";
						name.nextElementSibling.innerHTML="Fill it up";
				}
				
				else {
								name.style.border="2px solid rgba(185,182,211,0.3)";
								name.nextElementSibling.innerHTML="";
				}
}
const isRequired = value => value === '' ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError=(input, message)=>{
				input.parentNode.classList.add("error");
input.nextElementSibling.innerHTML=message;
				
}

const success=(input)=>{
				input.parentNode.classList.remove("error");input.nextElementSibling.innerHTML="";
}

const checkName=(input, message)=>{
				let valid=false;
				if (! isRequired(input.value)){showError(input, message)}
				else{
								success(input);
								valid=true;
				}
				return valid
}

const checkEmail=()=>{
				let valid=false;
				let emailAddress=email.value.trim();
				if (!isRequired(emailAddress)||!isEmailValid(emailAddress)){showError(email, "Looks like this is not an email")}
							
				else{
								success(email);
								valid=true;
				}
				return valid
}

const checkPassword=()=>{
				let valid=false;
				let pass=password.value.trim();
				if (!isRequired(pass)){showError(password, "Password can't be empty")}
				
				else if(!isPasswordSecure(pass)){
								showError(password, "Password isn't secure")
				}
				
				else{
								success(password);
								valid=true;
				}
				return valid
}


const handler=(e)=>{
				e.preventDefault();
				
}

form.addEventListener("submit",(e)=> handler (e));
form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'firstName':
            checkName(firstName,"First name can't be empty");
            break;
        case 'lastName':
            checkName(lastName,"Last name can't be empty");
            break;   
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        
    }
});