
Learning JavaScript Data Structures and Algorithms 
==========
(学习JavaScript数据结构与算法)


#### Stack
[stack](chapter3/index.js)
```
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
	
```