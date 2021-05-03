import * as actionTypes from "./actionTypes";

export function throwBall(ball: Ball) {
  const action: BallAction = {
    type: actionTypes.THROW_BALL,
    ball,
  };
}
