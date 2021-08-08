import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 87.47619618341834,
      lng: 25.77726369464499
    },
    zoom: 11
  };
  
  render() {
    return (
      // Important! Always set the container height explicitly
      <>
      <h2>Find us on Google Map</h2><br/>
      <div style={{ height: '48vh', width: '100%', marginTop:"9px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDQhgKBqggJ6mXMJHABUIODM3JjRtCtLiM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={87.47619618341834}
            lng={25.77726369464499}
            text="Current Location"
          />
        </GoogleMapReact>
      </div>
      </>
    );
  }
}

export default SimpleMap;
