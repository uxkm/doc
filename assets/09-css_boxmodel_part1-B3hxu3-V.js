const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/UkEditorTarget-l5hRlR5z.js","assets/rolldown-runtime-BYbx6iT9.js","assets/editor-vendor-NExbC2Bo.js","assets/codemirror-core-CkCySbCA.js","assets/UkEditor-Cr7XGSuW.js","assets/index-Ct-ny9pw.js","assets/preload-helper-D4M6sveU.js","assets/index-Cb3hFvjC.css","assets/codemirror-lang-css-GO1v0Ny7.js","assets/codemirror-lang-html-DqXYJsFa.js","assets/codeFormatting-B_7kx6CT.js"])))=>i.map(i=>d[i]);
import{a as e,r as t}from"./rolldown-runtime-BYbx6iT9.js";import{n,r}from"./editor-vendor-NExbC2Bo.js";import{t as i}from"./preload-helper-D4M6sveU.js";import{n as a}from"./PageMeta-CwOXcC1J.js";import{t as o}from"./CodeBlock-LqoApAt5.js";var s=t({default:()=>g}),c=e(r(),1),l=n(),u=(0,c.lazy)(()=>i(()=>import(`./UkEditorTarget-l5hRlR5z.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),d={mainClass:`css_boxmodel_part1`,type:`publishing`,info:!0,note:!0,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},f=`/images/css`,p=`/images/css/cssBeginner`;function m(){return(0,l.jsxs)(`blockquote`,{className:`uk_note common_note mt_xxl`,role:`note`,children:[(0,l.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,l.jsxs)(`p`,{children:[`박스 모델(Box Model)은 CSS가 모든 HTML 요소를 사각형 박스로 취급하여 배치하는 기본 개념입니다.`,(0,l.jsx)(`br`,{}),`각 요소는 `,(0,l.jsx)(`b`,{children:`내용(content)`}),`, `,(0,l.jsx)(`b`,{children:`내부 여백(padding)`}),`,`,` `,(0,l.jsx)(`b`,{children:`테두리(border)`}),`, `,(0,l.jsx)(`b`,{children:`외부 여백(margin)`}),` 영역으로 구성되며, 이 영역들을 조합하여 요소의 최종 크기와 위치를 결정합니다.`]}),(0,l.jsxs)(`p`,{className:`mt_ms`,children:[`박스 모델을 이해하면 요소의 크기(`,(0,l.jsx)(`code`,{children:`width`}),`, `,(0,l.jsx)(`code`,{children:`height`}),`), 여백(`,(0,l.jsx)(`code`,{children:`margin`}),`, `,(0,l.jsx)(`code`,{children:`padding`}),`), 테두리(`,(0,l.jsx)(`code`,{children:`border`}),`) 등을 정확하게 제어할 수 있으며, 레이아웃을 구성하는 데 필수적인 개념입니다.`]})]})}function h({className:e=`uk_editor min_height_400`}){return(0,l.jsx)(`div`,{className:e,"aria-hidden":!0})}function g(){return a({title:`박스 모델 속성 part-1`,description:`CSS의 박스 모델(Box Model)은 모든 HTML 요소를 사각형 박스로 취급하여 배치하는 기본 개념으로, 각 요소는 내용(content), 내부 여백(padding), 테두리(border), 외부 여백(margin) 영역으로 구성됩니다. 이 페이지에서는 박스의 크기를 설정하는 width와 height 속성, 박스의 외부 여백을 설정하는 margin 속성, 박스의 내부 여백을 설정하는 padding 속성, 논리적 프로퍼티(Logical Properties)를 함께 소개합니다.`,keyword:`style, css, Cascading Style Sheets, 크기, 외부 여백, 내부 여백, width, height, margin, padding`,layout:d}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{}),(0,l.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,l.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,l.jsxs)(`p`,{children:[(0,l.jsx)(`b`,{className:`t_blue`,children:`박스 모델 속성 part-1`}),`에서는`,(0,l.jsx)(`br`,{})]}),(0,l.jsxs)(`ul`,{className:`dot_lst indent_small`,children:[(0,l.jsx)(`li`,{className:`before_note`,children:(0,l.jsxs)(`b`,{children:[`박스 크기(`,(0,l.jsx)(`code`,{children:`width`}),`, `,(0,l.jsx)(`code`,{children:`height`}),`) 속성`]})}),(0,l.jsx)(`li`,{className:`before_note`,children:(0,l.jsxs)(`b`,{children:[`박스 외부 여백(`,(0,l.jsx)(`code`,{children:`margin`}),`) 속성`]})}),(0,l.jsx)(`li`,{className:`before_note`,children:(0,l.jsxs)(`b`,{children:[`박스 내부 여백(`,(0,l.jsx)(`code`,{children:`padding`}),`) 속성`]})}),(0,l.jsxs)(`li`,{className:`before_note`,children:[(0,l.jsx)(`b`,{children:`논리적 프로퍼티(Logical Properties)`}),`에 대한 내용을 다룹니다.`]})]})]}),(0,l.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,l.jsx)(`img`,{src:`${p}/uxkm_boxmodel.svg`,alt:`박스 모델 다이어그램`}),(0,l.jsxs)(`figcaption`,{children:[(0,l.jsx)(`strong`,{className:`t_black`,children:`[박스 모델 다이어그램]`}),(0,l.jsxs)(`ul`,{children:[(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`b`,{children:`내용(content)`}),` : 텍스트나 이미지가 들어있는 박스의 실질적인 내용 부분입니다.`]}),(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`b`,{children:`내부 여백(padding)`}),` : 내용과 테두리 사이의 간격입니다. 패딩은 눈에 보이지 않습니다.`]}),(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`b`,{children:`테두리(border)`}),` : 내용와 패딩 주변을 감싸는 테두리입니다.`]}),(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`b`,{children:`외부 여백(margin)`}),` : 테두리와 이웃하는 요소 사이의 간격입니다. 마진은 눈에 보이지 않습니다.`]}),(0,l.jsx)(`li`,{className:`mt_s`,children:(0,l.jsx)(`code`,{children:`width : width + right padding + left padding + right border + left border + right margin + left margin`})}),(0,l.jsx)(`li`,{children:(0,l.jsx)(`code`,{children:`height : height + top padding + bottom padding + top border + bottom border + top margin + bottom margin`})})]})]})]}),(0,l.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,l.jsxs)(`figcaption`,{className:`mt_0`,children:[(0,l.jsx)(`code`,{children:`width:200px; height:200px; margin:20px auto; padding:20px; border:10px solid skyblue;`}),(0,l.jsx)(`br`,{}),(0,l.jsx)(`span`,{className:`t_blue`,children:`위와 같이 명시된 경우의 크롬 devTool에서 확인한 boxmodel 예시`})]}),(0,l.jsx)(`hr`,{className:`dashed_line mt_ml`}),(0,l.jsxs)(`div`,{className:`mt_m`,children:[(0,l.jsx)(`strong`,{className:`t_black`,children:`[박스모델]`}),(0,l.jsx)(`br`,{}),(0,l.jsx)(`img`,{src:`${p}/img_devtool_boxmodel_boxmodel.png`,alt:`boxmodel`,className:`mt_s`})]}),(0,l.jsx)(`hr`,{className:`dashed_line mt_ml`}),(0,l.jsxs)(`div`,{className:`mt_m`,children:[(0,l.jsx)(`strong`,{className:`t_black`,children:`[Contents 영역]`}),(0,l.jsx)(`br`,{}),(0,l.jsx)(`img`,{src:`${p}/img_devtool_boxmodel_content.png`,alt:`content boxmodel`,className:`mt_s`})]}),(0,l.jsx)(`hr`,{className:`dashed_line mt_ml`}),(0,l.jsxs)(`div`,{className:`mt_m`,children:[(0,l.jsx)(`strong`,{className:`t_black`,children:`[Padding 영역]`}),(0,l.jsx)(`br`,{}),(0,l.jsx)(`img`,{src:`${p}/img_devtool_boxmodel_padding.png`,alt:`padding boxmodel`,className:`mt_s`})]}),(0,l.jsx)(`hr`,{className:`dashed_line mt_ml`}),(0,l.jsxs)(`div`,{className:`mt_m`,children:[(0,l.jsx)(`strong`,{className:`t_black`,children:`[Border 영역]`}),(0,l.jsx)(`br`,{}),(0,l.jsx)(`img`,{src:`${p}/img_devtool_boxmodel_border.png`,alt:`border boxmodel`,className:`mt_s`})]}),(0,l.jsx)(`hr`,{className:`dashed_line mt_ml`}),(0,l.jsxs)(`div`,{className:`mt_m`,children:[(0,l.jsx)(`strong`,{className:`t_black`,children:`[Margin 영역]`}),(0,l.jsx)(`br`,{}),(0,l.jsx)(`img`,{src:`${p}/img_devtool_boxmodel_margin.png`,alt:`margin boxmodel`,className:`mt_s`})]})]}),(0,l.jsxs)(`section`,{className:`txt_ex indent mt_xxl`,children:[(0,l.jsxs)(`h2`,{className:`ml_mn`,children:[`박스 크기(`,(0,l.jsx)(`i`,{className:`t_blue`,children:`width`}),`,`,` `,(0,l.jsx)(`i`,{className:`t_blue`,children:`height`}),`)를 제어하는 속성`]}),(0,l.jsxs)(`p`,{className:`mt_l`,children:[`HTML 요소의 크기를 설정하는 속성입니다.`,(0,l.jsx)(`br`,{}),(0,l.jsx)(`code`,{children:`width`}),`는 가로 크기, `,(0,l.jsx)(`code`,{children:`height`}),`는 세로 크기를 설정합니다.`]}),(0,l.jsx)(o,{title:`width, height`,language:`css`,className:`uk_gist_code_box mt_ms`,children:`div {
					width: <length> | <percentage>;
					height: <length> | <percentage>;
					max-width: <length> | <percentage>;
					max-height: <length> | <percentage>;
					min-width: <length> | <percentage>;
					min-height: <length> | <percentage>;
				}`}),(0,l.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,l.jsxs)(`h3`,{className:`ml_mn`,children:[(0,l.jsx)(`i`,{className:`t_blue`,children:`width`}),` 속성`]}),(0,l.jsxs)(`p`,{className:`mt_m`,children:[`요소의 가로 크기를 설정하는 속성입니다.`,(0,l.jsx)(`br`,{}),`기본값은 `,(0,l.jsx)(`code`,{children:`auto`}),`로, 브라우저가 자동으로 너비를 설정합니다.`]})]}),(0,l.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,l.jsxs)(`h3`,{className:`ml_mn`,children:[(0,l.jsx)(`i`,{className:`t_blue`,children:`height`}),` 속성`]}),(0,l.jsxs)(`p`,{className:`mt_m`,children:[`요소의 세로 크기를 설정하는 속성입니다.`,(0,l.jsx)(`br`,{}),`기본값은 `,(0,l.jsx)(`code`,{children:`auto`}),`로, 브라우저가 자동으로 높이를 설정합니다.`]})]}),(0,l.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,l.jsxs)(`h3`,{className:`ml_mn`,children:[(0,l.jsx)(`i`,{className:`t_blue`,children:`min-width`}),` 속성`]}),(0,l.jsxs)(`p`,{className:`mt_m`,children:[`요소가 가질 수 있는 최소 가로 크기를 설정하는 속성입니다.`,(0,l.jsx)(`br`,{}),`기본값은 `,(0,l.jsx)(`code`,{children:`0`}),`이며, 요소의 너비가 설정한 값 이하로 줄어들지 않습니다.`,(0,l.jsx)(`br`,{}),`브라우저 크기가 줄어들어도 요소의 너비는 최소값 이하로 줄어들지 않고 수평 스크롤바가 생성됩니다.`]})]}),(0,l.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,l.jsxs)(`h3`,{className:`ml_mn`,children:[(0,l.jsx)(`i`,{className:`t_blue`,children:`min-height`}),` 속성`]}),(0,l.jsxs)(`p`,{className:`mt_m`,children:[`요소가 가질 수 있는 최소 세로 크기를 설정하는 속성입니다.`,(0,l.jsx)(`br`,{}),`기본값은 `,(0,l.jsx)(`code`,{children:`0`}),`이며, 요소의 높이가 설정한 값 이하로 줄어들지 않습니다.`]})]}),(0,l.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,l.jsxs)(`h3`,{className:`ml_mn`,children:[(0,l.jsx)(`i`,{className:`t_blue`,children:`max-width`}),` 속성`]}),(0,l.jsxs)(`p`,{className:`mt_m`,children:[`요소가 가질 수 있는 최대 가로 크기를 설정하는 속성입니다.`,(0,l.jsx)(`br`,{}),`기본값은 `,(0,l.jsx)(`code`,{children:`none`}),`이며, 브라우저 크기에 맞춰 자동으로 조정됩니다.`,(0,l.jsx)(`br`,{}),(0,l.jsx)(`code`,{children:`width`}),`와 달리 반응형으로 동작하여 브라우저 크기가 줄어들면 요소의 너비도 함께 줄어듭니다.`]})]}),(0,l.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,l.jsxs)(`h3`,{className:`ml_mn`,children:[(0,l.jsx)(`i`,{className:`t_blue`,children:`max-height`}),` 속성`]}),(0,l.jsxs)(`p`,{className:`mt_m`,children:[`요소가 가질 수 있는 최대 세로 크기를 설정하는 속성입니다.`,(0,l.jsx)(`br`,{}),`기본값은 `,(0,l.jsx)(`code`,{children:`none`}),`이며, 요소의 높이가 설정한 값보다 클 경우 수직 스크롤바가 생성됩니다.`]})]}),(0,l.jsx)(`aside`,{className:`browser_support mt_xl`,"data-tit":`box size`,children:(0,l.jsxs)(`ul`,{children:[(0,l.jsx)(`li`,{className:`ie`,children:`4+`}),(0,l.jsx)(`li`,{className:`edge`,children:`12.0`}),(0,l.jsx)(`li`,{className:`chrome`,children:`1.0`}),(0,l.jsx)(`li`,{className:`firefox`,children:`1.0`}),(0,l.jsx)(`li`,{className:`opera`,children:`7.0`}),(0,l.jsx)(`li`,{className:`safari`,children:`1.0`})]})})]}),(0,l.jsxs)(`section`,{className:`txt_ex indent mt_xxl`,children:[(0,l.jsxs)(`h2`,{className:`ml_mn`,children:[`박스 외부 여백(`,(0,l.jsx)(`i`,{className:`t_blue`,children:`margin`}),`)을 제어하는 속성`]}),(0,l.jsxs)(`p`,{className:`mt_l`,children:[`요소의 외부 여백을 설정하는 속성입니다.`,(0,l.jsx)(`br`,{}),`테두리와 이웃하는 요소 사이의 간격을 설정하며, 배경색의 영향을 받지 않습니다.`,(0,l.jsx)(`br`,{}),`방향별로 따로 설정할 수 있으며, 음수값으로 설정하면 요소를 겹치게 할 수 있습니다.`]}),(0,l.jsx)(o,{title:`margin`,language:`css`,className:`uk_gist_code_box mt_m`,children:`div {
					margin: margin-width | inherit;
				}`}),(0,l.jsxs)(`figure`,{className:`img_figure mt_m`,children:[(0,l.jsx)(`img`,{src:`${p}/uxkm_boxmodel_margin.svg`,alt:`margin boxmodel`}),(0,l.jsx)(`figcaption`,{children:`[margin boxmodel 다이어그램]`})]}),(0,l.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,l.jsxs)(`h3`,{className:`ml_mn`,children:[(0,l.jsx)(`i`,{className:`t_blue`,children:`margin`}),` 속성`]}),(0,l.jsxs)(`p`,{className:`mt_m`,children:[(0,l.jsx)(`code`,{children:`margin`}),`을 각각 방향별로 설정할 수 있습니다.`]}),(0,l.jsx)(o,{title:`margin`,language:`css`,className:`uk_gist_code_box mt_m`,children:`div {
						margin-top: 10px;    /* 윗쪽의 마진(margin) 값을 설정합니다. */
						margin-right: 10px;  /* 오른쪽의 마진(margin) 값을 설정합니다. */
						margin-bottom: 10px; /* 아래쪽의 마진(margin) 값을 설정합니다. */
						margin-left: 10px;   /* 왼쪽의 마진(margin) 값을 설정합니다. */
					}`})]}),(0,l.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,l.jsxs)(`h3`,{className:`ml_mn`,children:[(0,l.jsx)(`i`,{className:`t_blue`,children:`margin`}),` 축약형 속성`]}),(0,l.jsxs)(`p`,{className:`mt_m`,children:[`모든 `,(0,l.jsx)(`code`,{children:`margin`}),` 속성을 한 줄에 축약형으로 설정할 수 있습니다.`,(0,l.jsx)(`br`,{}),`값이 동일한 경우 4가지 방식으로 사용할 수 있으며, `,(0,l.jsx)(`code`,{children:`auto`}),`로 설정하면 수평 방향 마진이 자동으로 설정되어 요소가 가운데 정렬됩니다.`]}),(0,l.jsx)(`div`,{className:`ol_lst indent mt_m`,children:(0,l.jsxs)(`ol`,{children:[(0,l.jsxs)(`li`,{className:`line_code font14 mt_ms`,children:[(0,l.jsx)(`strong`,{children:`4개의 값을 지정할 때 top, right, bottom, left 순(시계방향)으로 설정합니다.`}),(0,l.jsx)(o,{title:`margin shorthand`,language:`css`,className:`uk_gist_code_box mt_s`,children:`div {
									margin: 10px 20px 30px 40px;
									/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
									margin-top: 10px;
									margin-right: 20px;
									margin-bottom: 30px;
									margin-left: 40px;
								}`})]}),(0,l.jsxs)(`li`,{className:`line_code font14 mt_ml`,children:[(0,l.jsx)(`strong`,{children:`3개의 값을 지정할 때 top, [right/left], bottom 순으로 설정합니다.`}),(0,l.jsx)(`p`,{className:`mt_sm`,children:`좌/우의 값이 같으면 하나로 명시하여 지정이 가능합니다.`}),(0,l.jsx)(o,{title:`margin shorthand`,language:`css`,className:`uk_gist_code_box mt_s`,children:`div {
									margin: 25px 50px 75px;
									/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
									margin-top: 25px;
									margin-right: 50px;
									margin-left: 50px;
									margin-bottom: 75px
								}`})]}),(0,l.jsxs)(`li`,{className:`line_code font14 mt_ml`,children:[(0,l.jsx)(`strong`,{children:`2개의 값을 지정할 때 [top/bottom], [right/left] 순으로 설정합니다.`}),(0,l.jsx)(`p`,{className:`mt_sm`,children:`상/하의 값이 같고, 좌/우의 값이 같으면 하나로 명시하여 지정이 가능합니다.`}),(0,l.jsx)(`p`,{children:`이 때 좌/우의 값을 auto로 지정하면 가운데로 정렬이 가능합니다.`}),(0,l.jsx)(o,{title:`margin shorthand`,language:`css`,className:`uk_gist_code_box mt_s`,children:`div {
									margin: 25px 50px;
									/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
									margin-top: 25px;
									margin-bottom: 25px;
									margin-right: 50px;
									margin-left: 50px;
								}`})]}),(0,l.jsxs)(`li`,{className:`line_code font14 mt_ml`,children:[(0,l.jsx)(`strong`,{children:`1개의 값을 지정하여 설정합니다.`}),(0,l.jsx)(`p`,{className:`mt_sm`,children:`상/우/하/좌의 값이 같으면 하나로 명시하여 지정이 가능합니다.`}),(0,l.jsx)(o,{title:`margin shorthand`,language:`css`,className:`uk_gist_code_box mt_s`,children:`div {
									margin: 25px;
									/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
									margin-top: 25px;
									margin-right: 25px;
									margin-bottom: 25px;
									margin-left: 25px;
								}`})]})]})})]}),(0,l.jsx)(`aside`,{className:`browser_support mt_l`,"data-tit":`margin`,children:(0,l.jsxs)(`ul`,{children:[(0,l.jsx)(`li`,{className:`ie`,children:`4+`}),(0,l.jsx)(`li`,{className:`edge`,children:`12.0`}),(0,l.jsx)(`li`,{className:`chrome`,children:`1.0`}),(0,l.jsx)(`li`,{className:`firefox`,children:`1.0`}),(0,l.jsx)(`li`,{className:`opera`,children:`3.5`}),(0,l.jsx)(`li`,{className:`safari`,children:`1.0`})]})})]}),(0,l.jsxs)(`section`,{className:`txt_ex indent mt_xxl`,children:[(0,l.jsxs)(`h2`,{className:`ml_mn`,children:[`박스 내부 여백(`,(0,l.jsx)(`i`,{className:`t_blue`,children:`padding`}),`)을 제어하는 속성`]}),(0,l.jsxs)(`p`,{className:`mt_l`,children:[`요소의 내부 여백을 설정하는 속성입니다.`,(0,l.jsx)(`br`,{}),`내용과 테두리 사이의 간격을 설정하며, 배경색의 영향을 받습니다.`,(0,l.jsx)(`br`,{}),`방향별로 따로 설정할 수 있습니다.`]}),(0,l.jsx)(o,{title:`padding`,language:`css`,className:`uk_gist_code_box mt_m`,children:`div {
					padding: padding-width | inherit;
				}`}),(0,l.jsxs)(`figure`,{className:`img_figure mt_m`,children:[(0,l.jsx)(`img`,{src:`${p}/uxkm_boxmodel_padding.svg`,alt:`padding boxmodel`}),(0,l.jsx)(`figcaption`,{children:`[padding boxmodel 다이어그램]`})]}),(0,l.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,l.jsxs)(`h3`,{className:`ml_mn`,children:[(0,l.jsx)(`i`,{className:`t_blue`,children:`padding`}),` 속성`]}),(0,l.jsxs)(`p`,{className:`mt_m`,children:[(0,l.jsx)(`code`,{children:`padding`}),`을 각각 방향별로 설정할 수 있습니다.`]}),(0,l.jsx)(o,{title:`padding`,language:`css`,className:`uk_gist_code_box mt_m`,children:`div {
						padding-top: 10px;    /* 윗쪽의 패딩(padding) 값을 설정합니다. */
						padding-right: 10px;  /* 오른쪽의 패딩(padding) 값을 설정합니다. */
						padding-bottom: 10px; /* 아래쪽의 패딩(padding) 값을 설정합니다. */
						padding-left: 10px;   /* 왼쪽의 패딩(padding) 값을 설정합니다. */
					}`})]}),(0,l.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,l.jsxs)(`h3`,{className:`ml_mn`,children:[(0,l.jsx)(`i`,{className:`t_blue`,children:`padding`}),` 축약형 속성`]}),(0,l.jsxs)(`p`,{className:`mt_m`,children:[`모든 `,(0,l.jsx)(`code`,{children:`padding`}),` 속성을 한 줄에 축약형으로 설정할 수 있습니다.`,(0,l.jsx)(`br`,{}),`값이 동일한 경우 4가지 방식으로 사용할 수 있습니다.`]}),(0,l.jsx)(`div`,{className:`ol_lst indent mt_m`,children:(0,l.jsxs)(`ol`,{children:[(0,l.jsxs)(`li`,{className:`line_code font14 mt_ms`,children:[(0,l.jsx)(`strong`,{children:`4개의 값을 지정할 때 top, right, bottom, left 순(시계방향)으로 설정합니다.`}),(0,l.jsx)(o,{title:`padding shorthand`,language:`css`,className:`uk_gist_code_box mt_s`,children:`div {
									padding: 10px 20px 30px 40px;
									/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
									padding-top: 10px;
									padding-right: 20px;
									padding-bottom: 30px;
									padding-left: 40px;
								}`})]}),(0,l.jsxs)(`li`,{className:`line_code font14 mt_ml`,children:[(0,l.jsx)(`strong`,{children:`3개의 값을 지정할 때 top, [right/left], bottom 순으로 설정합니다.`}),(0,l.jsx)(`p`,{className:`mt_sm`,children:`좌/우의 값이 같으면 하나로 명시하여 지정이 가능합니다.`}),(0,l.jsx)(o,{title:`padding shorthand`,language:`css`,className:`uk_gist_code_box mt_s`,children:`div {
									padding: 25px 50px 75px;
									/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
									padding-top: 25px;
									padding-right: 50px;
									padding-left: 50px;
									padding-bottom: 75px;
								}`})]}),(0,l.jsxs)(`li`,{className:`line_code font14 mt_ml`,children:[(0,l.jsx)(`strong`,{children:`2개의 값을 지정할 때 [top/bottom], [right/left] 순으로 설정합니다.`}),(0,l.jsx)(`p`,{className:`mt_sm`,children:`상/하의 값이 같고, 좌/우의 값이 같으면 하나로 명시하여 지정이 가능합니다.`}),(0,l.jsx)(o,{title:`padding shorthand`,language:`css`,className:`uk_gist_code_box mt_s`,children:`div {
									padding: 25px 50px;
									/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
									padding-top: 25px;
									padding-bottom: 25px;
									padding-right: 50px;
									padding-left: 50px;
								}`})]}),(0,l.jsxs)(`li`,{className:`line_code font14 mt_ml`,children:[(0,l.jsx)(`strong`,{children:`1개의 값을 지정하여 설정합니다.`}),(0,l.jsx)(`p`,{className:`mt_sm`,children:`상/우/하/좌의 값이 같으면 하나로 명시하여 지정이 가능합니다.`}),(0,l.jsx)(o,{title:`padding shorthand`,language:`css`,className:`uk_gist_code_box mt_s`,children:`div {
									padding: 25px;
									/* 위의 예제는 아래 4줄의 코드와 같은 의미를 가지고 있습니다. */
									padding-top: 25px;
									padding-right: 25px;
									padding-bottom: 25px;
									padding-left: 25px;
								}`})]})]})})]}),(0,l.jsx)(`aside`,{className:`browser_support mt_l`,"data-tit":`padding`,children:(0,l.jsxs)(`ul`,{children:[(0,l.jsx)(`li`,{className:`ie`,children:`4+`}),(0,l.jsx)(`li`,{className:`edge`,children:`12.0`}),(0,l.jsx)(`li`,{className:`chrome`,children:`1.0`}),(0,l.jsx)(`li`,{className:`firefox`,children:`1.0`}),(0,l.jsx)(`li`,{className:`opera`,children:`3.5`}),(0,l.jsx)(`li`,{className:`safari`,children:`1.0`})]})})]}),(0,l.jsxs)(`section`,{className:`txt_ex indent mt_xxl`,children:[(0,l.jsx)(`h2`,{className:`ml_mn`,children:`논리적 프로퍼티(Logical Properties)`}),(0,l.jsxs)(`p`,{className:`mt_l`,children:[`논리적 프로퍼티는 `,(0,l.jsx)(`b`,{children:`물리적 방향(left, right, top, bottom)`}),`이 아닌`,` `,(0,l.jsx)(`b`,{children:`문서의 쓰기 모드(writing mode)`}),`에 따라 자동으로 적응하는 CSS 속성입니다.`,(0,l.jsx)(`br`,{}),`한국어나 영어처럼 좌에서 우로 쓰는 언어(LTR)와 아랍어처럼 우에서 좌로 쓰는 언어(RTL), 또는 일본어처럼 세로로 쓰는 언어에서도 동일한 스타일을 유지할 수 있습니다.`]}),(0,l.jsxs)(`p`,{className:`mt_s`,children:[`논리적 프로퍼티는`,` `,(0,l.jsx)(`strong`,{className:`t_black`,children:`CSS Logical Properties and Values Level 1`}),`에 정의되어 있으며, 다국어 웹사이트나 양방향 레이아웃을 구현할 때 필수적입니다.`]}),(0,l.jsxs)(`article`,{className:`indent mt_xl`,children:[(0,l.jsx)(`h3`,{className:`ml_mn t_blue`,children:`논리적 방향 개념`}),(0,l.jsx)(`p`,{className:`mt_m`,children:`논리적 프로퍼티는 다음과 같은 방향 키워드를 사용합니다:`}),(0,l.jsxs)(`ul`,{className:`dot_lst indent mt_s`,children:[(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`code`,{children:`inline-start`}),` / `,(0,l.jsx)(`code`,{children:`inline-end`}),`: 텍스트가 시작하는 방향 / 끝나는 방향 (LTR: 좌/우, RTL: 우/좌)`]}),(0,l.jsxs)(`li`,{children:[(0,l.jsx)(`code`,{children:`block-start`}),` / `,(0,l.jsx)(`code`,{children:`block-end`}),`: 블록이 시작하는 방향 / 끝나는 방향 (LTR: 상/하, 세로 쓰기: 우/좌)`]})]}),(0,l.jsx)(`p`,{className:`mt_ms`,children:`물리적 프로퍼티와 논리적 프로퍼티의 대응 관계:`}),(0,l.jsx)(o,{title:`논리적 프로퍼티 매핑`,language:`css`,className:`uk_gist_code_box mt_ms`,children:`/* 물리적 프로퍼티 → 논리적 프로퍼티 (LTR 기준) */

					/* 크기 */
					width → inline-size
					height → block-size

					/* 여백 */
					margin-left → margin-inline-start
					margin-right → margin-inline-end
					margin-top → margin-block-start
					margin-bottom → margin-block-end

					/* 패딩 */
					padding-left → padding-inline-start
					padding-right → padding-inline-end
					padding-top → padding-block-start
					padding-bottom → padding-block-end

					/* 위치 */
					left → inset-inline-start
					right → inset-inline-end
					top → inset-block-start
					bottom → inset-block-end`})]}),(0,l.jsxs)(`article`,{className:`indent mt_xl`,children:[(0,l.jsx)(`h3`,{className:`ml_mn t_blue`,children:`여백의 논리적 프로퍼티`}),(0,l.jsxs)(`p`,{className:`mt_m`,children:[(0,l.jsx)(`code`,{children:`margin`}),`과 `,(0,l.jsx)(`code`,{children:`padding`}),`의 논리적 프로퍼티는 인라인 방향과 블록 방향으로 구분됩니다.`]}),(0,l.jsx)(o,{title:`margin 논리적 프로퍼티`,language:`css`,className:`uk_gist_code_box mt_ms`,children:`.box {
						/* 인라인 방향 (가로) */
						margin-inline-start: 20px;  /* margin-left와 동일 (LTR) */
						margin-inline-end: 20px;    /* margin-right와 동일 (LTR) */
						margin-inline: 20px;       /* 양쪽 인라인 여백 */

						/* 블록 방향 (세로) */
						margin-block-start: 10px;   /* margin-top과 동일 */
						margin-block-end: 10px;     /* margin-bottom과 동일 */
						margin-block: 10px;        /* 양쪽 블록 여백 */
					}`}),(0,l.jsx)(o,{title:`padding 논리적 프로퍼티`,language:`css`,className:`uk_gist_code_box mt_ms`,children:`.box {
						/* 인라인 방향 (가로) */
						padding-inline-start: 20px;  /* padding-left와 동일 (LTR) */
						padding-inline-end: 20px;    /* padding-right와 동일 (LTR) */
						padding-inline: 20px;       /* 양쪽 인라인 패딩 */

						/* 블록 방향 (세로) */
						padding-block-start: 10px;   /* padding-top과 동일 */
						padding-block-end: 10px;     /* padding-bottom과 동일 */
						padding-block: 10px;        /* 양쪽 블록 패딩 */
					}`})]}),(0,l.jsxs)(`article`,{className:`indent mt_xl`,children:[(0,l.jsx)(`h3`,{className:`ml_mn t_blue`,children:`크기의 논리적 프로퍼티`}),(0,l.jsxs)(`p`,{className:`mt_m`,children:[(0,l.jsx)(`code`,{children:`width`}),`와 `,(0,l.jsx)(`code`,{children:`height`}),` 대신`,` `,(0,l.jsx)(`code`,{children:`inline-size`}),`와 `,(0,l.jsx)(`code`,{children:`block-size`}),`를 사용할 수 있습니다.`]}),(0,l.jsx)(o,{title:`크기 논리적 프로퍼티`,language:`css`,className:`uk_gist_code_box mt_ms`,children:`.box {
						/* 물리적 프로퍼티 */
						width: 300px;
						height: 200px;

						/* 논리적 프로퍼티 (동일한 결과) */
						inline-size: 300px;  /* width와 동일 */
						block-size: 200px;  /* height와 동일 */
					}`})]}),(0,l.jsxs)(`article`,{className:`indent mt_xl`,children:[(0,l.jsx)(`h3`,{className:`ml_mn t_blue`,children:`위치의 논리적 프로퍼티`}),(0,l.jsxs)(`p`,{className:`mt_m`,children:[(0,l.jsx)(`code`,{children:`position`}),` 속성과 함께 사용하는 `,(0,l.jsx)(`code`,{children:`top`}),`,`,` `,(0,l.jsx)(`code`,{children:`right`}),`, `,(0,l.jsx)(`code`,{children:`bottom`}),`, `,(0,l.jsx)(`code`,{children:`left`}),` 대신`,` `,(0,l.jsx)(`code`,{children:`inset`}),` 논리적 프로퍼티를 사용할 수 있습니다.`]}),(0,l.jsx)(o,{title:`inset 논리적 프로퍼티`,language:`css`,className:`uk_gist_code_box mt_ms`,children:`.box {
						position: absolute;

						/* 물리적 프로퍼티 */
						top: 10px;
						right: 20px;
						bottom: 10px;
						left: 20px;

						/* 논리적 프로퍼티 (동일한 결과) */
						inset-block-start: 10px;   /* top과 동일 */
						inset-inline-end: 20px;    /* right와 동일 (LTR) */
						inset-block-end: 10px;     /* bottom과 동일 */
						inset-inline-start: 20px;  /* left와 동일 (LTR) */

						/* 또는 속기형 */
						inset: 10px 20px;  /* block inline */
					}`})]}),(0,l.jsxs)(`article`,{className:`view_editor edit_code mt_xl`,children:[(0,l.jsx)(`h3`,{className:`ml_mn ve_tit`,children:`논리적 프로퍼티 예제`}),(0,l.jsx)(`p`,{className:`mt_m`,children:`쓰기 모드에 따라 자동으로 적응하는 카드 레이아웃 예제입니다.`}),(0,l.jsx)(c.Suspense,{fallback:(0,l.jsx)(h,{className:`uk_editor mt_ms min_height_600 mb_result_height_500`}),children:(0,l.jsx)(u,{target:`css/step02/2.9.boxmodel/2.9.8.logical-properties.html`,className:`uk_editor mt_ms min_height_600 mb_result_height_500`,mode:`htmlmixed`,browser:`default`,title:`2.9.8.logical-properties`,minHeight:`600px`,result:!0})})]}),(0,l.jsxs)(`figure`,{className:`img_figure indent mt_l`,children:[(0,l.jsx)(`img`,{src:`${f}/02_css_09_1.png`,alt:`CSS 박스 모델`}),(0,l.jsx)(`figcaption`,{className:`reference`,children:`CSS 박스 모델`})]}),(0,l.jsx)(`aside`,{className:`browser_support mt_xl`,"data-tit":`logical properties`,children:(0,l.jsxs)(`ul`,{children:[(0,l.jsx)(`li`,{className:`edge`,children:`79.0`}),(0,l.jsx)(`li`,{className:`chrome`,children:`69.0`}),(0,l.jsx)(`li`,{className:`firefox`,children:`66.0`}),(0,l.jsx)(`li`,{className:`opera`,children:`56.0`}),(0,l.jsx)(`li`,{className:`safari`,children:`12.1`})]})})]}),(0,l.jsxs)(`aside`,{className:`reference_box mt_xxl`,children:[(0,l.jsx)(`strong`,{className:`tit`,children:`박스 모델 속성 참조`}),(0,l.jsxs)(`ul`,{className:`link_lst`,children:[(0,l.jsx)(`li`,{className:`reference`,children:(0,l.jsx)(`a`,{href:`https://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#box-model`,target:`_blank`,className:`fas`,title:`새창열림`,children:`W3C Box Model`})}),(0,l.jsx)(`li`,{className:`reference`,children:(0,l.jsx)(`a`,{href:`https://drafts.csswg.org/css-box-3`,target:`_blank`,className:`fas`,title:`새창열림`,children:`Draft, CSS Box Model Module Level 3`})}),(0,l.jsx)(`li`,{className:`reference`,children:(0,l.jsx)(`a`,{href:`https://www.w3.org/TR/css-logical-1/`,target:`_blank`,className:`fas`,title:`새창열림`,children:`W3C CSS Logical Properties and Values Level 1`})}),(0,l.jsx)(`li`,{className:`reference`,children:(0,l.jsx)(`a`,{href:`https://drafts.csswg.org/css-ui-3/#box-sizing`,target:`_blank`,className:`fas`,title:`새창열림`,children:`CSS Basic User Interface Module Level 3`})}),(0,l.jsx)(`li`,{className:`reference`,children:(0,l.jsx)(`a`,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model`,target:`_blank`,className:`fas`,title:`새창열림`,children:`MDN Box Model`})}),(0,l.jsx)(`li`,{className:`reference`,children:(0,l.jsx)(`a`,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius`,target:`_blank`,className:`fas`,title:`새창열림`,children:`MDN border-radius`})})]})]})]})}export{g as default,s as t};