import React, {useState, useEffect} from 'react'
import Lottie from 'react-lottie-player'
import PhoneCard from '../components/PhoneCard'
import lottieJson from '../Loader.json'
import { withContext } from '../context/GlobalContext'

const PhonesList = (props) => {
  const {phoneList, getPhones, deletePhone }= props
  const [loading, setloading] = useState(true)

    const loadData = async () =>{
      const result = await getPhones();
      console.log('result :>> ', result);

    }
  
    const handleRemovePhone = async (id) =>{
      const result = await deletePhone(id);
      console.log('result :>> ', result);
      loadData()
    }
    useEffect(() => {
      loadData();
    }, [])

    useEffect(() => {
      console.log('loading :>> ', loading);
    }, [loading])
    useEffect(() => {
      if (phoneList.length) setloading(false)
    }, [phoneList])

  

    return (
        <div className='d-flex flex-row flex-wrap align-items-center align-content-start justify-content-around '>
            {
              !loading?
              phoneList.length && phoneList.map(phone=>
              <PhoneCard key={phone.id} phone={phone} handleRemovePhone={handleRemovePhone} />
            )
            :
            <div className='loaderContainer'>
            <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 100, height: 100 }}
              />
              </div>
            }
        </div>
    )
}


export default withContext(PhonesList)