import { Ball } from "../enums/Ball";
import * as actionTypes from "./actionTypes";

export function throwBall(ball: Ball): BallAction {
  const action: BallAction = {
    type: actionTypes.THROW_BALL,
    ball,
  };
  return action;
}
