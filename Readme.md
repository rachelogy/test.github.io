step1（可忽略）: 

在terminal执行下面语句就会成功上传json数据，jsonbox id需要从jsonbox.io上获取

curl -X POST 'jsonbox id' -H 'content-type: application/json' -d '{"string":"jsonbox excercise", "array": [{"name": "first", "age": 25, "gender":"male"}, {"name": "second", "age": 19, "gender":"male"},{"name": "third", "age": 22, "gender":"female"}, {"name": "fourth", "age": 18, "gender":"male"},{"name": "fifth", "age": 12, "gender":"female"}, {"name": "sixth", "age": 9, "gender":"male"}]}'


目前代码中用的是下面这个jsonbox id（不要再执行一遍下面的语句，如果不想换新jsonbox id，就不要管step1）：

curl -X POST 'https://jsonbox.io/box_58b4614e3b01727b0061' -H 'content-type: application/json' -d '{"string":"jsonbox excercise", "array": [{"name": "first", "age": 25, "gender":"male"}, {"name": "second", "age": 19, "gender":"male"},{"name": "third", "age": 22, "gender":"female"}, {"name": "fourth", "age": 18, "gender":"male"},{"name": "fifth", "age": 12, "gender":"female"}, {"name": "sixth", "age": 9, "gender":"male"}]}'

注意不要重复向同一个jsonbox id传送数据.

如果改变了jsonbox id，那么需要把index.js中的第二行的fetch地址改成新的jsonbox id.


step2:

在github repo新建html, js, css 文件，文件名要相同。


step3:

点击settings，滚动到GitHub pages，改变source：从None选为master branch

此时，GitHub pages上面会显示your site is ready to be published at yoururl，从浏览器直接访问yoururl，就可以了，可能需要刷新几遍。
