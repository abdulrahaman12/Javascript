// Using escape character

// let esca = ("Hey \"sheikh\" how are you ");
// document.write(esca);

// string inside string

// let esca = ("hi,hello,fine,how,when");
// let ecs = esca.indexOf('l');
// document.write(ecs);

// let esca = ("hi,hello,fine,how,when");
// let ecs = esca.lastIndexOf('i');
// document.write(ecs);

// slice

// let esca = ("hi,hello,fine,how,when");
// let ecs = esca.slice(5,-5);
// document.write(ecs);

// substring

// let esca = ("hi,hello,fine,how,when");
// let ecs = esca.substring(5);
// document.write(ecs);

// substr

// let esca = ("hi,hello,fine,how,when");
// let ecs = esca.substr(-4);
// document.write(ecs);

// Display 280 characrters

// let tweet = "fhidhfsdhlfkdnfgkds ujfisjlfkjsdlkfjsf odfjpsodjfplsdfj sdpf  op skf lsdkf lsdkfp jgopsdjfosdjfpsdjf lknfkjdfkjd s iohfdhfjdshf uhfdhjfhshf ihoaihfohofh iugwuyteuwyrieh fehfisahfjkahglk jsbgi f ighiahfjsdhfljd gfigjhiughj hgiu kfejrowejrwouidhg boihwhfjsd hfjbdjfhdskjfhjdshfbksl ";
// let tweets = tweet.slice(0,15);
// document.write(tweet.length);
// document.write(tweets);

// Replace string 

// let rep = "MS ENGINNERING COLLEGE";
// let reps = rep.replace('ENG','ing');
// document.write(reps);

// charAt 

// let pos = "Hey there kevin";
// let poe = pos.charAt(5);
// document.write(poe);

// charCodeAt

// let pos = "Hey there kevin";
// let poe = pos.charCodeAt(2);
// document.write(poe);

// let rep = "MS ENGINNERING COLLEGE";
// let reps = rep.toLowerCase("");
// document.write(reps);

// let rep = "ms enginnering college";
// let reps = rep.toUpperCase("");
// document.write(reps);

// let fname = "Abdul";
// let lname = " Rahaman";
// // document.write(fname + lname);
// // let con = fname.concat(lname);
// let con = (`${fname} ${lname} `);
// document.write(con);

// let rep = "              MS ENGINNERING COLLEGE       HELLO";
// let reps = rep.trim("");
// document.write(reps);

// var txt = "a,b,c,d,e";
// document.write(txt.split(","));

// Date and Time Methods

// let d = new Date();
// let currDate = d.toLocaleString(); // Display current date and time once.
// document.write(currDate);

// let d = new Date(); 
// document.write(d.getFullYear());
// document.write(d.getMonth());
// document.write(d.getDate());
// document.write(d.getDay());

// function myFunction(){
//     var t = new Date();
//     t.setMinutes(15); // To set hour , minute , second , millisecond
//     document.getElementById("demo").innerHTML = t;
// }
(function(myFunction){
    setInterval(() => {
        var d = new Date().toLocaleString();
        document.getElementById("demo").innerHTML = d;
    },1000)
})();

// var t = new Date().toLocaleTimeString();
// document.getElementById("time").innerHTML = t;

var d = new Date().toLocaleDateString();
document.getElementById("demo").innerHTML = d;

// var d = new Date().toLocaleString();
// document.getElementById("demo").innerHTML = d;

