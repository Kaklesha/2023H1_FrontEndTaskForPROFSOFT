"use strict"

    let countStep=0; //This was idea for complexity of algorithms 
    // But I don't have free time now. 

var array = [1,16,23,2,25,14,32,3,90,24];

function inAscedingOrder(array){
    let dump=0; //This is sub variable for sorting #this isn't copy paste a comment#

    for (let i = 0; i < array.length; i++) 
    {
         for (let j = 0; j < array.length; j++) 
         {
            if(array[j]>array[j+1])
            {

                dump = array[j];
                array[j]=array[j+1];
                array[j+1]=dump;

                countStep++;
            }
            
         }
        
    }

};


function inDescedingOrder(array){
    let dump=0; //This is sub variable for sorting #this isn't copy paste a comment#

    for (let i = 0; i < array.length; i++) 
    {
         for (let j = 0; j < array.length; j++) 
         {
            if(array[j]<array[j+1]) //here was changed a char > on < 
            {

                dump = array[j];
                array[j]=array[j+1];
                array[j+1]=dump;

                countStep++;
            }  
         }   
    }
};
//console.log(`CountStep ${countStep} `);

function isShowArray(array)
{
    console.log("_______") // It's for visual control
    array.forEach(element => {
        console.log(element);
    });

    
}
//For testing this task_1 You need Uncommented these lines
// inAscedingOrder(array);
// isShowArray(array);
// inDescedingOrder(array);
// isShowArray(array);


//Task_2 (Algorihtms) Description about mistekes in progress coding:
//В общем, как понимаю из Вашего примера A->C->L  , но L нету в качестве ключа лишь в качетве значения ложенного array

//Для удобства list.A list.L etc. были приведены к виду "A","L"
// т.к не понимаю как на JS без танцев с бубном реализовать это корректно (Ещё юн - исправлюсь)
//при попытке, получается стрельба из лазера со спутника по лягушкам -___-

var list = {A:["B","C"],B:["D","F"],C:["K","L"],D:["M","N"],E:["P","X"],F:["Y","Z"]};

//      console.log( pathExist(list, 'A', 'L' ));   //TRUE
//      console.log( pathExist(list, 'E', 'F' )); //FALSE
let visited = new Set();

function pathExist(list, head  , tail )
{
    

    if(head===tail) return true;
    if(visited.has(head)) return false;

	// list - смежный список
	// head - посещенный узел (вершина)
	// tail - пункт назначения

	// это общие случаи
	// либо достигли пункта назначения, либо уже посещали узел
	if(head === tail) return true;
	if(visited.has(head)) return false;
    if(list[head]==undefined) return false; //если у узла нету смежного
	// помечаем узел как посещенный
	visited.add(head);

	// исследуем всех соседей (ближайшие соседние вершины) 
	for(let neighbor of list[head]) {
		// если сосед не посещался
		
			// двигаемся по пути и проверяем, не достигли ли мы пункта назначения
			// возвращаем true, если достигли
			if(pathExist(list,neighbor,tail)) return true;
		//}
	}
	// если от head до tail добраться невозможно
	return false
    }
    //For testing this task_2 You need Uncommented these lines
    //console.log( pathExist(list, 'A', 'L' ));  
    //console.log( pathExist(list, 'E', 'F' ));

//Task_3 (Algorithms) Description: 


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

    var my_array = [];
 
    for (var i = 1; i <= 100; i+=10) {
       my_array.push(i+getRandomInt(10));
    }
 
    console.log(my_array)

    
   // [9, 11, 30, 34, 49, 53, 61, 77, 85, 91]
   let arr= [0, 9, 11, 30, 34, 49, 53, 61, 77, 85, 91, 100];

//    function InterpolationSearch(t,A)          // t - искомый элемент,
// {                                          // A - упорядоченный массив, в котором ищем.
//     var mid, low = 0, high = A.length-1;

//     while (A[low] < t && A[high] > t)
//     {  mid = low + Math.floor( ((t-A[low])*(high-low))/(A[high]-A[low]) );
//        if (A[mid] < t) low = mid+1;
//        else if (A[mid] > t) high = mid-1;
//        else return mid;
       
//     }

//     if (A[low] === t) return low;           // На выходе индекс искомого элемента.
//     else if (A[high] === t) return high;    // Если искомого элемента нет в массиве, то -1.
//     else return null;
// }

//console.log(InterpolationSearch(49,arr));

function BinarySearch(t,A)       // t - искомый элемент,
{                                // A - упорядоченный массив, в котором ищем.
    let i = 0, j = A.length, k; 
                                 
    while (i < j)                
    {  k = Math.floor((i+j)/2);
       if (t <= A[k]) j = k; // поиск в первой половине
       else i = k+1;  // во второй
    }
   
    if (A[ i ] === t) return i;     // На выходе индекс искомого элемента.
    else return null;                 // Если искомого элемента нет в массиве, то -1.
}

