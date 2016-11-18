const posts = [];
module.exports = posts;

posts.push('<h2 class="post-title" id="s0">Пролог.</h2><div class="post-description"><p>Теория без практики бесполезна, это знают все. Поэтому мне пришла в голову мысль сразу же применять новые знания и применяться они будут здесь. Со временем здесь вырастет мой блог, который будет, наверное, удобным, наверное, красивым и наверняка написанным на стеке JS технологи. Пока моя цель это NodeJS, MongoDB, возможно, React, технологии модульного тестирования к этому прилагающиеся и что-то для фронтенда. Что? Решу в процессе. Я планирую насколько возможно подробно описывать все свои действия, поэтому возможно кому-то это будет также интересно. Так что добро пожаловать.</p></div></div>');

posts.push('<h2 class="post-title" id="s1">Первый шаг. Окружение.</h2><div class="post-description"><p>Я решил пока не выдумывать ничего и расположить свой проект на своём же компьютере, который у меня специально предназначен для веб решений. Это хиленький атом с 2ГБ оперативки под управлением Windows Web Server 2008 R2, которую мне то ли дали на какой-то выставке, то ли с каким-то журналом я её получил, уже не помню... Помню что она мне досталась нахаляву и до сих пор успешно используется для тестирования некоторых Asp.Net проектов. Я понимаю, что машина на Windows это не совсем то, что нужно для этого стека, но, так как другой нет - буду использовать её. Первое, что я сделал - это скачал с <a href=" https://nodejs.org/en/">официального сайта NodeJS</a> и установил его. Так как я ничего в нём не понимаю, то просто протыкал next-next. Дальше я стал следовать <a href="http://blog.teamtreehouse.com/install-node-js-npm-windows">следующему гайду</a>, который тупо нагуглил.</p><p>Как итог гайда я создал папку C:\\JSBlog и в ней файл test.js содержащий одну строчку </p><p>console.log("Node is installed!");<br/>после чего, выполнив в командной строке<br/>C:\\JSBlog> node test.js<br/>Я убедился, что это работает. </p></p><p>Но для первого шага этого мало. Мне нужно было, чтобы кто-то мог увидеть этот текст, а для этого мне нужно было поднять сервер NodeJS. Для этого содержимое test.js я изменил на следующее:</p></p>var http = require("http");<br/>var server = http.createServer(function(request, response) {<br/>response.setHeader("Content-Type", "text/html");<br/>response.statusCode = 200;<br/>response.write("blabla");<br/>response.end();<br/>}).listen(8011);</p><p>Где вместо blabla будет этот текст пока тупо в виде html.</p><p>Затем нужно снова запустить сервер и оставить его работать в командной строке.</p><p>C:\\JSBlog> node test.js</p><p>После чего я у регистратора домена добавил поддомен blog и теперь этот текст доступен по адресу <a href="http://blog.htwdev.ru:8011">http://blog.htwdev.ru:8011</a>. Порт пока нужен, так как на этой машине крутится несколько приложений на IIS и на 80 я не могу это всё повесить. Одним из следующих шагов я уберу порт.</p><p>Последним для этого шага будет публикация наработок в репозитории. Я для этих целей выбрал GitHub, с которым до сегодняшнего дня, признаюсь, также не работал. Для начала я на сайте <a href="https://github.com">https://github.com</a> создал репозиторий с именем JSBlog, после чего приступил к установке git в системе. Для этого я с <a href="https://git-scm.com/download/win ">официального сайта</a> скачал git и установил, используя проверенную временем схему next-next-next.</p><p>После установки я запустил еще одну копию консоли и перейдя в папку с моим сервером выполнил</p></p>C:\\Users\\N1PhANtoM> cd C:\\JSBlog<br/>C:\\JSBlog> git init<br/>C:\\JSBlog> git add test.js<br/>C:\\JSBlog> git commit -m "first commit"<br/>C:\\JSBlog> git remote add origin https://github.com/N1PhANtoM/JSBlog.git<br/>C:\\JSBlog> git push -u origin master</p><p>Мой код волшебным образом отобразился в репозитории github и вуаля, всё заработало.</p></div>');

posts.push('<h2 class="post-title" id="s2">Шаг 2. Избавляюсь от порта.</h2><div class="post-description"><p>Воспользовавшись <a href="http://dvisagie.blogspot.ru/2013/02/running-nodejs-alongside-iis-on-windows.html ">вот этим замечательным гайдом</a> я, по факту, в два клика настроил в IIS обратный прокси через Url rewrite, и теперь порт больше не нужен для доступа к блогу.</p></div>');

