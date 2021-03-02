import React, { Component } from 'react';

export default class TextTyper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentText: [],
            letterCount: 0,
            doneTyping: false,
            currentWordIndex: 0,
            textList: ['apps', 'front-ends', 'back-ends', 'APIs', 'services', 'bots', 'friendships', 'fun stuff!']
        }
    }

    componentDidMount() {
        this.typingControl(true);
    }

    componentDidUpdate() {
        this.typingControl(false);
    }

    typingControl = async (mount) => {
        if (this.state.doneTyping) {
            this.beginBackspace();

        } else if (mount) {
            await this.beginTyping();
            this.setState({ doneTyping: true });
            setTimeout(() => { console.log('Typed word. Now waiting...') }, 1500);
        }
    }

    beginTyping = async () => {
        if (this.state.currentWordIndex < this.state.textList.length) {
            await this.type(this.state.textList[this.state.currentWordIndex]);
            this.setState({ currentWordIndex: this.currentWordIndex++ });
        } else {
            this.setState({ currentWordIndex: 0 });
        }
    }

    type = async (word) => {
        const charArr = word.split('');
        let charIndex = 0;
        while (charIndex < charArr.length) {
            let index = charIndex;
            setTimeout(() => {
                let text = [...this.state.currentText, charArr[index]];
                this.setState({ currentText: text });
            }, 1000);
            charIndex++;
        }
    }

    beginBackspace() {
        console.log('start backspacing');
    }

    render() {
        return (
            <h2>I build... <span id="build-text">{this.state.currentText.toString()}</span><span id="console-icon" className="console-icon">|</span></h2>
        );
    }
}
