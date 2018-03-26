import React, { Component } from 'react'
import { Query } from "react-apollo"
import { GET_LEDAMOTER } from '../../queries'
import gql from "graphql-tag"
import SwipeContainer from '../../../Components/SwipeContainer'

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
          return <SwipeContainer ledamoter={data.ledamoter}/>
        }}
      </Query>
    )
  }
}
