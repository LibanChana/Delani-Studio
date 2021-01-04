$(document).ready(function() {
    $(".design1").click(function() {
        $("#imgDesign").slideToggle();
        $("#contentDesign").slideToggle();

    });

    $(".design2").click(function() {
        $("#imgDesign2").slideToggle();
        $("#contentDesign2").slideToggle();


    });
    $(".design3").click(function() {
        $("#imgDesign3").slideToggle();
        $("#contentDesign3").slideToggle();


    });
    $("button").click(function() {
        var name = document.getElementById("text1").value;
        var email = document.getElementById("text2").value;
        var message = document.getElementById("text3").value;
        if (name === "") {
            alert("enter your name")
        } else
        if (email === "") {
            alert("enter your email")
        } else
        if (message === "") {
            alert("type text")
        } else {
            alert("Dear " + name + " we have received your message successfully." +
                " Feel free to reach out to us anytime. Click Ok to continue to the next page.");
        }
    });

});