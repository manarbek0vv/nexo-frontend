import Auth from "@pages/Auth/ui/Auth"
import SignIn from "@pages/SignIn/ui/SignIn"
import SignUp from "@pages/SignUp/ui/SignUp"
import { Navigate, Route, Routes } from "react-router"

function Router() {

    return (
        <Routes>
            <Route path="/*" element={<Navigate to="/auth/sign-in" replace />} />

            <Route path="/auth" element={<Auth />}>
                <Route path="sign-up" element={<SignUp />} />
                <Route path="sign-in" element={<SignIn />} />
            </Route>
        </Routes>
    )
}

export default Router