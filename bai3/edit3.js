let A = prompt("Nhập vào 1 đoạn văn bản :");
let arr = [];
for (i = 0; i <= A.length -1; i++) {
    let j = i;
    arr[j] = A[i];
}
for (j = 0; j < arr.length -1; j++) {
    if (arr[j] == arr[j].toLowerCase()) {
        arr[j] = arr[j].toUpperCase();
    } else {
        arr[j] = arr[j].toLowerCase();
    }
}
document.write(arr.join(""));