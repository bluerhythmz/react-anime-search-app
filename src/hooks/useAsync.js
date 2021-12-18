import { useState, useCallback, useEffect } from "react";

export default function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [data, setData] = useState()

  const callbackMemoized = useCallback(() => {
    setLoading(true)
    setData(undefined)
    callback()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, dependencies)
  
  useEffect(() => {
    callbackMemoized()
  }, [callbackMemoized])
  
  return { loading, data, error}
}