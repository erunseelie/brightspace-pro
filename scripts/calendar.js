let date = new Date();
getCalendarEvents(date, 7);

function getCalendarEvents(date, amount) {

    if (amount == 0) return;

    // https://ggc.view.usg.edu/d2l/le/calendar/1802612/home/list?day=24&month=9&year=2019
    // day, month, year
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
            getCalendarEvents(date, amount - 1);
        })
        .catch(function (err) {
            console.log("Failed to fetch page (" + URLrequest + "): ", err);
        });

}

function parseCalendarEvents(doc) {
    const calendar = doc.getElementsByClassName("d2l-le-calendar-day-events");
    for (let halfhour of calendar) {
        // TODO: something useful here.
        console.log(halfhour.textContent.replace(/^\s+|\s+$/gm, '')); // magic regex nonsense! strips absurd whitespace.
    }
}