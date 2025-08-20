(function(){
  "use strict";

  let filterText = function(el){
    let t = el.target;
    let onlyNum = /[^\d]/gi;
    t.value = t.value.replace(onlyNum, '');
  }
    
  let inputEl = document.getElementById('totalchange');
  inputEl.addEventListener('input', filterText);
  
  
})();
