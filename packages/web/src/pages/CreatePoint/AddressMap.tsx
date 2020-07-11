/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useEffect } from 'react';
import { LatLngTuple, LeafletMouseEvent } from 'leaflet';
import { Map, Marker, TileLayer } from 'react-leaflet';
import * as styles from './styles';

const DefaultLatLng = [0.0, 0.0] as LatLngTuple;

interface AddressMapProps {
  selectedPosition: [number, number];
  setSelectedPosition: (position: [number, number]) => void;
}

const AddressMap = (props: AddressMapProps) => {
  const { selectedPosition, setSelectedPosition } = props;

  const [initialPosition, setInitialPosition] = useState(DefaultLatLng);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  function handleClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setSelectedPosition([lat, lng]);
  }

  return (
    <Map
      css={styles.mapContainer}
      center={initialPosition}
      zoom={15}
      onClick={handleClick}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={selectedPosition} />
    </Map>
  );
};

export default AddressMap;
