## array_concat

返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。

![](https://img.shields.io/badge/-Array-blue)

**语法**

```js
array_concat(array, array_1, array_2, ...[, array_n]);
```

**参数**

- `array`: 需要合并的数组
- `array_n`: 需要合并的数组

**返回值**

合并成的新数组

**示例**

```js
array_concat([], [1]); // [1]
array_concat([], [1, undefined]); // [1, undefined]
array_concat([], [1, undefined, null]); // [1, undefined, null]
```

<!-- <<< @/node_modules/@langnang/js-func/test/array_concat.ts -->

**参考**

- [Array.prototype.concat() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [lodash.concat | Lodash](https://www.lodashjs.com/docs/lodash.concat)

**实现**

<CodeSwitcher :languages="{ln:'Langnang',lo:'Lodash',un:'Underscore'}">
<template v-slot:ln>

`@langnang/js-func/src/array_concat.ts`

<<< @/node_modules/@langnang/js-func/src/array_concat.ts

</template>
<template v-slot:lo>

`lodash/concat.js`

<<< @/node_modules/lodash/concat.js

</template>
<template v-slot:un>

<!-- <<< @/node_modules/underscore/modules/concat.js -->

</template>
</CodeSwitcher>
