import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import { State } from "@src/reducers/state";
import { setPlayerScore, setResult, saveGame } from "@src/modules/dashboard/actions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import history from "@src/constants/History";
import { homeRoute } from "@src/routes";

const styles = theme =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(10)
    },
    paper: {
      padding: theme.spacing(4),
      margin: "auto",
      maxWidth: "30%"
    },
    playerContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    playerDetails: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: theme.spacing(1)
    },
    margin: {
      marginBottom: theme.spacing(3)
    },
    separator: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      width: "100%",
      height: 2,
      backgroundColor: "gray"
    }
  });

interface Props {
  classes?: any;
  player1_name?: string;
  player2_name?: string;
  player1_score?: number;
  player2_score?: number;
  winner?: string;
  margin?: number;
  setPlayerScore?: ({}) => {};
  setResult?: ({}) => {};
  saveGame?: ({}) => {};
}

const Dashboard = React.memo<Props>(props => {
  const {
    classes,
    player1_name,
    player2_name,
    player1_score,
    player2_score,
    winner,
    margin,
    setPlayerScore,
    setResult,
    saveGame
  } = props;

  React.useEffect(() => {
    if (player1_name === "" || player2_name === "") {
      history.push(homeRoute);
    }
  }, [player1_name, player2_name]);

  const calculateResult = React.useCallback(() => {
    const result = {
      winner: "",
      margin: 0
    };

    if (player1_score > player2_score) {
      result.winner = player1_name;
      result.margin = player1_score - player2_score;
    } else if (player1_score < player2_score) {
      result.winner = player2_name;
      result.margin = player2_score - player1_score;
    }
    setResult(result);
  }, [player1_name, player1_score, player2_name, player2_score, setResult]);

  React.useEffect(() => {
    calculateResult();
  }, [player1_score, player2_score, calculateResult]);

  const handleAddWin = React.useCallback(
    player => {
      switch (player) {
        case "player1_score":
          setPlayerScore({ [player]: player1_score + 1 });
          break;
        case "player2_score":
          setPlayerScore({ [player]: player2_score + 1 });
          break;
      }
    },
    [setPlayerScore, player1_score, player2_score, calculateResult]
  );

  const handleSaveGame = React.useCallback(() => {
    const data = {
      player1_name,
      player1_score,
      player2_name,
      player2_score,
      winner,
      margin
    };

    saveGame(data);
  }, [player1_name, player1_score, player2_name, player2_score, winner, margin, saveGame]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.playerContainer}>
          <div className={classes.playerDetails}>
            <Typography variant="h5">{player1_name}</Typography>
            <Button variant="contained" size="small" color="primary" onClick={() => handleAddWin("player1_score")}>
              Add win
            </Button>
          </div>
          <div>
            <Typography variant="h6">Wins: {player1_score}</Typography>
          </div>
        </div>
        <div className={classes.margin} />
        <div className={classes.playerContainer}>
          <div className={classes.playerDetails}>
            <Typography variant="h5">{player2_name}</Typography>
            <Button variant="contained" size="small" color="primary" onClick={() => handleAddWin("player2_score")}>
              Add win
            </Button>
          </div>
          <div>
            <Typography variant="h6">Wins: {player2_score}</Typography>
          </div>
        </div>
        <div className={classes.separator} />
        <div>
          <Typography variant="h6">Current winner: {winner}</Typography>
          <div className={classes.margin} />
          <Typography variant="h6">Win difference: {margin}</Typography>
        </div>
        <div className={classes.margin} />
        <div>
          <Button variant="contained" fullWidth color="primary" type="submit" onClick={handleSaveGame}>
            Save Game
          </Button>
        </div>
      </Paper>
    </div>
  );
});

const mapStateToProps = (state: State) => ({
  player1_name: state.playerDetails.player1_name,
  player2_name: state.playerDetails.player2_name,
  player1_score: state.playerScores.player1_score,
  player2_score: state.playerScores.player2_score,
  winner: state.result.winner,
  margin: state.result.margin
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setPlayerScore: data => dispatch(setPlayerScore(data)),
    setResult: data => dispatch(setResult(data)),
    saveGame: data => dispatch(saveGame(data))
  };
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard));
