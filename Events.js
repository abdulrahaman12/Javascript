// Second Way 
// const callingFunction = () => {
//     alert('Common way of writing functions');
// }
// // Third Way

// const thirdWay = document.getElementById('thirdWay');
// thirdWay.onclick = function(){
//     alert('Common way of writing functions again');
// }

// // Fourth Way


// const fourthWay = document.querySelector('#fourthWay');
// fourthWay.addEventListener('click', () => {
//     alert('I Love this way of writing');
// })
// Basic Events
function show(){
    document.write("Hello Everyone");
} 
// SetTimeOut & ClearTimeOut

// var id = setTimeout(Anim,5000);

// function Anim(){
//     var target = document.getElementById("test");
//     target.style.width = "350px";
// }
// Or
// var id = setTimeout(function(){
//         var target = document.getElementById("test");
//         target.style.width = "350px";
//     },5000);

// function stopAnimation(){
//     clearTimeout(id);
// }

// SetInterval & ClearInterval

// var a = 0;
// var id = setInterval(Anim, 1000);

// function Anim(){
//     a = a+10;
//     if(a == 200){
//         clearInterval(id);
//     }
//     else{
//         var target = document.getElementById("test");
//         target.style.marginLeft = a + 'px';
//     }
// }

