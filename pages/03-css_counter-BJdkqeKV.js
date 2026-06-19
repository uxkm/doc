const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["pages/UkEditorTarget-CgV_m_A9.js","pages/rolldown-runtime-D8OAEfa_.js","pages/editor-vendor-B43TTzmv.js","pages/codemirror-core-CA-iYlLT.js","pages/UkEditor-B7tQju4L.js","pages/index-D2DR8t_a.js","pages/accessibilityNavigation-CUmYxpJr.js","pages/gnbLite-DLjxsWXO.js","pages/index.css-BbdVxQnf.css","pages/codemirror-lang-css-ZRAXM9KM.js","pages/codemirror-lang-html-DucZSqOu.js","pages/codeFormatting-Df3qoFD9.js"])))=>i.map(i=>d[i]);
import{a as e,r as t}from"./rolldown-runtime-D8OAEfa_.js";import{n,r}from"./editor-vendor-B43TTzmv.js";import{d as i}from"./index-D2DR8t_a.js";import{n as a}from"./PageMeta-C2xS8KmW.js";import{t as o}from"./path-Dn6PSYD1.js";import{t as s}from"./CodeBlock-BVVvsOTH.js";var c=t({default:()=>h}),l=e(r(),1),u=n(),d=(0,l.lazy)(()=>i(()=>import(`./UkEditorTarget-CgV_m_A9.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])));function f(){return(0,u.jsx)(`div`,{className:`uk_editor min_height_300`,"aria-hidden":!0})}var p={mainClass:`css_counter`,type:`publishing`,info:!0,note:!0,sideMenu:!0,reference:!1,contentList:!0,depth3Last:!1,bottomEditor:!1},m={title:`CSS 카운터`,description:`CSS 카운터(counter)는 HTML 문서에 쓰지 않고도 CSS로 숫자를 생성하면서 자동으로 번호를 매기는 기능으로, counter-reset으로 초기화하고 counter-increment로 값을 증가시키며, ::before나 ::after의 content 속성에서 counter()나 counters() 함수를 사용하여 표시할 수 있습니다. 이 페이지에서는 counter-reset, counter-increment 속성과 counter(), counters() 함수를 사용한 자동 번호 부여 방법을 함께 소개합니다.`,keyword:`style, css, Cascading Style Sheets, counter, counters, 자동 번호 부여`};function h(){return a({...m,layout:p}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,u.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`code`,{children:`counter`}),`는 HTML 문서에 쓰지 않고도, CSS로 숫자를 생성하면서 자동으로 번호를 매기는 역할을 합니다.`,(0,u.jsx)(`br`,{}),(0,u.jsx)(`code`,{children:`counter`}),`를 사용하려면 먼저 `,(0,u.jsx)(`code`,{children:`counter-reset`}),` 속성(초깃값 0)을 사용하여 초기화해야 하며, 초기화된 `,(0,u.jsx)(`code`,{children:`counter`}),`의 값은 `,(0,u.jsx)(`code`,{children:`counter-increment`}),`에 따라 증가하거나 감소합니다.`,(0,u.jsx)(`br`,{}),(0,u.jsx)(`code`,{children:`counter`}),`의 이름으로 `,(0,u.jsx)(`code`,{children:`"none"`}),`, `,(0,u.jsx)(`code`,{children:`"inherit"`}),`, `,(0,u.jsx)(`code`,{children:`"initial"`}),`은 사용할 수 없습니다.`]})]}),(0,u.jsxs)(`section`,{className:`mt_xxl indent`,children:[(0,u.jsx)(`h2`,{className:`ml_mn`,children:`CSS 카운터 기본 설명 및 예제`}),(0,u.jsxs)(`p`,{className:`mt_l`,children:[(0,u.jsx)(`code`,{children:`counter`}),`의 값은 `,(0,u.jsx)(`code`,{children:`::before`}),` 또는 `,(0,u.jsx)(`code`,{children:`::after`}),`의 `,(0,u.jsx)(`code`,{children:`content`}),` 속성에서 `,(0,u.jsx)(`code`,{children:`counter()`}),`나 `,(0,u.jsx)(`code`,{children:`counters()`}),` 함수를 사용하여 표시할 수 있습니다.`,(0,u.jsx)(`br`,{}),`일련 번호를 붙이려는 요소의 부모 요소에 `,(0,u.jsx)(`code`,{children:`counter-reset`}),`으로 시작하는 번호를 정하고, 일련 번호가 붙을 요소에 `,(0,u.jsx)(`code`,{children:`counter-increment`}),`로 증가량을 정합니다.`]}),(0,u.jsx)(s,{title:`CSS Counter`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`<!-- 마크업 예제 -->
      			<ol class="list">
      				<li><li>
      				<li><li>
      				<li><li>
      			</ol>

      			<!-- style 예제 -->
      			<style>
      				.list { counter-reset: 카운터 이름 / 시작 숫자; }
      				.list li { list-style: none; }
      				.list li:before {
      					counter-increment: 카운터 이름 / 증감 숫자;
      					content: counter(카운터 이름);
      				}
      			</style>`})]}),(0,u.jsxs)(`section`,{className:`txt_ex indent mt_xxl`,children:[(0,u.jsx)(`h2`,{className:`ml_mn`,children:`counter-reset 속성`}),(0,u.jsxs)(`p`,{className:`mt_l`,children:[`카운터를 사용하려면, `,(0,u.jsx)(`code`,{children:`counter-reset`}),`으로 먼저 카운터 이름과 시작값을 설정해야 합니다.`,(0,u.jsx)(`br`,{}),(0,u.jsx)(`code`,{children:`counter-reset`}),` 속성을 사용하여 카운터 값을 임의의 숫자로 재설정할 수 있습니다.`]}),(0,u.jsx)(s,{title:`counter-reset`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`요소 {
      					counter-reset: initial | 카운터 이름/숫자 | none;
      				}`}),(0,u.jsx)(`div`,{className:`ol_lst indent mt_m`,children:(0,u.jsxs)(`ol`,{children:[(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`b`,{className:`t_black weight-500`,children:(0,u.jsx)(`code`,{children:`initial`})}),` : 초기화`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`b`,{className:`t_black weight-500`,children:`카운터 이름`}),` : 카운터로 사용할 이름(예: `,(0,u.jsx)(`code`,{children:`chapter`}),`, `,(0,u.jsx)(`code`,{children:`section`}),`, `,(0,u.jsx)(`code`,{children:`장`}),`, `,(0,u.jsx)(`code`,{children:`제`}),`)`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`b`,{className:`t_black weight-500`,children:`숫자`}),` : 숫자를 지정하지 않으면 기본값이 0입니다. 숫자는 음수값도 가능하며, 여러 개의 카운터를 설정하고자 할 때 공백으로 분리합니다.`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`b`,{className:`t_black weight-500`,children:(0,u.jsx)(`code`,{children:`none`})}),` : 설정값이 없습니다. (이미 설정된 것을 취소하고자 할 때 사용합니다)`]})]})}),(0,u.jsx)(s,{title:`CSS Counter [counter-reset]`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`<!-- html 예제 -->
      				<ol class="list">
      					<li><li>
      					<li><li>
      					<li><li>
      				</ol>

      				<!-- style 예제 -->
      				<style>
      					.list {
      						counter-reset: title; /* 카운터 이름을 'title'로 설정, 기본값 0으로 지정 */
      						counter-reset: none; /* 설정값을 취소 */
      						&nbsp;
      						/* 여러 카운터를 동시에 설정도 가능(공백으로 분리) */
      						counter-reset: chapter section 1 page; /* chapter와 page는 시작값을 0으로 설정하며 section은 1로 설정 */
      					}
      				</style>`})]}),(0,u.jsxs)(`section`,{className:`txt_ex indent mt_xxl`,children:[(0,u.jsx)(`h2`,{className:`ml_mn`,children:`counter-increment 속성`}),(0,u.jsxs)(`p`,{className:`mt_l`,children:[(0,u.jsx)(`code`,{children:`counter-reset`}),`으로 설정한 값을 증가 또는 감소시키는 역할을 합니다.`]}),(0,u.jsx)(s,{title:`counter-increment`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`요소:before {
      					counter-increment: initial | 카운터 이름/숫자 | none;
      				}`}),(0,u.jsx)(`div`,{className:`ol_lst indent mt_m`,children:(0,u.jsxs)(`ol`,{children:[(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`b`,{className:`t_black weight-500`,children:(0,u.jsx)(`code`,{children:`initial`})}),` : 초기화`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`b`,{className:`t_black weight-500`,children:`숫자`}),` : 숫자를 지정하지 않으면 기본값으로 1씩 증가합니다. 음수값이 가능합니다.`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`b`,{className:`t_black weight-500`,children:(0,u.jsx)(`code`,{children:`none`})}),` : 설정값이 없습니다. (이미 설정된 것을 취소하고자 할 때 사용합니다)`]})]})}),(0,u.jsx)(s,{title:`CSS Counter [counter-increment]`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`<!-- html 예제 -->
      				<ol class="list">
      					<li><li>
      					<li><li>
      					<li><li>
      				</ol>

      				<!-- style 예제 -->
      				<style>
      					.list li:before {
      						counter-increment:chapter; /* 숫자를 설정하지 않으면 기본값으로 1씩 증가함. */
      						counter-increment:chapter -1; /* 1씩 감소. */
      						counter-increment:chapter 2 section -1; /* chapter는 2씩 증가, section은 -1씩 감소. */
      						counter-increment:chapter section 2 page; /* chapter와 page는 1씩 증가 section은 2씩 증가. */
      					}
      				</style>`})]}),(0,u.jsxs)(`section`,{className:`txt_ex indent mt_xxl`,children:[(0,u.jsx)(`h2`,{className:`ml_mn`,children:`counter() 문법`}),(0,u.jsxs)(`p`,{className:`mt_l`,children:[(0,u.jsx)(`code`,{children:`counter()`}),` 함수는 `,(0,u.jsx)(`code`,{children:`counter(name)`}),`와 `,(0,u.jsx)(`code`,{children:`counter(name, style)`}),` 두 가지 형태로 사용할 수 있습니다.`,(0,u.jsx)(`br`,{}),`생성된 텍스트는 가상 요소가 속한 범위에 있는 이름(name)의 가장 안쪽 `,(0,u.jsx)(`code`,{children:`counter`}),`의 값입니다. 텍스트는 지정된 서식(기본값은 십진수 `,(0,u.jsx)(`code`,{children:`decimal`}),`)으로 표시됩니다.`]}),(0,u.jsx)(`div`,{className:`ol_lst indent mt_m`,children:(0,u.jsxs)(`ol`,{children:[(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`b`,{className:`t_black weight-500`,children:(0,u.jsx)(`code`,{children:`name`})}),` : 카운터의 이름, 이름만 쓸 경우 기본값 `,(0,u.jsx)(`code`,{children:`decimal`}),`(십진수)이 적용됩니다.`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`b`,{className:`t_black weight-500`,children:(0,u.jsx)(`code`,{children:`style`})}),` : 선택적, `,(0,u.jsx)(`code`,{children:`style`}),`은 `,(0,u.jsx)(`code`,{children:`list-style-type`}),`과 동일한 값입니다.`,(0,u.jsx)(`div`,{className:`line_code mt_sm`,children:(0,u.jsx)(`p`,{children:(0,u.jsxs)(`code`,{className:`clear`,children:[(0,u.jsx)(`i`,{children:`disc,`}),(0,u.jsx)(`i`,{children:`circle,`}),(0,u.jsx)(`i`,{children:`square,`}),(0,u.jsx)(`i`,{children:`decimal,`}),(0,u.jsx)(`i`,{children:`decimal-leading-zero,`}),(0,u.jsx)(`i`,{children:`lower-roman,`}),(0,u.jsx)(`i`,{children:`upper-roman,`}),(0,u.jsx)(`i`,{children:`lower-greek,`}),(0,u.jsx)(`i`,{children:`lower-latin,`}),(0,u.jsx)(`i`,{children:`upper-latin,`}),(0,u.jsx)(`i`,{children:`armenian,`}),(0,u.jsx)(`i`,{children:`georgian,`}),(0,u.jsx)(`i`,{children:`lower-alpha,`}),(0,u.jsx)(`i`,{children:`upper-alpha,`}),(0,u.jsx)(`i`,{children:`or none`})]})})})]})]})}),(0,u.jsx)(s,{title:`CSS Counter [counter]`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`<!-- html 예제 -->
      				<ol class="list">
      					<li><li>
      					<li><li>
      					<li><li>
      				</ol>

      				<!-- style 예제 -->
      				<style>
      					.list {counter-reset: section;}
      					.list li {list-style:none;}
      					.list li:before {
      						counter-increment: section;
      						content: counter(section) ". ";
      					}
      				</style>`})]}),(0,u.jsxs)(`section`,{className:`txt_ex indent mt_xxl`,children:[(0,u.jsx)(`h2`,{className:`ml_mn`,children:`counters() 문법`}),(0,u.jsxs)(`p`,{className:`mt_l`,children:[(0,u.jsx)(`code`,{children:`counters()`}),` 함수는 `,(0,u.jsx)(`code`,{children:`counters(name, string)`}),`나 `,(0,u.jsx)(`code`,{children:`counters(name, string, style)`}),` 두 가지 형태로 사용할 수 있습니다.`,(0,u.jsx)(`br`,{}),`생성된 텍스트는 가상 요소가 속한 모든 범위에서 지정된 이름을 가진 `,(0,u.jsx)(`code`,{children:`counters`}),`의 값으로, 바깥쪽부터 안쪽까지 값이 주어지며 지정된 문자열로 구분됩니다.`,(0,u.jsx)(`br`,{}),(0,u.jsx)(`code`,{children:`counters`}),`는 지정된 스타일(기본값은 십진수 `,(0,u.jsx)(`code`,{children:`decimal`}),`)로 렌더링됩니다.`]}),(0,u.jsx)(`div`,{className:`ol_lst indent mt_m`,children:(0,u.jsxs)(`ol`,{children:[(0,u.jsxs)(`li`,{children:[(0,u.jsxs)(`b`,{className:`t_black weight-500`,children:[(0,u.jsx)(`code`,{children:`name`}),`, `,(0,u.jsx)(`code`,{children:`string`})]}),` : 값은 필수입니다. (기본값 `,(0,u.jsx)(`code`,{children:`decimal`}),`)`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`b`,{className:`t_black weight-500`,children:(0,u.jsx)(`code`,{children:`string`})}),` : 마침표(`,(0,u.jsx)(`code`,{children:`.`}),`)처럼 앞뒤를 분리하기 위해 사용합니다.`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`b`,{className:`t_black weight-500`,children:(0,u.jsx)(`code`,{children:`style`})}),` : 선택적으로 사용합니다.`]})]})}),(0,u.jsx)(s,{title:`CSS Counter [counters]`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`<!-- html 예제 (counters 적용 시 html도 아래 예제처럼 중첩된 구조로 만들어야 합니다.) -->
      				<div class="list">
      					<ol>
      						<li><li>
      						<li><li>
      						<li>
      							<ol>
      								<li><li>
      								<li><li>
      								<li><li>
      							</ol>
      						<li>
      					</ol>
      				</div>

      				<!-- style 예제 -->
      				<style>
      					.list ol { counter-reset: chapter;}
      					.list li {list-style:none;}
      					.list li:before {
      						counter-increment: chapter;
      						content: counters(chapter, ".") ". ";
      					}
      				</style>`})]}),(0,u.jsxs)(`section`,{className:`view_editor edit_code mt_xxl`,children:[(0,u.jsx)(`h2`,{className:`ve_tit`,children:`counters() 예제`}),(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(f,{}),children:(0,u.jsx)(d,{target:`css/step02/3.3.counter/3.3.counter.html`,className:`uk_editor indent min_height_450 mt_ml`,mode:`htmlmixed`,theme:`moxer`,browser:`default`,result:!0,minHeight:`450px`})}),(0,u.jsxs)(`figure`,{className:`img_figure indent mt_m`,children:[(0,u.jsxs)(`figcaption`,{className:`mt_0 font-16 t_blue`,children:[`위 예제 `,(0,u.jsx)(`code`,{children:`counters`}),` 문법의 중첩 관계도`]}),(0,u.jsx)(`img`,{src:`${o.CSS}/cssMiddleclass/uxkm_counters.svg`,alt:`counters 문법의 중첩 관계도`,className:`mt_m`})]})]}),(0,u.jsx)(`aside`,{className:`browser_support mt_xxl`,"data-tit":`counter`,children:(0,u.jsxs)(`ul`,{children:[(0,u.jsx)(`li`,{className:`ie`,children:`8+`}),(0,u.jsx)(`li`,{className:`edge`,children:`12.0`}),(0,u.jsx)(`li`,{className:`chrome`,children:`4.0`}),(0,u.jsx)(`li`,{className:`firefox`,children:`2.0`}),(0,u.jsx)(`li`,{className:`opera`,children:`10.0`}),(0,u.jsx)(`li`,{className:`safari`,children:`3.1`})]})}),(0,u.jsxs)(`figure`,{className:`img_figure indent mt_l`,children:[(0,u.jsx)(`img`,{src:`${o.CSS}/03_css_03.png`,alt:`CSS 카운터`}),(0,u.jsx)(`figcaption`,{className:`reference`,children:`CSS 카운터`})]}),(0,u.jsxs)(`aside`,{className:`reference_box mt_xxl`,children:[(0,u.jsx)(`strong`,{className:`tit`,children:`CSS 카운터 참조`}),(0,u.jsxs)(`ul`,{className:`link_lst`,children:[(0,u.jsx)(`li`,{className:`reference`,children:(0,u.jsx)(`a`,{href:`https://www.w3.org/TR/css-content-3/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`CSS Generated Content Module Level 3`})}),(0,u.jsx)(`li`,{className:`reference`,children:(0,u.jsx)(`a`,{href:`https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`CSS 카운터 사용하기`})}),(0,u.jsx)(`li`,{className:`reference`,children:(0,u.jsx)(`a`,{href:`https://www.smashingmagazine.com/2013/04/css-generated-content-counters/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`smashingmagazine CSS Generated Content And Counters`})}),(0,u.jsx)(`li`,{className:`reference`,children:(0,u.jsx)(`a`,{href:`https://css-tricks.com/almanac/properties/c/counter-increment/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`css-tricks.com counter-increment`})}),(0,u.jsx)(`li`,{className:`reference`,children:(0,u.jsx)(`a`,{href:`https://css-tricks.com/almanac/properties/c/counter-reset/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`css-tricks.com counter-reset`})})]})]})]})}export{h as default,c as t};