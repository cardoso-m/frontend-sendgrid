import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Signup from '../pages/signup'
import Signin from '../pages/signin'
import Validate from '../pages/validate'

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/validate' element={<Validate />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes
