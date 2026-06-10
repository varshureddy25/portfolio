# Varshitha Reddy Portfolio

A simple responsive portfolio website built with HTML, Bootstrap, and JavaScript. This project showcases personal information, skills, projects, achievements, and a contact form with interactive features.

## Features

- Responsive one-page portfolio layout
- Navigation links for Home, About, Skills, Projects, Achievements, and Contact
- Dark mode toggle using `localStorage`
- Recently viewed project indicator using `sessionStorage`
- Contact form input auto-save using `localStorage`
- Built with Bootstrap 5 for layout and styling

## Files

- `index.html` — main portfolio page
- `script.js` — JavaScript logic for theme toggle, recent project storage, and form auto-save
- `style.css` — custom styles for the portfolio (included in HTML)
- `varsh.jpeg` — profile image used on the home section (expected asset)
- `resume.pdf` — downloadable resume link referenced in the home section

## Usage

1. Open `index.html` in your browser.
2. Use the navigation menu to jump between sections.
3. Click `Toggle Dark Mode` to switch themes and save the preference.
4. Click any `View Project` button to set the recently viewed project.
5. Enter contact details in the form to auto-save your input locally.

## Notes

- The project uses Bootstrap via CDN, so internet access is required for Bootstrap assets.
- The contact form currently shows an alert on send and does not submit to a backend.
- The dark mode state persists across page reloads.

## Future improvements

- Add real project detail modals for each project card
- Implement form submission to an email or backend service
- Add a complete custom stylesheet in `style.css`
- Optimize accessibility and mobile navigation experience
