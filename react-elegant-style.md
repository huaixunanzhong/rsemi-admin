# React 项目整洁度

#### JSX速记

空函数简写
```React
const noop = () => {};

<Button onClick={noop} />
```
Boolean属性简写
```React
<input type="checkbox" disabled />
```
#### 🧱组件命名
组件命名使用大驼峰式（PascalCase），例如 `MyComponent`
对实列使用小驼峰式（camelCase），例如 `myComponentInstance`
```React
import MyComponent from './MyComponent';

const myComponentInstance = <MyComponent />;
```



#### 📄文件导入顺序
经验法则是保持导入顺序如下：

- 内置
- 外部的
- 内部的

```js
import React from 'react';

import { PropTypes } from 'prop-types';
import styled from 'styled-components/native';

import ErrorImg from '../../assets/images/error.png';
import colors from '../../styles/colors';
```

