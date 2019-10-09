function getCalendarEvents() {
    let d = new Date();
    let month = d.getMonth();
    let day = d.getDay();
    let year = d.getFullYear();

    const userID = '1802612'; // TODO: replace with individual user IDs grabbed from the initial url

    // https://ggc.view.usg.edu/d2l/le/calendar/1802612/home/list?day=24&month=9&year=2019
    // day, month, year
    const URL = 'https://ggc.view.usg.edu/d2l/le/calendar/' + userID + '/home/list';
    let URLrequest = URL + "?day=" + day + "&month=" + month + "&year=" + year;

    fetch(URLrequest)
        .then(function(response) {
            return response.text();
        })
        .then(function(html) {
            // HERE is where to call any functions to be called on a successful return of the doc,
            // due to asynchronous operations.
            parseCalendarEvents(new DOMParser().parseFromString(html, "text/html"));
        })
        .catch(function(err) {
            console.log("Failed to fetch page: ", err);
        });

}

function parseCalendarEvents(doc) {
    // do things with html var...
    // parse through the calendar element on each iteration of the returned page
    // TODO: then go through the events in the next 6 days upcoming

    const calendar = doc.getElementsByClassName("d2l-le-calendar-day-events");
    console.log("Parsing calendar...");
    for (let halfhour of calendar) {
        console.log(halfhour);
    }
}

// TODO: call function on D2L page load. currently it appears to parse whenever a page is loaded on the D2L filetree...
getCalendarEvents();