const styles = (theme) => ({
  styleWelcomeImage: {
    margin: "1rem 0",
    position: "relative",
    overflow: "hidden",
    borderRadius: "50%",
    border: `solid ${theme.palette.imageBorderColor} 5px`,
    boxShadow: "rgba(0, 0, 0, 0.50) 0px 5px 20px 4px",
    transform: "scale(1, 1)",
    transition: (theme) =>
      theme.transitions.create("transform", {
        duration: "1s",
      }),
    "&:hover": {
      transform: "scale(1.1, 1.1)",
    },
  },
});

export default styles;
