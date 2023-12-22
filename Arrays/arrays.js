var arr=[1,2,3,4,5,"Mahima Bhardwaj", true, undefined,null];
console.log(arr);
console.log(arr.length);//9 
var friendsList = ['Wayne', 'Sara', 'Frankie']

console.log(friendsList)

friendsList.push('Kelly')
console.log(friendsList)

friendsList.pop()
console.log(friendsList)

/*
Task: 
    1. Create an empty array and store it in a variable named 
       presentList.
    2. Push 5 items that you would like to receive as a gift.
    3. Use the pop method to delete all of the items 
       (because you received all of the gifts!!)
    
    Extra: you could use a for loop to pop off all of the items. 
    This might be a bit tricky, so I have given you a hint.
    
*/
var presentlist=[];
presentlist.push("God")
presentlist.push("Job")
presentlist.push("Contortion")
presentlist.push("Peace")
presentlist.push("God")
console.log(presentlist)
presentlist.pop();
console.log(presentlist);
// pop out using for loop
for(var i=0;i<presentlist.length;i++)
{
presentlist.pop();
//or

for(i=arr.length;i>=0;i--)
  {
    arr.pop()
  }
