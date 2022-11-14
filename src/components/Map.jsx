import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

import { MAP_CENTER } from '../helpers/locations';
import { GOOGLE_MAPS_API_KEY } from '../helpers/keys';

const DEFAULT_MAP_ZOOM = 12;

const Pin = ({ label, address, mapsPlaceId }) => {
    const openInMaps = () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}&query_place_id=${encodeURIComponent(mapsPlaceId)}`);
    }

    return (
        <div className="Pin"><FontAwesomeIcon icon={faMapPin} size="2x"/><p onClick={openInMaps}>{label}</p></div>
    )
}

const Map = ({ pins }) => {

    const getMapBounds = (map, maps, pins) => {
        const bounds = new maps.LatLngBounds();
      
        if (!pins) {
            return bounds;
        }

        pins.forEach((place) => {
          bounds.extend(new maps.LatLng(
            place.lat,
            place.lng,
          ));
        });

        return bounds;
      };

    const bindResizeListener = (map, maps, bounds) => {
        maps.event.addDomListenerOnce(map, 'idle', () => {
        maps.event.addDomListener(window, 'resize', () => {
            map.fitBounds(bounds);
        });
        });
    };

    const apiIsLoaded = (map, maps, pins) => {
        const bounds = getMapBounds(map, maps, pins);
        map.fitBounds(bounds);
        bindResizeListener(map, maps, bounds);
    };

    return (
        <div className="Map">
            <div style={{ height: '50vh', width: '100%' }}>            
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
                    defaultCenter={MAP_CENTER}
                    defaultZoom={DEFAULT_MAP_ZOOM}
                    yesIWantToUseGoogleMapApiInternals={true}
                    onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, pins)}
                >
                    {pins.map(((pin, idx) => (<Pin key={idx} {...pin}/>)))}
                </GoogleMapReact>
            </div>
        </div>
    )

}

  export default Map;