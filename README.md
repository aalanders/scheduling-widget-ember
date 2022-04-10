# scheduling-widget-ember

Thanks for looking at my project!

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://cli.emberjs.com/release/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone https://github.com/aalanders/scheduling-widget-ember`
- `cd scheduling-widget-ember`
- `npm install`

## Running / Development

- `ember serve`
- Visit app at [http://localhost:4200/scheduler](http://localhost:4200/scheduler).
- Visit tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

- `ember test`
- `ember test --server`

## To embed on website

- Add script to website:

  ```
  <script src="https://www.scheduling-widget-ember-deployed-app.com/embed.js"></script>
  <Scheduling-Widget-Ember shadow clientBaseUrl="<URL>" enable-clientBaseUrl clinicianId="<ID>" enable-clincicianId ></Scheduling-Widget-Ember>
  ```

- Read more on Github page about ember-embedded-snippet [https://github.com/kaliber5/ember-embedded-snippet](https://github.com/kaliber5/ember-embedded-snippet).
- Note: The embed will not work right now since the app is not deloyed to an environment

## CORS error

- I have added the data from the API calls in as Mirage mock so the application can be demoed.
- I was able to use POSTMAN and curl to see the response data using the given headers.
- I was also able to see real data in the scheduling-widget-ember by opening Chrome using this terminal command (Thanks Ryan!):

`open -a [PATH TO Google\ Chrome] --args --disable-web-security --user-data-dir --user-data-dir="tmp"`

## Things I would do if I had more time

- Use data-element attributes instead of classes in the tests to make the tests less brittle.
- Deploy the app so I could dev test the embed by adding to a page and passing the clientPortalBaseUrl and clinicianId.
- Use Google Geolocation API to reverse geocode and find the location address based on latitude and longitude.
- Think of a more optimal Ember solution other than using peekRecord in the location route. See note in app/routes/scheduler/location.js
