const accordionItems = document.querySelectorAll(".que-ans");

accordionItems.forEach((item) => {
  const header = item.querySelector("h3");

  header.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    accordionItems.forEach((i) => i.classList.remove("active"));

    if (!isActive) {
      item.classList.add("active");
    }
  });
});