posts.push('<h2 class="post-title" id="s3">Шаг 3. Немного CSS.</h2><div class="post-description"><p>По просьбам трудящихся, я решил заняться выбором CSS модуля, дабы устранить эффект красных глаз. Я сторонник всего минималистичного, поэтому главными критериями были:</p><ol><li>Легковестность.</li><li>Минималистичность.</li><li>Доступность и простота.</li><li>Приверженность стандартам.</li></ol><p>Я просмотрел несколько модулей и целых фреймворков таких как: <a href="http://materializecss.com/">Materialize</a>, <a href="http://getuikit.com/">uikit</a>, <a href="http://milligram.github.io/">Milligram</a>, <a href="http://cardinalcss.com/">Cardinal</a>. Это то что удалось нагуглить за пол часа в качестве подходящих вещей, но остановился я в итоге на  <a href="http://purecss.io/">Pure</a>. Подкупил он меня тем, что это очень легковесный модуль, а также тем, что можно отключать ненужные части или грузить по необходимости. Плюс у них уже есть в примерах шаблон блога, который я тут и использовал пока.</p><p>Первое что я сделал - это закинул шаблон на свой сервер и создал для него приложение в IIS. Так как Nodejs является однопоточным, он плохо работает со статическими файлами и рекомендуется выносить их на внешний сервер, коим у меня является IIS. Там я создал приложение и привязал к нему поддомен s.htwdev.ru. Сам Pure я пока буду использовать при помощи CDN. Позже, когда я займусь фронтендом вплотную, я решу, как его подружить с React, на котором будет писаться фронт, либо выберу что-то другое.</p><p>После этого мне пришлось переписать разметку всей страницы, так как она по прежнему представляет из себя статичный html. Заодно я поменял порядок шагов, чтобы сверху был последний.</p></div>');

posts.push('<h2 class="post-title" id="s4">Шаг 4. Модули.</h2><div class="post-description"><p>Пришло время подключить пару модулей. Первым делом я подключил Eslint, чтобы он ругался на меня, так как человек работает лучше, когда на него ругаются… наверное. На самом деле, я новичок на платформе и надеюсь, что он меня будет направлять. Но банально оказалось, что точки с запятой заставлять меня ставить, он по умолчанию не будет, что меня лично опечалило. </p><p>Для начала я немного реорганизовал проект. Переименовал test.js в index.js и поместил его в папку server, где надеюсь у меня будет серверная часть. Затем я в корне папки проекта вызвал команду</p><p>C:\\JSBlog>Npm install eslint</p><p>После чего еще команду</p><p>create file .eslintrc.json</p><p>чтобы создался файл настроек, в который я позднее дописал строчку в объект rules</p><p>"semi": ["error", "always"],</p><p>чтобы система ругалась, когда я забываю точки с запятой. </p><p>Я забыл упомянуть, что теперь я всё это делаю в <a href="http://code.visualstudio.com">Visual Studio Code</a>. Я еще не понял хороша она или плоха, пока просто пробую. Следующим делом я установил модуль <a href="http://expressjs.com">express</a>, который будет помогать мне в дальнейшем. Это фреймворк для NodeJS, который позволяет проще разрабатывать серверные приложения, так как хранит в себе ряд удобных штук и концепцию middleware.  Первым делом нужно инициализировать npm в нашей серверной папке для этого выполняем команду:</p><p>C:\\JSBlog\\server>Npm init </p><p>И указываем данные которые она просит. Результатом будет файл package.json с данными и зависимостями. После чего выполняем команду</p><p>npm install express --save</p><p>Это установит модуль express в нашей приложение, а параметр --save пропишет его как зависимость в package.json.</p><p>Теперь нужно переписать приложение под этот фреймворк, для этого воспользуемся <a href="http://expressjs.com/en/starter/hello-world.html">примером с официального сайта express</a>. Я не буду приводить здесь итоговый код, так как он слишком большой. Он доступен <a href="https://github.com/N1PhANtoM/JSBlog">в репозитории проекта на GitHub</a></p></div></div>');
  
posts.push('<h2 class="post-title" id="s5">Шаг 5. Реорганизация проекта и окружения.</h2><div class="post-description"><p>Я решил в очередной раз реорганизовать проект, чтобы он был более понятным и удобным. Это очень сложно сделать при данных технологиях, любой проект как я могу судить рано или поздно превращается в жуткую кашу, и моя цель как можно дольше этого избежать. Я решил, что исходники у меня будут храниться в папке src и там далее делиться на server и client. Пока у меня нет как такого клиента, так как вся разметка создаётся в nodejs и выдаётся на клиент готовой, но рано или поздно фронтенд появится. </p><p>Также, я немного повозился с адаптацией к мобильным, и теперь этот текст более-менее можно читать на небольшом портретно ориентированном экране смартфона. Для этого я добавил</p><p>&lt;meta content="initial-scale=1, width=device-width" name="viewport" /&gt;</p><p>в шапку выходного html (сайта). Этот управляющий элемент говорит браузеру что содержимое сайта должно подстраиваться под ширину экрана устройства с применением масштаба 1 к 1. Также я заменил отступы, указанные в пикселях, процентными значениями подобранными эмпирическим путём (перебором).</p><p>Дальше я узнал о существовании такой вещи как <a href="https://github.com/remy/nodemon">nodemon</a></p><p>Эту штука следит за изменениями файлов в корне nodejs и автоматически перезапускает сервер, позволяя удобно вести отладку приложения что называется «на горячую». Для установки необходимо выполнить в папке server</p><p>npm install --save-dev nodemon</p><p>Это добавит nodemon в зависимости в package.json и --save-dev добавить его только в зависимости разработки.</p><p>Теперь в файле package.json необходимо создать две среды dev и prod, например, с разной логикой работы. Например, я хочу чтобы в продуктивной среде у меня запускался node.js напрямую, а в среде разработки работал nodemon. Для этого я добавляю в package.json раздел </p> <p>        "scripts": {<br/>"dev": "nodemon index.js",<br/>"prod": "node index.js"<br/>}</p><p>После чего проверяю, что всё работает командой в терминале:</p><p>С:\\JSBlog\\src\\server>npm run dev</p><p>Пробую изменить index.js в проекте и вижу, что сервер автоматически перезапускается.</p></div>');
  