## array_filter

将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回。

![](https://img.shields.io/badge/-Array-blue)

**语法**

```js
array_filter(array, callback(element[, index[, array]])[, this_arg])
```

**参数**

- `array`: 需要处理的数组。
- `callback`:
  - `element`:
  - `index`:
  - `array`:
- `this_arg`:

**返回值**

**示例**

```js
const array = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

array_filter(array, (word) =word.length 6); // ["exuberant", "destruction", "present"]
```

**参考**

**实现**

<CodeSwitcher :languages="{ln:'Langnang',lo:'Lodash',un:'Underscore'}">
<template v-slot:ln>

<<< @/node_modules/@langnang/js-func/src/array_filter.ts

</template>
<template v-slot:lo>

<<< @/node_modules/lodash/filter.js

</template>
<template v-slot:un>

<<< @/node_modules/underscore/modules/filter.js

</template>
</CodeSwitcher>
