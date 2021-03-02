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
        // Start typing loop when component loads
        this.typingControl(true);
    }

    componentDidUpdate() {
        //this.typingControl(false);
    }

    typingControl = async (mount) => {
        if (mount) {
            await this.beginTyping();
            //setTimeout(() => { console.log('Typed word. Now waiting...') }, 1500);
        }
    }

    beginTyping = async () => {
        if (this.state.currentWordIndex < this.state.textList.length) {
            await this.type(this.state.textList[this.state.currentWordIndex]);
            if (this.state.currentText.join() === this.state.textList[this.state.currentWordIndex]) {
                this.setState({ currentWordIndex: this.currentWordIndex + 1, doneTyping: true });
            }
        } else {
            this.setState({ currentWordIndex: 0 });
        }
    }

    type = async (word) => {
        const charArr = word.split('');
        let charIndex = 0;
        while (charIndex < charArr.length) {
            let index = charIndex;
            let text = [...this.state.currentText, charArr[index]];
            this.setState({ currentText: text });
            setDelay(index);
            index++;
        }
        function setDelay(i) {
            setTimeout(function(){
              console.log(i);
            }, 1000);
          }
    }

    beginBackspace = async() => {
        while (this.state.currentText.length > 0) {
            return new Promise(resolve => {
                setTimeout((resolve) => {
                    let text = [...this.state.currentText.slice(0, -1)];
                    this.setState({ currentText: text});
                }, 1000);
            });
        }
    }

    render() {
        return (
            <h2>I build... <span id="build-text">{this.state.currentText.join("")}</span><span id="console-icon" className="console-icon">|</span></h2>
        );
    }
}
