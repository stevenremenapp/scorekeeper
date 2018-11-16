//state

let scores = {
  team1: Number(sessionStorage.getItem('team1score') ? sessionStorage.getItem('team1score') : 0),
  team2: Number(sessionStorage.getItem('team2score') ? sessionStorage.getItem('team2score') : 0),
  team3: Number(sessionStorage.getItem('team3score') ? sessionStorage.getItem('team3score') : 0),
  team4: Number(sessionStorage.getItem('team4score') ? sessionStorage.getItem('team4score') : 0)
}

//countdown timer
let myTimer;

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

let startTimerBtn = document.getElementById('start-timer');
startTimerBtn.addEventListener('click', function() {
  clock();
})

//stop timer and music upon button click

function stop() {
  document.getElementById('countdownClip').pause();
  document.getElementById('countdownClip').currentTime = 0;
  clearInterval(myTimer);
  document.getElementById('timer').textContent = "--";
  //can't just set the var to false (i.e. var myTimer = false), have to use return
  return myTimer = false;
}

let stopTimerBtn = document.getElementById('stop-timer');
stopTimerBtn.addEventListener('click', function() {
  stop();
});

// right sound

function rightSound() {
  document.getElementById('rightClip').play();
}

let rightSoundBtn = document.getElementById('right');
rightSoundBtn.addEventListener('click', function() {
  rightSound();
});

// wrong sound

function wrongSound() {
  document.getElementById('wrongClip').play();
}

let wrongSoundBtn = document.getElementById('wrong');
wrongSoundBtn.addEventListener('click', function() {
  wrongSound();
});

//handle scoring

function renderScores() {
  document.getElementById('team1display').textContent = scores['team1'];
  document.getElementById('team2display').textContent = scores['team2'];
  document.getElementById('team3display').textContent = scores['team3'];
  document.getElementById('team4display').textContent = scores['team4'];
}

renderScores();

let scoreContainer = document.getElementById('score-container');

scoreContainer.addEventListener('click', function(event) {

  let teamId = event.target.parentNode.dataset.team;
  teamScore = teamId + 'score';

  if (event.target.classList.contains('plus1')) {
    addOne(teamId);
  }
  if (event.target.classList.contains('plus2')) {
    addTwo(teamId);
  }
  if (event.target.classList.contains('minus1')) {
    minusOne(teamId);
  }
})

function addOne(teamId) {
  //update score
  scores[teamId] += 1;
  //store into local storage
  sessionStorage.setItem(teamScore, scores[teamId]);
  //display score
  renderScores();
}

function addTwo(teamId) {
  scores[teamId] += 2;
  sessionStorage.setItem(teamScore, scores[teamId]);
  renderScores();
}


function minusOne(teamId) {
  scores[teamId] -= 1;
  sessionStorage.setItem(teamScore, scores[teamId]);
  renderScores();
}