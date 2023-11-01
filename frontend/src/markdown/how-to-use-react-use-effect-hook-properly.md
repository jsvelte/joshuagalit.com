---
title: 'How to Use React `useEffect` Hook Properly'
publishedAt: 'Nov. 01, 2023'
summary: "React's `useEffect` hook is a powerful tool that allows you to perform side effects in functional components. Whether you need to fetch data, subscribe to events, or manually change the DOM, `useEffect` can handle it all. However, understanding its nuances is crucial to avoid common pitfalls. In this article, we'll explore how to use the `useEffect` hook properly and efficiently."
socialImage: /images/blog/4.png
tags:
  - react.js
  - useEffect
  - hooks
---

# How to Use React `useEffect` Hook Properly

![JoshuaGalit](/images/blog/4.png)
React's `useEffect` hook is a powerful tool that allows you to perform side effects in functional components. Whether you need to fetch data, subscribe to events, or manually change the DOM, `useEffect` can handle it all. However, understanding its nuances is crucial to avoid common pitfalls. In this article, we'll explore how to use the `useEffect` hook properly and efficiently.

## Understanding the Basics

The `useEffect` hook takes two arguments: a function containing the code you want to run, and an array of dependencies. The function is the effect itself, and it will run after every render. The array of dependencies is optional and specifies values that the effect depends on. If any of the dependencies change between renders, the effect will re-run.

## Example 1: Fetching Data

Here's an example of using `useEffect` to fetch data from an API when the component mounts:

```jsx
import React, { useState, useEffect } from 'react'

function DataFetchingComponent() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data')
      const result = await response.json()
      setData(result)
    }

    fetchData()
  }, []) // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        'Loading...'
      )}
    </div>
  )
}
```

In this example, the effect runs only once after the initial render, thanks to the empty dependency array. If you omit the dependency array, the effect will run after every render, which may lead to performance issues.

## Example 2: Cleaning Up Effects

Sometimes, effects need to clean up after themselves, such as unsubscribing from events or canceling API requests. You can return a cleanup function from the effect to handle these scenarios:

```jsx
import React, { useEffect } from 'react'

function EventListenerComponent() {
  useEffect(() => {
    const handleResize = () => {
      console.log('Window resized!')
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array means this effect runs once after the initial render

  return <div>Resize your window to see the effect!</div>
}
```

In this example, the effect adds an event listener for the resize event and removes it when the component is unmounted or when the effect dependencies change.

## Conclusion

useEffect is a fundamental part of React functional components, enabling them to interact with the outside world. By understanding how to use it properly, you can ensure your components are efficient, clean, and easy to maintain.

Remember:

- Always provide the appropriate dependencies in the dependency array to control when the effect runs.
- Return a cleanup function if the effect needs to clean up after itself.

---

Happy coding!
