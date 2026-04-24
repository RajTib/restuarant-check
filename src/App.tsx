import { useState } from "react"
import RestaurantCard from "./components/RestaurantCard"
import { restaurants } from "./data/restaurants"
import type { Restaurant } from "./types/restaurant"
import "./main.css"
import { getCardColour, getShadowColour } from "./utils/Colours"

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null)
  return (
    <div className="container">
      <h1>Restaurant Safety App</h1>

      <div className="card-grid">
        {restaurants.map((r) => (
          <RestaurantCard
            key={r.id}
            restaurant={r}
            onSelect={setSelectedRestaurant}
          />
        ))}
      </div>

      {selectedRestaurant && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedRestaurant(null)}
        >
          <div
            className="modal-card"
            style={{
              backgroundColor: getCardColour(selectedRestaurant.safetyScore),
              boxShadow: `0 8px 25px ${getShadowColour(selectedRestaurant.safetyScore)}`
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="modal-title">{selectedRestaurant.name}</h2>

            <p className="modal-score">
              Safety Score: {selectedRestaurant.safetyScore}
            </p>

            <ul>
              {selectedRestaurant.issues.length > 0 ? (
                <ul className="modal-issues">
                  {selectedRestaurant.issues.map((issue, i) => (
                    <li key={i}>{issue}</li>
                  ))}
                </ul>
              ) : (
                <p className="no-issues">No issues reported ✅</p>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
