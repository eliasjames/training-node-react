import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './tictactoe.v7.2.game.js';

export default class Main extends React.Component {
  render(){
    return (
      <div>
      <Switch>
        <Route exact path="/game" component={ Game } />
        <Route path="/about" render={ ()=>(
          <h3>blerg</h3>
        )}/>
      </Switch>
      </div>
    );
  }
}
