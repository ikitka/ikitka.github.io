
class Progress {
  constructor(container, rad, id) {
    this.container = container;
    this.createProgress(rad, id);
    this.circleFront = this.container.querySelector(`.id-${id}`);
    this.calculateRadius();
    this.setValue(0);
  }

  createProgress(rad, id) {
    this.container.innerHTML = `
      <svg class="progress-circle" viewBox="0 0 ${(rad + 5) * 2} ${(rad + 5) * 2}" width="${(rad + 5) * 2}" height="${(rad + 5) * 2}">
        <circle class="progress-circle-back" cx="${rad + 5}" cy="${rad + 5}" r="${rad}"/>
        <circle class="progress-circle-front id-${id}" cx="${rad + 5}" cy="${rad + 5}" r="${rad}"/>
      </svg>

      <style>
        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }
        
        .progress-circle {
          transform: rotate(-90deg);
        }
        .progress-circle-front {
          fill: none;
          stroke: #005CFF;
          stroke-width: 10px;
          background-color: transparent;
          transform-origin: center;
          transform: rotate(-90 60 60);
        }
        
        .progress-circle-back {
          stroke-width: 10;  
          fill: none;
          stroke: #EAF0F6;
        }
      </style>
    `;
  }

  calculateRadius() {
    this.radius = parseFloat(this.circleFront.getAttribute('r'));
  }

  setValue(value) {
    this.calculateRadius();
    const diameter    = this.radius * 2;
    const length      = Math.PI * diameter;
    const degrees     = ((value / 100) * 360);
    const dashLength  = (degrees / 360) * length;
    this.circleFront.style.strokeDasharray = `${dashLength} ${length}`;
  }

  setAnimate(animate) {
    if (animate) {
      this.circleFront.style.animation = 'rotate 3.5s linear infinite';
    } else {
      this.circleFront.style.webkitAnimationPlayState = 'paused'; // положение сохраняется
      //this.circleFront.style.animation = 'none'; // положение сбрасывается
    }
  }

  setHide(hidden) {
    // здесь только визуально элемент скрываем
    if (hidden) {
      this.container.style.visibility = 'hidden';
    } else {
      this.container.style.visibility = 'visible';
    }

    // здесь скрываем элемент полностью со страницы
    //if (hidden) {
    //  this.container.style.display = 'none';
    //} else {
    //  this.container.style.display = '';
    //}
  }
}