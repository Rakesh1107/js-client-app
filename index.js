let accessToken = '';
let view = document.getElementById("view")

window.addEventListener("load", (event) => {
    if (window.location.href.indexOf("access_token") > -1) {
        accessToken = window.location.href.split("&")[1].split("=")[1]
        window.location =  window.location.href.split('#&')[0]
      }
})

function fetchData() {
    fetch('https://ragesh-12379.csez.zohocorpin.com:9420/oauth/user/info', {
    method: 'GET',
    headers: {
        'Authorization': 'Zoho-oauthtoken ' + accessToken
    },
})
.then(response => response.json())
.then(response => {
    view.innerText = JSON.stringify(response)
})
}

function getdata() {
    $.ajax({
        url: "https://ragesh-12379.csez.zohocorpin.com:9420/oauth/user/info",  // REPLACE WITH THE API YOU NEED TO ACCESS THROUGH JS CLIENT
        crossDomain: true,
        method: "GET",
        headers: {
                "Authorization" : "Bearer " + accessToken
        },
        success: function(response) {
                 alert(JSON.stringify(response));
        }
});
}