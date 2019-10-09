function getCalendarEvents() {
    let d = new Date();
    let month = d.getMonth();
    let day = d.getDay();
    let year = d.getFullYear();

    const userID = '1802612'; // TODO: replace with individual user IDs grabbed from the initial url
    let html;

    // https://ggc.view.usg.edu/d2l/le/calendar/1802612/home/list?day=24&month=9&year=2019
    // day, month, year

    const URL = 'https://ggc.view.usg.edu/d2l/le/calendar/' + userID + '/home/list';
    let URLrequest = URL + "?day=" + day + "&month=" + "&year=" + year + ".html";
    console.log("Now accessing: ", URLrequest);

    fetch(URLrequest)
        .then(function(response) {
            return response.text();
        })
        .then(function(html) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, "text/html");
            console.log(doc);
        })
        .catch(function(err) {
            console.log("Failed to fetch page: ", err);
        });


    // do things with html var...
    // parse through the calendar element on each iteration of the returned page
    // TODO: then go through the events in the next 6 days upcoming

    const calendar = html.getElementByClass("d2l-le-calendar-day-events");
    for (let halfhour of calendar) {
        // TODO: Parse the HTML element
    }
}

// TODO: call function on D2L page load
getCalendarEvents();