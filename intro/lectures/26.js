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
    <div id='content2' style='display:none;position: absolute;color:white;top:30%;left:20%;margin-left:50px;font-size:440%'>We have Jasmine Roberts as our guest.</div>\
\
    <div id='content3' style='display:none;position: absolute;color:white;top:20%;left:10%;margin-left:50px;font-size:440%'>Jasmine is an AR/VR specialist and currently at the University of Washington and Microsoft.</div>\
\
    <div id='content4' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>Before, she worked at Google Creative Labs in NYC, Unity, NASA, Playstation, and Intel.</div>\
\
    <div id='content5' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>Jasmine studied at Columbia, the MIT Media Lab, and the Harvard School of Design.</div>\
\
    <div id='content6' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>Jasmine also was a Fellow at Oculus Launch Pad and Mozilla XR Studios.</div>\
\
    <div id='content7' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>She will speak to us about generative worlds!</div>\
\
    <div id='content8' style='display:none;position: absolute;color:white;top:45%;left:40%;margin-left:50px;font-size:440%'>This is lecture 26.</div>    \
<audio id='voice'>    \
    <source src='lectures/none.mp3'>    \
  </audio>    \
</div>   \
\
";

