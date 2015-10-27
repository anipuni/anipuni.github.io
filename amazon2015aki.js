    google.load("feeds", "1");

    function initialize() {
    	var max_length = 7; //読み込み最大記事数
    	var feed = new google.feeds.Feed("http://www.amazon.co.jp/gp/rss/bestsellers/dvd/3932521051/ref=zg_bs_3932521051_rsslink&tag=anibull-22"); //RSSを指定
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

    				jQuery('#amazon_feed').append("<li style='list-style-type: none'><a href='" + link + "'>" + imgtag + "</a></li>"); //画像リンクを挿入
    			}
    		}
    	});
    }
    google.setOnLoadCallback(initialize);