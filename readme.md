Given a click event, returns true if it's a left-click that you should intercept to trigger pushState navigation.

Taken from React Router's [Link](https://github.com/ReactTraining/react-router/blob/75854190361f6800788bddfc76d15f8624ef9d89/packages/react-router-dom/modules/Link.js#L45-L48) component.

```js
const shouldInterceptClick = require('click-should-be-intercepted-for-navigation')

function onClick(event) {
	if (shouldInterceptClick(event)) {
		// do your pushState-based navigation here
	}
}
```
