# Q&A
## What is NPM?
NPM (Node Package Manager) is a package manager for JavaScript, primarily used to install and manage dependencies in Node.js projects. It provides a large repository of JavaScript packages, enabling developers to share and reuse code easily. NPM also offers version control and dependency management, simplifying the development process for JavaScript applications.

### What is SPA?
SPA stands for Single Page Application. It is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. This approach avoids interruption of the user experience between successive pages, making the application behave more like a desktop application.

In an SPA, all necessary HTML, JavaScript, and CSS code is either retrieved by the browser with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions. The page does not reload at any point in the process, nor does control transfer to another page. AJAX (Asynchronous JavaScript and XML) is commonly used for this purpose.

#### Key Characteristics of SPAs:
1. **User Experience**: Provides a more fluid, faster experience as users interact with the application.
2. **Client-Side Processing**: Much of the processing is done on the client side, reducing server load.
3. **JavaScript Frameworks**: Often built using JavaScript frameworks like Angular, React, or Vue.js.
4. **SEO Challenges**: Initially, SPAs faced challenges with search engine optimization (SEO), though this has improved with modern technologies and practices.
5. **Use Case**: Ideal for applications where a significant part of the user interaction occurs on a single page.

## What is the Event Loop?
The event loop is a fundamental concept in asynchronous programming, especially in environments like Node.js and web browsers that use JavaScript. It is a design pattern that enables handling of asynchronous operations (like I/O, timers, or event handling) in a single-threaded environment.

#### Key Points:
- **Single-Threaded**: JavaScript runs in a single-threaded environment, which means it can execute only one command at a time.
- **Non-Blocking**: The event loop allows JavaScript to perform non-blocking operations, meaning the system can process other tasks while waiting for asynchronous operations to complete.
- **Event Queue**: Asynchronous callbacks are queued in an event queue. When the call stack is empty (i.e., all synchronous code has completed execution), the event loop transfers the oldest event from the queue to the call stack.
- **Loop Continuity**: This process continues in a loop, hence the name 'event loop', allowing JavaScript to handle multiple asynchronous operations by executing their callbacks when they are completed.

#### Example in Node.js or Browsers:
In a Node.js or browser environment, when an asynchronous function (like a timer, HTTP request, or user input event) is executed, it is processed outside the main thread. Once the operation is complete, its callback function is added to the event queue. The event loop continuously checks if the main thread (call stack) is empty and then moves the callback from the event queue to the call stack for execution.

This mechanism ensures that JavaScript, despite being single-threaded, can handle concurrent operations effectively, making it suitable for building scalable and responsive applications.

# What is the difference between export x and export default x? How do you import them differently?
In JavaScript, particularly in ES6 (ECMAScript 2015) and later versions, the export and export default syntaxes are used to export modules. They have some differences in how they're used and how the corresponding imports work.

### 1. export
- This syntax is used to export one or multiple named entities (like functions, classes, or variables) from a module.
- You can have multiple named exports in a single module.
- When importing, you need to use the same names and wrap them in curly braces.

#### Exporting:
```javascript
// In a module file, say module.js
export const x = 1;
export function foo() { ... }
```

### Importing:
```javascript
import { x, foo } from './module.js';
```

### 2. export default:
- This is used to export a single entity from a module, which is considered the "default" export.
- Each module can have only one default export.
- When importing a default export, you can use any name for it, and you don't need to use curly braces.

#### Exporting:
```javascript
// In a module file, say module.js
const x = 1;
export default x;
```

#### Importing:
```javascript
import anyNameYouWant from './module.js';
```
Here, `anyNameYouWant`is a name you decide, and it refers to the default export from `module.js`.

### 3. Combining Named and Default Exports:
It's possible to have both named and default exports in the same module. For example:

#### Exporting:
```javascript
// In a module file, say module.js
export const y = 2;
export default function foo() { ... }
```

#### Importing:
```javascript
import anyName, { y } from './module.js';
```
Here, anyName refers to the default export (the function foo), and { y } is a named import.

