function Letter(a){
    this.char = a;
    this.guessed = false;
    if(this.char == " "){
        this.guessed = true;
    }
    this.placeHolder = function(){
        if(this.guessed == true){
            return this.char;
        }
        else{
            return "_";
        }
    }
    this.checkChar = function(c){
        if(c == this.char.toLowerCase()){
            this.guessed = true;
        }
    }
}
module.exports = Letter;
