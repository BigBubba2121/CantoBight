/* global variables*/
{var total = 0;
var point = 0;
var wins = 0;
var losses = 0;
var rolls = 0;
}

/*dice roll and image for each roll*/
function rollDice(){
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    total = die1 + die2;
    document.getElementById("total").innerHTML = total;
    determineOutcome(total);
    rolls++;
    document.getElementById("rolls").innerHTML = rolls;
        if(die1==1){
            document.getElementById("myImg").src = "dice1.png";
        }
        if(die1==2){
            document.getElementById("myImg").src = "dice2.png";
        }
        if(die1==3){
            document.getElementById("myImg").src = "dice3.png";
        }
        if(die1==4){
            document.getElementById("myImg").src = "dice4.png";
        }
        if(die1==5){
            document.getElementById("myImg").src = "dice5.png";
        }
        if(die1==6){
            document.getElementById("myImg").src = "dice6.png";
        }
        if(die2==1){
            document.getElementById("myImg2").src = "dice1.png";
        }
        if(die2==2){
            document.getElementById("myImg2").src = "dice2.png";
        }
        if(die2==3){
            document.getElementById("myImg2").src = "dice3.png";
        }
        if(die2==4){
            document.getElementById("myImg2").src = "dice4.png";
        }
        if(die2==5){
            document.getElementById("myImg2").src = "dice5.png";
        }
        if(die2==6){
            document.getElementById("myImg2").src = "dice6.png";
    }
}

/*creating point checking function*/
function checkPoint(){
    /*hitting your point and adding wins to counter*/ 
    if(total == point){
        wins++;
        point = 0;
        document.getElementById("show").innerHTML = "Your point is " + total;
        return "match"
     /*lose if point hits 7 or 11 adds to counter*/
    }  else {
        if(total == 7 || total ==11){
            losses++;
            point = 0;
            document.getElementById("show").innerHTML = "Your point is " + total;
            return "craps"
        } 
     }
     return "none"
}
/*craps function 2,3 or 12 rolled you lose*/ 
/*makes sure point is at 0 so you dont craps out during point*/
function checkCraps(){
   
    if (total == 2 || total == 3 || total == 12 && point == 0 ){
        losses++;
        point = 0;
        return true;
    }
    return false;
}
/* rolling natural function if 7 or 11 on roll when point is 0 you win and ass counter to win*/
/* also checks if not in point so if you roll 7 you lose during point*/
function checkNatural(){
    if(total == 7 || total == 11){
            wins++;
            point = 0;
            return true;
    } 
    return false;
}

/* outcome deterimnation*/
function determineOutcome(total){
    /*checks if point is 0 if not natural or craps it sets point so next rolls have to match*/
        if (point == 0) {
            point = total;
            document.getElementById("show").innerHTML = "Your Point is " + point
            /* if no point is set and you roll 2,3,12 you lose*/
            c=checkCraps();
            if (c==true) {
                alert("Craps, You lose!", losses);
                document.getElementById("show").innerHTML = "Roll again";
            /* if no point is set and you roll a 7 or 11 you win*/
            } else { 
                d=checkNatural();
                if (d==true) {
                    alert("Natural!!", wins);
                    document.getElementById("show").innerHTML = "You won!"
                }
            
        }
    /*creates point and checks the roll if you match it*/
    /*if not you lose*/
    } else {
        switch (checkPoint()) {
            case "match":
                alert("You made your Point!", wins);
                document.getElementById("show").innerHTML = "Roll again";
                break;
            case "none":
                break;
            case "craps":
                alert("You Lose!", losses);
                document.getElementById("show").innerHTML = "Roll again";
                break;
            }
        }

     document.getElementById('wins').innerHTML = wins;
     document.getElementById('losses').innerHTML = losses;
}  

function clear(){
       wins.innerHTML = 0;
       losses.innerHTML = 0;
       total.innerHTML = 0;
       rolls.innerHTML = 0;
       show.innerHTML = 0;
};