## Why do you use className as a property in React and not class?
In React, you use `className` instead of `class` for specifying CSS classes for DOM elements due to the way React integrates with the underlying JavaScript and the DOM. The primary reasons are:

**JSX is JavaScript**: JSX, the syntax used in React to describe the UI, closely resembles HTML but is actually JavaScript. In JavaScript, `class` is a reserved keyword used for class declarations (introduced in ES6). To avoid conflicts with the JavaScript `class` keyword, React elements use `className`.

**Consistency with the DOM API**: In the DOM API, the HTML attribute `class` is accessed through `className` in JavaScript. For instance, if you have a DOM element in vanilla JavaScript, you would set its class using `element.className = 'my-class'`. React's use of `className` follows this convention.

Here's an example of using `className` in a React component:

```jsx
function MyComponent() {
  return <div className="myClass">Hello, world!</div>;
}
```
In this example, className="myClass" is equivalent to setting the class attribute in HTML, but it adheres to the JavaScript and JSX conventions that React is based on.

## Why should you not write the following? What will happen?
```jsx
<button onClick={setCounter(counter + 1)}> +1 </button>
```
The reason this is problematic is because it doesn't pass a function to the onClick prop, but rather the result of calling setCounter(counter + 1). This results in several issues:

- **Immediate Invocation**: The expression setCounter(counter + 1) is executed immediately when the component renders, not when the button is clicked. This causes the counter state to update every time the component re-renders, leading to an infinite loop and performance issues.

- **Event Handling Convention**: In React, event handlers like onClick should be given a function that is called when the event occurs. In this case, you should pass a function that will be executed when the button is clicked, not the result of a function call.

The correct approach is to define an event handler function or pass an inline arrow function, like this:
```jsx
<button onClick={() => setCounter(counter + 1)}> +1 </button>
```
or
```jsx
function incrementCounter() {
  setCounter(counter + 1);
}

<button onClick={incrementCounter}> +1 </button>
```
In these corrected versions, the onClick prop receives a function that will be called when the button is clicked, and setCounter(counter + 1) will only be executed within that function, preventing any unintended immediate invocation and infinite loops.

## What is object deconstruction and how is it connected to React components (example)?
Object destructuring (often mistakenly called "deconstruction") is a convenient feature in JavaScript that allows you to unpack values from arrays, or properties from objects, into distinct variables. It's a part of ES6 (ECMAScript 2015) syntax and is widely used in React for several reasons, including readability and convenience.

### How it's Connected to React Components
In React, object destructuring is commonly used in component functions to extract values from props, state, or context, making the code cleaner and more readable. Instead of repeatedly accessing a property on an object, you can extract the keys of an object into variables. This is particularly useful when you have a component that receives several props.

### Example
Consider a `UserProfile` component that receives a `user` object as a prop:
```jsx
function UserProfile(props) {
  const user = props.user;
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}
```
With object destructuring, you can simplify the component:
```jsx
function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}
```
Even further, you can destructure the user object properties:
```jsx
function UserProfile({ user: { name, email, age } }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}
```
In this final form, the function's parameter directly destructures the user object, and inside the function, we can use name, email, and age directly. This makes the code more concise and easier to read, especially when dealing with multiple props or complex objects.

## How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?
In React, it appears as though HTML and JavaScript are mixed in the same function, particularly within React components. This is made possible by a syntax extension called JSX (JavaScript XML). Under the hood, JSX is transformed into regular JavaScript function calls and objects by a compiler (like Babel).

### What is JSX?
JSX is a syntax extension for JavaScript. It looks like HTML or XML, and it's used in React to describe what the UI should look like. JSX allows you to write HTML tags in the same file as JavaScript code, enabling a more intuitive way to create user interfaces in React.

### How JSX Works Under the Hood:
1. **Transformation**: When you write JSX in a React component, tools like Babel transform this JSX into standard JavaScript. Each HTML-like tag in JSX corresponds to a function call that creates a React element.

