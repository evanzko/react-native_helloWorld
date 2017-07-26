import {observable, action } from 'mobx';
import { Alert } from 'react-native';

class LoginStore {
    @observable credentials = [];
    @observable token;
    @observable loading = true;
    @observable dataSource;
    @observable userInfo;

    @action getCred(){
        return this.credentials;
    }
    
    @action setCred(item){
        this.credentials = item
    }

    @action getToken(){
        return this.token;
    }
    @action getToken(){
        return this.userInfo;
    }

    @action getItems(){
        return fetch('https://demo.cashvue.com/api/v1.0/login',{
            method: 'POST',
            body: JSON.stringify(
                {email: this.credentials[0], password: this.credentials[1]}
            )
            })
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.isLoading = false;
                this.dataSource = ds.cloneWithRows(responseJson.user);
                this.token = responseJson.token;
                this.userInfo = responseJson.user;
            })
            .catch((error) => {
                Alert.alert('Connection error', 'Couldn\'t fetch the data.');
            })
    }

    @action getData(){
        return this.dataSource;
    }

}

const loginStore = new LoginStore()
export default loginStore