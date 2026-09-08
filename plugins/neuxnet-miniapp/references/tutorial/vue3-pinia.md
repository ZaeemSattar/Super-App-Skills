---
title: "State management Pinia"
source_url: https://miniapp.neuxnet.com/tutorial/vue3-pinia.html
---
#  State management Pinia

##  introduce

> Mini App has [Pinia](https://pinia.vuejs.org/) built in.

###  What is Pinia?

Pinia (pronounced `/piːnjʌ/`, like `peenya` in English) is a repository for Vue that allows you to share state across components, pages. On the server side as well as in small single page applications, you can also get a lot of benefits from using Pinia:

-   Development tool support
    -   Track timeline of actions, mutations
    -   Stores appear in the components that use them
    -   Time travel and easier debugging
-   Hot module replacement
    -   Modify your storage without reloading your pages
    -   Maintain any existing state during development
-   Proper TypeScript support or autocomplete for JS users

##  project structure

```
├── pages
├── static
└── stores
    └── counter.js
├── App.vue
├── main.js
├── manifest.json
├── pages.json
└── uni.scss
```

##  Basic example

Write the following code in `main.js`:

```
import { createSSRApp } from 'vue';
import * as Pinia from 'pinia';

export function createApp() {
	const app = createSSRApp(App);
	app.use(Pinia.createPinia());
	return {
		app,
	};
}
```

First create a store:

```
// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
	state: () => {
		return { count: 0 };
	},
	// state: () => ({ count: 0 })
	actions: {
		increment() {
			this.count++;
		},
	},
});
```

and then use it in the component:

```
import { useCounterStore } from '@/stores/counter';

export default {
	setup() {
		const counter = useCounterStore();

		counter.count++;
		// can be triggered manually
		counter.$patch({ count: counter.count + 1 });
		// or use actions
		counter.increment();
	},
};
```

You can even use a function (similar to a component setup()) to define a Store for more advanced use cases:

```
export const useCounterStore = defineStore('counter', () => {
	const count = ref(0);
	function increment() {
		count.value++;
	}

	return { count, increment };
});
```

If you're still unfamiliar with the `setup() Composition API`, don't worry, Pinia also supports a set of Vuex-like `map helpers`.

You define stores in the same way and then access them using `mapStores()` , `mapState()` or `mapActions()` :

```
const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    }
  }
})

const useUserStore = defineStore('user', {
  // ...
})

export default {
  computed: {
    // ...
    // Access via this.counterStore and this.userStore
    ...mapStores(useCounterStore, useUserStore)
    // accessed via this.count and this.double
    ...mapState(useCounterStore, ['count', 'double']),
  },
  methods: {
    // accessed via this.increment()
    ...mapActions(useCounterStore, ['increment']),
  },
}
```
