## Button
---
用 ```type``` ```round``` ```plain```定义按钮
<div class="demo-block">
    <gm-button type="danger" disabled>危险按钮</gm-button>
    <gm-button round size="medium" type="primary">主要按钮</gm-button>
    <gm-button type="primary" plain>普通按钮</gm-button>
    <gm-button>默认按钮</gm-button>
</div>

::: demo
```html
    <gm-button type="danger" disabled>危险按钮</gm-button>
    <gm-button round size="medium" type="primary">主要按钮</gm-button>
    <gm-button type="primary" plain>普通按钮</gm-button>
    <gm-button>默认按钮</gm-button>
```
:::

## 图标Button 
目前只添加了三个后续可以继续添加
<div class="demo-block">
    <gm-button round plain icon="gmicon-tianjia" size="small"></gm-button>
    <gm-button icon="gmicon-shanchu" size="medium"></gm-button>
    <gm-button type="primary" icon="gmicon-sousuo"></gm-button>
</div>

::: demo
```html
    <gm-button round plain icon="gmicon-tianjia" size="small"></gm-button>
    <gm-button icon="gmicon-shanchu" size="medium"></gm-button>
    <gm-button plain icon="gmicon-sousuo"></gm-button>

```
:::



## 参数说明
---

| 参数 | 说明 | 类型 |  取值 | 默认 |
| :-----:| :----: | :----: |  :----: |  :----: |
| size | 按钮的大小 | string | ```medium``` ```small``` ```mini``` | - | 
| type | 按钮类型 | string |  ```danger``` ```primary``` ```info```  ```warn``` ```default```| - | 
| disabled | 是否可点 | Boolean | - | FALSE |
| plain | 简单按钮 | Boolean | -  | FALSE |
| round | 圆角 | Boolean | - | FALSE |
| icon | 图标 | string | 图标库已有图标 | - |


