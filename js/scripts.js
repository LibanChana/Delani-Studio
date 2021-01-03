// Business (or back-end) logic:

/*var add = function(number1, number2) {
return number1 + number2;
};
var subtract = function(number1, number2) {
    return number1 - number2;
};
var multiply = function(number1, number2) {
    return number1 * number2;
};
var divide = function(number1, number2) {
    return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
    var number1 = parseInt(prompt("Enter a number:"));
    var number2 = parseInt(prompt("Enter another number:"));
    alert(add(number1, number2));
});*/
$('.main').hover(function() {
    $(".main").hover(function() {
        $(this).children(".second").show();
        $(".img8").css({
            opacity: 0.6
        });
    });

    $(".main").mouseleave(function() {
        $(".img8").css({
            opacity: 0.9
        });
        $(".second").hide();
    });
});
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