        frames = ['content1', 'content2', 'content3', 'content4', 'content5', null];
        times = [0, // Today... 
                 1100, // 
                 5100, // And
                 11000, // 
                 19000, // this is lecture 19
                 22500];

     
document.getElementById("content").innerHTML = "\
    <div id='content1' style='display:none;position: absolute;color:white;top:25%;left:30%;margin-left:50px;font-size:440%'>Today...</div>\
\
    <div id='content2' style='display:none;position: absolute;color:white;top:30%;left:20%;margin-left:50px;font-size:440%'>Ismail Salhi is our special guest.</div>\
\
    <div id='content3' style='display:none;position: absolute;color:white;top:20%;left:10%;margin-left:50px;font-size:440%'>Ismail is a computer scientist and CEO of qleek.</div>\
\
    <div id='content4' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>He will speak to us about the importance of visuals during his journey of entrepreneurship.</div>\
\
    <div id='content5' style='display:none;position: absolute;color:white;top:45%;left:40%;margin-left:50px;font-size:440%'>This is lecture 35!</div>    \
<audio id='voice'>    \
    <source src='lectures/"+lecturenumber+".mp3'>    \
  </audio>    \
</div>   \
\
";

