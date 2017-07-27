import {observable, action } from 'mobx';
import { Alert, ListView } from 'react-native';

class LoginStore {
    @observable creds = { username : "", password: ""};
    @observable token;
    @observable loading = true;
    @observable userInfo;

    setCred(item){
        console.log(item);
        for(i = 0; i < item.length; i++){
            this.credentials.push(item[i]);
        }
        this.user = item[0];
        this.pass = item[1];
        console.log(this.credentials);
    }

    getItems(){
        console.log("user: ", this.user, "pass: ", this.pass);
        return fetch('https://demo.cashvue.com/api/v1.0/login',{
            method: 'POST',
            body: JSON.stringify(
                {email: this.user, password: this.pass}
            )
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.isLoading = false;
                this.token = responseJson.token;
                this.userInfo = responseJson.user;
                this.loading = false;
            })
            .catch((error) => {
                console.log(error);
                this.loading = false;
                Alert.alert('Connection error', 'Couldn\'t fetch the data.');
            })
    }

}

const loginStore = new LoginStore()
export default loginStore