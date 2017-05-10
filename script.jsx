/*
* @Author: GaNeShKuMaRm
* @Date:   2017-05-10 19:41:41
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-05-10 19:41:47
*/

'use strict';

var TextAreaComponent = React.createClass({
    update(event) {
        var newValue = event.target.value;
        this.props.updateValue(newValue);
    },
    render() {
        return (<textarea rows="31" type="text" className="form-control" defaultValue={this.props.value} onChange={this.update}></textarea>);
    }
});

var MarkdownComponent = React.createClass({
    getInitialState() {
        return {
            value: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"
        }
    },
    updateValue(newValue) {
        this.setState({
            value: newValue
        });
    },
    display(value) {
        return {
            __html: marked(value, {sanitize:true})
        }
    },
    render() {
        return (
            <div className="markdown row">
                <div className="col-md-6 input"><TextAreaComponent value={this.state.value} updateValue={this.updateValue}/></div>
                <div className="col-md-6 output">
                    <span dangerouslySetInnerHTML = {this.display(this.state.value)} />
                </div>
            </div>
            );
    }
});

ReactDOM.render(<MarkdownComponent />, document.getElementById("main"));