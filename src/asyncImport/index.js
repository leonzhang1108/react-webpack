import React from 'react'
import Loading from '../components/Loading'
const asyncComponent = (getComponent) => {
  return class AsyncComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        Component: null
      }
    }
    componentWillMount() {
      if (this.state.Component) return
      getComponent().then(Component => {
        this.setState({ Component })
      })
    }
    render() {
      const { Component } = this.state
      return Component ? <Component {...this.props} /> : <Loading />
    }
  }
}

export default (PageName) => {
  return asyncComponent(() =>
    System.import(`../${PageName}`).then(module => module.default)
  )
}