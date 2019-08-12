import React, { Fragment } from 'react'

class Sushi extends React.Component {
    state = {
      eaten: false
    }

    handleClick = () => {
      if (this.props.balance > this.props.price){
        this.setState({eaten: true})
        this.props.onChange()
        this.props.onEatenSushi(this.props.id)
    } else {
      null
    }
    }

    render() {
      console.log(this.props.balance);
      return (
        <div className="sushi">
          <div className="plate"
               onClick={this.handleClick}>
            {this.state.eaten ?
                null
              :
                <img src={`${this.props.img}`} width="100%" atl={this.props.name}/>
            }
          </div>
          <h4 className="sushi-details">
            {this.props.name} - ${this.props.price}
          </h4>
        </div>
      )
    }
}

export default Sushi
