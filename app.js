jQuery(document).ready(function($) {
    $('#search').keyup(function(){
        $('#cityListBody').html('');
        var search = $('#search').val();
        var expression = new RegExp(search, 'i');
        $.getJSON("https://raw.githubusercontent.com/hienvd/vietnam-cities-list/master/cities.json",
            function (cities) {
                $.each(cities, function(key, value){
                    if(value.city.search(expression) != -1 || value.province.search(expression) != -1) {
                        $('#cityListBody').append($("<tr>")
                            .append($("<td>").append(value.city))
                            .append($("<td>").append(value.province))
                            .append($("<td>").append(value.area))
                            .append($("<td>").append(value.population)));
                    }
                });
            }
        );
    });
});