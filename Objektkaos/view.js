
updateView()
function updateView(){
    let yada = document.getElementById('app'); 

    for(let bike of bicycles){
        yada.innerHTML += LedigEllerIkkeLOL(bike)
    }
}



function LedigEllerIkkeLOL(sykkel){
    console.log(sykkel)
    if(sykkel.isAvailable){
        return sykkel.id + ': Er ledig 🟢' +`<button onclick="LeiSykkel(${sykkel.id})">Leie sykkel</button>`
    }
    else{
        return sykkel.id + ': Ikke ledig 🔴'
    }
}

function LeiSykkel(sykkelId){
  for(let i = 0; i<bicycles.length; i++){
        if(bicycles[i].id == sykkelId){
            bicycles[i].isAvailable = false;
        } 
  }
   /// let result =  bicycles.filter(bike => bike.id == sykkelId)
   //console.log(result)
}