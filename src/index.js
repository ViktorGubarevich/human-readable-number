module.exports = function toReadable(number) {

    const ones = new Map([
        [0, 'zero'],
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine'],
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen'],
    ]);

    const tens = new Map([
        [2, 'twenty'],
        [3, 'thirty'],
        [4, 'forty'],
        [5, 'fifty'],
        [6, 'sixty'],
        [7, 'seventy'],
        [8, 'eighty'],
        [9, 'ninety'],
    ]);

    function dual(num) {

        if (num <= 19) {
            return ones.get(num);
        } else if (String(num)[1] == '0') {
            return tens.get(Number(String(num)[0]));
        } else {
            return tens.get(Number(String(num)[0])) + ' ' + ones.get(Number(String(num)[1]));
        }
    }

    function ternary(num) {
        if (String(num)[1] + String(num)[2] == '00') {
            return (ones.get(Number(String(num)[0])) + ' ' + 'hundred');
        } else {
            return (ones.get(Number(String(num)[0])) + ' ' + 'hundred' + ' ' + dual(Number(String(num)[1] + String(num)[2])));
        }
    }

    switch (String(number).length) {
        case 1:
            return ones.get(number);
        case 2:
            return dual(number);
        case 3:
            return ternary(number);
    }
}
