
class Checkbox {
  constructor(container, id, text) {
    this.container = container;
    this.createCheckbox(id, text);
  }

  createCheckbox(id, text) {
    this.container.innerHTML = `
      <div class="checkbox-custom">
        <input class="checkbox-input" type="checkbox" id="check-${id}">
        <label class="checkbox-button" for="check-${id}"></label>
        <label class="checkbox-text" for="check-${id}">${text}</label>
      </div>

      <style>
        .checkbox-custom {
          width: 100%;
          height: 100%;
          background-color: transparent;
          display: flex;
          justify-content: left;
          align-items: center;
          margin: 10px;
          margin-left: 0px;
        }
        
        .checkbox-button {
          background-color: #d2d2d2;
          width: 45px;
          height: 28px;
          border-radius: 45px;
          cursor: pointer;
          position: relative;
          transition: 0.1s;
        }
        .checkbox-button::before {
          position: absolute;
          content: '';
          width: 24px;
          height: 24px;
          border-radius: 45px;
          background-color: #fff;
          margin: 2px;
          transition: 0.1s;
        }
        .checkbox-input:checked + .checkbox-button {
          background-color: #005CFF;
        }
        .checkbox-input:checked + .checkbox-button::before {
          transform: translateX(17px);
        }
        .checkbox-input {
          display: none;
        }
        .checkbox-text {
          margin-left: 20px;
        }
      </style>
    `;
  }

  getCheckbox() {
    return this.container.querySelector('.checkbox-input');
  }

}