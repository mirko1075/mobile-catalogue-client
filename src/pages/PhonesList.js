import React, { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import PhoneCard from "../components/PhoneCard";
import lottieJson from "../Loader.json";
import { withContext } from "../context/GlobalContext";

const PhonesList = props => {
  const {
    phoneList,
    getPhones,
    deletePhone,
    phoneListFiltered,
    setPhoneListFiltered
  } = props;
  const [loading, setloading] = useState(true);

  const loadData = async () => {
    const result = await getPhones();
    setPhoneListFiltered(result.data);
  };

  const handleRemovePhone = async id => {
    const result = await deletePhone(id);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(
    () => {
      if (phoneList.length) setloading(false);
      setPhoneListFiltered(phoneList);
    },
    [phoneList]
  );

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {!loading ? (
            phoneListFiltered.length &&
            phoneListFiltered.map(phone => (
              <PhoneCard
                key={phone.id}
                phone={phone}
                handleRemovePhone={handleRemovePhone}
              />
            ))
          ) : (
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
