document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".text"); 
    const text = "Welcome to Cantor College"; 

    const heading = document.createElement("h1");
    container.appendChild(heading); 

    function typingEffect(element, text, i = 0) {
        element.innerHTML += text[i]; 

        if (i === text.length - 1) {
            return; 
        }

        setTimeout(() => typingEffect(element, text, i + 1), 100); 
    }

    typingEffect(heading, text); 
});
