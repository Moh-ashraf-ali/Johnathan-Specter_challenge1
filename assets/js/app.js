

// let customcontrollabel = document.querySelector(".custom-control-label");
// let customcontrolinput = document.querySelector(".custom-control-input");
// let body = document.querySelector("body");
// console.log(body);
// customcontrolinput.addEventListener("click" , function(){
//     if(body.classList.contains("dark")){
//         body.classList.remove("dark");
//         body.classList.add("light");
//         customcontrollabel.textContent = "Light Mode";
//     }else{
//         body.classList.add("dark");
//         body.classList.remove("light");
//         customcontrollabel.textContent = "Dark Mode";

//     }
// })



wow = new WOW(
    {
    boxClass:     'animate__animated',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
  $(document).ready(function(){
    $(function() {  
        $("body").niceScroll();
    });
    $("#thisdiv").niceScroll({
      background: "white"
    })
  })