
  let sTens = document.getElementById("secondTens");
  let sOnes = document.getElementById("secondOnes");
  let msH = document.getElementById("msHundreds");
  let msT = document.getElementById("msTens");
  let digitArray = [msT, msH, sOnes, sTens];

 

  window.onload = screenSetup();

  function screenSetup() {
    let startButton = document.createElement('button');
    startButton.setAttribute("id", "startButton");
    startButton.textContent = "Start Timer";
    document.querySelector(".container").appendChild(startButton);

    startButton.addEventListener("click", startTimer);
  }

  function startTimer() {
      digitArray.forEach(elem => elem.textContent = 0);
      updateMsTens();
  }

  function resetTimer() {

  }

 function updateSecondOnes() {
    if(sOnes.textContent < 9) {
        sOnes.textContent ++;
    }
    else{
        sOnes.textContent = 0;
        sTens.textContent = 1; 
        msH.textContent = 0;
        msT.textContent = 0;   
    }
 }

 function updateMsHundreds() {
    if(msH.textContent < 9) {
        msH.textContent++;
        updateMsTens();
    } else {
        msH.textContent = 0;
        updateSecondOnes();
        updateMsTens();
    }
 }

 function updateMsTens() {
    setTimeout(function(){
        if (msT.textContent == 9) updateMsHundreds();}, 100)
    if(sTens.textContent < 1){
        for(let i = 0; i < 10; i++) {
            setTimeout(function() { msT.textContent = i }, i*10);        
        } 
    }   
 }