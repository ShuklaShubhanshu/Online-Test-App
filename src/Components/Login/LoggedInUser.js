exports.LoggedInUser = () => {
    return JSON.parse(window.localStorage.getItem("user_login"))
  }
  
  