var w;
function wtWeek(d) {
d.setDate(d.getDate()+1-d.getDay()); 
w=new Date(d);
document.all("ym").innerHTML=d.getFullYear()+"/"+(d.getMonth()+1);
for(var i=0;i<7;i++) {
document.all("wd"+eval(i)).innerHTML=( d.getMonth()+1 + "月" + d.getDate() + "日") ;
d.setDate(d.getDate()+1);}
}
function sj() {
wtWeek(new Date());
}
function mvWeek(dd) {
w.setDate(w.getDate()+dd);
wtWeek(w);
}