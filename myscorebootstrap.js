// countdown function
// it must:
// play the countdown music
// start the countdown timer
//repeat these functions over and over (i.e. var i must start at 30 every time -- place var i = 30 into the beginning of the function)

var myTimer;

function clock() {
    if (!myTimer) {
    document.getElementById('countdownClip').play();
    myTimer = setInterval(myClock, 1000);
    var i = 30;

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


// function startTimer() {
  // stop(); stop was put here in an effort to override the countdown
//   document.getElementById('countdownClip').play();
//   var i = 30;
//   var countdownTimer = setInterval(function() {
//     document.getElementById('timer').textContent = i;
//     // console.log(i);
//     i--;
//     if(i<0) {
//       clearInterval(countdownTimer);
//     }
//   }, 1000);
// }



//stop timer and music upon button click

function stop() {
  document.getElementById('countdownClip').pause();
  document.getElementById('countdownClip').currentTime = 0;
  clearInterval(myTimer);
  document.getElementById('timer').textContent = "--";
  //can't just set the var to false, have to use return
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

var team1total = 0;

document.getElementById('1plus1').onclick = addOne;

function addOne() {
  team1total++;
  document.getElementById('team1display').textContent = team1total;
}

document.getElementById('1plus2').onclick = addTwo;

function addTwo() {
  team1total = team1total + 2;
  document.getElementById('team1display').textContent = team1total;
}

document.getElementById('1minus1').onclick = minusOne;

function minusOne() {
  team1total--;
  document.getElementById('team1display').textContent = team1total;
}

// team 2 scoring

var team2total = 0;

document.getElementById('2plus1').onclick = addOne2;

function addOne2() {
  team2total++;
  document.getElementById('team2display').textContent = team2total;
}

document.getElementById('2plus2').onclick = addTwo2;

function addTwo2() {
  team2total = team2total + 2;
  document.getElementById('team2display').textContent = team2total;
}

document.getElementById('2minus1').onclick = minusOne2;

function minusOne2() {
  team2total--;
  document.getElementById('team2display').textContent = team2total;
}

// team 3 scoring

var team3total = 0;

document.getElementById('3plus1').onclick = addOne3;

function addOne3() {
  team3total++;
  document.getElementById('team3display').textContent = team3total;
}

document.getElementById('3plus2').onclick = addTwo3;

function addTwo3() {
  team3total = team3total + 2;
  document.getElementById('team3display').textContent = team3total;
}

document.getElementById('3minus1').onclick = minusOne3;

function minusOne3() {
  team3total--;
  document.getElementById('team3display').textContent = team3total;
}

// team 4 scoring

var team4total = 0;

document.getElementById('4plus1').onclick = addOne4;

function addOne4() {
  team4total++;
  document.getElementById('team4display').textContent = team4total;
}

document.getElementById('4plus2').onclick = addTwo4;

function addTwo4() {
  team4total = team4total + 2;
  document.getElementById('team4display').textContent = team4total;
}

document.getElementById('4minus1').onclick = minusOne4;

function minusOne4() {
  team4total--;
  document.getElementById('team4display').textContent = team4total;
}
