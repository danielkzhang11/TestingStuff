const shrinkBtn = document.getElementById("shrinkButton");
const restoreBtn = document.getElementById("restoreButton");
const content = document.getElementById("mainContent");

shrinkBtn.addEventListener("click", () => {
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
  shrinkBtn.classList.add("hidden");
  restoreBtn.classList.remove("hidden");
});

restoreBtn.addEventListener("click", () => {
  content.classList.remove(
    "absolute", "top-4", "left-4", "w-[300px]", "h-[200px]", "z-40",
    "rounded-lg", "shadow-lg", "p-4", "scale-90", "relative"
  );
  content.classList.add("w-full", "h-full", "items-center", "justify-center");
  restoreBtn.classList.add("hidden");
  shrinkBtn.classList.remove("hidden");
});