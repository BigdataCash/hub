/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import antd components
import { Divider } from 'antd';
import { Grid, FormGroup, Input, withStyles } from 'material-ui';

import { proposalPaymentStyle } from './styles';

class ProposalPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onTimePayment: 'abc',
      compeletePayment: 'abc',
      Paymentdate: 'abc',
    };
  }
  render() {
    const { classes, deviceType } = this.props;
    //Platform style switcher
    const style = deviceType === 'mobile' ? classes.mRoot : classes.root;

    return (
      <Grid md={12} className={style}>
        <Grid item className="no-margin">
          <div className="heading">PAYMENTS</div>
        </Grid>
        <Grid item md={11} className="no-margin">
          <hr />
        </Grid>
        <Grid container md={12} className="paymentsView">
          <Grid item md={3} className="OnTimePaymentView">
            <div className="heading"> On Time Payment </div>
            <form className="form">
              <FormGroup className="FormGroup">
                <input
                  ref={ref => {
                    this.state.compeletePayment = ref;
                  }}
                  name="onTimePayment"
                  id="onTimePayment"
                  className="input-field"
                  placeholder="21 SYS (29209 USD)"
                  onChange={e => {}}
                />
              </FormGroup>
            </form>
          </Grid>
          <Grid item md={3} className="OnTimePaymentView">
            <div className="heading"> Complete Payment </div>

            <form className="form">
              <FormGroup className="FormGroup">
                <input
                  ref={ref => {
                    this.state.compeletePayment = ref;
                  }}
                  name="compeletePayment"
                  id="compeletePayment"
                  className="input-field"
                  placeholder="no payments occurred yet"
                  onChange={e => {}}
                />
              </FormGroup>
            </form>
          </Grid>

          <Grid item md={3} className="OnTimePaymentView">
            <div className="heading"> Start & End Date </div>
            <form className="form">
              <FormGroup className="FormGroup">
                <input
                  ref={ref => {}}
                  name="Paymentdate"
                  id="Paymentdate"
                  className="input-field"
                  placeholder="18-01-17 / 2018-02-16"
                  onChange={e => {}}
                />
              </FormGroup>
            </form>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

ProposalPayment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(proposalPaymentStyle)(ProposalPayment);