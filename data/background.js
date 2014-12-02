// BH_Lin@2014/11/02

function reloadAllTabs() {

	chrome.tabs.query({}, function(tabs) {
		console.log('query Tabs: ', tabs.length);
		var effectTabCount = 0;
		for(var i=0; i< tabs.length; i++) {
			if((tabs[i].url.indexOf("chrome-devtools://") === -1) &&
				(tabs[i].url.indexOf("chrome-extension://") === -1) &&
				(tabs[i].url.indexOf("chrome://") === -1)) {
				console.log('Reload TabId: ', tabs[i].id, tabs[i].url);
				chrome.tabs.reload(tabs[i].id);
				effectTabCount +=1;
			}
		}

		console.log('Tobal Reloaded Tabs: ', effectTabCount);
    } );

}

chrome.browserAction.onClicked.addListener(function (tab) {

    console.log('browser action click !!');

	reloadAllTabs(tab.id);


});
