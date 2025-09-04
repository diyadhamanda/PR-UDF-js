let value1 = document.querySelector('input[name="value1"]');
let value2 = document.querySelector('input[name="value2"]');
let choice = document.querySelector('input[name="choice"]');
let result = document.querySelector('.result');

const calc = () => {
    let val1 = parseInt(value1.value);
    let val2 = parseInt(value2.value);

    let ch = choice.value;

    switch (ch) {
        case '1':
            sum(val1, val2);
            break;
        case '2':
            sub(val1, val2);
            break;
        case '3':
            mul(val1, val2);
            break;
        case '4':
            division(val1, val2);
            break;
    };

    const sum = (val1, val2) => {
        result.innerHTML = "Result= " + (val1 + val2);
    }
    const sub = (val1, val2) => {
        result.innerHTML = "Result= " + (val1 - val2);
    }
    const mul = (val1, val2) => {
        result.innerHTML = "Result= " + (val1 * val2);
    }
    const division = (val1, val2) => {
        result.innerHTML = "Result= " + (val1 / val2);
    }

    value1.value = '';
    value2.value = '';
    choice.value = '';
}