const shrinkBtn = document.getElementById("shrinkButton");
const restoreBtn = document.getElementById("restoreButton");
const content = document.getElementById("mainContent");
const stuffInside = document.getElementById("stuffInside")

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
    "scale-75",
    "bg-gray-800",
    "opacity-50"
  );
  stuffInside.classList.add("scale-75", "filter", "grayscale");
  shrinkBtn.classList.add("hidden");
  restoreBtn.classList.remove("hidden");
});

restoreBtn.addEventListener("click", () => {
  content.classList.remove(
    "absolute", "top-4", "left-4", "w-[300px]", "h-[200px]", "z-40",
    "rounded-lg", "shadow-lg", "p-4", "scale-75", "relative", "bg-gray-800",
    "opacity-50"
  );
  content.classList.add("w-full", "h-full", "items-center", "justify-center");
  stuffInside.classList.remove("scale-75", "filter", "grayscale");
  restoreBtn.classList.add("hidden");
  shrinkBtn.classList.remove("hidden");
});

function goNext() {
    window.location.href = "level2.html";
}