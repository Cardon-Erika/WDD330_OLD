for (let line = "#"; line.length < 8; line += "#")
    console.log(line);


for (let numb = 1; numb <= 100; numb += 1){
    let output = "";
    if (numb %3 == 0) output += "Fizz";
    if (numb %5 == 0) output += "Buzz";
    console.log(output || numb);
}

let size = 8;
let board = "";

for (let y=0; y< size; y++){
    for (let x = 0; x < size; x++) {
        if ((x+y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);