// code your solution here
function superbowlWin(records){
   let result= records.find(element => element.result === 'W')
   if (result) 
      { return result.year}
      else{
         return undefined;
      }
}
