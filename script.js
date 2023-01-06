
let rows = document.querySelectorAll('.card')
console.log(rows)
for (let div of rows){
  div.addEventListener(
    "click",
    function(e){
      e.target.closest('.card').classList
      .toggle('active');
  
    }
  );
}

let observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) =>
      entry.target.classList.toggle("visible", entry.isIntersecting)
    );
  },
  { root: null, threshhold: 0.8 }
);

for (let div of document.querySelectorAll("div")) {
  observer.observe(div);
}