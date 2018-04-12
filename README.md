# Study App

#### _An Angular application that helps people study and collaborate together._, {April 10, 2018}_

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

### By Masen Matthews, Nicko Dela Cruz, 

## Description
  This application simulates a study space by providing chat and forum features to users. In the forum section, the user can submit a post and other users can comment on it. There is also a chat function where users can message each other. These features utilize authentification features so that users can communicate directly. Outside of this, a blog feature allows for longer text posts to be updated in a way that directly showcases the content.

## Setup/Installation Requirements
  * Download the project from the repository https://github.com/. Save the directory to the desktop or in a alternate directory.
  * In the terminal, run $ npm install typescript -g while on the desktop or in the root directory to install TypeScript.
  * Run $ npm install -g @angular/cli@1.6.5 to install Angular. This step may be skipped if Angular is already installed.  
    - If you're on a Mac and get an error: Type "brew upgrade node"
  * Run $ npm install in the root project directory to install required dependencies
  * Run $ npm install angularfire2@4.0.0-rc.0 firebase@^3.6.6 --save" to add firebase if it isn't already in place
  * Add a file called 'api-keys' to ../src/app. This will create a file where Firebase information can be added. The Firebase site will provide you with information that is required to add database functionality. Add the following snippet of code to this file after it is created and you have the appropriate information:

  export var masterFirebaseConfig = {
      apiKey: "INSERT KEY",
      authDomain: "INSERT AUTHDOMAIN",
      databaseURL: "INSERT DATABASEURL,
      storageBucket: "INSERT STORAGEBUCKET (IF APPLICABLE)",
      messagingSenderId: "INSERT MESSAGINGSENDERID"
    };

  * Type "ng serve" to launch development server
  * Navigate to localhost:4200 in Google Chrome or desired browser

## Viewing application via Firebase
  * In order to view the application without running through the setup process, navigate to https://epicodus-c4877.firebaseapp.com/ in Google Chrome or another web browser.

## Specifications
  * User can post text submissions in the forum
  * User can comment on posts within the forum
  * User can use the chat feature to send and receive messages
  * User can log into an account and access features based on their login status
  * User can access and read blog posts

## Future expansion
  * N/A

## Technologies Used

  * HTML
  * CSS
  * Typescript/Javascript
  * Angular
  * Bootstrap
  * jQuery
  * Materialize

## Known Bugs and Issues

There are no known bugs at this time.

## Support and contact details

Support inquiries, ideas, suggestions, and other contact inquiries can be directed to any of the following contributors:

Masen:
Github - masenmatthews
Email - masenmatthews@gmail.com

Nicko:

Chris:

Joel:


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License

Copyright (c) 2018 - Masen Matthews, Nicko Dela Cruz, CHRIS, JOEL

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
