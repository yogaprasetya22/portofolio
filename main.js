const form = document.querySelector('form');

function send() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "jagres3211@gmail.com",
    Password: "yogaprasetya3021",
    To: "jagres3211@gmail.com",
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