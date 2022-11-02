frames = ['content1', 'content2', 'content3', 'content4', 'content5', 'content6', null];
times = [0, // Today... 
         1500, // 
         4500, // And
         8000, // 
         10300, // this is lecture 19
         13000, //
         20000];


document.getElementById("content").innerHTML = "\
    <div id='content1' style='display:none;position: absolute;color:white;top:25%;left:30%;margin-left:50px;font-size:440%'>Today...</div>\
\
    <div id='content2' style='display:none;position: absolute;color:white;top:30%;left:20%;margin-left:50px;font-size:440%'>the wonderful Allyssa Lewis is our guest!</div>\
\
    <div id='content3' style='display:none;position: absolute;color:white;top:20%;left:10%;margin-left:50px;font-size:440%'>She will tell us</div>\
\
    <div id='content4' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>about life as an animator</div>\
\
    <div id='content5' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>and help you find jobs!</div>\
\
    <div id='content6' style='display:none;position: absolute;color:white;top:45%;left:40%;margin-left:50px;font-size:440%'>This is the first CS Seminar in Fall 2022!</div>    \
\
<audio id='voice'>    \
    <source src='lectures/"+lecturenumber+".mp3'>    \
  </audio>    \
</div>   \
\
";

