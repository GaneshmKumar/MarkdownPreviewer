import React, { Component } from 'react';
import { markdown } from 'markdown';
import Editor from '../Editor/Editor';
import Previewer from '../Previewer/Previewer';
import './Markdown.scss';

const initialText =
  localStorage.getItem('text') ||
  'Heading\n=======\n\n## Sub-heading\nParagraphs are separated by a blank line.\n\nTwo spaces at the end of a line produces a line break.\nText attributes _italic_,**bold**, `monospace`.\n\nHorizontal rule:\n\n---\n\nBullet list:\n\n* apples\n* oranges\n* pears\n\nNumbered list:\n1. wash\n2. rinse\n3. repeat\nA [link](http://example.com).\n\n![Image](https://avatars3.githubusercontent.com/u/857949?s=460&v=4)';

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
        <div className="title-wrapper">
          <div className="title">
            <i className="fas fa-code markdown-icon" /> MARKDOWN
          </div>
        </div>
        <div className="title-wrapper">
          <div className="title">
            <i className="fas fa-eye preview-icon" /> PREVIEW
          </div>
        </div>
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
