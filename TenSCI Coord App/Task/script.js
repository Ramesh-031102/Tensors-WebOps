fetch('https://swapi.dev/api/people/?format=json').then((data)=>{
    return data.json();
}).then((obj)=>{
    let data1 = "";
    arr = obj["results"];
    let i = 0;
    arr.map((values)=>{
        i++;
        if(i!=10){
            data1 += `<div class="card"> 
            <h1 class="name">${values.name}</h1> 
            <p class="height">Height: ${values.height}</p> 
            <p class="mass">Mass: ${values.mass}</p> 
            <p class="birthyr">Birth Year: ${values.birth_year}</p> 
            <p class="gender">Gender: ${values.gender}</p> </div>`;
        } 
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})