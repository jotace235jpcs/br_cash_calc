(function(){
  "use strict";
  
  // Prevent input non-numeric characteres
  let onlyNumbers = function(e){
    let regexNum = /[\d]/; // regex for numbers
    if (!onlyNum.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
      e.preventDefault();
    }
  }
  
  let inputEl = document.getElementById('totalchange');
  inputEl.addEventListener('keydown', filterText);
  
  
})();


