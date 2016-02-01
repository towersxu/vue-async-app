/**
 * Created by taox on 16-2-1.
 */
var LoginLink = React.createClass({
    render: function () {
        return (
            <div>
                <a href="javascript:o">注册</a>
                <a href="javascript:o">登陆</a>
            </div>
        );
    }
});
var Search = React.createClass({
    displayName: 'ChatInput',

    getInitialState: function getInitialState() {
        return { value: 'Hello', name: 'username' };
    },
    change: function change(e) {
        console.log(e);
        this.setState({ value: e.target.value });
    },
    keyUp: function keyUp(e) {
        console.log(e);
    },
    render: function render() {
        var value = this.state.value;
        return React.createElement('input', { type: 'text',className:'search', value: value, onChange: this.change, onKeyUp: this.keyUp });
    }
});
var Comment = React.createClass({
    render: function () {
        return (
            <div className="header">
                <div className="container">
                    <div className="logo"></div>
                    <div className="des"><p>创作者交流社区</p></div>
                    <div className="search"><Search /></div>
                    <div className="login"><LoginLink /></div>
                </div>
            </div>
        );
    }
});
ReactDOM.render(
    <Comment des='全作者交流平台'/>,
    document.getElementById('header')
);
