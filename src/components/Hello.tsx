import * as React from 'react'

export interface HelloProps {
  userName?: string;
}

class Hello extends React.Component<HelloProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.userName}</h1>
      </div>
    )
  }
}

export default Hello;