import React, { Component } from 'react'
import { Query } from "react-apollo";
import { GET_LEDAMOTER } from '../../queries'
import gql from "graphql-tag";

export default class LedamoterList extends Component {

  render(){
    let nr = 32;
    return (
      <Query query={GET_LEDAMOTER} variables={{nr}}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) {
            console.log(error);
            return <p>Error :(</p>;
            }
          return data.ledamoter.map((ledamot, index) => (
            <div key={index}>
              <img src={ledamot.bild_url_max} style={{height:'100px'}}/>
              <p>{ledamot.tilltalsnamn + ledamot.efternamn}</p>
            </div>
          ));
        }}
      </Query>
    )
  }
}
