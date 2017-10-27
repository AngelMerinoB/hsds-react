import React from 'react'
import PropTypes from 'prop-types'
import { sizeTypes } from './propTypes'
import classNames from '../../utilities/classNames'
import { stateTypes } from '../../constants/propTypes'

export const propTypes = {
  className: PropTypes.string,
  disableSelect: PropTypes.bool,
  faint: PropTypes.bool,
  lineHeightReset: PropTypes.bool,
  muted: PropTypes.bool,
  selector: PropTypes.oneOf(['span', 'pre', 'samp']),
  size: sizeTypes,
  state: stateTypes,
  subtle: PropTypes.bool,
  truncate: PropTypes.bool,
  wordWrap: PropTypes.bool
}

const defaultProps = {
  disableSelect: false,
  selector: 'span',
  truncate: false
}

const Text = props => {
  const {
    children,
    className,
    disableSelect,
    faint,
    lineHeightReset,
    muted,
    selector,
    size,
    state,
    subtle,
    truncate,
    wordWrap,
    ...rest
  } = props

  const componentClassName = classNames(
    'c-Text',
    disableSelect && 'is-disableSelect',
    faint && 'is-faint',
    muted && 'is-muted',
    lineHeightReset && 'is-line-height-reset',
    selector && `is-${selector}`,
    size && `is-${size}`,
    state && `is-${state}`,
    subtle && 'is-subtle',
    truncate && 'is-truncate',
    wordWrap && 'is-word-wrap',
    className
  )

  return React.createElement(
    selector,
    {
      ...rest,
      className: componentClassName
    },
    children
  )
}

Text.propTypes = propTypes
Text.defaultProps = defaultProps

export default Text
