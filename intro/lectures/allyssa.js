frames = ['content1', 'content2', 'content3', 'content4', 'content5', null];
times = [0, // Today... 
         1600, // 
         6000, // And
         7500, // 
         11800, // this is lecture 10
         17000];

document.getElementById("content").innerHTML = "\
    <div id='content1' style='display:none;position: absolute;color:white;top:25%;left:30%;margin-left:50px;font-size:440%'>Today...</div>\
\
    <div id='content2' style='display:none;position: absolute;color:white;top:30%;left:20%;margin-left:50px;font-size:440%'>the wonderful Allyssa A Lewis is our guest!</div>\
\
    <div id='content3' style='display:none;position: absolute;color:white;top:20%;left:10%;margin-left:50px;font-size:440%'>And...</div>\
\
    <div id='content4' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>We will learn how AI impacts her life as an animator!</div>\
\
    <div id='content5' style='display:none;position: absolute;color:white;top:45%;left:40%;margin-left:50px;font-size:440%'>This is lecture 17.</div>   \
\
<audio id='voice'>    \
    <source src='lectures/"+lecturenumber+".mp3'>    \
  </audio>    \
</div>   \
\
";

