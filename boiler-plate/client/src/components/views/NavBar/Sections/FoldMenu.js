import Icon, { MenuUnfoldOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'

function FoldMenu(props) {
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="fold">
                <MenuUnfoldOutlined />
            </Menu.Item>
        </Menu>
    )
}

export default FoldMenu
