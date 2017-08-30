import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class extends React.Component {

  constructor(props) {
    super(props)
  }

  renderSubMenu = () => {
    const { menus } = this.props
    const subMenuList = Array.from(new Set(menus.map(res => res.parent)))
    return subMenuList.map((item, index) => (
      <SubMenu key={item} title={<span><Icon type="mail" /><span>{index}</span></span>}>
        {this.renderMenuItem(item)}
      </SubMenu>
    ))
  }

  renderMenuItem = (parent) => {
    const { menus } = this.props
    const menuItem = menus.filter(item => parent == item.parent)
    return menuItem.map((item, index) => (
      <Menu.Item key={item.name}>
        <Link to={`/${item.name}`} replace>
          <Icon type="user" />{item.component}
        </Link>
      </Menu.Item>
    ))
  }

  render() {
    const { menus } = this.props
    const hash = window.location.hash.replace('#/', '')
    const parent = menus.filter(i => hash == i.name).map(i => i.parent)
    return (
      <div>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
          <div className="logo" />
          <Menu theme="dark" mode="inline"
            defaultSelectedKeys={[hash]}
            defaultOpenKeys={parent}
            inlineCollapsed={false}>
            {this.renderSubMenu()}
          </Menu>
        </Sider>
      </div>
    )
  }
}