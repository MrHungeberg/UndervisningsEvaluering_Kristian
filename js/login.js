
$(document).ready(function () {

    $("#loginButton").on("click", function(e){
        e.preventDefault();

        var email = $("#inputEmail").val();
        var password = $("#inputPassword").val();

        SDK.login(email, password, function(err, data){

            //On wrong credentials
            if(err) {
                return $("#loginForm").find(".form-group").addClass("has-error");
            }

            //Login OK!
            $("#loginForm").find(".form-group").addClass("has-success");

        });

    });

});
