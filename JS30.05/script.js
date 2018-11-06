var panels = document.querySelectorAll(".panel");

function toggleOpen() {
    panels.forEach(panel => panel.classList.remove("open"));
    this.classList.add("open");
  
    /*   
              I liked that more))
              
    panels.forEach(panel => panel.classList.toggle("open"));
    this.classList.remove("open");
    this.classList.toggle("open-active");*/
}

function toggleActive(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));

/*
 const panels = document.querySelectorAll('.panel');
    function toggleOpen() {
      console.log('Hello');
      this.classList.toggle('open');
    }
    function toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));*/