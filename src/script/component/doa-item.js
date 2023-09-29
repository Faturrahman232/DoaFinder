class DoaItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set doa(doa) {
    this._doa = doa;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          gap: 20px;
        }
        .fan-art-doa {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        .doa-info {
          padding: 24px;
        }
        .doa-info > h2 {
          font-weight: lighter;
        }
        .doa-info > h3 {
          font-weight: lighter;
        }
        .doa-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      <div class="doa-info">
        <h1>${this._doa.doa}</h1>
        <h3>${this._doa.ayat}</h3>
        <p>${this._doa.latin}</p>
        <p>${this._doa.artinya}</p>
      </div>

    `;
  }
}

customElements.define("doa-item", DoaItem);
