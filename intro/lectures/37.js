frames = ['content1', 'content2', 'content3', 'content4', 'content5', null];
times = [0, // Today... 
         1100, // 
         4400, // And
         5400];

     
document.getElementById("content").innerHTML = "\
    <div id='content1' style='display:none;position: absolute;color:white;top:25%;left:30%;margin-left:50px;font-size:440%'>Today...</div>\
\
    <div id='content2' style='display:none;position: absolute;color:white;top:30%;left:20%;margin-left:50px;font-size:440%'>We will have our first round of presentations!</div>\
\
    <div id='content3' style='display:none;position: absolute;color:white;top:45%;left:40%;margin-left:50px;font-size:440%'>This is lecture 37.</div>    \
<audio id='voice'>    \
    <source src='lectures/"+lecturenumber+".mp3'>    \
  </audio>    \
</div>   \
\
";

