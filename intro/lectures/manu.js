frames = ['content1', 'content2', 'content3', 'content4', 'content5', 'content6', 'content7', 'content8',null];
times = [0, // Today... 
     1600, // 
     5000, // 
     12700, // this is lecture 10
     20500,
     27000,
     33000,
     38000,
     42000,
     46000];
     
document.getElementById("content").innerHTML = "\
\
    <div id='content1' style='display:none;position: absolute;color:white;top:25%;left:30%;margin-left:50px;font-size:440%'>Today...</div>\
\
    <div id='content2' style='display:none;position: absolute;color:white;top:30%;left:20%;margin-left:50px;font-size:440%'>We have Manuel Sainsily as our guest.</div>\
\
    <div id='content3' style='display:none;position: absolute;color:white;top:20%;left:10%;margin-left:50px;font-size:440%'>Manuel is an UX/HCI/XR specialist currently working for Unity.</div>\
\
    <div id='content4' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>Before, he worked at Immersion, IBM, Fans Entertainment, and Mindgeek.</div>\
\
    <div id='content5' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>Manu studied Computer Science at SUPINFO International University.</div>\
\
    <div id='content6' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>He is a Carribean-artist based in Montreal.</div>\
\
    <div id='content7' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>And he will speak to us about his career and projects!</div>\
\
    <div id='content8' style='display:none;position: absolute;color:white;top:45%;left:40%;margin-left:50px;font-size:440%'>This is lecture 14.</div>    \
<audio id='voice'>    \
    <source src='lectures/none.mp3'>    \
  </audio>    \
</div>   \
\
";

