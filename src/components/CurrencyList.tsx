import React, { useState, useEffect } from 'react'
import { fetchExchangeRates } from '../utils/getRates'
import { ExchangeRate } from '../types'

interface CurrencyListProps {
  date: string
  onEdit: (rate: ExchangeRate) => void
}

const CurrencyList: React.FC<CurrencyListProps> = ({ date, onEdit }) => {
  const [rates, setRates] = useState<ExchangeRate[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getRates = async () => {
      setIsLoading(true)
      const result = await fetchExchangeRates(date)
      if ('error' in result) {
        setError(result.error)
      } else {
        setRates(result)
        setError(null)
      }
      setIsLoading(false)
    }
    getRates()
  }, [date])

  const filteredRates = rates.filter((rate) =>
    rate.txt.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const paginatedRates = filteredRates.slice((currentPage - 1) * 10, currentPage * 10)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1)
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {!isLoading && (
        <>
          <input
            type="text"
            placeholder="Пошук за назвою валюти"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <ul>
            {paginatedRates.map((rate) => (
              <li key={rate.r030} onClick={() => onEdit(rate)}>
                {rate.txt}: {rate.rate}
              </li>
            ))}
          </ul>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Попередня сторінка
          </button>
          <button onClick={handleNextPage} disabled={currentPage * 10 >= filteredRates.length}>
            Наступна сторінка
          </button>
        </>
      )}
    </>
  )
}

export default CurrencyList
