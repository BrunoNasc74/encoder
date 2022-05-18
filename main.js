const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const radio1 = document.querySelector('#radio1');
const radio2 = document.querySelector('#radio2');
const btn = document.querySelector('#btn');
const range = document.querySelector('#range');

function ceaserEncrypt() {
    let txt = box1.value;
    let rangeValue = parseInt(range.value);
    let result = '';
    
    for(let i=0; i<txt.length; i++) {
        let asciiValue = txt[i].charCodeAt();

        if(asciiValue >= 65 && asciiValue <= 90) {
            result += String.fromCharCode((((asciiValue - 65 + rangeValue) % 26) + 65));
        } else if (asciiValue >= 97 && asciiValue <= 122) {
            result += String.fromCharCode((((asciiValue - 97 + rangeValue) % 26) + 97));
        } else {
            result += String.fromCharCode(asciiValue);
        };
    };

    box2.value = result;
};

function base64Encode() {
    let txt = box1.value;
    box2.value = btoa(txt);
};

btn.addEventListener('click', base64Encode);