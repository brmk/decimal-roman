class RomanToDecimal  {
	constructor(){
		this.decimals = [1, 5, 10, 50, 100, 500, 1000];
		this.romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
	}

	_tokenToDecimal(token){
		let rIndex = this.romans.indexOf(token);
		if(rIndex === -1){
			throw `Unexpected token ${token}`
		}
	    let decimal = this.decimals[rIndex];
	    return decimal;
	}

	convert(roman = ''){
		let result = 0, 
			i = 0;

		while (i < roman.length) {
			const decimal = this._tokenToDecimal(roman[i]);
		    let nextTokenDecimal = 0;

		    //if current token is not last
		    if(i+1 < roman.length){
			    nextTokenDecimal = this._tokenToDecimal(roman[i]);
		    }
		    
		    if (decimal < nextTokenDecimal) {
		    	result += nextTokenDecimal - decimal;
		    	//skip next token
			    i++;
			} else {
				result += decimal;
			}

		    i++;
		}

		return result;
	}
}

let converter = new RomanToDecimal();

try{
	console.log(converter.toDecimal('MMXVI'));
} catch(error){
	console.log(error);
}
