import { keyframes, styled } from "../styles/index";

export const shimmer = keyframes({
  "0%": { backgroundPosition: "-500px 0" },
  "100%": { backgroundPosition: "500px 0" },
});

export const SkeletonProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",
  maxWidth: "1180px",
  margin: "0 auto",
});

export const SkeletonImageContainer = styled("div", {
  width: 576,
  height: 656,
  borderRadius: 8,
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",

  "&:before": {
    content: '""',
    width: "100%",
    height: "100%",
    backgroundImage:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
    position: "absolute",
    top: 0,
    left: 0,
    animation: `${shimmer} 2s infinite`,
  },
});

export const SkeletonProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  div: {
    position: "relative",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: "3rem",
  },

  ".h1": {
    margin: "0.5rem 0",
    width: "100%",
    height: "2.5rem",

    "&:before": {
      content: '""',
      width: "100%",
      height: "100%",
      backgroundImage:
        "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
      position: "absolute",
      top: 0,
      left: 0,
      animation: `${shimmer} 2s infinite`,
    },
  },

  ".span": {
    display: "block",
    width: "100%",
    height: "2rem",

    "&:before": {
      content: '""',
      width: "100%",
      height: "100%",
      backgroundImage:
        "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
      position: "absolute",
      top: 0,
      left: 0,
      animation: `${shimmer} 2s infinite`,
    },
  },

  ".p": {
    width: "100%",
    height: "1rem",

    "&:before": {
      content: '""',
      width: "100%",
      height: "100%",
      backgroundImage:
        "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
      position: "absolute",
      top: 0,
      left: 0,
      animation: `${shimmer} 2s infinite`,
    },
  },

  ".button": {
    marginTop: "auto",
    backgroundColor: "$green500",
    border: 0,
    color: "$white",
    borderRadius: 8,
    padding: "1.25rem",
    cursor: "pointer",
    transition: "0.2s",
    width: "100%",
    alignSelf: "flex-end",
  },
});
