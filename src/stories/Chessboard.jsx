import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './chessboard.css';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import 'material-icons/iconfont/material-icons.css';

function isDisplayed(d) {
    if (d == {}) return true;
    return false;
}
function displayTime(t, p) {
    t -= p;

    let ms = t % 100;
    t -= ms; t /= 100;

    let s = t % 60;
    t -= s; t /= 60;

    let m = t % 60;
    t -= m; t /= 60;

    // t = h

    if (t == 0 && m == 0) {
        return <span class="time" id="speedup">
            {s<10?'0':''}{s}:{ms<10?'0':''}{ms}
        </span>
    }
    return <span class="time">
        {t<10?'0':''}{t}:{m<10?'0':''}{m}:{s<10?'0':''}{s}
    </span>
}
function loadFen(fen) {
    
}
function load() {
    console.log('ok')
}

class Chessboard extends Component {
    componentDidMount() {
        alert('ok')   
        console.log(this)
    } 

    constructor(props) {
        super(props);

        this.state = {
            details: props.details,
            mouvementsEnabled: props.mouvementsEnabled,
            orientation: props.orientation,
            gameMode: props.gameMode,
            startingPosition: props.startingPosition,
            colorSheet: props.colorSheet,
            chat: props.chat
        }
    }

    render() {
    return (
    <div id="overflow">
        <div id="layout">
            <div class="mobile-details" id="history">
                
            </div>
            <div class="mobile-details" id="player1">
                
            </div>
            <div id="chessboard">
                <div id="game">
                    <table>
                        <tbody>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        </tbody>
                    </table>
                </div>
                
                <Tippy content="Flip the board"><span class="material-icons">flip_camera_android</span></Tippy>
            </div>
            <div class="mobile-details" id="player2">
                
            </div>
            <div id="details" style={{ display: isDisplayed(this.state.details) ? 'none' : 'flex' }}>
                <div class="player">
                    <p><p><Tippy content={<span>{this.state.details.players[0].name}</span>}><b>{this.state.details.players[0].name}</b></Tippy></p> <span>Rating: {this.state.details.players[0].elo}</span> {displayTime(this.state.details.time, this.state.details.players[0].time)}</p>
                </div>
                <div id="history">
                    <ul>

                    {this.state.details.history.map((h, i) => (
                        <li><span>{i+1}.</span> <div><span className={ (this.state.details.currentMove[0] == i && this.state.details.currentMove[1] == 0 ? 'current' : '') }>{h[0]||''}</span> <span className={ (this.state.details.currentMove[0] == i && this.state.details.currentMove[1] == 1 ? 'current' : '') }>{h[1]||''}</span></div></li>
                    ))}

                    </ul>
                </div>
                <div id="panel">
                <Tippy content="Propose a trackback"><span class="material-icons">undo</span></Tippy>
                <Tippy content="Offer a draw"><span>½</span></Tippy>
                <Tippy content="Resign"><span class="material-icons">flag</span></Tippy>
                </div>
                <div class="player">
                    <p><p><Tippy content={<span>{this.state.details.players[1].name}</span>}><b>{this.state.details.players[1].name}</b></Tippy></p> <span>Rating: {this.state.details.players[1].elo}</span> {displayTime(this.state.details.time, this.state.details.players[1].time)}</p>
                </div>
                <div id="chat">
                    <h2>Chat</h2>
                    <div id="messages">
                        <section>
                            {this.state.details.messages.map(el => (
                                <div>
                                    {el.author == null ? <p class="self">{el.content}<i><span>~</span>You</i></p> : <p><i>{el.author}<span>~</span></i>{el.content}</p>}
                                </div>
                            ))}
                        </section>
                    </div>
                    <div id="input">
                    <input type="text" /><span class="material-icons">send</span>
                    </div>
                </div>
            </div>
            <div class="mobile-details" id="panel">
                
            </div>
            <div class="mobile-details" id="chat">
                
            </div>
        </div>
    </div>
    )}
};

export default Chessboard;

Chessboard.propTypes = {
    timer: PropTypes.bool,
    history: PropTypes.bool,
    details: PropTypes.object,
    mouvementsEnabled: PropTypes.bool, 
    orientation: PropTypes.string, 
    gameMode: PropTypes.string,
    startingPosition: PropTypes.array,
    colorSheet: PropTypes.object,
    chat: PropTypes.bool
};

Chessboard.defaultProps = {
    timer: false,
    history: false,
    details: { "history": [['a2', 'b5'], ['a2', 'b5'], ['a2', 'b5'],['a2', 'b5'],['a2', 'b5'],['a2', 'b5'],['a2', 'b5'],['a2', 'b5'],['a2', 'b5'],['a2', 'b5'],['a2', 'b5'],['a2', 'b5'],['a2', 'b5'], ['a3']], "players": [{ "name": "Anonymous1 player test name", "elo": 0, "time": 12010 }, { "name": "Anonymous2", "elo": 2670, "time": 0 }], "increment": 0, "time": 18000, "currentMove": [2, 1], "messages": [{ "author": "titi", "content": "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest" }, { "author": "titi", "content": "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest" }, { "author": null, "content": "hi" }] },
    mouvementsEnabled: true, 
    orientation: "w",
    gameMode: "IRL",
    startingPosition: [
                    ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
                    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
                    ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
                ],
    colorSheet: { "background": "#fff" },
    chat: true
};
