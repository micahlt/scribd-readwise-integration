# Scribd Readwise Integration

![https://chrome.google.com/webstore/detail/scribd-readwise-integrati/ilpnpfninhcmhcnnecbaefciaaenkefo](https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/tbyBjqi7Zu733AAKA5n4.png)

This is a Manifest v3 Chrome Extension with the ability to send highlights from a Scribd book to your Readwise account.  Simply go to the Scribd book, click the extension icon, and click the "Export to Readwise" button.  In contrast, [here's the way Readwise asks you to import from Scribd](https://help.readwise.io/article/83-how-do-i-import-highlights-from-scribd).

### Chrome and Firefox differences

This extension contains both a `manifest.json` and a `manifest.firefox.json`.  If you need to build this extension for Firefox, you must rename the original `manifest.json` file to `manifest.chrome.json`  and rename the `manifest.firefox.json` file to `manifest.json`.  
