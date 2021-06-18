import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { State } from "@src/reducers/state";
import { setPlayerName } from "@src/modules/home/action";
import history from "@src/constants/History";
import { dashboardRoute } from "@src/routes";

const styles = theme =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(10)
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: "40%"
    },
    fieldContainer: {
      marginTop: theme.spacing(3),
      display: "flex",
      flexDirection: "column"
    },
    formGroup: {
      width: "auto",
      margin: theme.spacing(2),
      display: "flex"
    }
  });

interface Props {
  classes?: any;
  player1_name?: string;
  player2_name?: string;
  setPlayerName?: ({}) => {};
}

const Home = React.memo<Props>(props => {
  const [player1Error, setPlayer1Error] = React.useState(false);
  const [player2Error, setPlayer2Error] = React.useState(false);

  const { classes, player1_name, player2_name, setPlayerName } = props;

  const handlePlayerName = React.useCallback(
    (e, player) => {
      switch (player) {
        case "player1_name":
          setPlayerName({ [player]: e.target.value });
          setPlayer1Error(false);
          break;
        case "player2_name":
          setPlayerName({ [player]: e.target.value });
          setPlayer2Error(false);
          break;
      }
    },
    [setPlayerName, setPlayer1Error, setPlayer2Error]
  );

  const handleContinue = React.useCallback(() => {
    if (player1_name === "") {
      setPlayer1Error(true);
    }
    if (player2_name === "") {
      setPlayer2Error(true);
    }

    if (player1_name !== "" && player2_name !== "") {
      history.push(dashboardRoute);
    }
  }, [player1_name, setPlayer1Error, player2_name, setPlayer2Error]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center">
          Ping Pong App
        </Typography>
        <div className={classes.fieldContainer}>
          <FormControl fullWidth className={classes.formGroup}>
            <TextField
              required
              label="Player 1 name"
              variant="outlined"
              onChange={e => handlePlayerName(e, "player1_name")}
              defaultValue={player1_name}
              error={player1Error}
            />
          </FormControl>
          <FormControl fullWidth className={classes.formGroup}>
            <TextField
              required
              label="Player 2 name"
              variant="outlined"
              onChange={e => handlePlayerName(e, "player2_name")}
              defaultValue={player2_name}
              error={player2Error}
            />
          </FormControl>
          <FormControl fullWidth className={classes.formGroup}>
            <Button variant="contained" color="primary" type="submit" onClick={handleContinue}>
              Continue
            </Button>
          </FormControl>
        </div>
      </Paper>
    </div>
  );
});

const mapStateToProps = (state: State) => ({
  player1_name: state.playerDetails.player1_name,
  player2_name: state.playerDetails.player2_name
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setPlayerName: data => dispatch(setPlayerName(data))
  };
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));
