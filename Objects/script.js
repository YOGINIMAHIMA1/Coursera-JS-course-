var hero={                           //     ---------------- this whole part is called object literal
  name:'Gandalf',
  age:24000,
  color:black,
  aim:'The destruction of sauron',
  weapon:'Glamdring',
}
console.log(hero);
console.log(hero.weapon);
hero.color='white';
console.log(hero.size);//undefined
console.log(hero.color);
var villain = {
    
}

// WRITE YOUR CODE BELOW THIS LINE
villain.name= 'john Hammod'
villain.age=25,
villain.weapon='sql injection',
villain.aim='destruction in hacking world',
villain.health='cyco',

/*
Task: 
    I have given you an empty object called villain. 
    1. Use dot notation to add 'name', 'age', 'weapon’, ‘aim' and ‘health’
       keys to the object with values from your imagination.
    2. Log out the name and health of your villain.
    
*/
console.log(villain.name);
console.log(villain.health);
// using bracket notation in object
var obj={}
obj['name']='kimjong',
obj['age']=40,
  obj['Weight']='50Kg',
  obj["color"]='white'

console.log(obj);
// declaring key in another key
var upkey=obj['name'];
console.log(upkey);
obj[upkey]='lara';
console.log(obj[upkey]);
