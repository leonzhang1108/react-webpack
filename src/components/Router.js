import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import AsyncImport from 'asyncImport'
import 'css/home'
import { Layout } from 'antd';
import Menus from 'components/Menu'
const { Header, Content, Footer } = Layout;

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  renderRoute = () => {
    return this.props.menus.map(
      (item, i) => <Route key={i} path={`/${item.name}`} component={AsyncImport(`pages/${item.component}`)} />
    )
  }
  render() {
    const hash = window.location.hash.replace('#/', '')
    return (
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ overflow: 'initial', height: '100vh' }}>
          <Switch>
            <Redirect exact from="/" to="/home" />
            {this.renderRoute()}
            <Route component={AsyncImport('pages/404')} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center', height: '20px', position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
          ©2016 Created by Leon
        </Footer>
      </Layout>
    )
  }
}