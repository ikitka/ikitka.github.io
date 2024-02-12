
class Progress {
  constructor(container, rad) {
    this.container = container;
    this.createProgress(rad);
    this.circleFront = this.container.querySelector('.progress-circle-front');
    this.calculateRadius();
    this.setValue(0);
  }

  createProgress(rad) {
    this.container.innerHTML = `
      <svg class="progress-circle" viewBox="0 0 ${(rad + 5) * 2} ${(rad + 5) * 2}" width="${(rad + 5) * 2}" height="${(rad + 5) * 2}">
        <circle class="progress-circle-back" cx="${rad + 5}" cy="${rad + 5}" r="${rad}"/>
        <circle class="progress-circle-front" cx="${rad + 5}" cy="${rad + 5}" r="${rad}"/>
      </svg>

      <style>
        @keyframes rotate {
            100% {
              transform: rotate(360deg);
            }
        }
        
        .progress-circle-front {
            fill: none;
            stroke: #005CFF;
            stroke-width: 8px;
            background-color: transparent;
            transform-origin: center;
        }
        
        .progress-circle-back {
            fill: none;
            stroke: #EAF0F6;
            stroke-width: 8;
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
    const degrees     = 180 + (value / 100) * 180;
    const dashLength  = (degrees / 360) * length;
    this.circleFront.style.strokeDasharray = `${dashLength} ${length}`;
  }

  setAnimate(animate) {
    if (animate) {
      this.circleFront.style.animation = 'rotate 3s linear infinite';
    } else {
      this.circleFront.style.animation = 'none';
    }
  }

  setHide(hidden) {
    if (hidden) {
      this.container.style.display = 'none';
    } else {
      this.container.style.display = '';
    }
  }
}