export const middleSectionTransition = {
  initial: {
    y: 24,
    opacity: 0,
    filter: "blur(6px)",
  },
  animate: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  exit: {
    y: 24,
    opacity: 0,
    filter: "blur(6px)",
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};
