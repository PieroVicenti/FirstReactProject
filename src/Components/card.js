import React, { Component } from 'react';
import roll from '../Images/rolls.jpg';

class Card extends Component{
  render(){
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <button onClick={() => this.props.onIncrement(this.props.card)}className="btn btn-primary">Add<span className="badge badge-light">{this.props.card.quantita}</span></button>
          <img src={this.props.card.immagine} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.card.titolo}</h5>
            <p className="card-text">£ {this.props.card.prezzo}</p>
            <button
              onClick={() => this.props.onDelete(this.props.card.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Card;