import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ExchangeRate } from '../types'
import { Paths } from '../constants/data'

const ExchangeRateEdit: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const { rate } = location.state as { rate: ExchangeRate }
  const [editedRate, setEditedRate] = useState(rate.rate)

  const handleSave = () => {
    const modifiedRatesJSON = localStorage.getItem('modifiedRates')
    const modifiedRates = modifiedRatesJSON ? JSON.parse(modifiedRatesJSON) : []

    const updatedRate = { ...rate, rate: editedRate }
    const newModifiedRates = [...modifiedRates, updatedRate]

    localStorage.setItem('modifiedRates', JSON.stringify(newModifiedRates))
    navigate(Paths.MODIFIED)
  }

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedRate(Number(e.target.value))
  }

  return (
    <>
      <h2>Редагувати курс: {rate.txt}</h2>
      <input type="number" value={editedRate} onChange={handleRateChange} />
      <button onClick={handleSave}>Save</button>
    </>
  )
}

export default ExchangeRateEdit
