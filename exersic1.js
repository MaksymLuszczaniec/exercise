/* Make (initialize) an array with the seven days of the week. Write to 
the console using the index notation so that the output becomes 
“Thursday”.  
*/

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sounday"];
console.log(days[3]);

/*Initialize an array with five posts and change the value of the 
third post. */

const players = ["First player", "Second player", "Third player", "Fourth player", "Fifth player" ];

players[2] = "He won game";
console.log(players);

/*initialize an array with four posts and write code that manages to
swap the values of the first and the second post. Anyway you
accomplish this is good.*/

let players1 = ["First player1", "Second player2", "Third player3", "Fourth player4", "Fifth player5" ];

[players1[0], players1[1]] =  [players1[1], players1[0]];
console.log(players1);

/*Initialize an array that has no posts and add three posts with the 
push method */
let players2 = [];
players2.push("Mike");
players2.push("Max");
players2.push("Joe");

console.log(players2);

