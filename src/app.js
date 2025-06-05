function goNext() {
    window.location.href = "level2.html";
}

const button = document.getElementById("shrinkButton");
    const content = document.getElementById("mainContent");

    button.addEventListener("click", () => {
      content.classList.remove("w-full", "h-full", "items-center", "justify-center");
      content.classList.add(
        "absolute",
        "top-4",
        "left-4",
        "w-[300px]",
        "h-[200px]",
        "z-50",
        "rounded-lg",
        "shadow-lg",
        "p-4",
        "scale-90"
      );
    });