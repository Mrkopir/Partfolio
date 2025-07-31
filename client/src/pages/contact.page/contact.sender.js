import axios from "axios";

export default function ContactSender (data) {
    axios.post("https://partfolio-jeft.onrender.com/api/sendData", data)
    .then(response => {
    alert("Успіх")
    console.log("Успіх:", response.data);
    })
    .catch(error => {
      alert("Помилка")
    console.error("Помилка:", error.message);
  });
}