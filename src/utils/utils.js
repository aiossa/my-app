export let simpleCalculation = function simpleCalculation(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно из значений или оба не числа'
    }  else return a + b;
}

export let compareTwoNumbers = function compareTwoNumbers(inp1, inp2) {
    if (Math.abs(inp1)> Math.abs(inp2)) return inp1
    else return inp2
}