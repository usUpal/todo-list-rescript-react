// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Todo from "./Todo.res.mjs";
import * as React from "react";
import * as Button from "./Button.res.mjs";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as PervasivesU from "rescript/lib/es6/pervasivesU.js";
import * as JsxRuntime from "react/jsx-runtime";

var initialState_todos = [];

var initialState = {
  newInputValue: "",
  todos: initialState_todos
};

function reducer(state, action) {
  if (typeof action !== "object") {
    return {
            newInputValue: "",
            todos: Belt_Array.concatMany([
                  state.todos,
                  [Todo.make(state.newInputValue)]
                ])
          };
  }
  switch (action.TAG) {
    case "Delete" :
        return PervasivesU.failwith("TODO");
    case "ToggleDone" :
        return {
                newInputValue: state.newInputValue,
                todos: state.todos
              };
    case "InputUpdated" :
        return {
                newInputValue: action._0,
                todos: state.todos
              };
    
  }
}

function App(props) {
  var match = React.useReducer(reducer, initialState);
  var dispatch = match[1];
  var state = match[0];
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx("h1", {
                      children: "TD",
                      className: "text-3xl font-semibold"
                    }),
                JsxRuntime.jsx("input", {
                      style: {
                        border: "1px solid #ccc"
                      },
                      value: state.newInputValue,
                      onChange: (function (e) {
                          dispatch({
                                TAG: "InputUpdated",
                                _0: e.currentTarget.value
                              });
                        })
                    }),
                JsxRuntime.jsx(Button.make, {
                      children: "ADD TD",
                      onClick: (function (param) {
                          dispatch("Add");
                        })
                    }),
                state.todos.map(function (todo) {
                      return JsxRuntime.jsx("div", {
                                  children: todo.label,
                                  role: "button",
                                  onClick: (function (param) {
                                      dispatch({
                                            TAG: "ToggleDone",
                                            _0: todo.id
                                          });
                                    })
                                });
                    })
              ],
              className: "p-6"
            });
}

var make = App;

export {
  make ,
}
/* react Not a pure module */
