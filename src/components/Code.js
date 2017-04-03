import React from 'react';
import View from './View';
import Prism from './../prism';


class CodeComponent extends React.Component {

  componentDidMount() {
      if (!Prism) {
        console.warn('You do not have Prism included as a global object');
        return;
      }
      Prism.highlightAll();
    }

  componentDidUpdate() {
    if (!Prism) {
      console.warn('You do not have Prism included as a global object');
      return;
    }
    Prism.highlightAll();
  }

  render() {
    return (
      <View maxWidth="l">
        <pre key={this.props.key}>
          <code className={'language-'+this.props.language} ref="code">
            {this.props.code}
          </code>
        </pre>
      </View>
    );
  }
}

export default CodeComponent;


