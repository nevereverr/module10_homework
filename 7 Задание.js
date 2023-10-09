const arr = [0, 1, 2, 3, 4, null]

let evenNums = 0

let oddNums = 0

let nullNums = 0

for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 0 || arr[i] == null) {
        nullNums++
    } else if (arr[i] % 2 === 0 && arr[i] !== 0) {
        evenNums++
    } else
        oddNums ++
}

console.log(nullNums)
console.log(evenNums)
console.log(oddNums)