# Styled Components Naive 

| Run | Milliseconds
| 1   | 380.5
| 2   | 368.4
| 3   | 554.3
| avg | 434.4

Running this gave me the following warning, so I followed these instructions and converted to using the attrs method to apply the width

```
StyledComponent.js:271 Over 200 classes were generated for component styled.div with the id of "sc-bdfBQB".
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))`width: 100%;`

  <Component />
```

# Styled Components With Attr Method

| Run | Milliseconds
| 1   | 165.5
| 2   | 309.8
| 3   | 221.1
| avg | 232.1

# Styled Components Without Width
| Run | Milliseconds
| 1   | 173.1
| 2   | 260.7
| 3   | 286.8
| avg | 240.2
# Inlines Styles
| Run | Milliseconds
| 1   | 95.7
| 2   | 85.1
| 3   | 119
| avg | 100

# Control
| Run | Milliseconds
| 1   | 108.8
| 2   | 57.7
| 3   | 76.3
| avg | 80.9