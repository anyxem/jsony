describe("JSONY", function() {


  testCases = [
	  {
	  	string: "{ hello: \"world\" }",
	  	object: { hello: "world" }
	  },
	  {
	  	string: "{ age: 10, height: 120 }",
	  	object: { age: 10, height: 120 }
	  },
	  {
	  	string: "{ people: [\"Ann\", \"Alice\", \"Bob\"] }",
	  	object: { people: ["Ann", "Alice", "Bob"] }
	  },
	  {
	  	string: "{ config: { servers: [10, 15, 13], ngnix: { gate: 0, ip: \"127.0.0.1\" } } }",
	  	object: { 
		            config: { 
		                servers: [10, 15, 13], 
		                ngnix: { 
		                   gate : 0, 
		                   ip: "127.0.0.1"
		                }
		            } 
		        }
	  }


	  
  ];


  function makeTest( currentCase ){
  	  it("пример " + currentCase.string, function() {
	  	var jsony = new JSONY();
	  	var obj = { hello: "world" };
	  	assert.deepEqual( jsony.parse(currentCase.string) , currentCase.object , ' is fine!' );	
	  });
  }


  for( var i = 0 , testLength = testCases.length ; i < testLength ; i++ ){
  	makeTest( testCases[i] );
  }  

});