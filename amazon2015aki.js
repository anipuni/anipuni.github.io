google.load("feeds", "1");
var readAmazonFeed = function(feedurl,selector,maxlength){
    function initialize(){
        var feed = new google.feeds.Feed(feedurl);
        feed.setNumEntries(maxlength);
        feed.load(function(result) {
            if (!result.error) {
                var dst = $("<ul>");
                for (var i = 0; i < result.feed.entries.length; i++) {
                    var entry = result.feed.entries[i];
                    var title = entry.title;
                    var link = entry.link;
                         
                    var content = entry.content;
                    var matches = content.match(/http[s]?\:\/\/[\w\+\$\;\?\.\%\,\!\#\~\*\/\:\@\&\\\=\_\-]+(jpg|jpeg|
 
gif|png|bmp)/g);
                    var tmp = '&lt;li&gt;&lt;a href="' + link + '"&gt;&lt;img src="' + matches[0] + 
 
'"/&gt;&lt;/a&gt;&lt;/li&gt;';
                    dst.append(tmp);
                }
                $(selector).append(dst);
            }
        });
    }
    google.setOnLoadCallback(initialize);
}
readAmazonFeed("http://www.amazon.co.jp/gp/rss/bestsellers/dvd/3932521051/ref=zg_bs_3932521051_rsslink&tag=anibull-22","#amazon2015aki",10);