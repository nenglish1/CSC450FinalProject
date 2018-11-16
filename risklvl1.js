var t1, t2, t3, t4, t5, t6, t7, t8, mode;
t1=0;
t1C=0;
t2=0;
t2C=0;
t3=0;
t3C=0;
t4=0;
t4C=0;
t5=0;
t5C=0;
t6=0;
t6C=0;
t7=0;
t7C=0;
t8=0;
t8C=0;
t9=0;
t9C=0;
tSelected=0;
mode=0;
var totalTroops=0;
var turn=0;
var troopsDeployed=0;
var selectedController=0;
var attackingTroops=0;
var defendingTroops=0;
var attackResult=0;
var compStart;
var compEnd;
var borderingT=[];
var randomB;
var controlArray;
var compControlledT=0;
var turnCounter=0;
var controlledT=0;
var borderingPT=[];
var borderPT=0;

function start(){
  mode=1;
  totalTroops=0;
  troopsDeployed=0;
  t1=2;
  t1C=0;
  t2=2;
  t2C=2;
  t3=2;
  t3C=2;
  t4=2;
  t4C=2;
  t5=2;
  t5C=2;
  t6=2;
  t6C=2;
  t7=2;
  t7C=2;
  t8=2;
  t8C=2;
  t9=2;
  t9C=1;
  turnCounter=0;
  controlledT=0;
  console.log(t1);
  var controlArray=[t1C,t2C,t3C,t4C,t5C,t6C,t7C,t8C,t9C,];
  setColors();
  countTroops();
  document.getElementById("promptP").innerHTML="Place your troops! You have "+totalTroops+" Troops!";
  startTSelected=0;
  endTSelected=0;
  console.log(t1);
  document.getElementById("t1").innerHTML=t1;
  document.getElementById("t2").innerHTML=t2;
  document.getElementById("t3").innerHTML=t3;
  document.getElementById("t4").innerHTML=t4;
  document.getElementById("t5").innerHTML=t5;
  document.getElementById("t6").innerHTML=t6;
  document.getElementById("t7").innerHTML=t7;
  document.getElementById("t8").innerHTML=t8;
  document.getElementById("t9").innerHTML=t9;
}

function setColors(){
  if (t1C==0){
    document.getElementById("t1").style.backgroundColor="blue";
  }
  else if (t1C==1){
    document.getElementById("t1").style.backgroundColor="red";
  }
  else if (t1C==2){
    document.getElementById("t1").style.backgroundColor="lightgray";
  }
  if (t2C==0){
    document.getElementById("t2").style.backgroundColor="blue";
  }
  else if (t2C==1){
    document.getElementById("t2").style.backgroundColor="red";
  }
  else if (t2C==2){
    document.getElementById("t2").style.backgroundColor="lightgray";
  }
  if (t3C==0){
    document.getElementById("t3").style.backgroundColor="blue";
  }
  else if (t3C==1){
    document.getElementById("t3").style.backgroundColor="red";
  }
  else if (t3C==2){
    document.getElementById("t3").style.backgroundColor="lightgray";
  }
  if (t4C==0){
    document.getElementById("t4").style.backgroundColor="blue";
  }
  else if (t4C==1){
    document.getElementById("t4").style.backgroundColor="red";
  }
  else if (t4C==2){
    document.getElementById("t4").style.backgroundColor="lightgray";
  }
  if (t5C==0){
    document.getElementById("t5").style.backgroundColor="blue";
  }
  else if (t5C==1){
    document.getElementById("t5").style.backgroundColor="red";
  }
  else if (t5C==2){
    document.getElementById("t5").style.backgroundColor="lightgray";
  }
  if (t6C==0){
    document.getElementById("t6").style.backgroundColor="blue";
  }
  else if (t6C==1){
    document.getElementById("t6").style.backgroundColor="red";
  }
  else if (t6C==2){
    document.getElementById("t6").style.backgroundColor="lightgray";
  }
  if (t7C==0){
    document.getElementById("t7").style.backgroundColor="blue";
  }
  else if (t7C==1){
    document.getElementById("t7").style.backgroundColor="red";
  }
  else if (t7C==2){
    document.getElementById("t7").style.backgroundColor="lightgray";
  }
  if (t8C==0){
    document.getElementById("t8").style.backgroundColor="blue";
  }
  else if (t8C==1){
    document.getElementById("t8").style.backgroundColor="red";
  }
  else if (t8C==2){
    document.getElementById("t8").style.backgroundColor="lightgray";
  }
  if (t9C==0){
    document.getElementById("t9").style.backgroundColor="blue";
  }
  else if (t9C==1){
    document.getElementById("t9").style.backgroundColor="red";
  }
  else if (t9C==2){
    document.getElementById("t9").style.backgroundColor="lightgray";
  }
}

