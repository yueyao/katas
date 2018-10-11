// Array

let nums = [1,2,3,4,5,6,7,8,9];

nums.every((x)=>{
	return (x % 2 == 0) ? true : false;
})


nums.some((x)=>{
	return (x % 2 == 0) ? true : false;
})

nums.forEach((x)=>{
	console.log('forEach',(x % 2 == 0) )
})


let newNums = nums.map((x)=>{
	return (x % 2 == 0) ? true : false;
})

console.log('newNums',newNums);

let newNums2 = nums.filter((x)=>{
	return (x % 2 == 0) ? true : false;
})

console.log('newNums2',newNums);

let reduceNum = nums.reduce((pre,curr,index)=>{
	return pre + curr;
})

console.log('reduceNum',reduceNum)


// sort

var friends = [
    {name: 'John', age: 30},
    {name: 'Ana', age: 20},
    {name: 'Chris', age: 25}
];

function comparePerson(a, b){
    if (a.age < b.age){
        return -1
    }
    if (a.age > b.age){
        return 1
    }
    return 0;
}

console.log(friends.sort(comparePerson))

// string sort

var names =['Ana', 'ana', 'john', 'John'];

console.log(names.sort((a,b)=>{
	if (a.toLowerCase() < b.toLowerCase()){
        return -1
    }
    if (a.toLowerCase() > b.toLowerCase()){
        return 1
    }
    return 0;
}))

export default{
    init(){
        console.log('init')
    }
}
