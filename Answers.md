# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JS library that allows us to be more efficient with our use of resources through its virtual dom. React allows to reload specific elements as they change rather than reloading the whole page. React allows allows us to use JSX which is pretty similar to writing HTML rather than creating them the vanilla javascript way. It also gives us access to state and effects hooks and reacts when they change, updating the DOM to reflect those changes

1. What does it mean to think in react?
Thinking in react means to understand the way that react interacts with the dom as well as the way that react change what we can do with javascript
1. Describe state.
State is the condition of a stored value. In react data is set in state with a state hook which creates a variable to hold the state and a function to change the state. 
1. Describe props.
Props are attributes that are passed down from a parent element to its children.
1. What are side effects, and how do you sync effects in a React component to state or prop changes?
Side effects are any effects of a function that are not part of the return statement. In react syncing effect in a component to state or prop changes is done using the effect hook. THe effect hook can be set to wait until something held in state is changed and then refresh the page to reflect the change in the value of the data held in state.