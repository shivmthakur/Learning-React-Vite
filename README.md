# Learning React From Anil Sidhu

## What is the difference between adding a callback ( arrow function ) and normal function in the events

Normal function call in the events defines the invokation of the function itself, but the callback defines the function defintions.

## How to Upgrade or Degrade the React Version

We need to update the package.json and delete node_modules from the react project in order to upgrade and degrade react version, basically it goes same for the dependencies as well as devDependencies.

## Toggle or Hide and Show in React

### Component used - ToggleButton.jsx and ToggleComponent.jsx

-  Define state
-  Update state on button click
-  Add condition for toggle
-  Hide and show component

## Multiple Conditional in React

### Component used - MultipleCondition.jsx

-  Define state and button
-  Change state value on button click
-  Apply Condition with state

## Props in React js

### Component used - Props.jsx

-  What is Props ?
  -  Whenever we need to pass data from one component to another component, in this case we use Props. Basically they are a type of parameter.
-  Make a component
-  Pass data between components
  -  Var, Object, array
-  Receive and Display Data
-  Pass data in component with click

## More About Props

### Component used - AdvanceProps.jsx

-  Default Props
-  Pass JSX with Props
-  Change style with Props

## Get Input Field Value

### Component used - InputField.jsx

-  Make input field
-  Define State
-  Get Input Field Value in State
-  Display value
-  Clear Input Field Value

## Controlled Component

### Component used - ControlledComponent.jsx

-  What is Controlled component

  -  A controlled component is a form whose input field value is controlled by React's state.

  -  Here's how it works:

    -  Store input field value in State
    -  Use Change handler with input field
    -  Value attribute attached with State

  -  Benefits

    -  Single source of Truth
      -  One Input Field's value is attached to only a single state.

    -  Validation and Manipulation Before Submit
      -  Since we apply state over onChange over input field, we can validate the value within that event only and not after only clicking Submit button

    -  Dynamic Update Values
      -  A State which is binded to a input field, so if that state has been changed from any other/outside source, that updated/new value will get reflected to input field too.

-  How to identify this is a Controlled component
-  Error if we don't use controlled value property.
-  Make Form get input field values.
-  Display Input Field values.

## Handle Checkbox

### Component used - HandleCheckbox.jsx

-  Make checkbox
-  Define state for checkbox
-  Get checkbox value in State
-  Remove checkbox value in State

## Handle Radio and Dropdown

### Component used - HandleRadioDropdown.jsx

-  Make Radio buttons
-  Get Radio button value in state
-  Default selection of Radio button
-  Make Dropdown
-  Get Dropdown value in state
-  Default selection in dropdown

## Loop in JSX with Map Function

### Component used - Loop.jsx

-  What is Array
-  Make Array
-  Make Table in JSX
-  Use map function for looping

## Reuse component in Loop

### Component used - Loop.jsx

-  Make Component
-  Apply Map for loop in JSX
-  Render Component in Loop
-  Pass data in component inside loop
-  Add Style

## React JS task from Props

### Component used - Clock.jsx

-  Make Clock Component
-  Where clock color can change with Props

## Nested Looping

### Component used = NestedLooping.jsx

-  Understand array structure for nested looping
-  Make outer loop
-  Make inner loop
-  Make component for outer loop
-  Make component for inner loop

## Hooks in React.js

### HookInReact.jsx

-  What are hooks
  -  In Old React Version, we were using class base component
  -  Now class based component are not much used in React.
  -  So to achieve State, life cycle, other feature in functional component we use hooks
-  Why we need hooks
-  History of hooks
-  Some hooks name
-  how to identify hooks

## useEffect Hooks

### Component used - UseEffect.jsx + UseEffectProps.jsx

