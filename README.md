# Flexbox

## ㄧ、Column Row 認識
<img src="src/assets/images/column&row.png" width="500" height="250">

- column(欄)(方向為上到下)
- row(列)(方向為左到右)

## 二、容器與項目(container && item) 認識
![alt text](src/assets/images/tip.png "選擇性的標題")

## 三、排列方式&主軸&交叉軸 概念

### I.flexbox：排列方式分為四種(加上reverse為相反方向)

- row：從左到右.
- row-reverse：從右到左.
- column：從上到下.
- column-reverse：從下到上.

### II.理解排列方式與主軸和交叉軸的關係
1.row 圖示 (排列方向為從左到右)
![alt text](src/assets/images/row.jpg "選擇性的標題")

PS：主軸的方向並不是固定的，而是由排列方式來決定主軸(main-axis)的方向，另外與主軸垂直的稱為交叉軸(cross-axis).

- main-axis：主軸 (紅色箭頭)
- main-start：主軸-起點邊界
- main-end：主軸-結束邊界
- main-size：主軸大小
- cross-axis：交叉軸 (黃色箭頭)
- cross-start：交叉軸-起點邊界
- cross-end：交叉軸-結束邊界
- cross-size：交叉軸大小

</br>

2.row-reverse 圖示 (排列方向為從右到左)
![alt text](src/assets/images/row-reverse.jpg "選擇性的標題")  
PS:其實就是主軸方向翻轉，而交叉軸的方向不變.

</br>

3.column 圖示 (排列方向為從上到下)  
<img src="src/assets/images/column.jpg" width="300" height="400">  
PS:column排列方式為上到下，所以主軸方向(main-axis)就會變成上到下.

</br>

4.column-reverse 圖示 (排列方向為從下到上)  
<img src="src/assets/images/column-reverse.jpg" width="300" height="400">

</br>

|   排列方式  |  主軸方向  |   交叉軸方向  |
| :------| :------|:------|
| row | 從左到右 | 從上到下|
| row-reverse | 從右到左 | 從上到下|
| column | 從上到下 | 從左到右|
| column-reverse | 從下到上 | 從左到右|

## 四、容器相關屬性 (container)

|   屬性  |   作用  |
| :------| :------|
|  display | 設定為flex佈局 |
|  flex-direction | 項目 排列方向 |
|  flex-wrap | 項目 換行方式 |
|  justify-content | 項目 主軸對齊方式 |
|  align-items | 項目 交叉軸對齊方式(單行) |
|  align-content | 項目 交叉軸對齊方式(多行) |

|   屬性合併  |  作用  |
| :------| :------|
|  flex-flow| direction + wrap|

<table>
   <tr>
      <td>屬性名稱</td>
      <td colspan="2">說明</td>
   </tr>
   <tr>
      <td></td>
      <td>參數</td>
      <td>功能</td>
   </tr>
   <tr>
      <td>display</td>
      <td colspan="2">設定為flex佈局</td>
   </tr>
   <tr>
      <td></td>
      <td>flex</td>
      <td>被設定元素會有block的特性</td>
   </tr>
   <tr>
      <td></td>
      <td>inline-flex</td>
      <td>被設定元素會有inline-block的特性</td>
   </tr>
   <tr>
      <td>flex-direction</td>
      <td colspan="2">容器項目 排列方向</td>
   </tr>
   <tr>
      <td></td>
      <td>row (默認值)</td>
      <td>從左到右排列項目</td>
   </tr>
   <tr>
      <td></td>
      <td>row-reverse</td>
      <td>從右到左排列項目</td>
   </tr>
   <tr>
      <td></td>
      <td>column</td>
      <td>從上到下排列項目</td>
   </tr>
   <tr>
      <td></td>
      <td>column-reverse</td>
      <td>從下到上排列項目</td>
   </tr>
   <tr>
      <td>flex-wrap</td>
      <td colspan="2">容器項目 換行方式</td>
   </tr>
   <tr>
      <td></td>
      <td>nowrap (默認值)</td>
      <td>不換行</td>
   </tr>
   <tr>
      <td></td>
      <td>wrap</td>
      <td>換行 多餘項目排在下一行</td>
   </tr>
   <tr>
      <td></td>
      <td>wrap-reverse</td>
      <td>換行 多餘項目排在上一行</td>
   </tr>
   <tr>
      <td>justify-content</td>
      <td colspan="2">容器項目 主軸(main-axis)對齊方式</td>
   </tr>
   <tr>
      <td></td>
      <td>flex-start (默認值)</td>
      <td>往起始邊界對齊</td>
   </tr>
   <tr>
      <td></td>
      <td>center</td>
      <td>往中間對齊</td>
   </tr>
   <tr>
      <td></td>
      <td>flex-end</td>
      <td>往結束邊界對齊</td>
   </tr>
   <tr>
      <td></td>
      <td>space-between</td>
      <td>第一項目靠左.最後項目靠右.其餘空白平均分配剩下項目左右兩側</td>
   </tr>
   <tr>
      <td></td>
      <td>space-around</td>
      <td>將空白平均分配每個項目左右兩側</td>
   </tr>
   <tr>
      <td>align-items</td>
      <td colspan="2">容器項目 交錯軸(cross-axis)對齊方式</td>
   </tr>
   <tr>
      <td></td>
      <td>flex-start</td>
      <td>往起始邊界對齊</td>
   </tr>
   <tr>
      <td></td>
      <td>center</td>
      <td>往中間對齊</td>
   </tr>
   <tr>
      <td></td>
      <td>flex-end</td>
      <td>往結束邊界對齊</td>
   </tr>
   <tr>
      <td></td>
      <td>baseline</td>
      <td>每個項目基準線對齊</td>
   </tr>
   <tr>
      <td></td>
      <td>stretch (默認值)</td>
      <td>將項目高度撐開.與容器相同高度</td>
   </tr>
   <tr>
      <td>align-content</td>
      <td colspan="2">當有多行時.以行為單位的交錯軸(cross-axis)對齊方式</td>
   </tr>
   <tr>
      <td></td>
      <td>flex-start</td>
      <td>往起始邊界對齊</td>
   </tr>
   <tr>
      <td></td>
      <td>center</td>
      <td>往中間對齊</td>
   </tr>
   <tr>
      <td></td>
      <td>flex-end</td>
      <td>往結束邊界對齊</td>
   </tr>
   <tr>
      <td></td>
      <td>space-between</td>
      <td>第一行靠左.最後行靠右.其餘空白平均分配剩下每行左右兩側</td>
   </tr>
   <tr>
      <td></td>
      <td>stretch (默認值)</td>
      <td>將每行高度撐開.與容器相同高度</td>
   </tr>
