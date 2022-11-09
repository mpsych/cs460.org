frames = ['content1', 'content2', 'content3', 'content4', 'content5','content6','content7','content9','content10','content11', null];
times = [0, // Today... 
         1500, // 
         6000, // And
         12000, // 
         20000, // this is lecture 19
         26000,
         32000,
         36500,
         43000,
         49000,
         52000];


document.getElementById("content").innerHTML = "\
\
    <div id='content1' style='display:none;position: absolute;color:white;top:25%;left:30%;margin-left:50px;font-size:440%'>Today...</div>\
\
    <div id='content2' style='display:none;position: absolute;color:white;top:30%;left:20%;margin-left:50px;font-size:440%'>We have Funda Durupinar Babur as our guest.</div>\
\
    <div id='content3' style='display:none;position: absolute;color:white;top:20%;left:10%;margin-left:50px;font-size:440%'>Funda is a faculty member in the CS department here at UMB.</div>\
\
    <div id='content4' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>Professor Funda is an expert in computer graphics, animation, and psychology.</div>\
\
    <div id='content5' style='display:none;position: absolute;color:white;top:45%;left:40%;margin-left:50px;font-size:440%'>Funda studied at Bilkent University and UPenn.</div>    \
\
    <div id='content6' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>She was a software engineer at the MSKCC in NYC</div>\
\
    <div id='content7' style='display:none;position: absolute;color:white;top:25%;left:30%;margin-left:50px;font-size:440%'>And at the Oregon Health & Science University.</div>    \
    <div id='content9' style='display:none;position: absolute;color:white;top:25%;left:20%;margin-left:50px;font-size:440%'>Here at UMB, Funda will teach Game Development in the Spring.</div> \
\
    <div id='content10' style='display:none;position: absolute;color:white;top:15%;left:20%;margin-left:50px;font-size:440%'>And today, Funda will tell us about crowd simulations.</div>\
\
    <div id='content11' style='display:none;position: absolute;color:white;top:45%;left:40%;margin-left:50px;font-size:440%'>This is lecture 27.</div> \
<audio id='voice'>    \
    <source src='lectures/none.mp3'>    \
  </audio>    \
</div>   \
\
";

