# Function @Langnang/{Package}

## Algorithm

### Sort

`bubble_sort(number_array)`冒泡排序
`bucket_sort(number_array)`桶排序
`counting_sort(number_array)`技术排序
`heap_sort(number_array)`堆排序
`insertion_sort(number_array)`插入排序
`merge_sort(number_array)`归并排序
`quick_sort(number_array)`快速排序
`radix_sort(number_array)`基数排序
`selection_sort(number_array)`选择排序
`shell_sort(number_array)`希尔排序

## Array

`array.prototype.copyWithin(target[, start[, end]])`在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
`array.prototype.entries()`返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对。
`array_count_by(array, fn)`根据函数统计数组中值出现的次数
`array_every()`
`array_index_of(array, search_element[, from_index))`返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 --
`array_last_index_of(array, search_element[, from_index = arr.length)`返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1
`array_reverse()`
`array_sort([compare_function(first_el,second_el)])`对数组元素进行排序，并返回当前数组。
`is_array_every(array, callback(element[, index[, array]])[, this_arg])`如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。
`is_array_every_equal(array)`检测数组的所有元素是否相等
`is_array_none(array, fn)`检测数组的所有元素是否都不符合
`is_array_some(array, fn)`检测数组的部分元素是否符合


## Date

`date(...args)`创建 \_date 对象
`day(date)`月份中的第几天
`day_ofWeek`周中的第几天
`endof_day(date)`日期的最后一秒。-
`first_dayof_month(date)`日期所在月的第一天
`format(date, fm)`格式化日期世界
`hour(date)`日期的小时
`last_dayof_month(date)`日期所在月的最后一天
`last_n_day(date)`日期前 \_n 天
`millisecond(date)`日期的毫秒
`minute(date)`日期的分钟
`monday(date)`日期所在周的周一
`month(date)`日期的月份
`next_days(date, n)`指定日期后 \_n 天后
`next_hours(date, n)`指定日期的 \_n 时后
`next_minutes(date, n)`指定日期的 \_n 分后
`next_months(date, n)`指定日期的 \_n 月后
`next_seconds(date, n)`指定日期的 \_n 秒后
`nextWeeks(date, n)`指定日期的 \_n 周后
`next_years(date, n)`指定日期的 \_n 年后
`range`时间区段
`second(date)`日期的秒
`startof_day(date)`日期的第一秒。-
`sunday(date)`日期所在周的周日
`timeline(start, end)`返回起止时间中单位时间的连续时间数组
`timestamp(date)`时间戳
`tomorro_w(date)`日期的后一天
`week_of_year(date)`日期所在年份的周次
`year(date)`日期的年份
`yesterday(date)`日期的前一天

## DOM

`is_bottom_visible()`检测页面的底部是否可见
`is_root()`检测文档根节点
`is_visiblein_vie_wport(el)`检测元素在视区中是否可见
`redirect(url)`重定向到指定 URL
`scroll_position`返回当前页的滚动位置
`scroll_to_top()`滚动至页面顶部
`url()`返回当前 URL

## Function

` apply(this_arg, [args_array])``function.prototype.apply(this_arg, [args_array]) `
` bind(this_arg, ...args)``function.prototype.bind(this_arg, ...args) `
` call(this_arg, ...args)``function.prototype.call(this_arg, ...args) `
`ajax(option)`异步 Java_script 和 X_m_l
`debounce()`防抖触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间
`for_each(object, callback)`从左向右遍历对象
`for_each_right(object, callback)`从右向左遍历对象
`for_each_right_array(object, callback)`从右向左遍历数组
`query()`元素选择器
`query_all()`元素选择器
`s_wap(a, b)`交换两个元素的值
`throttle()`节流高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率
`time_taken(fn, ...args)`测量执行函数所用的时间
`copy`拷贝，浅拷贝
`deep_copy`深拷贝对象

## Math

`factorial(number)`阶乘。所有小于及等于该数的正整数的积，并且 的阶乘为 自然数 n 的阶乘写作 n!。
`euclidean_algorithm(a, b)`欧几里得算法。指用于计算两个非负整数 a，b 的最大公约数
`areaof_circle(radius)`圆的面积
`collatz(number)`\_collatz 算法
`digitize(num)`将数字转换为数字数组
`distance(x1, y1, x2, y2)`两点间的距离
`gcd(a, b)`计算两个数字之间最大的公共除数
`is_divisible(dividend, divisor)`检测第一个数值是否可被另一个数值整除
`is_even(number)`检测偶数
`is_finite(number)`检测无穷大
`is_integer(number)`检测整数
`is_leap_year(number)`检测闰年
`is_na_n(number)`检测非数值
`is_odd(number)`检测奇数
`is_safe_integer(number)`检测安全整数
`leap_years(start_year, end_year)`返回范围内的所有闰年
`max(...nums)`最大值
`min(...nums)`最小值
`PI()`圆周率
`random_int(max = 1, min = 0)`随机整数
`random_float(max = 1, min = 0)`随机数值
`sum(...nums)`总值
`thousands_separator(num)`千位分隔符

## Mobile

`mobile_type()`返回手机系统类型。\_android，\_i_o_s；

## Number

`is_number(obj)`检测数值

## Object

`extend(target, parent)`混合属性到目标对象
`is_browser`检测浏览器环境
`is_date(obj)`检测对象是否为日期时间
`is_defined(obj)`检测对象是否已定义
`is_dom()`检测对象是否是 DOM
`is_function(obj)`检测对象是否是函数
`is_object(obj)`检测对象
`is_reg_exp(obj)`检测正则表达式
`is_symbol(obj)`检测 Symbol
`is_undefined(obj)`检测 Undefined
`stringify(json)`JSON 转字符串


## RegExp

`regs()`常用正则表达式
`verify_email()`验证邮箱
`verify_number()`验证数值

## String

`capitalize()`将字符串的第一个字母大写
`capitalize_everyWord()`将字符串中每个单词的首字母大写
`hex_to_rgba()`hex 十六进制颜色转 rgb 颜色。
`is_palindrome(string)`检测回文字符串
`is_string_of_array(string)`检测字符串数组
`is_string_of_boolean(string)`检测字符串布尔值
`is_string_of_number(string)`检测字符串数值
`is_valid_parenthess()`检测是否是成对出现的括号。有效的括号；
`longest__word(text)`返回一段话中最长的单词
`nb()`\_n_b
`random_string(length)array)`随机字符串
`rate()`评分字符串星星
`remove_duplicates(string)`移除字符串中所有相邻重复项
`string_reverse(string)`翻转字符串
`rgb_to_hex()`rgb 颜色转 hex 十六进制颜色。
`sb()`S_b
`string_to_json(string)`字符串转 J_s_o_n
`url_params([url = _windo_w.location.hr)`返回当前 \_u_r_l 中的参数对象
`uuid()`通用唯一识别码（\_universally \_unique \_identifier）
