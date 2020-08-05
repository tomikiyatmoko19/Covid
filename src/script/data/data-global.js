var $ = require('jquery');

$(document).ready(function GetGlobalInform(){
    $.ajax({
        url : "https://coronavirus-19-api.herokuapp.com/all",
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            try {
                let dataa = data;
                let kasus = dataa.cases;
                let mati = dataa.deaths;
                let sembuh = dataa.recovered;

                $("#kasus-global").html("  = "+ kasus);
                $("#meninggal-global").html(" = "+ mati);
                $("#pulih-global").html(" = "+ sembuh);
                
            }catch(e){
                alert("No data");
            }
        }, error : function(resp) {
        }
    });
});


$(document).ready(function GetCountryInform(){
    $.ajax({
        url : "https://api.kawalcorona.com/",
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            try {
                let dataa = data;
                
                if(dataa.length > 0) {
                    let j;
                    for(j=0;j<dataa.length;j++) {
                        let html= [];
                        let data_country =dataa[j];
                        let no = j+1;
                        let namanegara = data_country.attributes.Country_Region;
                        let kasus = data_country.attributes.Confirmed;
                        let meninggal = data_country.attributes.Deaths;
                        let pulih = data_country.attributes.Recovered;
                        let pasienaktif = data_country.attributes.Active;

                        html.push("<tr>");
                        html.push("<td>" + no + "</td>");
                        html.push("<td>"+ namanegara + "</td>");
                        html.push("<td>" + kasus + "</td>");
                        html.push("<td>" + meninggal + "</td>");
                        html.push("<td>" + pulih + "</td>");
                        html.push("<td>" + pasienaktif + "</td>");
                        html.push("</tr>");

                        $("#list-negara").append(html.join(""));
                    }
                }
            }catch(e){
                alert("No data");
            }
        }, error : function(resp) {
        }
    });
});
