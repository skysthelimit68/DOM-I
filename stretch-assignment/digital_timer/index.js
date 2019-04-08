
  let sTens = document.getElementById("secondTens");
  let sOnes = document.getElementById("secondOnes");
  let msH = document.getElementById("msHundreds");
  let msT = document.getElementById("msTens");
  let digitArray = [msT, msH, sOnes, sTens];
  let reset;

  window.onload = screenSetup();
 
  function screenSetup() {
    createStartButton();
    createResetButton();
  }

  function createStartButton() {
    let startButton = document.createElement('button');
    startButton.setAttribute("id", "startButton");
    startButton.textContent = "Start Timer";
    document.querySelector(".timeout_container").appendChild(startButton);
    startButton.addEventListener("click", (event) => {
        digitArray.forEach(elem => elem.textContent = 0);
        reset = false;
        updateMsTens();
    });  
  }

  function createResetButton() {
    let resetButton = document.createElement('button');
    resetButton.setAttribute("id","resetButton");
    resetButton.textContent = "Reset Timer";
    document.querySelector(".timeout_container").appendChild(resetButton);
    resetButton.addEventListener("click", (event) => {
       clearTimeout(hundredsTimeout);
       clearTimeout(mstTimeout);
        reset = true;
        digitArray.forEach(elem => elem.textContent = 0);
    })
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
let hundredsTimeout;
let mstTimeout;
 
function updateMsTens() {
    hundredsTimeout = setTimeout(function(){
        if (msT.textContent == 9 && !reset) 
        updateMsHundreds();}, 100);
    if(sTens.textContent < 1){
        for(let i = 0; i < 10; i++) {
            if(!reset) {
                mstTimeout = setTimeout(function() { 
                    msT.textContent = i; 
                }, i*10);        
           } else {
                msT.textContent = 0;
                break;
            }
                    
        }   
    }
}