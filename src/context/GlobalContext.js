import React from "react";
import apiService from "./../service/ApiService";
const { Consumer, Provider } = React.createContext({});

class ContextProvider extends React.Component {
  state = {
    phoneList: [],
    phoneListFiltered: []
  };

  setPhoneList = phoneList => {
    this.setState({ phoneList: [...phoneList] });
  };

  setPhoneListFiltered = phoneListFiltered => {
    this.setState({ phoneListFiltered: [...phoneListFiltered] });
  };

  getPhones = async () => {
    try {
      const result = await apiService.getPhones();
      if (result.status === 200) {
        this.setState({ phoneList: [...result.data.sort((a,b)=>b.id-a.id)], phoneListFiltered: [...result.data.sort((a,b)=>b.id-a.id)] });
        return result;
      }
    } catch (error) {
      return null;
    }
  };

  getPhone = async (id) => {
    try {
      const result = await apiService.getPhone(id);
      if (result.status === 200) {
        if (result.data.length)
        return result.data[0];
      }
    } catch (error) {
      return null;
    }
  };

  addPhone = async phoneObj => {
    try {
      const result = await apiService.addPhone(phoneObj);
      await this.getPhones();
      return result;
    } catch (error) {
      return null;
    }
  };

  editPhone = async phoneObj => {
    try {
      const result = await apiService.editPhone(phoneObj);
      await this.getPhones();
      return result;
    } catch (error) {
      return null;
    }
  };

  deletePhone = async id => {
    try {
      const result = await apiService.deletePhone(id);
      await this.getPhones()
    } catch (error) {
      return null;
    }
  };

  render() {
    const { phoneList, phoneListFiltered } = this.state;
    const {
      setPhoneList,
      getPhones,
      getPhone,
      addPhone,
      deletePhone,
      editPhone,
      setPhoneListFiltered
    } = this;

    return (
      <Provider
        value={{
          phoneList,
          phoneListFiltered,
          setPhoneList,
          getPhones,
          getPhone,
          addPhone,
          deletePhone,
          editPhone,
          setPhoneListFiltered
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

const withContext = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {value => {
            const {
              phoneList,
              phoneListFiltered,
              setPhoneList,
              getPhones,
              getPhone,
              addPhone,
              deletePhone,
              editPhone,
              setPhoneListFiltered
            } = value;
            return (
              <WrappedComponent
                {...this.props}
                phoneList={phoneList}
                phoneListFiltered={phoneListFiltered}
                setPhoneList={setPhoneList}
                getPhones={getPhones}
                getPhone={getPhone}
                addPhone={addPhone}
                deletePhone={deletePhone}
                editPhone={editPhone}
                setPhoneListFiltered={setPhoneListFiltered}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

export { ContextProvider, withContext };

/// Soluccionar: Si se cierra la app no tiene que perder los que ya se han descargado
