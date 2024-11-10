



// const accordionItems = document.querySelectorAll(".accordion-item");

// accordionItems.forEach(function(item) {
//   const title = item.querySelector(".accordion-title");
//   const content = item.querySelector(".accordion-content");

//   title.addEventListener("click", function(){
//     for (i = 0; i < accordionItems.length; i++) {
//       if(accordionItems[i] != item){
//         accordionItems[i].classList.remove("active");
//       }else{
//         item.classList.toggle("active");
//       }
//   }

//   });
// });

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(function(items) {
  const title = items.querySelector(".accordion-title");
  const content  = items.querySelector(".accordion-content");

  title.addEventListener("click", function(){
        for (i = 0; i < accordionItems.length; i++) {
          if(accordionItems[i] != items){
            accordionItems[i].classList.remove("active");
          }else{
            items.classList.toggle("active");
          }
      }
    
      });
    });














/////////////////////////////
















