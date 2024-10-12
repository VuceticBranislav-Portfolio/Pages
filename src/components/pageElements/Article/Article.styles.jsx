const styles = (theme) => {
  const backgroundColorFiller = theme.palette.assideFillColor.Primary;
  const c = theme.palette.assideFillColor;
  const s = 20;
  const backgroundPattern = `repeating-linear-gradient(45deg, 
    #0000, ${c} ${s}px, ${c} ${2 * s}px)`;

  return {
    styleBackground: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "center",
      flexGrow: "1",
      bgcolor: backgroundColorFiller,
      background: backgroundPattern,
    },
    styleCenter: {
      display: "flex",
      flexWrap: "nowrap",
      flexDirection: "column",
      justifyContent: "center",
    },
    styleAside: {
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
    },
  };
};

export default styles;
