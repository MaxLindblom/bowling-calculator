import { Component } from "react";
import { Round } from "./rounds/Round";
import { LastRound } from "./rounds/LastRound";
import { connect } from "react-redux";

class Series extends Component {
  makeRounds() {
    const rounds = [];
    for (let i = 0; i < 10; i++) {
      rounds.push(<Round key={i} />);
    }
    return rounds;
  }

  render() {
    return (
      <div className="row">
        {this.makeRounds()}
        <LastRound></LastRound>
      </div>
    );
  }
}

const mapStateToProps = (state: SeriesState) => state.series;
export default connect(mapStateToProps)(Series);
