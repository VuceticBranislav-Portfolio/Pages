const styles = (theme) => ({
  pagePageFrame: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignContent: "space-between",
    alignItems: "stretch",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    [theme.breakpoints.up("lg")]: {
      minWidth: `${theme.breakpoints.values["lg"]}px`,
    },
  },
});

export default styles;
