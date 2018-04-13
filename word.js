var Letter = require('./letter.js');

function Word(str){
    this.chars = [];
    var charArr = str.split("");
    for(var i = 0; i<str.split("").length; i++){
        var letter = new Letter(charArr[i]);
        this.chars.push(letter);
    }
    this.displayWord = function(){
        var buzzWord = "";
        for(var j = 0; j<this.chars.length; j++){
            buzzWord += this.chars[j].placeHolder()+" ";
        }
        
        return buzzWord;
    }
    this.playerGuess = function(c){
        for(var k = 0; k<this.chars.length; k++){
            this.chars[k].checkChar(c)
        }
    }
}

module.exports = Word;