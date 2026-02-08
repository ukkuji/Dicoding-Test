function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (high>=low) {
    // cari index tengah
    mid = Math.floor((low+high) / 2);

    // jika ketemu
    if (arr[mid]===x) {
      return mid;
    }

    // jika x lebih kecil, geser ke kiri
    if (arr[mid]> x) {
      high = mid- 1;
    } 
    // jika x lebih besar, geser ke kanan
    else {
      low = mid+ 1;
    }
  }

  // jika tidak ketemu
  return -1;
}

// Driver Code
let arr = [2, 3, 4, 10, 40];
let x = 50;

let result = binarySearch(arr, x);

if (result == -1) {
  console.log("Element is not present in array");
} else {
  console.log("Element is present at index " + result);
}
