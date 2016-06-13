TwitterClient = function()
{
    var CONSUMER = {
        "key" : "xxxxxxxxxxxxxxxxxx",
        "secret" : "xxxxxxxxxxxxxxxxxx" 
    };

    var ACCESS = {
        "screen_name" : "UCreates",
        "key" : "9999999999-xxxxxxxxxxxxxxxxxxxxxxxx",
        "secret" : "xxxxxxxxxxxxxxxxxxxxxxxxxx"
    };
 
    this.request = function(endpoint,callback) {
        var parameters = {
            oauth_signature_method: "HMAC-SHA1",
            oauth_consumer_key: CONSUMER['key'],
            oauth_token: ACCESS['key'],
            callback: callback
        };
        var api_url = endpoint;
        var message = {
            method: "GET",
            action: api_url,
            parameters: parameters
        };
        
        var secretKeys = {
            "consumerSecret" : CONSUMER['secret'],
            "tokenSecret" : ACCESS['secret']
        };

        OAuth.setTimestampAndNonce(message);
        OAuth.SignatureMethod.sign(message, secretKeys);
        var signed_url = OAuth.addToURL(api_url, parameters);

        var ele = document.createElement("script");
        var head = document.getElementsByTagName('head').item(0);
        ele.type = "text/javascript";
        ele.src = signed_url;
        head.appendChild(ele);
    };
 
};
