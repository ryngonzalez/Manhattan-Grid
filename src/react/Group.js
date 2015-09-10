import React, { Component, PropTypes } from 'react'


function prefix(string) {
  return `GridGroup--${string}`
}

function classNameForOption(option, validOptions, type) {
  if (option in validOptions) {
    return validOptions[option]
  } else {
    console.error(`Incorrect ${type} applied to GridGroup.`)
    return ''
  }
}

const JUSTIFICATIONS = {
  'BETWEEEN': prefix('spaceBetween'),
  'AROUND': prefix('spaceAround'),
  'CENTER': prefix('justifycenter'),
  'START': prefix('justifyStart'),
  'END': prefix('justifyEnd')
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

class Group extends Component {
  render() {
    const classes = [
      'GridGroup',
      direction(),
      alignment(),
      wrap(),
      justification(),
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

  wrap() {
    let { wrap } = this.props
        wrap = wrap.toUpperCase()
    return classNameForOption(wrap, WRAPS, 'wrap')
  }

  justification() {
    let { justify } = this.props
        justification = justify.toUpperCase()
    return classNameForOption(justification, JUSTIFICATIONS, 'justification')
  }
}

Group.defaultProps = {
  direction: 'row',
  align: 'start',
  wrap: 'wrap',
  justify: 'start'
}

Group.propTypes = {
  direction: PropTypes.string,
  align: PropTypes.string,
  wrap: PropTypes.string,
  justify: PropTypes.string
}

export default Group
