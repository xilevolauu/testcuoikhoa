//B.Code Challenge
let form = document.getElementById("form");
let user = document.getElementById("user");
let dem = 0;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    dem++;
    if (dem < 4) {
        if (user.value == 5) {
            alert("Chúc mừng bạn")
        } else if (user.value > 10) {
            alert("Mời bạn nhập lại các số trong khoảng")
        } else {
            alert("Chúc bạn may mắn lần sau")
        }
    } else {
        alert("Bạn đã hết lượt chơi")
    }
})
//A.Problem Solving
let String1 = prompt("nhap vao chuoi ki tu 1");
let String2 = prompt("nhap vao chuoi ki tu 2");
let a = [...String1];
let b = [...String2];
console.log(a);
console.log(b);
let mergeString = "";

function merge2String() {
    for (let i = 0; i < a.length && i < b.length; i++) {
        mergeString = mergeString + a[i] + b[i];
    }
    if (a.length > b.length) {
        mergeString = mergeString + a[a.length - 1]

    }
    if (a.length < b.length) {
        mergeString = mergeString + b[b.length - 1]

    }

    console.log(mergeString);
}
merge2String();
