import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard, virtualize } from 'react-swipeable-views-utils';

const BindKeyboardSwipeableViews = virtualize(SwipeableViews);


export default class SwipeContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      ledamoter: props.ledamoter,
      currentIndex: 0,
    }
  }



  renderSlide(index){
    return(
      <Ledamot ledamot={this.props.ledamoter[index.index]} index={index.index}/>
    )
  }

  render(){
    return(
      <BindKeyboardSwipeableViews overscanSlideAfter={this.props.ledamoter.length} hysteresis={0.1} slideCount={this.props.ledamoter.length} slideRenderer={this.renderSlide.bind(this)}  enableMouseEvents/>
    )
  }
}


const Ledamot = (props) => {
  if(props.ledamot!==undefined) {
    return(
      <div key={props.index} style={styles.slide}>
      <img src={props.ledamot.bild_url_max} style={styles.img} />
      <p>{props.ledamot.tilltalsnamn}</p>
      </div>
    )
  }
}

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: 'black',
  },
  name: {
    fontFamily: 'Helvetica Light'
  },
  img: {
    height: '50vh',
  }

};
