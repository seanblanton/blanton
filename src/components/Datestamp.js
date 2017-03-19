import React from 'react';
import moment from 'moment';
import { LabelSecondary } from './Text';


const Datestamp = ({ children, date, ...props }) => {
  return (
          <LabelSecondary children={moment(date).format("MMMM D, YYYY")} />
  );
}


export default Datestamp


