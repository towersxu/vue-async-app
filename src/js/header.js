"use strict";

/**
 * Created by taox on 16-2-1.
 */
var LoginLink = React.createClass({
    displayName: "LoginLink",

    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "a",
                { href: "javascript:o" },
                "注册"
            ),
            React.createElement(
                "a",
                { href: "javascript:o" },
                "登陆"
            )
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
        return React.createElement('input', { type: 'text', className: 'search', value: value, onChange: this.change, onKeyUp: this.keyUp });
    }
});
var Comment = React.createClass({
    displayName: "Comment",

    render: function render() {
        return React.createElement(
            "div",
            { className: "header" },
            React.createElement(
                "div",
                { className: "container" },
                React.createElement("div", { className: "logo" }),
                React.createElement(
                    "div",
                    { className: "des" },
                    React.createElement(
                        "p",
                        null,
                        "创作者交流社区"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "search" },
                    React.createElement(Search, null)
                ),
                React.createElement(
                    "div",
                    { className: "login" },
                    React.createElement(LoginLink, null)
                )
            )
        );
    }
});
ReactDOM.render(React.createElement(Comment, { des: "全作者交流平台" }), document.getElementById('header'));