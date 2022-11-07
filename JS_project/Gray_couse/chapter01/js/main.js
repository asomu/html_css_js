//Modules
import * as Guitar from "./guitars.js";
import User from "./user.js";

const me = new User("email@email.com", "Dave");

console.log(me);
console.log(me.greeting());

console.log(Guitar.playGuitar());
console.log(Guitar.shredding());
console.log(Guitar.plucking());
