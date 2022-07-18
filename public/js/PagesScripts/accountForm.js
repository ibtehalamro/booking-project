"use strict";
const sendCreateAccountRequest = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://127.0.0.1:8081/account/create", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.response);
            console.log("Response from server", response.msg);
            if (response.msg == "ok") {
                console.log("From account infor");
                // location.href = "http://localhost:8081/home";
            }
            else if (response.msg == "error") {
                location.href = "http://localhost:8081/account/create";
            }
        }
    };
    xhttp.send(JSON.stringify(getAccountFromInfo()));
};
const getAccountFromInfo = () => {
    const companyName = document.getElementById("companyName");
    const country = document.getElementById("country");
    const currency = document.getElementById("currency");
    const user = localStorage.getItem("user");
    return { account: { companyName: companyName.value, country: country.value, currency: currency.value }, user };
};
//# sourceMappingURL=accountForm.js.map