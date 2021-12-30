import React from "react";
import apiService from "./../service/ApiService";
const { Consumer, Provider } = React.createContext({});

class ContextProvider extends React.Component {
  state = {
    phoneList: [],
    phoneListFiltered: [],
    keyToReRender: 0
  };

  setKeyToReRender = () =>{
    this.setState({ keyToReRender: this.state.keyToReRender+1-1 });
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
        this.setState({ phoneList: result.data, phoneListFiltered: result.data, });
        return result;
      }
    } catch (error) {
      console.log("error from getPhones Context :>> ", error);
    }
  };

  addPhone = async phoneObj => {
    try {
      const result = await apiService.addPhone(phoneObj);
      await this.getPhones();
      return result;
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  editPhone = async phoneObj => {
    try {
      const result = await apiService.editPhone(phoneObj);
      await this.getPhones();
      return result;
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  deletePhone = async id => {
    try {
      const result = await apiService.deletePhone(id);
      await this.getPhones();
      return result
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  render() {
    const { phoneList, phoneListFiltered ,keyToReRender} = this.state;
    const {
      setPhoneList,
      getPhones,
      addPhone,
      deletePhone,
      editPhone,
      setPhoneListFiltered,
      setKeyToReRender
    } = this;

    return (
      <Provider
        value={{
          phoneList,
          phoneListFiltered,
          keyToReRender,
          setPhoneList,
          getPhones,
          addPhone,
          deletePhone,
          editPhone,
          setPhoneListFiltered,
          setKeyToReRender
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
              keyToReRender,
              phoneListFiltered,
              setPhoneList,
              getPhones,
              addPhone,
              deletePhone,
              editPhone,
              setPhoneListFiltered,
              setKeyToReRender
            } = value;
            return (
              <WrappedComponent
                {...this.props}
                phoneList={phoneList}
                keyToReRender={keyToReRender}
                phoneListFiltered={phoneListFiltered}
                setPhoneList={setPhoneList}
                getPhones={getPhones}
                addPhone={addPhone}
                deletePhone={deletePhone}
                editPhone={editPhone}
                setPhoneListFiltered={setPhoneListFiltered}
                setKeyToReRender={setKeyToReRender}
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