</table>

## 五、項目相關屬性 (item)

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

<table>
    <thead>
        <tr >
            <td>屬性名稱</td>
            <td colspan="2">說明</td>
        </tr>
        <tr>
            <td></td>
            <td>參數</td>
            <td>功能</td>
        </tr>
   </thead>
   <tbody>
        <tr>
            <td>flex-basis</td>
            <td colspan="2">項目初始大小(寬)</td>
        </tr>
        <tr>
            <td></td>
            <td>auto 或 0 (默認值)</td>
            <td>項目原始大小</td>
        </tr>
        <tr>
            <td></td>
            <td>元素寬度單位</td>
            <td>如：%、em、rem、px</td>
        </tr>
        <tr>
            <td>flex-grow</td>
            <td colspan="2">項目增長比例</td>
        </tr>
        <tr>
            <td></td>
            <td>數字(默認值:0)</td>
            <td>依照數字比例彈性增長</td>
        </tr>
        <tr>
            <td></td>
            <td>0</td>
            <td>不做彈性增長</td>
        </tr>
        <tr>
            <td>flex-shrink</td>
            <td colspan="2">項目壓縮比例</td>
        </tr>
        <tr>
            <td></td>
            <td>數字 (默認值:1)</td>
            <td>依照數字比例彈性壓縮</td>
        </tr>
        <tr>
            <td></td>
            <td>0</td>
            <td>不做彈性壓縮</td>
        </tr>
        <tr>
            <td>order</td>
            <td>項目排列順序</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>數字(默認值:0)</td>
            <td>數字越小排越前面</td>
        </tr>
        <tr>
            <td>align-self</td>
            <td colspan="2">項目本身 交叉軸對齊方式(覆蓋容器align-items的設定)</td>
        </tr>
        <tr>
            <td></td>
            <td>flex-start</td>
            <td>往起始邊界對齊</td>
        </tr>
        <tr>
            <td></td>
            <td>center</td>
            <td>往中間對齊</td>
        </tr>
        <tr>
            <td></td>
            <td>flex-end</td>
            <td>往結束邊界對齊</td>
        </tr>
        <tr>
            <td></td>
            <td>baseline</td>
            <td>每個項目基準線對齊</td>
        </tr>
        <tr>
            <td></td>
            <td>stretch (默認值)將項目高度撐開.與容器相同高度</td>
            <td></td>
        </tr>
   </tbody>
</table>

<table>
    <thead>
        <tr >
            <td>合併屬性</td>
            <td>參數</td>
            <td >簡化</td>
            <td >說明</td>
        </tr>
   </thead>
    <tbody>
        <tr>
            <td>flex</td>
            <td colspan="3">flex-grow + flex-shrink + flex-basis</td>
        </tr>
        <tr>
            <td></td>
            <td>0 1 auto </td>
            <td>flex:initial</td>
            <td>flex項目默認設定</td>
        </tr>
        <tr>
            <td></td>
            <td>0 0 auto</td>
            <td> flex:none;</td>
            <td>固定寬度.寬度為項目原始寬度</td>
        </tr>
        <tr>
            <td></td>
            <td>1 1 auto</td>
            <td>flex:auto;</td>
            <td>自動彈性寬度</td>
        </tr>
    </tbody>
<table>