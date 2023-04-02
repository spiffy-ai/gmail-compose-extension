# Chrome Extension

This folder has the test code to start a Chrome Extension for Spiffy.

This project uses [Vite](https://vitejs.dev/) and [crxjs](https://crxjs.dev/vite-plugin) to build the extension.

## Setup

### Install dependencies

```sh
yarn
```

### Build extension

```sh
yarn build
```

### Load extension

1. Navigate to [chrome://extensions/](chrome://extensions/)
1. Turn on the "Developer mode" toggle switch in the top right of the window
1. Click the "Load unpacked" button in top left of the window
1. Go to this folder (`extension`) and select the `dist` directory to load the extension
1. Navigate to https://mail.google.com/ and open the console, you should see a welcome message (the Content Script React app)
1. Go to extensions and click "Spiffy" to see the Spiffy Popup app.
1. Open any reply box (console will say focus in/out), along with a "play" button (from the Content Script React app)
1. If you type something, you will see characters in the console
2. If you click the play button, you will see the text in the box printed out.

### Reloading extension

1. Run `yarn build`.
2. Go to [chrome://extensions/](chrome://extensions/).
3. Click on the refresh/reload icon on the Spiffy extension.
4. Reload the https://mail.google.com/ tab.

## [Popup](https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup)

The popup source code is at the root directory in `src/PopupApp.tsx`.

## [Content Script](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)

The content script source code is in the `content-script` directory, i.e. in `src/content-script/ContentApp.tsx`.

## Background

Background script is empty right now, in `src/background.js`.
