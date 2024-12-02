import { TileLayer, LayersControl } from "react-leaflet";
const TilesLayer = () => {
  return (
    <LayersControl data-tour="satellite-btn" position="bottomright">
      <LayersControl.BaseLayer name="Simple Map">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </LayersControl.BaseLayer>

      <LayersControl.BaseLayer checked name="Satellite Map">
        <TileLayer url="https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=dsCSo6Fryh6Aj54QnzAj" />
      </LayersControl.BaseLayer>
    </LayersControl>
  );
}

export default TilesLayer