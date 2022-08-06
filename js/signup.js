// HTML ELEMS 
let ElUsernameInput = document.querySelector('.username-js');
let ElEmailInput = document.querySelector('.email-js');
let ElPasswordInput = document.querySelector('.password-js'); 
let ElSubmitBtn = document.querySelector('.submit-btn');

let UserPrivateInfo = {
    // 'email@.com': 'don200303=4$',
    // 'salom@.com': 'dads090',
}

ElSubmitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    
    
    for(let [password,email] of Object.entries(UserPrivateInfo)) {
        console.log(`${password}: ${email}`);
    }


    // var person = { "name": "billy", "age": 23};

});

// console.log(ElUsernameInput, ElEmailInput , ElPasswordInput, ElSubmitBtn);