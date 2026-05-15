import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`믹스인 실무 예제`,description:`실무에서 자주 사용하는 SCSS 믹스인 예제를 상세히 알아봅니다. Flexbox 레이아웃, clearfix, 반응형 미디어 쿼리, 트랜지션, 트랜스폼, 그리드 레이아웃 등 실용적인 믹스인 예제를 제공합니다.`,keyword:`scss flex 믹스인, scss clearfix, scss 반응형 믹스인, scss 실무 믹스인, scss 미디어 쿼리 믹스인`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`실무에서는 `,(0,o.jsx)(`b`,{children:`Flexbox 레이아웃, clearfix, 반응형 미디어 쿼리`}),` 등을 자주 사용합니다.`,(0,o.jsx)(`br`,{}),`이런 패턴들을 `,(0,o.jsx)(`b`,{children:`믹스인으로 만들어 두면`}),` 프로젝트 전반에서 일관되게 사용할 수 있고, 코드 작성 효율도 크게 향상됩니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 실무에서 자주 사용하는 믹스인 예제들을 카테고리별로 나누어 상세히 살펴보고, 각 믹스인의 사용법과 활용 예시를 제공합니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`Flexbox 레이아웃 믹스인`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`Flexbox 레이아웃은 `,(0,o.jsx)(`b`,{children:`가장 자주 사용되는 패턴`}),` 중 하나입니다.`,(0,o.jsx)(`br`,{}),`자주 사용하는 Flexbox 조합을 믹스인으로 만들어두면, 헤더·내비게이션·카드 리스트 등 다양한 컴포넌트에서`,` `,(0,o.jsx)(`b`,{children:`정렬 규칙을 일관되게 재사용`}),`할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`flex-center - 중앙 정렬`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`요소를 `,(0,o.jsx)(`b`,{children:`수평·수직 중앙 정렬`}),`하는 믹스인입니다.`]}),(0,o.jsx)(i,{title:`flex-center 믹스인`,language:`css`,className:`mt_m`,children:`@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
  height: 100vh;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`flex-between - 양쪽 정렬`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`요소를 `,(0,o.jsx)(`b`,{children:`양쪽 끝에 배치`}),`하는 믹스인입니다.`]}),(0,o.jsx)(i,{title:`flex-between 믹스인`,language:`css`,className:`mt_m`,children:`@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header {
  @include flex-between;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`flex-column - 세로 방향`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`Flexbox를 `,(0,o.jsx)(`b`,{children:`세로 방향`}),`으로 사용하는 믹스인입니다.`]}),(0,o.jsx)(i,{title:`flex-column 믹스인`,language:`css`,className:`mt_m`,children:`@mixin flex-column {
  display: flex;
  flex-direction: column;
}

.sidebar {
  @include flex-column;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`파라미터가 있는 Flexbox 믹스인`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`더 유연하게 사용할 수 있도록 `,(0,o.jsx)(`b`,{children:`파라미터를 받는 Flexbox 믹스인`}),`입니다.`]}),(0,o.jsx)(i,{title:`파라미터가 있는 Flexbox 믹스인`,language:`css`,className:`mt_m`,children:`@mixin flex($direction: row, $justify: flex-start, $align: stretch, $gap: 0) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
  gap: $gap;
}

.container {
  @include flex(row, space-between, center, 16px);
}

.vertical-center {
  @include flex($justify: center, $align: center);
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`Clearfix 믹스인`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`Float를 사용한 레이아웃에서 `,(0,o.jsx)(`b`,{children:`부모 요소의 높이 문제를 해결`}),`하는 clearfix 믹스인입니다.`,(0,o.jsx)(`br`,{}),`레거시 코드나 기존 프로젝트를 다룰 때 여전히 만나게 되는 패턴이므로, 한 번 만들어 두면 `,(0,o.jsx)(`b`,{children:`예상치 못한 레이아웃 깨짐`}),`을 빠르게 잡는 데 도움이 됩니다.`]}),(0,o.jsx)(i,{title:`clearfix 믹스인`,language:`css`,className:`mt_m`,children:`@mixin clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

.container {
  @include clearfix;
}`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`이 믹스인을 사용하면`,` `,(0,o.jsx)(`b`,{children:`Float 레이아웃에서 부모 요소가 자식 요소의 높이를 인식`}),`하게 됩니다.`]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`반응형 미디어 쿼리 믹스인`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`반응형 디자인을 위한 `,(0,o.jsx)(`b`,{children:`미디어 쿼리 믹스인`}),`입니다.`,(0,o.jsx)(`br`,{}),`브레이크포인트를 변수·믹스인으로 관리하면, 새로운 기기 해상도가 추가되더라도 `,(0,o.jsx)(`b`,{children:`여러 곳의 미디어 쿼리를 하나의 규칙으로`}),` 조정할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 반응형 믹스인`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`브레이크포인트를 파라미터로 받는 `,(0,o.jsx)(`b`,{children:`기본 반응형 믹스인`}),`입니다.`]}),(0,o.jsx)(i,{title:`반응형 믹스인`,language:`css`,className:`mt_m`,children:`@mixin responsive($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

.container {
  width: 100%;

  @include responsive(768px) {
    max-width: 720px;
  }
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`사전 정의된 브레이크포인트`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`자주 사용하는 브레이크포인트를 `,(0,o.jsx)(`b`,{children:`사전에 정의`}),`해두면 더 편리합니다.`]}),(0,o.jsx)(i,{title:`사전 정의된 브레이크포인트`,language:`css`,className:`mt_m`,children:`$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;

@mixin tablet {
  @media (min-width: $breakpoint-md) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: $breakpoint-lg) {
    @content;
  }
}

.container {
  width: 100%;

  @include tablet {
    max-width: 720px;
  }

  @include desktop {
    max-width: 1140px;
  }
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`트랜지션 믹스인`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`CSS 트랜지션의 `,(0,o.jsx)(`b`,{children:`속성과 지속 시간을 파라미터로 받는 믹스인`}),`입니다.`,(0,o.jsx)(`br`,{}),`버튼, 링크, 카드 등 여러 컴포넌트에서 같은 트랜지션 규칙을 공유하면, 인터랙션의 속도와 느낌이 `,(0,o.jsx)(`b`,{children:`서비스 전반에서 일관되게 유지`}),`됩니다.`]}),(0,o.jsx)(i,{title:`트랜지션 믹스인`,language:`css`,className:`mt_m`,children:`@mixin transition($property: all, $duration: 0.3s, $timing: ease) {
  transition: $property $duration $timing;
}

.button {
  @include transition(background, 0.3s);
}

.link {
  @include transition(color, 0.2s, ease-in-out);
}`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`트랜스폼 믹스인`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`변형 효과를 위한 `,(0,o.jsx)(`b`,{children:`트랜스폼 믹스인`}),`입니다.`,(0,o.jsx)(`br`,{}),`요소를 가운데 맞추거나, 특정 방향으로 이동·회전시키는 코드를 믹스인으로 묶어 두면, `,(0,o.jsx)(`b`,{children:`레이아웃 실험과 인터랙션 구현`}),`을 빠르게 반복할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`중앙 정렬 트랜스폼`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`요소를 `,(0,o.jsx)(`b`,{children:`절대 위치로 중앙 정렬`}),`하는 믹스인입니다.`]}),(0,o.jsx)(i,{title:`중앙 정렬 트랜스폼`,language:`css`,className:`mt_m`,children:`@mixin absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal {
  @include absolute-center;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`회전 트랜스폼`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`요소를 `,(0,o.jsx)(`b`,{children:`지정한 각도만큼 회전`}),`시키는 믹스인입니다.`]}),(0,o.jsx)(i,{title:`회전 트랜스폼`,language:`css`,className:`mt_m`,children:`@mixin rotate($degrees: 45deg) {
  transform: rotate($degrees);
}

.icon {
  @include rotate(90deg);
}

.arrow {
  @include rotate(180deg);
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`이동 트랜스폼`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`요소를 `,(0,o.jsx)(`b`,{children:`X축, Y축 방향으로 이동`}),`시키는 믹스인입니다.`]}),(0,o.jsx)(i,{title:`이동 트랜스폼`,language:`css`,className:`mt_m`,children:`@mixin translate($x: 0, $y: 0) {
  transform: translate($x, $y);
}

.tooltip {
  @include translate(10px, -5px);
}

.slide-in {
  @include translate(100%, 0);
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`확대/축소 트랜스폼`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`요소를 `,(0,o.jsx)(`b`,{children:`지정한 비율로 확대하거나 축소`}),`하는 믹스인입니다.`]}),(0,o.jsx)(i,{title:`확대/축소 트랜스폼`,language:`css`,className:`mt_m`,children:`@mixin scale($ratio: 1.1) {
  transform: scale($ratio);
}

.button {
  @include scale(1);

  &:hover {
    @include scale(1.05);
  }
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`복합 트랜스폼`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 트랜스폼을 `,(0,o.jsx)(`b`,{children:`조합하여 사용`}),`하는 믹스인입니다.`]}),(0,o.jsx)(i,{title:`복합 트랜스폼`,language:`css`,className:`mt_m`,children:`@mixin transform($translate: 0, $rotate: 0, $scale: 1) {
  transform: translate($translate) rotate($rotate) scale($scale);
}

.card {
  @include transform(10px 20px, 5deg, 1.02);
}

.animated-icon {
  @include transform(0, 45deg, 1.1);
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`그리드 레이아웃 믹스인`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`CSS Grid를 사용한 `,(0,o.jsx)(`b`,{children:`그리드 레이아웃 믹스인`}),`입니다.`,(0,o.jsx)(`br`,{}),`복잡한 레이아웃을 간단하게 구성할 수 있고, 반응형 디자인에서도 유연하게 대응할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 그리드`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`컬럼 개수를 파라미터로 받는 `,(0,o.jsx)(`b`,{children:`그리드 믹스인`}),`입니다.`]}),(0,o.jsx)(i,{title:`그리드 믹스인`,language:`css`,className:`mt_m`,children:`@mixin grid($columns: 12, $gap: 16px) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: $gap;
}

.container {
  @include grid(12, 24px);
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`반응형 그리드`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`화면 크기에 따라 `,(0,o.jsx)(`b`,{children:`컬럼 개수가 자동으로 조정`}),`되는 그리드 믹스인입니다.`]}),(0,o.jsx)(i,{title:`반응형 그리드`,language:`css`,className:`mt_m`,children:`@mixin responsive-grid($min-width: 250px, $gap: 16px) {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax($min-width, 1fr));
  gap: $gap;
}

.card-list {
  @include responsive-grid(280px, 20px);
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`그리드 템플릿 영역`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`템플릿 영역을 지정하여 `,(0,o.jsx)(`b`,{children:`복잡한 레이아웃을 구성`}),`하는 그리드 믹스인입니다.`]}),(0,o.jsx)(i,{title:`그리드 템플릿 영역`,language:`css`,className:`mt_m`,children:`@mixin grid-template($areas) {
  display: grid;
  grid-template-areas: $areas;
}

.layout {
  @include grid-template(
    "header header header"
    "sidebar main main"
    "footer footer footer"
  );
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`그리드 아이템 배치`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`그리드 아이템의 `,(0,o.jsx)(`b`,{children:`시작 위치와 끝 위치를 지정`}),`하는 믹스인입니다.`]}),(0,o.jsx)(i,{title:`그리드 아이템 배치`,language:`css`,className:`mt_m`,children:`@mixin grid-item($row-start: auto, $row-end: auto, $col-start: auto, $col-end: auto) {
  grid-row: $row-start / $row-end;
  grid-column: $col-start / $col-end;
}

.featured {
  @include grid-item(1, 3, 1, 3);  // 2행 2열 차지
}

.wide {
  @include grid-item(auto, auto, 1, -1);  // 전체 너비
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`그리드 정렬`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`그리드 컨테이너의 `,(0,o.jsx)(`b`,{children:`정렬 방식을 지정`}),`하는 믹스인입니다.`]}),(0,o.jsx)(i,{title:`그리드 정렬`,language:`css`,className:`mt_m`,children:`@mixin grid-align($justify: stretch, $align: stretch) {
  justify-items: $justify;
  align-items: $align;
}

.container {
  @include grid(3, 16px);
  @include grid-align(center, center);
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`텍스트 말줄임표 믹스인`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`긴 텍스트를 `,(0,o.jsx)(`b`,{children:`말줄임표로 처리`}),`하는 믹스인입니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`한 줄 말줄임표`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`텍스트를 `,(0,o.jsx)(`b`,{children:`한 줄로 제한하고 말줄임표`}),`를 표시합니다.`]}),(0,o.jsx)(i,{title:`한 줄 말줄임표 믹스인`,language:`css`,className:`mt_m`,children:`@mixin text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.title {
  @include text-ellipsis;
  max-width: 200px;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`여러 줄 말줄임표`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`텍스트를 `,(0,o.jsx)(`b`,{children:`여러 줄로 제한하고 말줄임표`}),`를 표시합니다.`]}),(0,o.jsx)(i,{title:`여러 줄 말줄임표 믹스인`,language:`css`,className:`mt_m`,children:`@mixin text-ellipsis_multi($line_number, $line-height) {
  max-height: $line-height * $line_number;
  line-height: $line-height;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $line_number;
  -webkit-box-orient: vertical;
}

.description {
  @include text-ellipsis_multi($line_number: 2, $line-height: 20px);
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`실무에서 자주 사용하는 믹스인 예제에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`Flexbox 레이아웃`}),`: flex-center, flex-between, flex-column 등 자주 사용하는 패턴`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`Clearfix`}),`: Float 레이아웃에서 부모 요소 높이 문제 해결`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`반응형 미디어 쿼리`}),`: 브레이크포인트를 파라미터로 받는 반응형 믹스인`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`트랜지션`}),`: 애니메이션 효과를 위한 트랜지션 믹스인`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`트랜스폼`}),`: 중앙 정렬 등 변형 효과를 위한 믹스인`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`그리드 레이아웃`}),`: CSS Grid를 사용한 레이아웃 믹스인`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`텍스트 말줄임표`}),`: 한 줄/여러 줄 말줄임표 처리`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 섹션에서는 `,(0,o.jsx)(`b`,{children:`상속과 확장(@extend)`}),`에 대해 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/06_scss_05.png`,alt:`실무에서 자주 사용하는 믹스인 예제`}),(0,o.jsx)(`figcaption`,{children:`실무에서 자주 사용하는 믹스인 예제`})]})]})}export{l as default,a as t};