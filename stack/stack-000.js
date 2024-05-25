Object.defineProperty(Array.prototype, "containsAll", {
    value: function containsAll(a) {
        return a.every(el => this.includes(el))
    }
});

multiplicationTable = function (size) {
    const result = []

    for (let i = 0; i < size; i++) {
        let array = []
        let int = 0;
        for (let j = 0; j < size; j++) {
            int = int + i + 1
            array.push(int)
        }
        result.push(array)
    }
 
    return result;
}

function mix(s1, s2) {
    function sortLetters(string) {
        const obj = {}

        for(let i = 0; i < string.length; i++) {
            if (string[i] === string[i].toLowerCase() && string[i].match(/[a-z]/i)) {
                if(obj[string[i]]) {
                    obj[string[i]] += 1
                } else {
                    obj[string[i]] = 1
                }
            }
        }
        return Object.fromEntries(Object.entries(obj).sort((a,b) => b[1] - a[1]))
    }

    const obj1 = sortLetters(s1);
    const obj2 = sortLetters(s2);

    let result = ''

    for(const out in obj1) {
        if(obj2[out] && obj2[out] > 1) {
            if(obj1[out] > obj2[out]) {
                result += `${result ? '/' : ''}1:${out.repeat(obj1[out])}` 
            }

            if(obj1[out] < obj2[out]) {
                result += `${result ? '/' : ''}2:${out.repeat(obj1[out] + 1)}`
            }
        }
    }

    for(const out in obj2) {
        if(obj1[out] && obj1[out] > 1) {
            if(obj1[out] === obj2[out]) {
                result += `${result ? '/' : ''}=:${out.repeat(obj1[out] )}`
            }
        }
    }
    return result;
}

export function maxSum(rows) {
    let sum = [];
    const field = 'value';

    if (rows) {
        sum = rows.reduce((acc, row) => {
            acc.push(row.metrics.reduce((memo, item) => memo + item[field], 0));
            return acc;
        }, []);
    }

    return sum.length ? Math.max(...sum) : null;
}