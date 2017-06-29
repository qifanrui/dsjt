function request(url, method, callback, data) {
    url = 'http://113.140.72.140:9090/' + url;
    $.ajax({
        type: method,
        url: url,
        async: false,
        data: JSON.stringify(data),
        beforeSend: function (x) {
            x.setRequestHeader("Content-Type", "application/json");
        },
        success: function (res) {
            callback(res);
        },
        error: function (err) {
            console.error(err);
        }
    });
}


function HttpGet(url, callback) {
    request(url, 'GET', callback);
}

function HttpPost(url, data, callback) {
    request(url, 'post', callback, data);
}

function HttpJson(url, callback) {
    url = 'download/datas/' + url;
    request(url, 'get', callback)
}








