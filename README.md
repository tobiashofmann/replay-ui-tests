# Replay UI Tests

This is a sample app to show how user recorded UI tests (via Chrome recorder) can be replayed automatically using [replay](https://github.com/puppeteer/replay). More information about the approach and app created as an example can be found at the my blog post [Replay UI Tests]().

The recommended approach for going through the example is to read first the blog post and create the app in parallel by following the steps outlined in the blog post. This repository should be used as reference and help.

## Objective

The objective is to create a project that runs automated UI tests using replay. The app under test is the [SAP Sample app SFLIGHT](https://github.com/SAP-samples/cap-sflight). The recorded tests are part of a larger blog post series and were originally recorded for the example apps [UI Test Recording](https://github.com/tobiashofmann/sample-ui-test-recording) and [Interactive visual regression tests](https://github.com/tobiashofmann/Interactive-visual-regression-tests).

 The UI controls tested include value help dialogs and table entries. To call these UI elements, the user must perform certain actions like clicking an element, or inserting values by keyboard. These interactions are recorded by the user of the app and provided as JSON files directly from the Chrome recorder. The tests itself should not be changed by the developer. The goal of the sample app of this repository is to run these test automatically using replay.

## Tests

### Recordings

The UI test recordings taken from the other example apps and provided for convinience also in this repository. The recordings are going to be used as-is. No changes to the recordings are done by the developer. The tests should be run automatically without coding. Only replay should be configured to run the tests sucessfully.

## Example UI interactions

The test recording serves as the foundation for the BackstopJS tests. The value help for the agency input filter and for the travel status are called. In step 5 of the example, both filters are filled out with values and the table is filtered. The Chrome recording for step 5 is part of this repository in the corresponding branch.

## Example testing result

![Sample testing result](doc/TestResult.png)

## Prerequisites

The app in this repository is the testing app. The app to be tested is [SAP CAP SFLIGHT Demo app](https://github.com/SAP-samples/cap-sflight). The demo app must be installed and run separately. The information on how to do this can be found in the repository of the demo app. To make it easier for the examples, I recommend to deactivate the built-in authentication of the demo app.

<details>
  <summary>Disable authentication for sample app!</summary>

File [package.json](https://github.com/SAP-samples/cap-sflight/blob/main/package.json)

Change the value for cds.requires.development to:

```json
"[development]": {
    "auth": "dummy"
}
```

</details>

## Excercises

| Step          | Description |
| ------------- | ------------|
| Prerequisites | [Start SFLIGHT Fiori Elements app](https://github.com/SAP-samples/cap-sflight) |
| Step 1:       | [Initialize project](https://github.com/tobiashofmann/replay-ui-tests/tree/1-initialize-project) |
| Step 2:       | [Add UI test recordings](https://github.com/tobiashofmann/replay-ui-tests/tree/2-add-test-recordings) |
| Step 3:       | [Configure replay](https://github.com/tobiashofmann/replay-ui-tests/tree/3-configure-replay) |
| Step 4:       | [Solve timeout problem](https://github.com/tobiashofmann/replay-ui-tests/tree/4-solve-timeout-problem) |
| Step 5:       | [Run all tests successfully](https://github.com/tobiashofmann/replay-ui-tests/tree/5-run-all-tests) |