/*
  This function sets troop variables to zero and recounts the number of
  troops given to the player.
*/
function nextTurn(){
  if (mode==4){
    troopsDeployed=0;
    controlledT=0;
    turnCounter++;
    totalTroops=0;
    attackResult=0;
    borderingT=[];
    mode=1;
    computerDeploy();
    playerAttack();
    setResults();
    setColors();
    moveTroops();
    compControlledT=0;
    controlArray=[t1C,t2C,t3C,t4C,t5C,t6C,t7C,t8C,t9C];
    console.log("checkpoint 1"+compControlledT+"value9: "+t9C);
    for (var i=0; i<controlArray.length; i++){
      if(controlArray[i]==1){
        compControlledT++;
        console.log("faulty: "+controlArray[i]+","+i);
      }
    }
    console.log(compControlledT);
    if (compControlledT>0){
      computerAttack();
      findCompEnd();
      setAttackTroops();
      setCResults();
      console.log("checkpoint 2");
      countTroops();
      document.getElementById("promptP").innerHTML="Place your troops! You have "+totalTroops+" Troops!";
    }
    else {
      document.getElementById("promptP").innerHTML="You Win!";
      mode=7;
    }
    compControlledT=0;
    for (var i=0; i<controlArray.length; i++){
      if(controlArray[i]==1){
        compControlledT++;
      }
    }
    setColors();
    cMoveTroops();
    checkWin();
    updateTroops();
    console.log("checkpoint 3");
    document.getElementById("turnCounter").innerHTML="Turns taken: "+turnCounter;
    document.getElementById("troopsControlled").innerHTML="Troops to deploy: "+totalTroops;
    document.getElementById("terrControlled").innerHTML="Territories controlled: "+controlledT;
    document.getElementById("enemyTControlled").innerHTML="Enemy territories: "+compControlledT;
  }
}

function countTroops(){
  controlArray=[t1C,t2C,t3C,t4C,t5C,t6C,t7C,t8C,t9C,];
  for (var i=0; i<controlArray.length; i++){
    if(controlArray[i]==0){
      totalTroops++;
      controlledT++;
    }
  }
  console.log(totalTroops);
}

/*
  This function takes the id of the selected territory and returns
  the corresponding control variable.
*/

function findController(){
  if (tSelected=="t1"){
    selectedController=t1C;
  }
  else if (tSelected=="t2"){
    selectedController=t2C;
    console.log(selectedController);
  }
  else if (tSelected=="t3"){
    selectedController=t3C;
  }
  else if (tSelected=="t4"){
    selectedController=t4C;
  }
  else if (tSelected=="t5"){
    selectedController=t5C;
  }
  else if (tSelected=="t6"){
    selectedController=t6C;
  }
  else if (tSelected=="t7"){
    selectedController=t7C;
  }
  else if (tSelected=="t8"){
    selectedController=t8C;
  }
  else if (tSelected=="t9"){
    selectedController=t9C;
  }
}

function findControllerStart(){
  if (startTSelected=="t1"){
    selectedController=t1C;
  }
  else if (startTSelected=="t2"){
    selectedController=t2C;
    console.log(selectedController);
  }
  else if (startTSelected=="t3"){
    selectedController=t3C;
  }
  else if (startTSelected=="t4"){
    selectedController=t4C;
  }
  else if (startTSelected=="t5"){
    selectedController=t5C;
  }
  else if (startTSelected=="t6"){
    selectedController=t6C;
  }
  else if (startTSelected=="t7"){
    selectedController=t7C;
  }
  else if (startTSelected=="t8"){
    selectedController=t8C;
  }
  else if (startTSelected=="t9"){
    selectedController=t9C;
  }
}

function findControllerEnd(){
  if (endTSelected=="t1"){
    selectedController=t1C;
  }
  else if (endTSelected=="t2"){
    selectedController=t2C;
    console.log(selectedController);
  }
  else if (endTSelected=="t3"){
    selectedController=t3C;
  }
  else if (endTSelected=="t4"){
    selectedController=t4C;
  }
  else if (endTSelected=="t5"){
    selectedController=t5C;
  }
  else if (endTSelected=="t6"){
    selectedController=t6C;
  }
  else if (endTSelected=="t7"){
    selectedController=t7C;
  }
  else if (endTSelected=="t8"){
    selectedController=t8C;
  }
  else if (endTSelected=="t9"){
    selectedController=t9C;
  }
}

function changeMode(){
  if (mode==1){
    mode=2;
    document.getElementById("promptP").innerHTML="Now in Attack Mode.";
  }
  else if (mode==2){
    mode=1;
    startTSelected=0;
    endTSelected=0;
    document.getElementById("promptP").innerHTML="Place your troops! You have "+totalTroops+" Troops!";
  }
  else if (mode==3){
    mode=1;
    startTSelected=0;
    endTSelected=0;
    document.getElementById("promptP").innerHTML="Place your troops! You have "+totalTroops+" Troops!";
  }
  else if (mode==4){
    mode=1;
    startTSelected=0;
    endTSelected=0;
    document.getElementById("promptP").innerHTML="Place your troops! You have "+totalTroops+" Troops!";
  }
}

