import{n as e}from"./editor-vendor-B43TTzmv.js";import{t}from"./path-BqdFp5FR.js";import{t as n}from"./CodeBlock-D5hFuNtB.js";import{t as r}from"./useGulpPageMeta-AEjvRag6.js";import{t as i}from"./TerminalBlock-C3tBmFyl.js";var a=e();function o(){return r(),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,a.jsx)(`h2`,{className:`sound_only`,children:`요약 설명`}),(0,a.jsxs)(`p`,{children:[`기본 HTML만으로는 `,(0,a.jsx)(`code`,{children:`header`}),`, `,(0,a.jsx)(`code`,{children:`footer`}),` 같은 `,(0,a.jsxs)(`b`,{children:[`공통 영역(이하 '`,(0,a.jsx)(`i`,{className:`underline`,children:`공통 영역`}),`')을 include할 수 없어`]}),`사이트를 구성하는 데 큰 불편함이 있습니다.`,(0,a.jsx)(`br`,{}),`ASP, PHP, JSP 같은 서버 사이드 언어를 사용하면 공통 영역을 별도의 파일로 분리하여 include할 수 있지만, 이를 위해서는 `,(0,a.jsx)(`b`,{children:`각 언어에 맞는 서버 환경을 따로 설정해야 하는 번거로움`}),`이 있습니다.`,(0,a.jsx)(`br`,{}),`하지만 Gulp에서는 이러한 서버 언어 없이도 `,(0,a.jsx)(`code`,{className:`t_darkblue weight-600`,children:`gulp-nunjucks-render`}),` 같은 패키지를 사용하여`,(0,a.jsx)(`b`,{children:`공통 영역을 손쉽게 분리하고 재사용할 수 있는 템플릿 기반의 HTML 작성이 가능`}),`합니다.`]}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[`Gulp에는 약 4,000여 개의 다양한 패키지가 존재하며, 이 중 HTML을 편집할 때 주로 사용되는 대표적인 패키지로는`,(0,a.jsx)(`code`,{children:`gulp-nunjucks-render`}),`,`,(0,a.jsx)(`code`,{children:`gulp-file-include`}),`,`,(0,a.jsx)(`code`,{children:`gulp-pug`}),` 등이 있습니다. 이 가운데 UXKM에서는 `,(0,a.jsx)(`code`,{className:`t_darkblue weight-600`,children:`gulp-nunjucks-render`}),`가 가장 효율적이라고 판단하였고,`,(0,a.jsx)(`i`,{className:`underline`,children:`실제로 UXKM 웹사이트 제작에도 사용하였습니다.`}),(0,a.jsx)(`br`,{}),`따라서 본 커리큘럼에서는 `,(0,a.jsx)(`code`,{className:`t_darkblue weight-600`,children:`gulp-nunjucks-render`}),`를 중심으로 HTML 편집 커리큘럼을 진행합니다.`]})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`4.1.1. gulp-nunjucks-render란?`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[(0,a.jsx)(`code`,{children:`gulp-nunjucks-render`}),`는 Gulp 작업 흐름에서`,(0,a.jsx)(`b`,{children:`Nunjucks 템플릿 엔진을 사용하여 HTML 파일을 효율적으로 작성하고 렌더링`}),`할 수 있도록 도와주는 플러그인입니다.`,(0,a.jsx)(`br`,{}),`Nunjucks(이하 `,(0,a.jsx)(`b`,{children:`njk`}),`)는 `,(0,a.jsx)(`strong`,{children:`모질라(Mozilla)`}),`에서 개발한 HTML 기반 템플릿 언어로,`,(0,a.jsx)(`b`,{children:`템플릿 상속과 include, layout 기능을 표준으로 지원`}),`하여 반복적이고 비효율적인 HTML 작성 과정을 크게 줄여줍니다.`]}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`정적 웹사이트 개발 시 `,(0,a.jsx)(`b`,{className:`t_blue`,children:`njk`}),`를 사용하면`,(0,a.jsx)(`code`,{children:`header`}),`, `,(0,a.jsx)(`code`,{children:`footer`}),` 같은 `,(0,a.jsx)(`b`,{children:`공통 영역`}),`을 재사용하거나, 디자인 구조에 따라 유연하게 레이아웃을 조정할 수 있어 `,(0,a.jsx)(`b`,{children:`유지보수가 훨씬 쉬워집니다.`})]}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[(0,a.jsx)(`b`,{children:`njk`}),`는 `,(0,a.jsx)(`strong`,{children:`JavaScript의 기본 문법(변수, 조건문, 반복문 등)`}),`을 기반으로 동작하기 때문에, JavaScript에 대한 이해가 있다면 더 효율적으로 활용할 수 있습니다.`,(0,a.jsx)(`br`,{}),`다만, JavaScript에 익숙하지 않더라도 `,(0,a.jsx)(`b`,{children:`커리큘럼을 따라가면 기본적인 템플릿 구성과 레이아웃 작성은 충분히 가능`}),`하므로 부담 없이 학습할 수 있습니다.`]})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`4.1.2. html 폴더 세팅`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[(0,a.jsx)(`b`,{className:`t_blue`,children:`njk`}),`를 활용하려면 파일 확장자를 `,(0,a.jsx)(`code`,{children:`*.html`}),`에서`,(0,a.jsx)(`code`,{children:`*.njk`}),`로 변경해야 합니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`i`,{className:`folder`,children:`src`}),` 폴더에 있는 `,(0,a.jsx)(`code`,{children:`*.njk`}),` 파일을 퍼블리싱하면 `,(0,a.jsx)(`i`,{className:`t_blue`,children:`Gulp`}),`는 `,(0,a.jsx)(`code`,{children:`*.html`}),`로 변환하여 `,(0,a.jsx)(`i`,{className:`folder`,children:`dist`}),` 폴더에 생성합니다.`,(0,a.jsx)(`br`,{})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`html 내부에 폴더와 파일 추가`}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`기존 `,(0,a.jsx)(`b`,{className:`filename t_777`,children:`index.html`}),`을`,(0,a.jsx)(`b`,{className:`filename t_blue`,children:`index.njk`}),`로 변경한 후 아래와 같이 `,(0,a.jsx)(`i`,{className:`folder`,children:`html`}),` 폴더를 구성하고 `,(0,a.jsx)(`b`,{children:`각각의 파일에 코드를 복사하세요.`}),(0,a.jsx)(`br`,{}),(0,a.jsxs)(`mark`,{children:[`아래 코드 중 생소한`,(0,a.jsx)(`b`,{className:`t_blue`,children:`njk`}),` 문법이 있습니다. 다음 '`,(0,a.jsx)(`b`,{className:`t_black`,children:`Gulp NJK 문법`}),`' `,(0,a.jsx)(`b`,{className:`t_black`,children:`페이지`}),`에서 자세하게 소개합니다.`]})]}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_html_folder.png`,alt:`html 폴더 구조 및 파일 생성`})}),(0,a.jsx)(n,{filename:`Copy folders and file names`,title:`html folder`,language:`html`,className:`uk_gist_code_box mt_ms`,children:`/* 폴더와 파일을 구성하세요. */
      					html __folder_name__
      						_template __folder_name__
      							_include __folder_name__
      								_footer.njk __file_name__
      								_header.njk __file_name__
      							_json __folder_name__
      								_gnb.json __file_name__
      							_macro __folder_name__
      								_macro.njk __file_name__
      							_layout.njk __file_name__
      						pages __folder_name__
      							history.njk __file_name__
      							intro.njk __file_name__
      						index.njk __file_name__`}),(0,a.jsx)(`div`,{className:`mt_ms warning block_warning t_666`,children:(0,a.jsxs)(`p`,{children:[`언더바(`,(0,a.jsx)(`code`,{children:`_`}),`)로 시작하는 폴더나 파일은 `,(0,a.jsx)(`b`,{children:`빌드 대상이 아니며`}),`, 퍼블리싱 단계에서만 사용되는 `,(0,a.jsx)(`b`,{children:`보조용 파일 및 폴더`}),`입니다.`,(0,a.jsx)(`br`,{}),`예를 들어, `,(0,a.jsx)(`i`,{className:`filename t_666`,children:`_header.njk`}),`, `,(0,a.jsx)(`i`,{className:`filename t_666`,children:`_footer.njk`}),`파일은 `,(0,a.jsx)(`i`,{className:`filename t_blue`,children:`index.njk`}),`, `,(0,a.jsx)(`i`,{className:`filename t_blue`,children:`intro.njk`}),`,`,(0,a.jsx)(`i`,{className:`filename t_blue`,children:`history.njk`}),` 각각의 파일에 병합되어 빌드 됩니다.`]})})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`_include 파일 세팅 (header, footer)`}),(0,a.jsx)(n,{filename:`footer.njk`,title:`footer.njk`,language:`html`,className:`uk_gist_code_box mt_ms`,children:`<footer class=&#34;footer&#34;>
      						<address>&copy; 2022 Gulp Setting</address>
      					</footer>
      					<!-- // footer -->`}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[(0,a.jsx)(`i`,{className:`filename`,children:`_header.njk`}),`에서는 `,(0,a.jsx)(`i`,{className:`filename`,children:`_gnb.json`}),`의 `,(0,a.jsx)(`code`,{children:`data`}),`를 이용해서 메뉴를 구성합니다.`,(0,a.jsx)(`br`,{}),`코드 적용 후 `,(0,a.jsxs)(`mark`,{children:[(0,a.jsx)(`code`,{children:`<a>`}),` 태그의 tab indent를 반복문 선언 라인에 맞춰주세요.`]})]}),(0,a.jsx)(n,{filename:`header.njk`,title:`header.njk`,language:`html`,className:`uk_gist_code_box mt_ms`,children:`<header class="header">
      						<strong>Gulp Setting</strong>
      						<nav>
      							{%- for navigation in gnb_data %}
      							<a href="{{ navigation.href }}">{{ navigation.name }}</a>
      							{%- endfor %}
      						</nav>
      					</header>
      					<!-- // header -->`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`_json 파일 세팅`}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[(0,a.jsx)(`i`,{className:`filename`,children:`_header.njk`}),`의 메뉴 구성에 사용되며, 메뉴 외에 `,(0,a.jsx)(`code`,{children:`json`}),`형식이 필요한 다른 부분에도 사용 가능합니다.`]}),(0,a.jsx)(n,{filename:`_gnb.json`,title:`_gnb.json`,language:`html`,className:`uk_gist_code_box mt_ms`,children:`{
      						"gnb_data": [
      							{
      								"name": "home",
      								"href": "/"
      							},
      							{
      								"name": "intro",
      								"href": "/pages/intro.html"
      							},
      							{
      								"name": "history",
      								"href": "/pages/history.html"
      							}
      						]
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`_macro 파일 세팅`}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[(0,a.jsx)(`code`,{children:`macro`}),`는 `,(0,a.jsx)(`b`,{className:`t_blue`,children:`njk`}),`의 문법이며, 재사용 가능한 콘텐츠를 함수의 형태(function)로 정의하는 문법입니다.`]}),(0,a.jsx)(n,{filename:`_macro.njk`,title:`_macro.njk`,language:`html`,className:`uk_gist_code_box mt_ms`,children:`{%- macro image( class, src, alt, width="", height="auto" ) -%}
      						<figure class="{{ class }}">
      							<img src="{{ src }}" width="{{ width }}" height="{{ height }}">
      							<figcaption>{{ alt }}</figcaption>
      						</figure>
      					{%- endmacro %}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`_layout.njk 파일 세팅`}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`공통 레이아웃 템플릿을 설정하는 파일입니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`b`,{children:`하나의 템플릿으로 메인과 서브 페이지를 함께 구성할 수도 있고, 메인과 서브를 각각 분리하여 설정할 수도 있습니다.`}),`또한, 서브 페이지의 레이아웃이 여러 유형일 경우 `,(0,a.jsx)(`b`,{children:`각 유형별로 별도의 레이아웃 템플릿을 만들어 설정`}),`할 수 있어 프로젝트 구조에 맞게 유연하게 대응할 수 있습니다.`]}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`아래 `,(0,a.jsx)(`code`,{children:`include`}),` 문법은 `,(0,a.jsx)(`b`,{className:`t_blue`,children:`njk`}),`의 정식 `,(0,a.jsx)(`code`,{children:`include`}),` 문법이 아닙니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`b`,{className:`t_blue`,children:`njk`}),`의 유일한 단점은 빌드 후 생성된 `,(0,a.jsx)(`b`,{children:`HTML 코드의 들여쓰기(Tab Indent)가 의도한 대로 정리되지 않는다는 점`}),`입니다. 이 단점은 `,(0,a.jsx)(`code`,{children:`macro`}),`와 `,(0,a.jsx)(`code`,{children:`filter`}),`를 활용해 들여쓰기를 수동으로 조정함으로써 어느 정도 보완할 수 있습니다.`,(0,a.jsx)(`br`,{}),`또한 `,(0,a.jsx)(`code`,{children:`-`}),`(minus) 기호를 사용하면 `,(0,a.jsx)(`b`,{children:`불필요한 빈 줄이 생성되는 것을 방지`}),`할 수 있습니다.`,(0,a.jsx)(`br`,{}),(0,a.jsxs)(`mark`,{children:[`'`,(0,a.jsx)(`b`,{children:`Gulp NJK 문법`}),`' `,(0,a.jsx)(`b`,{children:`페이지`}),`에서 자세하게 소개합니다.`]})]}),(0,a.jsx)(n,{filename:`_layout.njk`,title:`_layout.njk`,language:`html`,className:`uk_gist_code_box mt_ms`,children:`{%- macro include(fileName) -%}
      						{%- include fileName ignore missing -%}
      					{%- endmacro -%}
      					{#- // 들여쓰기(Tab Indent) 조정을 위한 macro -#}

      					<!DOCTYPE html>
      					<html lang="ko">
      					<head>
      						<meta charset="UTF-8">
      						<title>Gulp Setting</title>
      						<link href="/assets/css/style.min.css" rel="stylesheet" />
      					</head>
      					<body>
      					<div class="wrap">
      						{{ include( "_templates/_include/_header.njk" ) | tabIndent(1) }}

      						<main class="container">
      							{% filter tabIndent(1) %}
      								{% block content %}
      								{% endblock %}
      							{%- endfilter %}
      						</main>
      						<!-- // content -->

      						{{ include( "_templates/_include/_footer.njk" ) | tabIndent(1) }}
      					</div>
      					<!-- //wrap -->

      					<script src="/assets/js/main.min.js"><\/script>
      					</body>
      					</html>`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`페이지(메인, 서브) 파일 세팅`}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`페이지 소스를 보면 구조가 단순합니다. 레이아웃 없이 콘텐츠만으로 구성되어 있으며, 실제 레이아웃은 `,(0,a.jsx)(`i`,{className:`filename`,children:`_layout.njk`}),` 파일과 `,(0,a.jsx)(`b`,{children:`병합되어 빌드`}),`됩니다.`,(0,a.jsx)(`br`,{}),`각 페이지는 `,(0,a.jsx)(`code`,{children:`block content`}),` 영역 안에 해당 콘텐츠만 삽입하며,`,(0,a.jsx)(`i`,{className:`filename`,children:`index.njk`}),` 파일에서는 `,(0,a.jsx)(`code`,{children:`macro`}),`를 사용하기 위해`,(0,a.jsx)(`i`,{className:`filename`,children:`_macro.njk`}),` 파일을 `,(0,a.jsx)(`code`,{children:`import`}),`합니다.`]}),(0,a.jsx)(n,{filename:`index.njk`,title:`index.njk`,language:`html`,className:`uk_gist_code_box mt_ms`,children:`{%- extends "_templates/_layout.njk" -%}
      					{%- import "_templates/_macro/_macro.njk" as macro -%}

      					{% block content %}
      						<h1>index 페이지 입니다.</h1>
      						{{ macro.image( "image_box", "/assets/images/visual.png", "메인 이미지 입니다.", width="400px" ) }}
      					{%- endblock %}`}),(0,a.jsx)(n,{filename:`history.njk`,title:`history.njk`,language:`html`,className:`uk_gist_code_box mt_ms`,children:`{%- extends "_templates/_layout.njk" -%}

      					{% block content %}
      						<h1>history 페이지 입니다.</h1>
      					{%- endblock %}`}),(0,a.jsx)(n,{filename:`intro.njk`,title:`intro.njk`,language:`html`,className:`uk_gist_code_box mt_ms`,children:`{%- extends "_templates/_layout.njk" -%}

      					{% block content %}
      						<h1>intro 페이지 입니다.</h1>
      					{%- endblock %}`})]})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`4.1.3. njk 및 부가 패키지 설치`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[(0,a.jsx)(`b`,{className:`terminal`,children:`터미널`}),`에서 아래 명령을 실행하여 `,(0,a.jsxs)(`mark`,{children:[(0,a.jsx)(`b`,{children:`njk`}),`(gulp-nunjucks-render)`]}),`와 `,(0,a.jsx)(`i`,{className:`under`,children:`html 빌드에 필요한 부가적인 패키지`}),`를 설치합니다.`]}),(0,a.jsx)(i,{className:`terminal_code_box mt_m`,children:`npm i gulp-nunjucks-render -D
      				npm i gulp-plumber -D
      				npm i gulp-cached -D
      				npm i gulp-data -D
      				npm i fs -D
      				npm i del@6.0.0 -D

      				// shorthand
      				npm i gulp-nunjucks-render gulp-plumber gulp-cached gulp-data fs del@6.0.0 -D`}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`gulp-nunjucks-render`}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[(0,a.jsx)(`b`,{children:`Nunjucks 템플릿 파일(.njk)을 HTML로 렌더링하기 위한 메인 패키지`}),`입니다.`,(0,a.jsx)(`br`,{}),`Gulp 작업 흐름에서 Nunjucks 템플릿을 컴파일하여 최종 HTML 파일을 생성하는 핵심 역할을 담당합니다.`]})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`gulp-plumber`}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`Gulp 작업(예: SCSS 컴파일, 템플릿 렌더링 등)을 하다 보면 `,(0,a.jsx)(`b`,{children:`작은 문법 오류 하나에도 전체 Gulp 프로세스가 멈추는 일이 발생`}),`할 수 있습니다. 이럴 경우 매번 Gulp를 다시 실행해야 해서 매우 번거롭고 작업 흐름이 끊깁니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`code`,{className:`t_blue`,children:`gulp-plumber`}),`는 Gulp에서 사용하는 `,(0,a.jsx)(`b`,{children:`에러 처리용 플러그인`}),`으로, `,(0,a.jsx)(`b`,{children:`작업 도중 에러가 발생해도 Gulp 프로세스가 중단되지 않도록 도와줍니다.`})]}),(0,a.jsxs)(`dl`,{className:`dl_dot_lst mt_s`,children:[(0,a.jsxs)(`dt`,{children:[(0,a.jsx)(`code`,{className:`t_blue`,children:`gulp-plumber`}),`를 사용하면:`]}),(0,a.jsx)(`dd`,{children:`에러가 발생해도 Gulp가 중단되지 않고 계속 작동합니다.`}),(0,a.jsx)(`dd`,{children:`에러 메시지를 콘솔에 출력하여 문제 원인을 확인할 수 있습니다.`}),(0,a.jsx)(`dd`,{children:`개발 중 자동 리로드나 watch 기능이 끊기지 않습니다.`})]})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`gulp-cached`}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`Gulp는 기본적으로 `,(0,a.jsx)(`code`,{children:`src`}),` 경로 내 파일 중 하나라도 변경되면, `,(0,a.jsx)(`b`,{children:`해당 경로에 포함된 모든 파일을 다시 처리`}),`합니다. 예를 들어 `,(0,a.jsx)(`i`,{className:`filename`,children:`history.html`}),` 하나만 수정해도,`,(0,a.jsx)(`i`,{className:`filename`,children:`intro.html`}),`, `,(0,a.jsx)(`i`,{className:`filename`,children:`sitemap.html`}),` 등 나머지 파일들도 함께 빌드 대상이 됩니다.`,(0,a.jsx)(`b`,{children:`파일 수가 많을 경우 이로 인해 빌드 시간이 비효율적으로 길어질 수 있습니다.`}),(0,a.jsx)(`br`,{}),(0,a.jsx)(`code`,{children:`gulp-cached`}),`는 `,(0,a.jsx)(`b`,{children:`파일의 변경 여부를 캐시에 저장`}),`해,`,(0,a.jsxs)(`b`,{children:[`변경된 파일만 `,(0,a.jsx)(`i`,{className:`t_blue`,children:`Gulp task`}),`에서 처리하도록 만들어 줍니다.`]}),`이 방식은 특히 정적 HTML, 이미지, Sass, JavaScript 파일이 많은 프로젝트에서 `,(0,a.jsx)(`b`,{children:`처리 시간을 크게 줄이는 데 효과적`}),`입니다.`]})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`gulp-data`}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[(0,a.jsx)(`code`,{className:`t_blue`,children:`gulp-data`}),`는 Gulp에서 사용하는`,(0,a.jsx)(`strong`,{children:`템플릿 엔진`}),`(Nunjucks, Pug, Handlebars 등)에 `,(0,a.jsx)(`b`,{children:`외부 데이터를 주입하기 위해 사용되는 플러그인`}),`입니다.`,(0,a.jsx)(`br`,{}),`JSON 파일, front-matter, API 응답, 데이터베이스 결과 등 `,(0,a.jsx)(`b`,{children:`다양한 형태의 데이터를 템플릿 렌더링 시점에 동적으로 삽입`}),`할 수 있습니다.`,(0,a.jsx)(`br`,{})]}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`예를 들어, `,(0,a.jsx)(`i`,{className:`filename`,children:`gnb.json`}),` 파일에 정의된 내비게이션 데이터를 불러와 HTML 템플릿에 삽입하면,`,(0,a.jsx)(`b`,{children:`메뉴 항목을 코드 없이 데이터만으로 관리`}),`할 수 있습니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`code`,{className:`t_blue`,children:`gulp-data`}),`는 각 파일의 경로 정보를 활용해 `,(0,a.jsx)(`b`,{children:`파일별로 다른 데이터를 적용할 수 있는 점도 큰 장점`}),`입니다.`]}),(0,a.jsxs)(`dl`,{className:`mt_s dl_dot_lst`,children:[(0,a.jsx)(`dt`,{children:`핵심 기능`}),(0,a.jsx)(`dd`,{children:`Gulp 스트림 안에서 외부 데이터를 불러와 템플릿에 주입할 수 있습니다.`}),(0,a.jsx)(`dd`,{children:`JSON, YAML, front-matter, 동적 함수, DB 쿼리 등 다양한 데이터 소스 사용 가능합니다.`}),(0,a.jsx)(`dd`,{children:`템플릿 파일 단위로 다른 데이터 적용이 가능합니다. (예: 파일명 기반 매핑)`}),(0,a.jsx)(`dd`,{children:`주로 gulp-nunjucks, gulp-pug 등과 함께 사용합니다.`})]})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`fs`}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[(0,a.jsx)(`code`,{className:`t_blue`,children:`fs`}),`는 `,(0,a.jsx)(`b`,{children:`Node.js에서 기본으로 제공하는 파일 시스템(File System) 모듈`}),`로, 파일이나 디렉토리에 접근하여 `,(0,a.jsx)(`b`,{children:`생성, 읽기, 쓰기, 삭제 등의 작업을 수행할 수 있게 해줍니다.`}),(0,a.jsx)(`br`,{}),`이 모듈을 사용하면 텍스트 파일, JSON 파일, 이미지 파일 등 `,(0,a.jsx)(`b`,{children:`다양한 파일을 Node.js 코드에서 직접 다룰 수 있으며`}),`, 동기(`,(0,a.jsx)(`code`,{children:`fs.readFileSync`}),`)와 비동기(`,(0,a.jsx)(`code`,{children:`fs.readFile`}),`) 방식 모두 지원합니다.`,(0,a.jsx)(`br`,{}),`본 커리큘럼에서는 `,(0,a.jsx)(`code`,{className:`t_blue`,children:`fs`}),`를 사용해 JSON 파일을 읽고, 그 데이터를 `,(0,a.jsx)(`b`,{className:`t_blue`,children:`njk`}),` 빌드 과정에 활용합니다.`]})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`del`}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[(0,a.jsx)(`code`,{className:`t_blue`,children:`del`}),`은 Node.js에서 사용하는 파일 및 폴더 삭제용 유틸리티로,`,(0,a.jsx)(`b`,{children:`Gulp 등 빌드 도구에서 불필요한 파일이나 디렉터리를 제거할 때 사용됩니다.`}),(0,a.jsx)(`br`,{}),`주로 `,(0,a.jsx)(`code`,{children:`dist`}),`, `,(0,a.jsx)(`code`,{children:`build`}),`, `,(0,a.jsx)(`code`,{children:`temp`}),`와 같은 결과물 폴더를`,(0,a.jsx)(`b`,{children:`빌드 전에 먼저 삭제하여 항상 최신 상태로 재생성`}),`할 수 있게 도와줍니다.`,(0,a.jsx)(`br`,{}),`Gulp에서는 `,(0,a.jsx)(`i`,{className:`folder`,children:`dist`}),` 폴더를 항상 최신 상태로 유지하기 위해, 작업 실행 전 `,(0,a.jsx)(`code`,{className:`t_blue`,children:`del`}),`을 사용해 `,(0,a.jsx)(`i`,{className:`folder`,children:`dist`}),` 폴더를 삭제한 후 다시 빌드합니다.`]})]})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`4.1.4. gulpfile.babel.js 세팅`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[`이 섹션에서 `,(0,a.jsx)(`b`,{className:`t_blue`,children:`njk`}),` 및 Gulp의 전반적인 흐름을 세팅합니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`i`,{className:`filename`,children:`gulpfile.babel.js`}),` 파일의 기존 코드를 모두 삭제한 후, 아래 코드를 새로 적용합니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`mark`,{children:`영역별 설명은 주석으로 대체합니다.`})]}),(0,a.jsx)(n,{filename:`gulpfile.babel.js`,title:`gulpfile.babel.js`,language:`html`,className:`uk_gist_code_box mt_m`,children:`// import -----------------------------------------------------------
      				import gulp from "gulp";
      				import nunjucksRender from "gulp-nunjucks-render";
      				import plumber from "gulp-plumber";
      				import data from "gulp-data";
      				import cached from "gulp-cached";
      				import fs from "fs";
      				import del from "del";


      				// routes -----------------------------------------------------------
      				const src = './src';
      				const dist = './dist';
      				const ass = '/assets';

      				// src 폴더의 경로 설정
      				const path_src = {
      					html: src + '/html',
      					css: src + ass + '/css',
      					images: src + ass + '/images',
      					js: src + ass + '/js',
      				}

      				// 빌드될 dist 폴더의 경로 설정
      				const path_dist = {
      					html: dist,
      					css: dist + ass + '/css',
      					images: dist + ass + '/images',
      					js: dist + ass + '/js',
      				};


      				// etc --------------------------------------------------------------
      				const onErrorHandler = (error) => console.log(error);  // plumber option (에러 발생 시 에러 로그 출력)


      				// task -------------------------------------------------------------

      				// html task
      				const html = () => {
      					// 들여쓰기(Tab Indent) 조정을 위한 함수
      					const manageEnvironment = (environment) => {
      						environment.addFilter('tabIndent', (str, numOfIndents, firstLine) => {
      							str = str.replace(/^(?=.)/gm, new Array(numOfIndents + 1).join('\\t'));
      							if(!firstLine) {
      								str = str.replace(/^\\s+/, "");
      							}
      							return str;
      						});
      					};

      					// _gnb.json 파일 적용을 위한 변수
      					const gnbJson = JSON.parse(fs.readFileSync(path_src.html + '/_templates/_json/_gnb.json'));
      					const json_all = {...gnbJson};
      					const datafile = () => {
      						return json_all;
      					}

      					// njk 빌드
      					return gulp.src([
      						path_src.html + '/**/*',                           // 빌드할 njk 파일 경로
      						'!' + path_src.html + '/**/_*',                    // 경로 중 제외할 njk 파일(빌드 때 병합될 파일)
      						'!' + path_src.html + '/**/_*/**/*'                // 경로 중 제외할 폴더 및 폴더의 njk 파일(빌드 때 병합될 파일)
      					])
      					.pipe( plumber({errorHandler:onErrorHandler}) )      // 에러 발생 시 gulp 종료 방지 및 에러 핸들링
      					.pipe( data( datafile) )                             // _gnb.json 적용
      					.pipe( nunjucksRender({                              // njk 적용
      						envOptions: {                                      // njk 옵션 설정
      							autoescape: false,                               // njk 문법의 오류가 있더라도 진행
      						},
      						manageEnv: manageEnvironment,                      // 들여쓰기(Tab Indent) 함수 적용
      						path: [path_src.html],                             // html 폴더 전체 경로
      					}) )
      					.pipe( cached('html') )                              // 변경된 파일 캐시 저장
      					.pipe( gulp.dest(path_dist.html) )                   // 빌드 후 html 파일이 생성될 목적지 설정
      				}

      				// clean task
      				const clean = () => del([dist]);                       // dist 폴더 삭제


      				// series & parallel (task 그룹화) ----------------------------------

      				// 순차적으로 실행되어야 하는 task 그룹
      				const prepare = gulp.series([ clean ]);

      				// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹
      				const assets = gulp.series([ html ]);


      				// export (gulp 실행 명령어) ----------------------------------------

      				// gulp build 실행 (prepare 실행 후 assets 실행)
      				export const build = gulp.series([ prepare, assets ]);

      				// gulp dev 실행 (build 실행)
      				export const dev = gulp.series([ build ]);`})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`4.1.5. gulp dev 실행`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[(0,a.jsx)(`i`,{className:`filename`,children:`gulpfile.babel.js`}),` 파일을 세팅한 후 `,(0,a.jsx)(`b`,{className:`terminal`,children:`터미널`}),`에서 아래 명령을 실행합니다.`]}),(0,a.jsx)(i,{className:`terminal_code_box mt_m`,children:`gulp dev`}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[`Gulp가 실행되고 `,(0,a.jsx)(`b`,{className:`terminal`,children:`터미널`}),`에 Gulp의 작업 내용이 출력됩니다.`]}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_njk_run_dev_cmd.png`,alt:`gulp dev 실행시 터미널에 작업내용 출력`})}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[`세팅이 정상적으로 완료되었다면, `,(0,a.jsx)(`i`,{className:`terminal`,children:`터미널`}),`에 위와 같은 메시지가 출력되며`,(0,a.jsx)(`i`,{className:`filename`,children:`gulpfile.babel.js`}),`에 설정한 순서대로 작업이 실행되는 것을 확인할 수 있습니다.`]}),(0,a.jsxs)(`ol`,{className:`ol_lst indent_small`,children:[(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`code`,{children:`dev`}),` 작업 시작`]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`i`,{className:`folder`,children:`dist`}),` 폴더 삭제를 위한 `,(0,a.jsx)(`code`,{children:`clean task`}),` 작업 시작 → 삭제 완료 후 종료`]}),(0,a.jsxs)(`li`,{children:[`HTML 빌드를 위한 `,(0,a.jsx)(`code`,{children:`html task`}),` 작업 시작 →`,(0,a.jsx)(`code`,{children:`*.njk`}),` 파일을 `,(0,a.jsx)(`code`,{children:`*.html`}),`로 변환하여 `,(0,a.jsx)(`i`,{className:`folder`,children:`dist`}),` 폴더에 생성 → 작업 종료`]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`code`,{children:`dev`}),` 작업 종료`]})]}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`작업이 완료된 후 폴더를 확인해 보면,`,(0,a.jsx)(`i`,{className:`folder`,children:`dist`}),` 폴더가 생성되어 있고 그 안에 `,(0,a.jsx)(`b`,{children:`변환된 HTML 파일들이 포함`}),`되어 있는 것을 볼 수 있습니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`i`,{className:`folder`,children:`_template`}),` 폴더에 있던 파일들은 모두 `,(0,a.jsx)(`b`,{children:`병합되어 HTML 파일로 빌드되었기 때문에`}),`,`,(0,a.jsx)(`i`,{className:`folder`,children:`dist`}),` 폴더에는 `,(0,a.jsx)(`i`,{className:`folder`,children:`pages`}),` 폴더와 `,(0,a.jsx)(`b`,{children:`HTML 파일만 존재하는 것이 정상입니다.`})]}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_njk_run_dev.png`,alt:`gulp dev 실행 후 dist 폴더 및 파일 생성`})})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`4.1.6. 빌드 된 html 코드 확인`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[`빌드가 완료된 후 생성된 HTML 파일에서 `,(0,a.jsx)(`strong`,{children:`들여쓰기(Tab Indent)`}),`가 올바르게 적용되었는지, 불필요한 공백은 없는지 확인해 봅니다.`,(0,a.jsx)(`br`,{}),`각 HTML 파일에 레이아웃과 공통 영역이 정상적으로 병합되어 아래 같은 코드인지 확인해 보세요.`]}),(0,a.jsx)(n,{filename:`index.html`,title:`index.html`,language:`css`,className:`uk_gist_code_box mt_ms`,children:`<!DOCTYPE html>
      				<html lang="ko">
      				<head>
      					<meta charset="UTF-8">
      					<title>Gulp Setting</title>
      					<link href="/assets/css/style.min.css" rel="stylesheet" />
      				</head>
      				<body>
      				<div class="wrap">
      					<header>
      						<strong>Gulp Setting</strong>
      						<nav>
      							<a href="/">home</a>
      							<a href="/pages/intro.html">intro</a>
      							<a href="/pages/history.html">history</a>
      						</nav>
      					</header>
      					<!-- // header -->

      					<main class="container">
      						<h1>index 페이지 입니다.</h1>
      						<figure class="image_box">
      							<img src="/_assets/images/visual.png" width="400px" height="auto">
      							<figcaption>메인 이미지 입니다.</figcaption>
      						</figure>
      					</main>
      					<!-- // content -->

      					<footer>
      						<address>© 2022 Gulp Setting</address>
      					</footer>
      					<!-- // footer -->
      				</div>
      				<!-- //wrap -->

      				<script src="/_assets/js/main.min.js"><\/script>
      				</body>
      				</html>`}),(0,a.jsx)(n,{filename:`history.html`,title:`history.html`,language:`css`,className:`uk_gist_code_box mt_ms`,children:`<!DOCTYPE html>
      				<html lang="ko">
      				<head>
      					<meta charset="UTF-8">
      					<title>Gulp Setting</title>
      					<link href="/assets/css/style.min.css" rel="stylesheet" />
      				</head>
      				<body>
      				<div class="wrap">
      					<header>
      						<strong>Gulp Setting</strong>
      						<nav>
      							<a href="/">home</a>
      							<a href="/pages/intro.html">intro</a>
      							<a href="/pages/history.html">history</a>
      						</nav>
      					</header>
      					<!-- // header -->

      					<main class="container">
      						<h1>history 페이지 입니다.</h1>
      					</main>
      					<!-- // content -->

      					<footer>
      						<address>© 2022 Gulp Setting</address>
      					</footer>
      					<!-- // footer -->
      				</div>
      				<!-- //wrap -->

      				<script src="/_assets/js/main.min.js"><\/script>
      				</body>
      				</html>`}),(0,a.jsx)(n,{filename:`intro.html`,title:`intro.html`,language:`css`,className:`uk_gist_code_box mt_ms`,children:`<!DOCTYPE html>
      				<html lang="ko">
      				<head>
      					<meta charset="UTF-8">
      					<title>Gulp Setting</title>
      					<link href="/assets/css/style.min.css" rel="stylesheet" />
      				</head>
      				<body>
      				<div class="wrap">
      					<header>
      						<strong>Gulp Setting</strong>
      						<nav>
      							<a href="/">home</a>
      							<a href="/pages/intro.html">intro</a>
      							<a href="/pages/history.html">history</a>
      						</nav>
      					</header>
      					<!-- // header -->

      					<main class="container">
      						<h1>intro 페이지 입니다.</h1>
      					</main>
      					<!-- // content -->

      					<footer>
      						<address>© 2022 Gulp Setting</address>
      					</footer>
      					<!-- // footer -->
      				</div>
      				<!-- //wrap -->

      				<script src="/_assets/js/main.min.js"><\/script>
      				</body>
      				</html>`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[`여기까지 html 편집을 위한 `,(0,a.jsx)(`b`,{className:`t_blue`,children:`njk(gulp-nunjucks-render)`}),` 세팅이 마무리됐습니다.`,(0,a.jsx)(`br`,{}),`더 효율적이고 체계적인 HTML 구성을 원한다면 `,(0,a.jsx)(`b`,{children:`Gulp NJK 문법`}),` 페이지를 참고하는 것을 추천합니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`a`,{href:`/buildSystem/gulp/04-gulp_njk/02-njk_syntax`,className:`box_link mt_sm mb_sm`,children:`Gulp NJK 문법 바로가기`})]}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[`현재는 `,(0,a.jsx)(`b`,{children:`HTML 편집을 위한 세팅만 완료된 상태`}),`이므로, 생성된 HTML 파일을 브라우저에서 직접 열어보면`,(0,a.jsx)(`b`,{children:`CSS, JavaScript, 이미지 파일이 제대로 로드되지 않을 수 있습니다.`}),(0,a.jsx)(`br`,{}),`이는 아직 `,(0,a.jsx)(`b`,{children:`웹 서버와 빌드 프로세스가 완전히 구성되지 않았기 때문`}),`이며, 정상적인 현상입니다.`]}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[`다음 단계에서는 `,(0,a.jsx)(`b`,{children:`웹 서버를 구축`}),`하여 `,(0,a.jsx)(`code`,{className:`t_blue`,children:`gulp dev`}),` 실행 시 `,(0,a.jsx)(`b`,{children:`자동으로 브라우저를 열고`}),`,`,(0,a.jsx)(`code`,{className:`t_blue`,children:`gulp.watch`}),`를 통해 `,(0,a.jsx)(`b`,{children:`파일 변경 사항을 실시간으로 감지해 브라우저에 자동 반영`}),`하는 방법을 알아보겠습니다.`]})]}),(0,a.jsx)(`hr`,{}),(0,a.jsx)(`p`,{className:`t_blue mt_xxl`,children:(0,a.jsx)(`b`,{children:`아래 내용은 선택사항으로 건너띄워도 커리큘럼 진행에 문제가 되지 않습니다.`})}),(0,a.jsxs)(`section`,{className:`indent mt_l`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`4.1.7. 에디터기에서 njk 문법 활성화 (WebStorm 기준)`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[(0,a.jsx)(`b`,{children:`njk`}),` 특수 문법은 에디터에서 기본적으로 인식되지 않아 단색으로 표시되는 경우가 많습니다. 이는 퍼블리싱 작업에 직접적인 영향을 주지는 않지만, `,(0,a.jsx)(`b`,{children:`작업 시 불편함을 초래할 수 있습니다.`})]}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`이 문제는 `,(0,a.jsx)(`b`,{className:`t_blue`,children:`Twig`}),` 플러그인을 활용해 해결할 수 있습니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`b`,{className:`t_blue`,children:`Twig`}),`는 Symfony 등 PHP 프레임워크에서 널리 사용되는 템플릿 엔진으로,`,(0,a.jsx)(`b`,{children:`njk`}),`와 유사한 문법 구조를 가지고 있어 문법 강조에 적합합니다.`,(0,a.jsx)(`br`,{}),`플러그인을 설치한 후 `,(0,a.jsx)(`i`,{className:`t_black`,children:`[file name patterns]`}),`에 `,(0,a.jsx)(`code`,{children:`*.njk`}),`를 추가하면, 에디터에서 `,(0,a.jsx)(`b`,{children:`njk`}),` 파일도 `,(0,a.jsx)(`b`,{className:`t_blue`,children:`Twig`}),` 문법으로 인식하게 되어 보다 쾌적한 개발 환경을 만들 수 있습니다.`]}),(0,a.jsx)(`p`,{className:`mt_ml mb_0 notice_blue`,children:`WebStorm 기준으로 njk 문법 활성화 방법을 설명합니다.`}),(0,a.jsxs)(`ol`,{className:`ol_lst mt_ml indent`,children:[(0,a.jsxs)(`li`,{className:`tit_h4 t_black`,children:[(0,a.jsx)(`strong`,{className:`font-16 t_black`,children:`Twig install`}),(0,a.jsxs)(`p`,{className:`mt_sm t_666`,children:[(0,a.jsxs)(`b`,{children:[`[설정(Settings..) `,(0,a.jsx)(`i`,{className:`t_aaa`,children:`>`}),` Plugins]`]}),` 에서`,(0,a.jsx)(`b`,{className:`t_blue`,children:`Twig`}),`을 검색하고 설치합니다.`]}),(0,a.jsx)(`p`,{className:`mt_s`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/twig_install.png`,alt:`twig 설치`,width:`598`,height:`auto`})})]}),(0,a.jsxs)(`li`,{className:`tit_h4 t_black mt_ml`,children:[(0,a.jsx)(`strong`,{className:`font-16 t_black`,children:`njk 파일 패턴 추가`}),(0,a.jsxs)(`p`,{className:`mt_sm t_666`,children:[(0,a.jsxs)(`b`,{children:[`[설정(Settings..) `,(0,a.jsx)(`i`,{className:`t_aaa`,children:`>`}),` Editor `,(0,a.jsx)(`i`,{className:`t_aaa`,children:`>`}),` File Types]`]}),` 에서`,(0,a.jsx)(`b`,{className:`t_blue`,children:`Twig`}),`을 찾고,`,(0,a.jsx)(`b`,{children:`[file name patterns]`}),`에서 `,(0,a.jsx)(`b`,{className:`t_blue`,children:`*.njk`}),` 페턴을 추가합니다.`]}),(0,a.jsx)(`p`,{className:`mt_s`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/twig_add_pattern.png`,alt:`twig의 파일 패턴 추가`,width:`823`,height:`auto`})})]}),(0,a.jsxs)(`li`,{className:`tit_h4 t_black mt_ml`,children:[(0,a.jsx)(`strong`,{className:`font-16 t_black`,children:`Tab indent 설정`}),(0,a.jsxs)(`p`,{className:`mt_sm t_666`,children:[(0,a.jsxs)(`b`,{children:[`[설정(Settings..) `,(0,a.jsx)(`i`,{className:`t_aaa`,children:`>`}),` Editor `,(0,a.jsx)(`i`,{className:`t_aaa`,children:`>`}),` Code Style `,(0,a.jsx)(`i`,{className:`t_aaa`,children:`>`}),` Twig]`]}),` 에서 각각의 항목을 아래 이미지처럼 수정합니다.`]}),(0,a.jsx)(`p`,{className:`mt_s`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/twig_tab_size.png`,alt:`twig의 Tab indent 설정`,width:`963`,height:`auto`})})]})]}),(0,a.jsxs)(`p`,{className:`mt_ml`,children:[(0,a.jsx)(`b`,{className:`t_blue`,children:`Twig`}),` 설치 및 세팅을 마친 후 코드를 확인하면 `,(0,a.jsxs)(`mark`,{children:[`단색이었던 `,(0,a.jsx)(`b`,{className:`t_black`,children:`njk 문법이 활성화`}),`되어 있는 것을 확인할 수 있습니다.`]})]}),(0,a.jsxs)(`figure`,{className:`img_figure mt_ms browser_figure`,children:[(0,a.jsxs)(`figure`,{children:[(0,a.jsx)(`img`,{src:`${t.GULP}/twig_before.png`,alt:`Twig 적용 전 코드 스타일`,width:`819`,height:`auto`}),(0,a.jsx)(`figcaption`,{className:`t_red weight-bold`,children:`[njk 문법 활성화 전]`})]}),(0,a.jsxs)(`figure`,{className:`mt_l`,children:[(0,a.jsx)(`img`,{src:`${t.GULP}/twig_after.png`,alt:`Twig 적용 후 활성화 된 코드 스타일`,width:`819`,height:`auto`}),(0,a.jsx)(`figcaption`,{className:`t_blue weight-bold`,children:`[njk 문법 활성화 적용]`})]})]})]}),(0,a.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,a.jsx)(`img`,{src:`${t.GULP}/04_gulp_01.png`,alt:`njk 세팅`}),(0,a.jsx)(`figcaption`,{children:`njk 세팅`})]})]})}export{o as default};