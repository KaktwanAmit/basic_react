import {createStore} from 'redux';

const reducer = function(state,action){
if(action.type==="INC"){
	return state+action.paylod;
}else if(action.type==="DEC"){
	return state-action.paylod;
}
return state;
}

const store =createStore(reducer,0);

store.subscribe(()=>{
	console.log('state changed',store.getState())
});

store.dispatch({type:"INC",paylod:1});
store.dispatch({type:"INC",paylod:10});
store.dispatch({type:"INC",paylod:100});
store.dispatch({type:"DEC",paylod:200});