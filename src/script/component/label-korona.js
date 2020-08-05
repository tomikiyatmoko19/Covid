class Labelkorona extends HTMLElement {

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
               border-left: 10px solid white;
               border-top: 8px solid white;
           }
           :host {
               display: block;
               width: 100%;
               background-color: purple;
               background-image: linear-gradient(100deg, purple, white);
               color: white;
               opacity:0.6;
           }
           h2 {
               padding: 16px;
               text-align: left;
           }
       </style>
       <h2>Corona Virus (COVID19)..</h2>`;
    }
}

customElements.define("label-korona", Labelkorona);