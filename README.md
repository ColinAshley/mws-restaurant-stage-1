# FEND - Restaurant Reviews App

Udacity Front-End Web Dev Nano-Degree Front-End Applications Project.
A responsive and accessible Web App including service worker based Fetch and Caching functionality.

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)

## Features

- Presentation and Display
  - The template design was pre-supplied.
  - The Presentation is responsive to device screen size.


- Navigation
  - Navigation can be performed via:
    - Clicking on Map Location Tags.
    - Clicking on 'View Details' button on the Restaurant Cards.
  - Maps implemented via the mapbox.com API.
    - For the purposes of this example, a personal API key is pre-configured.


- Accessibility
  - Sections utilise the appropriate ARIA role and/or description where possible.
  - Tab Order organised to offer predictable usability.


- Network Access
  - Network Access is performed via JavaScript Service Worker implementation.
  - Static pages and components are pre-cached into App specific cache to improved performance.
  - Additionally, Visited Pages are cached on access to enable later offline access.


## Installation

Download all the files to your local machine.
```
git clone https://github.com/ColinAshley/mws-restaurant-stage-1
cd mws-restaurant-stage-1
```
## Usage

Start a local Web Server via:
```
  python -m http.server 8000
```
Open index.html using a browser.

## License

Distributed under the MIT license.
