import Navbar from './Components/navbar'
import Card from './Components/card';
import React, { Component } from 'react';

import rolls from './Images/rolls.jpg';
import risii from './Images/risii.jpg';
import celeste from './Images/celeste.jpg';


class App extends Component {
  state={
    cards:[
      {id: 0, nome: "Roll", prezzo: 4.99, immagine: rolls, quantita: 0},
      {id: 1, nome: "risii", prezzo: 6.99, immagine: risii, quantita:0},
      {id: 2, nome: "Celeste", prezzo: 9.99, immagine: celeste, quantita:0}
  ]
}

handleDelete = cardId =>{
  const cards = this.state.cards.filter(card => card.id !== cardId);
  this.setState({cards});
}
handleIncrement = card =>{
  const cards = [...this.state.cards];
  const id = cards.indexOf(card);
  cards[id] = {...card};
  cards[id].quantita++;
  this.setState({cards});
}
  render(){
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Cosa desideri ordinare?</h1>
        <div className="row">
          {this.state.cards.map(card=>(
            <Card
              key={card.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              card={card}/>
          ))}
        </div>
      </div>
    </>
  );
  }
}

export default App;
