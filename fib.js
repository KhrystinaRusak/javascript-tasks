function isFib(n) {
    if (n === 1) {
        return [0, 1];
    } else {
        let arr = isFib(n - 1);
        arr = [...arr, arr[arr.length - 1] + arr[arr.length - 2]];
        return arr;
    }
}

console.log(isFib(3));