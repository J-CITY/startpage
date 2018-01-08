var settings = {
	"background":"img/wallpaper.jpg", // Wallpaper
	"theme":"default.css", // Theme, coming soon
	"widget-area":"#widget-area",
	"expand-folders":false, // Automatically expand folders without hovering their icon (values : true/false)
	"default-engine":"google", // ID of default engine (ID is set by the engines variable)
	"open-in-new-tab":false, // To open links in new tabs (values : true/false)
	"search-box":true // Show/hide search box
};
// Search engines
var engines = [
	{
		"id":"google",
		"name":"Google",
		"url":"http://google.com/#q=%s",
		"icon":"img/icons/google.png"
	},
        {
		"id":"yahoo",
		"name":"DDG",
		"url":"https://duckduckgo.com/?q=%s",
		"icon":"img/icons/yahoo.png"
	},
	{
		"id":"wikipedia",
		"name":"Wikipedia",
		"url":"http://en.wikipedia.org/w/index.php?search=%s&title=Special%3ASearch",
		"icon":"img/icons/wikipedia.png"
	},
	{
		"id":"youtube",
		"name":"YouTube",
		"url":"https://www.youtube.com/results?search_query=%s",
		"icon":"img/icons/youtube.png"
	}
];
// Shortcuts
var shortcuts = [
	{
		"type":"folder",
		"title":"Search",
		"icon":"img/icons/search.png",
		"contents": [
			{
				"title":"Google",
				"url":"http://google.com",
				"icon":"img/icons/google.png"
			},
			{
				"title":"Yahoo",
				"url":"http://yahoo.com",
				"icon":"img/icons/yahoo.png"
			},
			{
				"title":"Bing",
				"url":"http://bing.com",
				"icon":"img/icons/bing.png"
			}
		]
	},
	{
		"type":"folder",
		"title":"Knowledge",
		"icon":"img/icons/knowledge.png",
		"contents": [
			{
				"title":"Wikipedia",
				"url":"http://en.wikipedia.org",
				"icon":"img/icons/wikipedia.png"
			},
			{
				"title":"SmartSearch",
				"url":"http://smartsearch.altervista.org",
				"icon":"img/icons/smartsearch.png"
			},
			{
				"title":"Translate",
				"url":"http://translate.google.com",
				"icon":"img/icons/translate.png"
			}
		]
	},
	{
		"type":"folder",
		"title":"Media",
		"icon":"img/icons/media.png",
		"contents": [
			{
				"title":"YouTube",
				"url":"http://youtube.com",
				"icon":"img/icons/youtube.png"
			},
			{
				"title":"SoundCloud",
				"url":"http://soundcloud.com",
				"icon":"img/icons/soundcloud.png"
			},
			{
				"title":"Vimeo",
				"url":"http://vimeo.com",
				"icon":"img/icons/vimeo.png"
			},
			{
				"title":"Grooveshark",
				"url":"http://grooveshark.com",
				"icon":"img/icons/grooveshark.png"
			}
		]
	},
	{
		"type":"folder",
		"title":"Social",
		"icon":"img/icons/social.png",
		"contents": [
			{
				"title":"Facebook",
				"url":"http://facebook.com",
				"icon":"img/icons/facebook.png"
			},
			{
				"title":"Twitter",
				"url":"http://twitter.com",
				"icon":"img/icons/twitter.png"
			},
			{
				"title":"Google +",
				"url":"http://plus.google.com",
				"icon":"img/icons/googleplus.png"
			},
			{
				"title":"deviantART",
				"url":"http://deviantart.com",
				"icon":"img/icons/deviantart.png"
			}
		]
	},
	{
		"type":"folder",
		"title":"Fun",
		"icon":"img/icons/fun.png",
		"contents": [
			{
				"title":"deffit",
				"url":"http://deff.it",
				"icon":"img/icons/deffit.png"
			},
			{
				"title":"9GAG",
				"url":"http://9gag.com",
				"icon":"img/icons/9gag.png"
			},
			{
				"title":"digg",
				"url":"http://digg.com",
				"icon":"img/icons/digg.png"
			}
		]
	},
	{
		"type":"folder",
		"title":"Coding",
		"icon":"img/icons/coding.png",
		"contents": [
			{
				"title":"MDN",
				"url":"http://developer.mozilla.org",
				"icon":"img/icons/mdn.png"
			},
			{
				"title":"Github",
				"url":"http://github.com",
				"icon":"img/icons/github.png"
			},
			{
				"title":"CSS Deck",
				"url":"http://cssdeck.com",
				"icon":"img/icons/cssdeck.png"
			},
			{
				"title":"Bugzilla",
				"url":"http://bugzilla.mozilla.org",
				"icon":"img/icons/bugzilla.png"
			},
			{
				"title":"Koding",
				"url":"http://koding.com",
				"icon":"img/icons/koding.png"
			},
			{
				"title":"JSFiddle",
				"url":"http://jsfiddle.net",
				"icon":"img/icons/jsfiddle.png"
			}
		]
	}
];
var widgets = [
	{
		"name":"time",
		"id":"time",
		"disabled": false,
		"onload": function(w) {
			setInterval(function() {w.updateTime({"seconds":false,"am/pm":document.body.hasAttribute("data-ampm")});},200);
			// Time updater, usable for all elements
			HTMLElement.prototype.updateTime = function(params){
				var currentTime = new Date();
				var hour = currentTime.getHours();
				var minute = currentTime.getMinutes();
				var seconds = currentTime.getSeconds();
				var status = " PM "
				if (hour < 12){status = " AM "}
				if ((hour > 12) && params["am/pm"] == true){hour -= 12}
				if (hour < 10){hour = "0" + hour}
				if (minute < 10){minute = "0" + minute}
				if (seconds < 10) {seconds = "0" + seconds}
				t_str = (hour + ":" + minute); // To add AM/PM back, insert  (+ " " + status ) without the parentheses after the word minute.
				if(params.seconds == true) {t_str +=":"+seconds};
				if(params["am/pm"] == true) {t_str+= " <sub>"+status+"</sub>"}
				this.innerHTML = t_str;
			};
			w.onclick = function() {
				if(document.body.hasAttribute("data-ampm")) {document.body.removeAttribute("data-ampm");localStorage.removeItem("extensions.clock.ampm")}
				else {document.body.setAttribute("data-ampm","true");localStorage.setItem("extensions.clock.ampm","true")}
			};
			if(localStorage.getItem("extensions.clock.ampm")) {
				document.body.setAttribute("data-ampm","true");
			}
		}
	}
];