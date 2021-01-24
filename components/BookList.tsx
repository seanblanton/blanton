import * as React from "react";
import { H3, Link, Grid, P } from "@/system";
import { GridSection } from "@/components";
import booklist from "../data/booklist.js";
import { Book } from "../interfaces";

const BookList = () => (
  <GridSection title='Bookshelf'>
    <Grid>
      <P>
        I love to read in my free time. Here are a few things I’ve read recently
        that have stuck with me:
      </P>
      {booklist.map(({ title, author, url }: Book, i) => {
        return (
          <div key={i}>
            <Link href={url}>
              <Grid>
                <H3>{title}</H3>
                <P>by {author}</P>
              </Grid>
            </Link>
          </div>
        );
      })}
    </Grid>
  </GridSection>
);

export default BookList;
