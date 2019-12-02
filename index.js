var numbers = [0,1,2,3,4,5,6,7,8,9];

function add() {
        document.getElementById("zero").addEventListener("click", function(){
        document.getElementById("total").innerHTML = numbers[0];
        });
}
add();