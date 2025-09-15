// Contact form submit
const form = document.querySelector("form");
form.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});

// Smooth scroll
document.querySelectorAll("a").forEach(link=>{
  link.addEventListener("click", function(e){
    if(this.hash !== ""){
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({behavior:"smooth"});
    }
  });
});
