/*------------Validation Function-----------------*/
var count = 0; // To count blank fields.
function validation(event) {
    var input_field = document.getElementsByClassName('text_field'); // Fetching all inputs with same class name text_field and an html tag textarea.

    // For loop to count blank inputs.

    for (var i = input_field.length; i > count; i--) {
        if (input_field[i - 1].value == '') {
            count = count + 1;
        } else {
            count = 0;
        }
    }
    if (count != 0) {
        alert("*All Fields are mandatory*"); // Notifying validation
        event.preventDefault();
    } else {
        return true;
    }
}
/* Function that generate a qr*/
function qrGenerator(qr) {
    var qr2 = new VanillaQR({
        url: qr,
        width: 400,
        height: 400,
        colorLight: "#FFF",
        colorDark: "#3A005E"
    });

    var imageElement = qr2.toImage("jpg");

    var src = document.getElementById("qrimg");
    if (src.childElementCount > 0) {
        while (src.firstChild) {
            src.removeChild(src.firstChild);
        }
    }
    if (imageElement) {
        src.appendChild(imageElement);
    }
}

/*---------------------------------------------------------*/
// Function that executes on click of first next button.
function next_step1() {
    var input_field = document.getElementsByClassName('text_field');
    if (input_field[0].value == '') {
        alert("*Email field is mandatory*");
        event.preventDefault();
    }
    else {
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
        qrGenerator(input_field[0].value);
    };
}
// Function that executes on click of first previous button.
function prev_step1() {
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
}
// Function that executes on click of second next button.
function next_step2() {
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
}
// Function that executes on click of second previous button.
function prev_step2() {
    document.getElementById("third").style.display = "none";
    document.getElementById("second").style.display = "block";
}

