import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ExchangeRateList from './pages/ExchangeRateList'
import ModifiedRates from './pages/ModifiedRates'
import ExchangeRateEdit from './pages/ExchangeRateEdit'
import SearchPage from './pages/SearchPage'
import Header from './components/Header'
import { Paths } from './constants/data'

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={Paths.HOME} element={<ExchangeRateList />} />
          <Route path={Paths.MODIFIED} element={<ModifiedRates />} />
          <Route path={Paths.SEARCH} element={<SearchPage />} />
          <Route path={Paths.EDIT} element={<ExchangeRateEdit />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
