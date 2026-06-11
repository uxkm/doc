const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/UkEditorTarget-C227zYzm.js","assets/rolldown-runtime-BYbx6iT9.js","assets/editor-vendor-oiiTuzx9.js","assets/codemirror-core-Byj-h4ws.js","assets/UkEditor-soAWU9v7.js","assets/index-DLl4gF3N.js","assets/accessibilityNavigation-BW7QswnD.js","assets/gnbLite-DnL-J4g9.js","assets/index-Cclnx0iN.css","assets/codemirror-lang-css-C10A0Hv0.js","assets/codemirror-lang-html-BbGFkG9d.js","assets/codeFormatting-BzTp2ZKr.js"])))=>i.map(i=>d[i]);
import{a as e,r as t}from"./rolldown-runtime-BYbx6iT9.js";import{n,r}from"./editor-vendor-oiiTuzx9.js";import{d as i}from"./index-DLl4gF3N.js";import{n as a}from"./PageMeta-BP7z2-QS.js";import{t as o}from"./path-ZOubRa2h.js";import{t as s}from"./CodeBlock-BcQFzG-g.js";import{t as c}from"./PublishingPartTabs-B0-fvfK2.js";var l=t({default:()=>g}),u=e(r(),1),d=n(),f=(0,u.lazy)(()=>i(()=>import(`./UkEditorTarget-C227zYzm.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])));function p(){return(0,d.jsx)(`div`,{className:`uk_editor min_height_300`,"aria-hidden":!0})}var m={mainClass:`css_grid`,type:`publishing`,info:!0,note:!0,sideMenu:!0,reference:!1,contentList:!0,depth3Last:!1,bottomEditor:!1},h={title:`그리드 레이아웃 - 부모 속성 part 1`,description:`CSS Grid의 부모 속성은 그리드 컨테이너에 적용하는 속성들로, display: grid를 설정한 요소에 사용하여 그리드의 구조와 배치 방식을 제어합니다. 이 페이지에서는 그리드 컨테이너를 만드는 display 속성, 그리드 행과 열의 크기를 설정하는 grid-template-rows와 grid-template-columns 속성, 그리드 영역을 이름으로 정의하는 grid-template-areas 속성, 여러 속성을 한 번에 설정하는 grid-template 속기형 속성, 암시적 그리드의 트랙 크기를 자동으로 설정하는 grid-auto-rows와 grid-auto-columns 속성, 그리드 아이템의 자동 배치 방식을 설정하는 grid-auto-flow 속성을 함께 소개합니다.`,keyword:`style, css, Cascading Style Sheets, grid, 그리드, 행/열, 속기형, 트랙 크기`};function g(){return a({...h,layout:m}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`blockquote`,{className:`uk_note common_note mt_xxl`,role:`note`,children:[(0,d.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`b`,{children:`CSS Grid`}),`는 웹 페이지 컨텐츠를 행과 열로 나눌 수 있는 `,(0,d.jsx)(`b`,{children:`2차원 레이아웃 시스템`}),`입니다.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`code`,{children:`display: grid`}),` 또는 `,(0,d.jsx)(`code`,{children:`display: inline-grid`}),`로 설정한 요소가 그리드 컨테이너가 되며, 그 안에 포함된 자식 요소들이 그리드 아이템이 됩니다.`]}),(0,d.jsxs)(`p`,{className:`mt_ms`,children:[(0,d.jsx)(`code`,{children:`flex`}),`는 1차원 레이아웃(행 또는 열)을 다루지만, `,(0,d.jsx)(`code`,{children:`grid`}),`는 2차원 레이아웃(행과 열)을 다룹니다.`,(0,d.jsx)(`br`,{}),`복잡한 레이아웃을 구현하는 데 유용하며, 브라우저 대부분이 완벽하게 지원하고 있습니다.`]})]}),(0,d.jsx)(c,{sectionType:`css`}),(0,d.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,d.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`b`,{className:`t_blue`,children:`그리드 레이아웃 - 부모 속성 part 1`}),`에서는`,(0,d.jsx)(`br`,{})]}),(0,d.jsxs)(`ul`,{className:`dot_lst indent_small`,children:[(0,d.jsx)(`li`,{className:`before_note`,children:(0,d.jsxs)(`b`,{children:[(0,d.jsx)(`code`,{children:`grid`}),` 컨테이너`]})}),(0,d.jsx)(`li`,{className:`before_note`,children:(0,d.jsxs)(`b`,{children:[(0,d.jsx)(`code`,{children:`grid`}),` 템플릿 행/열`]})}),(0,d.jsx)(`li`,{className:`before_note`,children:(0,d.jsxs)(`b`,{children:[(0,d.jsx)(`code`,{children:`grid`}),` 템플릿 영역`]})}),(0,d.jsx)(`li`,{className:`before_note`,children:(0,d.jsxs)(`b`,{children:[(0,d.jsx)(`code`,{children:`grid`}),` 템플릿 속기형`]})}),(0,d.jsx)(`li`,{className:`before_note`,children:(0,d.jsxs)(`b`,{children:[(0,d.jsx)(`code`,{children:`grid`}),` 트랙 크기 자동 설정`]})}),(0,d.jsxs)(`li`,{className:`before_note`,children:[(0,d.jsxs)(`b`,{children:[(0,d.jsx)(`code`,{children:`grid`}),` 자동 흐름 설정`]}),`에 대한 내용을 다루고 있습니다.`]})]})]}),(0,d.jsxs)(`section`,{className:`mt_xxl indent`,children:[(0,d.jsx)(`h2`,{className:`ml_mn`,children:`부모 속성(properties for the parent - grid container)`}),(0,d.jsxs)(`article`,{className:`indent mt_xl`,children:[(0,d.jsx)(`h3`,{className:`ml_mn`,"data-conlist-h4":`true`,children:`grid 컨테이너`}),(0,d.jsxs)(`p`,{className:`mt_m`,children:[`그리드 컨테이너는 `,(0,d.jsx)(`code`,{children:`display`}),` 속성으로 설정할 수 있습니다.`,(0,d.jsx)(`br`,{}),`설정 값에 따라 블록(`,(0,d.jsx)(`code`,{children:`block`}),`) 그리드와 인라인(`,(0,d.jsx)(`code`,{children:`inline`}),`) 그리드로 나뉘며, 그리드 컨테이너 요소를 블록 또는 인라인 요소처럼 처리합니다.`]}),(0,d.jsxs)(`div`,{className:`mt_l indent`,children:[(0,d.jsx)(`h4`,{className:`ml_mn t_blue`,children:`display`}),(0,d.jsxs)(`p`,{className:`mt_ms`,children:[`그리드 컨테이너를 지정할 수 있습니다.`,(0,d.jsx)(`br`,{}),`지정된 컨테이너의 자식 요소들은 자동으로 그리드 아이템이 되며, 그리드를 사용하기 위해 컨테이너에 필수로 작성합니다.`]}),(0,d.jsxs)(`ol`,{className:`ol_lst mt_s indent`,children:[(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`code`,{className:`weight-500 t_blue bg_none`,children:`grid`}),` : block 특성의 그리드 컨테이너를 지정합니다.`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`code`,{className:`weight-500 t_blue bg_none`,children:`inline-grid`}),` : inline 특성의 그리드 컨테이너를 지정합니다.`]})]}),(0,d.jsx)(s,{title:`grid container [display]`,language:`javascript`,className:`uk_gist_code_box mt_ms`,children:`.container {
      							display: grid | inline-grid;
      						}`}),(0,d.jsxs)(`figure`,{className:`img_figure mt_m`,children:[(0,d.jsx)(`figcaption`,{className:`mt_0 sound_only`,children:`display: grid & inline-grid`}),(0,d.jsx)(`img`,{src:`${o.CSS}/grid/uxkm_grid_display-grid.svg`,alt:`display: grid;`})]}),(0,d.jsx)(`aside`,{className:`browser_support mt_m`,"data-tit":`display`,children:(0,d.jsxs)(`ul`,{children:[(0,d.jsx)(`li`,{className:`ie`,children:`10+ -ms-`}),(0,d.jsx)(`li`,{className:`edge`,children:`16.0`}),(0,d.jsx)(`li`,{className:`chrome`,children:`57.0`}),(0,d.jsx)(`li`,{className:`firefox`,children:`52.0`}),(0,d.jsx)(`li`,{className:`opera`,children:`44.0`}),(0,d.jsx)(`li`,{className:`safari`,children:`10.1`})]})})]})]}),(0,d.jsxs)(`article`,{className:`indent mt_xl`,children:[(0,d.jsx)(`h3`,{className:`ml_mn`,"data-conlist-h4":`true`,children:`grid 템플릿 행/열`}),(0,d.jsxs)(`p`,{className:`mt_m`,children:[`공백으로 구분된 값 리스트를 해석하여 그리드 행(row)과 열(column)을 설정할 수 있습니다.`,(0,d.jsx)(`br`,{}),`각 값은 트랙 크기를 의미합니다.`]}),(0,d.jsxs)(`div`,{className:`mt_l indent`,children:[(0,d.jsx)(`h4`,{className:`ml_mn t_blue`,children:`grid-template-columns / grid-template-rows`}),(0,d.jsxs)(`p`,{className:`mt_ms`,children:[`공백으로 구분된 값 목록으로 그리드의 명시적(explicit grids) 열(track)과 행(track)의 크기를 지정할 수 있습니다.`,(0,d.jsx)(`br`,{}),`값은 트랙 크기를 나타내며, 그 사이의 공간은 그리드 선을 나타냅니다. 라인(line)의 이름도 함께 지정할 수 있습니다.`]}),(0,d.jsxs)(`p`,{className:`mt_ms`,children:[(0,d.jsx)(`code`,{children:`fr`}),`(fraction, 공간 비율) 단위와 `,(0,d.jsx)(`code`,{children:`repeat()`}),` 함수를 사용할 수 있습니다.`]}),(0,d.jsxs)(`ol`,{className:`ol_lst mt_s indent`,children:[(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`code`,{className:`weight-500 t_blue bg_none`,children:`<track-size>`}),` : 그리드에서 사용 가능한 공간의 길이 (`,(0,d.jsx)(`code`,{children:`px`}),`, `,(0,d.jsx)(`code`,{children:`rem`}),`, `,(0,d.jsx)(`code`,{children:`em`}),`, `,(0,d.jsx)(`code`,{children:`%`}),`, `,(0,d.jsx)(`code`,{children:`fr`}),` 등)`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`code`,{className:`weight-500 t_blue bg_none`,children:`<line-name>`}),` : 사용자가 설정한 임의의 선 이름`]})]}),(0,d.jsx)(s,{title:`grid template [columns / rows]`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`.container {
      							/* keyword value */
      							grid-template-columns: none;
      							grid-template-rows: none;

      							/* <track-list> values */
      							grid-template-columns: 100px 1fr;
      							grid-template-columns: [linename] 100px;
      							grid-template-columns: [linename1] 100px [linename2 linename3];
      							grid-template-columns: minmax(100px, 1fr);
      							grid-template-columns: fit-content(40%);
      							grid-template-columns: repeat(3, 200px);
      							grid-template-columns: subgrid;

      							grid-template-rows: 100px 1fr;
      							grid-template-rows: [linename] 100px;
      							grid-template-rows: [linename1] 100px [linename2 linename3];
      							grid-template-rows: minmax(100px, 1fr);
      							grid-template-rows: fit-content(40%);
      							grid-template-rows: repeat(3, 200px);
      							grid-template-rows: subgrid;

      							/* <auto-track-list> values */
      							grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
      							grid-template-columns: minmax(100px, max-content) repeat(auto-fill, 200px) 20%;
      							grid-template-columns: [linename1] 100px [linename2] repeat(auto-fit, [linename3 linename4] 300px) 100px;
      							grid-template-columns: [linename1 linename2] 100px repeat(auto-fit, [linename1] 300px) [linename3];

      							grid-template-rows: 200px repeat(auto-fill, 100px) 300px;
      							grid-template-rows: minmax(100px, max-content) repeat(auto-fill, 200px) 20%;
      							grid-template-rows: [linename1] 100px [linename2] repeat(auto-fit, [linename3 linename4] 300px) 100px;
      							grid-template-rows: [linename1 linename2] 100px repeat(auto-fit, [linename1] 300px) [linename3];
      						}`}),(0,d.jsxs)(`figure`,{className:`img_figure mt_m`,children:[(0,d.jsxs)(`figcaption`,{className:`mt_0`,children:[`트랙 값 사이에 빈 공간을 두면 그리드 선에 `,(0,d.jsx)(`b`,{className:`t_blue`,children:`양수`}),`와 `,(0,d.jsx)(`b`,{className:`t_green`,children:`음수`}),`가 `,(0,d.jsx)(`b`,{children:`자동으로 할당`})]}),(0,d.jsx)(`img`,{src:`${o.CSS}/grid/uxkm_grid_template-columns-rows-01.svg`,alt:`트랙 값 사이에 빈 공간을 두면 그리드 선에 양수와 음수가 자동으로 할당`,className:`mt_ms`}),(0,d.jsxs)(`figcaption`,{className:`mt_l`,children:[(0,d.jsx)(`b`,{children:`명시적으로 줄 이름을 지정`}),` (아래 줄 이름은 예시)`]}),(0,d.jsx)(`img`,{src:`${o.CSS}/grid/uxkm_grid_template-columns-rows-02.svg`,alt:`명시적으로 줄 이름을 지정`,className:`mt_ms`})]})]}),(0,d.jsxs)(`div`,{className:`mt_l indent`,children:[(0,d.jsx)(`h4`,{className:`ml_mn t_blue`,children:`grid-template-columns`}),(0,d.jsx)(s,{title:`grid template [columns]`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`.container {
      							display: grid;
      							grid-template-columns: 1열크기 2열크기 ...;
      							grid-template-columns: [선이름] 1열크기 [선이름] 2열크기 [선이름] ...;
      						}`}),(0,d.jsxs)(`figure`,{className:`img_figure mt_m`,children:[(0,d.jsx)(`figcaption`,{className:`mt_0 sound_only`,children:`grid-template-columns: [first] 300px [main] 200px [side] 100px [last];`}),(0,d.jsx)(`img`,{src:`${o.CSS}/grid/uxkm_grid-template-columns.svg`,alt:`grid-template-columns: [first] 300px [main] 200px [side] 100px [last];`})]}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`사용자가 임의로 설정한 선 이름([이름])을 사용할 수 있습니다.`}),(0,d.jsx)(s,{title:`grid template [columns]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
      							grid-template-rows: [row-1-start] 25% [row-1-end] 100px [third-line] auto [last-line];
      						}`}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`각 열의 크기를 지정할 수 있습니다.`}),(0,d.jsx)(s,{title:`grid template [columns]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-columns: 100px 200px;
      						}`}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`각 라인의 이름도 함께 지정할 수 있습니다.`}),(0,d.jsx)(s,{title:`grid template [columns]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-columns: [first] 100px [second] 200px [third];
      						}`}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`라인에 중복된 이름을 지정할 수 있습니다.`}),(0,d.jsx)(s,{title:`grid template [columns]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-columns: [col1-start] 100px [col1-end col2-start] 200px [col2-end];
      						}`}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`선 이름을 1개 이상 설정할 수 있습니다. [이름-1 이름-2]와 같이 [] 내부에 공백으로 구분된 이름을 추가하면 됩니다.`}),(0,d.jsx)(s,{title:`grid template [columns]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-columns: [columns-1] 100px [columns-1-end columns-2-start] 30% [columns-2-end];
      						}`}),(0,d.jsxs)(`h5`,{className:`mt_ml`,children:[`설정이 반복되는 경우 `,(0,d.jsx)(`code`,{children:`repeat()`}),` 함수를 사용하면 간단하게 설정할 수 있습니다.`]}),(0,d.jsx)(s,{title:`grid template [columns]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-columns: repeat(2, 15% 30px) auto;
      							/* 결과: 15% 30px 15% 30px auto */
      							grid-template-rows: repeat(3, 80px [row-start]) 5%;
      							/* 결과: 80px [row-start] 80px [row-start] 80px [row-start] 5% */
      						}`}),(0,d.jsxs)(`h5`,{className:`mt_ml`,children:[(0,d.jsx)(`code`,{children:`fr`}),` 단위를 사용하면 `,(0,d.jsx)(`code`,{children:`<track-size>`}),`를 그리드의 남은 공간 일부로 설정할 수 있습니다.`]}),(0,d.jsx)(s,{title:`grid template [columns]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-columns: repeat(3, 1fr); /* 1fr 1fr 1fr */
      						}`}),(0,d.jsxs)(`h5`,{className:`mt_ml`,children:[(0,d.jsx)(`code`,{children:`fr`}),` 단위는 고정 값(`,(0,d.jsx)(`code`,{children:`px`}),`, `,(0,d.jsx)(`code`,{children:`rem`}),` 등) 단위가 먼저 계산된 후 남은 공간을 사용하여 계산됩니다.`]}),(0,d.jsx)(s,{title:`grid template [columns]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-columns: 1fr 100px 2fr;
      						}`}),(0,d.jsx)(`hr`,{}),(0,d.jsx)(`h5`,{className:`mt_l`,children:`만약 1200px 너비의 ‘12컬럼 그리드 템플릿’을 정의한다면 다음과 작성할 수 있습니다.`}),(0,d.jsx)(s,{title:`grid template [columns]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;

      							width: 1200px;
      							grid-template-columns: 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px;
      						}`}),(0,d.jsxs)(`h5`,{className:`mt_ml`,children:[`위 예제에서는 12개의 열(컬럼) 크기를 각각 하나씩 지정하여 관리의 어려움이 있습니다.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`code`,{children:`repeat()`}),` 함수를 사용하면 위 예제를 다음과 같이 간소화 할 수 있습니다.`]}),(0,d.jsx)(s,{title:`grid template [columns]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;

      							width: 1200px;
      							grid-template-columns: repeat(12, 100px);
      						}`}),(0,d.jsxs)(`h5`,{className:`mt_ml`,children:[`컬럼을 크기를 `,(0,d.jsx)(`code`,{children:`fr`}),`(fraction, 공간 비율) 단위를 사용해 다음과 같이 비율로 지정할 수도 있습니다.`,(0,d.jsx)(`br`,{}),`각 컬럼은 비율에 맞게 출력되기 때문에 컨테이너의 너비가 가변해도 열 크기를 수정할 필요가 없습니다.`]}),(0,d.jsx)(s,{title:`grid template [columns]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;

      							width: 80%;
      							grid-template-columns: repeat(12, 1fr);
      						}`}),(0,d.jsxs)(`h5`,{className:`mt_ml`,children:[(0,d.jsx)(`code`,{children:`repeat()`}),` 함수는 2번째 인수를 반복하기 때문에 다음과 같이 활용할 수 있습니다.`]}),(0,d.jsx)(s,{title:`grid template [columns]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-columns: repeat(4, 100px 200px 50px);
      							/* grid-template-columns: 100px 200px 50px 100px 200px 50px 100px 200px 50px 100px 200px 50px; */
      						}

      						.container {
      							display: grid;
      							grid-template-columns: repeat(4, 1fr 2fr 3fr);
      							/* grid-template-columns: 1fr 2fr 3fr 1fr 2fr 3fr 1fr 2fr 3fr 1fr 2fr 3fr; */
      						}`}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`트랙 값 사이에 빈 공간을두면 그리드 선에 양수와 음수가 자동으로 할당됩니다. (위 '명시적으로 줄 이름을 지정' 이미지 참조)`}),(0,d.jsx)(s,{title:`grid template [columns]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-rows: 25% 100px auto;
      							grid-template-columns: 40px 50px auto 50px 40px;
      						}`}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`라인은 하나 이상의 이름을 가질 수 있습니다. 예를 들어, 두 번째 줄의 이름은 row1-end와 row2-start입니다.`}),(0,d.jsx)(s,{title:`grid template [columns]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-columns: [row1-start] 25% [row1-end row2-start] 25% [row2-end];
      						}`}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`여러 줄이 같은 이름을 공유하는 경우 해당 줄 이름과 개수로 참조 할 수 있습니다.`}),(0,d.jsx)(s,{title:`grid template [columns]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-columns: col-start 2;
      						}`})]}),(0,d.jsxs)(`div`,{className:`mt_l indent`,children:[(0,d.jsx)(`h4`,{className:`ml_mn t_blue`,children:`grid-template-row`}),(0,d.jsxs)(`figure`,{className:`img_figure mt_m`,children:[(0,d.jsx)(`figcaption`,{className:`mt_0 sound_only`,children:`grid-template-rows`}),(0,d.jsx)(`img`,{src:`${o.CSS}/grid/uxkm_grid-template-rows.svg`,alt:`grid-template-rows`})]}),(0,d.jsx)(s,{title:`grid template [row]`,language:`javascript`,className:`uk_gist_code_box mt_m`,children:`.container {
      							display: grid;
      							grid-template-rows: 행크기 행크기 ...;
      							grid-template-rows: [선이름] 1행크기 [선이름] 1행크기 [선이름] ...;
      						}`}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`각 행의 크기를 지정할 수 있습니다.`}),(0,d.jsx)(s,{title:`grid template [row]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-rows: 100px 200px;
      						}`}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`각 라인의 이름도 함께 지정할 수 있습니다.`}),(0,d.jsx)(s,{title:`grid template [row]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-rows: [first] 100px [second] 200px [third];
      						}`}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`라인에 중복된 이름을 지정할 수 있습니다.`}),(0,d.jsx)(s,{title:`grid template [row]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-rows: [row1-start] 100px [row1-end row2-start] 200px [row2-end];
      						}`}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`각 라인은 행(row, track)과 열(column, track)의 개수대로 숫자(양수/음수) 라인 이름이 자동으로 지정되어 있어서, 꼭 필요한 경우가 아니면 라인 이름을 지정할 필요가 없습니다.`}),(0,d.jsx)(s,{title:`grid template [row]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-rows: 100px 200px;
      							/* grid-template-rows: [1 -3] 100px [2 -2] 200px [3 -1]; */
      						}

      						.container {
      							width: 400px;
      							display: grid;
      							grid-template-rows: repeat(3, 100px);
      							grid-template-columns: repeat(3, 1fr);
      						}`})]}),(0,d.jsx)(`aside`,{className:`browser_support mt_l`,"data-tit":`grid-template-columns/rows`,children:(0,d.jsxs)(`ul`,{children:[(0,d.jsx)(`li`,{className:`ie false`,children:`지원안함`}),(0,d.jsx)(`li`,{className:`edge`,children:`16.0`}),(0,d.jsx)(`li`,{className:`chrome`,children:`57.0`}),(0,d.jsx)(`li`,{className:`firefox`,children:`52.0`}),(0,d.jsx)(`li`,{className:`opera`,children:`44.0`}),(0,d.jsx)(`li`,{className:`safari`,children:`10.1`})]})})]}),(0,d.jsxs)(`article`,{className:`indent mt_xl`,children:[(0,d.jsx)(`h3`,{className:`ml_mn`,"data-conlist-h4":`true`,children:`grid 템플릿 영역`}),(0,d.jsxs)(`p`,{className:`mt_m`,children:[(0,d.jsx)(`code`,{children:`grid-area`}),` 속성으로 설정된 그리드 영역의 이름을 참조하여 그리드 템플릿 영역을 설정할 수 있습니다.`,(0,d.jsx)(`br`,{}),`그리드 영역 이름을 반복하면 그리드 셀을 병합(merge, span)하며, 마침표(`,(0,d.jsx)(`code`,{children:`.`}),`)는 비어있는 그리드 셀을 의미합니다.`]}),(0,d.jsxs)(`div`,{className:`mt_l indent`,children:[(0,d.jsx)(`h4`,{className:`ml_mn t_blue`,children:`grid-template-areas`}),(0,d.jsx)(`p`,{className:`mt_ms`,children:`영역(area) 이름을 참조하여 템플릿을 생성할 수 있습니다.`}),(0,d.jsx)(s,{title:`grid template [areas]`,language:`javascript`,className:`uk_gist_code_box mt_ms`,children:`.container {
      							display: grid;
      							grid-template-areas: <grid-area-name> | . | none;
      						}`}),(0,d.jsxs)(`ol`,{className:`ol_lst mt_ms indent`,children:[(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`code`,{className:`weight-500 t_blue bg_none`,children:`<grid-area-name>`}),` : 사용자가 `,(0,d.jsx)(`code`,{children:`grid-area`}),` 속성 값으로 설정한 임의의 그리드 영역 이름`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`strong`,{className:`weight-500 t_blue bg_none`,children:`마침표(.)`}),` : 비어있는 그리드 셀`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`code`,{className:`weight-500 t_blue bg_none`,children:`none`}),` : 그리드 영역으로 지정되지 않은 셀`]})]}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`다음은 3행 4열 그리드 템플릿 영역 설정 예제입니다.`}),(0,d.jsx)(s,{title:`grid template [areas]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`/* 그리드 영역 이름 설정 */
      						.item-a { grid-area: header; }
      						.item-b { grid-area: main; }
      						.item-c { grid-area: sidebar; }
      						.item-d { grid-area: footer; }

      						.container {
      							display: grid;
      							grid-template-columns: 100px 100px 100px 100px;
      							grid-template-rows: auto;

      							/* 그리드 템플릿 영역 설정. 각 행은 동일한 개수의 열 설정이 요구됩니다. */
      							grid-template-areas:
      								"header header header header"  // 1행: 4열 모두 header
      								"main main . sidebar"          // 2행: 2열 main 1열, 공백 1열, sidebar
      								"footer footer footer footer"; // 3행: 4열 모두 header
      						}`}),(0,d.jsx)(`figure`,{className:`img_figure indent mt_m`,children:(0,d.jsx)(`img`,{src:`${o.CSS}/grid/uxkm_grid-template-areas.svg`,alt:`3행 4열 그리드 템플릿 영역 설정 예제`})}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`명시적으로 그리드(explicit grids)를 지정할 때 그리드 컨테이너에 3개의 속성을 사용할 수 있습니다.`}),(0,d.jsxs)(`ol`,{className:`ol_lst mt_s indent`,children:[(0,d.jsx)(`li`,{children:(0,d.jsx)(`code`,{children:`grid-template-rows`})}),(0,d.jsx)(`li`,{children:(0,d.jsx)(`code`,{children:`grid-template-columns`})}),(0,d.jsx)(`li`,{children:(0,d.jsx)(`code`,{children:`grid-template-areas`})})]})]}),(0,d.jsx)(`aside`,{className:`browser_support mt_l`,"data-tit":`grid-template-areas`,children:(0,d.jsxs)(`ul`,{children:[(0,d.jsx)(`li`,{className:`ie false`,children:`지원안함`}),(0,d.jsx)(`li`,{className:`edge`,children:`16.0`}),(0,d.jsx)(`li`,{className:`chrome`,children:`57.0`}),(0,d.jsx)(`li`,{className:`firefox`,children:`52.0`}),(0,d.jsx)(`li`,{className:`opera`,children:`44.0`}),(0,d.jsx)(`li`,{className:`safari`,children:`10.1`})]})})]}),(0,d.jsxs)(`article`,{className:`indent mt_xl`,children:[(0,d.jsx)(`h3`,{className:`ml_mn`,"data-conlist-h4":`true`,children:`grid 템플릿 속기형`}),(0,d.jsx)(`p`,{className:`mt_m`,children:`그리드 템플릿 행 / 열 / 영역 이름 설정을 속기형(shorthand)으로 설정 가능합니다.`}),(0,d.jsxs)(`div`,{className:`mt_ml indent`,children:[(0,d.jsx)(`h4`,{className:`ml_mn t_blue`,children:`grid-template`}),(0,d.jsxs)(`p`,{className:`mt_ms`,children:[(0,d.jsx)(`code`,{children:`grid-template-xxx`}),`의 단축 속성입니다.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`code`,{children:`grid-template`}),` 속성은 `,(0,d.jsxs)(`code`,{children:[`grid-template-`,`{`,`rows, columns, areas`,`}`]}),` 속성을 축약형으로 사용할 수 있도록 합니다.`]}),(0,d.jsxs)(`ol`,{className:`ol_lst mt_s indent`,children:[(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`code`,{className:`weight-500 t_blue bg_none`,children:`grid-none`}),` : 3가지 설정을 모두 초기 값으로 적용`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`code`,{className:`weight-500 t_blue bg_none`,children:`grid-template-rows / grid-template-columns`}),` : 행/열 그리드 템플릿 설정`]}),(0,d.jsx)(`li`,{children:`라인이름(옵션) / 영역이름(필수) / 트랙 크기(옵션) / 라인이름(옵션)`})]}),(0,d.jsx)(s,{title:`grid template [shorthand]`,language:`javascript`,className:`uk_gist_code_box mt_ms`,children:`.container {
      							display: grid;
      							grid-template: none | grid-template-rows | grid-template-columns | grid-template-areas;

      							/* keyword value */
      							grid-template: none;
      							grid-template-columns: none;
      							grid-template-rows: none;
      							grid-template-areas: none;

      							/* grid-template-rows / grid-template-columns values */
      							grid-template: 100px 1fr / 50px 1fr;
      							grid-template: auto 1fr / auto 1fr auto;
      							grid-template: [linename] 100px / [columnname1] 30% [columnname2] 70%;
      							grid-template: fit-content(100px) / fit-content(40%);

      							/* grid-template-areas grid-template-rows / grid-template-column values */
      							grid-template: "a a a" "b b b";
      							grid-template: "a a a" 20% "b b b" auto;
      							grid-template: [header-top] "a a a" [header-bottom] [main-top] "b b b" 1fr [main-bottom] / auto 1fr auto;
      						}`}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`그리드 행/열 템플릿을 축약형 속성으로 설정한 예`}),(0,d.jsx)(s,{title:`grid template [shorthand]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-rows: [row1-start] 100px [row1-end row2-start] 200px [row2-end];
      						}`}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`축약형으로 적용된 속성을 개별 속성으로 풀어본 예`}),(0,d.jsx)(s,{title:`grid template [shorthand]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-rows: repeat(3, 100px);
      							grid-template-columns: repeat(2, 20px 40px);
      							grid-template-areas: none;
      						}`}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`행/열 그리드 템플릿에 영역이름 템플릿을 함께 설정 한 예`}),(0,d.jsx)(s,{title:`grid template [shorthand]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							/* 2행 3열 그리드 */
      							/* 1행 100px | 'header header header' */
      							/* 2행 100px | 'footer footer footer' */
      							grid-template:
      								[row-1-start] "header header header" 100px [row-1-end]
      								[row-2-start] "footer footer footer" 100px [row-2-end]
      								/ auto 200px auto;
      						}`}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`속기형으로 적용된 속성을 개별 속성으로 풀어본 예`}),(0,d.jsx)(s,{title:`grid template [shorthand]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-template-rows: [row-1-start] 100px [row-1-end row-2-start] 100px [row-2-end];
      							grid-template-columns: auto 200px auto;
      							grid-template-areas:
      								"header header header"
      								"footer footer footer";
      						}`}),(0,d.jsxs)(`h5`,{className:`mt_ml`,children:[(0,d.jsx)(`code`,{children:`grid-template-areas`}),` 속성은 암시적인 그리드 속성을 초기화하지 않습니다.`]}),(0,d.jsxs)(`ol`,{className:`ol_lst mt_s indent`,children:[(0,d.jsx)(`li`,{children:(0,d.jsx)(`code`,{children:`grid-auto-rows`})}),(0,d.jsx)(`li`,{children:(0,d.jsx)(`code`,{children:`grid-auto-columns`})}),(0,d.jsx)(`li`,{children:(0,d.jsx)(`code`,{children:`grid-auto-flow`})})]})]}),(0,d.jsx)(`aside`,{className:`browser_support mt_l`,"data-tit":`grid-template shorthand`,children:(0,d.jsxs)(`ul`,{children:[(0,d.jsx)(`li`,{className:`ie false`,children:`지원안함`}),(0,d.jsx)(`li`,{className:`edge`,children:`16.0`}),(0,d.jsx)(`li`,{className:`chrome`,children:`57.0`}),(0,d.jsx)(`li`,{className:`firefox`,children:`52.0`}),(0,d.jsx)(`li`,{className:`opera`,children:`44.0`}),(0,d.jsx)(`li`,{className:`safari`,children:`10.1`})]})})]}),(0,d.jsxs)(`article`,{className:`indent mt_xl`,children:[(0,d.jsx)(`h3`,{className:`ml_mn`,"data-conlist-h4":`true`,children:`grid 트랙 크기 자동 설정`}),(0,d.jsx)(`strong`,{className:`el_block font-16 t_black mt_m`,children:`그리드 행/열 트랙 크기 자동 설정`}),(0,d.jsx)(`p`,{className:`mt_ms indent`,children:`암시적인 그리드 행/열 트랙 크기를 자동으로 설정할 수 있습니다.`}),(0,d.jsx)(`strong`,{className:`el_block font-16 t_black mt_m`,children:`암시적인 그리드 트랙이란?`}),(0,d.jsxs)(`p`,{className:`mt_ms indent`,children:[`사용자가 설정하지 않은 임의의 트랙으로 사용자가 명시적으로 `,(0,d.jsx)(`code`,{children:`grid-template-rows / grid-template-columns`}),` 속성을 설정하지 않은 나머지 그리드 트랙을 가리킵니다.`]}),(0,d.jsxs)(`div`,{className:`mt_m indent`,children:[(0,d.jsx)(`h4`,{className:`ml_mn t_blue`,children:`grid-auto-columns / grid-auto-rows`}),(0,d.jsxs)(`p`,{className:`mt_ms`,children:[`암시적인(implicit grids) 열(track)/행(track)의 크기를 지정할 수 있습니다.`,(0,d.jsx)(`br`,{}),`자동 생성된 그리드 트랙의 크기를 설정하며, 그리드에 셀보다 많은 그리드 항목이 있거나 그리드 항목이 명시적 그리드 외부에 배치되면 암시적 트랙이 생성됩니다.`]}),(0,d.jsx)(`ol`,{className:`ol_lst mt_s indent`,children:(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`code`,{className:`weight-500 t_blue bg_none`,children:`<track-size>`}),` : 그리드에서 사용 가능한 단위 (`,(0,d.jsx)(`code`,{children:`px`}),`, `,(0,d.jsx)(`code`,{children:`rem`}),`, `,(0,d.jsx)(`code`,{children:`em`}),`, `,(0,d.jsx)(`code`,{children:`%`}),`, `,(0,d.jsx)(`code`,{children:`fr`}),` 등)`]})}),(0,d.jsx)(s,{title:`grid auto [columns / rows]`,language:`javascript`,className:`uk_gist_code_box mt_ms`,children:`.container {
          					display: grid;
      							grid-template: none | grid-template-rows | grid-template-columns | grid-template-areas;

      							/* keyword value */
      							grid-template: none;
      							grid-template-columns: none;
      							grid-template-rows: none;
      							grid-template-areas: none;

      							/* grid-template-rows / grid-template-columns values */
      							grid-template: 100px 1fr / 50px 1fr;
      							grid-template: auto 1fr / auto 1fr auto;
      							grid-template: [linename] 100px / [columnname1] 30% [columnname2] 70%;
      							grid-template: fit-content(100px) / fit-content(40%);

      							/* grid-template-areas grid-template-rows / grid-template-column values */
      							grid-template: "a a a" "b b b";
      							grid-template: "a a a" 20% "b b b" auto;
      							grid-template: [header-top] "a a a" [header-bottom] [main-top] "b b b" 1fr [main-bottom] / auto 1fr auto;
      						}`}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`사용자가 명시적으로 열/행 템플릿 속성을 설정하면 그리드 트랙 크기로 적용(2열 2행 그리드)`}),(0,d.jsx)(s,{title:`grid auto [columns / rows]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-auto-columns: <track-size> ...;
      							grid-auto-rows: <track-size> ...;
      						}

      						.container {
      							display: grid;
      							grid-template-columns: 60px 60px;
      							grid-template-rows: 90px 90px;
      						}`}),(0,d.jsx)(`figure`,{className:`img_figure indent mt_ms`,children:(0,d.jsx)(`img`,{src:`${o.CSS}/grid/uxkm_grid-auto-columns-rows-01.svg`,alt:`2열 2행 그리드`})}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`개별 그리드 아이템에 열/행 위치를 그리드 라인 기준으로 배치하게 되면 다음과 같이 처리됨`}),(0,d.jsx)(s,{title:`grid auto [columns / rows]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.item-a {
      							grid-column: 1 / 2;
      							grid-row: 2 / 3;
      						}

      						.item-b {
      							grid-column: 5 / 6;
      							grid-row: 2 / 3;
      						}`}),(0,d.jsxs)(`p`,{className:`mt_s indent`,children:[(0,d.jsx)(`code`,{children:`.item-b`}),`에 설정한 열 그리드 라인 5~6 배치는 암시적인 열 그리드(`,(0,d.jsx)(`code`,{children:`grid-auto-columns`}),`) 설정에서 지정되지 않은 영역으로, 존재하지 않는 열/행에 배치하기 위해 암시적인 트랙이 자동으로 생성됩니다.`,(0,d.jsx)(`br`,{}),`(그림을 자세히 보면 암시적으로 생성된 트랙 크기는 0으로 설정됩니다)`]}),(0,d.jsx)(`figure`,{className:`img_figure indent mt_ms`,children:(0,d.jsx)(`img`,{src:`${o.CSS}/grid/uxkm_grid-auto-columns-rows-02.svg`,alt:`열/행 위치를 그리드 라인 기준으로 배치`})}),(0,d.jsx)(`h5`,{className:`mt_ml`,children:`자동으로 생성되는 그리드 트랙 크기를 임의의 값으로 설정하고 싶다면 다음과 같이 설정할 수 있습니다.`}),(0,d.jsx)(s,{title:`grid auto [columns / rows]`,language:`javascript`,className:`uk_gist_code_box indent mt_ms`,children:`.container {
      							display: grid;
      							grid-auto-columns: 60px;
      						}`}),(0,d.jsx)(`p`,{className:`mt_s indent`,children:`암시적으로 생성된 그리드 트랙 크기는 60px로 설정됩니다.`}),(0,d.jsx)(`figure`,{className:`img_figure indent mt_ms`,children:(0,d.jsx)(`img`,{src:`${o.CSS}/grid/uxkm_grid-auto-columns-rows-03.svg`,alt:`자동으로 생성되는 그리드 트랙 크기를 임의의 값으로 설정`})})]}),(0,d.jsx)(`aside`,{className:`browser_support mt_l`,"data-tit":`grid-auto-columns/rows`,children:(0,d.jsxs)(`ul`,{children:[(0,d.jsx)(`li`,{className:`ie`,children:`10+ -ms-`}),(0,d.jsx)(`li`,{className:`edge`,children:`16.0`}),(0,d.jsx)(`li`,{className:`chrome`,children:`57.0`}),(0,d.jsx)(`li`,{className:`firefox`,children:`52.0`}),(0,d.jsx)(`li`,{className:`opera`,children:`44.0`}),(0,d.jsx)(`li`,{className:`safari`,children:`10.1`})]})})]}),(0,d.jsxs)(`article`,{className:`indent mt_xl`,children:[(0,d.jsx)(`h3`,{className:`ml_mn`,"data-conlist-h4":`true`,children:`grid 자동 흐름 설정`}),(0,d.jsxs)(`p`,{className:`mt_m`,children:[`그리드에 명시적으로 배치(레이아웃)되지 않은 아이템이 있을 경우, 자동 배치 알고리즘이 실행되어 자동으로 배치되도록 설정할 수 있습니다.`,(0,d.jsx)(`br`,{}),`속성 값에 따라 자동 배치 알고리즘 작동 방식이 달라집니다.`]}),(0,d.jsxs)(`figure`,{className:`img_figure mt_m`,children:[(0,d.jsx)(`figcaption`,{className:`mt_0`,children:`[속성 값에 따라 자동 배치 알고리즘 작동 방식]`}),(0,d.jsx)(`img`,{src:`${o.CSS}/grid/uxkm_grid-auto-flow-column.svg`,alt:`속성 값에 따라 자동 배치 알고리즘 작동 방식`,className:`mt_m`})]}),(0,d.jsxs)(`div`,{className:`mt_l indent`,children:[(0,d.jsx)(`h4`,{className:`ml_mn t_blue`,children:`grid-auto-flow`}),(0,d.jsxs)(`p`,{className:`mt_ms`,children:[`자동 배치 알고리즘 방식을 지정할 수 있습니다.`,(0,d.jsx)(`br`,{}),`기본적으로 항목을 배치할 때 그리드에 간격이 생성되면 자동 배치된 그리드 항목이 간격을 채우지 않고 마지막 항목 뒤에 추가됩니다.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`code`,{children:`dense`}),` 키워드를 사용하면 이를 변경할 수 있으며, 암시적 그리드 알고리즘이 자동 배치된 항목과의 간격을 채우고 필요할 때 항목의 순서를 변경하도록 합니다.`,(0,d.jsx)(`br`,{}),`항목 순서가 중요하지 않은 이미지 갤러리를 만들 때 유용합니다.`]}),(0,d.jsx)(s,{title:`grid auto flow`,language:`javascript`,className:`uk_gist_code_box mt_ms`,children:`.container {
      							display: grid;
      							grid-auto-flow: row | column | row dense | column dense;
      						}`}),(0,d.jsxs)(`ol`,{className:`ol_lst mt_ms indent`,children:[(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`code`,{className:`weight-500 t_blue bg_none`,children:`row`}),` : 기본값으로 각 행을 차례로 채우고 필요에 따라 새 행을 추가하는 자동 배치 알고리즘입니다.`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`code`,{className:`weight-500 t_blue bg_none`,children:`column`}),` : 각 열을 차례로 채우고 필요에 따라 새 열을 추가하는 자동 배치 알고리즘입니다.`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`code`,{className:`weight-500 t_blue bg_none`,children:`dense`}),` : 배치 중 나중에 크기가 작은 아이템이 존재할 경우, 그리드 영역 앞부분의 남은 공간에 자동 배치하는 알고리즘입니다.`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`code`,{className:`weight-500 t_blue bg_none`,children:`row dense`}),` : 각 행 축을 따라 차례로 배치하며 빈 영역을 메웁니다.`]}),(0,d.jsxs)(`li`,{children:[(0,d.jsx)(`code`,{className:`weight-500 t_blue bg_none`,children:`column dense`}),` : 각 열 축을 따라 차례로 배치하며 빈 영역을 메웁니다.`]})]}),(0,d.jsxs)(`div`,{className:`view_editor edit_code mt_ml`,children:[(0,d.jsx)(`h5`,{className:`ve_tit`,children:`grid-auto-flow 예제`}),(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)(p,{}),children:(0,d.jsx)(f,{target:`css/step03/4.5.grid/4.5.5.grid-auto-flow.html`,className:`uk_editor indent min_height_400`,mode:`htmlmixed`,theme:`moxer`,browser:`default`,result:!0,minHeight:`400px`})})]}),(0,d.jsxs)(`figure`,{className:`img_figure indent mt_ms`,children:[(0,d.jsx)(`figcaption`,{className:`mt_0`,children:`[위 예제의 결과물]`}),(0,d.jsx)(`img`,{src:`${o.CSS}/grid/uxkm_grid-auto-flow_ex.svg`,alt:`위 예제의 결과물`,className:`mt_m`})]})]}),(0,d.jsx)(`aside`,{className:`browser_support mt_l`,"data-tit":`grid-auto-flow`,children:(0,d.jsxs)(`ul`,{children:[(0,d.jsx)(`li`,{className:`ie false`,children:`지원안함`}),(0,d.jsx)(`li`,{className:`edge`,children:`16.0`}),(0,d.jsx)(`li`,{className:`chrome`,children:`57.0`}),(0,d.jsx)(`li`,{className:`firefox`,children:`52.0`}),(0,d.jsx)(`li`,{className:`opera`,children:`44.0`}),(0,d.jsx)(`li`,{className:`safari`,children:`10.1`})]})})]})]}),(0,d.jsx)(`aside`,{className:`browser_support mt_xxl`,"data-tit":`grid`,children:(0,d.jsxs)(`ul`,{children:[(0,d.jsx)(`li`,{className:`ie`,children:`10+ -ms-`}),(0,d.jsx)(`li`,{className:`edge`,children:`16.0`}),(0,d.jsx)(`li`,{className:`chrome`,children:`57.0`}),(0,d.jsx)(`li`,{className:`firefox`,children:`52.0`}),(0,d.jsx)(`li`,{className:`opera`,children:`44.0`}),(0,d.jsx)(`li`,{className:`safari`,children:`10.1`})]})}),(0,d.jsxs)(`figure`,{className:`img_figure indent mt_l`,children:[(0,d.jsx)(`img`,{src:`${o.CSS}/04_css_05_3.png`,alt:`CSS Grid 부모 속성 part 1`}),(0,d.jsx)(`figcaption`,{className:`reference`,children:`CSS Grid 부모 속성 part 1`})]}),(0,d.jsxs)(`aside`,{className:`reference_box mt_xxl`,children:[(0,d.jsx)(`strong`,{className:`tit`,children:`그리드 레이아웃 참조`}),(0,d.jsxs)(`ul`,{className:`link_lst`,children:[(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://www.w3.org/TR/css-grid-1/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`w3c css grid layout module level 1`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://www.w3.org/TR/css-grid-2/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`w3c css grid layout module level 2`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://www.w3.org/TR/css-align-3/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`w3c css box alignment module level 3`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://developer.mozilla.org/en-us/docs/web/css/css_grid_layout`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`mdn css grid layout`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://developer.mozilla.org/ko/docs/web/css/css_grid_layout/relationship_of_grid_layout`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`mdn relationship_of_grid_layout`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://developer.mozilla.org/en-us/docs/web/css/css_grid_layout/box_alignment_in_css_grid_layout`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`mdn box alignment in css grid layout`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://developer.mozilla.org/en-us/docs/web/css/css_box_alignment`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`mdn css box alignment`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://developer.mozilla.org/en-us/docs/tools/page_inspector/how_to/examine_grid_layouts`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`mdn css grid inspector: examine grid layouts`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://grid.layoutit.com/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`css grid 제작 온라인 도구 | layoutit.com`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://gridbyexample.com/examples/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`css grid layout example`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://css-tricks.com/snippets/css/complete-guide-grid/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`guide to grid`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`http://cssgridgarden.com/#ko`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`css grid garden`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://alistapart.com/article/the-story-of-css-grid-from-its-creators/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`창시자가 말하는 css 그리드 이야기`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://speakerdeck.com/malarkey/art-directing-for-the-web-five-minutes-with-css-template-areas`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`웹 디자인 방법에 관한 andy clarke의 발표 슬라이드`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://uid.gitbook.io/css-grid/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`css grid layout guidebook by 야무(yamoo9)`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh673533(v=vs.85)?redirectedfrom=msdn`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`microsoft's documentation grid layout`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`css grid in ie: css grid and the new autoprefixer`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://css-tricks.com/css-grid-in-ie-debunking-common-ie-grid-misconceptions/`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`css grid in ie: debunking common ie grid misconceptions`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://rachelandrew.co.uk/css/cheatsheets/box-alignment`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`box 정렬 치트시트 | rachelandrew.co.uk`})}),(0,d.jsx)(`li`,{className:`reference`,children:(0,d.jsx)(`a`,{href:`https://caniuse.com/#feat=css-grid`,target:`_blank`,rel:`noreferrer`,className:`fas`,title:`새창열림`,children:`supported by all major browsers`})})]})]})]})}export{g as default,l as t};