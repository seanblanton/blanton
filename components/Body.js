import React from 'react'
import moment from 'moment'
import { spacing } from "./../config"
import { Heading, ParagraphSecondary } from './Text'
import Box from './Box'
import Markdown from './Markdown'

class Body extends React.Component {

  render(props) {
    return (
      <Box pt={spacing[5]} pb={spacing[5]}>
        <Heading> {this.props.title} </Heading>
        <ParagraphSecondary> {moment(this.props.date).format("MMMM D, YYYY")} </ParagraphSecondary>
        <Markdown children={ this.props.body } />
      </Box>
    )
  }
}

export default Body
