let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);

setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000); 