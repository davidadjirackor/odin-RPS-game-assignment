        const add7 = function(number){
            return number + 7;
        };
        console.log (add7(6));


        const multiply = function (a, b){
            return a*b;
        };
        console.log (multiply(2,3));

      
const capitalize = function(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
};

console.log(capitalize("heLLo"));  


const lastLetter = function(string) {
    return string.charAt(string.length - 1);
};

console.log(lastLetter("abcd"));


const getComputerChoice = function(){
    let arr = ["Rock","Scissors","Paper"]
    const randomNumber = Math.random();
    console.log(randomNumber);
    const randomIndex = Math.floor(randomNumber* arr.length);
    console.log(randomIndex);
    return arr[randomIndex];
};
console.log(getComputerChoice());


const getComputerChoice1 = function(){
    const randomIndex = Math.floor(Math.random()* 3);
    if( randomIndex === 1){
        return "rock";
    }else if (randomIndex === 2){
        return "paper";
    }
    else{
        return "Scissors";
    }
};
console.log(getComputerChoice());