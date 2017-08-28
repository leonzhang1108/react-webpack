import React from 'react'
import { HashRouter as Router, Route, Link, Switch, browserHistory } from 'react-router-dom'
import AsyncImport from 'router'
import 'css/home'
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import 'antd/dist/antd.css'

class App extends React.Component {
  constructor(props) {
    super(props)
  };
  

  render() {
    return (
      <Router >
        <Layout>
          <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1">
                <Link to="/" replace><Icon type="user" />Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/page1" replace><Icon type="video-camera" />Page1</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/page2" replace><Icon type="upload" />Page2</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
            <Content style={{overflow: 'initial', height: '100vh' }}>
              <Route exact path="/" component={AsyncImport('pages/Home')} />
              <Route path="/page1" component={AsyncImport('pages/Page1')} />
              <Route path="/page2" component={AsyncImport('pages/Page2')} />
            </Content>
            <Footer style={{ textAlign: 'center', height: '20px', position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
              ©2016 Created by Leon
            </Footer>
          </Layout>
        </Layout>
      </Router>
    )
  }
}
export default App;