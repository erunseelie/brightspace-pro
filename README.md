# BrightspacePro

Extension to improve the Brightspace/D2L user experience. Currently being developed for Google Chrome and Firefox.

---

## TODO

### High-Priority (3)

- [ ] (Dionne) Display final grade appended to course description for each pinned course.
- [ ] (Matthew) Parse the calendar to determine upcoming due dates, and show the user near-due events.
  - [x] "Near-due" date range determined (seven days).
  - [ ] When the user logs in, show a popup of upcoming assignment due dates.
- [ ] (Dionne) Show assignment feedback directly on assignment submission hover.

### Low-Priority (1)

- [ ] Include "favorite links" widget somewhere for the user - possibly in the extension button dialogue.

---

## Resources - D2L

- The web path to reach the grades page for a particular course is <https://ggc.view.usg.edu/d2l/lms/grades/my_grades/main.d2l?ou=> with the course code appended.

## Resources - Firefox

- [Your First WebExtension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- [Package Your Extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Package_your_extension_)
- With the [web-ext](https://www.npmjs.com/package/web-ext) npm module installed, use the command `web-ext run` to immediately launch a fresh Firefox instance with the extension enabled for developing purposes.

## Resources - Chrome

- [Extensions - Getting Started](https://developer.chrome.com/extensions/getstarted)
