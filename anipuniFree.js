(function(window,name,element,offset,max,size){
window[name] = function(d){
    var es = d.feed.entry;
    var item = 0;
    var root = $(element);
    for(var i = offset, k = es.length; i < k && item < max; i++){
        var e = es[i];
        var c = e.content.$t;
        var img = $(c).find("img").first();
        var src = img.attr("src");
        if(src && src.indexOf("https://blogger.googleusercontent.com/tracker/") != -1) continue;
        if(src.search(/^(http|https)+\:\/\/lh\d+\.googleusercontent.com\//i) != -1 || src.search(/^(http|https)+\:\/\/\d+\.bp\.blogspot\.com\//i) != -1 || src.search(/^(http|https)+\:\/\/lh\d+\.ggpht.com\//i) != -1){
            var a = src.split('/');
            if(a.length == 9) a[7] = size;
            else if(a.length == 8) a[7] = size + '/' + a[7];
            src = a.join('/');
        }
        var link;
        for(var j = 0, l = e.link.length; j < l; j++){
            if(e.link[j].rel.indexOf("alternate") != -1){
                link = e.link[j].href;
                break;
            }
        }

                $("<p/>").addClass("title").append(
                    $("<a/>").attr("href",link).append(e.title.$t)
                )
            )
        );
        item++;
    }
};
})(window,"headlineanipuniFree","#headlineanipuniFree",0,100,400);