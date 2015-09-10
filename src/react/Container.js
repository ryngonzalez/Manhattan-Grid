import React, { Component, PropTypes } from 'react'


function prefix(string) {
  return `GridContainer--${string}`
}

function classNameForOption(option, validOptions, type) {
  if (option in validOptions) {
    return validOptions[option]
  } else {
    console.error(`Incorrect ${type} applied to GridContainer.`)
    return ''
  }
}

const DIRECTIONS = {
  'ROW': prefix('row'),
  'COLUMN': prefix('column')
}
const ALIGNMENTS = {
  'START': prefix('start'),
  'CENTER': prefix('center'),
  'END': prefix('end')
}
const WRAP = {
  'START': prefix('start'),
  'CENTER': prefix('center'),
  'END': prefix('end')
}

class Container extends Component {
  render() {
    const classes = [
      'GridContainer',
      direction(),
      alignment(),
      wrap(),
      this.props.className
    ].join(' ')

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }

  direction() {
    let { direction } = this.props
        direction = direction.toUpperCase()
    return classNameForOption(direction, DIRECTIONS, 'direction')
  }

  alignment() {
    const { align } = this.props,
          alignment = align.toUpperCase()
    return classNameForOption(alignment, ALIGNMENTS, 'alignment')
  }
  alignment() {
    let { wrap } = this.props
        wrap = wrap.toUpperCase()
    return classNameForOption(wrap, WRAPS, 'wrap')
  }

}

Container.defaultProps = {
  direction: 'row',
  align: 'start',
  wrap: 'wrap'
}

Container.propTypes = {
  direction: PropTypes.string,
  align: PropTypes.string,
  wrap: PropTypes.string
}

export default Container
