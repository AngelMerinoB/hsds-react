import * as React from 'react'
import getValidProps from '@helpscout/react-utils/dist/getValidProps'
import { classNames } from '../../utilities/classNames'

import PropProvider from '../PropProvider'
import Button from './SideNavigation.Button'
import DropdownHeader from './SideNavigation.DropdownHeader'
import DropdownFooter from './SideNavigation.DropdownFooter'
import FadeInOut from './SideNavigation.FadeInOut'
import Footer from './SideNavigation.Footer'
import Header from './SideNavigation.Header'
import Heading from './SideNavigation.Heading'
import Item from './SideNavigation.Item'
import Section from './SideNavigation.Section'
import { COMPONENT_KEY } from './SideNavigation.utils'
import {
  SideNavigationProps,
  SideNavigationState,
} from './SideNavigation.types'

import {
  SideNavigationUI,
  SideNavigationCollapsableUI,
} from './styles/SideNavigation.css'

export class SideNavigation extends React.PureComponent<
  SideNavigationProps,
  SideNavigationState
> {
  static defaultProps = {}

  static Button = Button
  static DropdownHeader = DropdownHeader
  static DropdownFooter = DropdownFooter
  static FadeInOut = FadeInOut
  static Footer = Footer
  static Header = Header
  static Heading = Heading
  static Item = Item
  static Section = Section

  constructor(props) {
    super(props)

    this.state = {
      dropdowns: [],
    }
  }

  forceNavVisibleOn = (dropdownId: string) => {
    const { dropdowns } = this.state
    this.setState({ dropdowns: [...dropdowns, dropdownId] })
  }

  forceNavVisibleOff = dropdownId => {
    const { dropdowns } = this.state
    this.setState({ dropdowns: dropdowns.filter(id => id !== dropdownId) })
  }

  getProviderValue() {
    const { collapsable, floatingMenu } = this.props

    return {
      [COMPONENT_KEY.Item]: {
        collapsable,
        floatingMenu,
      },
      [COMPONENT_KEY.Header]: {
        collapsable,
      },
      [COMPONENT_KEY.Footer]: {
        collapsable,
        floatingMenu,
      },
      [COMPONENT_KEY.Button]: {
        floatingMenu,
      },
      [COMPONENT_KEY.DropdownFooter]: {
        floatingMenu,
        forceNavVisibleOn: this.forceNavVisibleOn,
        forceNavVisibleOff: this.forceNavVisibleOff,
      },
      [COMPONENT_KEY.DropdownHeader]: {
        floatingMenu,
        forceNavVisibleOn: this.forceNavVisibleOn,
        forceNavVisibleOff: this.forceNavVisibleOff,
      },
      [COMPONENT_KEY.FadeInOut]: {
        collapsable,
      },
    }
  }

  shouldMenuStayOpen() {
    return this.state.dropdowns.length > 0
  }

  renderSidenav() {
    const {
      children,
      className,
      width,
      collapsable,
      floatingMenu,
      ...rest
    } = this.props

    const componentClassName = classNames(
      'c-SideNavigation',
      collapsable ? 'is-collapsable' : '',
      this.shouldMenuStayOpen() ? 'is-nav-always-visible' : '',
      className
    )

    const sidenavComponent = (
      <SideNavigationUI
        aria-label="SideNavigation"
        aria-labelledby="SideNavigation__heading"
        {...getValidProps(rest)}
        className={componentClassName}
        width={width}
      >
        {children}
      </SideNavigationUI>
    )

    if (collapsable) {
      return (
        <SideNavigationCollapsableUI>
          {sidenavComponent}
        </SideNavigationCollapsableUI>
      )
    }

    return sidenavComponent
  }

  render() {
    return (
      <PropProvider value={this.getProviderValue()}>
        {this.renderSidenav()}
      </PropProvider>
    )
  }
}

export default SideNavigation
