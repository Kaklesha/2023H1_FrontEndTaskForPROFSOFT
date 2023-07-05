/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


//const del = document.querySelector('promo__adv-title')
//const del = document.getElementsByClassName('promo__adv-title');


// const del = document.querySelector('.promo__adv')
// // console.log(del);
// const btns = del.getElementsByTagName('img');

// console.log(btns);

// btns.forEach(element => {
//     element.remove();
// });

//.removeChild();
//del.removeChild()
// for (let index = btns.length-1; index >=0; index--) { 
//    // delete(btns[index])
//    //console.log(btns[index].removeChild());
//    //btns[index].remove();
//    del.removeChild(btns[index])
// }  //true

// const myNode =  document.querySelector('.promo__adv')
//   while (myNode.firstChild) {
//     myNode.removeChild(myNode.lastChild);
//   }


// console.log(btns);  

//wrapper.removeChild(hearts[2]);

// //hearts.removeChild(hearts[2]);


//del.innerHTML=''  //true

//btns.removeChild();
//delete(btns)
//del.removeChild();

// const com = document.getElementsByClassName("promo__genre")
// console.log(com);
// com[0].innerHTML="Drama"

// const bg = document.querySelector('.promo__bg')

// //bg.style.width = '50%' 
// //bg.style.backgroundImage="../img/bg.jpg";

// bg.style.backgroundImage="url(img/bg.jpg)"; // specify the image path here


// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// //promo__interactive-list
// //promo__interactive-item
// //<div class="delete"></div>
// const main = document.querySelector('.promo__interactive-list')
// const item = main.querySelectorAll('.promo__interactive-item')
// // movieDB.movies.sort().forEach(element => {
// // console.log(element);
// // });


//___Удаление рекламы______________
// console.log(item);

// while(main.firstChild){
//     main.removeChild(main.lastChild);

// }
//______________________________
// //Версия автора
// const adv = document.querySelectorAll('.promo__adv img'),
//     poster = document.querySelector('.promo__bg'),
//     genre = poster.querySelector('.promo__genre'),
//     movieList = document.querySelector('.promo__interactive-list');
// //  1 task
//     adv.forEach(item => {item.remove();});
// //2 task
//     genre.textContent='Драма'
// //3 task
//     poster.style.backgroundImage='url("img/bg.jpg")';
// //4
//     movieList.innerHTML="";
// //movieDB.movies.sort()
//     movieDB.movies.sort().forEach((film, i)=>{
//         movieList.innerHTML+=`
//         <li class="promo__interactive-item">
//         ${i+1} ${film}
//         <div class="delete"></div>
//         </li>
//         `;
//     });
//4---------------------------

// movieDB.movies.sort().forEach(element => {
// const itemli = document.createElement('li');
// itemli.classList.add("promo__interactive-item");
// console.log(element);

// //itemli.insertAdjacentHTML('afterend',` ${element} <div class="delete"></div>`)
// itemli.innerHTML=` ${element} <div class="delete"></div>`;
// main.append(itemli);
// //ite.innerHTML = "<p>Hello world<p>";
// });

//---end-4----------------------------------
// div.insertAdjacentHTML('afterbegin','<h2>hell</h2>')

//const div = document.createElement('div');

// div.classList.add('black');

// wrapper.append(div);

// div.innerHTML = "<p>Hello world<p>";

// //div.textContent= "Hello";

// div.insertAdjacentHTML('beforebegin','<h2>hell</h2>')

// 04.07.23 


document.addEventListener('DOMContentLoaded', ()=>{

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');
//  1 task
const addForm=document.querySelector('form.add'),
addInput=addForm.querySelector('.adding__input'),
checkbox=addForm.querySelector('[type="checkbox"]');


   const deleteAdv= (arr)=>{

       arr.forEach(item => {item.remove();});
   };




   const makeChanges=()=>{
    //2 task
    genre.textContent='Драма'
    //3 task
    poster.style.backgroundImage='url("img/bg.jpg")';

   };
   

    movieList.innerHTML="";
//movieDB.movies.sort()
    movieDB.movies.sort().forEach((film, i)=>{
        movieList.innerHTML+=`
        <li class="promo__interactive-item">
        ${i+1} ${film}
        <div class="delete"></div>
        </li>
        `;
    });    

  
    addForm.addEventListener('submit',(event)=>{
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if(newFilm){

            if(newFilm.length>21)
                {
                    newFilm=`${newFilm.substring(0,22)}...`
                }


            if(favorite){
console.log("Добавляем любимый фильм");
 }

        movieDB.movies.push(newFilm);
        sortArr( movieDB.movies);
        createMovieList(movieDB.movies,movieList);
        }
       // addForm.reset();
        event.target.reset();
    })

        const sortArr=(arr)=>{
            arr.sort();
        };
       
    function createMovieList(films, parent){
        parent.innerHTML="";
        sortArr( films);
        //movieDB.movies.sort()
        films.forEach((film, i)=>{
                parent.innerHTML+=`
                <li class="promo__interactive-item">
                ${i+1} ${film}
                <div class="delete"></div>
                </li>
                `;
            });    


            document.querySelectorAll('.delete').forEach((btn,i) => {
                btn.addEventListener('click',()=>{
                    btn.parentElement.remove();
                    movieDB.movies.splice(i, 1);
                    createMovieList(movieDB.movies,movieList);
                })
            });
    }
    
    
    deleteAdv(adv);
    makeChanges();
    
    createMovieList(movieDB.movies,movieList);

})

//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener("DOMContentLoader", ()=>{
    const box = docement.querySelector('.box');

    box.addEventListener('touchstart',(e)=>{
        e.preventDefault();
console.log(        start
);    })
})

