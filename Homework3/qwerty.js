
;(function () {
 //6. Додаткове завдання
	console.log( 'Вирахувати кількість води' );

	var heightRocks = [2,1,5,0,3,4,7,2,3,1,0]; // 1+5+2+1+1=10

	function amountWater(arr) {
		var sum = 0,
			noWater = 0;

		if(arr.length < 2) return noWater;


		while(arr.length> 1) {

			if(arr[0] >= Math.max.apply(null, arr)) {
				arr.reverse();
			} else if(arr[0] <= arr[1]) {
				arr.shift();
			} else {
				while(arr[0] >arr[1] &&arr[0] <Math.max.apply(null, arr)) {
					sum += arr[0] - arr[1];
					arr.splice(arr.indexOf(arr[1]), 1);
				}
			}
		}
		return sum;
	}

	console.log(amountWater(heightRocks) ); // 10
	console.log(amountWater([0,3,4,7,2,3,1,0]) ); // 1
	console.log(amountWater([1,2,6,2,1,5]) ); // 7
	console.log(amountWater([0,1,2,3,2,1,0]) ); // 0
	console.log(amountWater([1]) ); // 0


})();
