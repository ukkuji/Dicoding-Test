function bubbleSort(arr, n) {
  let i, j, temp;

  // Outer loop: jumlah pass
  for (i = 0; i < n - 1; i++) {
    // Inner loop: bandingkan elemen bersebelahan
    for (j = 0; j < n - i - 1; j++) {
      // Jika elemen sekarang lebih besar dari sebelah kanan
      if (arr[j] > arr[j + 1]) {
        // Swap
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}


// Function to print an array
// Dont change this part
function printArray(arr, size) {
  let i;
  for (i = 0; i < size; i++) console.log(arr[i] + " ");
}

// Driver program
// Dont change this part
let arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length;
bubbleSort(arr, n);
console.log("Sorted array: ");
printArray(arr, n);
