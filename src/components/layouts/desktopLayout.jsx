import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import AppHeader from '../containers/header';
import AppSider from '../containers/sider';
import AppContent from '../containers/content';
import AppFooter from '../containers/footer';

// Styles
import HeaderStyles from '../../styles/headerStyle';
import SiderStyles from '../../styles/siderStyle';
import ContentStyles from '../../styles/contentStyle';
import FooterStyles from '../../styles/footerStyle';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class Index extends Component {
  render() {
    return (
      <Layout>
        <Header style={HeaderStyles.headerWraper}>
          <AppHeader />
        </Header>
        <Layout>
          <Sider width={200} style={SiderStyles.siderWraper}>
            <AppSider />
          </Sider>
          <Layout>
            <Content style={ContentStyles.contentWraper}>
              <AppContent />
            </Content>
          </Layout>
        </Layout>
        <Footer style={FooterStyles.footerWraper}>
          <AppFooter />
        </Footer>
      </Layout>
    );
  }
}

export default Index;
