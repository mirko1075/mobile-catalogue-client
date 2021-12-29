import React from 'react';
import apiService from "./../service/ApiService";
const { Consumer, Provider } = React.createContext({});

class ContextProvider extends React.Component {
	state = {
		phoneList:[]
	};

    getPhones= async () => {
        try {
           const result = await apiService.getPhones();
           console.log('result from getPhones Context :>> ', result);
           if (result.status===200) {
            this.setState({ phoneList: result.data });
            return result;  
          }
       
        } catch (error) {
            console.log('error from getPhones Context :>> ', error);
        }
      };

    addPhone = async (phoneObj) => {
        try {
            const result = await apiService.addPhone(phoneObj)
            console.log('result from addPhone Context :>> ', result);
            await this.getPhones()
        } catch (error) {
            console.log('error :>> ', error);
        }
      };
    
      editPhone = async (phoneObj) => {
          try {
            const result = await apiService.editPhone(phoneObj);
            console.log('result from editPhone Context :>> ', result);
            await this.getPhones()
          } catch (error) {
              console.log('error :>> ', error);
          }

      };
    
      deletePhone = async (id) => {
        try {
            const result = await apiService.deletePhone(id);
            console.log('result from deletePhone Context:>> ', result);
            await this.getPhones()
          } catch (error) {
              console.log('error :>> ', error);
          }
      };


	render() {
		const {
			phoneList
		} = this.state;
		const {
			getPhones,
            addPhone,
            deletePhone,
            editPhone
		} = this;

		return (
			<Provider
				value={{
                    phoneList,
                    getPhones,
                    addPhone,
                    deletePhone,
                    editPhone,
				}}>
				{this.props.children}
			</Provider>
		);
	}
}

const withContext = (WrappedComponent) => {
	return class extends React.Component {
		render() {
			return (
				<Consumer>
					{(value) => {
						const {
                            phoneList,
                            getPhones,
                            addPhone,
                            deletePhone,
                            editPhone,
						} = value;
						return (
							<WrappedComponent
								{...this.props}
                                phoneList={phoneList}
                                getPhones={getPhones}
                                addPhone={addPhone}
                                deletePhone={deletePhone}
                                editPhone={editPhone}
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
