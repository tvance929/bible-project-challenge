# BibleProject Web Challenge Overview

- Create a page that displays a BibleProject video series
- Spend no more than 6 hours on the challenge

## Design Requirements

- Style the page to match `index.png` as close as possible without access to the Figma file
- Make the page responsive
- Load a YouTube embed in the right section of the banner when a video tile is clicked

## Technical Requirements

- Use the provided template as a starting point
  - [Vite](https://vitejs.dev/) is included to support JSX and preview the page
  - No third-party packages should be installed
  - CSS should run in modern browsers without using any additional features provided by Vite or PostCSS
- Fetch the contents of `public/api/data.json` to render the page
- Allow the page to accept a URL query parameter called `debug` that will cause the video tile interaction to randomly fail and handle the error gracefully

## Stretch Goals

- Add at least one CSS enhancement (animation, effect, etc.)
- Create a simple theme using CSS custom properties
- Add any additional improvements or optimizations that you feel make the experience better
