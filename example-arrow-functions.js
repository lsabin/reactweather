var names = ['Andrew', 'Julie', 'Jen'];

names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) =>  { console.log('arrow', name) });
 // es equivalente a
names.forEach((name) =>  console.log('arrow statement', name) );

var returnMe = (name) => name + '!';
console.log(returnMe('Leandro'));

var person = {
  name: 'Leandro',
  greet: function () {
    names.forEach((name) => console.log(this.name + ' says hi to ' + name));
  }
};

person.greet();

function add(a,b) {
  return a + b;
}

//add with statement
var addStatement = (a,b) => {
  return a + b;
}

// add with expression
var addExpression = (a,b) => a + b;

console.log(add(1,3));
console.log(add(9,0));

console.log(addStatement(9,1));
console.log(addExpression(9,6));
