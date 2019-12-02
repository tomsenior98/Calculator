var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function add() {
    document.getElementById("zero").addEventListener("click", function () {
        document.getElementById("total").innerHTML = numbers[0];
    });

    document.getElementById("one").addEventListener("click", function () {
        document.getElementById("total").innerHTML = numbers[1];
    });

    document.getElementById("two").addEventListener("click", function () {
        document.getElementById("total").innerHTML = numbers[2];
    });

    document.getElementById("three").addEventListener("click", function () {
        document.getElementById("total").innerHTML = numbers[3];
    });

    document.getElementById("four").addEventListener("click", function () {
        document.getElementById("total").innerHTML = numbers[4];
    });

    document.getElementById("five").addEventListener("click", function () {
        document.getElementById("total").innerHTML = numbers[5];
    });

    document.getElementById("six").addEventListener("click", function () {
        document.getElementById("total").innerHTML = numbers[6];
    });
    document.getElementById("seven").addEventListener("click", function () {
        document.getElementById("total").innerHTML = numbers[7];
    });
    document.getElementById("eight").addEventListener("click", function () {
        document.getElementById("total").innerHTML = numbers[8];
    });
    document.getElementById("nine").addEventListener("click", function () {
        document.getElementById("total").innerHTML = numbers[9];
    }); 
}
add();