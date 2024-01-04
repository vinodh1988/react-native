import { takeEvery, put,call} from 'redux-saga/effects';
import axios from 'axios';


export  function* rootSaga(){
    yield takeEvery("QUOTE_DO__ACTION",HandleQuote);
}

function quoteGiver() {
    return new Promise(function(resolve,reject){

        setTimeout(()=>resolve({data:{content:"Everything is for good", author:"Narehs"}}),2000)
    })
}

function getCaller(url:any){
    return quoteGiver()//axios.get(url);
}

function* HandleQuote():any{
    try {
    let response=yield call(getCaller,"https://api.quotable.io/random");
    console.log(response);
    yield put({type:'QUOTE_ACTION',data: response.data.content+" -"+response.data.author});
    }
    catch(e:any)
     {
        console.log("Error occured")
        console.log(e.toString())
    }
}