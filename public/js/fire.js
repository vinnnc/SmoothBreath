var request = new XMLHttpRequest();
request.open('GET','https://api.breezometer.com/pollen/v2/forecast/daily?lat=48.857456&lon=2.354611&days=3&key=b8378ca10c6947cd8e3f6f1047d3a68c',true)
request.onload =
    function()
    {
        var data = JSON.parse(this.response)
        if (request.status >= 200
            && request.status <= 400)
        {
            card = data.data
        }
        else {
            console.log('error')
        }
    }
request.send()