$(document).ready(
    function() {
        $("#btn_add").click(
            function() {
                let firstName = document.getElementById("txtFirstName").value;
                let lastName = document.getElementById("txtLastName").value;
                let body = {
                    "nombre": firstName,
                    "apellidos": lastName
                }
                $.ajax({
                    type: "POST",
                    url: "http://localhost:8080/clients/save",
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(body),
                    success: function(data) {
                        console.log(data);
                        window.location.href = "./index.html";
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        console.log("Request: " + XMLHttpRequest.toString() + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                    }
                });

            }
        );
    }
);