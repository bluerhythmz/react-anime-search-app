import React from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const AnimePage = () => {
  const [anime, setAnime] = useState({})
  const [loading, setLoading] = useState(false)
  const params = useParams()
  const animeId = params.id
  
  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/anime/${animeId}`)
    .then(data => console.log(data.data))
  },[animeId])
  return (
    <div>
      
    </div>
  )
}

export default AnimePage
