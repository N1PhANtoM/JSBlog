var http = require('http');

var server = http.createServer(function(request, response) {
  response.setHeader('Content-Type', 'text/html');
  response.statusCode = 200;
  response.write('<html><head><meta charset="utf-8" /><title>Блог N1PhANtoM</title>		<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css"><link rel="stylesheet" href="http://s.htwdev.ru/css/layouts/blog.css"></head><body style="margin: 20px 50px 20px 50px"><h2 class="post-title">Шаг 3. Немного CSS.</h2><div class="post-description"><p>По просьбам трудящихся, я решил заняться выбором CSS модуля, дабы устранить эффект красных глаз. Я сторонник всего минималистичного, поэтому главными критериями были:</p><ol><li>Легковестность.</li><li>Минималистичность.</li><li>Доступность и простота.</li><li>Приверженность стандартам.</li></ol><p>Я просмотрел несколько модулей и целых фреймворков таких как: <a href="http://materializecss.com/">Materialize</a>, <a href="http://getuikit.com/">uikit</a>, <a href="http://milligram.github.io/">Milligram</a>, <a href="http://cardinalcss.com/">Cardinal</a>. Это то что удалось нагуглить за пол часа в качестве подходящих вещей, но остановился я в итоге на  <a href="http://purecss.io/">Pure</a>. Подкупил он меня тем, что это очень легковесный модуль, а также тем, что можно отключать ненужные части или грузить по необходимости. Плюс у них уже есть в примерах шаблон блога, который я тут и использовал пока.</p><p>Первое что я сделал - это закинул шаблон на свой сервер и создал для него приложение в IIS. Так как Nodejs является однопоточным, он плохо работает со статическими файлами и рекомендуется выносить их на внешний сервер, коим у меня является IIS. Там я создал приложение и привязал к нему поддомен s.htwdev.ru. Сам Pure я пока буду использовать при помощи CDN. Позже, когда я займусь фронтендом вплотную, я решу, как его подружить с React, на котором будет писаться фронт, либо выберу что-то другое.</p><p>После этого мне пришлось переписать разметку всей страницы, так как она по прежнему представляет из себя статичный html. Заодно я поменял порядок шагов, чтобы сверху был последний.</p></div><h2 class="post-title">Шаг 2. Избавляюсь от порта.</h2><div class="post-description"><p>Воспользовавшись <a href="http://dvisagie.blogspot.ru/2013/02/running-nodejs-alongside-iis-on-windows.html ">вот этим замечательным гайдом</a> я, по факту, в два клика настроил в IIS обратный прокси через Url rewrite, и теперь порт больше не нужен для доступа к блогу.</p></div><h2 class="post-title">Первый шаг. Окружение.</h2><div class="post-description"><p>Я решил пока не выдумывать ничего и расположить свой проект на своём же компьютере, который у меня специально предназначен для веб решений. Это хиленький атом с 2ГБ оперативки под управлением Windows Web Server 2008 R2, которую мне то ли дали на какой-то выставке, то ли с каким-то журналом я её получил, уже не помню... Помню что она мне досталась нахаляву и до сих пор успешно используется для тестирования некоторых Asp.Net проектов. Я понимаю, что машина на Windows это не совсем то, что нужно для этого стека, но, так как другой нет - буду использовать её. Первое, что я сделал - это скачал с <a href=" https://nodejs.org/en/">официального сайта NodeJS</a> и установил его. Так как я ничего в нём не понимаю, то просто протыкал next-next. Дальше я стал следовать <a href="http://blog.teamtreehouse.com/install-node-js-npm-windows">следующему гайду</a>, который тупо нагуглил.</p><p>Как итог гайда я создал папку C:\\JSBlog и в ней файл test.js содержащий одну строчку </p><p>console.log("Node is installed!");<br/>после чего, выполнив в командной строке<br/>C:\\JSBlog> node test.js<br/>Я убедился, что это работает. </p></p><p>Но для первого шага этого мало. Мне нужно было, чтобы кто-то мог увидеть этот текст, а для этого мне нужно было поднять сервер NodeJS. Для этого содержимое test.js я изменил на следующее:</p></p>var http = require("http");<br/>var server = http.createServer(function(request, response) {<br/>response.setHeader("Content-Type", "text/html");<br/>response.statusCode = 200;<br/>response.write("blabla");<br/>response.end();<br/>}).listen(8011);</p><p>Где вместо blabla будет этот текст пока тупо в виде html.</p><p>Затем нужно снова запустить сервер и оставить его работать в командной строке.</p><p>C:\\JSBlog> node test.js</p><p>После чего я у регистратора домена добавил поддомен blog и теперь этот текст доступен по адресу <a href="http://blog.htwdev.ru:8011">http://blog.htwdev.ru:8011</a>. Порт пока нужен, так как на этой машине крутится несколько приложений на IIS и на 80 я не могу это всё повесить. Одним из следующих шагов я уберу порт.</p><p>Последним для этого шага будет публикация наработок в репозитории. Я для этих целей выбрал GitHub, с которым до сегодняшнего дня, признаюсь, также не работал. Для начала я на сайте <a href="https://github.com">https://github.com</a> создал репозиторий с именем JSBlog, после чего приступил к установке git в системе. Для этого я с <a href="https://git-scm.com/download/win ">официального сайта</a> скачал git и установил, используя проверенную временем схему next-next-next.</p><p>После установки я запустил еще одну копию консоли и перейдя в папку с моим сервером выполнил</p></p>C:\\Users\\N1PhANtoM> cd C:\\JSBlog<br/>C:\\JSBlog> git init<br/>C:\\JSBlog> git add test.js<br/>C:\\JSBlog> git commit -m "first commit"<br/>C:\\JSBlog> git remote add origin https://github.com/N1PhANtoM/JSBlog.git<br/>C:\\JSBlog> git push -u origin master</p><p>Мой код волшебным образом отобразился в репозитории github и вуаля, всё заработало.</p></div><h2 class="post-title">Пролог.</h2><div class="post-description"><p>Теория без практики бесполезна, это знают все. Поэтому мне пришла в голову мысль сразу же применять новые знания и применяться они будут здесь. Со временем здесь вырастет мой блог, который будет, наверное, удобным, наверное, красивым и наверняка написанным на стеке JS технологи. Пока моя цель это NodeJS, MongoDB, возможно, React, технологии модульного тестирования к этому прилагающиеся и что-то для фронтенда. Что? Решу в процессе. Я планирую насколько возможно подробно описывать все свои действия, поэтому возможно кому-то это будет также интересно. Так что добро пожаловать.</p></div></div></body></html>');
  response.end();
}).listen(8011);
