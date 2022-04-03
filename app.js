let number = document.getElementById("number");
let counter = 0;
function up() {
    counter += 1;
    number.innerHTML = counter;
}
function down() {
    counter -= 1;
    number.innerHTML = counter;
}
function reset() {
    counter = 0;
    number.innerHTML = counter;
}




