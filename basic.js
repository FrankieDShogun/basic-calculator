let arrayNum = [];

// CODE BELOW

const operationChange = operation => {
    let lastNum = arrayNum[arrayNum.length - 1];
    if (lastNum == undefined) {
        document.getElementById('input').placeholder = '';
        console.log(arrayNum);
    }else if (lastNum != '*' && lastNum != '/' && lastNum != '+' && lastNum != '-') {
        arrayNum.push(operation);
        document.getElementById('input').placeholder += operation;
        console.log(arrayNum);
    }else{
        arrayNum.pop();
        document.getElementById('input').placeholder = arrayNum.join().replace(/,/g, '');
        arrayNum.push(operation);
        document.getElementById('input').placeholder += operation;
        console.log(arrayNum);
    }
};

const getValue = number => {
    arrayNum.push(number);
    document.getElementById('input').placeholder += number;
    console.log(arrayNum);
}

const round = (arrayResult, resultPrecision) => {
    resultPrecision = Math.pow(10, resultPrecision);
    return Math.ceil(arrayResult * resultPrecision)/ resultPrecision;
}

// DATA BELOW


const one = () => {
    getValue('1');
};

const two = () => {
    getValue('2');
};

const three = () => {
    getValue('3');
};

const four = () => {
    getValue('4');
};

const five = () => {
    getValue('5');
};

const six = () => {
    getValue('6');;
};

const seven = () => {
    getValue('7');;
};

const eight = () => {
    getValue('8');
};

const nine = () => {
    getValue('9');
};

const zero = () => {
    getValue('0');
};

const divide = () => {
    operationChange('/')
};

const multiply = () => {
    operationChange('*');
};

const minus = () => {
    operationChange('-');
};

const plus = () => {
    operationChange('+');
};

const removeall = () => {
    arrayNum = [];
    document.getElementById('input').placeholder = '';
    console.log(arrayNum);
};

const bSpace = () => {
    arrayNum.pop();
    document.getElementById('input').placeholder = arrayNum.join().replace(/,/g, '');
    console.log(arrayNum);
};

const negative = () => {
    if (arrayNum[0] != '-') {
        arrayNum.unshift('-');
        document.getElementById('input').placeholder = `${arrayNum.join().replace(/,/g, '')}`;
        console.log(arrayNum);
    }else{
        arrayNum.shift();
        document.getElementById('input').placeholder = '';
        console.log(arrayNum);
    }
};

const float = () => {
    if (arrayNum[arrayNum.length - 1] != '.' ) {
        document.getElementById('input').placeholder += '.';
        arrayNum.push('.');
        console.log(arrayNum);
    }else{
        console.log('This works.')
    };
};

const result = () => {
    const arrayResult = Math.round(eval(arrayNum.join().replace(/,/g, '')) * 10000000) / 10000000;
    document.getElementById('input').placeholder = arrayResult;
    console.log(arrayResult);
};