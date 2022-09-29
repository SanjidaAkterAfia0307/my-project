function setLocalRest(rest,id){
    let totalRest=localStorage.getItem(id)
  if(totalRest){
    totalRest=rest
    localStorage.setItem(id,rest)
  }else{

    localStorage.setItem(id,rest)
  }
}
function getLocal(id){
    let total=localStorage.getItem(id)
   if(total){
    JSON.parse(total)
    // console.log("if")
  }else{
    total=0
    // console.log("else")
  }
  return total
}


export {setLocalRest,getLocal}