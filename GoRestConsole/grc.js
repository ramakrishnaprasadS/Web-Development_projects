let consoleFormEl = document.getElementById("consoleForm");

let requestUrlEl = document.getElementById("requestUrl");
let responseStatusEl = document.getElementById("responseStatus");
let requestUrlErrMsg = document.getElementById("requestUrlErrMsg");

let requestMethodEl = document.getElementById("requestMethod");

let requestBodyEl = document.getElementById("requestBody");
let responseBodyEl = document.getElementById("responseBody");

let formData = {
    requestUrl: "https://gorest.co.in/public-api/users",
    requestMethod: "POST",
    requestBody: ""
};

requestUrlEl.addEventListener("change", function(event) {
    formData.url = event.target.value;
});

requestMethodEl.addEventListener("change", function(event) {
    formData.requestMethod = event.target.value;
});

requestBodyEl.addEventListener("change", function(event) {

    formData.requestBody = event.target.value;


});

function validateRequestUrl(formData) {
    let {
        requestUrl
    } = formData;
    if (requestUrl === "") {
        requestUrlErrMsg.textContent = "Required";
    } else {
        requestUrlErrMsg.textContent = "";
    }
}

function sendRequest(formData) {
    let {
        requestUrl,
        requestMethod,
        requestBody
    } = formData;

    let options = {
        method: requestMethod,

        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
        },
        body: requestBody

    };

    fetch(requestUrl, options)
        .then(function(response) {

            return response.json();
        })
        .then(function(jsonData) {
            let status = jsonData.code;
            responseStatusEl.value = status;
            responseBodyEl.textContent = JSON.stringify(jsonData);

        });
}


consoleFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateRequestUrl(formData);
    sendRequest(formData);
});