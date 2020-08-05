class navBar extends HTMLElement {

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
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #37B6F6;
        background-image: linear-gradient(100deg, blue, white);
        opacity:0.6;
      }
      
      li {
        float: left;
      }
      
      li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      
      li a:hover:not(.active) {
        background-color: blue;
      }

      </style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <ul>
      <li><a href="./index.html"><i class="fa fa-fw fa-search"></i> Kondisi Terkini</a></li> 
      <li><a href="./tentang-virus.html"><i class="fa fa-sun-o" aria-hidden="true"></i> Tentang COVID19 </a><li> 
      </ul>`;
  }
}

customElements.define("navi-bar", navBar);