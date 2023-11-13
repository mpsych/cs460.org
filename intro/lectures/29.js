frames = ['content1', 'content2', 'content3', 'content4', 'content5', 'content6', 'content7', 'content8',null];
times = [0, // Today... 
     1500, // 
     4000, // 
     7000, // this is lecture 10
     9500,
     13500,
     19500,
     23000,
     25000,
     27000];
     
document.getElementById("content").innerHTML = "\
\
    <div id='content1' style='display:none;position: absolute;color:white;top:25%;left:30%;margin-left:50px;font-size:440%'>Today...</div>\
\
    <div id='content2' style='display:none;position: absolute;color:white;top:30%;left:20%;margin-left:50px;font-size:440%'>Dan Ginsburg is our guest.</div>\
\
    <div id='content3' style='display:none;position: absolute;color:white;top:20%;left:10%;margin-left:50px;font-size:440%'>Dan is a computer graphics expert..</div>\
\
    <div id='content4' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>and game developer veteran!</div>\
\
    <div id='content5' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>Dan wrote several text books and founded Upsample Software.</div>\
\
    <div id='content6' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>Dan worked on the AMD Linux Graphics Drivers and many video games!</div>\
\
    <div id='content7' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>And he will teach us some low-level graphics!</div>\
\
    <div id='content8' style='display:none;position: absolute;color:white;top:45%;left:40%;margin-left:50px;font-size:440%'>This is lecture 29.</div>    \
<audio id='voice'>    \
    <source src='lectures/none.mp3'>    \
  </audio>    \
</div>   \
\
";

