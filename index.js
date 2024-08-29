function homeAnnimation() {
  gsap.set(".slidesm", { scale: 5 });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  });

  tl.to(
    ".videoDiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  );

  tl.to(
    ".slidesm",
    {
      scale: 1,
      ease: Power2,
    },
    "a"
  );

  tl.to(
    ".lft",
    {
      xPercent: -10,
      stagger: 0.03,
      ease: Power4,
    },
    "b"
  );

  tl.to(
    ".rgt",
    {
      xPercent: 10,
      stagger: 0.03,
      ease: Power4,
    },
    "b"
  );
}
function sliderAnnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
    xPercent: -200,
    ease: Power4,
  });
}
function teamAnnimation() {
  document.querySelectorAll(".list-element").forEach(function (element) {
    element.addEventListener("mousemove", function (details) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(
          0,
          window.innerWidth,
          -200,
          200,
          details.clientX
        ),
        ease: Power4,
        duration: 0.5,
      });
    });
    element.addEventListener("mouseleave", function (details) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}
function reviewsAnnimation() {
  var clutter = "";
  document
    .querySelector(".paragraph-text")
    .textContent.split("")
    .forEach(function (element) {
      if (element === " ") {
        clutter += `<span>&nbsp;</span>`;
      }
      clutter += `<span>${element}</span>`;
    });
  document.querySelector(".paragraph-text").innerHTML = clutter;

  gsap.set(".paragraph-text span", { opacity: 0.1 });
  gsap.to(".paragraph-text span", {
    scrollTrigger: {
      trigger: ".reviews",
      start: "top 60%",
      end: "bottom 90%",
      // markers: true,
      scrub: 0.2,
    },
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
  });
}
function capsuleAnnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      // markers: true,
      scrub: 1,
    },
    y: 0,
    ease: Power4,
  });
}
function bodyColorChange() {
  document.querySelectorAll(".section").forEach(function (element) {
    ScrollTrigger.create({
      trigger: element,
      start: "top 50%",
      end: "bottom 50%",
      // markers: true,
      onEnter: function () {
        document.body.setAttribute("theme", element.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", element.dataset.color);
      },
    });
  });
}

bodyColorChange();
homeAnnimation();
sliderAnnimation();
teamAnnimation();
reviewsAnnimation();
capsuleAnnimation();
