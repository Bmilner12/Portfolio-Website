const textArea = document.getElementById("text");
const countMessage = document.getElementById("count_message");

textArea.addEventListener("input", function () {
    const maxLength = 250; // Maximum number of characters allowed
    const currentLength = textArea.value.length;

    countMessage.textContent = `${currentLength}/${maxLength}`;

    // Change the color based on character count (optional)
    if (currentLength > maxLength) {
        countMessage.style.color = "red";
    } else {
        countMessage.style.color = "black";
    }
});