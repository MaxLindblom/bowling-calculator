/**
 * One frame of a series
 */
type Frame = {
  first?: Ball;
  second?: Ball;
  third?: Ball;
};

/**
 * One series
 */
type Series = {
  frames: Frame[];
  round: number;
  score: number;
};

/**
 * Redux types
 */

type BallAction = {
  type: string;
  ball: Ball;
};

type SeriesState = {
  series: Series;
};

type DispatchType = (args: BallAction) => BallAction;
