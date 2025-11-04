# React 项目整洁度

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