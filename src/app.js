import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import AsyncImport from 'asyncImport'
import Loading from 'components/Loading'
import { Layout } from 'antd';
import 'antd/dist/antd.css'
import 'css/home'
import Menus from 'components/Menu'
import Routers from 'components/Router'
import request from 'src/util/request'
const { Header, Content, Footer } = Layout;


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      menus: []
    }

    const requestConfig = {
      url: '../static/data/menu.json'
    }
    request.get(requestConfig).then(this.initPage)
  }

  initPage = (res) => {
    const { data } = res
    this.setState({
      loading: false,
      menus: data.menus
    })
  }

  renderPage() {
    const { loading } = this.state
    if(loading) {
      return (<Loading/>)
    } else {
      return (
        <Layout>
          <Menus menus={this.state.menus}/>
          <Routers menus={this.state.menus} />
        </Layout>
      )
    }
  }

  render() {
    const { loading } = this.state
    return (
      <Router>
        {this.renderPage()}
      </Router>
    )
  }
}
export default App;