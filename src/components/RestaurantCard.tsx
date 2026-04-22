import { useState } from "react";
import type { Restaurant } from "../types/restaurant";
import { getCardColour } from "../utils/Colours";
import { getShadowColour } from "../utils/Colours";
import { getScoreColour } from "../utils/Colours";
import "../main.css"

type Props = {
    restaurant: Restaurant;
};

function RestaurantCard({ restaurant }: Props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={`restaurantCard ${expanded ? "expanded" : ""}`} style={{
            "--card-bg": getCardColour(restaurant.safetyScore),
            "--card-shadow": getShadowColour(restaurant.safetyScore)
        } as React.CSSProperties
        } onClick={() => setExpanded(!expanded)}>
            <div className="card-header">
                <h2>{restaurant.name}</h2>
                <span className="score-badge">Safety Score: {restaurant.safetyScore}</span>
            </div>
            <div className="progress-bar">
                <div className="progress-fill"
                    style={{
                        width: `${restaurant.safetyScore}%`,
                        backgroundColor: `${getScoreColour(restaurant.safetyScore)}`
                    }}
                ></div>
            </div>
            {expanded && (
                <ul>
                    {restaurant.issues.length > 0 ? (
                        restaurant.issues.map((issue, index) => (
                            <li key={index}>{issue}</li>
                        ))
                    ) : (
                        <p className="no-issues">No issues reported ✅</p>
                    )}
                </ul>
            )}
        </div>
    )
}

export default RestaurantCard
