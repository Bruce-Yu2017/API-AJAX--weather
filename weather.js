$(document).ready(function () {

    $("#submitbutton").click(function() {
        var value = $("#inputarea").val();
//        console.log(city);
        var link = "http://api.openweathermap.org/data/2.5/weather?q=" + value + "&APPID=0d0df2002149b1b85795a0433a9e0efa";
        $.get(link, function (res) {
            var temp = res.main.temp;
            var name = res.name;
            $("#cityname").html("City: " + name);
            $("#temperature").html("Weather: " + temp);
        },"json");
        return false;

    });
});

        
