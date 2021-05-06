import React from "react";
import TextField from "@material-ui/core/TextField";
import { Ball } from "../../enums/Ball";
import ballMapping from "../../util/mapping";
import { connect } from "react-redux";
import { throwBall } from "../../store/actionCreators";

class FirstBall extends React.Component<
  { isDisabled: boolean },
  { ball: string }
> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ball: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentBall = this.state.ball;
    if (currentBall in ballMapping) {
      // @ts-ignore
      this.props.throwBall(Ball[currentBall]);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          disabled={this.props.isDisabled}
          id="outlined-basic"
          variant="outlined"
          style={{ width: 55 }}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

const mapDispatchToProps = {
  throwBall,
};
export default connect(null, mapDispatchToProps)(FirstBall);
