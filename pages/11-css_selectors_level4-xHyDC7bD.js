const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["pages/UkEditorTarget-BmsOF9FC.js","pages/rolldown-runtime-D8OAEfa_.js","pages/editor-vendor-B43TTzmv.js","pages/codemirror-core-CA-iYlLT.js","pages/UkEditor-CcUAUhiG.js","pages/index-C1Pf8jKg.js","pages/accessibilityNavigation-CUmYxpJr.js","pages/gnbLite-DLjxsWXO.js","pages/index.css-CsZXtEcj.css","pages/codemirror-lang-css-ZRAXM9KM.js","pages/codemirror-lang-html-DucZSqOu.js","pages/codeFormatting-Df3qoFD9.js"])))=>i.map(i=>d[i]);
import{a as e,r as t}from"./rolldown-runtime-D8OAEfa_.js";import{n,r}from"./editor-vendor-B43TTzmv.js";import{d as i}from"./index-C1Pf8jKg.js";import{n as a}from"./PageMeta-BmUgKI1F.js";import{t as o}from"./path-CX4eWZRa.js";import{t as s}from"./CodeBlock-BHW3gD7l.js";/* empty css                      */var c=t({default:()=>h}),l=e(r(),1),u=n(),d=(0,l.lazy)(()=>i(()=>import(`./UkEditorTarget-BmsOF9FC.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])));function f(){return(0,u.jsx)(`div`,{className:`uk_editor min_height_300`,"aria-hidden":!0})}var p={mainClass:`css_selectors_level4`,type:`publishing`,info:!0,note:!0,sideMenu:!0,reference:!1,contentList:!0,depth3Last:!1,bottomEditor:!1},m={title:`CSS 선택자 level 4`,description:`CSS Level 4 선택자는 더 쉽고 편리하게 요소를 선택할 수 있게 해주는 새로운 선택자들로, 긴 코드를 짧게 줄이거나 JavaScript 없이도 요소의 상태에 따라 스타일을 바꿀 수 있습니다. 이 페이지에서는 부모 요소를 선택할 수 있는 :has() 의사 클래스, 선택자 목록을 간단하게 표현하는 :is()와 :where() 의사 클래스, 포커스 관련 :focus-visible과 :focus-within 의사 클래스, 링크 선택을 단순화하는 :any-link 의사 클래스를 함께 소개합니다.`,keyword:`style, css, Cascading Style Sheets, 선택자, selector, has, :has, :is, :where, :focus-visible, :focus-within, :any-link, CSS Level 4`};function h(){return a({...m,layout:p}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,u.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`strong`,{className:`t_black`,children:`CSS Level 4 선택자`}),`는 더 쉽고 편리하게 요소를 선택할 수 있게 해주는 새로운 선택자들입니다.`,(0,u.jsx)(`br`,{}),`이 선택자들을 사용하면 긴 코드를 짧게 줄이거나, JavaScript 없이도 요소의 상태에 따라 스타일을 바꿀 수 있습니다.`]}),(0,u.jsxs)(`p`,{className:`mt_s`,children:[`CSS Level 4에서 새로 추가된 주요 선택자로는 `,(0,u.jsx)(`code`,{children:`:has()`}),`, `,(0,u.jsx)(`code`,{children:`:is()`}),`, `,(0,u.jsx)(`code`,{children:`:where()`}),`, `,(0,u.jsx)(`code`,{children:`:focus-visible`}),`, `,(0,u.jsx)(`code`,{children:`:focus-within`}),`, `,(0,u.jsx)(`code`,{children:`:any-link`}),` 등이 있습니다.`]})]}),(0,u.jsxs)(`section`,{className:`txt_ex indent mt_xxl`,"data-conlist":`false`,children:[(0,u.jsxs)(`h2`,{className:`ml_mn`,children:[(0,u.jsx)(`i`,{className:`t_blue`,children:`:has()`}),` 의사 클래스`]}),(0,u.jsxs)(`p`,{className:`mt_l`,children:[(0,u.jsx)(`code`,{children:`:has()`}),` 선택자는 특정 자식 요소를 가지고 있는 부모 요소를 선택할 수 있게 해줍니다.`,(0,u.jsx)(`br`,{}),`예를 들어, 이미지가 있는 카드나 제목이 있는 섹션처럼, 안에 특정 요소가 있는 경우에만 부모 요소에 스타일을 적용하고 싶을 때 사용합니다.`]}),(0,u.jsxs)(`p`,{className:`mt_s`,children:[`또한 자식 요소의 상태에 따라 부모 요소를 선택할 수 있어서, 체크박스가 체크된 폼 필드나 호버된 버튼이 있는 카드처럼, 자식 요소에서 발생하는 이벤트나 상태 변화에 따라 부모 요소의 스타일을 바꿀 수 있습니다.`,(0,u.jsx)(`br`,{}),`이전에는 이런 기능을 구현하려면 JavaScript를 사용해야 했지만, `,(0,u.jsx)(`code`,{children:`:has()`}),` 선택자를 사용하면 CSS만으로도 쉽게 구현할 수 있어 코드가 훨씬 간단해집니다.`]}),(0,u.jsx)(s,{title:`:has() pseudo-class`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`/* 기본 문법 */
      				:has(selector) {
      					/* style 작성 */
      				}

      				/* 예시 1: 이미지가 있는 카드에만 스타일 적용 */
      				.card:has(img) {
      					border: 2px solid blue;
      					padding: 20px;
      				}

      				/* 예시 2: 체크박스가 체크된 폼 필드의 부모 스타일 변경 */
      				.form-group:has(input[type="checkbox"]:checked) {
      					background-color: #e8f5e9;
      				}

      				/* 예시 3: 호버된 버튼이 있는 카드 스타일 변경 */
      				.card:has(button:hover) {
      					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      				}`}),(0,u.jsxs)(`article`,{className:`indent mt_xl`,children:[(0,u.jsx)(`h3`,{className:`ml_mn t_blue`,children:`예시 1: 이미지가 있는 카드에만 스타일 적용`}),(0,u.jsx)(`p`,{className:`mt_m`,children:`이미지가 포함된 카드만 파란 테두리와 배경색이 적용됩니다.`}),(0,u.jsx)(`div`,{className:`view_editor edit_code mt_m`,children:(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(f,{}),children:(0,u.jsx)(d,{target:`css/step02/3.11.selector_level4/3.11.1.has-pseudo-class-image.html`,className:`uk_editor min_height_700 mb_result_height_560`,mode:`htmlmixed`,theme:`moxer`,browser:`default`,result:!0,minHeight:`700px`,mbResultHeight:`560px`})})})]}),(0,u.jsxs)(`article`,{className:`indent mt_xl`,children:[(0,u.jsx)(`h3`,{className:`ml_mn t_blue`,children:`예시 2: 체크박스가 체크된 폼 필드의 부모 스타일 변경`}),(0,u.jsx)(`p`,{className:`mt_m`,children:`체크박스를 체크하면 해당 폼 그룹의 배경색과 테두리가 자동으로 변경됩니다.`}),(0,u.jsx)(`div`,{className:`view_editor edit_code mt_m`,children:(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(f,{}),children:(0,u.jsx)(d,{target:`css/step02/3.11.selector_level4/3.11.1.has-pseudo-class-checkbox.html`,className:`uk_editor min_height_550 mb_result_height_600`,mode:`htmlmixed`,theme:`moxer`,browser:`default`,result:!0,minHeight:`550px`,mbResultHeight:`600px`})})})]}),(0,u.jsxs)(`article`,{className:`indent mt_xl`,children:[(0,u.jsx)(`h3`,{className:`ml_mn t_blue`,children:`예시 3: 호버된 버튼이 있는 카드 스타일 변경`}),(0,u.jsx)(`p`,{className:`mt_m`,children:`버튼에 마우스를 올리면 카드 전체에 그림자 효과와 애니메이션이 적용됩니다.`}),(0,u.jsx)(`div`,{className:`view_editor edit_code mt_m`,children:(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(f,{}),children:(0,u.jsx)(d,{target:`css/step02/3.11.selector_level4/3.11.1.has-pseudo-class-hover.html`,className:`uk_editor min_height_600 mb_result_height_560`,mode:`htmlmixed`,theme:`moxer`,browser:`default`,result:!0,minHeight:`600px`,mbResultHeight:`560px`})})})]}),(0,u.jsx)(`aside`,{className:`browser_support mt_m`,"data-tit":`:has() pseudo-class`,children:(0,u.jsxs)(`ul`,{children:[(0,u.jsx)(`li`,{className:`ie`,children:`지원 안 함`}),(0,u.jsx)(`li`,{className:`edge`,children:`105+`}),(0,u.jsx)(`li`,{className:`chrome`,children:`105+`}),(0,u.jsx)(`li`,{className:`firefox`,children:`121+`}),(0,u.jsx)(`li`,{className:`opera`,children:`91+`}),(0,u.jsx)(`li`,{className:`safari`,children:`15.4+`})]})})]}),(0,u.jsxs)(`section`,{className:`txt_ex indent mt_xxl`,"data-conlist":`false`,children:[(0,u.jsxs)(`h2`,{className:`ml_mn`,children:[(0,u.jsx)(`i`,{className:`t_blue`,children:`:is()`}),` 의사 클래스`]}),(0,u.jsxs)(`p`,{className:`mt_l`,children:[(0,u.jsx)(`code`,{children:`:is()`}),` 선택자는 여러 선택자를 하나로 묶어서 간단하게 작성할 수 있게 해줍니다.`,(0,u.jsx)(`br`,{}),`예를 들어 `,(0,u.jsx)(`code`,{children:`header p, main p, footer p`}),`처럼 반복되는 선택자를 `,(0,u.jsx)(`code`,{children:`:is(header, main, footer) p`}),`로 짧게 쓸 수 있어 코드가 훨씬 간결해집니다.`]}),(0,u.jsx)(`p`,{className:`mt_s`,children:`특히 여러 버튼이나 링크에 같은 스타일을 적용하거나, 다양한 요소 타입에 공통 스타일을 줄 때 유용합니다. 선택자 목록이 길어질수록 코드 중복을 줄이고 유지보수를 쉽게 만들어줍니다.`}),(0,u.jsx)(s,{title:`:is() pseudo-class`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`/* 기본 문법 */
      				:is(selector1, selector2, selector3) {
      					/* style 작성 */
      				}

      				/* 예시 1: 여러 섹션의 p 태그에 공통 스타일 적용 */
      				:is(header, main, footer) p {
      					color: blue;
      					line-height: 1.6;
      				}

      				/* 예시 2: 여러 버튼 타입에 공통 스타일 적용 */
      				:is(button, .btn, [role="button"]) {
      					padding: 10px 20px;
      					border-radius: 4px;
      					cursor: pointer;
      				}

      				/* 예시 3: 다양한 헤딩 태그에 공통 스타일 적용 */
      				:is(h1, h2, h3, h4, h5, h6) {
      					margin-top: 1em;
      					font-weight: bold;
      				}`}),(0,u.jsxs)(`div`,{className:`view_editor edit_code mt_l`,children:[(0,u.jsx)(`h3`,{className:`ve_tit`,children:`:is() 예제`}),(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(f,{}),children:(0,u.jsx)(d,{target:`css/step02/3.11.selector_level4/3.11.2.is-pseudo-class.html`,className:`uk_editor indent mt_m min_height_550 mb_result_height_550`,mode:`htmlmixed`,theme:`moxer`,browser:`default`,result:!0,minHeight:`550px`,mbResultHeight:`550px`})})]}),(0,u.jsx)(`aside`,{className:`browser_support mt_m`,"data-tit":`:is() pseudo-class`,children:(0,u.jsxs)(`ul`,{children:[(0,u.jsx)(`li`,{className:`ie`,children:`지원 안 함`}),(0,u.jsx)(`li`,{className:`edge`,children:`88+`}),(0,u.jsx)(`li`,{className:`chrome`,children:`88+`}),(0,u.jsx)(`li`,{className:`firefox`,children:`78+`}),(0,u.jsx)(`li`,{className:`opera`,children:`74+`}),(0,u.jsx)(`li`,{className:`safari`,children:`14+`})]})})]}),(0,u.jsxs)(`section`,{className:`txt_ex indent mt_xxl`,"data-conlist":`false`,children:[(0,u.jsxs)(`h2`,{className:`ml_mn`,children:[(0,u.jsx)(`i`,{className:`t_blue`,children:`:where()`}),` 의사 클래스`]}),(0,u.jsxs)(`p`,{className:`mt_l`,children:[(0,u.jsx)(`code`,{children:`:where()`}),` 선택자는 `,(0,u.jsx)(`code`,{children:`:is()`}),`와 똑같이 작동하지만, 선택자의 우선순위가 0입니다.`,(0,u.jsx)(`br`,{}),`즉, 여러 선택자를 묶어서 사용할 수 있으면서도 나중에 다른 스타일로 쉽게 덮어쓸 수 있습니다. 라이브러리나 프레임워크에서 만든 기본 스타일을 바꾸고 싶을 때 특히 유용합니다.`]}),(0,u.jsxs)(`p`,{className:`mt_s`,children:[`예를 들어, Bootstrap이나 Tailwind CSS 같은 프레임워크를 사용할 때, 프레임워크의 기본 스타일을 `,(0,u.jsx)(`code`,{children:`:where()`}),`로 작성하면 우선순위가 낮아서 나중에 커스텀 스타일로 쉽게 덮어쓸 수 있습니다. 이렇게 하면 `,(0,u.jsx)(`code`,{children:`!important`}),`를 사용하지 않고도 스타일을 재정의할 수 있어 코드가 더 깔끔해집니다.`]}),(0,u.jsx)(s,{title:`:where() pseudo-class`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`/* 기본 문법 */
      				:where(selector1, selector2, selector3) {
      					/* style 작성 */
      				}

      				/* 예시 1: 프레임워크 기본 스타일 (우선순위 0) */
      				:where(header, main, footer) p {
      					color: blue;
      				}
      				/* 나중에 쉽게 덮어쓸 수 있음 */
      				main p {
      					color: red; /* 이 스타일이 적용됨 */
      				}

      				/* 예시 2: 리셋 스타일 작성 시 유용 */
      				:where(ul, ol) {
      					list-style: none;
      					padding: 0;
      					margin: 0;
      				}
      				/* 특정 ul은 나중에 쉽게 재정의 가능 */
      				.nav ul {
      					list-style: disc; /* 이 스타일이 적용됨 */
      				}`}),(0,u.jsxs)(`div`,{className:`view_editor edit_code mt_l`,children:[(0,u.jsx)(`h3`,{className:`ve_tit`,children:`:where() 예제`}),(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(f,{}),children:(0,u.jsx)(d,{target:`css/step02/3.11.selector_level4/3.11.3.where-pseudo-class.html`,className:`uk_editor indent mt_m min_height_550 mb_result_height_550`,mode:`htmlmixed`,theme:`moxer`,browser:`default`,result:!0,minHeight:`550px`,mbResultHeight:`550px`})})]}),(0,u.jsx)(`aside`,{className:`browser_support mt_m`,"data-tit":`:where() pseudo-class`,children:(0,u.jsxs)(`ul`,{children:[(0,u.jsx)(`li`,{className:`ie`,children:`지원 안 함`}),(0,u.jsx)(`li`,{className:`edge`,children:`88+`}),(0,u.jsx)(`li`,{className:`chrome`,children:`88+`}),(0,u.jsx)(`li`,{className:`firefox`,children:`78+`}),(0,u.jsx)(`li`,{className:`opera`,children:`74+`}),(0,u.jsx)(`li`,{className:`safari`,children:`14+`})]})})]}),(0,u.jsxs)(`section`,{className:`txt_ex indent mt_xxl`,"data-conlist":`false`,children:[(0,u.jsxs)(`h2`,{className:`ml_mn`,children:[(0,u.jsx)(`i`,{className:`t_blue`,children:`:focus-visible`}),` 의사 클래스`]}),(0,u.jsxs)(`p`,{className:`mt_l`,children:[(0,u.jsx)(`code`,{children:`:focus-visible`}),` 선택자는 키보드로 포커스를 받을 때만 요소를 선택합니다.`,(0,u.jsx)(`br`,{}),`마우스로 클릭했을 때는 포커스 링이 보이지 않고, 키보드로 탭을 눌러서 이동할 때만 포커스 링이 나타납니다. 이렇게 하면 접근성은 좋아지면서도 디자인이 깔끔하게 유지됩니다.`]}),(0,u.jsxs)(`p`,{className:`mt_s`,children:[`이전에는 키보드 사용자와 마우스 사용자를 구분하기 위해 JavaScript를 사용해야 했지만, `,(0,u.jsx)(`code`,{children:`:focus-visible`}),`를 사용하면 CSS만으로도 자동으로 구분됩니다. 키보드로 웹사이트를 탐색하는 사용자에게는 포커스 표시가 필요하지만, 마우스 사용자에게는 불필요한 포커스 링이 보이지 않아 더 나은 사용자 경험을 제공할 수 있습니다.`]}),(0,u.jsx)(s,{title:`:focus-visible pseudo-class`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`/* 기본 문법 */
      				:focus-visible {
      					/* style 작성 */
      				}

      				/* 예시 1: 키보드 포커스만 표시 */
      				button:focus-visible {
      					outline: 3px solid blue;
      					outline-offset: 2px;
      				}
      				/* 마우스 클릭 시에는 포커스 링이 보이지 않음 */

      				/* 예시 2: 링크의 키보드 포커스만 강조 */
      				a:focus-visible {
      					background-color: yellow;
      					text-decoration: underline;
      				}

      				/* 예시 3: 입력 필드의 키보드 포커스만 표시 */
      				input:focus-visible,
      				textarea:focus-visible {
      					border: 2px solid #0066cc;
      					box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.2);
      				}`}),(0,u.jsxs)(`div`,{className:`view_editor edit_code mt_l`,children:[(0,u.jsx)(`h3`,{className:`ve_tit`,children:`:focus-visible 예제`}),(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(f,{}),children:(0,u.jsx)(d,{target:`css/step02/3.11.selector_level4/3.11.4.focus-visible-pseudo-class.html`,className:`uk_editor indent min_height_550 mb_result_height_540`,mode:`htmlmixed`,theme:`moxer`,browser:`default`,result:!0,minHeight:`550px`,mbResultHeight:`540px`})})]}),(0,u.jsx)(`aside`,{className:`browser_support mt_m`,"data-tit":`:focus-visible pseudo-class`,children:(0,u.jsxs)(`ul`,{children:[(0,u.jsx)(`li`,{className:`ie`,children:`지원 안 함`}),(0,u.jsx)(`li`,{className:`edge`,children:`86+`}),(0,u.jsx)(`li`,{className:`chrome`,children:`86+`}),(0,u.jsx)(`li`,{className:`firefox`,children:`85+`}),(0,u.jsx)(`li`,{className:`opera`,children:`72+`}),(0,u.jsx)(`li`,{className:`safari`,children:`15.4+`})]})})]}),(0,u.jsxs)(`section`,{className:`txt_ex indent mt_xxl`,"data-conlist":`false`,children:[(0,u.jsxs)(`h2`,{className:`ml_mn`,children:[(0,u.jsx)(`i`,{className:`t_blue`,children:`:focus-within`}),` 의사 클래스`]}),(0,u.jsxs)(`p`,{className:`mt_l`,children:[(0,u.jsx)(`code`,{children:`:focus-within`}),` 선택자는 자식 요소 중 하나가 포커스를 받으면 부모 요소도 함께 선택됩니다.`,(0,u.jsx)(`br`,{}),`예를 들어 입력 필드에 포커스가 있을 때, 그 입력 필드가 들어있는 폼 박스의 테두리 색을 바꾸고 싶을 때 사용합니다. 폼이나 드롭다운 메뉴에서 자주 사용됩니다.`]}),(0,u.jsxs)(`p`,{className:`mt_s`,children:[`이전에는 어떤 입력 필드에 포커스가 있는지 확인하려면 JavaScript로 각 입력 필드를 감시해야 했지만, `,(0,u.jsx)(`code`,{children:`:focus-within`}),`를 사용하면 CSS만으로 부모 요소의 스타일을 자동으로 변경할 수 있습니다. 검색창이나 로그인 폼처럼 여러 입력 필드가 있는 경우, 어떤 필드에 포커스가 있는지 시각적으로 명확하게 보여줄 수 있어 사용자 경험이 향상됩니다.`]}),(0,u.jsx)(s,{title:`:focus-within pseudo-class`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`/* 기본 문법 */
      				:focus-within {
      					/* style 작성 */
      				}

      				/* 예시 1: 폼 필드에 포커스가 있을 때 폼 박스 스타일 변경 */
      				.form-group:focus-within {
      					border: 2px solid #0066cc;
      					background-color: #f0f8ff;
      				}

      				/* 예시 2: 검색창 내부에 포커스가 있을 때 검색창 강조 */
      				.search-box:focus-within {
      					box-shadow: 0 0 10px rgba(0, 102, 204, 0.3);
      					border-radius: 8px;
      				}

      				/* 예시 3: 드롭다운 메뉴 내부에 포커스가 있을 때 메뉴 활성화 */
      				.dropdown:focus-within .dropdown-menu {
      					display: block;
      					opacity: 1;
      				}`}),(0,u.jsxs)(`div`,{className:`view_editor edit_code mt_l`,children:[(0,u.jsx)(`h3`,{className:`ve_tit`,children:`:focus-within 예제`}),(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(f,{}),children:(0,u.jsx)(d,{target:`css/step02/3.11.selector_level4/3.11.5.focus-within-pseudo-class.html`,className:`uk_editor indent mt_m min_height_550 mb_result_height_540`,mode:`htmlmixed`,theme:`moxer`,browser:`default`,result:!0,minHeight:`550px`,mbResultHeight:`540px`})})]}),(0,u.jsx)(`aside`,{className:`browser_support mt_m`,"data-tit":`:focus-within pseudo-class`,children:(0,u.jsxs)(`ul`,{children:[(0,u.jsx)(`li`,{className:`ie`,children:`지원 안 함`}),(0,u.jsx)(`li`,{className:`edge`,children:`79+`}),(0,u.jsx)(`li`,{className:`chrome`,children:`60+`}),(0,u.jsx)(`li`,{className:`firefox`,children:`52+`}),(0,u.jsx)(`li`,{className:`opera`,children:`47+`}),(0,u.jsx)(`li`,{className:`safari`,children:`10.1+`})]})})]}),(0,u.jsxs)(`section`,{className:`txt_ex indent mt_xxl`,"data-conlist":`false`,children:[(0,u.jsxs)(`h2`,{className:`ml_mn`,children:[(0,u.jsx)(`i`,{className:`t_blue`,children:`:any-link`}),` 의사 클래스`]}),(0,u.jsxs)(`p`,{className:`mt_l`,children:[(0,u.jsx)(`code`,{children:`:any-link`}),` 선택자는 `,(0,u.jsx)(`code`,{children:`href`}),` 속성이 있는 모든 링크를 선택합니다.`,(0,u.jsx)(`br`,{}),`방문한 링크든 방문하지 않은 링크든 상관없이 모든 링크에 같은 스타일을 적용하고 싶을 때 사용합니다. `,(0,u.jsx)(`code`,{children:`:link`}),`와 `,(0,u.jsx)(`code`,{children:`:visited`}),`를 따로 쓰는 것보다 훨씬 간단합니다.`]}),(0,u.jsxs)(`p`,{className:`mt_s`,children:[`예를 들어, 모든 링크에 공통으로 아이콘이나 스타일을 적용하고 싶을 때 `,(0,u.jsx)(`code`,{children:`:any-link`}),`를 사용하면 한 번에 처리할 수 있습니다. 방문 여부와 관계없이 링크임을 표시하는 스타일을 적용할 때 특히 유용하며, 코드도 더 간결하고 읽기 쉬워집니다.`]}),(0,u.jsx)(s,{title:`:any-link pseudo-class`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`/* 기본 문법 */
      				:any-link {
      					/* style 작성 */
      				}

      				/* 예시 1: 모든 링크에 공통 스타일 적용 */
      				:any-link {
      					color: #0066cc;
      					text-decoration: none;
      				}

      				/* 예시 2: 링크에 아이콘 추가 */
      				:any-link::after {
      					content: " ↗";
      					font-size: 0.8em;
      				}

      				/* 예시 3: 방문 여부와 관계없이 링크 스타일 통일 */
      				nav :any-link {
      					padding: 8px 16px;
      					border-radius: 4px;
      					transition: background-color 0.3s;
      				}
      				nav :any-link:hover {
      					background-color: #f0f0f0;
      				}`}),(0,u.jsxs)(`div`,{className:`view_editor edit_code mt_l`,children:[(0,u.jsx)(`h3`,{className:`ve_tit`,children:`:any-link 예제`}),(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(f,{}),children:(0,u.jsx)(d,{target:`css/step02/3.11.selector_level4/3.11.6.any-link-pseudo-class.html`,className:`uk_editor indent mt_m min_height_550 mb_result_height_540`,mode:`htmlmixed`,theme:`moxer`,browser:`default`,result:!0,minHeight:`550px`,mbResultHeight:`540px`})})]}),(0,u.jsx)(`aside`,{className:`browser_support mt_m`,"data-tit":`:any-link pseudo-class`,children:(0,u.jsxs)(`ul`,{children:[(0,u.jsx)(`li`,{className:`ie`,children:`지원 안 함`}),(0,u.jsx)(`li`,{className:`edge`,children:`79+`}),(0,u.jsx)(`li`,{className:`chrome`,children:`50+`}),(0,u.jsx)(`li`,{className:`firefox`,children:`50+`}),(0,u.jsx)(`li`,{className:`opera`,children:`37+`}),(0,u.jsx)(`li`,{className:`safari`,children:`9+`})]})})]}),(0,u.jsxs)(`figure`,{className:`img_figure indent mt_l`,children:[(0,u.jsx)(`img`,{src:`${o.CSS}/03_css_11.png`,alt:`CSS 선택자 level 4`}),(0,u.jsx)(`figcaption`,{className:`reference`,children:`CSS 선택자 level 4`})]}),(0,u.jsxs)(`aside`,{className:`reference_box mt_xxl`,children:[(0,u.jsx)(`strong`,{className:`tit`,children:`CSS 선택자 level 4 참조`}),(0,u.jsxs)(`ul`,{className:`link_lst`,children:[(0,u.jsx)(`li`,{className:`reference`,children:(0,u.jsx)(`a`,{href:`https://www.w3.org/TR/selectors-4/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`W3C CSS Selectors Level 4`})}),(0,u.jsx)(`li`,{className:`reference`,children:(0,u.jsx)(`a`,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`MDN CSS Selectors`})}),(0,u.jsx)(`li`,{className:`reference`,children:(0,u.jsx)(`a`,{href:`https://caniuse.com/css-has`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`caniuse.com CSS Selectors Level 4`})})]})]})]})}export{h as default,c as t};