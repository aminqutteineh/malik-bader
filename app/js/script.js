console.log("Cash Only");

$(".single-item").slick({
  autoplay: true,
  autoplaySpeed: 7000,
  infinite: true,
  speed: 1000,
  fade: true,
  draggable: false,
  arrows: false,
});

const openbtns = document.querySelectorAll(".openbtn");
const closebtns = document.querySelectorAll(".closebtn");
const maincontent = document.querySelectorAll(".maincontent");
const logo = document.querySelector(".logo");

openbtns.forEach((openbtn) => {
  openbtn.addEventListener("click", (e) => {
    let target = openbtn.dataset.target;
    maincontent.forEach((mc) => {
      mc.classList.add("maincontent--invisible");
      setTimeout(() => {
        mc.style.display = "none";
      }, 200);
    });
    document.getElementById(target).classList.add("overlay--visible");
  });
});

close = () => {
  if (document.querySelector(".overlay--visible")) {
    document.querySelector(".overlay--visible").classList.remove("overlay--visible");
  }

  maincontent.forEach((mc) => {
    setTimeout(() => {
      mc.style.display = "block";
    }, 200);
    setTimeout(() => {
      mc.classList.remove("maincontent--invisible");
    }, 400);
  });
};

closebtns.forEach((closebtn) => {
  closebtn.addEventListener("click", (e) => {
    close();
  });
});

document.addEventListener("keydown", ({ key }) => {
  if (key === "Escape") {
    close();
  }
});
