import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentDateFormatted } from '../utils/getDate'
import ExchangeRateListBase from '../components/CurrencyList'
import { ExchangeRate } from '../types'

const ExchangeRateList: React.FC = () => {
  const navigate = useNavigate()
  const date = getCurrentDateFormatted()

  const handleEdit = (rate: ExchangeRate) => {
    navigate(`/edit/${rate.r030}`, { state: { rate } })
  }

  return <ExchangeRateListBase date={date} onEdit={handleEdit} />
}

export default ExchangeRateList
