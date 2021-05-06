import { Ball } from "../enums/Ball";

function registerBall(ball: Ball, series: Series): Series {
  if (series.round === 10) {
    return registerLastRound(ball, series);
  }
  const index = series.round - 1;
  const frame = series.frames[index];
  if (!frame.first) {
    return registerFirstBall(ball, index, series);
  }
  return registerSecondBall(ball, index, series);
}

function registerFirstBall(ball: Ball, index: number, series: Series): Series {
  if (ball === Ball.X) {
    return registerStrike(ball, series);
  }
  series.frames[index].first = ball;
  series.score += ball;
  return series;
}

function registerSecondBall(ball: Ball, index: number, series: Series): Series {
  if (ball === Ball["/"]) {
    return registerSpare(ball, series);
  }
  series.frames[index].second = ball;
  series.score += ball;
  series.round += 1;
  return series;
}

function registerLastRound(ball: Ball, series: Series): Series {
  return series;
}

function registerSpare(ball: Ball, series: Series): Series {
  return series;
}

function registerStrike(ball: Ball, series: Series): Series {
  return series;
}

export { registerBall };
