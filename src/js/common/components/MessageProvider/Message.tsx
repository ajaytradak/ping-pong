import * as React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import green from "@material-ui/core/colors/green";

const styles = theme => ({
  close: {
    color: theme.palette.primary.contrastText,
    width: theme.spacing(4),
    height: theme.spacing(4),
    padding: theme.spacing(0.5)
  },
  success: {
    color: theme.palette.primary.contrastText,
    backgroundColor: green[600],
    maxWidth: "unset"
  },
  error: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.error.dark,
    maxWidth: "600px"
  },
  autoWidth: {
    [theme.breakpoints.down("md")]: {
      flexGrow: "unset",
      borderRadius: `${theme.shape.borderRadius}px`
    }
  },
  autoWidthRoot: {
    [theme.breakpoints.down("md")]: {
      left: "24px",
      right: "auto",
      bottom: "24px"
    }
  },
  fullScreenMessage: {
    maxHeight: "calc(100vh - 90px)",
    overflow: "auto",
    marginRight: theme.spacing(-2),
    paddingRight: theme.spacing(2)
  }
});

interface Props {
  opened: boolean;
  text: string;
  clearMessage: any;
  isSuccess?: boolean;
  persist?: boolean;
  classes?: any;
}

class Message extends React.Component<Props, any> {
  constructor(props) {
    super(props);

    this.state = {
      success: props.isSuccess,
      text: props.text,
      persist: props.persist
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.opened !== prevProps.opened) {
      this.setState({
        success: this.props.opened ? this.props.isSuccess : this.state.success,
        text: this.props.opened ? this.props.text : this.state.text,
        persist: this.props.opened ? this.props.persist : this.state.persist
      });
    }
  }

  handleClose = () => {
    if (!this.state.persist) {
      this.props.clearMessage();
    }
  };

  render() {
    const { classes, opened } = this.props;

    const { success, text, persist } = this.state;

    return (
      <div>
        <Snackbar
          open={opened}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          classes={{
            root: classes.autoWidthRoot
          }}
          ContentProps={{
            classes: {
              root: clsx(classes.autoWidth, {
                [classes.success]: success,
                [classes.error]: !success
              }),
              message: persist ? classes.fullScreenMessage : undefined
            }
          }}
          ClickAwayListenerProps={{
            onClickAway: this.handleClose
          }}
          autoHideDuration={persist ? null : 6000}
          onClose={this.handleClose}
          message={text}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
          disableWindowBlurListener={persist}
        />
      </div>
    );
  }
}

export default withStyles(styles as any)(Message);
