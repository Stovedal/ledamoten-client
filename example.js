import React, { Component } from 'react'


export default class KomponentNamn extends Component {

  constructor(props){
    super(props)
    this.state = {
      lagratNummer: 5,
      lagratNamn: 'Erik',
    }
  }

  render(){

    console.log("Bra ställe att logga saker då den här funktionen kallas varje gång nåt händer");

    return (
      <div>
      <p>Det lagrade namnet är {this.state.lagratNamn}</p>
      <p>Ett namn komponenten fått av sin förälder är {this.props.namnFrånFöräler}<p/>
      <EnAnnanKomponent propsTillBarnet={this.state.lagratNummer} />
      </div>
    )
  }

}


class EnAnnanKomponent {
  return(
    <p>Props från KomponentNamn: {this.props.propsTillBarnet}</p>
  )
}
