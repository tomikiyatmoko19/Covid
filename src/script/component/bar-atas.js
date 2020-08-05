import './label-bar.js';
import './label-bar2.js';

class barAtas extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <div class="container">
        <div class="row justify-content-md-center">
        <div class="col">
        <label-bar></label-bar>
        </div>
        <div class="col-8">
        <label-bar2></label-bar2>
        </div>
        </div>`;
    }
  }
  
  customElements.define("bar-atas", barAtas);