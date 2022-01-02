import React, { useState, useEffect, useCallback } from "react";
import { Button } from "react-bootstrap";
import Lottie from "react-lottie-player";
import PhoneCard from "../components/PhoneCard";
import lottieJson from "../Loader.json";
import { withContext } from "../context/GlobalContext";
import FilterComponent from "../components/FilterComponent";
const PhonesList = props => {
  const {
    phoneList,
    getPhones,
    deletePhone,
    phoneListFiltered,
    setPhoneList,
    setPhoneListFiltered,
  } = props;
  const [loading, setloading] = useState(true);

  const loadData = useCallback(async () => {
     const result = await getPhones();
     console.log('result :>> ', result);
     if (!result) {
      setPhoneList([]);
      setPhoneListFiltered([]);
      setloading(false);
     }
  },[getPhones, setPhoneList, setPhoneListFiltered]);


  const reloadData = async () =>{
    await setloading(true);
    loadData()
  }
  const handleRemovePhone = async id => {
    await deletePhone(id);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(
    () => {
      if (phoneList.length) setloading(false);
      setPhoneListFiltered([...phoneList]);
    },
    [phoneList, setPhoneListFiltered]
  );

  return (
    <div className="album py-5 bg-light">
      <div className="container">
      <FilterComponent />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {!loading ? 
            phoneListFiltered.length
            ? phoneListFiltered.map(phone => (
              <PhoneCard
                key={phone.id}
                phone={phone}
                handleRemovePhone={handleRemovePhone}
              />
            ))
           :(
            <div className="no-data">
                <div>
                  <div>No data</div>
                  <div><Button variant="outline-dark" type="submit"  onClick={reloadData}>Reload</Button></div>
                </div>
            </div>
          )
          : (
            <div className="loaderContainer">
              <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 100, height: 100 }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withContext(PhonesList);
