let section = document.querySelectorAll("section");
let lists = document.querySelectorAll(".links");
function activeLink(li) {
  lists.forEach((item) => {
    console.log(item);
    item.classList.remove("activate");
  });
  li.classList.add("activate");
  console.log(li.classList);
}
lists.forEach((item) =>
  item.addEventListener("click", function () {
    activeLink(this);
  })
);

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top > offset && top < offset + 150) {
      const target = document.querySelector(`[href='#${id}']`).parentElement;
      activeLink(target);
    }
  });
};

window.addEventListener("scroll", function () {
  var home = document.querySelector(".home2");
  var about = document.querySelector(".about2");
  if (this.scrollY < 570) {
    home.classList.add("activate");
    about.classList.remove("activate");
  } else {
    home.classList.remove("activate");
  }
  // console.log(this.scrollY);
});

window.onblur = function () {
  //change favicon
  document.title = "Come Back To Profile";
  document.querySelector("link[rel*='icon']").href = "images/alternative.ico";
};
window.onfocus = function () {
  document.title = "Portfolio | Bishal-Prasad";
  document.querySelector("link[rel*='icon']").href = "images/header.ico";
};

function sendMail2() {
  var params = {
    from_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("number").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_yti58ue", "template_3jfwo9g", params)
    .then(function (res) {
      alert("Your mail sent successfully to Bishal Prasad");
    })
    .catch((err) => console.log(err));

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
  document.getElementById("message").value = "";
}

function sendMail() {
  var from_name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("number").value;
  var message = document.getElementById("message").value;
  if (from_name == "" || email == "" || phone == "" || message == "") {
    alert("Please fill all the fields properly");
  } else {
    sendMail2();
  }
}

new TypeIt("#text1", {
  speed: 110,
  loop: true,
  waitUntilVisible: true,
})
  .type("Wee", { delay: 300 })
  .move(0)
  .delete(1)
  .type("b")
  .move(null, { to: "END" })
  .type(" Development")
  .pause(100)
  .move(-11)
  .type(" Application ")
  .pause(100)
  .move(11)
  .pause(20)
  .move(-23)
  .pause(100)
  .delete(5)
  .pause(500)
  .move(null, { to: "END" })
  .go();
