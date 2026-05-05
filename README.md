# Timetable

An interactive, client-side academic timetable web application. The project contains semester timetables, lecturer lists, grading scales, exam schedules with a countdown, a fee breakdown, and a small activity manager that persists data in the browser.

## Features

- Interactive timetable that highlights current day, time slot and the current class based on system time.
- Two-semester timetable layout (Semester I and Semester II).
- Lecturer list with course codes, course names, lecturer names, and unit credits.
- Grading scale and degree classification tables with visual color-coding.
- Fee structure tables with itemized amounts and totals.
- Exam timetable with real-time status (pending / in progress / done) and a countdown/progress display.
- Activity/todo section that saves items to localStorage (add/delete).
- No runtime dependencies; plain HTML, CSS and JavaScript.

## Files

- index.html — Main HTML structure and content (timetable, lecturers, activities, grading, fees, exams).
- style.css — Styling and layout rules.
- app.js — Interactivity: highlighting, exam timer, localStorage activity management, tab navigation, and grading coloring logic.
- README.md — This file.

## How to use

1. Clone or download the repository.
2. Open `index.html` in a modern web browser (Chrome, Firefox, Edge, Safari).
3. The timetable highlights current items automatically. Use the navigation buttons to switch sections (Timetable, Lecturers, Activities, Grading, Fees, Exams).

## Browser support

Requires a modern browser with support for ES6 JavaScript, CSS Grid, and localStorage. Internet Explorer is not supported.

## Customization

- Edit the HTML tables in `index.html` to change course names, times, and days. Update each class cell `data-value` attributes (format: `"<day> <startHour> <endHour>"`, e.g., `data-value="mon 8 9"`).
- Modify colors and typography in `style.css`.
- The activity form uses `localStorage`; entries are stored under ISO date keys.

## Limitations

- Activities are saved to the browser’s localStorage and are not synced to any server.
- No authentication or multi-user support included.

## License

Creative Commons Zero v1.0 Universal (CC0)

## Author

waraton (<https://github.com/waraton>)

Last updated: 2026-05-05
