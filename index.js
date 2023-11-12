function check() {
    let x = document.forms["RegForm"]["fname"].value;
    if(x == ""){
        alert("Please enter your name")
        return false;
    }
}