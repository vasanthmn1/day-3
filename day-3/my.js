// ! resume Data in JASON format

let resume =[{
    "name":"vasanth",
    "age":"21",
    "skill": "HTML,css"

}]

// ! For Loop 


for (let i=0;i<resume.length;i++){
    console.log(resume[i]);
}

// ! foor in

for(key in resume){
    console.log(resume[key]);
}



for(let i =0;i<resume.length;i++){
    for(let key in resume[i]){
        console.log(key,resume[i][key]);
    }
}




