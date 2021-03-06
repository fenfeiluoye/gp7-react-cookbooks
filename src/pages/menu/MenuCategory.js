import React, { Component } from 'react'

import { 
  MenuList,
  MenuListNav,
  MenuListNavItem,
  MenuListContent
} from './styledComponent.js'

class MenuCategory extends Component {
  render () {
    return (
      <MenuList>
        <MenuListNav>
          <MenuListNavItem active={true}>
            <span>
              热门
            </span>
          </MenuListNavItem>
          <MenuListNavItem>
            <span>
              热门
            </span>
          </MenuListNavItem>
          <MenuListNavItem>
            <span>
              热门
            </span>
          </MenuListNavItem>
          <MenuListNavItem>
            <span>
              热门
            </span>
          </MenuListNavItem>
          <MenuListNavItem>
            <span>
              热门
            </span>
          </MenuListNavItem>
        </MenuListNav>
        <MenuListContent>
          蒸羊羔
        </MenuListContent>
      </MenuList>
    )
  }
}

export default MenuCategory