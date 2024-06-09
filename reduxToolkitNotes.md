In redux we have 3 main things 

1 store -which is like a global variable or single source of truth from which we are going to take everything

2 reducerss-it is a object which controls functionality of mini stores which are within store

3 useDispatch -it is use to dispatch the things (cheeze bhejni hai toh) --it is part of react-redux

3 useSelctor - it is use to select the things from store (jab cheeze select krni hai store se toh aur lani ho to)--it is part of react-redux

    Dispatch reducer ko use krte hue store me changes krta hai

when we call function inside dispatch pass the value as it is in form of state/whatever instead of action.payload

Steps
===============================================
1.import configureStore from @redux/toolkit

2.crete initialState which is having object

3.now create reducers/slices using createSlice it will have main 3 properties 

        1.name
        2.Initial state
        3.reducers:{
            properties:function();
            eg.
            addtodo:(state,action)=>{}.
            removetodo:()=>{},
        }

Unlike to context API we have to define the function 

state will provide the current state of initialState (which will later going to update)

suppose we need id for removeTodo then it will come from action 

export these functionality such as addtodo so that we can use them in component

        export const {addTodo,removeTodo}=TodoSlice.actions

as many reducers we create we have to inform them to store otherwise it wont maintain state