import * as React from "react";
import {connect} from "react-redux";
import Message from "./Message";
import {Dispatch} from "redux";
import {State} from "@src/reducers/state";
import {clearFetch} from "@src/common/actions";

const MessageProvider = props => {
  const { fetch, clearFetch } = props;
  return (
    <Message
      opened={Boolean(fetch.message)}
      text={fetch.message}
      isSuccess={fetch.success}
      persist={fetch.persist}
      clearMessage={clearFetch}
    />
  );
};

const mapStateToProps = (state: State) => ({
  fetch: state.fetch
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    clearFetch: () => dispatch(clearFetch())
  };
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(MessageProvider);
