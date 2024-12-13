/*
Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.

Rules:
+ Loop over the elements of the array fish
+ Log each element from fish
+ If current element is string 'Nemo', terminate loop (but do log 'Nemo')
*/

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let i = 0; i < fish.length; i += 1) {
  console.log(fish[i]);

  if (fish[i] === 'Nemo') break;
}