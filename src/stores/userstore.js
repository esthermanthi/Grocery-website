import {extendObservable} from 'mobx';

/**
 * userstore
 */

 class userstore{
     constructor(){
         extendObservable(this,{
             loading:true,
             isloggedIn:false,
             username:''
         })
     }
 }

 export default new userstore();