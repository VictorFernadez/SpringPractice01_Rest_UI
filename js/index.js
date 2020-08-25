$(document).ready(
    function() {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/clients/list/",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function(data) {
                var html = '';
                var i;
                for (i = 0; i < data.length; i++) {
                    html += '<tr>' +
                        '<td>' + data[i].nombre + '</td>' +
                        '<td>' + data[i].apellidos + '</td>' +
                        '</tr>';
                }
                $('#dataResult').html(html);

                console.log("Entró al servicio");
            },
            error: function(XMLhttpRequest, textStatus, errorThrown) {
                toastr.error("Request: " + XMLhttpRequest.toString() + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
            }
        });
    }
);