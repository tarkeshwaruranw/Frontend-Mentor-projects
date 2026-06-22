# Frontend Mentor - Product Preview Card Component Solution

This is my solution to the Product Preview Card Component challenge on Frontend Mentor. The goal of this project was to recreate the provided design as accurately as possible while ensuring responsiveness and accessibility.

## Overview

### The Challenge

Users should be able to:

- View the optimal layout depending on their device's screen size.
- See hover and focus states for interactive elements.

### Screenshot

![Project Screenshot](./images/screenshot.png)

### Links

- Solution URL: https://www.frontendmentor.io/solutions/responsive-product-preview-card-component-using-css-ea-vSILseK
- Live Site URL: https://fm-product-preview-card-tarkeshwar.netlify.app/

## My Process

### Built With

- Semantic HTML5
- CSS3
- CSS Grid
- Flexbox
- Responsive Design
- Google Fonts (Montserrat & Fraunces)
- Remix Icons

### What I Learned

While building this project, I improved my understanding of:

- Creating responsive layouts using CSS Grid.
- Using the `<picture>` element to serve different images for desktop and mobile screens.
- Structuring HTML with semantic elements.
- Managing spacing and typography to closely match a design mockup.
- Creating accessible interactive elements with hover and focus states.

Example of responsive image handling:

```html
<picture>
  <source
    srcset="./images/image-product-mobile.jpg"
    media="(max-width: 768px)"
  />

  <img src="./images/image-product-desktop.jpg" alt="" />
</picture>
```

### Continued Development

In future projects, I would like to focus on:

- Improving accessibility practices.
- Writing cleaner and more maintainable CSS.
- Becoming more comfortable with advanced CSS Grid layouts.
- Building similar projects using React components.

### Useful Resources

- Frontend Mentor challenge brief
- MDN Web Docs
- CSS Grid documentation
- Google Fonts documentation

### AI Collaboration

I used ChatGPT as a learning assistant during this project.

The AI was mainly used for:

- Debugging layout issues.
- Understanding CSS Grid behavior.
- Learning when to use Flexbox versus Grid.
- Improving semantic HTML and accessibility.
- Reviewing code and suggesting improvements.

All implementation, testing, and final decisions were completed by me after understanding the suggestions provided.

## Author

- Name: Tarkeshwar Uranw
- GitHub: https://github.com/tarkeshwaruranw
- Frontend Mentor: https://www.frontendmentor.io/profile/tarkeshwaruranw

## Acknowledgments

Thanks to the Frontend Mentor community for providing realistic frontend challenges that help developers practice responsive design and modern CSS techniques.
