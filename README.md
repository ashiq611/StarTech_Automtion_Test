# StarTech.com.bd Website Test Suite

This test suite uses WebdriverIO to automate and verify the functionality of the StarTech.com.bd website. It also integrates Allure Report for enhanced test reporting.

## Prerequisites

Before running the tests, ensure you have the following installed:

-   Node.js (LTS recommended)
-   npm or yarn
-   WebdriverIO CLI (`npm install -g @wdio/cli`)
-   Allure CLI (`npm install -g allure-commandline`)

## Setup

1.  **Clone the repository:**

    ```markdown
    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```
    ```

2.  **Install dependencies:**

    ```markdown
    ```bash
    npm install
    # or
    yarn install
    ```
    ```

## Running the Tests and Generating Allure Report (Using `npm run wdio`)

This project is configured to run the WebdriverIO tests and generate the Allure report automatically using the `npm run wdio` command.

1.  **Run the tests and generate the report:**

    ```markdown
    ```bash
    npm run wdio
    ```
    ```

    This command will execute the tests, and the Allure results will be stored in the `allure-results` directory. After the tests finish, it will automatically generate the HTML report from the `allure-results` directory and open it in your default web browser.

## Test Cases

The test suite covers the following scenarios:

-   **TC01: Login with valid credentials:**
    -   Verifies that a user can successfully log in with valid username and password.
    -   Checks if the account name is displayed correctly after login.
-   **TC02: Product search and verification:**
    -   Searches for a product using a search term.
    -   Verifies that the search results page is displayed.
    -   Checks if the search headline matches the search term.
-   **TC03: Add product to cart:**
    -   Searches for a product.
    -   Navigates to the product details page.
    -   Sets the quantity and adds the product to the cart.
    -   Verifies that the user is redirected to the checkout page.
-   **TC04: Verify total price calculation:**
    -   Opens the cart page.
    -   Retrieves the quantity, unit price, and total price of the items in the cart.
    -   Verifies that the total price is calculated correctly.
-   **TC05: Clear all items from cart:**
    -   Opens the cart page.
    -   Clears all items from the cart.
    -   Verifies that the cart is empty.
-   **TC06: Handle invalid search input:**
    -   Searches for a non-existent product.
    -   Verifies that the appropriate "no products found" message is displayed.
-   **TC07: Logout from the application:**
    -   Logs out from the application.
    -   Verifies that the user is logged out.

## Project Structure

-   `pages/`: Contains page object files representing different pages of the website.
-   `input/`: Contains input data for the tests.
-   `output/`: Contains expected output data for the tests.
-   `specs/`: Contains test specification files.
-   `utils/`: Contains utility functions.
-   `wdio.conf.js`: WebdriverIO configuration file.
-   `allure-results/`: Contains the generated Allure report data.
-   `allure-report/`: Contains the generated HTML Allure report.

## Dependencies

-   `@wdio/cli`: WebdriverIO command-line interface.
-   `@wdio/local-runner`: WebdriverIO local runner.
-   `@wdio/mocha-framework`: Mocha test framework adapter.
-   `@wdio/spec-reporter`: WebdriverIO spec reporter.
-   `@wdio/globals`: WebdriverIO globals.
-   `chromedriver`: Chrome driver.
-   `@wdio/allure-reporter`: WebdriverIO Allure reporter.
-   `allure-commandline`: Allure command-line tool.

## Configuring Allure Report

Ensure that your `wdio.conf.js` file includes the Allure reporter:

```javascript
// wdio.conf.js
exports.config = {
  // ... other configurations
  reporters: ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false,
    useCucumberStepReporter: false,
  }]],
  // ... other configurations
}```
And your package.json file includes the wdio script:


## Contributing
Feel free to contribute to this project by submitting pull requests or reporting issues.

## License
This project is licensed under the MIT License. 
