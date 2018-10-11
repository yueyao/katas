// stack

// last in first out

class Stack{
	
	constructor(){
		let items = [];
		this.items = items;
	}
	
	// add a element
	push(elements){
		this.items.push(elements);
	}
	// remove a  top element
	pop(){
		return this.items.pop();
	}
	
	// return top element
	peek() {
		return this.items[items.length-1];
	}
	// check is empty
	isEmpty() {
		return this.items.length === 0;
	}
	
	// clear
	clear(){
		return this.items.length = 0;
	}
	// return length
	size (){
		return this.items.length;
	}
	// print 
	print(){
		console.log(this.items.toString());
	}
	
	toString(){
		return this.items.join(',')
	}
	
	
}


let stack = new Stack();

stack.push(5);
stack.push(8);
stack.push(11);
stack.push(15);
stack.print();
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.pop());



// 
function divideBy2(decNumber){
	let remStack = new Stack();
	let rem;
	let binaryString='';
	
	while(decNumber>0){
		rem = Math.floor(decNumber % 2); //{2}
        remStack.push(rem); //{3}
        decNumber = Math.floor(decNumber / 2); //{4}
	}
	
	while(!remStack.isEmpty()){
		binaryString += remStack.pop().toString();
	}
	return binaryString;
}
console.log(divideBy2(10));

// 
function baseConverter(decNumber,base){
	let remStack = new Stack();
	let rem;
	let binaryString='';
	let digits = '0123456789ABCDEF';
	
	while(decNumber>0){
		rem = Math.floor(decNumber % base); 
        remStack.push(rem); 
        decNumber = Math.floor(decNumber / base); 
	}
	
	while(!remStack.isEmpty()){
		binaryString += digits[remStack.pop()];
	}
	return binaryString;
}
console.log(baseConverter(10,10));