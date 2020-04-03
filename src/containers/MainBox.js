import React from 'react';
import MenuBar from '../components/MenuBar.js';
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js';

class MainBox extends React.Component {
  constructor(){
    super();
    this.state = {
      activeItem: 'profile'
    }
  }

  onSelectPage = (id) => {
    this.setState({
      activeItem: id
    })
    console.log('changed id')
  }

  render() {

    let detailsToDisplay = <div>Hi, I'm a div!</div>
    if (this.state.activeItem === 'profile') {
      detailsToDisplay = <Profile/>   
    } else if (this.state.activeItem === 'photo') {
      detailsToDisplay = <Photos />
    } else if (this.state.activeItem === 'cocktail') {
      detailsToDisplay = <Cocktails />
    } else {
      detailsToDisplay = <Pokemon />
    }

    

    return (
      <div>
        <MenuBar onSelectPage={this.onSelectPage} currentItem={this.state.activeItem} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
