import React, { useState, useEffect, useCallback } from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../Loader.json";
import { withContext } from "../context/GlobalContext";
import FilterComponent from "../components/FilterComponent";
import PhoneCardShow from "../components/PhoneCardShow";
import NofileFound from "../components/NofileFound";
const PhonesList = (props) => {
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
    if (!result) {
      setPhoneList([]);
      setPhoneListFiltered([]);
      setloading(false);
    }
  }, [getPhones, setPhoneList, setPhoneListFiltered]);

  const reloadData = async () => {
    await setloading(true);
    loadData();
  };
  const handleRemovePhone = async (id) => {
    await deletePhone(id);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (phoneList?.length) setloading(false);
    setPhoneListFiltered([...phoneList]);
  }, [phoneList]);


  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <FilterComponent  />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {!loading ? (
            phoneListFiltered.length ? (
              phoneListFiltered.map((phone) => (
                <div key={phone.id} className="col">
                  <PhoneCardShow
                    phone={phone}
                    handleRemovePhone={handleRemovePhone}
                  />
                </div>
              ))
            ) : (
              <NofileFound  buttonText="Reload"  functionLink={reloadData} />
            )
          ) : (
            <div className="loaderContainer">
              <Lottie
                loop
                animationData={lottieJson}
                play
                className="lottieAnimationBox"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withContext(PhonesList);
