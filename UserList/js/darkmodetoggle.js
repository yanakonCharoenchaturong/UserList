const buttons = document.querySelectorAll(
  "[data-bs-theme-value]"
);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.getAttribute(
      "data-bs-theme-value"
    );

    document.documentElement.setAttribute(
      "data-bs-theme",
      theme
    );
  });
});