import { useEffect, useState } from 'react'
import { ExchangeRate } from '../types'

const ModifiedRates: React.FC = () => {
  const [modifiedRates, setModifiedRates] = useState<ExchangeRate[]>([])

  useEffect(() => {
    const ratesString = localStorage.getItem('modifiedRates')
    const rates: ExchangeRate[] = ratesString ? JSON.parse(ratesString) : []

    setModifiedRates(rates)
  }, [])

  return (
    <>
      <h2>Змінені курси</h2>
      <ul>
        {modifiedRates.map((rate) => (
          <li key={rate.r030}>
            {rate.txt}: {rate.rate}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ModifiedRates
