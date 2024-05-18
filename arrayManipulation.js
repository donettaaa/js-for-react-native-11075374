function processArray(numbers) {
   const result = [];
   
   for (const num of numbers) {
    if (num % 2 === 0) {
        result.push(num * num);
    } else {
        result.push(num * 3);
    }
   }
   return result;
}

function formatArrayStrings(strings, processedNumbers) {
    const result = [];

    for (let i = 0; i < strings.length; i++) {
        const str = strings[i];
        const num = processedNumbers[i];

        if (num % 2 === 0) {
            result.push(str.toUpperCase());

        } else {
            result.push(str.toLowerCase());

        }
    }
    return result;
}