import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react'


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log(puppies);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup)

  return (
    <>
      <div className='puppy-name'>
        {
          puppies.map((puppy) => {
            // console.log(featuredPup);
            return <p onClick={() => { setFeatPupId(puppy.id) }} key={puppy.id}>{puppy.name}</p>
          })
        }{featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.Age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>

        )}
      </div>

    </>
  )
}

export default App
