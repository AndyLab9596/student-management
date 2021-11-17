import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, Box, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: 20,
    width: "50%",
    margin: "0 auto",
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={5}>
        <Typography variant="h6" align="center">
          Student management
        </Typography>
        <Box width={1} m={1}>
          <Button variant="contained" fullWidth color="primary">
            Sign In
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default LoginPage;
