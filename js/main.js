const decInput = document.getElementById("decInput");
const binInput = document.getElementById("binInput");
const octInput = document.getElementById("octInput");
const hexInput = document.getElementById("hexInput");

let decimal, binary, octal, hexadecimal;

const hexValues = {
    A: '10', B: '11', C: '12', D: '13', E: '14', F:'15'
}

const decToBin = (dec) => {
    let bin = 0;
    let rem;
    let i = 1;
    while (dec != 0) {
        rem = dec % 2;
        dec = parseInt(dec / 2);
        bin = bin + rem * i;
        i *= 10;
    }
    return bin;
}

const binToDec = (bin) => {
    let dec = 0;
    let rem;
    let i = 0;
    while (bin != 0) {
        rem = bin % 10;
        bin = parseInt(bin / 10);
        dec = dec + rem * Math.pow(2, i);
        ++i;
    }
    return dec;
}

const decToOct = (dec) => {
    let oct = 0;
    let rem;
    let i = 1;
    while (dec != 0) {
        rem = dec % 8;
        dec = parseInt(dec / 8);
        oct = oct + rem * i;
        i *= 10;
    }
    return oct;
}

const octToDec = (oct) => {
    let dec = 0;
    let rem;
    let i = 0;
    while (oct != 0) {
        rem = oct % 10;
        oct = parseInt(oct / 10);
        dec = dec + rem * Math.pow(8, i);
        ++i;
    }
    return dec;
}

const getHexChar = (value) => {
    return Object.keys(hexValues).find(key => hexValues[key] === value);
}

const reverse = (stringValue) => {
    let revValue = [];
    let j = 0;
    for(let i = stringValue.length - 1; i >= 0; i--) {
        revValue[i] = stringValue[j];
        j++;
    }
    return revValue.toString().replaceAll(',', '');
}

const decToHex = (dec) => {
    let hex = '';
    let hexChar;
    let rem;
    while (dec != 0) {
        rem = dec % 16;
        if(rem > 9) {
            hexChar = getHexChar(rem.toString());
        } else {
            hexChar = rem.toString();
        }
        dec = parseInt(dec / 16);
        hex = hex + hexChar;
    }
    return reverse(hex);
}

const hexToDec = (hex) => {
    let hexNum;
    let hexChar;
    let dec = 0;
    let j = 0;
    for(let i = hex.length - 1; i >= 0; --i) {
        if(hex[i].match(/[a-zA-Z]/i)) {
            hexChar = hex[i].toUpperCase();
            hexNum = parseInt(hexValues[hexChar]);
        } else {
            hexNum = parseInt(hex[i]);
        }
        dec = dec + hexNum * Math.pow(16, j);
        j++;
    }
    return dec;
}

const binToOct = (bin) => {
    return decToOct(binToDec(bin));
}

const octToBin = (oct) => {
    return decToBin(octToDec(oct));
}

const binToHex = (bin) => {
    return decToHex(binToDec(bin));
}

const hexToBin = (hex) => {
    return decToBin(hexToDec(hex));
}

const octToHex = (oct) => {
    return decToHex(octToDec(oct));
}

const hexToOct = (hex) => {
    return decToOct(hexToDec(hex));
}

decInput.addEventListener("input", (event) => {
    const regexDec = /^[0-9]{1,100}$/g;
    const checkDec = regexDec.test(decInput.value);
    if (decInput.value != ''){
        if(!checkDec){
            decInput.style.borderColor = 'red';
            binInput.value = '';
            octInput.value = '';
            hexInput.value = '';
        } else {
            decInput.style.borderColor = '#a0edef';
            decimal = parseInt(decInput.value);
            binInput.value = decToBin(decimal).toString();
            octInput.value = decToOct(decimal).toString();
            hexInput.value = decToHex(decimal).toString();
        }
    } else {
        binInput.value = '';
        octInput.value = '';
        hexInput.value = '';
    }
})

binInput.addEventListener("input", (event) => {
    const regexBin = /^[0-1]{1,1000}$/g;
    const checkBin = regexBin.test(binInput.value);
    if (binInput.value != ''){
        if(!checkBin){
            binInput.style.borderColor = 'red';
            decInput.value = '';
            octInput.value = '';
            hexInput.value = '';
        } else {
            binInput.style.borderColor = '#a0edef';
            binary = parseInt(binInput.value);
            decInput.value = binToDec(binary).toString();
            octInput.value = binToOct(binary).toString();
            hexInput.value = binToHex(binary).toString();
        }
    } else {
        decInput.value = '';
        octInput.value = '';
        hexInput.value = '';
    }
})
octInput.addEventListener("input", (event) => {
    const regexOct = /^[0-7]{1,100}$/g;
    const checkOct = regexOct.test(octInput.value);
    if (octInput.value != ''){
        if(!checkOct){
            octInput.style.borderColor = 'red';
            decInput.value = '';
            binInput.value = '';
            hexInput.value = '';
        } else {
            octInput.style.borderColor = '#a0edef';
            octal = parseInt(octInput.value);
            decInput.value = octToDec(octal).toString();
            binInput.value = octToBin(octal).toString();
            hexInput.value = octToHex(octal).toString();
        }
    } else {
        decInput.value = '';
        binInput.value = '';
        hexInput.value = '';
    }
})

hexInput.addEventListener("input", (event) => {
    const regexHex = /^[a-fA-F0-9]{1,100}$/g;
    const checkHex = regexHex.test(hexInput.value);
    if (hexInput.value != ''){
        if(!checkHex){
            hexInput.style.borderColor = 'red';
            decInput.value = '';
            binInput.value = '';
            octInput.value = '';
        } else {
            hexInput.style.borderColor = '#a0edef';
            hexadecimal = hexInput.value;
            decInput.value = hexToDec(hexadecimal).toString();
            binInput.value = hexToBin(hexadecimal).toString();
            octInput.value = hexToOct(hexadecimal).toString();
        }
    } else {
        decInput.value = '';
        binInput.value = '';
        octInput.value = '';
    }
})