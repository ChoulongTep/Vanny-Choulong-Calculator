const display_value = document.getElementById("display_input");

function DEL(Input) {
    display_value.value = Input.slice(0, -1)
}

function Calculate_Number(Input) {
    try {
        display_value.value = eval(Input);
    } catch (err) {
        alert("Invalid Input")
        display_value.value = "";
    }
}