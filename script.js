"use strict"

    let countStep=0; //This was idea for complexity of algorithms 
    // But I don't have free time now. 

let array = [1,16,23,2,25,14,32,3,90,24];

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


inAscedingOrder(array);

isShowArray(array);

inDescedingOrder(array);

isShowArray(array);




