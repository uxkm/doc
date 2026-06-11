const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["pages/UkEditorTarget-xAJSFnxz.js","pages/rolldown-runtime-D8OAEfa_.js","pages/editor-vendor-B43TTzmv.js","pages/codemirror-core-CA-iYlLT.js","pages/UkEditor-DhWmbGuF.js","pages/index-DVIs_XWq.js","pages/accessibilityNavigation-CUmYxpJr.js","pages/gnbLite-DLjxsWXO.js","pages/index.css-Cclnx0iN.css","pages/codemirror-lang-css-ZRAXM9KM.js","pages/codemirror-lang-html-DucZSqOu.js","pages/codeFormatting-Df3qoFD9.js"])))=>i.map(i=>d[i]);
import{a as e,r as t}from"./rolldown-runtime-D8OAEfa_.js";import{n,r}from"./editor-vendor-B43TTzmv.js";import{d as i}from"./index-DVIs_XWq.js";import{n as a}from"./PageMeta-DIeg8VgO.js";import{t as o}from"./path-Cvb4QkPf.js";import{t as s}from"./CodeBlock-Mkf2nMG4.js";var c=t({default:()=>h}),l=e(r(),1),u=n(),d=(0,l.lazy)(()=>i(()=>import(`./UkEditorTarget-xAJSFnxz.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])));function f(){return(0,u.jsx)(`div`,{className:`uk_editor min_height_300`,"aria-hidden":!0})}var p={mainClass:`css_ir`,type:`publishing`,info:!0,note:!0,sideMenu:!0,reference:!1,contentList:!0,depth3Last:!1,bottomEditor:!1},m={title:`IR 기법`,description:`IR(Image Replacement) 기법은 이미지 대체텍스트 제공을 위한 CSS 기법으로, 다양한 CSS 속성을 사용하여 텍스트를 이미지로 대체할 수 있으며, 주로 이미지 스프라이트(image sprite)와 함께 사용되어 여러 개의 이미지를 하나의 이미지로 합쳐서 관리하여 웹 페이지의 로딩 시간을 단축할 수 있습니다. 이 페이지에서는 이미지 스프라이트를 활용한 IR 기법의 다양한 구현 방법과 텍스트를 숨기고 이미지를 표시하는 CSS 기법들을 함께 소개합니다.`,keyword:`style, css, Cascading Style Sheets, 이미지 스프라이트(image sprite), IR(Image Replacement), ir 기법, image sprite`};function h(){return a({...m,layout:p}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,u.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`strong`,{children:`IR(Image Replacement) 기법`}),`은 이미지 대체텍스트 제공을 위한 CSS 기법으로, 다양한 CSS 속성을 사용하여 텍스트를 이미지로 대체할 수 있습니다.`,(0,u.jsx)(`br`,{}),`주로 `,(0,u.jsx)(`strong`,{children:`이미지 스프라이트(image sprite)`}),`와 함께 사용되며, 여러 개의 이미지를 하나의 이미지로 합쳐서 관리하여 웹 페이지의 로딩 시간을 단축할 수 있습니다.`]}),(0,u.jsxs)(`p`,{className:`mt_ms`,children:[`이미지 스프라이트를 사용하면 이미지를 다운받기 위한 서버 요청을 단 몇 번으로 줄일 수 있어, 모바일 환경과 같이 한정된 자원을 사용하는 플랫폼에서 효과적입니다.`,(0,u.jsx)(`br`,{}),`또한 많은 이미지 파일을 관리하는 대신 몇 개의 스프라이트 이미지 파일만을 관리하면 되므로 매우 간편합니다.`]})]}),(0,u.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,u.jsx)(`img`,{src:`${o.CSS}/cssMiddleclass/uxkm_sprite.svg`,alt:`이미지 스프라이트 사용 방법`}),(0,u.jsx)(`figcaption`,{className:`t_666`,children:`[스프라이트 이미지를 이용한 IR 기법]`})]}),(0,u.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,u.jsx)(`img`,{src:`${o.CSS}/cssMiddleclass/uxkm_sprite.png`,alt:`이미지 스프라이트 사용 예시`}),(0,u.jsx)(`figcaption`,{className:`t_666`,children:`[이미지 스프라이트 사용 예시]`}),(0,u.jsx)(`p`,{className:`t_blue`,children:`w:48px h:48px / margin:10px / 총사이즈 : w:106px h:154px`})]}),(0,u.jsxs)(`section`,{className:`view_editor edit_code mt_xxl`,children:[(0,u.jsx)(`h2`,{className:`ve_tit`,children:`Sprite Image 활용 예제`}),(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(f,{}),children:(0,u.jsx)(d,{target:`css/step02/3.5.ir/3.5.ir.html`,className:`uk_editor indent mt_ml min_height_400 mb_result_height_300`,mode:`htmlmixed`,theme:`moxer`,browser:`default`,result:!0,minHeight:`400px`,mbResultHeight:`300px`})})]}),(0,u.jsxs)(`section`,{className:`txt_ex indent mt_xxl`,children:[(0,u.jsx)(`h2`,{className:`ml_mn`,children:`Daum CSS Convention`}),(0,u.jsxs)(`p`,{className:`mt_l`,children:[`아래 방법은 `,(0,u.jsx)(`i`,{className:`underline`,children:`Daum CSS Convention`}),`에서 명시한 방법입니다.`]}),(0,u.jsxs)(`article`,{className:`indent_max mt_l`,children:[(0,u.jsxs)(`h3`,{className:`ml_mn`,children:[(0,u.jsx)(`i`,{className:`t_blue`,children:`Phark Method`}),` (권장)`]}),(0,u.jsxs)(`p`,{className:`mt_m`,children:[`이미지로 대체할 요소에 배경 이미지를 설정하고, 글자는 `,(0,u.jsx)(`code`,{children:`text-indent`}),`를 이용하여 화면 바깥으로(`,(0,u.jsx)(`code`,{children:`-9999px`}),`만큼 들여쓰기) 빼내어 보이지 않게 하는 방법입니다.`]}),(0,u.jsx)(`div`,{className:`ol_lst mt_m`,children:(0,u.jsxs)(`ol`,{children:[(0,u.jsxs)(`li`,{className:`line_code font14`,children:[(0,u.jsx)(`strong`,{className:`mb_sm`,children:`장점`}),(0,u.jsx)(`p`,{children:`스크린 리더기 읽어줌`}),(0,u.jsx)(`p`,{children:`추가적인 요소 사용 안 함`})]}),(0,u.jsxs)(`li`,{className:`line_code font14 mt_s`,children:[(0,u.jsx)(`strong`,{className:`mb_sm`,children:`단점`}),(0,u.jsx)(`p`,{children:`CSS on / Image off 시 텍스트 안보임`})]})]})}),(0,u.jsx)(s,{title:`Daum CSS Convention [Phark Method]`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`<button type="button">검색</button>
      					<a href="#">검색</a>

      					<style>
      						button {
      							display:block; width:49px; height:36px; margin:0; padding:0;
      							text-indent:-9999px; /* 들여쓰기를 -9999px만큼 지정하여 글자를 버튼 밖으로 숨김 처리 */
      							background:url('btn_search.gif') no-repeat;
      							border:none;
      						}
      						a {
      							display:block; overflow:hidden; float:left; width:49px; height:36px;
      							text-indent:-9999px; /* 들여쓰기를 -9999px만큼 지정하여 글자를 버튼 밖으로 숨김 처리 */
      							background:url('btn_search.gif') no-repeat;
      						}
      					</style>`})]}),(0,u.jsxs)(`article`,{className:`indent_max mt_xl`,children:[(0,u.jsxs)(`h3`,{className:`ml_mn`,children:[(0,u.jsx)(`i`,{className:`t_blue`,children:`WA IR`}),` (권장)`]}),(0,u.jsxs)(`p`,{className:`mt_m`,children:[`이미지로 대체할 요소에 배경 이미지를 설정하고, 글자는 `,(0,u.jsx)(`code`,{children:`<span>`}),` 태그로 감싼 후 `,(0,u.jsx)(`code`,{children:`position:relative`}),`와 `,(0,u.jsx)(`code`,{children:`z-index:-1`}),`을 이용하여 화면에 보이지 않게 처리합니다.`]}),(0,u.jsx)(`div`,{className:`ol_lst mt_m`,children:(0,u.jsxs)(`ol`,{children:[(0,u.jsxs)(`li`,{className:`line_code font14`,children:[(0,u.jsx)(`strong`,{className:`mb_sm`,children:`장점`}),(0,u.jsx)(`p`,{children:`스크린 리더기 읽어줌`}),(0,u.jsx)(`p`,{children:`CSS on / Image off 시 텍스트 보임`})]}),(0,u.jsxs)(`li`,{className:`line_code font14 mt_s`,children:[(0,u.jsx)(`strong`,{className:`mb_sm`,children:`단점`}),(0,u.jsx)(`p`,{children:`추가적인 요소 사용함`}),(0,u.jsx)(`p`,{children:`position 속성 사용(성능 관련 이슈)`})]})]})}),(0,u.jsx)(s,{title:`Daum CSS Convention [WA IR]`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`<button type="button"><span>검색</span></button>
      					<a href="#"><span>검색</span></a>

      					<style>
      						button {
      							width:49px; height:36px; margin:0; padding:0;
      							background:url('btn_search.gif') no-repeat;
      							border:none;
      						}
      						a {
      							display:block; width:49px; height:36px;
      							text-decoration:none;
      							background:url('btn_search.gif') no-repeat;
      						}
      						span {
      							position:relative; z-index:-1;
      						}
      					</style>`})]}),(0,u.jsxs)(`article`,{className:`indent_max mt_xl`,children:[(0,u.jsx)(`h3`,{className:`ml_mn`,children:(0,u.jsx)(`i`,{className:`t_blue`,children:`Farhner Image Replacement`})}),(0,u.jsxs)(`p`,{className:`mt_m`,children:[`이미지로 대체할 요소에 배경 이미지를 설정하고, 글자는 `,(0,u.jsx)(`code`,{children:`<span>`}),` 태그로 감싼 후 `,(0,u.jsx)(`code`,{children:`display:none`}),`을 이용하여 화면에 보이지 않게 처리합니다.`]}),(0,u.jsx)(`div`,{className:`ol_lst mt_m`,children:(0,u.jsxs)(`ol`,{children:[(0,u.jsxs)(`li`,{className:`line_code font14`,children:[(0,u.jsx)(`strong`,{className:`mb_sm`,children:`장점`}),(0,u.jsx)(`p`,{children:`없음`})]}),(0,u.jsxs)(`li`,{className:`line_code font14 mt_s`,children:[(0,u.jsx)(`strong`,{className:`mb_sm`,children:`단점`}),(0,u.jsx)(`p`,{children:`스크린 리더기 안읽어줌`}),(0,u.jsx)(`p`,{children:`CSS on / Image off 시 텍스트 안보임`}),(0,u.jsx)(`p`,{children:`추가적인 요소 사용함`})]})]})}),(0,u.jsx)(s,{title:`Daum CSS Convention [Farhner Image Replacement]`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`<button type="button"><span>검색</span></button>
      					<a href="#"><span>검색</span></a>

      					<style>
      						button {
      							width:49px; height:36px; margin:0; padding:0;
      							background:url('btn_search.gif') no-repeat;
      							border:none;
      						}
      						a {
      							display:block; width:49px; height:36px;
      							text-decoration:none;
      							background:url('btn_search.gif') no-repeat;
      						}
      						span {
      							display:none;
      						}
      					</style>`})]}),(0,u.jsxs)(`article`,{className:`indent_max mt_xl`,children:[(0,u.jsx)(`h3`,{className:`ml_mn`,children:(0,u.jsx)(`i`,{className:`t_blue`,children:`Dwyer Method`})}),(0,u.jsxs)(`p`,{className:`mt_m`,children:[`이미지로 대체할 요소에 배경 이미지를 설정하고, 글자는 `,(0,u.jsx)(`code`,{children:`<span>`}),` 태그로 감싼 후 `,(0,u.jsx)(`code`,{children:`width`}),`와 `,(0,u.jsx)(`code`,{children:`height`}),`를 각각 `,(0,u.jsx)(`code`,{children:`0`}),`으로 하여 글자를 숨기는 방법입니다.`]}),(0,u.jsx)(`div`,{className:`ol_lst mt_m`,children:(0,u.jsxs)(`ol`,{children:[(0,u.jsxs)(`li`,{className:`line_code font14`,children:[(0,u.jsx)(`strong`,{className:`mb_sm`,children:`장점`}),(0,u.jsx)(`p`,{children:`스크린 리더기 읽어줌`})]}),(0,u.jsxs)(`li`,{className:`line_code font14 mt_s`,children:[(0,u.jsx)(`strong`,{className:`mb_sm`,children:`단점`}),(0,u.jsx)(`p`,{children:`CSS on / Image off 시 텍스트 안보임`}),(0,u.jsx)(`p`,{children:`추가적인 요소 사용함`})]})]})}),(0,u.jsx)(s,{title:`Daum CSS Convention [Dwyer Method]`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`<button type="button"><span>검색</span></button>
      					<a href="#"><span>검색</span></a>

      					<style>
      						button {
      							width:49px; height:36px; margin:0; padding:0;
      							background:url('btn_search.gif') no-repeat;
      							border:none;
      						}
      						a {
      							display:block; width:49px; height:36px;
      							text-decoration:none;
      							background:url('btn_search.gif') no-repeat;
      						}
      						span {
      							display:block; overflow:hidden;
      							width:0; height:0;
      						}
      					</style>`})]}),(0,u.jsxs)(`article`,{className:`indent_max mt_xl`,children:[(0,u.jsx)(`h3`,{className:`ml_mn`,children:(0,u.jsx)(`i`,{className:`t_blue`,children:`Gilder/Levin Method`})}),(0,u.jsxs)(`p`,{className:`mt_m`,children:[`이미지로 대체할 요소 내에 빈 `,(0,u.jsx)(`code`,{children:`<span>`}),` 태그를 추가하여 배경 이미지를 설정하고, `,(0,u.jsx)(`code`,{children:`position:absolute`}),` 스타일을 이용하여 글자를 덮는 방법입니다.`]}),(0,u.jsx)(`div`,{className:`ol_lst mt_m`,children:(0,u.jsxs)(`ol`,{children:[(0,u.jsxs)(`li`,{className:`line_code font14`,children:[(0,u.jsx)(`strong`,{className:`mb_sm`,children:`장점`}),(0,u.jsx)(`p`,{children:`스크린 리더기 읽어줌`}),(0,u.jsx)(`p`,{children:`추가적인 요소 사용안함`})]}),(0,u.jsxs)(`li`,{className:`line_code font14 mt_s`,children:[(0,u.jsx)(`strong`,{className:`mb_sm`,children:`단점`}),(0,u.jsx)(`p`,{children:`CSS on / Image off 시 텍스트 안보임`}),(0,u.jsxs)(`p`,{children:[`IE 5에서 제대로 출력하기 위해 `,(0,u.jsx)(`code`,{children:`button`}),` 요소를 제외한 다른 요소에서는 Box model hack을 사용해야 함`]})]})]})}),(0,u.jsx)(s,{title:`Daum CSS Convention [Gilder/Levin Method]`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`<button type="button"><span></span>검색</button>
      					<a href="#"><span></span>검색</a>

      					<style>
      						button {
      							display:block; position:relative;
      							width:49px; height:36px;
      							background-color:transparent;
      							cursor:pointer;
      							border:0;
      						}
      						button span {
      							position:absolute; top:0; left:0;
      							width:100%; height:100%;
      							background:url('http://icon.daum-img.net/top/2008/btn_search.gif') no-repeat 0 0;
      						}
      						a {
      							display:block; position:relative;
      							width:49px; height:36px;
      						}
      						a span {
      							position:absolute; top:0; left:0;
      							width:100%; height:100%;
      							background:url('http://icon.daum-img.net/top/2008/btn_search.gif') no-repeat 0 0;
      						}
      					</style>`})]}),(0,u.jsxs)(`article`,{className:`indent_max mt_xl`,children:[(0,u.jsx)(`h3`,{className:`ml_mn`,children:(0,u.jsx)(`i`,{className:`t_blue`,children:`Leahy/Langridge Method`})}),(0,u.jsxs)(`p`,{className:`mt_m`,children:[`이미지로 대체할 요소에 배경 이미지를 설정하고, `,(0,u.jsx)(`code`,{children:`height: 0`}),`과 `,(0,u.jsx)(`code`,{children:`padding-top`}),`(이미지의 높이 값)을 지정하여 글자를 아래로 숨기는 방법입니다.`,(0,u.jsx)(`br`,{}),(0,u.jsx)(`code`,{children:`height: 0`}),`으로 지정하여 글자를 숨기려면 반드시 `,(0,u.jsx)(`code`,{children:`overflow: hidden`}),`이 선언되어야 합니다.`]}),(0,u.jsx)(`div`,{className:`ol_lst mt_m`,children:(0,u.jsxs)(`ol`,{children:[(0,u.jsxs)(`li`,{className:`line_code font14`,children:[(0,u.jsx)(`strong`,{className:`mb_sm`,children:`장점`}),(0,u.jsx)(`p`,{children:`스크린 리더기 읽어줌`}),(0,u.jsx)(`p`,{children:`CSS on / Image off 시 텍스트 보임`})]}),(0,u.jsxs)(`li`,{className:`line_code font14 mt_s`,children:[(0,u.jsx)(`strong`,{className:`mb_sm`,children:`단점`}),(0,u.jsx)(`p`,{children:`추가적인 요소 사용함`}),(0,u.jsx)(`p`,{children:`투명한 이미지인 경우 텍스트가 비칠 수 있음`}),(0,u.jsxs)(`p`,{children:[`파이어폭스 2.0/크롬/IE 5.0에서 `,(0,u.jsx)(`code`,{children:`<button>`}),` 요소와 `,(0,u.jsx)(`code`,{children:`<span>`}),` 요소의 위치가 약간 밀림`]})]})]})}),(0,u.jsx)(s,{title:`Daum CSS Convention [Leahy/Langridge Method]`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`<button type="button">검색</button>
      					<a href="#">검색</a>

      					<style>
      						button {
      							display:block; overflow:hidden;
      							width:49px; height:0; padding:36px 0 0 0;
      							background:url('btn_search.gif') no-repeat;
      							border:0;
      						}
      						a {
      							display:block; overflow:hidden;
      							width:49px; height:0; padding:36px 0 0 0;
      							background:url('btn_search.gif') no-repeat;
      						}
      					</style>`})]}),(0,u.jsxs)(`article`,{className:`indent_max mt_xl`,children:[(0,u.jsx)(`h3`,{className:`ml_mn`,children:(0,u.jsx)(`i`,{className:`t_blue`,children:`span padding : applied Method`})}),(0,u.jsxs)(`p`,{className:`mt_m`,children:[`이미지로 대체할 요소에 배경 이미지를 설정하고, 글자는 `,(0,u.jsx)(`code`,{children:`<span>`}),`으로 감싼 후 블록화하여 `,(0,u.jsx)(`code`,{children:`padding-top`}),`의 값을 이미지의 높이만큼 주어 글자를 아래로 밀어내어 숨기는 방법입니다.`]}),(0,u.jsx)(`div`,{className:`ol_lst mt_m`,children:(0,u.jsxs)(`ol`,{children:[(0,u.jsxs)(`li`,{className:`line_code font14`,children:[(0,u.jsx)(`strong`,{className:`mb_sm`,children:`장점`}),(0,u.jsx)(`p`,{children:`스크린 리더기 읽어줌`})]}),(0,u.jsxs)(`li`,{className:`line_code font14 mt_s`,children:[(0,u.jsx)(`strong`,{className:`mb_sm`,children:`단점`}),(0,u.jsx)(`p`,{children:`추가적인 요소 사용함`}),(0,u.jsx)(`p`,{children:`CSS on / Image off 시 텍스트 안보임`})]})]})}),(0,u.jsx)(s,{title:`Daum CSS Convention [span padding : applied Method]`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`<button type="button"><span>검색</span></button>
      					<a href="#"><span>검색</span></a>

      					<style>
      						button {
      							display:block; overflow:hidden;
      							width:49px; height:36px; margin:0; padding:0;
      							border:none;
      							background:url('btn_search.gif') no-repeat;
      						}
      						a {
      							display:block; overflow:hidden;
      							width:49px; height:36px;
      							background:url('btn_search.gif') no-repeat;
      						}
      						span {
      							display:block;
      							padding-top:40px
      						}
      					</style>`})]}),(0,u.jsxs)(`article`,{className:`indent_max mt_xl`,children:[(0,u.jsx)(`h3`,{className:`ml_mn`,children:(0,u.jsx)(`i`,{className:`t_blue`,children:`script replace Method`})}),(0,u.jsxs)(`p`,{className:`mt_m`,children:[`자바스크립트를 이용하여 이미지로 대체할 요소의 텍스트를 `,(0,u.jsx)(`code`,{children:`<img>`}),` 태그로 교체하는 방법입니다.`]}),(0,u.jsx)(`div`,{className:`ol_lst mt_m`,children:(0,u.jsxs)(`ol`,{children:[(0,u.jsxs)(`li`,{className:`line_code font14`,children:[(0,u.jsx)(`strong`,{className:`mb_sm`,children:`장점`}),(0,u.jsx)(`p`,{children:`스크린 리더기 읽어줌`}),(0,u.jsx)(`p`,{children:`CSS on / Image off 시 텍스트 보임`})]}),(0,u.jsxs)(`li`,{className:`line_code font14 mt_s`,children:[(0,u.jsx)(`strong`,{className:`mb_sm`,children:`단점`}),(0,u.jsx)(`p`,{children:`추가적인 요소 사용함`}),(0,u.jsxs)(`p`,{children:[`이미지 절대경로를 포함한 `,(0,u.jsx)(`code`,{children:`class`}),`명과 별도의 스크립트를 필요로 함`]}),(0,u.jsxs)(`p`,{children:[`파이어폭스 2.0/크롬/IE 5.0에서 `,(0,u.jsx)(`code`,{children:`<button>`}),` 요소 안의 `,(0,u.jsx)(`code`,{children:`<img>`}),` 요소의 위치가 약간 밀림`]})]})]})}),(0,u.jsx)(s,{title:`Daum CSS Convention [script replace Method]`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`<button type="button" id="btn_button">검색</button>
      					<a href="#" id="btn_a">검색</a>

      					<style>
      						button {
      							width:49px; height:36px; margin:0; padding:0;
      							border:none;
      							background-image:none; background-color:transparent;
      						}
      						button img {
      							display:block;
      						}
      						a img {
      							border:0;
      						}
      					</style>

      					<script>
      						function replaceImg() {
      							var replaceImgButton = document.getElementById("btn_button");
      							replaceImgButton.innerHTML = "<img src=\\"" + replaceImgButton.className + ".gif\\" alt=\\"" + replaceImgButton.innerHTML + "\\" />";
      							var replaceImgA = document.getElementById("btn_a");
      							replaceImgA.innerHTML = "<img src=\\"" + replaceImgA.className + ".gif\\" alt=\\"" + replaceImgA.innerHTML + "\\" />";
      						}
      						window.onload = replaceImg;
      					<\/script>`})]})]}),(0,u.jsxs)(`figure`,{className:`img_figure indent mt_l`,children:[(0,u.jsx)(`img`,{src:`${o.CSS}/03_css_05.png`,alt:`CSS IR 기법`}),(0,u.jsx)(`figcaption`,{className:`reference`,children:`CSS IR 기법`})]}),(0,u.jsxs)(`aside`,{className:`reference_box mt_xxl`,children:[(0,u.jsx)(`strong`,{className:`tit`,children:`IR 기법 참조`}),(0,u.jsxs)(`ul`,{className:`link_lst`,children:[(0,u.jsx)(`li`,{className:`reference`,children:(0,u.jsx)(`a`,{href:`http://ui.daum.net/convention/css/css_ir`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`DAUM Web Standard Tech`})}),(0,u.jsx)(`li`,{className:`reference`,children:(0,u.jsx)(`a`,{href:`https://developer.yahoo.com/performance/rules.html?guccounter=1&guce_referrer=aHR0cHM6Ly91eGttLmdpdGh1Yi5pby91a25jcy91eGttLWNzcy5odG1s&guce_referrer_sig=AQAAAMjaw5jTFsTIWzKgs2Mq5hJ4JhcdjVta89Jww48JEpRMYv5YXGN_2tgmOHjb2Fg5XJvbc5Gux3H0vu1bZPBNVusWU512JaMEafJjycq-iuZUDXmihIytDWa8QWk6P0f-67o8V0f2snf-PYdGb7Bg6UpohK3QHW81YFvUWhs7JQxn#opt_sprites`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`Yahoo Developer`})}),(0,u.jsx)(`li`,{className:`reference`,children:(0,u.jsx)(`a`,{href:`https://developer.yahoo.com/performance/rules.html#opt_sprites`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`Yahoo Developer`})}),(0,u.jsx)(`li`,{className:`reference`,children:(0,u.jsx)(`a`,{href:`https://www.toptal.com/developers/css/sprite-generator/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`toptal CSS Sprites Generator`})}),(0,u.jsx)(`li`,{className:`reference`,children:(0,u.jsx)(`a`,{href:`https://www.giftofspeed.com/sprite-generator/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`giftofspeed CSS Sprites Generator`})})]})]})]})}export{h as default,c as t};