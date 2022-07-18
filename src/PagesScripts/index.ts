const getUserAccountRequest = (): void => {
  console.log("get user account request");
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://127.0.0.1:8081/account", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.response);
      console.log("Response from server", response.msg);
      if (response.msg == "ok") {
        console.log("From index");
        // location.href = "http://localhost:8081/home";
      } else if (response.msg == "error") {
        location.href = "http://localhost:8081/account/create";
      }
    }
  };

  xhttp.send(getUserObjectFromLocalStorage());
};

const getUserObjectFromLocalStorage = (): string => {
  const user = localStorage.getItem("user");
  console.log(user);
  return user ? user : " ";
};

getUserAccountRequest();
