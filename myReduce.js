// Array.prototype.reduce( func )

Array.prototype.myReduce = function( func ){

	if( this.length === 0) return 'Empty aray';
	if( this.length === 1) return this[0];

	var valA = this[0];
	var valB = this[1];
	var valZ = func(valA, valB)
	var slicedArr = this.slice(2);
	slicedArr.unshift(valZ);
	return slicedArr.myReduce( func );
}


function suma( preValue, value ){
	return preValue + value;
}