const form = document.querySelector('form');

const send = () => {
  Email.send({
    Host: "smtp.gmail.com",
    Port: 587,
    Username: "jagres3211@gmail.com",
    Password: "twmcotxkuagzahtm",
    To: "yogaagle321z@gmail.com",
    From: document.getElementById("email").value,
    Subject: document.querySelector("#fnama").value + " mengirim anda pesan",
    Body: document.getElementById("pesan").value + "<br><br><br><br>",
  }).then(
    (response) => form.reset(),
    Swal.fire({
      title: document.getElementById("fnama").value,
      text: "Terima Kasih telah memberi saran",
      icon: "success",
    })
  );
}
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
window.addEventListener("scroll", function () {
  var header = document.querySelector(".menu");
  header.classList.toggle("bar", window.scrollY == 0);
});
const navigation = document.querySelector('.menu');
document.querySelector('.toggle').onclick = function () {
  this.classList.toggle('active');
  navigation.classList.toggle('active');
}
