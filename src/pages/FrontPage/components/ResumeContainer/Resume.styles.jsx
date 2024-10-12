const styles = (theme) => ({
  styleResume: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    userSelect: "none",
    margin: "5px",
    alignContent: "stretch",
    flexWrap: "nowrap",
    borderRadius: "10px",
    padding: "5px",
    backgroundColor: theme.palette.frontPage.cardShade,
    ":hover": {
      bgcolor: theme.palette.frontPage.cardHighlight,
    },
  },
  styleResumeButton: {
    textTransform: "none",
    paddingBottom: "0px",
  },
  styleResumeButtonBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "nowrap",
    color: theme.palette.text.primary,
  },
  styleResumeTextHeader: {
    color: theme.palette.text.primary,
    marginLeft: "2px",
    justifySelf: "center",
  },
  styleResumeText: {
    color: theme.palette.text.primary,
    justifySelf: "center",
    lineHeight: "1.1",
  },
});

export default styles;
