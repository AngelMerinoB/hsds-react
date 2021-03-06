import * as React from 'react'
import { UISize } from '../../constants/types'
import getValidProps from '@helpscout/react-utils/dist/getValidProps'
import Scrollable from '../Scrollable'
import styled from '../styled'
import { classNames } from '../../utilities/classNames'
import { namespaceComponent } from '../../utilities/component'
import { noop } from '../../utilities/other'
import css from './styles/Block.css'
import { COMPONENT_KEY } from './Card.utils'

type Props = {
  bgMuted: boolean
  children?: any
  className?: string
  flex?: boolean
  scrollable: boolean
  scrollableRef: () => void
  onScroll: () => void
  size?: UISize
}

class Block extends React.PureComponent<Props> {
  static defaultProps = {
    onScroll: noop,
    scrollableRef: noop,
  }

  render() {
    const {
      bgMuted,
      className,
      children,
      onScroll,
      scrollable,
      scrollableRef,
      flex,
      size,
      ...rest
    } = this.props

    const componentClassName = classNames(
      'c-Card__block',
      bgMuted && 'is-bg-muted',
      flex && 'is-flex',
      scrollable && 'is-scrollable',
      size && `is-${size}`,
      className
    )

    const scrollableClassName = classNames(
      'c-Card__block',
      bgMuted && 'is-bg-muted',
      flex && 'is-flex',
      scrollable && 'is-scrollableWrapper',
      className
    )

    const contentMarkup = (
      <div {...getValidProps(rest)} className={componentClassName}>
        {children}
      </div>
    )

    const componentMarkup = scrollable ? (
      <Scrollable
        className={scrollableClassName}
        onScroll={onScroll}
        scrollableRef={scrollableRef}
      >
        {contentMarkup}
      </Scrollable>
    ) : (
      contentMarkup
    )

    return componentMarkup
  }
}

const StyledBlock = styled(Block)(css)

namespaceComponent(COMPONENT_KEY.Block)(StyledBlock)

export default StyledBlock
