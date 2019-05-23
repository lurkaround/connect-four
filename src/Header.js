import React, { Component } from "react";


class Header extends Component {
    render() {
        return (<div>
            <h1 class="animated fadeInRightBig">Connect 4</h1>
            <div class="circles">
                <div class="circle red-sm"></div>
                <div class="circle yellow-sm"></div>
                <div class="circle red-sm"></div>
                <div class="circle yellow-sm"></div>
                <div class="circle red-sm"></div>
                <div class="circle yellow-sm"></div>
                <div class="circle red-sm"></div>
                <div class="circle yellow-sm"></div>
            </div>
            <ol> 
                <li>Two player game, where each player takes turns (1 move per turn).</li> 
                <li>A player wins if they get 4 in a row (horizontally, vertically, or diagonally).</li> 
                <li> Game is tied when the whole board is filled up. </li>
                <li> Game is over when 2 or 3 is satisfied.</li>
                <li> Clicking a cell in the board will drop a disc into that column. </li>
            </ol>
        </div>);
    }
}

export default Header;