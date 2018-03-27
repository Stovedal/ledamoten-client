import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard, virtualize } from 'react-swipeable-views-utils';
import hjartaikon from '../../hjartaikon.jpg';
import kryssikon from '../../kryssikon.jpg';
import './styles.css'
import { description } from '../../assets/descriptions'

const BindKeyboardSwipeableViews = virtualize(SwipeableViews);


export default class SwipeContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      ledamoter: props.ledamoter,
      index: 0,
      parties: {
        S:{
          value: 0,
          party: 'S',
        },
        M:{
          value: 0,
          party: 'M',
        },
        SD:{
          value: 0,
          party: 'SD',
        },
        MP:{
          value: 0,
          party: 'MP',
        },
        C:{
          value: 0,
          party: 'C',
        },
        V:{
          value: 0,
          party: 'V',
        },
        L:{
          value: 0,
          party: 'L',
        },
        KD:{
          value: 0,
          party: 'KD',
        },
      }
    }
  }

  onTinderButtonClick(ans, parti){
    console.log(ans, parti);
    if(ans){
      this.setState({
        index: this.state.index + 1,
        parties:{
          ...this.state.parties,
          [parti]:{
            ...this.state.parties[parti],
            value: this.state.parties[parti].value + 1,
          }
        }
      })
    } else {
      this.setState({
        index: this.state.index + 1,
      })
    }
  }

  getResult(){
    let results = Object.values(this.state.parties).sort((a,b)=>{return a.value < b.value})
    let high = results[0].party
    results = results.filter((a)=>{return a.party===high})
    return results
  }

  render(){
    if(this.state.index<this.props.ledamoter.length){
      return(
        <Ledamot onTinderButtonClick={this.onTinderButtonClick.bind(this)} ledamot={this.props.ledamoter[this.state.index]} index={this.state.index}/>
      )
    } else {
      return <Result results={this.getResult()}/>
    }

  }
}


const Ledamot = (props) => {
  if(props.ledamot!==undefined) {
    return(
      <div>
      <div key={props.index} style={styles.slide} className="slide">
        <img src={props.ledamot.bild_url_max} className="img" />
        <p className="name">{props.ledamot.tilltalsnamn}</p>
        <p className="description">{description()}</p>
        </div>
        <div style={styles.buttonContainer} >
          <div style={styles.button} onClick={()=>props.onTinderButtonClick(false, props.ledamot.parti)}>
            <img src={kryssikon} style={styles.button} className="tinder-button" alt="kryssikon" />
          </div>
          <div style={styles.button} onClick={()=>props.onTinderButtonClick(true, props.ledamot.parti)}>
            <img src={hjartaikon} style={styles.button} className="tinder-button" alt="hjartaikon" />
          </div>
        </div>
      </div>
    )
  }
}

const Result = (props) => {
  console.log(props);
  return (
    <div style={styles.resultContainer}>
    <div style={styles.partyContainer}>{props.results.map((result, index)=>{
      return <img key={index} style={{height: '150px', width: '150px'}} src={getPartyImg(result.party)} />
    })}
    </div>
    <img style={styles.match} src={require('./images/match_black.png')} />
    <a className="again-button" href="javascript:history.go(0)">IGEN!</a>
    </div>
  )
}

const getPartyName = (letter) => {
  switch(letter){
    case 'S':
    return 'Socialdemokraterna'
    case 'M':
    return 'Moderaterna'
    case 'SD':
    return 'Sverigedemokraterna'
    case 'MP':
    return 'Miljöpartiet'
    case 'C':
    return 'Centerpartiet'
    case 'V':
    return 'Vänsterpartiet'
    case 'L':
    return 'Liberalerna'
    case 'KD':
    return 'Kristdemokraterna'
  }
}
const getPartyImg = (letter) => {
  switch(letter){
    case 'S':
    return require('./images/S.jpg')
    case 'M':
    return require('./images/M.png')
    case 'SD':
    return require('./images/SD.jpg')
    case 'MP':
    return require('./images/MP.jpg')
    case 'C':
    return require('./images/C.jpg')
    case 'V':
    return require('./images/V.jpg')
    case 'L':
    return require('./images/L.png')
    case 'KD':
    return require('./images/KD.gif')
  }
}

const styles = {


  buttonContainer: {
    display: 'flex',
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '90px',
    width: '40vh',
  },
  button: {
    borderRadius: '50%',
    overflow: 'hidden',
  },
  resultContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  partyContainer :{
    maxHeight: '60vh',
  },
  match: {
    height:'15vh'
  }

};
