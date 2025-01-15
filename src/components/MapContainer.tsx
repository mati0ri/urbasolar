import React, { useEffect, useRef } from "react";
import maplibregl, { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface Centrale {
    name: string;
    geojson: GeoJSON.FeatureCollection;
    center: [number, number];
}

interface MapContainerProps {
    config: Centrale;
}

const MapContainer: React.FC<MapContainerProps> = ({ config }) => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const map = useRef<Map | null>(null);

    // Initialiser la carte
    useEffect(() => {
        const initializeMap = () => {
            const bounds: [[number, number], [number, number]] = [
                [config.center[0] - 0.06, config.center[1] - 0.04],
                [config.center[0] + 0.06, config.center[1] + 0.04],
            ];

            map.current = new maplibregl.Map({
                container: mapContainer.current!,
                style: {
                    version: 8,
                    sources: {
                        "satellite-tiles": {
                            type: "raster",
                            tiles: [
                                "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                            ],
                            tileSize: 256,
                            attribution: "© Esri, Maxar, Earthstar Geographics, and the GIS User Community",
                        },
                    },
                    layers: [
                        {
                            id: "satellite-layer",
                            type: "raster",
                            source: "satellite-tiles",
                        },
                    ],
                },
                center: config.center,
                zoom: 15,
                pitch: 40,
                bearing: 0,
                maxBounds: bounds,
            });

            // Ajouter les données GeoJSON après le chargement du style
            map.current.once("style.load", () => {
                addGeojsonLayer(map.current!, config);
            });
        };

        const addGeojsonLayer = (mapInstance: Map, config: Centrale) => {
            if (mapInstance.getLayer("centrale-layer")) {
                mapInstance.removeLayer("centrale-layer");
                mapInstance.removeSource("centrale");
            }

            mapInstance.addSource("centrale", {
                type: "geojson",
                data: config.geojson,
            });

            mapInstance.addLayer({
                id: "centrale-layer",
                type: "line",
                source: "centrale",
                paint: {
                    "line-color": "#000000", // Couleur noire
                    "line-width": 2,        // Épaisseur des lignes
                },
            });
        };

        initializeMap();

        return () => {
            map.current?.remove();
        };
    }, [config]);

    return <div ref={mapContainer} style={{ width: "100vw", height: "100vh" }} />;
};

export default MapContainer;