function tClick(territory){
  if (mode==1){
    if (troopsDeployed==totalTroops){
      document.getElementById("promptP").innerHTML="You have deployed all troops. Click 'Change Mode' to enter an attack.";
    }
    tSelected=territory.getAttribute('id');
    console.log(tSelected);
    if (tSelected=="t1"&&t1C==0){
      if (troopsDeployed<totalTroops){
        t1++;
        troopsDeployed++;
        document.getElementById(tSelected).innerHTML=t1;
      }
    }
    else if (tSelected=="t2"&&t2C==0){
      if (troopsDeployed<totalTroops){
        t2++;
        troopsDeployed++;
        document.getElementById(tSelected).innerHTML=t2;
      }
    }
    else if (tSelected=="t3"&&t3C==0){
      if (troopsDeployed<totalTroops){
        t3++;
        troopsDeployed++;
        document.getElementById(tSelected).innerHTML=t3;
      }
    }
    else if (tSelected=="t4"&&t4C==0){
      if (troopsDeployed<totalTroops){
        t4++;
        troopsDeployed++;
        document.getElementById(tSelected).innerHTML=t4;
      }
    }
    else if (tSelected=="t5"&&t5C==0){
      if (troopsDeployed<totalTroops){
        t5++;
        troopsDeployed++;
        document.getElementById(tSelected).innerHTML=t5;
      }
    }
    else if (tSelected=="t6"&&t6C==0){
      if (troopsDeployed<totalTroops){
        t6++;
        troopsDeployed++;
        document.getElementById(tSelected).innerHTML=t6;
      }
    }
    else if (tSelected=="t7"&&t7C==0){
      if (troopsDeployed<totalTroops){
        t7++;
        troopsDeployed++;
        document.getElementById(tSelected).innerHTML=t7;
      }
    }
    else if (tSelected=="t8"&&t8C==0){
      if (troopsDeployed<totalTroops){
        t8++;
        troopsDeployed++;
        document.getElementById(tSelected).innerHTML=t8;
      }
    }
    else if (tSelected=="t9"&&t9C==0){
      if (troopsDeployed<totalTroops){
        t9++;
        troopsDeployed++;
        document.getElementById(tSelected).innerHTML=t9;
      }
    }

  }
  else if (mode==2){
    startTSelected=territory.getAttribute('id');
    findControllerStart();
    if (selectedController==0){
      console.log(selectedController);
      console.log("start:"+startTSelected);
      document.getElementById("promptP").innerHTML="Choose an territory to attack from "+startTSelected;
      mode=3;
    }
    else {
      document.getElementById("promptP").innerHTML="You must select on of your own territories to attack from";
    }
  }
  else if (mode==3){
    endTSelected=territory.getAttribute('id');
    findControllerEnd();
    checkBorderPT();
    if (selectedController==0){
      document.getElementById("promptP").innerHTML="You cannot attack your own territory. Choose again";
    }
    else if (borderPT==0){
      console.log("stuck at elseif PT");
      document.getElementById("promptP").innerHTML="You must attack an adjacent territory.  Choose again";
    }
    else {
      console.log(selectedController);
      console.log("end"+endTSelected)
      document.getElementById("promptP").innerHTML="You will attack from "+startTSelected+" to "+endTSelected;
      mode=4;
    }
  }
  else if (mode==4){
    document.getElementById("promptP").innerHTML="Attack entered.  Click next turn to proceed.";
  }
}

function checkBorderPT(){
  console.log("checkingborder: "+startTSelected+","+endTSelected);
  if ((startTSelected=="t1" && endTSelected=="t2")||(startTSelected=="t1" && endTSelected=="t4")){
    borderPT=1;
  }
  else if ((startTSelected=="t2" && endTSelected=="t1")||(startTSelected=="t2" && endTSelected=="t3")||(startTSelected=="t2" && endTSelected=="t5")){
    borderPT=1;
  }
  else if ((startTSelected=="t3" && endTSelected=="t2")||(startTSelected=="t3" && endTSelected=="t6")){
    borderPT=1;
  }
  else if ((startTSelected=="t4" && endTSelected=="t1")||(startTSelected=="t4" && endTSelected=="t5")||(startTSelected=="t4" && endTSelected=="t7")){
    borderPT=1;
  }
  else if ((startTSelected=="t5" && endTSelected=="t2")||(startTSelected=="t5" && endTSelected=="t4")||(startTSelected=="t5" && endTSelected=="t6")||(startTSelected=="t5" && endTSelected=="t8")){
    borderPT=1;
  }
  else if ((startTSelected=="t6" && endTSelected=="t3")||(startTSelected=="t6" && endTSelected=="t5")||(startTSelected=="t6" && endTSelected=="t9")){
    borderPT=1;
  }
  else if ((startTSelected=="t7" && endTSelected=="t4")||(startTSelected=="t7" && endTSelected=="t8")){
    borderPT=1;
  }
  else if ((startTSelected=="t8" && endTSelected=="t7")||(startTSelected=="t8" && endTSelected=="t9")||(startTSelected=="t8" && endTSelected=="t5")){
    borderPT=1;
  }
  else if ((startTSelected=="t9" && endTSelected=="t8")||(startTSelected=="t9" && endTSelected=="t6")){
    borderPT=1;
  }
  else{
    borderPT=0;
  }
  console.log("borderPT value: "+borderPT);
}

