const scroll = (name) => {
  const section = document.querySelector(name);

  if (!section) return;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default scroll;
