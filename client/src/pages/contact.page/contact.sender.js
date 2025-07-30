const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submitting...");
  alert("Submitting..."); // щоб точно побачити на iPhone

  try {
    const res = await fetch("/api/sendData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed");

    alert("Success!");
  } catch (err) {
    alert("Error: " + err.message);
  }
};
