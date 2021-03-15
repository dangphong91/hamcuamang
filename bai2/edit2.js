let A = prompt("Nhập vào dãy số :")
let array = [];
for (let i = 0; i <= A.length -1; i++) {
    let j = i;
    array[j] = A[i];
}
// document.write(array);
for (j = 0; j <= array.length -1; j++) {
    if (array[j-1] % 2 == 0 && array[j] % 2 == 0) {
        array[j] = -1 * array[j];
    }
}
// document.write(array);
document.write(array.join(""));