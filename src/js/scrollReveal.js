import ScrollReveal from "scrollreveal";

const sr = ScrollReveal();

const revealLeft = {
  duration: 1000,
  origin: "left",
  distance: "200px",
};

const revealRight = {
  duration: 1000,
  origin: "right",
  distance: "200px",
};

const revealUp = {
  duration: 1000,
  origin: "top",
  distance: "100px",
};

sr.reveal(".Title", {
  duration: 1000,
  origin: "bottom",
  distance: "50px",
});

sr.reveal(".About-content-img", revealLeft);
sr.reveal(".About-content-text", revealRight);

sr.reveal(".Card-item", revealLeft);
sr.reveal(".Card-img", revealRight);

sr.reveal(".up", revealUp);
sr.reveal(".left", revealLeft);