2. **React.createElement**: The JSX elements are transformed into `React.createElement()` calls. This function takes the type of the element (e.g., 'div', 'span', 'MyComponent'), props, and children, and returns a JavaScript object that represents the UI element.

3. **Virtual DOM**: The JavaScript objects created by `React.createElement()` represent elements in the React virtual DOM. The virtual DOM is a lightweight copy of the actual DOM, which React uses to optimize updates to the browser's DOM.

### Example:
Consider a simple JSX expression in a React component:
```jsx
const MyComponent = () => {
  return <div>Hello, world!</div>;
};
```
Under the hood, this gets transformed into something like:
```javascript
const MyComponent = () => {
  return React.createElement('div', null, 'Hello, world!');
};
```
This React.createElement function call creates an object that describes a DOM node. React then uses this description to update the actual DOM efficiently.

## What is async/await? Bring an example
`async` and `await` are keywords in JavaScript that enable cleaner and more readable syntax when working with asynchronous operations, particularly Promises. They were introduced in ES2017 (ECMAScript 8) to simplify writing asynchronous code by allowing you to write promise-based code as if it were synchronous.

### How `async` and `await` Work:
1. **The `async` Keyword**: When added in front of a function declaration or expression, it makes the function return a Promise. If the function returns a value that's not a Promise, it will be automatically wrapped in a Promise.

2. **The `await` Keyword**: It can only be used inside an `async` function. `await` pauses the execution of the `async` function until a Promise is settled (either resolved or rejected). The resolved value of the Promise is then returned by the `await` expression. This pausing happens without blocking the main execution thread.

### Example:
Here's an example of using `async` and `await` in a function that fetches data from an API:
```javascript
async function fetchData(url) {
  try {
    // The `await` keyword waits for the fetch call to resolve.
    const response = await fetch(url);

    // Check if the response is successful.
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Wait for the response body to be parsed as JSON.
    const data = await response.json();

    return data;
  } catch (error) {
    // Handle any errors that might occur during fetch or JSON parsing.
    console.error('Fetch Error:', error);
  }
}

const url = 'https://api.example.com/data';
fetchData(url).then(data => {
  console.log(data);
});
```
In this example, `fetchData` is an async function that uses `await` to pause execution until the `fetch` call and the `response.json()` method are resolved. This makes the code look and behave more like synchronous code, which is easier to read and understand compared to traditional promise chains or callback functions.

## What is a Promise? Bring an example
A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. Essentially, it's a placeholder for a value that is initially unknown, usually because the computation of its value is not yet complete.

### Characteristics of a Promise:
- **Asynchronous**: Promises are used to handle asynchronous operations. They provide a way to handle asynchronous results and errors.
- **States**: A promise can be in one of three states:
  - *Pending*: The initial state; the operation has not completed yet.
  - *Fulfilled*: The operation completed successfully, and the promise has a value.
  - *Rejected*: The operation failed, and the promise has a reason for the failure.
- **Immutable**: Once a promise is settled (either fulfilled or rejected), it cannot change its state or value.

### Creating a Promise:
A promise is created using the `Promise` constructor, which takes a function called the executor. This function is executed immediately by the Promise implementation and receives two functions as parameters, typically named `resolve` (to fulfill the promise) and `reject` (to reject the promise).

### Example:
Here's an example of creating and using a Promise:
```javascript
// Function that returns a promise
function getNumberAfterTwoSeconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = Math.floor(Math.random() * 100);
      resolve(number); // Fulfill the promise with the number
    }, 2000);
  });
}

// Using the promise
getNumberAfterTwoSeconds().then(number => {
  console.log('Received number:', number);
}).catch(error => {
  console.error('An error occurred:', error);
});
```
In this example, `getNumberAfterTwoSeconds` is a function that returns a promise. The promise waits for two seconds (simulating an asynchronous operation using `setTimeout`) and then fulfills with a random number. The then method is used to handle the value once the promise is fulfilled, and `catch` is used to handle any errors.
