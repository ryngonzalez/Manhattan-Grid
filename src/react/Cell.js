import React, { Component, PropTypes } from 'react'

function prefix(string) {
  return `GridCell--${string}`
}

class Cell extends Component {
  render() {
    const classes = [
      'GridCell',
      prefix(this.props.size),
      this.props.className
    ].join(' ')

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}

Cell.propTypes = {
  size: PropTypes.string,
  children: PropTypes.element.isRequired
}

Cell.defaultProps = {
  size: 'full',
  children: (() => <div>Empty Cell</div>)
}

export default Cell