-  What is use of useEffect

  -  Remove side effect inside component
    -  inside component comes via state

    -  Basic use of useEffect Example:
      -  Prevent Extra rendering of component on state
      -  Very important for interview

  -  Remove side effect from outside component
    -  outside component comes via props

    -  Make Component
    -  Pass Component
    -  Apply useEffect to handle side efforts
    -  How to pass props as dependency in useEffect.

  -  use to fetch data
  -  can use as life cycle methods

    -  React Life Cycle Methods

      -  Mounting ( when the component is visible on UI - just born )
      -  Updating ( when the component is updated - it grows )
      -  Unmounting ( when the component is disapper from the UI)

      ```javascript
      useEffect(() => {
        // This code will run on mount
      }, [])

      useEffect(() => {
        // This code will run on update
      }, [state1 or props])

      useEffect(() => {
        return () => {
          // This code will run on unmount
        };
      }, [])

      useEffect(() => {
        // This code will run on every life cycle event
      });
      ```

  -  can use for DOM manipulation
  -  Much more

    -  Syntax of useEffect
      ```javascript
      <!-- useEffect(pass function as parameter, dependency) -->
      useEffect(() => {
        // Write your code
      }, [state or props])
      ```

    -  Handling dependency
      ```javascript
      useEffect(() => {
        // call every time
      })

      useEffect(() => {
        // call only once
      }, []);

      useEffect(() => {
        // call on changing single state
      }, [state1])

      useEffect(() => {
        // call on changing both state
      }, [state1, state2])

      useEffect(() => {
        // call on changes prop
      }, [prop1, prop2])
      ```

-  What example we will take in this part
-  Syntax of useEffect
-  Use Effect with state
-  Use Effect with props

## Styling React Using CSS

### Component used - LearnStyle.jsx, LearnExternalStyle.jsx, LearnCSSModule.jsx, LearnStyledComponent.jsx

-  How many type of Style we have in React.js ?

  -  Inline Style

    -  Implementation:

      -  Use the style attribute directly on your elements.
      -  Bit different from basic css.

    -  How React inline style is different from regular inline style
    -  Example with style of A User Profile card
      -  Write HTML code
      -  And inline style
    -  Use JS object for style
    -  Make multiple cards for user profile

  -  External Style
    -  Make separate file from css
     - And import to components

  -  CSS Modules

    -  Implementation:

      -  Similar to external CSS files.
      -  But ensures that styles are locally scoped to a specifc component.

    -  Why need CSS Module
    -  Make css module file
    -  Write module css
    -  Import css in component

  -  Styled Components

    -  Implementation

      -  In React, styled-components is a library that allows you to write CSS directly within your Javascript components.
      -  This approach is known as CSS-in-JS

    -  What is Styled Component
    -  Install styled component package
    -  Import and Apply Styled Component
    -  Write style with styled component

  -  External CSS Library/Framework
    -  Material-UI
    -  React Bootstrap
    -  Tailwind CSS etc


## UseRef Hook in React

### Component used - LearnUseRef.jsx

-  What is useRef hook ?
-  Learn how to use useRef
-  Control input field with useRef.
-  Hide and show input field with useRef.

## Uncontrolled Component

### Component used - LearnUncontrolledComponent.jsx

-  What is Uncontrolled component ?
-  Make Uncontrolled component with query selector.
-  Make Uncontrolled component with useRef.

## Pass Function in Component as Props

### Component used - LearnFunctionalProps.jsx

-  Why we need to pass function as props.
-  Make parent andd child component.
-  Call function from parent to child component.
-  Passing event!, there is no such things.

## ForwardRef in React

### Component used - LearnForwardRef.jsx

-  What is ForwardRef in React js
-  Implement ForwardRef before react 19 version
-  Implement ForwardRef in react 19

## useFormStatus Hook in React js

### Component used - LearnUseFormStatus.jsx

-  What is useFormStatus
-  Example
  -  Make form
  -  Handle submit form

## useTransition Hook in React js

### Component used - LearnUseTransition.jsx

-  What is useTransition
-  Example
  -  Make button and apply logic
  -  Apply useTransition

## Keep you Components Pure in React js

### Component used - LearnPureComponent.jsx

-  What is pure function js
-  What is pure component
-  Example of impure component(avoid)
-  Example of pure component

## Derived State in React js

### Component used - LearnDerivedState.jsx

-  What is derived state
  -  State that is calculated or derived from other state vlaues or props within your component.
  -  Derived state can be variable.
  -  No need to extra state only variables or constants are enough.
