
import React from 'react'
import ICard from './ICard'
import pic from '../images/cat.jpg'

function ICardgallary() {

  const student = [
    {
      roll: "74748",
      name: "ram",
      branch: "AIML",
    },
    {
      roll: "74748",
      name: "rahul",
      branch: "ece",
    },
    {
      roll: "74748",
      name: "mohan",
      branch: "cse ds",
    },
    {
      roll: "74793",
      name: "shyam",
      branch: "cse",
    },
  ]

  return (
    <div>

      {
        student.map((ele) => (
          <ICard data={ele} />
        ))
      }

    </div>
  )
}

export default ICardgallary