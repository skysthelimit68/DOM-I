let _sTens = document.getElementById("_secondTens");
  let _sOnes = document.getElementById("_secondOnes");
  let _msH = document.getElementById("_msHundreds");
  let _msT = document.getElementById("_msTens");
  let _digitArray = [_msT, _msH, _sOnes, _sTens];

  window.onload = _screenSetup();
  let interval;


  function _screenSetup() {
    _createStartButton();
    _createResetButton();
    
  }

  function _createStartButton(){
      let _startButton = document.createElement('button');
    _startButton.setAttribute("id", "_startButton");
    _startButton.textContent = "Start Timer";
    document.querySelector(".interval_container").appendChild(_startButton);
    _startButton.addEventListener("click", (event) => {
        _digitArray.forEach(elem => elem.textContent = 0);
        _updateMsTens();
    });
  }

  function _createResetButton() {
      let _resetButton = document.createElement('button');
    _resetButton.setAttribute("id","_resetButton");
    _resetButton.textContent = "Reset Timer";
    document.querySelector(".interval_container").appendChild(_resetButton);
    _resetButton.addEventListener("click", (event) => {
        clearInterval(interval); 
        _digitArray.forEach(elem => elem.textContent = 0);
    })
  }

 function _updateSecondOnes() {
    if(_sOnes.textContent < 9) {
        _sOnes.textContent ++;
    }
    else{
        _sOnes.textContent = 0;
        _sTens.textContent = 1; 
        _msH.textContent = 0;
        _msT.textContent = 0;   
    }
 }

 function _updateMsHundreds() {
    if(_msH.textContent < 9) {
        _msH.textContent++;
    } else {
        _msH.textContent = 0;
        _updateSecondOnes();
    }
 }

function _updateMsTens() {
    interval = setInterval(resultFunction, 10); 
}

function resultFunction(){
    if(_msT.textContent < 9) {
        _msT.textContent++;
    } else {
        _msT.textContent = 0;
        _updateMsHundreds();
    }
    if(_sTens.textContent >= 1) {
        clearInterval(interval);
    }
}