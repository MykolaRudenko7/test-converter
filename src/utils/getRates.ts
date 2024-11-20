export const fetchExchangeRates = async (date: string) => {
  try {
    const response = await fetch(
      `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`,
    )

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Fetching exchange rates failed:', error)

    return { error: 'Failed to fetch exchange rates. Please try again later.' }
  }
}
