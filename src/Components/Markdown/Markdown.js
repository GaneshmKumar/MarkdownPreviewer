import React, { Component } from 'react';
import { markdown } from 'markdown';
import Editor from '../Editor/Editor';
import Previewer from '../Previewer/Previewer';
import './Markdown.scss';

const initialText =
  localStorage.getItem('text') ||
  '#Reactjs\n* ganesh\n* kumar\n* [ganesh](kumar)\n## Reactjs\n### Reactjs';

class Markdown extends Component {
  constructor () {
    super();
    this.state = {
      text: initialText,
      md: this.getMarkdown(initialText),
      scrollPercentage: 0
    };
  }

  getMarkdown (text) {
    return markdown.toHTML(text.trim());
  }

  getScrollPercentage ({ scrollTop, scrollHeight, offsetHeight }) {
    return (scrollTop / (scrollHeight - offsetHeight)) * 100;
  }

  updateLocalStorage (text) {
    localStorage.setItem('text', text);
  }

  handleScroll (e) {
    const scrollPercentage = this.getScrollPercentage(e.target);

    this.setState(() => ({
      scrollPercentage
    }));
  }

  handleTextChange (e) {
    const text = e.target.value;
    const md = this.getMarkdown(text);

    this.setState(() => ({
      md,
      text
    }));

    this.updateLocalStorage(text);
  }

  render () {
    return (
      <div className="markdown">
        <Editor
          handleTextChange={e => this.handleTextChange(e)}
          handleScroll={e => this.handleScroll(e)}
          text={this.state.text}
        />
        <Previewer
          markdown={this.state.md}
          scrollPercentage={this.state.scrollPercentage}
        />
      </div>
    );
  }
}

export default Markdown;
