const stackObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const direction = entry.target.classList.contains("enters-from-right")
    ? "right"
    : "left";

    if (entry.isIntersecting) {
      direction === "right"
      ? entry.target.classList.add("entering-from-right")
      : entry.target.classList.add("entering-from-left");
      return;
    }

    direction === "right"
    ? entry.target.classList.remove("entering-from-right")
    : entry.target.classList.remove("entering-from-left");
  })
});

export default stackObserver;