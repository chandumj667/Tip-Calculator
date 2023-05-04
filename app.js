let btn = document.getElementById("btn");

btn.addEventListener('click', function () {
    let billAmount = document.getElementById("billAmount").value;
    let tipInput = document.getElementById("tipInput").value;
    // document.getElementById("tipInput").value = `${tipInput} $`;
    let pplInput = document.getElementById("pplInput").value; 
    let tipAmount = document.getElementById("tipAmount").value = billAmount * tipInput / 100;
    let output = parseFloat(billAmount) + parseFloat(tipAmount);
    document.getElementById("totalBill").value = output;
    document.getElementById("perHead").value = parseFloat(output / pplInput);
})

function fun() {
    document.getElementById("billAmount").value = '';
    document.getElementById("tipInput").value = '';
    document.getElementById("pplInput").value = '';
    document.getElementById("tipAmount").value = '';
    document.getElementById("totalBill").value = '';
    document.getElementById("perHead").value = '';
}