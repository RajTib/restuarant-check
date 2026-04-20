import RestaurantCard from "./components/RestaurantCard"
import { restaurants } from "./data/restaurants"
import "./main.css"

function App() {
  return (
    <div className="container">
      <h1>Restaurant Safety App</h1>

      {restaurants.map((r) => (
        <RestaurantCard key={r.id} restaurant={r} />
      ))}
    </div>
  )
}

export default App
