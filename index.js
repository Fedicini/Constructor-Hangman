var inquire = require("inquirer");
var Word = require("./word.js");
var artists = ["Aerosmith", "ACDC","Rolling Stones", "Guns n Roses", "Phil Collins"];

var promptUser = function(num,obj){
    var currentStr = obj.displayWord();
    console.log(obj.displayWord())
    inquire.prompt([
        {
            name: "guess",
            message:"Guess a letter: ",
            type: "input"
        }
    ]).then(function(ans){
        
        obj.playerGuess(ans.guess);
        if(currentStr == obj.displayWord()){
            console.log("Incorrect!!!")
            num--;
            console.log(num+ " Tries Left")
        }
        else{
            console.log("Nice!!!!!");
        }
        if(!obj.displayWord().includes("_")){
            console.log(obj.displayWord()+"\nCongrats! Beginning next puzzle...")
            promptUser(10,new Word(artists[Math.floor(Math.random()*artists.length)]) )
        }
        else if(num<1){
            console.log("Looks like you failed. Starting a new puzzle")
            promptUser(10,new Word(artists[Math.floor(Math.random()*artists.length)]) )

        }
        else{
            promptUser(num,obj)
        }
    })
}
promptUser(10, new Word(artists[Math.floor(Math.random()*artists.length)]))