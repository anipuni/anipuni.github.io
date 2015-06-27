google.load("feeds", "1");
//<![CDATA[
var getRssFeeds = function (_id, _urls, _maxLength) {
 if(!_id || !_urls || (!(_urls instanceof Array))) return;
 var entryNum = 1;//各RSSの読み込みエントリー数
 var maxLength = (_maxLength)?  _maxLength : 0 ;
 //総エントリー表示数（0はすべて表示)
 //変数定義
 var entriesArray = new Array();
 var complete = 0;
 
 //初期化
 var init = function () {
  for(var i=0 ; i < _urls.length ; i++){
   //RSS読み込み
var d = new Date();
var dq = d.getMonth()+""+d.getDate()+""+d.getHours();
   var feed = new google.feeds.Feed(_urls[i]+"?"+dq);
   feed.setNumEntries(entryNum);
   feed.load(function(result) {
    if (!result.error) {
     for (var i = 0; i < result.feed.entries.length; i++) {
      var entry = result.feed.entries[i];
      entriesArray.push(entry);
      var pdate = new Date(entry.publishedDate);
      var arr = entriesArray[(entriesArray.length-1)];
      arr.sortDate = pdate.getTime();
      arr.siteTitle = result.feed.title;
     }
    }
    complete++;
    if(_urls.length == complete) echo();
   });
  }
 };
 //表示
 var echo = function () {
  entriesArray.sort (function (b1, b2) { return b1.sortDate < b2.sortDate ? 1 : -1; } );//降順ソート
  //this.entriesArray.sort (function (b1, b2) { return b1.sortDate > b2.sortDate ? 1 : -1; } );//昇順ソート
  var feedLength = (_maxLength)? _maxLength : entriesArray.length;
  
  var pastDay = 1;//newマークをつける日数
  var now = (new Date()).getTime();
  var pastTime = pastDay * 24 * 60 * 60 * 1000;
  
  var container = document.getElementById(_id);
  var html='<dl>';
  for (var i = 0; i < feedLength; i++) {
   var entry = entriesArray[i];
   var pdate = new Date(entry.publishedDate);
   var Y = pdate.getFullYear();
   var m = pdate.getMonth() + 1;
   m = (m < 10)? "0" + m:m;//月数字を2桁に
   var d = pdate.getDate();
   d = (d < 10)? "0" + d:d;//日数字を2桁に
   var date = " " + m + "/" + d + "";

   html += '<dd>■<a href="' + entry.link + '" target="_blank">' + entry.title + '' + date + '</a>';
   if(now >= entry.sortDate && now <= (entry.sortDate + pastTime)){
    html += '<strong style="color:red">new!</strong>';
   }
   html += '</dd>';
  }
  html += '</dl>';
  container.innerHTML += html;
 };
 google.setOnLoadCallback(init);
};
getRssFeeds("feedsbandai", [
"http://www.b-ch.com/contents/rss/ttl/4540/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4511/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4532/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4536/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4509/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4553/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4321/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4530/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4555/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4557/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4529/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4513/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4531/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4508/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4535/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4452/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4510/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4552/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4512/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/3713/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4546/index.rdf",
"http://www.b-ch.com/contents/rss/ttl/4011/index.rdf"
]);

//]]>