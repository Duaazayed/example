//Example of single state tree:
 const statee ={
 todos:[]
};


//Example of Actions:
const action ={
type:'ADD_AODO',
payload:{
label:'at pizza',
complete: false
}
};

//Example of Reducers:
function reducer(state,action){
switch(action.type){
case 'ADD_TODO':{
const todo = action.payload;
const todos = [state.todos, todo];
return {todos};
}
}
return state;
}
//Inside State:
const state ={
todos:[
{ label:'Eat pizza', complete: false }
]
};

//Mutable by design example:

const character={name:'duaa'};
character.role = 'Programmer';
//{name:’duaa’, role:’programmer’};
console.log(character);

//Example of immutable by design:

const namee='duaa';
const uppercaseName=namee.toUpperCase();
//’duaa’, ‘DUAA’
console.log(name, uppercaseName);

//Example of immutable operations object:

const character ={name: 'duaa'};
const updateCharacter ={character,role: 'programmer'}
Console.log(character); //result will be name: ‘duaa’
Console.log(updateCharacter); //result will be name:’duaa’, role:’programmer’}


