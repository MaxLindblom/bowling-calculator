import { Component } from "react";
import TextField from "@material-ui/core/TextField";

export class SecondBall extends Component {
  render() {
    return (
      <TextField
        disabled
        id="outlined-basic"
        variant="outlined"
        style={{ width: 55 }}
      />
    );
  }
}
