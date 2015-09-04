// now all we need is a block to create a scope
// this is opposed to var
// var a = 2;
// 
// {	let a = 3;
//     console.log( a );   // 3
// }
// put let at the top of the scope
// console.log( a );       // 2 


// ********************* npm  sensative careful on let usage*****************
// explicit block
// 
// let a = 2;

// if (a > 1) {
//     let b = a * 3;
//     console.log( b );       // 6

//     for (let i = a; i <= b; i++) {
//         let j = i + 10
//         console.log( j );
//     }
//     // 12 13 14 15 16

//     let c = a + b;
//     console.log( c );       // 8
// }
// 
	// let a = 5;

	// if(a>4) {
	// 	let b = 3 *5;
	// 	console.log(b);

	// 	for(let i =a; i<=10;i++) {
	// 		let j = i+5;
	// 		console.log(j);
	// 	}
	// }
	// 
	var funcs = [];

	for (let i = 0; i < 5; i++) {
	    funcs.push( function(){
	        console.log( i );
	    } );
	}

funcs[3]();     // 3