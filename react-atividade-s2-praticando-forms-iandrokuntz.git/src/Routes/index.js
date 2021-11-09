import { useState } from "react"
import {Route, Switch} from "react-router-dom"
import FormPage from "../pages/FormPage"
import HomePage from "../pages/HomePage"

const Routes = () => {

const [user, setUser] = useState({})

    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <FormPage setUser={setUser} />
                </Route>
                <Route path="/home">
                    <HomePage user={user}/>
                </Route>
            </Switch>
        </div>
 
    )
}

export default Routes