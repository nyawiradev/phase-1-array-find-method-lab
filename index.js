// code your solution here
function superbowlWin(records){
   let res = records.find(element => element.result === 'W')
   if (res) { return res.year}
}
