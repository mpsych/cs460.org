frames = ['content1', 'content2', 'content2b', 'content3', 'content4', 'content5', 'content6', 'content7', 'content8', 'content9', 'content10', 'content11', 
'content12', 
'content13', null];
times = [0, // Today... 
         1300, // 
         4000, // And
         7600, // 
         16600,
         19800,
         22500,
         26110,
         29800,
         33300,
         39200,
         47400,
         58599,
         63600,
         72000];

     
document.getElementById("content").innerHTML = "\
\
    <div id='content1' style='display:none;position: absolute;color:white;top:25%;left:30%;margin-left:50px;font-size:440%'>Today...</div>\
\
    <div id='content2' style='display:none;position: absolute;color:white;top:30%;left:20%;margin-left:50px;font-size:440%'>Dan Ginsburg is our guest.\
    </div>\
\
    <div id='content2b' style='display:none;position: absolute;color:white;top:30%;left:20%;margin-left:50px;font-size:440%'>Dan is a computer graphics expert.\
    </div>\
\
    <div id='content3' style='display:none;position: absolute;color:white;top:20%;left:10%;margin-left:50px;font-size:440%'>Dan holds a BS in CS from WPI and an MBA from Bentley.\
    </div>\
\
    <div id='content4' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>Dan is the author of several text books:\
    </div>\
\
\
    <div id='content5' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'><img src='openglshading.jpg' style='width:400px'>\
    </div>\
\
    <div id='content6' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'><img src='opengles2.jpg' style='width:400px'>\
    </div>\
\
    <div id='content7' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'><img src='opengles3.jpg' style='width:400px'>\
    </div>\
\
    <div id='content8' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'><img src='opencl.jpg' style='width:400px'>\
    </div>\
\
\
    <div id='content9' style='display:none;position: absolute;color:white;top:35%;left:10%;margin-left:50px;font-size:440%'>Dan founded Upsample Software, and one of his recent clients is Valve\
    </div>\
\
\
    <div id='content10' style='display:none;position: absolute;color:white;top:15%;left:10%;margin-left:50px;font-size:440%'>where he worked on renderers for Dota 2, Artifact, Dota Underlords, and Steam VR.\
    </div>\
\
\
    <div id='content11' style='display:none;position: absolute;color:white;top:15%;left:10%;margin-left:50px;font-size:440%'>Prior to founding his company, Dan worked at n-Space, AMD, Still River Systems, and at BCH.\
    </div>\
\
    <div id='content12' style='display:none;position: absolute;color:white;top:45%;left:40%;margin-left:50px;font-size:440%'>For us, Dan will give an introduction to Vulkan.</div>    \
\
    <div id='content13' style='display:none;position: absolute;color:white;top:45%;left:40%;margin-left:50px;font-size:440%'>This is lecture 32.</div>    \
\
<audio id='voice'>    \
    <source src='lectures/"+lecturenumber+".mp3'>    \
  </audio>    \
</div>   \
\
";
