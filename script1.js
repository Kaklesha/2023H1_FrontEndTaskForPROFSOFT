"use strict"
const sub = document.getElementsByClassName("about-me__info")[0];
let dump="ENG";
function translater(){
    
    sub.children[0].innerHTML="Hello  world";
    if (dump=="ENG"){
        sub.children[0].innerHTML="Привет, Я , Денис - UX/UI дизайнер из Мннска<br>"+
        "Я заинстересован в дизайне и всё что с ним связано<br><br>"+
        "Я учусь на курсе 'Веб и мобильный дизайн<br>"+
        "интерфейсов' в ИТ-Академии<br><br> Готов реализовывать"+ 
        "прекрасные проекты <br>с замечательными людьми.";
        dump="RU";}

        else if(dump=="RU"){
            sub.children[0].innerHTML="Hi, I'm Denis - UX/UI designer from Minsk.<br>"+
            "I'm interested in design and everything connected with it.<br><br>"+
           `I'm studying at courses Web and mobile design<br>`+
            `interfaces" in IT-Academy.<br><br>`+
           ` Ready to implement excellent projects<br>`+
            `with wonderful people.`;
        dump="ENG";
        }
};

let hour=0, min=0;


function timetotime(){
   hour  = new Date().getHours();
     min=new Date().getMinutes();
if((min.toString()).length==1) min="0"+min;
   sub.children[1].innerHTML="Updated: "+hour+":"+min;
   setTimeout(() => { 
    timetotime(); 
}, 6000);  //60000 оно будет рассинхрон ловить с реальным временем
} 
timetotime();
