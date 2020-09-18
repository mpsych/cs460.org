frames = ['content1', 'content2', 'content3', 'content4', null];
times = [0, // Today... 
         2000, // we will learn about the camera
         5000, // And scenes with multiple objects.
         9000, // this is lecture 4
         19000];

document.getElementById("content").innerHTML = "\
    <div id='content1' style='display:none;position: absolute;color:white;top:25%;left:30%;margin-left:50px;font-size:440%'>Today...</div>\
\
    <div id='content2' style='display:none;position: absolute;color:white;top:30%;left:20%;margin-left:50px;font-size:440%'>We will learn about the camera.</div>\
\
    <div id='content3' style='display:none;position: absolute;color:white;top:20%;left:10%;margin-left:50px;font-size:440%'>And scenes with multiple objects.</div>\
\
    <div id='content4' style='display:none;position: absolute;color:white;top:45%;left:40%;margin-left:50px;font-size:440%'>This is lecture 5.</div>    \
<div style='visibility:hidden'>   \
  <audio id='voice'>    \
    <source src='lectures/05.mp3'>    \
  </audio>    \
</div>   \
\
";

