import React from 'react'
import ICard from './ICard'
import pic from '../images/cat.jpg'

 function ICardgallary() {
  return (
    <div>
<ICard  pic = {pic} roll = "74748" name = "ram" branch = "AIML" />
        <ICard/>
           <ICard/>
              <ICard/>
                 <ICard/>
    </div>
  )
}
export default ICardgallary
