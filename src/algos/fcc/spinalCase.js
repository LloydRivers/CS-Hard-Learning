function spinalCase(str) {
  const words = str
    .replace(/[\s,'_']/g, "-")
    .split(/(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join("-")
    .replace(/-{2,}/g, "-");

  return words;
}

spinalCase("Teletubbies say Eh-oh"); // should log teletubbies-say-eh-oh
spinalCase("This Is Spinal Tap"); // this-is-spinal-tap
spinalCase("The_Andy_Griffith_Show"); // the-andy-griffith-show.
spinalCase("AllThe-small Things"); // all-the-small-things
