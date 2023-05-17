import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import store from './store'
import { Provider } from "react-redux"

import Error404 from "./containers/errors/Error404"
import Profile from "./containers/pages/Profile"
import Home from "./containers/pages/Home"

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/perfil" element={<Profile/>}/>
        </Routes>
      </Router>
    </Provider>

  )
}

export default App
