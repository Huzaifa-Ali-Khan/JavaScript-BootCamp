let Button = document.getElementById("button");
let Email = document.getElementById("email");
let Password = document.getElementById("password");
let Name = document.getElementById("name");
let Logout = document.getElementById("logout");
const submitHandler = async () => {
  if (!Name.value || !Email.value || !Password.value) {
    alert("Please fill in all fields");
    return;
  }
  try {
    const response = await fetch(
      "http://192.168.100.33:8082/keeps/user/signUp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email.value,
          password: Password.value,
          name: Name.value,
        }),
      }
    );
    const data = await response.json();
    alert(data.message);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

const loginHandler = async () => {
  try {
    const response = await fetch(
      "http://192.168.100.33:8082/keeps/user/signIn",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email.value,
          password: Password.value,
        }),
      }
    );
    const data = await response.json();
    alert(data.message);
    console.log(data.token);
    localStorage.setItem("userKeepToken", data.token);
    window.location.href = "http://127.0.0.1:5500/dashboard.html";
    console.log(data);
  } catch (error) {
    alert(error.message);
  }
};

const logOut = async () => {
  try {
    localStorage.removeItem("userKeepToken");
    alert("Logged out successfully");
    window.location.href = "http://127.0.0.1:5500/login.html";
  } catch (error) {
    alert(error.message);
  }
};
