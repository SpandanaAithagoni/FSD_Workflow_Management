function showDetails(eventName) {
    alert("You selected: " + eventName);
}

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("successMsg").innerText =
        "Registration successful! Thank you for registering.";
});
