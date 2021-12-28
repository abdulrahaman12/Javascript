// Fetching API using ajax for student roll, name, age, gender ----Fetching api's one inside another using callback functions. 

const getRollNo = () => {
    setTimeout( () => {
        console.log('API getting roll no');
        let roll_no = [1,2,3,4,5];
        console.log(roll_no);

        setTimeout((rollno) => {
            const biodata = {
                name : 'Sheikh',
                age : 26
            }
            console.log(`My roll no is ${rollno}. My name is ${biodata.name}.
             My age is ${biodata.age}`);

             setTimeout((name => {
                 biodata.gender ='male';
                 console.log(`My roll no is ${rollno}. My name is ${biodata.name}.
             My age is ${biodata.age}. I am an alpha ${biodata.gender}`);

             },2000,biodata.name);

        },2000,roll_no[1]);
    },2000);
}
getRollNo();