FacebookClient = function()
{
    var APP_ID ="xxxxxxxxxxxxxxxxxx"; 
    var APP_ACCESS_TOKEN ="xxxxxxxxxxxxxxxxxx|unknown"; 
 
    this.request = function(endpoint,callback) {
        FB.init({
            appId      : APP_ID,
            status     : true,  
            xfbml      : true,
            version    : 'v2.5'
        });
        FB.api(
            endpoint,
            'GET',
            {access_token : APP_ACCESS_TOKEN},
            callback
        );            
    };
 
};
