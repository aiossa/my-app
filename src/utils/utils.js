export let simpleCalculation = function simpleCalculation(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно из значений или оба не числа'
    }  else return a + b
}