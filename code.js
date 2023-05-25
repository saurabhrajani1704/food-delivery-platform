
const header = document.querySelector('.header');
const scrollLink = document.querySelectorAll('.navbar a:not(:last-child)');

Array.from(scrollLink).map((link) => {
  link.addEventListener('click', (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 90;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
    navbar.classList.remove('show');
  });
});

const testimonials = [
  {
    name: "Richa Agnihotri",
    job: "MBA STUDENT ",
    image: "https://i.postimg.cc/xdLsJL23/profile-image-4.png",
    testimonial:
      "Proper Chill spot at DTU just love the vibe in or around Mic Mac"},

  {
    name: "KATYANI AGARWAL",
    job: "3RD YEAR BT",
    image: "",
    testimonial:
      "The Crispy Paranthas are my favourite just love to eat it any time at college",
  },
  {
    name: "APOORVA RAJ RATNA",
    job: "3RD YEAR CH",
    image:"https://i.postimg.cc/W4mnbjG9/profile-image-3.png",
    testimonial:
      "My personal favourite soda just and burger. My friends and i hang out together at Mic MAac daily for half hour. Chandu Bhaiya OP!!"},
  {
    name: "SUYASH DALMIA",
    job: "2nd year CSE ",
    image: "profile-img-4",
    testimonial:
      "At first i was hesitant to go to mic mac as my friends didnt like it but when i went i just loved the patented RAJMA CHAWAL of Chandu Bhaiya. Absolutely Magical after long boring lectures of algorithms !!"}
];
//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});
let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;


