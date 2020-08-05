class LabelBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
           * {
               box-sizing: border-box;
               border-right: 10px solid white;
               border-left: 10px solid blue;
               border-top: 8px solid white;
           }
           :host {
               display: block;
               width: 100%;
               background-color: blue;
               background-image: linear-gradient(100deg, blue, white);
               color: white;
               opacity:0.5;
           }
           h2 {
               padding: 16px;
               text-align: left;
           }
       </style>
       <h2>Kondisi Indonesia</h2>`;
    }
}

customElements.define("label-bar", LabelBar);