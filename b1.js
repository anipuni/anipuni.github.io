google.load("feeds","1");
google.setOnLoadCallback(function(){
 getFeed();
}); //google.setOnLoadCallback
function getFeed(){
   var feed = new google.feeds.Feed("http://pipes.yahoo.com/pipes/pipe.run?_id=84720b0666eb85e093e9d583ff6c2f26&_render=rss");
   feed.setNumEntries(200);
   feed.load(callback);
 }
  function callback(result){
   if (result.error){
     alert(reault.error.message);
   }
   var res = "";
   var len = result.feed.entries.length;
   for (var i = 0;i < len;i++){
     var entry = result.feed.entries[i];
     var title = entry.title;
     var link = entry.link;
     var publisheddate = entry.publishedDate;

     var date = new Date (publisheddate);
     var year = date.getFullYear();
     var month = date.getMonth() + 1;
     var day = date.getDate();
     var hour = date.getHours();
     var min = ('0' + date.getMinutes() ).slice( -2 );
     var datestring = year + "/" + month + "/" + day + " " + hour + ":" + min;
     var content = entry.contentSnippet;
     res += "<li><a href=\"" + link + "\"><b>" + title + "</b></a></li>";
   }
   var panel = document.getElementById("feed");
   panel.innerHTML = res;
 }