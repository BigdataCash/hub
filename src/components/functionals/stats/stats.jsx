import React, { Component } from "react";

// import Matrial-UI components
import { Equalizer } from "@material-ui/icons";
import GridList from "@material-ui/core/GridList";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";

import { connect } from "react-redux"; //to pass functions
import { bindActionCreators } from "redux";

// import style
import injectSheet from "react-jss";
import statsStyle from "./stats.style";

class Stats extends Component {
  getValue(field) {
    return {
      changeRate: {
        usdChangeRate: this.props.martkInfo.martkistPrice
          ? parseFloat(this.props.martkInfo.martkistPrice.usd).toFixed(8)
          : "",
        btcChangeRate: this.props.martkInfo.martkistPrice
          ? parseFloat(this.props.martkInfo.martkistPrice.btc).toFixed(8)
          : "",
        satoshiChangeRate: this.props.martkInfo.martkistPrice
          ? Math.floor(
              parseFloat(this.props.martkInfo.martkistPrice.btc).toFixed(8) * 100000000
            )
          : "",
        percent_change_1h: this.props.martkInfo.martkistPrice
          ? parseFloat(this.props.martkInfo.martkistPrice.price_change_percentage_1h)
          : "",
        percent_change_24h: this.props.martkInfo.martkistPrice
          ? parseFloat(this.props.martkInfo.martkistPrice.price_change_percentage_24h)
          : "",
        percent_change_7d: this.props.martkInfo.martkistPrice
          ? parseFloat(this.props.martkInfo.martkistPrice.price_change_percentage_7d)
          : ""
      },
      masternodes:
        this.props.martkInfo.mnRegistered && this.props.martkInfo.mnCount
          ? `${this.props.martkInfo.mnRegistered} / ${this.props.martkInfo.mnCount.enabled}`
          : "",
      totUsers: this.props.martkInfo ? this.props.martkInfo.users : "",
      governance: {
        payoutDate: this.props.governance
          ? this.props.governance.payoutDate
          : "",
        blockHeight: this.props.governance
          ? this.props.governance.blockHeight
          : "",
        votingDeadline: this.props.governance
          ? this.props.governance.votingDeadline
          : "",
        governanceAvailable: this.props.governance
          ? this.props.governance.governanceAvailable
          : ""
      }
    }[field];
  }

  changeContent(item) {
    const percent_change = this.getValue(item.key).percent_change_24h;
    const loading = this.getValue(item.key).usdChangeRate;
    return (
      <div>
        {!loading && (
          <div className="loading">
            <CircularProgress />
          </div>
        )}
        {loading && (
          <div className={"changeTxtHeading"}>
            <div className="changeTxtBody firstLine">
              ${this.getValue(item.key).usdChangeRate}
              <span className="symbol"> USD</span>
            </div>
            <div className="changeTxtBody">
              {this.getValue(item.key).btcChangeRate} BTC
            </div>
            <div className="changeTxtBody">
              {this.getValue(item.key).satoshiChangeRate} SATOSHI
            </div>
            <div
              className={`changeTxtBody percentage ${
                percent_change > 0 ? "goingUp" : "goingDown"
              }`}
            >
              {`${percent_change} %`}
            </div>
            <span className="changeTxtBody">
              Powered by{" "}
              <a
                className="changeTxtLink"
                href="https://erex.io/exchange/MARTK/BTC/"
                target="_blank"
                rel="noopener noreferrer"
              >
                EREX
              </a>
            </span>
          </div>
        )}
      </div>
    );
  }

  governanceContent(item) {
    const {
      payoutDate,
      governanceAvailable,
      votingDeadline,
      blockHeight
    } = this.getValue(item.key);
    const loading = this.getValue(item.key).payoutDate;
    return (
      <div>
        {!loading && (
          <div className="loading">
            <CircularProgress />
          </div>
        )}
        {loading && (
          <div className={"govTxtBody"}>
            <div className="govTxtRow">
              <div className="govTxtTitle">{item.text[1][0]}:</div>
              <div className="govTxtData">{payoutDate}</div>
            </div>
            <div className="govTxtRow">
              <div className="govTxtTitle">{item.text[1][1]}:</div>
              <div className="govTxtData">{blockHeight}</div>
            </div>
            <div className="govTxtRow">
              <div className="govTxtTitle">{item.text[1][2]}:</div>
              <div className="govTxtData">{votingDeadline}</div>
            </div>
            <div className="govTxtRow">
              <div className="govTxtTitle">{item.text[1][3]}:</div>
              <div className="govTxtData">
                {governanceAvailable}
                <span className="symbol"> MARTK</span>
              </div>
            </div>
          </div>
        )}
        {/* <div className="statsText">{item.text[0]}</div> */}
      </div>
    );
  }

  defineCardContent(item) {
    let loading = !!this.getValue(item.key);
    // This if chain is a shit that need to be changed in a really near future (5/7/2019)
    if (item.key === "changeRate") {
      return this.changeContent(item);
    } else if (item.key === "governance") {
      return this.governanceContent(item);
    } else {
      return (
        <div>
          {!loading && (
            <div className="loading">
              <CircularProgress />
            </div>
          )}
          {loading && (
            <div>
              <div className={"statsTextHeading"}>
                <h1> {this.getValue(item.key)}</h1>
              </div>
              <div className="statsText">{item.text}</div>
            </div>
          )}
        </div>
      );
    }
  }

  render() {
    const { classes, deviceType } = this.props;

    const style = deviceType === "mobile" ? classes.mRoot : classes.root;

    return (
      <div className={style}>
        <h1 className="statsHeading">
          <Equalizer className="headingIcon" /> Martkist Hub Stats
        </h1>
        <div className="statsMainDiv">
          <GridList
            cols={deviceType === "mobile" ? 2 : 3}
            cellHeight={300}
            className="statsGridDiv"
          >
            {this.props.cards.map((item, key) => {
              return (
                <Card key={key} className="statsCard">
                  <CardHeader
                    className="statsCardHeader"
                    title={
                      <img
                        alt="a"
                        src={require("../../../assets/img/" + item.img)}
                        height="40"
                      />
                    }
                  />
                  <CardContent height={"50%"} style={{ position: "relative" }}>
                    {this.defineCardContent(item)}
                  </CardContent>
                </Card>
              );
            })}
          </GridList>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //pass the providers
  return {
    cards: state.martkistStats.cards,
    martkInfo: {
      mnCount: state.martkistStats.mnCount,
      mnRegistered: state.martkistStats.mnRegistered,
      martkistPrice: state.martkistStats.martkistPrice,
      users: state.martkistStats.users
    },
    governance: state.governance
  };
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(statsStyle)(Stats));
