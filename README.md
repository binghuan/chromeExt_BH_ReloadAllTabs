# Reload All Tabs - Chrome Extension

<img src="Icon.png" width="auto" height="240px"><br/>

A simple and efficient Chrome extension that allows you to reload all open tabs with a single click.

## Features

- **One-click reload**: Simply click the extension icon to reload all tabs
- **Smart filtering**: Automatically excludes system tabs (chrome://, chrome-extension://, chrome-devtools://) 
- **Lightweight**: Minimal resource usage with clean, efficient code
- **Safe operation**: Only reloads user-accessible web pages

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension folder
5. The extension icon will appear in your Chrome toolbar

## Usage

1. Click the "Reload All Tabs" extension icon in your Chrome toolbar
2. All open tabs (except system tabs) will be automatically reloaded
3. Check the browser console to see reload activity logs

## How It Works

The extension uses Chrome's `tabs` API to:
1. Query all open tabs in the current browser window
2. Filter out system tabs that shouldn't be reloaded:
   - `chrome-devtools://` - Developer tools
   - `chrome-extension://` - Extension pages  
   - `chrome://` - Chrome internal pages
3. Reload all remaining tabs using `chrome.tabs.reload()`

## Technical Details

- **Manifest Version**: 2
- **Permissions**: `tabs` (required to access and reload tabs)
- **Background Script**: Handles the tab reloading logic
- **Browser Action**: Provides the clickable icon interface

## File Structure

```
chromeExt_BH_ReloadAllTabs/
├── manifest.json          # Extension manifest and configuration
├── data/
│   ├── background.html     # Background page HTML
│   └── background.js       # Main extension logic
├── Icon*.png              # Extension icons (various sizes)
└── README.md              # This file
```

## Development

The main logic is contained in `data/background.js`:
- `reloadAllTabs()`: Core function that handles tab querying and reloading
- Event listener for browser action clicks
- Console logging for debugging

## Version History

- **v1.0.0**: Initial release with basic reload functionality

## Author

Created by BH_Lin (2014/11/02)

## Links

- **My Blog**: [http://studiobinghuan.blogspot.tw/?view=flipcard](http://studiobinghuan.blogspot.tw/?view=flipcard)
- **Alternative Blog**: [http://bhtalk.blogspot.tw/](http://bhtalk.blogspot.tw/)
- **Product Page**: [http://studiobinghuan.blogspot.tw/2014/12/reload-all-tabs-for-chrome.html](http://studiobinghuan.blogspot.tw/2014/12/reload-all-tabs-for-chrome.html)
