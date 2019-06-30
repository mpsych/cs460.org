// modified from https://stackoverflow.com/a/18193032

function load(url, callback) {  
    var xhr = new XMLHttpRequest();  

    xhr.onreadystatechange = function() {
        if (xhr.readyState < 4) return;

        if (xhr.status !== 200) {  
            return callback('HTTP Status ' + xhr.status);
        }  

        if (xhr.readyState === 4) {  
            callback(null, xhr.responseText);  
        }             
    };

    xhr.open('GET', url, true);  
    xhr.send('');  
}

function build_table(err, a) {
    var lines = a.split('\n');
    var output = '<table id="scheduletable">';

    for (c in lines) {
        var line = lines[c].split(',');
        var date = line[0];
        var day = line[1];
        var content = line[2];
        output += '<tr><td width="20%">' + date + '</td><td width="15%">' + day + '</td><td width="65%">' + content + '</td></tr>';
    }
    output += '</table>';

    document.getElementById('schedule').innerHTML = output;
}
