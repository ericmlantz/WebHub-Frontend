import axios from 'axios'
import { useEffect, useState } from 'react'
import Pages from '../components/Pages'

const Home = () => {

  const [interests, setInterests] = useState([])

  useEffect(() => {
    getInterests()
  }, [])
  const getInterests = async () => {
    const res = await axios.get('http://localhost:8000/interests/')
    setInterests(res.data)
  }
  return (
    <div>
      {interests.map((interest, index) => (
        <Pages key={interest.id} topic={interest.topic} description={interest.description} searches={interest.searches}/>
      ))}
    </div>
  )
}

export default Home