# NavLink

This component is a modified implementation of `NavLink` from [react-router-dom](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/NavLink.js). It's designed to work with both React Router and Help Scout's Backbone/Marionette routing system.

## Example

```jsx
<NavLink to="/home">Home</NavLink>
```

### Render Prop

This component has been enhanced from `react-router-dom`'s NavLink with a `render` prop. This render prop allows you to render custom content with access to the `isActive` prop.

```jsx
<NavLink
  to="/home"
  render={({ isActive }) => (
    <span style={{ fontWeight: isActive ? 'bold' : '' }}>Home</span>
  )}
/>
```

## Props

| Prop            | Type       | Default            | Description                                  |
| --------------- | ---------- | ------------------ | -------------------------------------------- |
| activeClassName | `string`   | `active is-active` | The active className of the component.       |
| activeStyle     | `Object`   |                    | Inline styles to apply, if active.           |
| aria-current    | `string`   |                    | Aria tag to apply, if active.                |
| className       | `string`   |                    | The className of the component.              |
| exact           | `boolean`  | `false`            | Determines the exact route match.            |
| path            | `Object`   |                    | The route path.                              |
| location        | `Object`   |                    | The router location.                         |
| isActive        | `Function` |                    | Determines the active state, if defined.     |
| render          | `Function` |                    | Render prop. Receives `({ isActive })` prop. |
| strict          | `boolean`  | `false`            | Determines a strict route match.             |

For additional props, [check out `Link`](../Link).
