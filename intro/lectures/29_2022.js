frames = ['content1', 'content2', 'content3', 'content4', 'content5','content6','content7','content8', null];
times = [0, // Today... 
         1500, // 
         6000, // And
         12000, // 
         20000, // this is lecture 19
         26000,
         32000,
         37500,
         43000];


document.getElementById("content").innerHTML = "\
\
    <div id='content1' style='display:none;position: absolute;color:white;top:25%;left:30%;margin-left:50px;font-size:440%'>Today...</div>\
\
    <div id='content2' style='display:none;position: absolute;color:white;top:30%;left:20%;margin-left:50px;font-size:440%'>We have Spandan Madan as our guest.</div>\
\
    <div id='content3' style='display:none;position: absolute;color:white;top:20%;left:10%;margin-left:50px;font-size:440%'>Spandan is coming to us from Harvard University.</div>\
\
    <div id='content4' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>He previously worked at MIT, Adobe Research, and Microsoft.</div>\
\
    <div id='content5' style='display:none;position: absolute;color:white;top:45%;left:40%;margin-left:50px;font-size:440%'>Spandan's work was supported by the Winston Chen Family Fellowship,</div>    \
\
    <div id='content6' style='display:none;position: absolute;color:white;top:35%;left:20%;margin-left:50px;font-size:440%'>And the Snap Research Scholarship<br>and by the Government of India.</div>\
\
    <div id='content7' style='display:none;position: absolute;color:white;top:15%;left:20%;margin-left:50px;font-size:440%'>And today, Spandan will tell us about the generalization of machine intelligence.</div>\
\
    <div id='content8' style='display:none;position: absolute;color:white;top:45%;left:40%;margin-left:50px;font-size:440%'>This is lecture 29.</div> \
<audio id='voice'>    \
    <source src='lectures/none.mp3'>    \
  </audio>    \
</div>   \
\
";

