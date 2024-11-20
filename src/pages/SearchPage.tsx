import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ExchangeRateListBase from '../components/CurrencyList'
import { ExchangeRate } from '../types'

const formatDate = (date: string) => {
  return date.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')
}

const SearchPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const navigate = useNavigate()

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value.replace(/-/g, ''))
  }

  const handleEdit = (rate: ExchangeRate) => {
    navigate(`/edit/${rate.r030}`, { state: { rate } })
  }

  return (
    <>
      <input type="date" value={formatDate(selectedDate)} onChange={handleDateChange} />
      <ExchangeRateListBase date={selectedDate} onEdit={handleEdit} />
    </>
  )
}

export default SearchPage
