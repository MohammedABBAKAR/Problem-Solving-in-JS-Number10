//Create a function which returns the number of true values there are in an array.


/*Examples

countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0*/



function countTrue(arr) {
    if(arr==null) return 0
	 return arr.filter(e => e == true).length
}
countTrue([true, false, false, true, false])
console.log(countTrue([false, false, false, false]))