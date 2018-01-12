/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import { withRoot } from '../HOC';

import { ChatBox } from '../functionals';

//import Styles
import { appRSiderStyle } from './styles';

const { Sider } = Layout;

class AppRSider extends Component {
  render() {
    return (
      <div>
        <Sider width={200} style={appRSiderStyle.wraper}>
          <ChatBox />
        </Sider>
      </div>
    );
  }
}

AppRSider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(AppRSider);
