
class Checkbox {
    constructor(container) {
      this.container = container;
      this.createProgress();
      this.checkbox = this.container.querySelector('.checkbox-custom');
      this.calculateRadius();
      this.setValue(0);
    }
  
    createCheckbox(rad) {
      this.container.innerHTML = `
        <svg class="progressCircle" viewBox="0 0 ${(rad + 5) * 2} ${(rad + 5) * 2}" width="${(rad + 5) * 2}" height="${(rad + 5) * 2}">
          <circle class="progressCircleBack" cx="${rad + 5}" cy="${rad + 5}" r="${rad}"/>
          <circle class="progressCircleFront" cx="${rad + 5}" cy="${rad + 5}" r="${rad}"/>
        </svg>
  
        <style>
          .checkbox-custom {
              fill: none;
              stroke: #005CFF;
              stroke-width: 8px;
              background-color: transparent;
              transform-origin: center;
          }
          
          .progressCircleBack {
              fill: none;
              stroke: #EAF0F6;
              stroke-width: 8;
          }
        </style>
      `;
    }

  
    setActive(active) {
      
      active = !active;

      if (active) {
        
      } else {
        
      }
    }
  }