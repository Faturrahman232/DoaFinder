import "./doa-item.js";

class DoaList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set doas(doas) {
    this._doas = doas;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = "";

    this._doas.forEach((doa) => {
      const doaItemElement = document.createElement("doa-item");
      doaItemElement.doa = doa;
      this.shadowDOM.appendChild(doaItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("doa-list", DoaList);
