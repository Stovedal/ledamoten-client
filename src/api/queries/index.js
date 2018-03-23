import gql from "graphql-tag";

export const GET_LEDAMOTER = gql`
query ledamoter($nr: Int!) {
  ledamoter (nr:$nr){
    sourceid
    efternamn
    tilltalsnamn
    bild_url_max
    parti
  }
}
`
