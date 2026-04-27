var buttons = document.getElementsByClassName("btn");
var i;

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    // Toggle active class on button
    this.classList.toggle("active");
    
    // Find the parent faq-item, then find the paragraph
    var faqItem = this.closest('.faq-item');
    var panel = faqItem.querySelector('.paragraph-text');
    
    // Toggle the show class
    panel.classList.toggle("show");
    
    // Change the icon based on state
    var img = this.querySelector('img');
    if (panel.classList.contains("show")) {
      img.src = "assets/images/icon-minus.svg";
    } else {
      img.src = "assets/images/icon-plus.svg";
    }
  });
}
