module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tenToTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let stringNumber = String(number);
    let length = stringNumber.length;

    if (length === 1) return units[number];
    if (length === 2 && number < 20) return tenToTwenty[stringNumber[1]];
    if (length === 2 && number >= 20) return `${dozens[+stringNumber[0] - 2]}${stringNumber[1] === '0' ? '' : ' ' + units[stringNumber[1]]}`;
    if (length === 3) {
        if (number % 100 < 20 && number % 100 >= 10) {
            return `${units[stringNumber[0]]} hundred ${tenToTwenty[+stringNumber[2]]}`;
        } else if (number % 100 < 20 && number % 100 < 10) {
            return `${units[stringNumber[0]]} hundred${stringNumber[2] === '0' ? '' : ' ' + units[stringNumber[2]]}`;
        } else {
            return `${units[stringNumber[0]]} hundred ${dozens[+stringNumber[1] - 2]}${stringNumber[2] === '0' ? '' : ' ' + units[stringNumber[2]]}`;
        }
    }
}
