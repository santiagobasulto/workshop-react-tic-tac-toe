import React from 'react'

class GameCell extends React.Component{
  render() {
    let className = 'btn';
    if(this.props.value === 'X'){
      className += " btn-primary"
    }else if(this.props.value === 'O'){
      className += " btn-success"
    }else{
      className += " btn-default"
    }
    return (
      <button
        className={className}
        onClick={() => {
          this.props.onGameMove(this.props.row, this.props.col);
        }}
        disabled={this.props.value !== null}
        type="submit">{this.props.value === null ? "?" : this.props.value}</button>
    );
  }
}

export default GameCell;
