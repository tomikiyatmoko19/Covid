var $ = require('jquery');

$(document).ready(function GetIndoInform(){
    $.ajax({
        url : "https://api.kawalcorona.com/indonesia/",
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            try {
                if(data.length > 0) {
                    let j;
                    for(j=0;j<data.length;j++) {
                        let html= [];
                        let data_country =data[j];
                        let positif = data_country.positif;
                        let sembuh = data_country.sembuh;
                        let meninggal = data_country.meninggal;

                        html.push("<thead>");
                        html.push("<tr>");
                        html.push("<th> Jumlah Positif = " + positif + "</th>");
                        html.push("</tr>");
                        html.push("<tr>");
                        html.push("<th> Jumlah Sembuh = " + sembuh + "</th>");
                        html.push("</tr>");
                        html.push("<tr>");
                        html.push("<th> Jumlah Meninggal = " + meninggal + "</th>");
                        html.push("</tr>");
                        html.push("</thead>");

                        $("#kondisi-indo").append(html.join(""));
                    }
                }
            }catch(e){
                alert("No data");
            }
        }, error : function(resp) {
        }
    });
});

$(document).ready(function GetIndoProvInform(){
    $.ajax({
        url : "https://api.kawalcorona.com/indonesia/provinsi/",
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            try {
                if(data.length > 0) {
                    let j;
                    for(j=0;j<data.length;j++) {
                        let html= [];
                        let data_provinsi =data[j];
                        let no = j+1;
                        let Provi = data_provinsi.attributes.Provinsi;
                        let positif = data_provinsi.attributes.Kasus_Posi;
                        let sembuh = data_provinsi.attributes.Kasus_Semb;
                        let meninggal = data_provinsi.attributes.Kasus_Meni;

                        html.push("<tr>");
                        html.push("<td>" + no + "</td>");
                        html.push("<td>"+ Provi + "</td>");
                        html.push("<td>" + positif + "</td>");
                        html.push("<td>" + sembuh + "</td>");
                        html.push("<td>" + meninggal + "</td>");
                        html.push("</tr>");

                        $("#list-provinsi").append(html.join(""));
                    }
                }
            }catch(e){
                alert("No data");
            }
        }, error : function(resp) {
        }
    });
});
