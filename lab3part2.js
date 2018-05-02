"use strict";

let grant="Grant the Chicken Overlord";
let grantxp=10;
let namexp=40;
let wins=0;

startGame();

function startGame(){
    let ans = prompt("Do you want to play a game with Grant?");
    if(ans.toLowerCase() === "yes"){
        name = prompt("What is your name?");
        startCombat(name);
    }
}

function startCombat(name){
    console.log(`${name} wants to battle`);
    let fight = prompt("Do you wish to attack or run away like a chicken?");
    while(fight === "fight"){
        namexp -= getDamage();
        console.log(`${name} has ${namexp} health left`);
        grantxp -= getDamage();
        console.log(`${grant} has ${grantxp} health left`);
        console.log(" ");
        
        if(namexp <=0){
            console.log(`${grant} destroyed ${name}`);
            break;
        }else if(grantxp <= 0){
            grantxp = 10
            wins++
        }
        if(wins === 3){
            console.log(`${name} destroyed ${grant} ${wins} times`);
            break;
        }
        let fight = prompt("Do you wish to attack or run away like a chicken?");
        switch (fight){
            case "fight":
                console.log("You are a warrior... continue fighting");
                fight = "fight";
                break;
            case "attack":
                console.log("You are a warrior... continue fighting");
                fight = "fight";
                break;
            case "run":
                console.log("WOW even the Grant the chicken is less of a chicken than you, run away child");
                fight = "run"
                break;
            default:
                console.log("You did not give a viable answer and are being forced to fight.");
                fight = "fight";
                break;
        }
        if(fight === "run"){
            break;
        }
        
        
    }
}

function getDamage(){
    return Math.floor(Math.random() * 5) +1;
}

