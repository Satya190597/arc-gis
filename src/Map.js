import React ,{useRef,useEffect} from 'react';
import { loadModules } from 'esri-loader';
import Legend from "./legend/legend";

export default function Map() {

    const MapEl = useRef(null)

    useEffect(() => {
        let view
        loadModules([
            "esri/views/MapView",
            "esri/WebMap",
        ],{css:true}).then(([MapView,WebMap]) => {
            const webMap = new WebMap({
                basemap: 'topo-vector',
            })
            view = new MapView({
                map: webMap,
                container: MapEl.current,
            })
        })
        return() => {
            if (!!view) {
                view.destroy();
                view = null;
              }
        }
    })

    return (
        <Legend />
    )
}