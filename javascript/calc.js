const body = document.getElementsByTagName('body')[0];

const input1 = document.createElement('input');
body.appendChild(input1);

const select = document.createElement('select');
const option = document.createElement('option');
option.value = "+";
option.innerHTML = "+";
const option1 = document.createElement('option');
option1.value = "-";
option1.innerHTML = "-";
const option2 = document.createElement('option');
option2.value = "*";
option2.innerHTML = "*";
const option3 = document.createElement('option');
option3.value = "/";
option3.innerHTML = "/";
const option4 = document.createElement('option');
option3.value = "%";
option3.innerHTML = "%";
select.appendChild(option);
select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
select.appendChild(option4);
body.appendChild(select);

const input2 = document.createElement('input');
body.appendChild(input2);

const equalButton = document.createElement('button');
equalButton.innerHTML = "=";
body.appendChild(equalButton);

const resultInput = document.createElement('input');
body.appendChild(resultInput);

function sum() {
    const option = select.value
    if(option === '+') {
        const result = Number(input1.value) + Number(input2.value);
        resultInput.value = result;
    }else if(option === '-'){
        const result = Number(input1.value) - Number(input2.value);
        resultInput.value = result;
    }else if(option === '*'){
        const result = Number(input1.value) * Number(input2.value);
        resultInput.value = result;
    }else if(option === '/'){
        const result = Number(input1.value) / Number(input2.value);
        resultInput.value = result;
    }
}

equalButton.onclick = sum;