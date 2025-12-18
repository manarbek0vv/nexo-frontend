import Auth from "@pages/Auth/ui/Auth"
import SignIn from "@pages/SignIn/ui/SignIn"
import SignUp from "@pages/SignUp/ui/SignUp"
import { Route, Routes } from "react-router"

function Router() {

    return (
        <Routes>
            <Route path="/auth" element={<Auth />}>
                <Route path="sign-up" element={<SignUp />} />
                <Route path="sign-in" element={<SignIn />} />
            </Route>
        </Routes>
    )
}

export default Router