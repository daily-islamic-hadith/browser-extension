# Release Notes

## [v1.7.0] - 2025-02-09

### Added
- Add link to the hadith web page in the popup screen.
- Include a "Source" section in the popup screen to display the name of the hadith's book and its author.

### Fixed

- The unread reminder badge was shown even if the user has already read the today's hadith.

## [v1.6.0] - 2025-01-28

### Added
- Add reminder to read hadith feature. 
  - Shows red badge on the extension icon to remind user to read today's hadith if not already read.
  - The reminder logic is executed every day at 12PM.

### Changed

- Dark mode colors are enhanced for the popup and option screens.
---

## [v1.5.0] - 2024-12-15

### Added

- Add option to allow the user selects the preferred theme (display color mode):
  - **Auto**: Automatically adjusts to user system's color scheme preference (light or dark).
  - **Light**: A light theme with a light background and dark text.
  - **Dark**: A dark theme with a dark background and light text.

### Fixed
- Empty display after migration from v1.3.0 to v1.4.0
- Show Hadith Explanation container only after the fetch of hadith info from the backend server. 

---

## [v1.4.0] - 2024-11-11

### Added

- Add explanation section in user's hadith preferred language.

### Changed

- Language option values becomes ar,en instead of Arabic,English.
- Fetch hadith from backend in the selected language only.

---

## [v1.3.0] - 2024-10-19

### Added

- The version includes new feature of allowing the user to select the fetch mode of Hadiths.
    - Daily: Displays the same Hadith for the entire day. Updates with a new Hadith the next day.
    - Random: Displays a new Hadith each time you open or refresh the extension.

### Fixed

- Fixed text message of successful saving of user preferences.

---

## [v1.2.0] - 2024-09-17

### Fixed

- Adjust extension Id for Firefox plugin

---

## [v1.1.0] - 2024-09-11

### Fixed

- Fixed issue where the hadith backend url.

---

## [v1.0.0] - 2024-09-02

### Added

- Initial release of the Daily Islamic Hadith Extension.
- Displays a single Islamic hadith each day in the browser.
- Option to choose the language for displaying the hadith (English/Arabic).
- Simple, clean, and minimal UI design.