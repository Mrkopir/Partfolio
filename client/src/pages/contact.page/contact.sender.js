import axios from "axios";

export default function ContactSender (data) {
    axios.post("https://partfolio-jeft.onrender.com/api/sendData", data)
    .then(response => {
    console.log("Успіх:", response.data);
    })
    .catch(error => {
    console.error("Помилка:", error.message);
  });
}