-  Understand derived state with example
-  How it improve performance

## Lifting State Up in React js

### Component used - LearnLiftingStateUp.jsx

-  What is Lifting State Up
-  Make two component
-  Share data between two component

## Updating Objects in State in React js

### Component used - LearnUpdatingObjectsInState.jsx

-  Make Object in state
-  Display Object values.
-  Update object key.
-  Update nested object key.

## Updating Array in State in React js

### Component used - LearnUpdatingArrayInState.jsx

-  Make Array in state
-  Display Array Data on UI
-  Update Array data.
-  Update object of array.

## useActionState Hook in React js

### Component used - LearnUseActionState.jsx

-  What is the use of useActionState Hook
  -  Used to handle form in React js
  -  It updates state based on the result of a form action
-  Make input form
-  Example of useActionState Hook

## useId Hook in React js

### Component used - LearnUseId.jsx

-  What is useId Hook
-  How to use it
-  Example

## Fragment in React js

### Component used - LearnFragment.jsx

-  What is Fragment
-  Issues without fragment
-  Example

## Rules for React js Hooks

### Component used - LearnHookRules.jsx

-  ***Rules for Hooks***

  -  Start with use_______
    -  useState
    -  useEffect
    -  useContext
    -  useRef

  -  Use Hooks at Top Level

```javascript
export default function App() {
  const [user, setUser] = useState(); // correct
  if (condition) {
    const [data,setData] = useState(); // not correct
  }

  return (
    <div>
      <h1>Hook Rules in React js</h1>
    </div>
  );
}
```
  -  Don't:
    -  Do not call Hooks inside conditions or loops.
    -  Do not call Hooks after a conditional return statement.
    -  Do not call Hooks in class components.
    -  Do not call Hooks inside try/catch/finally blocks.
    -  Do not call Hooks in event handlers.

  -  Do's:
    -  Don't call Hooks from regular Javascript Fns(), instead you can:
      -  Call Hooks from React function components.
      -  Call Hooks from custom Hooks.

  -  Hooks variables shouldn't contradict with any inbuild name convection

```javascript
function FriendList() { // correct way
  const [onlineStatus, setOnlineStatus] = useOnlineStatus();
}

function setOnlineStatus() { // Not a component or custom Hook
  const [onlineStatus, setOnlineStatus] = useOnlineStatus();
}
```

  -  Notes

    -  ***Custom Hooks*** may call other Hooks (that's their whole purpose). This works because custom Hooks are also supposed to only be called while a function component is rendering.
  
## Make Custom Hook in React js

### Component used - LearnCustomHook.jsx

-  What are custom Hook
-  Make custom hook for toggle UI

## Context API in React js

### Component used - LearnContextAPI.jsx

-  What is Context API
-  How to work
  -  createContext - To initiate context api.
  -  Provider - use for udpate or provide data.
  -  useContext - get data from context api.
-  Example
-  Update data with context api.

##  React Router 7 in React js

### Component used - LearnReactRouter.jsx

-  What is React router
-  Install react router 7
-  Test react router

##  Basic Pages with React Router in React js

### Component used - LearnReactRouter.jsx

-  What is BrowserRouter

  -  This components enables client-side routing using the browser's history API

-  What is Routes

  -  It's responsible for rendering the appropriate component based on the current URL

-  What is Route

  -  Each Route component defines a path and the corresponding component to render when the path is matched.

-  What is Link

  -  A link for navigate from 1 page to other page

-  Make basic Pages
-  Make Different file for links


##  Header with React Router in React js

### Component used - LearnReactRouter.jsx
 
-  Write HTML for header
-  Add links in header
-  Write CSS for header

##  Nested Navigation with React Router in React js

### Component used - LearnReactRouter.jsx
 
-  What is Nested Navigation
-  Make some pages for Nested navigation
-  Make routes for Nested Navigation

##  Layout and Index Routes with React Router in React js

### Component used - LearnReactRouter.jsx
 
-  What is Layout Routes
-  Example of Layout Routes
-  Index Routes
-  Examples of Index Routes