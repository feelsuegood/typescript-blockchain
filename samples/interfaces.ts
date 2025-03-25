// type Nickname = string;
// type Health = 1 | 5 | 10;
// type Friends = Array<string>;
// type Team = 'red' | 'blue' | 'yellow';

// interface Player {
//   nickname: Nickname;
//   health: Health;
//   team: Team;
// }

// // type Player = {
// //     nickname: Nickname;
// //     health: Health;
// //     team: Team;
// //   }

// const roseGold: Player = {
//   nickname: 'rose gold',
//   health: 1,
//   team: 'blue',
// };

// type Food = string;

// const chocolate: Food = 'delicious';

// interface Person {
//   name: string;
// }
// interface Person {
//   age: number;
// }
//! possible to merge in interface not in type **
// // type Person = {
// //   name: string;
// // };

// interface User extends Person {}
// // type User = Person & {};
// const sue: User = {
//   name: 'Sue',
//   age: 20,
// };

// abstract class User {
//   constructor(protected firstName: string, protected LastName: string) {}
//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// sayhello(name:string){
//   return 'hello';
// }
// }

// interface reduce file size - interfacce not complied to JS
interface User {
  firstName: string;
  lastName: string;
  fullName(): string;
  sayHi(name: string): string;
  // sayhello(name:string){
  //   return 'hello';
  // }
}

interface Human {
  health: number;
}

// ! same with type
class Player implements User, Human {
  constructor(
    // only public available
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello ${name}, my name is ${this.fullName()}`;
  }
}

function makeUser(user: User): User {
  return {
    firstName: 'sue',
    lastName: 'jay',
    fullName: () => 'xx',
    sayHi: (name) => 'zz',
  };
}

makeUser({
  firstName: 'sue',
  lastName: 'jay',
  fullName: () => 'xx',
  sayHi: (name) => 'zz',
});
