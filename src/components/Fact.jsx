'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/fact.module.css'
import utilStyles from '../styles/utils.module.css'

const Fact = () => {
  const [fact, setFact] = useState('Gatos')
  const [imageUrl, setImageUrl] = useState()

  const fetchData = () => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        const fact = data.fact
        setFact(fact)

        const threeFirstWord = fact.split(' ', 3)

        fetch(`https://cataas.com/cat/says/${threeFirstWord}?&json=true`)
          .then(response => response.json())
          .then(data => {
            setImageUrl(data.url)
          })
      })
      .catch(e => alert('Error mi parce'))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={utilStyles.centerItems}>
      {
        imageUrl && <Image className={utilStyles.image} width='200' height='200' src={`https://cataas.com${imageUrl}`} alt={`Random cat image with the first three words of '${fact}'`} />
      }
      <p className={styles.fact}>{fact}</p>
      <button onClick={fetchData}>Another Fact</button>
    </div>
  )
}

export default Fact
