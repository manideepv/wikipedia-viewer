/**
 * Created by Neha.
 */
$(document).ready(function(){
    $('#submitbutton').click(function(){

        var searchTerm = $('#searchbar').val();
        var wikiurl = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";

        $.ajax({
            type: "GET",
            url: wikiurl,
            async:false,
            dataType:"json",
            success: function(data){
                /* heading:console.log(data[1][0]);
                 desc: console.log(data[2][0]);
                 link: console.log(data[3][0]);*/
                $('#output').html(' ');
                for(var i=0;i<data[1].length;i++){
                    $('#output').prepend('<div id="search-item"><h1><a target="_blank" href="'+data[3][i]+'">'+data[1][i] +'</a></h1><p>'+data[2][i]+'</p></div>');
                }
                $('#searchbar').val('');
            },
            error: function(errorMessage){
                alert("Error");
            }

        });
    });
    $('#searchbar').keypress(function(e){
        if(e.which == 13){
            $('#submitbutton').click();
        }
    });
});
