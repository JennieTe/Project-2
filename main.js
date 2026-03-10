
window.addEventListener('DOMContentLoaded', function() {
  var plusBtn = document.getElementById('plus');
  var minusBtn = document.getElementById('minus');
  var numberSpan = document.getElementById('number');
  var enterBtn = document.getElementById('enter');
  var signupBtn = document.getElementById('signup');

  // Plus button increases the number by 1
  plusBtn.onclick = function() {
    numberSpan.textContent = parseInt(numberSpan.textContent) + 1;
  };

  // Minus button decreases the number by 1, but not below 0
  minusBtn.onclick = function() {
    var current = parseInt(numberSpan.textContent);
    if(current > 0){
      numberSpan.textContent = current - 1;
    }
  };

  // When the Enter button is clicked, append a digit (e.g., "0") at the end
  enterBtn.addEventListener('click', function() {
    numberSpan.textContent = numberSpan.textContent + "0";
  });

  signupBtn.addEventListener("click", function() {
  // remove animation class if it's already there
  signupBtn.classList.remove("animate__animated", "animate__fadeOutRightBig");
  // add Animate.css classes
  signupBtn.classList.add("animate__animated", "animate__fadeOutRightBig");
});
} )
