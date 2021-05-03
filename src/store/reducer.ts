import * as actionTypes from "./actionTypes";
import { registerBall } from "../util/bowling";

const initialState: SeriesState = {
  series: {
    frames: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    round: 1,
    score: 0,
  },
};

const reducer = (
  state: SeriesState = initialState,
  action: BallAction
): SeriesState => {
  switch (action.type) {
    case actionTypes.THROW_BALL:
      const newSeries: Series = registerBall(action.ball, state.series);
      return {
        ...state,
        series: newSeries,
      };
  }
  return state;
};

export default reducer;
