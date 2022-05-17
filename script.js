const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');
const phoneNum = document.getElementById('phone');
const fName = document.getElementById('firstName');
const lName = document.getElementById('lastName');
const password = document.getElementById('password');
const password2 = document.getElementById('confirmPassword');





let errorE = email;
let errorP = phoneNum;
let errorFN = fName;
let errorLN = lName;
let errorPW = password;
let errorPW2 = password2;



while ((errorE = errorE.nextSibling).nodeType !== 1);


    const emailRegExp = /^([\w]+)(@)+([\w]+)([.])(\w+)$/;
    function addEvent(element, event, callback) {
        let previousEventCallBack = element["on"+event];
        element["on"+event] = function (e) {
            const output = callback(e);
            if (output === false) return false;
            if (typeof previousEventCallBack === 'function') {
                output = previousEventCallBack(e);
                if (output === false) return false;
            }
        }
    };
    addEvent(window, "load", function() {
        const test = email.value.length === 0 || emailRegExp.test(email.value);
        email.className = test ? "valid" : "invalid"
    });

    addEvent(email, "input", function() {
        const test = email.value.length === 0 || emailRegExp.test(email.value);
        if (test) {
            email.className = "valid";
            errorE.textContent = "";
            errorE.className = "error";
        } else {
            email.className = "invalid";
        }
    });

   
  
   
    while ((errorP = errorP.nextSibling).nodeType !== 1);

    const phoneRegExp = /(^[0-9]{10}$)|(^(\d{3})([.]|-|\s)(\d{3})([.]|-|\s)(\d{4})$)/

function addEvent(element, event, callback) {
    let previousEventCallBack = element["on"+event];
    element["on"+event] = function (e) {
        const output = callback(e);
        if (output === false) return false;
        if (typeof previousEventCallBack === 'function') {
            output = previousEventCallBack(e);
            if (output === false) return false;
        }
    }
};
addEvent(window, "load", function() {
    const test = phoneNum.value.length === 0 || phoneRegExp.test(phoneNum.value);
    phoneNum.className = test ? "valid" : "invalid"
});

addEvent(phoneNum, "input", function() {
    const test = phoneNum.value.length === 0 || phoneRegExp.test(phoneNum.value);
    if (test) {
        phoneNum.className = "valid";
        errorP.textContent = "";
        errorP.className = "error";
    } else {
        phoneNum.className = "invalid";
    }
});





while ((errorFN = errorFN.nextSibling).nodeType !== 1);


const NameRegExp = /^\w+/;

function addEvent(element, event, callback) {
let previousEventCallBack = element["on"+event];
element["on"+event] = function (e) {
    const output = callback(e);
    if (output === false) return false;
    if (typeof previousEventCallBack === 'function') {
        output = previousEventCallBack(e);
        if (output === false) return false;
    }
}
};
addEvent(window, "load", function() {
const test = fName.value.length === 0 || NameRegExp.test(fName.value);
fName.className = test ? "valid" : "invalid"
});

addEvent(fName, "input", function() {
const test = fName.value.length === 0 || NameRegExp.test(fName.value);
if (test) {
    fName.className = "valid";
    errorFN.textContent = "";
    errorFN.className = "error";
} else {
    fName.className = "invalid";
}
});


while ((errorLN = errorLN.nextSibling).nodeType !== 1);




function addEvent(element, event, callback) {
let previousEventCallBack = element["on"+event];
element["on"+event] = function (e) {
    const output = callback(e);
    if (output === false) return false;
    if (typeof previousEventCallBack === 'function') {
        output = previousEventCallBack(e);
        if (output === false) return false;
    }
}
};
addEvent(window, "load", function() {
const test = lName.value.length === 0 || NameRegExp.test(lName.value);
lName.className = test ? "valid" : "invalid"
});

addEvent(lName, "input", function() {
const test = lName.value.length === 0 || NameRegExp.test(lName.value);
if (test) {
    lName.className = "valid";
    errorLN.textContent = "";
    errorLN.className = "error";
} else {
    lName.className = "invalid";
}
});

while ((errorPW = errorPW.nextSibling).nodeType !== 1);
while ((errorPW2 = errorPW2.nextSibling).nodeType !== 1);

pwRegExp = /^\w{6,}$/;

function addEvent(element, event, callback) {
let previousEventCallBack = element["on"+event];
element["on"+event] = function (e) {
    const output = callback(e);
    if (output === false) return false;
    if (typeof previousEventCallBack === 'function') {
        output = previousEventCallBack(e);
        if (output === false) return false;
    }
}
};
addEvent(window, "load", function() {
const test = password.value.length === 0 || pwRegExp.test(password.value);
password.className = test ? "valid" : "invalid"
});

addEvent(password, "input", function() {
const test = password.value.length === 0 || pwRegExp.test(password.value);
if (test) {
    password.className = "valid";
    errorPW.textContent = "";
    errorPW.className = "error";
} else {
    password.className = "invalid";
}
});


addEvent(form, "submit", function() {
const testFN = fName.value.length === 0 || NameRegExp.test(fName.value);
const testLN = lName.value.length === 0 || NameRegExp.test(lName.value);
const testP = phoneNum.value.length === 0 || phoneRegExp.test(phoneNum.value);
const testE = email.value.length === 0 || emailRegExp.test(email.value);
const testPW = password.value.length === 0 || pwRegExp.test(password.value);
const testPW2 =  (password.value === password2.value);

if (!testFN) {
    fName.className = "invalid";
    errorFN.textContent = "gimme good name";
    errorFN.className = "error active";
    return false;
} else {
    fName.className = "valid";
    errorFN.textContent = "";
    errorFN.className = "error"
}

if (!testLN) {
    lName.className = "invalid";
    errorLN.textContent = "gimme good name";
    errorLN.className = "error active";
    return false;
} else {
    lName.className = "valid";
    errorLN.textContent = "";
    errorLN.className = "error"
}

if (!testP) {
        phoneNum.className = "invalid";
        errorP.textContent = "gimme good phone";
        errorP.className = "error active";
        return false;
    } else {
        phoneNum.className = "valid";
        errorP.textContent = "";
        errorP.className = "error"
    }


        if (!testE) {
            email.className = "invalid";
            errorE.textContent = "gimme good email";
            errorE.className = "error active";
            return false;
        } else {
            email.className = "valid";
            errorE.textContent = "";
            errorE.className = "error"
        }

        if (!testPW) {
            password.className = "invalid";
            errorPW.textContent = "gimme 6 characters or more";
            errorPW.className = "error active";
            return false;
        } else {
            password.className = "valid";
            errorPW.textContent = "";
            errorPW.className = "error"
        }

        if (!testPW2) {
            password2.className = "invalid";
            errorPW2.textContent = "gotta match password";
            errorPW2.className = "error active";
            return false;
        } else {
            password2.className = "valid";
            errorPW2.textContent = "";
            errorPW2.className = "error"
        }
});


    

