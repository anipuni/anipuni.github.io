    google.load("feeds", "1");

    function initialize() {
    	var max_length = 5; //読み込み最大記事数
var d = new Date();
var dq = d.getMonth()+""+d.getDate()+""+d.getHours()+d.getMinutes();
    	var feed = new google.feeds.Feed("http://www.amazon.co.jp/gp/rss/new-releases/digital-text/2410280051/ref=zg_bsnr_2410280051_rsslink&tag=anibull-22"+"?"+dq); //RSSを指定
    	feed.setNumEntries(max_length);
    	feed.load(function(result) {
    		if (!result.error) {
    			var container = document.getElementById("feed");
    			for (var i = 0; i < result.feed.entries.length; i++) {
    				var entry = result.feed.entries[i];
    				var title = entry.title; //記事タイトル
    				var link = entry.link; //記事へのリンク
    				var content = entry.content; //記事の内容
    				var snippet = entry.contentSnippet; //記事の要約

    				//記事から画像抽出
    				var imgtag = "";
    				var imgarray = content.match(/(http:){1}[\S_-]+((\.jpg)|(\.JPG)|(\.gif)|(\.png))/);
    				if (imgarray) {
    					imgtag = "<img src='" + imgarray[0] + "' border='0'/>";
    				}

    				jQuery('#amazonranking-anime').append("<div class='amaran'><div class='amarangazo'><a href='" + link + "'target='_blank'></div>" + imgtag + "<div class='amarantitle'>" + entry.title +"</div></div>"); //画像リンクを挿入
    			}
    		}
    	});
    }
    google.setOnLoadCallback(initialize);