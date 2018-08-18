var arr = [4, 5, 6, 8, 1, 2, 10];
function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] % 2 == 1) {
                let currentVal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = currentVal;
            }
        }
    }
}
sort(arr);
console.log(arr)