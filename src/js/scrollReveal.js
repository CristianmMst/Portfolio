import ScrollReveal from "scrollreveal";

const sr = ScrollReveal();

const revealLeft = {
  reset: true,
  duration: 2000,
  origin: "left",
  distance: "200px",
};

const revealRight = {
  reset: true,
  duration: 2000,
  origin: "right",
  distance: "200px",
};

const revealUp = {
  reset: true,
  duration: 2000,
  origin: "top",
  distance: "100px",
};

sr.reveal(".Title", {
  reset: true,
  duration: 2000,
  origin: "bottom",
  distance: "50px",
});

sr.reveal(".About-content-img", revealLeft);
sr.reveal(".About-content-text", revealRight);

sr.reveal(".Card-item", revealLeft);
sr.reveal(".Card-img", revealRight);

sr.reveal(".up", revealUp);
sr.reveal(".left", revealLeft);
