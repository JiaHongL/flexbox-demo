# Flexbox

## Column Row 認識
<img src="src/assets/images/column&row.png" width="500" height="250">

- column(欄)(上到下方向排列)
- row(列)(左到右方向排列)

## flex佈局概念

I.flexbox：排列方式分為四種(加上reverse為相反方向).

- row：從上到下.
- row-reverse：從下到上.
- column：從左到右.
- column-reverse：從右到左.

II.
1.row 圖示 (排列方向為從左到右)
![alt text](src/assets/images/row.jpg "選擇性的標題")

PS：排列的方式為主軸(main-axis)的方向，與主軸垂直的稱為交叉軸(cross-axis).

詞彙解釋

- main-axis：主軸 (紅色箭頭)
- main-start：主軸-起點邊界
- main-end：主軸-終點邊界
- main-size：主軸大小
- cross-axis：交叉軸 (黃色箭頭)
- cross-start：交叉軸-起點邊界
- cross-end：交叉軸-終點邊界
- cross-size：交叉軸大小

2.row-reverse 圖示 (排列方向為從右到到)
![alt text](src/assets/images/row-reverse.jpg "選擇性的標題")  
PS:其實就是主軸方向翻轉，而交叉軸的方向不變.

3.column 圖示 (排列方向為從上到下)  
<img src="src/assets/images/column.jpg" width="300" height="400">  
PS:column排列方向為上到下，所以主軸方向(main-axis)就會變成上到下.

4.column-reverse 圖示 (排列方向為從下到上)  
<img src="src/assets/images/column-reverse.jpg" width="300" height="400">

|   排列方式  |  主軸方向  |   交叉軸方向  |
| :------| :------|:------|
| row | 從左到右 | 從上到下|
| row-reverse | 從右到左 | 從上到下|
| column | 從上到下 | 從左到右|
| column-reverse | 從下到上 | 從左到右|

## 容器相關屬性 (container)

|   屬性  |   作用  |
| :------| :------|
|  display | 使用flex佈局 |
|  flex-direction | 容器項目 排列方向 |
|  flex-wrap | 容器項目 換行方式 |
|  justify-content | 容器項目 主軸對齊方式 |
|  align-items | 容器項目 交叉軸對齊方式(單行) |
|  align-content | 容器項目 交叉軸對齊方式(多行) |

|   屬性合併  |  作用  |
| :------| :------|
|  flex-flow| direction + wrap|

## 項目相關屬性 (item)

|   屬性  |   作用  |
| :------| :------|
|  flex-basis | 初始大小 |
|  flex-grow | 增長比例 |
|  flex-shrink | 壓縮比例 |
|  order | 排列順序 |
|  align-self|項目本身 交叉軸對齊方式(覆蓋容器的設定) |

|   屬性合併  |   作用  |
| :------| :------|
|  flex-flow| grow + shrink + basis|
