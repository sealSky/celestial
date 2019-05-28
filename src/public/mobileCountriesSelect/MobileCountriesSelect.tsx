import * as React from 'react'

import './contries.scss'

class MobileCountriesSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="countries">
        <div className="countries-content">
          <div>+ 86</div>
          <select>
            <option value="中国 +86">中国 +86</option>
            <option value="中国 +86">中国 +86</option>
            <option value="中国 +86">中国 +86</option>
            <option value="中国 +86">中国 +86</option>
          </select>
        </div>
      </div>
    )
  }
}

export default MobileCountriesSelect;
