## array_concat

> 返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。

![](https://img.shields.io/badge/-Array-blue)

**语法**

```js
array_concat(array, array_1, array_2, ...[, value_n]]])
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

**实现**

- [@langnang/js-func](https://github.com/langnang-package/js-func/blob/master/src/array_concat.ts)

**参考**

- [Array.prototype.concat() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
