// const fetchData = (callback) => {
//     setTimeout(() => {
//         callback("data downloaded");
//     } , 3000)
// }
// setTimeout (() => {
//     console.log("timer is done !");
//     fetchData (text => {
//         console.log(text);
//     })
// },5000);

// console.log("hello world");

const fetchData = ()=> {
    const promise = new Promise((resolve , reject ) => {
        setTimeout(() => {
            resolve("data downloaded");
        },2000);
    })
    return promise;
}

setTimeout(() => {
    console.log('Timer is done !');
    fetchData()
        .then(text => {
            console.log(text)
                return fetchData();
        }
    )
        .then(text2 => {
            console.log(text2);
    })
    
}, 3000);
console.log("Hello");
console.log("Hi!!!");