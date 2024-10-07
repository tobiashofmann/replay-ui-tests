# Replay UI Tests

This is a sample app to show how replay can be used to automatically run UI tests for testing a web app. More information about the approach and app created as an example can be found at the my blog post [Replay UI tests]().

The recommended approach for going through the example is to read first the blog post and create the app in parallel by following the steps outlined in the blog post. This repository should be used as reference and help.

## Step 1: Initialize project

Initialize the npm project by running npm init. Then, add replay and puppeteer.

```sh
npm init
npm i --save-dev @puppeteer/replay puppeteer
```