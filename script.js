function display(val) {
    document.getElementById('result').value += val;
}

function calculate() {
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteChar() {
    var input = document.getElementById('result');
    input.value = input.value.substring(0, input.value.length - 1);
}