const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result = []; // To store the list of subarrays
  let currentSubarray = []; // To store the current subarray
  let currentSum = 0; // To track the sum of the current subarray

	for (let num of arr) {
		 // Check if the current number can be added to the current subarray
		if(currentSum+=num<=n){
			currentSubarray.push(num);
			currentSum+=num;
		}
		else{
			// If not, add the current subarray to the result
			result.push(currentSubarray);
			// Start a new subarray with the current number
           currentSubarray = [num];
           currentSum = num;
		}
	}

	// Add the last subarray if it's not empty
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }
  
  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
