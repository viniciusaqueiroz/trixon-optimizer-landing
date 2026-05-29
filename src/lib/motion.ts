import type { Transition, Variants } from "framer-motion";

export const revealViewport = {
  once: false,
  amount: 0.22,
  margin: "0px 0px -8% 0px",
};

export const revealUp: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.995,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export const revealSoft: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const revealLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 18,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const revealTransition: Transition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1],
};
