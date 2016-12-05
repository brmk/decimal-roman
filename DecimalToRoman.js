class DecimalToRoman  {
	constructor(){
		this.decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
		this.romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	}

	convert(input = 0) {
		let decimal = parseInt(input);

		if(window.isNaN(decimal)){
			throw `Unexpected type of input ${typeof input}`;
		}

		let result = '';

	    this.romans.forEach((roman, index)=>{
	    	while (decimal >= this.decimals[index]) {
    	        result += roman;
    	        decimal -= this.decimals[index];
    	    }
	    });

	    return result;
	
	} 
}

let converter = new DecimalToRoman();

try{
	console.log(converter.convert(2016));
} catch(error){
	console.log(error);
}
