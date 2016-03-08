# getQueryString
使用 javascript 取得網址查詢字串 (query string) 之參數。

## 引用

```
<script src="getQueryString.js"></script>
```

## 用法及範例

* 網址

```
http://127.0.0.1:3000/?id=tw1234&name=larry
```

* 使用

```
getQueryString.init(); //建構子

//開始取得參數
var id = getQueryString.getParameter('id');
var name = getQueryString.getParameter('name');   
```
