# angular1-webpack2-seed
This a "Hello World" app which use AngularJS 1 with Webpack 2 and The Marvel Comics API.

## How to run
### Prerequisites
1. nodejs : http://nodejs.org/
2. npm : it should be install with the above node
3. git clone https://github.com/nguyenJS/angular1-webpack2-seed.git

`npm install`

This will install all the dev package for dataprep as well as third party libraries required by this application.

### Root file structure

<pre>
├── build/                                  - untracked generated folder where you find minified build in prod mode and unminified in dev mode
├── config/                                 - untracked generated folder where you find build config
├── coverage/                               - untracked generated folder where karma istanbul plugin will put coverage files
├── docker/                                 - dockefile and scripts to generate the docker image 
├── node_modules/                           - untracked generated folder for gulp build node modules
├── src/                                    - sources
├── target/                                 - untracked generated folder for maven build
├── karma.conf.js                           - unit testing configuration
├── package.json                            - npm description for build dependencies
├── pom.xml                                 - maven description file
├── README.md                               - this file
└── spec.bundle.js                          - entry file to load unit tests from Karma
</pre>


### Sources file structure
The source file structure is based on the [Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub), except for css files that have their own structure

<pre>
├── assets                                      - assets source folder
│   ├── fonts                                   - fonts folder
│   └── images                                  - images folder
│
├── i18n                                        - translation folder
│   ├── en.json                                 - english translation files
│   └── ...                                     - other Enterprise edition translation files
│
├── mocks                                       - unit tests mocks
│
├── app                                         - app sources
│   ├── components                              - components folder
│       ├── my-comp                             - component folder
│           ├── my-comp.html                    - component template
│           ├── my-comp-controller.js           - component controller
│           ├── my-comp-controller.spec.js      - component controller unit tests
│           ├── my-comp-directive.js            - component directive
│           ├── my-comp-directive.spec.js       - component directive unit tests
│           └── my-comp-module.js               - component module definition
│
│       ├── widgets                             - Reusable components folder
│       ├── ...                                 - other components
│
│
│   ├── services                                - common services source folder
│       ├── my-feature                          - service folder
│           ├── my-feature-module.js            - service module definition
│           ├── my-feature-service.js           - service implementation
│           ├── my-feature-service.spec.js      - service unit tests
│           ├── ...                             - other my-feature services
│
│   ├── css                                     - style folder
│       ├── base                                - base styles (reset, typography, ...)
│           ├── _base.scss                      - file that only imports all base styles
│           └── ...                             - other base styles, imported in _base.scss
│       ├── components                          - components styles (Buttons, Carousel, Cover, Dropdown, ...)
│           ├── _components.scss                - file that only imports all common components styles
│           └── ...                             - other components styles, imported in _components.scss
│       ├── layout                              - layout styles (Navigation, Grid system, Header, Footer, Sidebar, Forms, ...)
│           ├── _layout.scss                    - file that only imports all layout styles
│           └── ...                             - other layout styles, imported in _layout.scss
│       ├── pages                               - pages specific styles (home page, ...)
│           ├── _pages.scss                     - file that only imports all pages styles
│           └── ...                             - other pages styles, imported in _pages.scss
│       ├── utils                               - utils styles (Mixins, Colors, ...)
│           ├── _utils.scss                     - file that only imports all utils styles
│           └── ...                             - other utils styles, imported in _utils.scss
│       └── vendors                             - vendors styles (third party frameworks)
│           ├── _vendors.scss                   - file that only imports all vendors styles
│           └── ...                             - other vendors styles, imported in _vendors.scss
│
│   ├── index.scss                              - main scss that only imports _base.scss, _components.scss, _layout.scss, _pages.scss, _utils.scss, _vendors.scss
│   ├── index-module.js                         - main module
│   └── index-module.spec.js                    - main module config unit tests
│
└── index.html                                  - main page
</pre>


### Code style
Interesting style guides to follow : 
* Todd Motto : https://github.com/toddmotto/angularjs-styleguide
* John Papa : https://github.com/johnpapa/angular-styleguide

### Run
when in folder /angular1-webpack2-seed type the command

`npm run serve`

Then it will start a web server on port 3000 and watch any code change to refresh the browser. 

Then application is available at http://localhost:3000

### Run on your local machine
In order to make http requests with The Marvel Comics API, you should configure _src/assets/config/config.dev.json_ file.
 `serverUrl`, `apikey`, `timestamp`, `hash` have to be configured. See https://developer.marvel.com/documentation/getting_started for more details.