function playerAttack(){
  console.log(startTSelected+" attacks "+endTSelected);
  if (startTSelected=="t1"){
    attackingTroops=t1;
  }
  else if (startTSelected=="t2"){
    attackingTroops=t2;
  }
  else if (startTSelected=="t3"){
    attackingTroops=t3;
  }
  else if (startTSelected=="t4"){
    attackingTroops=t4;
  }
  else if (startTSelected=="t5"){
    attackingTroops=t5;
  }
  else if (startTSelected=="t6"){
    attackingTroops=t6;
  }
  else if (startTSelected=="t7"){
    attackingTroops=t7;
  }
  else if (startTSelected=="t8"){
    attackingTroops=t8;
  }
  else if (startTSelected=="t9"){
    attackingTroops=t9;
  }
  if (endTSelected=="t1"){
    defendingTroops=t1;
  }
  else if (endTSelected=="t2"){
    defendingTroops=t2;
  }
  else if (endTSelected=="t3"){
    defendingTroops=t3;
  }
  else if (endTSelected=="t4"){
    defendingTroops=t4;
  }
  else if (endTSelected=="t5"){
    defendingTroops=t5;
  }
  else if (endTSelected=="t6"){
    defendingTroops=t6;
  }
  else if (endTSelected=="t7"){
    defendingTroops=t7;
  }
  else if (endTSelected=="t8"){
    defendingTroops=t8;
  }
  else if (endTSelected=="t9"){
    defendingTroops=t9;
  }
  console.log(attackingTroops+" , "+defendingTroops);
  calculateAttack();
}
function calculateAttack(){
  console.log("running attack function"+attackingTroops+","+defendingTroops);
  if (attackingTroops==defendingTroops){
    attackingTroops=attackingTroops*0.5;
    defendingTroops=defendingTroops*0.5;
    console.log("resulT: "+attackingTroops+","+defendingTroops);
    if (attackingTroops>0){
      if(defendingTroops<0){
        if (endTSelected=="t1"){
          t1C=0;
        }
        else if (endTSelected=="t2"){
          t2C=0;
        }
        else if (endTSelected=="t9"){
          t9C=0;
        }
        else if (endTSelected=="t3"){
          t3C=0;
        }
        else if (endTSelected=="t4"){
          t4C=0;
        }
        else if (endTSelected=="t5"){
          t5C=0;
        }
        else if (endTSelected=="t6"){
          t6C=0;
        }
        else if (endTSelected=="t7"){
          t7C=0;
        }
        else if (endTSelected=="t8"){
          t8C=0;
        }
        else{
          console.log("fail");
        }
      }
    }
  }
  else if (attackingTroops > (defendingTroops*1.6)){
    attackingTroops=attackingTroops-(defendingTroops*0.5);
    defendingTroops=0;
    console.log("result: "+attackingTroops+","+defendingTroops);
    if(defendingTroops<1){
      attackResult=1;
      if (endTSelected=="t1"){
        t1C=0;
      }
      else if (endTSelected=="t2"){
        t2C=0;
      }
      else if (endTSelected=="t9"){
        t9C=0;
      }
      else if (endTSelected=="t3"){
        t3C=0;
      }
      else if (endTSelected=="t4"){
        t4C=0;
      }
      else if (endTSelected=="t5"){
        t5C=0;
      }
      else if (endTSelected=="t6"){
        t6C=0;
      }
      else if (endTSelected=="t7"){
        t7C=0;
      }
      else if (endTSelected=="t8"){
        t8C=0;
      }
      else{
        console.log("fail");
      }
    }
    else{
        console.log("fail");
    }
  }
  else if (attackingTroops>defendingTroops){
    var middleVar=0;
    middleVar=attackingTroops;
    attackingTroops=attackingTroops-defendingTroops;
    defendingTroops=defendingTroops-(0.9*middleVar);
    console.log("result: "+attackingTroops+","+defendingTroops);
    if(defendingTroops<1){
      attackResult=1;
      if (endTSelected=="t1"){
        t1C=0;
      }
      else if (endTSelected=="t2"){
        t2C=0;
      }
      else if (endTSelected=="t9"){
        t9C=0;
      }
      else if (endTSelected=="t3"){
        t3C=0;
      }
      else if (endTSelected=="t4"){
        t4C=0;
      }
      else if (endTSelected=="t5"){
        t5C=0;
      }
      else if (endTSelected=="t6"){
        t6C=0;
      }
      else if (endTSelected=="t7"){
        t7C=0;
      }
      else if (endTSelected=="t8"){
        t8C=0;
      }
      else{
        console.log("fail");
      }
    }
  }
  else if (attackingTroops<=(0.5*defendingTroops)){
    defendingTroops=defendingTroops-(attackingTroops*0.5);
    attackingTroops=0;
    document.getElementById(endTSelected).innerHTML=defendingTroops;
  }
  else{
    defendingTroops=defendingTroops-attackingTroops;
    attackingTroops=(attackingTroops/2)
  }
  console.log(t1C+","+t2C+","+t3C+","+t4C+","+t5C+","+t6C+","+t7C+","+t8C+","+t9C);
  console.log("end of attack function reached"+attackingTroops+","+defendingTroops);
}

