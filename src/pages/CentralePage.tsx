import React from "react";
import { useParams } from "react-router-dom";
import MapContainer from "../components/MapContainer.tsx";
import centrales from "../config/centralesConfig.ts";

interface Centrale {
    name: string;
    geojson: GeoJSON.FeatureCollection;
    center: [number, number];
}

function CentralePage() {
    const { centrale } = useParams<{ centrale: string }>();
    const config = centrales[centrale as keyof typeof centrales] as Centrale | undefined;

    if (!config) {
        return <p>Centrale non trouvée. Veuillez vérifier l'URL.</p>;
    }

    return <MapContainer config={config} />;
}

export default CentralePage;
