import React from 'react';
import GoogleMap from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

import { GOOGLE_MAPS_API_KEY } from '../helpers/keys';
import * as LOCATIONS from '../helpers/locations';

const DEFAULT_MAP_ZOOM = 11;

const Pin = ({ text }) => <div className="Pin"><FontAwesomeIcon icon={faMapPin} />{text}</div>;

const Map = () => {
    const pins = [LOCATIONS.ST_ANDREWS, LOCATIONS.SWINTON];

    const getMapBounds = (map, maps, pins) => {
        const bounds = new maps.LatLngBounds();
      
        pins.forEach((place) => {
          bounds.extend(new maps.LatLng(
            place.lat,
            place.lng,
          ));
        });
        return bounds;
      };

    // Re-center map when resizing the window
    const bindResizeListener = (map, maps, bounds) => {
        maps.event.addDomListenerOnce(map, 'idle', () => {
        maps.event.addDomListener(window, 'resize', () => {
            map.fitBounds(bounds);
        });
        });
    };

    // Fit map to its bounds after the api is loaded
    const apiIsLoaded = (map, maps, pins) => {
        // Get bounds by our places
        const bounds = getMapBounds(map, maps, pins);
        // Fit map to bounds
        map.fitBounds(bounds);
        // Bind the resize listener
        bindResizeListener(map, maps, bounds);
    };

    return (
        <div className="Map">
            <div style={{ height: '20vh', width: '50%' }}>            
                <GoogleMap
                    bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
                    defaultCenter={LOCATIONS.MAP_CENTER}
                    defaultZoom={DEFAULT_MAP_ZOOM}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, pins)}
                />
                {pins.map(((pin, idx) => (<Pin key={idx} text={pin.address} {...pin}/>)))}
            </div>
        </div>
    )

}

  export default Map;