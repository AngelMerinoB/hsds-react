import React from 'react'
import classNames from '../../utilities/classNames'
import PropTypes from 'prop-types'

export const propTypes = {
  inline: PropTypes.bool
}

const Item = props => {
  const {
    children,
    className,
    inline,
    ...rest
  } = props

  const componentClassName = classNames(
    inline ? 'c-Flexy__inline-item' : 'c-Flexy__item',
    className
  )

  return (
    <div className={componentClassName} {...rest}>
      {children}
    </div>
  )
}

Item.propTypes = propTypes

export default Item