function moveTroops(){
  console.log("move");
  console.log(attackingTroops);
  if (attackResult==1){
    if (endTSelected=="t1"){
      t1=Math.round(attackingTroops);
      document.getElementById("t1").innerHTML=t1;
    }
    else if (endTSelected=="t2"){
      t2=Math.round(attackingTroops);
      document.getElementById("t2").innerHTML=t2;
      t2C=0;
    }
    else if (endTSelected=="t3"){
      t3=Math.round(attackingTroops);
      document.getElementById("t3").innerHTML=t3;
    }
    else if (endTSelected=="t4"){
      t4=Math.round(attackingTroops);
      document.getElementById("t4").innerHTML=t4;
    }
    else if (endTSelected=="t5"){
      t5=Math.round(attackingTroops);
      document.getElementById("t5").innerHTML=t5;
    }
    else if (endTSelected=="t6"){
      t6=Math.round(attackingTroops);
      document.getElementById("t6").innerHTML=t6;
    }
    else if (endTSelected=="t7"){
      t7=Math.round(attackingTroops);
      document.getElementById("t7").innerHTML=t7;
    }
    else if (endTSelected=="t8"){
      t8=Math.round(attackingTroops);
      document.getElementById("t8").innerHTML=t8;
    }
    else if (endTSelected=="t9"){
      t9=Math.round(attackingTroops);
      document.getElementById("t9").innerHTML=t9;
    }
    if (startTSelected=="t1"){
      document.getElementById("t1").innerHTML="0";
      t1=0;
    }
    else if (startTSelected=="t2"){
      document.getElementById("t2").innerHTML="0";
      t2=0;
    }
    else if (startTSelected=="t3"){
      document.getElementById("t3").innerHTML="0";
      t3=0;
    }
    else if (startTSelected=="t4"){
      document.getElementById("t4").innerHTML="0";
      t4=0;
    }
    else if (startTSelected=="t5"){
      document.getElementById("t5").innerHTML="0";
      t5=0;
    }
    else if (startTSelected=="t6"){
      document.getElementById("t6").innerHTML="0";
      t6=0;
    }
    else if (startTSelected=="t7"){
      document.getElementById("t7").innerHTML="0";
      t7=0;
    }
    else if (startTSelected=="t8"){
      document.getElementById("t8").innerHTML="0";
      t8=0;
    }
    else if (startTSelected=="t9"){
      document.getElementById("t9").innerHTML="0";
      t9=0;
    }
  }
}

function setResults(){
  if (startTSelected=="t1"){
    t1=Math.round(attackingTroops);
  }
  else if (startTSelected=="t2"){
    t2=Math.round(attackingTroops);
  }
  else if (startTSelected=="t3"){
    t3=Math.round(attackingTroops);
  }
  else if (startTSelected=="t4"){
    t4=Math.round(attackingTroops);
  }
  else if (startTSelected=="t5"){
    t5=Math.round(attackingTroops);
  }
  else if (startTSelected=="t6"){
    t6=Math.round(attackingTroops);
  }
  else if (startTSelected=="t7"){
    t7=Math.round(attackingTroops);
  }
  else if (startTSelected=="t8"){
    t8=Math.round(attackingTroops);
  }
  else if (startTSelected=="t9"){
    t9=Math.round(attackingTroops);
  }
  if (endTSelected=="t1"){
    t1=Math.round(defendingTroops);
  }
  else if (endTSelected=="t2"){
    t2=Math.round(defendingTroops);
  }
  else if (endTSelected=="t3"){
    t3=Math.round(defendingTroops);
  }
  else if (endTSelected=="t4"){
    t4=Math.round(defendingTroops);
  }
  else if (endTSelected=="t5"){
    t5=Math.round(defendingTroops);
  }
  else if (endTSelected=="t6"){
    t6=Math.round(defendingTroops);
  }
  else if (endTSelected=="t7"){
    t7=Math.round(defendingTroops);
  }
  else if (endTSelected=="t8"){
    t8=Math.round(defendingTroops);
  }
  else if (endTSelected=="t9"){
    t9=Math.round(defendingTroops);
  }
}

