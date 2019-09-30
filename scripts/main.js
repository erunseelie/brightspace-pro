function getCalendarEvents() {
    var d = new Date();
    var month = d.getMonth();
    var day = d.getDay();
    var year = d.getFullYear();

    const userID = '1802612'; // TODO: replace with individual user IDs grabbed from the initial url
    var html;

    // https://ggc.view.usg.edu/d2l/le/calendar/1802612/home/list?day=24&month=9&year=2019
    // day, month, year

    const URL = 'https://ggc.view.usg.edu/d2l/le/calendar/' + userID + '/home/list';

    $.ajax({
        type: 'GET',
        url: URL,
        headers: {
            'day': day,
            'month': month,
            'year': year
        },
        success: function (result) {
            html = result;
        },
        error: function (result) {
            console.log('There was an error; ' + result);
        }
    });

    // do things with html var...
    // parse through the calendar element on each iteration of the returned page
    // TODO: then go through the events in the next 6 days upcoming

    var calendar = html.getElementByClass("d2l-le-calendar-day-events");
    for (let halfhour of calendar) {
        // TODO: Parse the HTML element
    }
}

// TODO: call function on D2L page load