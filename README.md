# Flexbox

## ㄧ、Column Row 認識
<img src="src/assets/images/column&row.png" width="500" height="250">

- column(欄)(方向為上到下)
- row(列)(方向為左到右)

## 二、排列方式&主軸&交叉軸 概念

I.flexbox：排列方式分為四種(加上reverse為相反方向).

- row：從上到下.
- row-reverse：從下到上.
- column：從左到右.
- column-reverse：從右到左.

II.理解各種排列與主軸和交叉軸的關係  
1.row 圖示 (排列方向為從左到右)
![alt text](src/assets/images/row.jpg "選擇性的標題")

PS：排列方式決定主軸(main-axis)的方向，另外與主軸垂直的稱為交叉軸(cross-axis).

詞彙解釋

- main-axis：主軸 (紅色箭頭)
- main-start：主軸-起點邊界
- main-end：主軸-結束邊界
- main-size：主軸大小
- cross-axis：交叉軸 (黃色箭頭)
- cross-start：交叉軸-起點邊界
- cross-end：交叉軸-結束邊界
- cross-size：交叉軸大小

2.row-reverse 圖示 (排列方向為從右到到)
![alt text](src/assets/images/row-reverse.jpg "選擇性的標題")  
PS:其實就是主軸方向翻轉，而交叉軸的方向不變.

3.column 圖示 (排列方向為從上到下)  
<img src="src/assets/images/column.jpg" width="300" height="400">  
PS:column排列方式為上到下，所以主軸方向(main-axis)就會變成上到下.

4.column-reverse 圖示 (排列方向為從下到上)  
<img src="src/assets/images/column-reverse.jpg" width="300" height="400">

|   排列方式  |  主軸方向  |   交叉軸方向  |
| :------| :------|:------|
| row | 從左到右 | 從上到下|
| row-reverse | 從右到左 | 從上到下|
| column | 從上到下 | 從左到右|
| column-reverse | 從下到上 | 從左到右|

## 三、容器相關屬性 (container)

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

|   屬性  |   參數  | 功能  |
| :------| :------|:------|
|  display | flex   |使用flex佈局 |
|          | inline-flex |使用flex佈局 |
| flex-direction | 容器項目 排列方向|
|          | row (默認值)  |從左到右排列項目|
|          | row-reverse |從右到左排列項目 |
|          | column |從上到下排列項目 |
|          | column-reverse |從下到上排列項目 |
| flex-wrap| 容器項目 換行方式|
|          | nowrap (默認值)  |不換行 |
|          | wrap |換行 多餘項目排在下一行|
|          | wrap-reverse |換行 多餘項目排在上一行|
| justify-content| 容器項目 主軸(main-axis)對齊方式 |
|          | flex-start (默認值) |往起始邊界對齊 |
|          | center |往中間對齊 |
|          | flex-end |往結束邊界對齊 |
|          | space-between |第一項目靠左.最後項目靠右.其餘空白平均分配剩下項目左右兩側|
|          | space-around | 將空白平均分配每個項目左右兩側 |
| align-items| 容器項目 交錯軸(cross-axis)對齊方式 |
|          | flex-start   |往起始邊界對齊 |
|          | center |往中間對齊 |
|          | flex-end |往結束邊界對齊 |
|          | baseline |每個項目基準線對齊 |
|          | stretch (默認值) |將項目高度撐開.與容器相同高度 |
| align-content | 當有多行時.以行為單位的交錯軸(cross-axis)對齊方式 |
|          | flex-start   |往起始邊界對齊 |
|          | center |往中間對齊 |
|          | flex-end |往結束邊界對齊 |
|          | space-between |第一行靠左.最後行靠右.其餘空白平均分配剩下每行左右兩側 |
|          | space-around |將空白平均分配每個行左右兩側 |
|          | stretch (默認值)|將每行高度撐開.與容器相同高度 |



## 四、項目相關屬性 (item)

|   屬性  |   作用  |
| :------| :------|
|  flex-basis | 初始大小 |
|  flex-grow | 項目寬度增長比例 |
|  flex-shrink | 項目寬度壓縮比例 |
|  order | 項目排列順序 |
|  align-self|項目本身 交叉軸對齊方式(覆蓋容器align-items的設定) |

|   屬性合併  |   作用  |
| :------| :------|
|  flex-flow| grow + shrink + basis|

|   屬性  |   參數  | 功能  |
| :------| :------|:------|
|  flex-basis   | 初始大小(寬) |
|               | auto 或 0 (默認值) |項目原始大小|
|               |  元素寬度單位   | 如：%、em、rem、px |
|  flex-grow    | 增長比例 |
|               |  數字(默認值:0) | 依照數字比例彈性增長 |
|               | 0     |不做彈性增長 |
|  flex-shrink  | 壓縮比例 |
|               | 數字 (默認值:1) |依照數字比例彈性壓縮 |
|               | 0     |不做彈性壓縮 |
|  order        | 項目排列順序 |
|               | 數字(默認值:0)  | 數字越小排越前面 |
|  align-self   |項目本身 交叉軸對齊方式(覆蓋容器align-items的設定) |
|               | flex-start   |往起始邊界對齊 |
|               | center |往中間對齊 |
|               | flex-end |往結束邊界對齊 |
|               | baseline |每個項目基準線對齊 |
|               | stretch (默認值) |將項目高度撐開.與容器相同高度 |

|   合併屬性  |   參數  | 簡化  | 說明  |
| :------| :------|:------|:------|
| flex       | flex-grow + flex-shrink + flex-basis |
|            | 0 1 auto | flex:initial|flex項目默認設定|
|            | 0 0 auto| flex:none;|固定寬度.寬度為項目原始寬度|
|            | 1 1 auto| flex:auto;|自動彈性寬度|