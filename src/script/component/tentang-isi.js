class tentangIsi extends HTMLElement {

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
           :host {
               display: block;
               width: 100%;
               background-color: white;
               background-image: linear-gradient(100deg, white, white);
               color: black;
               font-family: "Times New Roman", Times, serif;
               opacity:0.6;
           }
           p {
               padding: 20px;
               text-align: justify;
               margin:4px;
           }
       </style>
       <p> &nbsp &nbsp &nbsp Korona Virus biasa disebut secara ilmiah yaitu coronavirus (istilah yang banyak di gunakan masyarakat yaitu virus korona, virus corona, atau virus Corona) merupakan kumpulan virus dari bagian keluarga Orthocoronavirinae termasuk keluarga Coronaviridae dan berasal dari ordo Nidovirales. 
       Kumpulan dari virus ini dapat memberikan penyakit yang merugikan baik itu pada hewan seperti burung serta keluarga mamalia termasuk manusia. Kerugian yang didapatkan pada manusia yaitu berupa penyakit yang penyerang pernafasan secara umum dapat dikatakan ringan misalnya pilek atau batuk.
        </br> &nbsp &nbsp &nbsp Meskipun begitu ada bentuk beberapa penyakit seperti SARS, MERS, dan COVID-19 memiliki sifat yang lebih mematikan. 
        Koronavirus adalah bentuk virus yang beramplop memiliki genom RNA terikat tunggal plus dan nukleokapsid memiliki bentuk heliks simetris. Genom koronavirus memiliki jumlah dengan rentang antara 27–34 kilo pasangan basa. Penamaan koronavirus sendiri berasal dari bahasa Latin yaitu corona yang artinya mahkota, yang terlihat pada bentuk tampilan partikel virus (virion) dengan ciri-ciri mereka memiliki tepi yang mengingatkan pada mahkota atau korona pada matahari.</p>`;
    }
}

customElements.define("tentang-isi", tentangIsi);