import { Route } from "react-router-dom"
import { Home } from "./Home"
import { MostPopular } from "./MostPopular"
import { HighestRated } from "./HighestRated"
import { ShortStories } from "./ShortStories"
import { Novels } from "./Novels"

export const routes = (
    <>
     <Route path="/"
        element={<Home />}>
        </Route>
        <Route path="/popular"
        element={<MostPopular />}>
        </Route>
        <Route path="/ratings"
        element={<HighestRated />}>
        </Route>
        <Route path="/novels"
        element={<Novels />}>
        </Route>
        <Route path="/short-stories"
        element={<ShortStories />}>
        </Route>
    </>
)
