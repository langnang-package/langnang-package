# array_count

统计数组中值出现的次数

![](https://img.shields.io/badge/-Array-blue)

**语法**

```js
array_count(array[, value]);
```

**参数**

**返回值**

**示例**

```js
array_count([1, 1, 1, 1, 3, 4, 5, 6]); // {1:4,3:1,4:1,5:1,6:1}
array_count([1, 1, 1, 1, 3, 4, 5, 6], 6); // 1
```

**参考**

**实现**

<CodeSwitcher :languages="{ln:'Langnang',lo:'Lodash',un:'Underscore'}">
<template v-slot:ln>

<<< @/node_modules/@langnang/js-func/src/array_count.ts

</template>
</CodeSwitcher>
