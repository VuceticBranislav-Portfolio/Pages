const styles = (theme) => ({
  styleSectionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "stretch",
    userSelect: "none",
    margin: "5px",
    padding: "10px 10px 0px 10px",
    alignContent: "stretch",
    flexWrap: "nowrap",
    borderRadius: "10px",
    backgroundColor: theme.palette.frontPage.cardShade,
    ":hover": {
      bgcolor: theme.palette.frontPage.cardHighlight,
    },
  },
  styleSectionContainerText: {
    display: "block",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "auto",
  },
  styleSectionContainerHeader: {
    bgcolor: "background.default",
    borderRadius: "10px 0px 10px 0px",
    margin: "-10px 0px 0px -10px",
    padding: "0px 10px 0px 10px",
    alignSelf: "baseline",
    fontStyle: "italic",
  },
});

export default styles;
