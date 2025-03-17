function moveDodgerLeft() {
  const dodger = document.getElementById('dodger');
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const dodger = document.getElementById('dodger');
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left < 360) { // assuming the game area width is 400px and dodger width is 40px
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (e.key === 'ArrowRight') {
    moveDodgerRight();
  }
});
