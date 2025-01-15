import { useNavigate } from "react-router-dom";
import React from "react";
import centrales from "../config/centralesConfig.ts";

type CentraleKey = keyof typeof centrales;

function HomePage() {
    const navigate = useNavigate();

    return (
        <div>
            {Object.keys(centrales).map((key) => (
                <div key={key} style={{ marginBottom: "10px" }}>
                    <button
                        onClick={() => navigate(`/map/${key}`)}
                        style={{ margin: "10px", padding: "10px 20px" }}
                    >
                        Carte de {centrales[key as CentraleKey].name}
                    </button>
                    <button
                        onClick={() => navigate(`/schema/${key}`)}
                        style={{ margin: "10px", padding: "10px 20px", backgroundColor: "#007BFF", color: "white" }}
                    >
                        Schéma
                    </button>
                    <button
                        onClick={() => navigate(`/simple/${key}`)}
                        style={{ margin: "10px", padding: "10px 20px", backgroundColor: "green", color: "white" }}
                    >
                        Schéma simple
                    </button>
                </div>
            ))}
        </div>

    );

}

export default HomePage;
