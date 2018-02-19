import React from 'react'
import moment from 'moment'
import { spacing } from "./../config"
import { Title, ParagraphSecondary } from './Text'
import Box from './Box'
import Markdown from './Markdown'

class Body extends React.Component {

  render(props) {
    return (
      <Box py={spacing[4]}>
        <Box pb={spacing[4]}>
          <Title> {this.props.title} </Title>
          <ParagraphSecondary>
            {moment(this.props.date).format("MMMM D, YYYY")}
          </ParagraphSecondary>
        </Box>
        <Markdown children={ this.props.body } />
      </Box>
    )
  }
}

export default Body