function updateTroops(){
  console.log("troopcount updating");
  if (t1>0){document.getElementById("t1").innerHTML=Math.round(t1);}
  else {t1=0; document.getElementById("t1").innerHTML=Math.round(t1);}
  if (t2>0){document.getElementById("t2").innerHTML=Math.round(t2);}
  else {t2=0; document.getElementById("t2").innerHTML=Math.round(t2);}
  if (t3>0){document.getElementById("t3").innerHTML=Math.round(t3);}
  else {t3=0; document.getElementById("t3").innerHTML=Math.round(t3);}
  if (t4>0){document.getElementById("t4").innerHTML=Math.round(t4);}
  else {t4=0; document.getElementById("t4").innerHTML=Math.round(t4);}
  if (t5>0){document.getElementById("t5").innerHTML=Math.round(t5);}
  else {t5=0; document.getElementById("t5").innerHTML=Math.round(t5);}
  if (t6>0){document.getElementById("t6").innerHTML=Math.round(t6);}
  else {t6=0; document.getElementById("t6").innerHTML=Math.round(t6);}
  if (t7>0){document.getElementById("t7").innerHTML=Math.round(t7);}
  else {t7=0; document.getElementById("t7").innerHTML=Math.round(t7);}
  if (t8>0){document.getElementById("t8").innerHTML=Math.round(t8);}
  else {t8=0; document.getElementById("t8").innerHTML=Math.round(t8);}
  if (t9>0){document.getElementById("t9").innerHTML=Math.round(t9);}
  else {t19=0; document.getElementById("t9").innerHTML=Math.round(t9);}
}

function checkWin(){
  var controlledT=0;
  var controlArray=[t1C,t2C,t3C,t4C,t5C,t6C,t7C,t8C,t9C,];
  for (var i=0; i<controlArray.length; i++){
    if(controlArray[i]==0){
      controlledT++;
    }
  }
  if (controlledT==9){
    document.getElementById("promptP").innerHTML="You Won!";
    mode=0;
  }
  else if (controlledT==0){
    document.getElementById("promptP").innerHTML="You Lose."
    mode=0;
  }
}

