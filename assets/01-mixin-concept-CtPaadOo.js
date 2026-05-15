import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`믹스인의 개념과 역할`,description:`SCSS 믹스인(Mixin)의 기본 개념과 역할을 상세히 알아봅니다. 믹스인이 무엇인지, 왜 필요한지, 변수와 어떤 차이가 있는지, 실제 사용 예시를 통해 믹스인의 필요성을 설명합니다.`,keyword:`scss 믹스인, scss mixin, scss @mixin, scss @include, scss 재사용, scss 함수`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(`b`,{children:`믹스인(Mixin)`}),`은 SCSS에서`,` `,(0,o.jsx)(`b`,{children:`재사용 가능한 스타일 블록을 만드는 기능`}),`입니다.`,(0,o.jsx)(`br`,{}),`변수가 값을 재사용하는 것이라면, 믹스인은`,` `,(0,o.jsx)(`b`,{children:`여러 CSS 속성과 규칙을 묶어서 재사용`}),`할 수 있게 해줍니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 믹스인의 기본 개념, 변수와의 차이, 믹스인이 필요한 이유, 그리고 실제 사용 예시를 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`믹스인(Mixin)이란?`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`믹스인은 `,(0,o.jsx)(`b`,{children:`여러 CSS 속성을 묶어서 하나의 이름으로 저장`}),`하고, 필요할 때마다 불러와 사용할 수 있게 해주는 기능입니다.`,(0,o.jsx)(`br`,{}),`함수처럼 정의하고 호출하여 사용할 수 있으며, 반복되는 스타일 패턴을`,` `,(0,o.jsx)(`b`,{children:`안전하게 재사용하는 기본 단위`}),`가 됩니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`믹스인의 기본 개념`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`믹스인은 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@mixin`}),`으로 정의하고,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@include`}),`로 사용합니다.`]}),(0,o.jsx)(i,{title:`믹스인 기본 예시`,language:`css`,className:`mt_m`,children:`// 믹스인 정의
@mixin button-style {
  padding: 8px 16px;
  background: #0a58ca;
  color: #ffffff;
  border-radius: 4px;
}

// 믹스인 사용
.button {
  @include button-style;
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.button {
  padding: 8px 16px;
  background: #0a58ca;
  color: #ffffff;
  border-radius: 4px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`믹스인을 사용하면 `,(0,o.jsx)(`b`,{children:`여러 속성을 한 번에 재사용`}),`할 수 있어 코드 중복을 크게 줄일 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`변수와 믹스인의 차이`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`변수는 `,(0,o.jsx)(`b`,{children:`값 하나`}),`를 재사용하고,`,` `,(0,o.jsxs)(`mark`,{children:[`믹스인은 `,(0,o.jsx)(`b`,{children:`여러 속성의 묶음`}),`을 재사용합니다.`]})]}),(0,o.jsx)(i,{title:`변수 사용 (값만 재사용)`,language:`css`,className:`mt_m`,children:`// 변수: 값 하나만 재사용
$primary-color: #0a58ca;

.button {
  background: $primary-color;  // 값만 재사용
}`}),(0,o.jsx)(i,{title:`믹스인 사용 (여러 속성 재사용)`,language:`css`,className:`mt_m`,children:`// 믹스인: 여러 속성을 재사용
@mixin button-style {
  padding: 8px 16px;
  background: #0a58ca;
  border-radius: 4px;
}

.button {
  @include button-style;  // 여러 속성 재사용
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`변수는 `,(0,o.jsx)(`b`,{children:`단일 값`}),`을, 믹스인은 `,(0,o.jsx)(`b`,{children:`스타일 블록 전체`}),`를 재사용할 때 사용합니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`믹스인이 필요한 이유`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`믹스인을 사용하지 않을 때 발생하는 `,(0,o.jsx)(`b`,{children:`문제점`}),`과, 믹스인을 사용하면 해결되는 `,(0,o.jsx)(`b`,{children:`장점`}),`을 살펴봅니다.`,(0,o.jsx)(`br`,{}),`스타일이 점점 늘어날수록 코드 중복과 수정 범위가 함께 커지기 때문에, 어디까지를 믹스인으로 묶어야 `,(0,o.jsx)(`b`,{children:`유지보수와 협업에 유리한지`}),` 감을 잡는 것이 중요합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`코드 중복 문제`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`같은 스타일을 여러 곳에서 반복해서 작성해야 할 때,`,` `,(0,o.jsx)(`b`,{children:`코드가 중복`}),`됩니다.`]}),(0,o.jsx)(i,{title:`코드 중복 예시`,language:`css`,className:`mt_m`,children:`.button-primary {
  padding: 8px 16px;    // 중복
  background: #0a58ca;  // 색상만 다름
  color: #ffffff;       // 중복
  border-radius: 4px;   // 중복
  font-weight: 700;     // 중복
}

.button-secondary {
  padding: 8px 16px;    // 중복
  background: #6c757d;  // 색상만 다름
  color: #ffffff;       // 중복
  border-radius: 4px;   // 중복
  font-weight: 700;     // 중복
}

.button-success {
  padding: 8px 16px;    // 중복
  background: #28a745;  // 색상만 다름
  color: #ffffff;       // 중복
  border-radius: 4px;   // 중복
  font-weight: 700;     // 중복
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 작성하면 `,(0,o.jsx)(`b`,{children:`스타일을 변경할 때 여러 곳을 수정`}),`해야 하고, 실수로 일부만 수정할 위험이 있습니다.`]}),(0,o.jsx)(i,{title:`믹스인으로 해결`,language:`css`,className:`mt_ms`,children:`// 공통 스타일을 믹스인으로 정의
@mixin button-base {
  padding: 8px 16px;
  color: #ffffff;
  border-radius: 4px;
  font-weight: 700;
}

.button-primary {
  @include button-base;
  background: #0a58ca;
}

.button-secondary {
  @include button-base;
  background: #6c757d;
}

.button-success {
  @include button-base;
  background: #28a745;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`믹스인을 사용하면 `,(0,o.jsx)(`b`,{children:`공통 스타일을 한 곳에서 관리`}),`할 수 있어 유지보수가 훨씬 편해집니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`복잡한 스타일 패턴 재사용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`복잡한 스타일 패턴(예: flexbox 레이아웃, 그리드 레이아웃, 반응형 미디어 쿼리)을 `,(0,o.jsx)(`b`,{children:`여러 곳에서 사용`}),`할 때 믹스인이 유용합니다.`]}),(0,o.jsx)(i,{title:`복잡한 패턴 반복 예시`,language:`css`,className:`mt_m`,children:`// Flexbox 레이아웃을 여러 곳에서 사용
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;  // 같은 패턴 반복
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;  // 같은 패턴 반복
}`}),(0,o.jsx)(i,{title:`믹스인으로 정리`,language:`css`,className:`mt_m`,children:`// Flexbox 패턴을 믹스인으로 정의
@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.header {
  @include flex-between;
}

.navigation {
  @include flex-between;
}

.footer {
  @include flex-between;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`복잡한 패턴을 믹스인으로 정의하면 `,(0,o.jsx)(`b`,{children:`코드가 간결해지고 일관성`}),`이 유지됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`조건부 스타일 적용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`믹스인은 `,(0,o.jsx)(`b`,{children:`파라미터를 받아서 조건에 따라 다른 스타일을 적용`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`조건부 스타일 예시`,language:`css`,className:`mt_m`,children:`// 파라미터를 받는 믹스인
@mixin button($bg-color) {
  padding: 8px 16px;
  background-color: $bg-color;
  color: #ffffff;
  border-radius: 4px;
}

.button-primary {
  @include button(#0a58ca);
}

.button-success {
  @include button(#28a745);
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.button-primary {
  padding: 8px 16px;
  background-color: #0a58ca;  // 배경 색상이 다름
  color: #ffffff;
  border-radius: 4px;
}

.button-success {
  padding: 8px 16px;
  background-color: #28a745;  // 배경 색상이 다름
  color: #ffffff;
  border-radius: 4px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`파라미터를 사용하면 `,(0,o.jsx)(`b`,{children:`같은 패턴을 다양한 값으로 재사용`}),`할 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`믹스인의 역할`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`믹스인이 프로젝트에서 수행하는 `,(0,o.jsx)(`b`,{children:`주요 역할`}),`들을 정리합니다.`,(0,o.jsx)(`br`,{}),`코드 재사용, 일관성 유지, 디자인 시스템 구현 등에서 믹스인이 어떤 식으로 쓰이는지 한 번에 정리해 두면,`,` `,(0,o.jsx)(`b`,{children:`언제 믹스인을 떠올려야 할지`}),`가 선명해집니다.`]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`코드 재사용성 향상`}),(0,o.jsxs)(`dd`,{children:[`믹스인은 `,(0,o.jsx)(`b`,{children:`같은 스타일을 여러 곳에서 재사용`}),`할 수 있게 해줍니다.`]}),(0,o.jsxs)(`dd`,{children:[`공통 스타일을 믹스인으로 정의해 두면,`,` `,(0,o.jsx)(`b`,{children:`새로운 컴포넌트를 만들 때도 빠르게 적용`}),`할 수 있습니다.`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`일관성 유지`}),(0,o.jsxs)(`dd`,{children:[`믹스인을 사용하면 `,(0,o.jsx)(`b`,{children:`모든 곳에서 동일한 스타일 패턴을 사용`}),`할 수 있어 일관성이 유지됩니다.`]}),(0,o.jsxs)(`dd`,{children:[`예를 들어 버튼 스타일을 믹스인으로 정의하면,`,` `,(0,o.jsx)(`b`,{children:`모든 버튼이 같은 패딩, 테두리 반경, 폰트 굵기를 사용`}),`하게 됩니다.`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`유지보수성 향상`}),(0,o.jsxs)(`dd`,{children:[`스타일을 변경할 때 `,(0,o.jsx)(`b`,{children:`믹스인 정의 부분만 수정`}),`하면 모든 곳에 자동으로 반영됩니다.`]}),(0,o.jsxs)(`dd`,{children:[`예를 들어 버튼 패딩을 변경하려면 믹스인 한 곳만 수정하면 되므로,`,` `,(0,o.jsx)(`b`,{children:`수정 시간이 크게 단축`}),`되고 실수도 줄어듭니다.`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`코드 가독성 향상`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsxs)(`p`,{children:[`복잡한 스타일을 믹스인으로 묶으면,`,` `,(0,o.jsx)(`b`,{children:`코드의 의도가 명확하게 드러나`}),` 가독성이 향상됩니다.`]}),(0,o.jsx)(i,{title:`가독성 향상 예시`,language:`css`,className:`mt_s`,children:`// 복잡한 스타일이 믹스인 이름으로 명확해짐
.card {
  @include flex-center;
  @include card-shadow;
  @include responsive-padding;
}`}),(0,o.jsxs)(`p`,{className:`mt_s`,children:[`이렇게 작성하면 `,(0,o.jsx)(`b`,{children:`무엇을 하는 코드인지 바로 이해`}),`할 수 있습니다.`]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`믹스인 사용 시나리오`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`실제 프로젝트에서 `,(0,o.jsx)(`b`,{children:`믹스인을 사용하면 좋은 상황`}),`들을 예시로 살펴봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`버튼 스타일 통일`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 종류의 버튼이 있지만 `,(0,o.jsx)(`b`,{children:`기본 스타일은 동일`}),`한 경우입니다.`]}),(0,o.jsx)(i,{title:`버튼 스타일 통일 예시`,language:`css`,className:`mt_m`,children:`@mixin button-base {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
}

.button-primary {
  @include button-base;
  background: #0a58ca;
  color: #ffffff;
}

.button-outline {
  @include button-base;
  background: transparent;
  border: 2px solid #0a58ca;
  color: #0a58ca;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`반응형 미디어 쿼리`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`같은 브레이크포인트를 `,(0,o.jsx)(`b`,{children:`여러 곳에서 사용`}),`하는 경우입니다.`]}),(0,o.jsx)(i,{title:`반응형 미디어 쿼리 예시`,language:`css`,className:`mt_m`,children:`@mixin tablet {
  @media (min-width: 768px) {
    @content;
  }
}

.container {
  width: 100%;

  @include tablet {
    max-width: 720px;
  }
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`벤더 프리픽스`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 브라우저를 지원하기 위해 `,(0,o.jsx)(`b`,{children:`벤더 프리픽스를 반복해서 사용`}),`하는 경우입니다.`]}),(0,o.jsx)(i,{title:`벤더 프리픽스 예시`,language:`css`,className:`mt_m`,children:`@mixin transform($value) {
  -webkit-transform: $value;
  -moz-transform: $value;
  -ms-transform: $value;
  transform: $value;
}

.element {
  @include transform(rotate(45deg));
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.element {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`믹스인의 개념과 역할에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`믹스인의 개념`}),`: 여러 CSS 속성을 묶어서 재사용할 수 있게 해주는 기능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`변수와의 차이`}),`: 변수는 값 하나, 믹스인은 여러 속성의 묶음`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`필요한 이유`}),`: 코드 중복 해결, 복잡한 패턴 재사용, 조건부 스타일 적용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`주요 역할`}),`: 코드 재사용성 향상, 일관성 유지, 유지보수성 향상, 가독성 향상`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`사용 시나리오`}),`: 버튼 스타일 통일, 반응형 미디어 쿼리, 벤더 프리픽스 등`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`@mixin과 @include의 기본 문법`}),`을 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/06_scss_01.png`,alt:`믹스인의 개념과 역할`}),(0,o.jsx)(`figcaption`,{children:`믹스인의 개념과 역할`})]})]})}export{l as default,a as t};