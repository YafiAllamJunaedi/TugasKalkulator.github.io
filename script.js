function tambah(a, b) {
    console.log("angka 1 : " + a);
    console.log("angka 2 : " + b);
    return a + b;
}

function kurang(a, b) {
    console.log("angka 1 : " + a);
    console.log("angka 2 : " + b);
    return a - b;
}

function kali(a, b) {
    console.log("angka 1 : " + a);
    console.log("angka 2 : " + b);
    return a * b;
}

function bagi(a, b) {
    console.log("angka 1 : " + a);
    console.log("angka 2 : " + b);
    return a / b;
}

let user = prompt("Masukkan perintah (+) (-) (x) (/) ");
if (user == "+"){
    var a = parseInt(prompt("Masukkan angka 1 : "));
    var b = parseInt(prompt("Masukkan angka 2 : "));
    var c = tambah(a,b);
    console.log(c);
}else if (user == "-"){
    var a = parseInt(prompt("Masukkan angka 1 : "));
    var b = parseInt(prompt("Masukkan angka 2 : "));
    var c = kurang(a,b);
    console.log(c);
}else if (user == "x"){
    var a = parseInt(prompt("Masukkan angka 1 : "));
    var b = parseInt(prompt("Masukkan angka 2 : "));
    var c = kali(a,b);
    console.log(c);
}else if (user == "/"){
    var a = parseInt(prompt("Masukkan angka 1 : "));
    var b = parseInt(prompt("Masukkan angka 2 : "));
    var c = bagi(a,b);
    console.log(c);
}