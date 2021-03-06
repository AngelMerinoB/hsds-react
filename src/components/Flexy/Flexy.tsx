import { Align, Gap, Just } from './Flexy.types'
import * as React from 'react'
import getValidProps from '@helpscout/react-utils/dist/getValidProps'
import Block from './Flexy.Block'
import Item from './Flexy.Item'
import { classNames } from '../../utilities/classNames'
import { namespaceComponent } from '../../utilities/component'
import { COMPONENT_KEY } from './Flexy.utils'
import { FlexyUI } from './styles/Flexy.css'

export interface Props {
  align: Align
  children?: any
  className?: string
  gap: Gap
  just: Just
}

class Flexy extends React.PureComponent<Props> {
  static defaultProps = {
    gap: 'sm',
  }

  static Block = Block
  static Item = Item

  render() {
    const { align, children, className, gap, just, ...rest } = this.props

    const componentClassName = classNames(
      'c-Flexy',
      align && `is-align-${align} is-${align}`,
      gap && `is-gap-${gap}`,
      just && `is-just-${just}`,
      className
    )

    return (
      <FlexyUI {...getValidProps(rest)} className={componentClassName}>
        {children}
      </FlexyUI>
    )
  }
}

namespaceComponent(COMPONENT_KEY.Flexy)(Flexy)

export default Flexy
