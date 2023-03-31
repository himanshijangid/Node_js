//callback hell situation..........

//1 : after 2s student's roll no.
//2 : after 2s student's name and age
//3 : after 2s student's gender

const getRollNo = () => {
        setTimeout(() => {
            console.log ("roll No. Found");
            let roll_no = [1,2,3,4];
            console.log(roll_no);

            setTimeout((roll_no) => {
                const Data = {
                    name : "ram",
                    age : "23"
                }
                console.log(`person name ${Data.name} and person age ${Data.age}.`)

                setTimeout ((name) => {
                    Data.gender  = "Male" ;
                    console.log(`${Data.name} is ${Data.gender}`)
                }, 2000 , Data.name);

            } , 2000 , roll_no[1]);


        }, 2000);
}

getRollNo();