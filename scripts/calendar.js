// =================================================================
// 2019 © Matthew R. Stiller (https://mstiller.net)
// Designation:
//      Software Development Capstone w/ Dr. Cengiz Gunay
//      Fall 2019 @ Georgia Gwinnett College
// =================================================================

let date = new Date();
getCalendarEvents(date, 7);

// =================================================================

/**
 * Returns the sequence of events for the given date, and recursively iterates for the specified number of days.
 * @param {Date} date The starting date for the sequence.
 * @param {Number} days Amount of days to iterate.
 */
function getCalendarEvents(date, days) {

    if (amount == 0) return;

    const URL = 'https://ggc.view.usg.edu/d2l/le/calendar/6621';
    let URLrequest = URL + "?day=" + date.getDate() + "&month=" + Number(date.getMonth()+1) + "&year=" + date.getFullYear();

    fetch(URLrequest)
        .then(function (response) {
            return response.text();
        })
        // HERE is where to call any functions to be called on a successful return of the doc,
        // due to asynchronous operations.
        .then(function (html) {
            parseCalendarEvents(new DOMParser().parseFromString(html, "text/html"));
            // when the first document has been returned, increase the Date,
            // and recursively call this function.
            date.setDate(date.getDate() + 1);
            getCalendarEvents(date, days - 1);
        })
        .catch(function (err) {
            console.log("Failed to fetch page (" + URLrequest + "): ", err);
        });

}

/**
 * Parses the D2L calendar events.
 * @param {HTMLDocument} doc The document to parse.
 */
function parseCalendarEvents(doc) {
    const calendar = doc.getElementsByClassName("d2l-le-calendar-day-events");
    for (let halfhour of calendar) {
        // TODO: something useful here.
        console.log(halfhour.textContent.replace(/^\s+|\s+$/gm, '')); // magic regex nonsense! strips absurd whitespace.
    }
}