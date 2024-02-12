const Progress = {
  circle:           document.getElementById('circle'),
  valueInput:       document.getElementById('valueInput'),
  animateCheckbox:  document.getElementById('animateCheckbox'),
  hideCheckbox:     document.getElementById('hideCheckbox'),

  setValue: function (value) {
    this.valueInput.value = value;
    const degrees = (value / 100) * 360 - 90;
    this.circle.style.transform = `rotate(${degrees}deg)`;
  },

  setAnimate: function (animate) {
    this.animateCheckbox.checked = animate;
    if (animate) {
      this.circle.style.animation = 'rotate 2s linear infinite';
    } else {
      this.circle.style.animation = 'none';
    }
  },

  setHide: function (hidden) {
    this.hideCheckbox.checked = hidden;
    if (hidden) {
      this.progressBlock.style.display = 'none';
    } else {
      this.progressBlock.style.display = 'flex';
    }
  },
};

Progress.valueInput.addEventListener('input', () => {
  arcBlock.setValue(parseInt(arcBlock.valueInput.value));
});

Progress.animateCheckbox.addEventListener('change', () => {
  arcBlock.setAnimate(arcBlock.animateCheckbox.checked);
});

Progress.hideCheckbox.addEventListener('change', () => {
  arcBlock.setHide(arcBlock.hideCheckbox.checked);
});