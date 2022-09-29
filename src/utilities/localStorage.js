function setLocalRest(rest){
    let totalRest=localStorage.getItem("Rest")
  if(totalRest){
    totalRest=rest
    localStorage.setItem("Rest",rest)
  }else{

    localStorage.setItem("Rest",rest)
  }
}
function getLocalRest(){
    let totalRest=localStorage.getItem("Rest")
   if(totalRest){
    parseInt(totalRest)
  }else{
    totalRest=0
  }
  return totalRest
}


export {setLocalRest,getLocalRest}