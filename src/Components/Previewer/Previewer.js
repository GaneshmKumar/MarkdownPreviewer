import React, { Component } from 'react';
import './Previewer.scss';

class Previewer extends Component {
  componentDidMount () {
    this.previewerElement = document.querySelector('.previewer');
  }

  componentWillReceiveProps () {
    const scrollPercentage =
      (this.previewerElement.scrollHeight * this.props.scrollPercentage) / 100;

    this.previewerElement.scrollTop = Math.floor(this.props.scrollPercentage) === 0
      ? 0
      : scrollPercentage + 20;
  }

  render () {
    return (
      <div className="previewer" dangerouslySetInnerHTML={{ __html: this.props.markdown }} />
    );
  }
}

export default Previewer;
