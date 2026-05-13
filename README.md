# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### Screenshot
![](/design/desktop-design.png)

![](/design/active-states.png)

![](/design/mobile-design.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow

### What I learned
i learned new javascript methods and how to apply them to my code including the toggle function and the closest method

```js
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
```

### Continued development
i want to focus on perfecting my javascript knowledge and skills

### Useful resources

- [for javascript collapsable tabs](https://www.w3schools.com/howto/howto_js_accordion.asp)

## Author
- Frontend Mentor - [@micdynas](https://www.frontendmentor.io/profile/micdynas)
