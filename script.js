//state

let scores = {
  team1: Number(sessionStorage.getItem('updatedTeam1Total') ? sessionStorage.getItem('updatedTeam1Total') : 0),
  team2: 0,
  team3: 0,
  team4: 0
}

//countdown timer
var myTimer;

function clock() {
    if (!myTimer) {
    myTimer = setInterval(myClock, 1000);
    var i = 25;
    document.getElementById('countdownClip').play();

    function myClock() {
      document.getElementById('timer').textContent = i;
      i--;
      if (i < -1) {
        clearInterval(myTimer);
        document.getElementById('timer').textContent = "--";
        //can't just set the var to false, have to use return
        return myTimer = false;
      }
    }
  }
};

//stop timer and music upon button click

function stop() {
  document.getElementById('countdownClip').pause();
  document.getElementById('countdownClip').currentTime = 0;
  clearInterval(myTimer);
  document.getElementById('timer').textContent = "--";
  //can't just set the var to false (i.e. var myTimer = false), have to use return
  return myTimer = false;

}

// right sound

function rightSound() {
  document.getElementById('rightClip').play();
}

// wrong sound

function wrongSound() {
  document.getElementById('wrongClip').play();
}


// team 1 scoring

// var team1total = Number(sessionStorage.getItem('updatedTeam1Total') ? sessionStorage.getItem('updatedTeam1Total') : 0);
let scorePlusOneBtn = document.getElementById('1plus1');

document.getElementById('team1display').textContent = scores[scorePlusOneBtn.dataset.team];

scorePlusOneBtn.addEventListener('click', addOne);
// document.getElementById('1plus1').onclick = addOne;

function addOne() {
  scores[scorePlusOneBtn.dataset.team] += 1;
  // console.log(scores[scorePlusOneBtn.dataset.team]);
  //create new variable that stores the current updated score
  var updatedTeam1Total = scores[scorePlusOneBtn.dataset.team];
  //store into local storage
  sessionStorage.setItem('updatedTeam1Total', updatedTeam1Total);
  //retrieves the variable from local storage
  var updatedTeam1Total = sessionStorage.getItem('updatedTeam1Total');
  //display score
  document.getElementById('team1display').textContent = scores[scorePlusOneBtn.dataset.team];
}





document.getElementById('1plus2').onclick = addTwo;

function addTwo() {
  //can't just do team1total = team1total + 2 or team1total += 2 bc the button will literally type 2 after the returned stored number
  //this is why the Number() function must be used on the team1total above
  team1total += 2;
  //create new variable that stores the current updated score
  var updatedTeam1Total = team1total;
  //store into local storage
  sessionStorage.setItem('updatedTeam1Total', updatedTeam1Total);
  //retrieves the variable from local storage
  var updatedTeam1Total = sessionStorage.getItem('updatedTeam1Total');
  //display score
  document.getElementById('team1display').textContent = team1total;
}

document.getElementById('1minus1').onclick = minusOne;

function minusOne() {
  team1total--;
  //create new variable that stores the current updated score
  var updatedTeam1Total = team1total;
  //store into local storage
  sessionStorage.setItem('updatedTeam1Total', updatedTeam1Total);
  //retrieves the variable from local storage
  var updatedTeam1Total = sessionStorage.getItem('updatedTeam1Total');
  //display score
  document.getElementById('team1display').textContent = team1total;
}







// team 2 scoring

var team2total = Number(sessionStorage.getItem('updatedTeam2Total') ? sessionStorage.getItem('updatedTeam2Total') : 0);
document.getElementById('team2display').textContent = team2total;

document.getElementById('2plus1').onclick = addOne2;

function addOne2() {
  team2total++;
  var updatedTeam2Total = team2total;
  sessionStorage.setItem('updatedTeam2Total', updatedTeam2Total);
  var updatedTeam2Total = sessionStorage.getItem('updatedTeam2Total');
  document.getElementById('team2display').textContent = team2total;
}

document.getElementById('2plus2').onclick = addTwo2;

function addTwo2() {
  team2total += 2;
  var updatedTeam2Total = team2total;
  sessionStorage.setItem('updatedTeam2Total', updatedTeam2Total);
  var updatedTeam2Total = sessionStorage.getItem('updatedTeam2Total');
  document.getElementById('team2display').textContent = team2total;
}

document.getElementById('2minus1').onclick = minusOne2;

function minusOne2() {
  team2total--;
  var updatedTeam2Total = team2total;
  sessionStorage.setItem('updatedTeam2Total', updatedTeam2Total);
  var updatedTeam2Total = sessionStorage.getItem('updatedTeam2Total');
  document.getElementById('team2display').textContent = team2total;
}

// team 3 scoring

var team3total = Number(sessionStorage.getItem('updatedTeam3Total') ? sessionStorage.getItem('updatedTeam3Total') : 0);
document.getElementById('team3display').textContent = team3total;

document.getElementById('3plus1').onclick = addOne3;

function addOne3() {
  team3total++;
  var updatedTeam3Total = team3total;
  sessionStorage.setItem('updatedTeam3Total', updatedTeam3Total);
  var updatedTeam3Total = sessionStorage.getItem('updatedTeam3Total');
  document.getElementById('team3display').textContent = team3total;
}

document.getElementById('3plus2').onclick = addTwo3;

function addTwo3() {
  team3total += 2;
  var updatedTeam3Total = team3total;
  sessionStorage.setItem('updatedTeam3Total', updatedTeam3Total);
  var updatedTeam3Total = sessionStorage.getItem('updatedTeam3Total');
  document.getElementById('team3display').textContent = team3total;
}

document.getElementById('3minus1').onclick = minusOne3;

function minusOne3() {
  team3total--;
  var updatedTeam3Total = team3total;
  sessionStorage.setItem('updatedTeam3Total', updatedTeam3Total);
  var updatedTeam3Total = sessionStorage.getItem('updatedTeam3Total');
  document.getElementById('team3display').textContent = team3total;
}

// team 4 scoring

var team4total = Number(sessionStorage.getItem('updatedTeam4Total') ? sessionStorage.getItem('updatedTeam4Total') : 0);
document.getElementById('team4display').textContent = team4total;

document.getElementById('4plus1').onclick = addOne4;

function addOne4() {
  team4total++;
  var updatedTeam4Total = team4total;
  sessionStorage.setItem('updatedTeam4Total', updatedTeam4Total);
  var updatedTeam4Total = sessionStorage.getItem('updatedTeam4Total');
  document.getElementById('team4display').textContent = team4total;
}

document.getElementById('4plus2').onclick = addTwo4;

function addTwo4() {
  team4total += 2;
  var updatedTeam4Total = team4total;
  sessionStorage.setItem('updatedTeam4Total', updatedTeam4Total);
  var updatedTeam4Total = sessionStorage.getItem('updatedTeam4Total');
  document.getElementById('team4display').textContent = team4total;
}

document.getElementById('4minus1').onclick = minusOne4;

function minusOne4() {
  team4total--;
  var updatedTeam4Total = team4total;
  sessionStorage.setItem('updatedTeam4Total', updatedTeam4Total);
  var updatedTeam4Total = sessionStorage.getItem('updatedTeam4Total');
  document.getElementById('team4display').textContent = team4total;
}