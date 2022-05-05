function ParseArray(strArray) {
    var numArray, index;
    numArray = [];
    index = 0;
    while (index < strArray.length) {
        numArray[index] = parseFloat(strArray[index]);
        index = index + 1;
    }
    return numArray;
}

function Average(numArray) {
    var sum, index;
    sum = 0;
    index = 0;
    while (index < numArray.length) {
        sum = sum + numArray[index];
        index = index + 1;
    }
    return sum / numArray.length
}
function ShowAvg() {
    var str, strArray, numArray;
    str = document.getElementById('numBox').value;
    strArray = str.split(/[ ,]+/);
    numArray = ParseArray(strArray);

    document.getElementById('outputDiv').innerHTML = 'The average of [' + numArray + '] is ' + Average(numArray);
}

function showMax() {
    str = document.getElementById('numBox').value;
    strArray = str.split(/[ ,]+/);
    numArray = ParseArray(strArray);
    maxValue = Math.max(...numArray);
    document.getElementById('outputDiv').innerHTML = 'The maximum of [' + numArray + '] is ' + maxValue;
}
function showMin() {
    str = document.getElementById('numBox').value;
    strArray = str.split(/[ ,]+/);
    numArray = ParseArray(strArray);
    minValue = Math.min(...numArray);
    document.getElementById('outputDiv').innerHTML = 'The minimum of [' + numArray + '] is ' + minValue;
}
