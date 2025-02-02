```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: runs only once after mount
    console.log('Component mounted!');
  }, []);

  return <div>Count: {count}</div>;
}
```