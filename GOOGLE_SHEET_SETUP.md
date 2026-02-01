# How to Connect Your Inquiry Form to Google Sheets

To save inquiries from your website directly to a Google Sheet, follow these steps. This requires no servers and uses your free Google account.

## Step 1: Create the Google Sheet
1. Go to [Google Sheets](https://sheets.google.com).
2. Create a new sheet named **"Simplified Inquiries"**.
3. In the first row (Header), add these columns exactly:
   - **Column A**: `timestamp`
   - **Column B**: `name`
   - **Column C**: `email`
   - **Column D**: `phone`
   - **Column E**: `message`

## Step 2: Add the Apps Script
1. In your Google Sheet, click **Extensions** > **Apps Script**.
2. Delete any code in the editor and paste the following:

```javascript
var sheetName = 'Sheet1';
var scriptProp = PropertiesService.getScriptProperties();

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
}

function doPost (e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
    var sheet = doc.getSheetByName(sheetName);

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;

    var newRow = headers.map(function(header) {
      if(header === 'timestamp'){
        return new Date();
      }
      // Matches the form input 'name' fields
      return e.parameter[header];
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  finally {
    lock.releaseLock();
  }
}
```

3. Click the **Save** icon (floppy disk).
4. Run the `setup` function:
   - Select `intialSetup` from the function dropdown (top bar).
   - Click **Run**.
   - Accept the permissions (this is your own script accessing your own sheet).

## Step 3: Deploy as Web App
1. Click **Deploy** (blue button top right) > **New deployment**.
2. Click the specific gear icon next to "Select type" > **Web app**.
3. Configuration:
   - **Description**: "Inquiry Form"
   - **Execute as**: "Me" (your email)
   - **Who has access**: **"Anyone"** (Important! This allows the website to send data).
4. Click **Deploy**.
5. Copy the **Web App URL** (it ends in `/exec`).

## Step 4: Add URL to Your Website
1. Open `main.js` in your project.
2. Find the variable `const GOOGLE_SCRIPT_URL = 'YOUR_SCRIPT_URL_HERE';`.
3. Replace `'YOUR_SCRIPT_URL_HERE'` with the URL you just copied.

Done! Your form will now save data to your sheet.
