const pobj1 = new Promise ((resolve,reject) => {
    setTimeout(() => {
        let roll_no = [1,2,3,4,5]
      resolve(roll_no);
        //reject("Some error in downloading data.")
    } , 2000);
})

const getData = (indexData) => {
    return new Promise((resolve , reject) => {
        setTimeout((indexData) => {
            let data ={
                name : "ram",
                age : 30
            }
            resolve(`My roll no is ${indexData}. My name is ${data.name} and I am ${data.age} years old.`)
            // reject("Rollno 2 is not found...")
            
        }, 2000 , indexData);
    })
}

pobj1.then((rollno) => {
    console.log(rollno);
    return getData(rollno[1]).then((x) => {
        console.log(x);
       
    })

}) .catch (error => console.log(error))