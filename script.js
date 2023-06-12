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