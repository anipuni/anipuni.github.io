function clock(){
  c = new Date();
  h = c.getHours();
  m = c.getMinutes();
  s = c.getSeconds();
  document.clockForm.digitalClock.value=h+":"+m+":"+s;
  setTimeout("clock()",1000);
}
</script>
</head>
<body>
<center><h2><b>CLOCK</b></h2></center>
<form name="clockForm">Current Time：
<input size="10" name="digitalClock">
</form>
<script language="javascript">
//<![CDATA[
clock();
//]]>