import React, { Component } from 'react';
import './Editor.scss';

class Editor extends Component {
  render () {
    return (
      <textarea className="editor" onScroll={this.props.handleScroll} onChange={this.props.handleTextChange} autoFocus="true" defaultValue={this.props.text} />
    );
  }
}

export default Editor;
