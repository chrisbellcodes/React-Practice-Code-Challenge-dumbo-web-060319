import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state ={
    renderedSushi: [].slice(0, 4),
    sushiStart: 0,
    sushiEnd: 4
  }

  handleClick = () => {
    this.setState(prevState =>
      ({
          sushiStart: prevState.sushiStart + 4,
          sushiEnd: prevState.sushiEnd + 4
        })
    )
  }

  render() {
    const {id, name, img_url, price, eaten, handleClick, onChange} = this.props.sushis
    const sushis = this.props.sushis.map(sushi => <Sushi key={sushi.id}
                                                         id={sushi.id}
                                                         onEatenSushi={this.props.onEatenSushi}
                                                         onChange={this.props.onChange}
                                                         eaten={sushi.eaten}
                                                         name={sushi.name}
                                                         img={sushi.img_url}
                                                         price={sushi.price}
                                                         balance={this.props.balance}
                                                         />)

    return (
      <Fragment>
      <div className="belt">
      {sushis.slice(this.state.sushiStart, this.state.sushiEnd)}
      <MoreButton onClick={this.handleClick}/>
      </div>
      </Fragment>
    )
  }
}

export default SushiContainer
