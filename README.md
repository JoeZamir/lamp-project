# Luminas — Luxury Lamp Landing Page

Luminas is a luxury lamp ecommerce landing page built with plain HTML, CSS, and JavaScript. The project explores the intersection of visual storytelling, state-driven UI, and clean separation of concerns while maintaining a premium, minimal aesthetic.

The site features a hero section, product showcase, navigation, and footer, with a strong emphasis on lighting mood and theme-based interaction.

---

## Inspiration

This project was inspired by a modern ecommerce concept where **theme changes influence product state**, specifically how switching between light and dark themes visually toggles lamps between unlit (day) and lit (night) states.

Rather than treating lamps as static images, the project treats lighting as a first-class UI concept that responds to global theme state.

---

## Core Idea

The key design goal was to simulate how lamps behave in real environments:

- **Dark theme → night environment → lamps appear lit**
- **Light theme → day environment → lamps appear unlit**
- A separate lamp toggle allows users to override lamp state independently

This required careful coordination between UI state, assets, and rendering logic without introducing flicker or unnecessary DOM updates.

---

## Architecture & Separation of Concerns

One of the main challenges was avoiding tightly coupled logic between JavaScript and visual presentation.

### Key decisions:
- **JavaScript manages state only**
  - Theme state (light / dark)
  - Lamp state (on / off)
  - Product data and DOM generation

- **CSS controls presentation**
  - Visibility of day vs night images
  - Glow effects and illumination
  - Transitions and visual polish

Instead of swapping image `src` values in JavaScript, both day and night images exist in the DOM simultaneously. CSS handles which image is visible based on state-related classes applied to parent elements.

This approach:
- Prevents flickering during state changes
- Keeps visual logic declarative
- Scales cleanly as product count grows

---
## UI Challenges
One challenge I faced is finding identical images of both night and day backgrounds lamps. I opted to generate and iterate images between day and night using AI generation technologies. While the images look almost identical, the images have slight differences that affect how the image changes transition to and fro day and night.

---

## Product Data Model

Products are defined as JavaScript objects and rendered dynamically on page load. Each product includes metadata such as name, price, categories, and paired day/night images.

Using data-driven rendering avoids repetitive HTML and makes future features like filtering and search straightforward to implement.

---

## Current Features

- Responsive hero section
- Luxury-focused dark and light themes
- Lamp on/off visual toggle
- Product cards generated from JavaScript data
- Day and night product imagery
- Clean, accessible semantic HTML structure
- Sticky navigation

---

## Future Improvements

Planned and potential enhancements include:

- Category-based product filtering
- Dedicated product detail pages
- Shopping cart UI and logic
- Persistent cart state
- Improved accessibility controls
- Image lazy-loading for performance
- Animation polish for theme and lamp transitions
- CMS or JSON-based product sourcing
- SEO enhancements and structured metadata

---

## Tech Stack

- HTML5
- CSS3 (no frameworks)
- Vanilla JavaScript

No build tools or frameworks are used. The project is intentionally kept framework-free to focus on fundamentals, performance, and architectural clarity.

---

## Status

This project is actively evolving and serves both as a design exploration and a foundation for a more complete ecommerce experience.

---

## License

This project is for educational and portfolio purposes.

