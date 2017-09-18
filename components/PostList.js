import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import moment from 'moment'

import { spacing } from "./../config"
import { spaceToDash, getDateAsPath } from './../util/'
import { hostname } from './../config';
import Box from './Box'
import {Heading, ParagraphSecondary} from './Text'

class PostList extends React.Component {
  static async fetch() {
    try {
      const res = await fetch(`${hostname}/api/posts/`)
      const json = await res.json()
      return json ? json.data : {}
    }
    catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
  		<Box pt={spacing[3]} pb={spacing[3]}>
        {(this.props.post).map((post, i) =>
          <Link
            href={`/post?title=${post.title}&date=${post.date}&post=${post.body}`}
            as={`/${moment(post.date).format("YYYY/MM/D")}/${(spaceToDash(post.title)).toLowerCase() }`}
            key={i} prefetch>
              <Box pt={spacing[3]} pb={spacing[3]}>
                  <Heading> {post.title} </Heading>
                  <ParagraphSecondary> {moment(post.date).format("MMMM D, YYYY")} </ParagraphSecondary>
              </Box>
          </Link>
        )}
      </Box>
    )
  }
}


export default PostList
