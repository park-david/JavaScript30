const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello')
// Interpolated
console.log('hello i am a %s string!', 'asdf')
// Styled
console.log('%c sample text', 'font-size:50px; background:red')
// warning!
console.warn('nooooooooo')
// Error :|
console.error('ahhhhhhh')
// Info
console.info('test text print')
// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'that is not true');
// console.assert(1 === 2, 'that is wrong')
// clearing
console.clear();
// Viewing DOM Elements
console.log(p)
console.dir(p);
console.clear();
// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`this is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years`)
    console.groupEnd(`${dog.name}`);
})
// counting
console.count('wes')
console.count('wes')
console.count('jon')
console.count('wes')
// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  })

  // table
  console.table(dogs)