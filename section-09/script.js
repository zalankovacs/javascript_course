'use strict';

// Data needed for a later exercise

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 12 + 12,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours,


    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address,
    }) {
        console.log(
            `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
        );
    },

    orderPizza(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    },
};

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(40, ' ');
  console.log(output);
  // flight.replaceAll(';', ' ');
  // console.log(flight);
}

//Coding Chalange 3 ✅ 

/*document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  let counter = 0;

  for (const row of rows) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output.padEnd(20, ' '), `${'✅'.repeat(counter + 1)}`);
    counter++;
  } 
});

// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

// Working With Strings - Part 2
/*
// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName]='Jonas Schmedtmann'.split(' ');
const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica and smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function(number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(412134232));
console.log(maskCreditCard('31212'));

// Repeat
const message2 = 'Bad weather... All Departues Delayed...';
console.log(message2.repeat(5));

const planesInline = function(n){
    console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}

planesInline(5);
planesInline(3);
// Working With Strings - Part 2
/*
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLocaleLowerCase();
const trimMedEmail = lowerEmail.trim();
console.log(trimMedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '2888,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to barding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A32'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
    console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function(items){
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')){
        console.log('You are NOT allowed on board');
    }else{
        console.log('Welcome aboard!');
    }
}

checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
// Working With Strings Part1
/*const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat){
    // B and E are middle seats
    const s =seat.slice(-1);
    if(s === 'B' || s === 'E'){
        console.log('You got the middle seat 😠');
    }else{
        console.log(`You got lucky 😎`);
    }
}
 
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));
/*
// Coding Chalange 3

const gameEvents = new Map([
   [17, '⚽ GOAL'],
   [36, 'Substitution'], 
   [47, '⚽ GOAL'],
   [61, 'Substitution'],
   [64, 'Yellow card '],
   [69, 'Red card'],
   [70, 'Substitution'],
   [72, 'Substitution'],
   [76, '⚽ GOAL'],
   [80, '⚽ GOAL'],
   [92, 'Yellow card '],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
// for(const value of gameEvents.values()){
//     events.add(value);
// }

console.log(gameEvents.get(64));
gameEvents.delete(64);
console.log(gameEvents);
let counter = 0;
for(const key of gameEvents.keys()){
    counter = key < 90 ? counter + 1 : counter;
}

console.log(`An event happened, on average, every ${counter} minutes.`);

for(const [key, value] of gameEvents.entries()){
    console.log(key <= 45 ? `[FIRST HALF ${key}: ${value}` : `[SECOND HALF ${key}: ${value}`);
}

/*
const question = new Map([
  ['question', 'What is the best programing language in the world?'],
  [1, 'c'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Conver object to map
console.log(Object.entries(openingHours));
const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log(question);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

// if(answer === question.get('correct'))
//   console.log(question.get(true));
// else
//   console.log(question.get(false));

/*
//Map
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set(
  'categories',
  ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(')
;

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.get('categories'));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
// console.log(rest.get(Heading));
console.log(rest.get(arr), 11111);

/*
//Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pasta',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread')
ordersSet.add('Garlic Bread')
ordersSet.delete('Risotto')
// ordersSet.clear();
console.log(ordersSet);

for(const order of ordersSet){
    console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('fjfasdjdasg1').size, 1111111);

/*
// Chalenge2  
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  player: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Cuman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sanchoo',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds ){
  average += odd;
}
average /= odds.length;
console.log('average:', (game.odds.team1+game.odds.team2+game.odds.x)/odds.length);

for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    // console.log(team, odd);
    console.log(`Odd of victory ${game[team]}: ${odd}`);
}
/*
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days`;

for (const day of Object.keys(openingHours)){
    openStr += ` ${day}`;
}

console.log(openStr);
// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries[0]);

// [key, value]
for(const [key, {open, close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
/*

if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);

// WITH optional chaining 
// console.log(restaurant.openingHours.mon ? .open);
// console.log(restaurant.openingHours ? .mon ? .open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    console.log(day);
    let open;
    if (restaurant.openingHours[day]) {
        open = restaurant.openingHours[day].open;
    } else {
        open = 'closed';
    }
    console.log(`On ${day}, we open at ${open}`);
}

// Methods 
if (restaurant.order) {
    console.log(restaurant.order(0, 1));
} else {
    console.log('Method does not exist');
}

if (restaurant.orderRisotto) {
    console.log(restaurant.order(0, 1));
} else {
    console.log('Method does not exist');
}

//  Arrays
// const users = [{
//     name: 'Jonas',
//     email: 'Hello@jonas.io',
// }];
const users = [];
console.log(users[0]?.name  ?? 'User array empty');

if(users.length > 0) console.log(users[0].name);
else console.log('user array empty');

/*
/////////////////////////////
// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);

///////////////////////////////
// Coding Challenge #1
/*
const game = {
        team1: 'Bayern Munich',
        team2: 'Borrussia Dortmund',
        player: [
            ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Cuman', 'Muller', 'Gnarby', 'Lewandowski'],
            ['Burki', 'Schulz', 'Hummelz', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sanchoo', 'Gotze']
        ],
        score: '4:0',
        scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
        date: 'Nov 9th, 2037',
        odds: {
            team1: 1.33,
            x: 3.25,
            team2: 6.5,
        }
    }


// 1
const [players1, players2] = game.player;
// 2
const [gk, ...fieldPlayers] = players1;

// 3
const allPlayers = game.player;

// 4
const [playersFinal] = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(game.player[1][5]);
// 5
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function(...players) {
        console.log(players);
        console.log(`${players.length} goals were scored`);
    }
    // printGoals('Davies', 'Muller', 'Lewadowski', 'Kimmich')
    // printGoals('Davies', 'Muller')
printGoals(...game.scored);

// 7.
console.log(team1, team2);
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
/*
  const rest1 = {
      name: 'Capri',
      // numGuests: 20,
      numGuests: 0,
  };

  const rest2 = {
      name: 'La Pizza',
      owner: 'Giovanni Rossi',
  };

  // OR assigment operator
  // rest1.numGuests = rest1.numGuests || 10;
  // rest2.numGuests = rest2.numGuests || 10;

  // rest1.numGuests || = 10;
  // rest2.numGuests || = 10;

  // nullish assigment (null or undefined)
  rest1.numGuests = rest1.numGuests && 10;
  rest2.numGuests = rest2.numGuests && 10;

  // AND assigment operrator
  // rest1.owner = rest1.owner && '<ANONYMUS>';
  // rest2.owner = rest2.owner && '<ANONYMUS>';
  rest1.owner && = '<ANONYMUS>';
  rest2.owner && = '<ANONYMUS>';


  console.log(rest1);
  console.log(rest2);

  /*
  ///////////////////////
  // The Nullish Coalescing Operator

  // restaurant.numGuests = null;
  const guests = restaurant.numGuests || 10;
  console.log(guests);

  // Nullish: null and undefined (NOT 0 or '')
  const guestCorrect = restaurant.numGests && 10;
  console.log(guestCorrect);

  ////////////////////
  // Shor Circuiting (&& and ||)

  /*
  console.log('-------OR--------');
  // Use ANY data type, return ANY data type, short-circuiting
  console.log(3 || 'Jonas');
  console.log('' || 'Jonas');
  console.log(true || 0);
  console.log(undefined || null);

  console.log(undefined || 0 || '' || 'Hello' || 23 || null);

  restaurant.numGuests = 0;
  const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
  console.log(guests1, 1111);

  const guests2 = restaurant.numGuests || 10;
  console.log(guests2);

  console.log('-------AND--------');
  console.log(0 && 'Jonas');
  console.log(7 && 'Jonas');

  console.log('Hello' && 23 && null && 'jonas');

  // Practocal example
  if (restaurant.orderPizza) {
      restaurant.orderPizza('mushrooms', 'spinach')
  }

  restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

  /*
  /////////////////////////
  // Rest Pattern and Parameters
  // 1) Destructuring

  // SPREAD, because on RIGHT side of =
  const arr = [1, 2, ...[3, 4]];

  // REST, because on LEFT side of =
  const [a, b, ...others] = [1, 2, 3, 4, 5];
  console.log(a, b, others);

  const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
  console.log(pizza, risotto, otherFood);

  // Objects
  const { sat, ...weekdays } = restaurant.openingHours;
  console.log(weekdays);

  // 2) Functions
  const add = function(...numbers) {
      let sum = 0;
      // console.log('111111', numbers);
      for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i];
          // console.log(numbers[i]);
      }
      console.log(sum);
  };
  add(2, 3);
  add(5, 3, 7, 2);
  add(8, 2, 5, 3, 2, 1, 4);

  const x = [23, 5, 7];
  add(...x);

  restaurant.orderPizza('mushrooms', 'onion', 'olivies', 'spinach');
  restaurant.orderPizza('mushrooms')
      /*
      ///////////////////////////
      // The Spread Operator (...)

      const arr = [7, 8, 9];
      const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
      console.log(badNewArr);

      const newArr = [1, 2, ...arr];
      console.log(newArr);

      console.log(...newArr);

      const newMenu = [...restaurant.mainMenu, 'Gnocci'];
      console.log(newMenu);

      // Copy array
      const mainMenuCopy = [...restaurant.mainMenu];

      // Join 2 arrays
      const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
      console.log(menu);

      // Iterables: arrays, strings, maps, sets. Not objects
      const str = 'Jonas';
      const letters = [...str, ' ', 'S'];
      console.log(letters);
      console.log(...str);
      // console.log(`${...str} schmedtmann`);

      const ingredients = [
          // prompt("Let 's make pasta! Ingredient 1?"),
          // prompt("Let 's make pasta! Ingredient 2?"),
          // prompt("Let 's make pasta! Ingredient 3?"),
      ];
      console.log(ingredients);

      restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
      restaurant.orderPasta(...ingredients);
      // Objects
      const newRestaurant = { founndedIn: 1998, ...restaurant, founder: 'Guiseppe' };
      console.log(newRestaurant);

      const restaurantCopy = {...restaurant };
      restaurantCopy.name = 'Ristorante Roma';
      console.log(restaurantCopy.name);
      console.log(restaurant.name);

      /*
      ////////////////////////////
      // Destucturing Objects
      restaurant.orderDelivery({
        time: '22:30',
        address: 'Via del Sole 21',
        mainIndex: 2,
        starterIndex: 2,
      });




      restaurant.orderDelivery({
        address: 'Via del Sole 21',
        starterIndex: 1,
      });
      console.log('anyad');

      const { name, openingHours, categories } = restaurant;
      console.log(name, openingHours, categories);

      const {
        name: restaurantName,
        openingHours: hours,
        categories: tags,
      } = restaurant;
      console.log(restaurantName, hours, tags);

      // Default values
      const { menu = [], starterMenu: starters = [] } = restaurant;
      console.log(menu, starters);

      // Mutating variables
      let a = 111;
      let b = 999;
      const obj = { a: 23, b: 7, c: 14 };

      ({ a, b } = obj);
      console.log(a, b);

      // nested objects
      const {
        fri: { open: o, close: c },
      } = openingHours;
      console.log(o, c);

      /*
      const arr = [2, 3, 4];
      const a = arr[0];
      const b = arr[1];
      const c = arr[2];

      const [x, y, z] = arr;
      console.log(x, y, z);
      console.log(arr);

      let [main, , secondary] = restaurant.categories;
      console.log(main, secondary);

      // Switching variables
      // const temp = main;
      // main = secondary;
      // secondary = temp;
      // console.log(main, secondary);

      [main, secondary] = [secondary, main];
      console.log(main, secondary);

      // Receive 2 return values from a function
      const [starter, mainCourse] = restaurant.order(2, 0);
      console.log(starter, mainCourse);

      // Nested destructuring
      const nested = [2, 4, [5, 6]];
      // const [i, j] = nested;
      // console.log(i, j);
      const [i, , [j, k]] = nested;
      console.log(i, j, k);

      // Default values
      const [p = 1, q = 1, r = 1] = [8, 9];
      console.log(p, q, r);
      */