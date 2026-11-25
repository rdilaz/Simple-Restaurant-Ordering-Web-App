# Jimmy's Diner Ordering App

A simple, single-page restaurant ordering application built with vanilla JavaScript, HTML, and CSS. This project allows users to select items from a menu, complete an order, and provide feedback.

## Features

* **Dynamic Menu:** The menu is rendered dynamically from a data file.
* **Interactive Cart:** Add or remove items from your order and see the total price update in real-time.
* **Order Modal:** A pop-up modal allows the user to enter mock payment details to complete the order.
* **Interactive Rating System:** After an order is "paid," users can provide a 1-5 star rating.
    * Stars highlight on hover.
    * The selected rating is "locked in" on click.

## Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6 Modules)
* Font Awesome 4.7 from a CDN (for icons)

## How to Run

1.  Clone this repository to your local machine.
2.  Serve the folder with any local web server, for example:

    ```bash
    python3 -m http.server 8000
    ```

3.  Open `http://localhost:8000` in your browser.

The app loads `index.js` as an ES module, and browsers block module imports from pages opened straight from disk (`file://`), so double-clicking `index.html` shows an empty menu.

## Credit
Built while following the [Scrimba](https://scrimba.com/) Frontend Developer Path.