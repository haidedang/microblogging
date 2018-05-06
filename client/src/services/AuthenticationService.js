import Api from '@/services/Api';
import $ from 'jquery';

let challenge = null;
let signature = null;

export default {
    login() {
        asyncLogin().then((result) => {
            $.get('http://localhost:8081/auth/' + challenge[1].value + '/' + result, (res) => {
                if (res === web3.eth.accounts[0]) {
                    console.log("success")
                } else {
                    console.log("fail");
                }
            })
        })
    }
}

function asyncLogin() {
    return new Promise((resolve, reject) => {
        console.log("Login");
        $.get('http://localhost:8081/login/' + web3.eth.accounts[0], (data) => {
            console.log(data);
            challenge = data;
            const from = web3.eth.accounts[0];

            const params = [challenge, from];
            const method = 'eth_signTypedData';

            web3.currentProvider.sendAsync({
                method,
                params,
                from
            }, async (err, result) => {
                signature = result.result;

                if (err) {
                    return console.error(err);
                }
                if (result.error) {
                    return console.error(result.error);
                }
                resolve(signature);

            });
        });
    })
}






