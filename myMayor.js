Array.prototype.myMajor = function( num ){
	var result = [];
	for (var i = 0; i < this.length; i++) {
		if (this[i] > num){
			result.push(this[i]);
		}
	}
	return result;
}


[1,2,3,4,5].filter(function(n) { return n > 3})


function hola( n ) { return  n > 3;}
[1,2,3,4,5].filter( hola );