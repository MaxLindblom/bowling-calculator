import { Component } from "react";
import { FirstBall } from "../ball-fields/FirstBall";
import { SecondBall } from "../ball-fields/SecondBall";
import { Box } from "@material-ui/core";

export class Round extends Component {
  render() {
    return (
      <Box
        display="inline-block"
        component="div"
        bgcolor="#dedede"
        p={1}
        m={0.5}
      >
        <div className="row">
          <FirstBall></FirstBall>
          <SecondBall></SecondBall>
        </div>
        <div>
          <Box component="span" p={1} display="block">
            26
          </Box>
        </div>
      </Box>
    );
  }
}
