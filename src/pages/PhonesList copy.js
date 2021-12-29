import React, {useState, useEffect, useContext} from 'react'
import ApiService from '../service/ApiService'
import Lottie from 'react-lottie-player'
import PhoneCard from '../components/PhoneCard'
import { PhonesContext } from '../context/PhonesContext'
import lottieJson from '../Loader.json'


export default function PhonesList() {
  const {phoneList, setPhoneList, phoneListToShow, setPhoneListToShow}= useContext(PhonesContext)
  const [loading, setloading] = useState(true)

    const loadData = async () =>{
      const result = await ApiService.getPhones();
      console.log('result :>> ', result);
      if (result.status===200) {
        await setloading(false)
        await setPhoneList(result.data);
      }
    }
  
    const handleRemovePhone = async (id) =>{
      const result = await ApiService.deletePhone(id);
      console.log('result :>> ', result);
      loadData()
    }
    useEffect(() => {
      loadData();
    }, [])

    useEffect(() => {
      console.log('loading :>> ', loading);
    }, [loading])

  

    return (
        <div className='d-flex flex-row flex-wrap align-items-center align-content-start justify-content-around '>
            {
              !loading?
              phoneList.map(phone=>
              <PhoneCard key={phone.id} phone={phone} handleRemovePhone={handleRemovePhone} />
            )
            :
            <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 50, height: 50 }}
              />
            }
        </div>
    )
}
