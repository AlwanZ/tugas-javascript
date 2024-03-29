//materi yang digunakan = DOM, date, array, function, if else

const d = new Date();
const dayList = ["Hari minggu","Hari Senin","Hari Selasa","Hari Rabu","Hari Kamis","Hari Jumat","Hari Sabtu"];
const day = d.getDay();
const hari = dayList[day];

alert(hari) 
    


document.getElementById("loginBtn").addEventListener("click", function() {
    let username = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    if(username === "admin" && password === "password"){
        alert("Login successful");

    } else {
        alert("Invalid username or password");
    }
});
