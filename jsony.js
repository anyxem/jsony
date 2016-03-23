;(function(){

	var JSONY = function(){
		this.input = '';
		this.output = {};
	};

	JSONY.prototype.parse = function(string){

		this.input = string;

		var tmpObj = {};

		//string: "{ hello: \"world\" }",
	  	//object: { hello: "world" }

	  	// clean spaces
	  	this.input = this.input.split(' ').join('');

	  	// unescape quotes
	  	this.input.replace(new RegExp('\\"', 'g'),'"');
		
	  	// clean braces
	  	this.input = this.input.substr(1 , this.input.length - 2);



	  	// break by elements
	  	if( this.input.indexOf(',') > -1){

	  	}else{
	  		key = this.input.split(':')[0];
	  		if( typeof this.input.split(':')[1] == 'string' )
	  		{
	  			value = this.input.split(':')[1];
	  			value = value.substr(1 , value.length - 2)
	  		}else{
	  			value = this.input.split(':')[1];
	  		}

	  		tmpObj[key] = value;
	  	}

	  	console.log(tmpObj);

	  	this.output = tmpObj;

		return this.output ;

	}



	window.JSONY = JSONY;

})()