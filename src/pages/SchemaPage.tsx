import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import centrales from "../config/centralesConfig.ts";
import ReactJson from "react-json-view";

const SchemaPage: React.FC = () => {
    const { centrale } = useParams<{ centrale: string }>();
    const [jsonData, setJsonData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (centrale && centrales[centrale]) {
            setJsonData(centrales[centrale].arbreDesEquipements);
        } else {
            setError("Centrale non trouvée ou fichier JSON manquant.");
        }
    }, [centrale]);


    const style: React.CSSProperties = {
        textAlign: "center" as React.CSSProperties["textAlign"],
    };

    const styleRed: React.CSSProperties = {
        textAlign: "center" as React.CSSProperties["textAlign"],
        marginTop: "20%",
        color: "red",
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={style}>
                Arbre des équipements - {centrales[centrale ?? ""]?.name || "Inconnu"}
            </h1>
            {error ? (
                <p style={styleRed}>{error}</p>
            ) : jsonData ? (
                <ReactJson
                    src={jsonData}
                    name={false}
                    theme="monokai"
                    iconStyle="circle"
                    collapsed={2}
                    enableClipboard={true}
                    displayDataTypes={false}
                />
            ) : (
                <p style={style}>Chargement des données...</p>
            )}
        </div>
    );
};

export default SchemaPage;
