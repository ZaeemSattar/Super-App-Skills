---
title: "TypeScript support"
source_url: https://miniapp.neuxnet.com/tutorial/typescript-subject.html
---
###  TypeScript support

Mini App supports ts development, please refer to [Vue.js TypeScript Support](https://vuejs.org/guide/typescript/overview.html) for instructions.

###  Development method

In the script node of the vue or nvue page, add the attribute `lang="ts"`

```
<script lang="ts">
// write ts code here
</script>
```

-   cli created project

You need to specify ts when creating a project.

###  Modify Typescript configuration

Create a `tsconfig.json` file in the root directory and perform personalized configuration. The recommended configuration is as follows:

```
// tsconfig.json
{
  "compilerOptions": {
    // Align with Vue's browser support
    "target": "es5",
    // This allows stricter inference of data properties on `this`
    "strict": true,
    // If using webpack 2+ or rollup, you can take advantage of tree-shake:
    "module": "es2015",
    "moduleResolution": "node",
    "types": ["@dcloudio/types"]
  }
}
```

Personalized configuration is optional, without `tsconfig.json` it will automatically run with the default configuration.

###  TypeScript Support Compatibility Notes

-   vue3 mode of Mini App: Both vue files and nvue files support the latest version of ts.

###  Precautions

After declaring `lang="ts"`, all vue components imported by this vue/nvue file need to be written in ts.

**Sample code**

Modification uni-badge.vue

```
<script lang="ts">
    //Only the core code that needs to be modified is displayed. For the complete code, please refer to the original components.
	import Vue from 'vue';
	export default Vue.extend({
		props: {
			type: {
				type: String,
				default: 'default'
			},
			inverted: {
				type: Boolean,
				default: false
			},
			text: {
				type: [String, Number],
				default: ''
			},
			size: {
				type: String,
				default: 'normal'
			}
		},
		computed: {
			setClass(): string {
				const classList: string[] = ['uni-badge-' + this.type, 'uni-badge-size-' + this.size];
				if (this.inverted === true) {
					classList.push('uni-badge-inverted')
				}
				return classList.join(" ")
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	})
</script>
```

Reference the uni-badge component in index.vue

```
<script lang="ts">
    import Vue from 'vue';
	import uniBadge from '../../components/uni-badge.vue';
	export default Vue.extend({
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			uniBadge
		}
	});
</script>
```
