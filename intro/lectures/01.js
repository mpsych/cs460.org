frames = ['content1', 'content2', 'content3', 'content4', 'content5', 'content6', null];
times = [0, 
         1500, 
         3500, 
         7500, 
         9500, 
         13500, 
         19000];

document.getElementById("content").innerHTML = "\
\
    <div id='content1' style='display:none;position: absolute;color:white;top:25%;left:30%;margin-left:50px;font-size:440%'>Today...</div>\
\
    <div id='content2' style='display:none;position: absolute;color:white;top:30%;left:20%;margin-left:50px;font-size:440%'>We will look at</div>\
\
    <div id='content3' style='display:none;position: absolute;color:white;top:20%;left:10%;margin-left:50px;font-size:440%'>examples of web-based computer graphics</div>\
\
    <div id='content4' style='display:none;position: absolute;color:white;top:25%;left:30%;margin-left:50px;font-size:440%'>And...</div>\
\
    <div id='content5' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>we will learn about the structure of this course.</div>\
\
    <div id='content6' style='display:none;position: absolute;color:white;top:45%;left:40%;margin-left:50px;font-size:440%'>This is lecture 1.</div>   \
<div style='visibility:hidden'>   \
  <audio id='voice'>    \
    <source src='lectures/01.mp3'>    \
  </audio>    \
</div>   \
\
";

