module State = {
  type t = {
    newInputValue: string,
    todos: array<Todo.t>,
  }

  type actions = Add | Delete(Todo.todoId) | ToggleDone(Todo.todoId) | InputUpdated(string)

  let initialState = {
    newInputValue: "",
    todos: [],
  }

  let reducer = (state, action): t => {
    switch action {
    | Add => {
        newInputValue: "",
        todos: [...state.todos, Todo.make(~label=state.newInputValue)],
      }
    | Delete(_) => failwith("TODO")
    | ToggleDone(_) => {
      ...state,
      todos: state.todos->Array.map(todo => {
        if todo.id != id{
          todo
        } else {...todo, done: !todo.done}
        }
      )
    }
    | InputUpdated(newValue) => {
        ...state,
        newInputValue: newValue,
      }
    }
  }
}

@react.component
let make = () => {
  let (state, dispatch) = React.useReducer(State.reducer, State.initialState)
  <div className="p-6">
    <h1 className="text-3xl font-semibold"> {"TD"->React.string} </h1>
    <input
      value=state.newInputValue
      onChange={e => {
        // let newValue = ReactEvent.Form.currentTarget(e)["value"]
        // dispatch(InputUpdated(newValue))
        ReactEvent.Form.currentTarget(e)["value"]->InputUpdated->dispatch
      }}
      style={{border: "1px solid #ccc"}}
    />
    <Button onClick={_ => dispatch(Add)}> {React.string(`ADD TD`)} </Button>
    {state.todos
    ->Array.map(todo => {
      <div role="button" onClick={_ => dispatch(ToggleDone(todo.id))}>
        {React.string(todo.label)}
      </div>
    })
    ->React.array}
  </div>
}