console.log(BinarySearch(49,arr));

console.log('Hello');


// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }



//-next-task1 // kaata 6
let names = ["Alex", "Jacob", "Mark", "Max"];

function likes(names){

if(names===null||names===undefined||names.length===0) return "no one likes this";
if(names.length===1){
    return `${names[0]} likes this`;  //"Peter likes this"
}
if(names.length===2){
    return `${names[0]} and ${names[1]} likes this`;  //"Peter likes this"
}
if(names.length===3){
    return `${names[0]}, ${names[1]} and ${names[2]} likes this`;  //"Peter likes this"
}

return `${names[0]}, ${names[1]} and ${names.length-2} others likes this`;  //"Peter likes this"
};
console.log(likes(names));

//-next-task2

let deleteNth=(list, n) => { 

let sublist=[];
    let map = {};

    list.forEach(element => {
        if(element in map)
            {
                map[element]++;
                if(map[element]<=n){
                   sublist.push(element);   
                }
            } 
            else {
                map[element]=1;
                sublist.push(element);
                }
    });
return sublist;
};

// console.log(deleteNth([20,37,20,21], 1));
// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));
  
//-next-kata-7
let rowSumOddNumbers = (n) => {
	// TODO
    let count=-1;
    let sub=0;
  for (let index = 0; index <= n; index++) {
    //const element = array[index];
    console.log(`__${index}__`)
    for (let j = 0; j < index; j++) {
        
       // const element = array[j];
        console.log(count+=2)
        if(index===n){
            sub+=count;
        }
    }
  }
  return sub;
}

// assert.strictEqual(rowSumOddNumbers(1), 1);
// assert.strictEqual(rowSumOddNumbers(42), 74088);

//console.log(`solution=${rowSumOddNumbers(42)}`);

//-next-kata-6

// assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
// assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
// assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);


let findUniq = (arr) =>{
 let result=0
 let map={};

arr.forEach(element => {
    
    if(element in map){
        map[element]++;
    }
    else
    {
        map[element]=1;
    }
});
    for (let index = 0; index < arr.length; index++) {
       if (map[arr[index]]===1) {result=arr[index]; break}
    }
    return result;
}

// console.log(`____${findUniq([ 1, 1, 1, 2, 1, 1 ])}`);
// console.log(`____${findUniq([3, 10, 3, 3, 3  ])}`);
// console.log(`____${findUniq([ 1, 0, 0])}`);
// console.log(`____${findUniq([ 0, 1, 0])}`);
// console.log(`____${findUniq([ 0, 0, 1])}`);


//-next-kata-6

// doTest('XXI', 21);
// 		doTest('I', 1);
// 		doTest('IV', 4);
// 		doTest('MMVIII', 2008);
// 		doTest('MDCLXVI', 1666);

// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

let doTest = (str)=>{
    let solution=0;
    let map={
        'I':1, 'L':50,
        'V':5, 'C':100,
        'X':10, 'D':500, 'M':1000
    }
    // str.forEach(element => {
    //     if(element in map){
    //         solution+=map[element];
    //     }
    // });

    for (let index = 0; index < str.length; index++) {
       
        if(str[index] in map)
        {
            if(str[index]==="I")
            {
                if(index!=0)
                {
                    // if(str.length!=1&&index!=str.length&&str[index+1]!="I")
                    // {    //DCLXIX

                    //   solution-=map[str[index]]  
                    // }
                    // else solution+=map[str[index]];


                   // if(str.length-1!=index+1)
                   if(index+1<str.length)
                    {
                        if(str[index+1]==='I')
                        {solution+=map[str[index]];}
                        else{solution-=map[str[index]];}
                    }
                    else solution+=map[str[index]];
                }
                else solution+=map[str[index]];
            }
            else solution+=map[str[index]];        
        }
    }
    return solution;
}
 console.log(doTest('MMVIII'));
 console.log(doTest('MDCLXVI'));
console.log(doTest('IV'));
 console.log(doTest('I'));
 console.log(doTest('XXI'));
 console.log(doTest('DCLXIX'));
 //DCLXIX: expected 671 to equal 669

//  for (let index = 0; index < str.length; index++) {
       
//     if(str[index] in map)
//     {
//         if(str[index]==="I"&&index==0)
//         {
//             if(str.length!=1)
//             {
//               solution-=map[str[index]]  
//             }
//             else
//             {
//                 solution+=map[str[index]];
//             }  
//         }
//         else{
//                solution+=map[str[index]];
//         }

//     }
// }
