# scheduling-widget-ember

Thanks for looking at my project!

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://cli.emberjs.com/release/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd scheduling-widget-ember`
- `npm install`

## Running / Development

- `ember serve`
- Visit app at [http://localhost:4200](http://localhost:4200).
- Visit tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

- `ember test`
- `ember test --server`

## To embed on website

- Add script to website:
  <script src="https://www.scheduling-widget-ember-deployed-app.com/embed.js"></script>

  <Scheduling-Widget-Ember shadow clientBaseUrl="<URL>" enable-clientBaseUrl clinicianId="<ID>" enable-clincicianId ></Scheduling-Widget-Ember>

- Read more on Github page about ember-embedded-snippet [https://github.com/kaliber5/ember-embedded-snippet](https://github.com/kaliber5/ember-embedded-snippet).
- Note: Currently will not work since the app is not deloyed to an environment

## CORS error

- I have added the data from the API calls in as Mirage mock so the application can be demoed.
- I was able to see real data by running terminal command:

open -a [PATH TO Google\ Chrome] --args --disable-web-security --user-data-dir --user-data-dir="tmp"

## Things still TODO
