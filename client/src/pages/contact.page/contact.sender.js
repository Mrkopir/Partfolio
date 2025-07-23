import axios from "axios";

export default function ContactSender (data) {
    axios.post("http://localhost:5000/api/sendData", data)
    .then(response => {
    console.log("Успіх:", response.data);
    })
    .catch(error => {
    console.error("Помилка:", error.message);
  });
}