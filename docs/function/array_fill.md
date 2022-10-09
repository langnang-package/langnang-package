# array_fill

用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

![](https://img.shields.io/badge/-Array-blue)

**语法**

```js
array_fill(array, value[, start = 0 [, end = array.length]]);
```

**参数**

- `array`: 需要处理的数组。
- `value`: 用来填充数组元素的值。
- `start`: 起始索引，默认值为 0。
- `end`: 终止索引，默认值为 `array.length`。

**返回值**

修改后的数组。

**示例**

```js
const array = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
array_fill(array, 0, 2, 4); // [1, 2, 0, 0]

// fill with 5 from position 1
array_fill(array, 5, 1); // [1, 5, 5, 5]

// fill with 6
array_fill(array, 6); // [6, 6, 6, 6]
```

**参考**

- [Array.prototype.fill() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

**实现**

<CodeSwitcher :languages="{ln:'Langnang',lo:'Lodash',un:'Underscore'}">
<template v-slot:ln>

</template>
<template v-slot:lo>

</template>
<template v-slot:un>

</template>
</CodeSwitcher>
