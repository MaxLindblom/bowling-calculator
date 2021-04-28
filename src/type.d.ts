/**
 * One frame of a series
 */
interface IFrame {
  // Hehe, naming
  first: Ball;
  second: Ball;
  third?: Ball;
}

/**
 * One series
 */
interface ISeries {
  frames: IFrame[];
  score: number;
}