function computerDeploy(){
  var compT=0;
  var controlArray=[t1C,t2C,t3C,t4C,t5C,t6C,t7C,t8C,t9C,];
  for (var i=0; i<controlArray.length; i++){
    if(controlArray[i]==1){
      compT++;
    }
  }
  for (var i=0; i<compT;){
    if (t1C==1){
      t1++;
      i++;
    }
    if (t2C==1){
      t2++;
      i++;
    }
    if (t3C==1){
      t3++;
      i++;
    }
    if (t4C==1){
      t4++;
      i++;
    }
    if (t5C==1){
      t5++;
      i++;
    }
    if (t6C==1){
      t6++;
      i++;
    }
    if (t7C==1){
      t7++;
      i++;
    }
    if (t8C==1){
      t8++;
      i++;
    }
    if (t9C==1){
      t9++;
      i++;
    }
  }
}
function computerAttack(){
  var randomA=Math.floor((Math.random() * 10));
  console.log("random numbers: "+randomA);
  if (randomA==1 && t1C==1){
    compStart="t1";
  }
  else if (randomA==2 && t2C==1){
    compStart="t2";
  }
  else if (randomA==3 && t3C==1){
    compStart="t3";
  }
  else if (randomA==4 && t4C==1){
    compStart="t4";
  }
  else if (randomA==5 && t5C==1){
    compStart="t5";
  }
  else if (randomA==6 && t6C==1){
    compStart="t6";
  }
  else if (randomA==7 && t7C==1){
    compStart="t7";
  }
  else if (randomA==8 && t8C==1){
    compStart="t8";
  }
  else if (t9C==1 && t9C==1){
    compStart="t9";
  }
  else {
    computerAttack();
  }
  checkBorderT();
}
function checkBorderT(){
  if (compStart=="t1"){
    borderingT=["t2","t4"];
  }
  else if (compStart=="t2"){
    borderingT=["t1","t3","t5"];
  }
  else if (compStart=="t3"){
    borderingT=["t2","t6"];
  }
  else if (compStart=="t4"){
    borderingT=["t1","t7","t5"];
  }
  else if (compStart=="t5"){
    borderingT=["t2","t8","t4","t6"];
  }
  else if (compStart=="t6"){
    borderingT=["t5","t3","t9"];
  }
  else if (compStart=="t7"){
    borderingT=["t4","t8"];
  }
  else if (compStart=="t8"){
    borderingT=["t7","t9","t5"];
  }
  else if (compStart=="t9"){
    borderingT=["t8","t6"];
  }
  console.log(borderingT);
}
function findCompEnd(){
  /*Used a combination of W3 and stackoverflow for the Math.floor code*/
  randomB=Math.floor((Math.random() * 10));
  console.log("randomB: "+randomB);
  console.log("border array length: "+borderingT.length);

  if (borderingT.length==0){
    console.log("quit");
  }

  else if(randomB<borderingT.length){
    compEnd=borderingT[randomB];
    console.log("ending:"+compEnd);
  }

  else if (randomB>=borderingT.length){
    findCompEnd();
  }
  else{
    findCompEnd();
  }
  console.log("not attacking self");
  if (compEnd==t1 && t1C==1){
    findCompEnd();
    compEnd=0;
  }
  else if (compEnd==t2 && t2C==1){
    findCompEnd();
    compEnd=0;
  }
  else if (compEnd==t3 && t3C==1){
    findCompEnd();
    compEnd=0;
  }
  else if (compEnd==t4 && t4C==1){
    findCompEnd();
    compEnd=0;
  }
  else if (compEnd==t5 && t5C==1){
    findCompEnd();
    compEnd=0;
  }
  else if (compEnd==t6 && t6C==1){
    findCompEnd();
    compEnd=0;
  }
  else if (compEnd==t7 && t7C==1){
    findCompEnd();
    compEnd=0;
  }
  else if (compEnd==t8 && t8C==1){
    findCompEnd();
    compEnd=0;
  }
  else if (compEnd==t9 && t9C==1){
    findCompEnd();
    compEnd=0;
  }
  else{

  }

}
function setAttackTroops(){
  if (compStart=="t1"){
    cAttackingTroops=t1;
  }
  else if (compStart=="t2"){
    cAttackingTroops=t2;
  }
  else if (compStart=="t3"){
    cAttackingTroops=t3;
  }
  else if (compStart=="t4"){
    cAttackingTroops=t4;
  }
  else if (compStart=="t5"){
    cAttackingTroops=t5;
  }
  else if (compStart=="t6"){
    cAttackingTroops=t6;
  }
  else if (compStart=="t7"){
    cAttackingTroops=t7;
  }
  else if (compStart=="t8"){
    cAttackingTroops=t8;
  }
  else if (compStart=="t9"){
    cAttackingTroops=t9;
  }
  if (compEnd=="t1"){
    cDefendingTroops=t1;
  }
  else if (compEnd=="t2"){
    cDefendingTroops=t2;
  }
  else if (compEnd=="t3"){
    cDefendingTroops=t3;
  }
  else if (compEnd=="t4"){
    cDefendingTroops=t4;
  }
  else if (compEnd=="t5"){
    cDefendingTroops=t5;
  }
  else if (compEnd=="t6"){
    cDefendingTroops=t6;
  }
  else if (compEnd=="t7"){
    cDefendingTroops=t7;
  }
  else if (compEnd=="t8"){
    cDefendingTroops=t8;
  }
  else if (compEnd=="t9"){
    cDefendingTroops=t9;
  }
  console.log(cAttackingTroops+" , "+cDefendingTroops);
  calculateCAttack();
}
function calculateCAttack(){
  console.log("running computer attack function"+cAttackingTroops+","+cDefendingTroops);
  if (cAttackingTroops==cDefendingTroops){
    cAttackingTroops=cAttackingTroops*0.5;
    cDefendingTroops=cDefendingTroops*0.5;
    console.log("resulT: "+cAttackingTroops+","+cDefendingTroops);
    if (cAttackingTroops>0){
      if(cDefendingTroops<0){
        if (compEnd=="t1"){
          t1C=1;
        }
        else if (compEnd=="t2"){
          t2C=1;
        }
        else if (compEnd=="t9"){
          t9C=1;
        }
        else if (compEnd=="t3"){
          t3C=1;
        }
        else if (compEnd=="t4"){
          t4C=1;
        }
        else if (compEnd=="t5"){
          t5C=1;
        }
        else if (compEnd=="t6"){
          t6C=1;
        }
        else if (compEnd=="t7"){
          t7C=1;
        }
        else if (compEnd=="t8"){
          t8C=1;
        }
        else{
          console.log("fail");
        }
      }
    }
  }
  else if (cAttackingTroops > (cDefendingTroops*1.6)){
    cAttackingTroops=cAttackingTroops-(cDefendingTroops*0.5);
    cDefendingTroops=0;
    console.log("result: "+cAttackingTroops+","+cDefendingTroops);
    if(cDefendingTroops<1){
      attackResult=1;
      if (compEnd=="t1"){
        t1C=1;
      }
      else if (compEnd=="t2"){
        t2C=1;
      }
      else if (compEnd=="t9"){
        t9C=1;
      }
      else if (compEnd=="t3"){
        t3C=1;
      }
      else if (compEnd=="t4"){
        t4C=1;
      }
      else if (compEnd=="t5"){
        t5C=1;
      }
      else if (compEnd=="t6"){
        t6C=1;
      }
      else if (compEnd=="t7"){
        t7C=1;
      }
      else if (compEnd=="t8"){
        t8C=1;
      }
      else{
        console.log("fail");
      }
    }
    else{
        console.log("fail");
    }
  }
  else if (cAttackingTroops>cDefendingTroops){
    var cMiddleVar=0;
    cMiddleVar=cAttackingTroops;
    cAttackingTroops=cAttackingTroops-cDefendingTroops;
    cDefendingTroops=cDefendingTroops-(0.9*cMiddleVar);
    console.log("result: "+cAttackingTroops+","+cDefendingTroops);
    if(cDefendingTroops<1){
      attackResult=1;
      if (compEnd=="t1"){
        t1C=1;
      }
      else if (compEnd=="t2"){
        t2C=1;
      }
      else if (compEnd=="t9"){
        t9C=1;
      }
      else if (compEnd=="t3"){
        t3C=1;
      }
      else if (compEnd=="t4"){
        t4C=1;
      }
      else if (compEnd=="t5"){
        t5C=1;
      }
      else if (compEnd=="t6"){
        t6C=1;
      }
      else if (compEnd=="t7"){
        t7C=1;
      }
      else if (compEnd=="t8"){
        t8C=1;
      }
      else{
        console.log("fail");
      }
    }
  }
  else if (cAttackingTroops<=(0.5*cDefendingTroops)){
    cDefendingTroops=cDefendingTroops-(cAttackingTroops*0.5);
    cAttackingTroops=0;
    document.getElementById(compEnd).innerHTML=cDefendingTroops;
  }
  else{
    cDefendingTroops=cDefendingTroops-cAttackingTroops;
    cAttackingTroops=(cAttackingTroops/2)
  }
  console.log("end of attack function reached"+cAttackingTroops+","+cDefendingTroops);
}
function cMoveTroops(){
  console.log("move");
  console.log(cAttackingTroops);
  if (attackResult==1){
    if (compEnd=="t1"){
      t1=Math.round(cAttackingTroops);
      document.getElementById("t1").innerHTML=t1;
    }
    else if (compEnd=="t2"){
      t2=Math.round(cAttackingTroops);
      document.getElementById("t2").innerHTML=t2;
      t2C=1;
    }
    else if (compEnd=="t3"){
      t3=Math.round(cAttackingTroops);
      document.getElementById("t3").innerHTML=t3;
    }
    else if (compEnd=="t4"){
      t4=Math.round(cAttackingTroops);
      document.getElementById("t4").innerHTML=t4;
    }
    else if (compEnd=="t5"){
      t5=Math.round(cAttackingTroops);
      document.getElementById("t5").innerHTML=t5;
    }
    else if (compEnd=="t6"){
      t6=Math.round(cAttackingTroops);
      document.getElementById("t6").innerHTML=t6;
    }
    else if (compEnd=="t7"){
      t7=Math.round(cAttackingTroops);
      document.getElementById("t7").innerHTML=t7;
    }
    else if (compEnd=="t8"){
      t8=Math.round(cAttackingTroops);
      document.getElementById("t8").innerHTML=t8;
    }
    else if (compEnd=="t9"){
      t9=Math.round(cAttackingTroops);
      document.getElementById("t9").innerHTML=t9;
    }
    if (compStart=="t1"){
      document.getElementById("t1").innerHTML="0";
      t1=1;
    }
    else if (compStart=="t2"){
      document.getElementById("t2").innerHTML="0";
      t2=1;
    }
    else if (compStart=="t3"){
      document.getElementById("t3").innerHTML="0";
      t3=1;
    }
    else if (compStart=="t4"){
      document.getElementById("t4").innerHTML="0";
      t4=1;
    }
    else if (compStart=="t5"){
      document.getElementById("t5").innerHTML="0";
      t5=1;
    }
    else if (compStart=="t6"){
      document.getElementById("t6").innerHTML="0";
      t6=1;
    }
    else if (compStart=="t7"){
      document.getElementById("t7").innerHTML="0";
      t7=1;
    }
    else if (compStart=="t8"){
      document.getElementById("t8").innerHTML="0";
      t8=1;
    }
    else if (compStart=="t9"){
      document.getElementById("t9").innerHTML="0";
      t9=1;
    }
  }
}
function setCResults(){
  if (compStart=="t1"){
    t1=Math.round(cAttackingTroops);
  }
  else if (compStart=="t2"){
    t2=Math.round(cAttackingTroops);
  }
  else if (compStart=="t3"){
    t3=Math.round(cAttackingTroops);
  }
  else if (compStart=="t4"){
    t4=Math.round(cAttackingTroops);
  }
  else if (compStart=="t5"){
    t5=Math.round(cAttackingTroops);
  }
  else if (compStart=="t6"){
    t6=Math.round(cAttackingTroops);
  }
  else if (compStart=="t7"){
    t7=Math.round(cAttackingTroops);
  }
  else if (compStart=="t8"){
    t8=Math.round(cAttackingTroops);
  }
  else if (compStart=="t9"){
    t9=Math.round(cAttackingTroops);
  }
  if (compEnd=="t1"){
    t1=Math.round(cDefendingTroops);
  }
  else if (compEnd=="t2"){
    t2=Math.round(cDefendingTroops);
  }
  else if (compEnd=="t3"){
    t3=Math.round(cDefendingTroops);
  }
  else if (compEnd=="t4"){
    t4=Math.round(cDefendingTroops);
  }
  else if (compEnd=="t5"){
    t5=Math.round(cDefendingTroops);
  }
  else if (compEnd=="t6"){
    t6=Math.round(cDefendingTroops);
  }
  else if (compEnd=="t7"){
    t7=Math.round(cDefendingTroops);
  }
  else if (compEnd=="t8"){
    t8=Math.round(cDefendingTroops);
  }
  else if (compEnd=="t9"){
    t9=Math.round(cDefendingTroops);
  }
}
