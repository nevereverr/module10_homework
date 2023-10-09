const array = [3, 3, 3];

if (array.length === 0) {
    console.log("true");
} else {
    const firstElement = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] !== firstElement) {
            console.log("false");
            break;
        }

        if (i === array.length - 1) {
            console.log("true");
        }
    }
}