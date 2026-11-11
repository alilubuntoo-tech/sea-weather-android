# 🌊 Sea Weather – Android

A small web app that shows sea and weather conditions on the Israeli Mediterranean coast. It installs on an Android phone like a normal app (full-screen, with its own icon).

**Beaches:** Nahariya, Akko, Haifa, Atlit, Hof Dor, Caesarea, Netanya, Tel Aviv

**Shows:** air temperature, humidity, water temperature, wave height, wind, sky, the next 12 hours, and rough conditions for **swimming**, **windsurfing** and **SUP (paddleboarding)**.

Data comes from [Open-Meteo](https://open-meteo.com) (free, no account or API key needed). An internet connection is required.

> ⚠️ The condition indicators are only rough estimates. Always follow lifeguards and beach flags.

---

## Files in this repository

| File | Purpose |
|------|---------|
| `index.html` | The app itself |
| `manifest.json` | Lets Android install it as an app |
| `sw.js` | Tiny service worker that makes the app installable |
| `icon-192.png` | App icon (192×192) |
| `icon-512.png` | App icon (512×512) |
| `background.jpg` | Background photo |
| `README.md` | This file |

All file names must stay exactly as shown.

---

## Part 1: Put the app online (GitHub Pages)

1. Create a free account at [github.com](https://github.com).
2. Click **+** (top right), then **New repository**.
   - Name: `sea-weather-android`
   - Choose **Public**
   - Click **Create repository**
3. Click **uploading an existing file**, drag in all the files from the table above, and click **Commit changes**. Upload the files themselves, not a zip file or a folder.
4. Go to **Settings**, then **Pages**.
   - **Source:** Deploy from a branch
   - **Branch:** `main`, folder `/ (root)`
   - Click **Save**
5. Wait 1 to 2 minutes. Your app's address will be:

   ```
   https://YOUR-USERNAME.github.io/sea-weather-android/
   ```

   Open it in a browser to check that it works.

---

## Part 2: Install on Android

1. Open **Chrome** on your phone and go to your address (above).
2. Tap the **three dots** menu at the top right.
3. Tap **Install app**. On some versions it says **Add to Home screen**.
4. Tap **Install** (or **Add**) to confirm.

The icon appears on your home screen and the app opens full-screen. On Samsung Internet, use the menu, then **Add page to**, then **Home screen**.

---

## Updating the app

1. Open the repository on github.com.
2. Click **Add file**, then **Upload files**.
3. Drag in the new file(s). A file with the same name replaces the old one.
4. Click **Commit changes** and wait a minute or two.
5. On the phone, close the app completely and open it again. If it still looks old, open the address in Chrome and refresh the page once.

To change a file's contents directly on GitHub, click the file, then the pencil icon.

---

## Adding or changing beaches

Open `index.html` and find the `PLACES` list near the top of the script:

```js
"Haifa": [32.820, 34.970, 32.840, 34.900],
```

The four numbers are: land latitude, land longitude, sea latitude, sea longitude. Wave data only exists over water, so the sea point should be a little offshore. Add a new line in the same format (keep the comma at the end of each line except the last one).

---

## Troubleshooting

**The page is blank or shows a 404 error.**
GitHub Pages can take a few minutes the first time. Check that the repository is Public, that Pages is set to `main` / `(root)`, and that `index.html` is in the main folder.

**"Install app" is missing from the menu.**
- Check that all files are uploaded, especially `manifest.json`, `sw.js`, `icon-192.png` and `icon-512.png`.
- Close Chrome completely, reopen the address, and check the menu again.
- If you added an older shortcut earlier, remove it first.
- Use Chrome. Some other browsers do not offer installation.

**The background photo or icon does not appear.**
Check that `background.jpg`, `icon-192.png` and `icon-512.png` are in the repository with exactly those names.

**The data does not load ("Could not load data").**
Check the phone's internet connection, then press **Refresh**.

**The app looks old after an update.**
Close the app fully and reopen it. If that doesn't help, open the address in Chrome and refresh once, or remove the app and install it again.

**Wave height or water temperature shows "n/a".**
The sea data is missing for that spot at the moment. Try another beach or press **Refresh** later.

---

## Removing the app

Press and hold the icon on the home screen, then choose **Uninstall** or **Remove**.
