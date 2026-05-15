import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`_partial.scss 개념`,description:`SCSS 파셜(Partial) 파일의 개념을 상세히 알아봅니다. 파셜이란 무엇인지, 언더스코어(_)의 의미, 파셜 파일의 특징, @import와 @use의 차이, 그리고 실제 사용 예시를 설명합니다.`,keyword:`scss partial, scss 파셜, scss _파일, scss 언더스코어, scss 모듈`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(`b`,{children:`파셜(Partial)`}),`은 SCSS에서`,` `,(0,o.jsx)(`b`,{children:`다른 파일에서 불러와 사용하는 파일`}),`입니다.`,(0,o.jsx)(`br`,{}),`파일명 앞에 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`_`}),`(언더스코어)를 붙이면 파셜이 되며, `,(0,o.jsx)(`b`,{children:`컴파일되지 않고 다른 파일에서만 사용`}),`됩니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 파셜의 기본 개념, 언더스코어의 의미, 파셜 파일의 특징, @import와 @use의 차이, 그리고 실제 사용 예시를 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`파셜(Partial)이란?`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`파셜은 `,(0,o.jsx)(`b`,{children:`"일부"`}),`라는 의미로,`,` `,(0,o.jsx)(`b`,{children:`다른 파일에서 불러와 사용하는 SCSS 파일`}),`입니다.`,(0,o.jsx)(`br`,{}),`언더스코어(`,(0,o.jsx)(`code`,{children:`_`}),`)로 시작하는 파일은 컴파일되지 않고 다른 파일에서만 사용되므로, `,(0,o.jsx)(`b`,{children:`변수·믹스인·컴포넌트를 모듈 단위로 분리`}),`해 재사용하고 관리하는 핵심 개념입니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 개념`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`파셜은`,` `,(0,o.jsxs)(`b`,{children:[`언더스코어(`,(0,o.jsx)(`code`,{className:`t_blue`,children:`_`}),`)로 시작`]}),`하는 파일로, `,(0,o.jsx)(`b`,{children:`독립적으로 컴파일되지 않고`}),` 다른 파일에서 불러와서 사용합니다.`]}),(0,o.jsx)(i,{title:`파셜 파일 예시`,language:`css`,className:`mt_m`,children:`// _variables.scss (파셜 파일)
$color-primary: #0a58ca;
$color-secondary: #6c757d;

// 이 파일은 컴파일되지 않음
// 다른 파일에서 불러와서 사용`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`파일을 불러올 때는 `,(0,o.jsx)(`b`,{children:`언더스코어를 생략`}),`합니다.`]}),(0,o.jsx)(i,{title:`메인 파일에서 사용`,language:`css`,className:`mt_ms`,children:`// main.scss (메인 파일)
@use "variables";  // _variables.scss 불러오기

.button-group {
  .button {
    background: variables.$color-primary;
  }
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`언더스코어(_)의 의미`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`파일명 앞에 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`_`}),`(언더스코어)를 붙이면`,` `,(0,o.jsx)(`b`,{children:`SCSS 컴파일러가 이 파일을 컴파일하지 않습니다`}),`.`]}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`파일명`}),(0,o.jsx)(`li`,{className:`cell content`,children:`컴파일 여부`}),(0,o.jsx)(`li`,{className:`cell content`,children:`용도`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value`,children:(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`_variables.scss`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`컴파일 여부`,children:`컴파일 안 됨`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`용도`,children:`다른 파일에서 불러와 사용`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value`,children:(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`variables.scss`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`컴파일 여부`,children:`컴파일됨`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`용도`,children:`독립적으로 컴파일되는 파일`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value`,children:(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`main.scss`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`컴파일 여부`,children:`컴파일됨`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`용도`,children:`최종 CSS로 컴파일되는 메인 파일`})]})]})]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`언더스코어를 붙이면`,` `,(0,o.jsx)(`b`,{children:`"이 파일은 다른 곳에서 불러와 쓰는 파일이다"`}),`라는 의미입니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`파셜 파일의 특징`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`파셜 파일은 다음과 같은 특징을 가집니다:`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`컴파일되지 않음`}),`: 언더스코어로 시작하는 파일은 CSS로 컴파일되지 않음`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`재사용 목적`}),`: 다른 파일에서 불러와서 사용하기 위한 파일`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`모듈화`}),`: 관련 있는 코드를 하나의 파일로 묶어서 관리`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`네이밍 규칙`}),`: 파일명 앞에 언더스코어(_)를 붙임`]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`파셜 파일 사용 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`파셜 파일을 `,(0,o.jsx)(`b`,{children:`실제로 어떻게 사용하는지`}),` 예시를 살펴봅니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`b`,{children:`파셜 생성`}),` → `,(0,o.jsx)(`b`,{children:`메인 파일에서 불러오기`}),` → `,(0,o.jsx)(`b`,{children:`컴파일 과정`}),`을 단계별로 따라가면,`,(0,o.jsx)(`b`,{children:`실무에서 변수·믹스인·컴포넌트를 어떻게 모듈화하는지`}),` 바로 적용할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 사용법`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`파셜 파일을 만들고 메인 파일에서 불러오는 기본 예시입니다.`}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`1단계: 파셜 파일 생성`}),(0,o.jsx)(i,{title:`_variables.scss`,language:`css`,className:`mt_ms`,children:`// _variables.scss
$color-primary: #0a58ca;
$color-secondary: #6c757d;
$spacing-md: 16px;`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`2단계: 메인 파일에서 불러오기`}),(0,o.jsx)(i,{title:`main.scss`,language:`css`,className:`mt_ms`,children:`/* main.scss */
@use "variables";

.button {
  background: variables.$color-primary;
  padding: variables.$spacing-md;
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`3단계: 컴파일 결과`}),(0,o.jsx)(i,{title:`main.css`,language:`css`,className:`mt_ms`,children:`.button {
  background: #0a58ca;
  padding: 16px;
}
/* _variables.scss는 컴파일되지 않음 */
/* main.scss만 컴파일됨 */`})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`여러 파셜 파일 사용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`메인 파일에서 `,(0,o.jsx)(`b`,{children:`여러 파셜 파일을 불러와 사용`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`여러 파셜 파일 사용`,language:`css`,className:`mt_m`,children:`// main.scss
@use "variables";  // _variables.scss
@use "mixins";      // _mixins.scss
@use "buttons";     // _buttons.scss
@use "cards";       // _cards.scss

// 각 파셜 파일의 변수와 믹스인 사용
.button {
  @include mixins.button-base;
  background: variables.$color-primary;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`각 파셜 파일의 내용이 메인 파일에 포함`}),`되어 하나의 CSS 파일로 컴파일됩니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`파셜 파일 네이밍 규칙`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`파셜 파일의 `,(0,o.jsx)(`b`,{children:`네이밍 규칙`}),`을 알아봅니다.`,(0,o.jsx)(`br`,{}),`언더스코어 필수, 불러올 때 생략 규칙 등을 정확히 이해해 두면,`,` `,(0,o.jsx)(`b`,{children:`팀 프로젝트에서 일관된 파일 구조를 유지`}),`하고 실수로 인한 컴파일 오류를 방지할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`언더스코어 필수`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`파셜 파일은`,` `,(0,o.jsxs)(`b`,{children:[`반드시 언더스코어(`,(0,o.jsx)(`code`,{className:`t_blue`,children:`_`}),`)로 시작`]}),`해야 합니다.`]}),(0,o.jsx)(i,{title:`파셜 파일 네이밍`,language:`css`,className:`mt_m`,children:`/* ✅ 올바른 파셜 파일명 */
_variables.scss
_mixins.scss
_buttons.scss

/* ❌ 잘못된 파셜 파일명 (컴파일됨) */
variables.scss
mixins.scss
buttons.scss`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`언더스코어가 없으면 `,(0,o.jsx)(`b`,{children:`독립적으로 컴파일`}),`되어 CSS 파일이 생성됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`불러올 때 언더스코어 생략`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`파셜 파일을 불러올 때는 `,(0,o.jsx)(`b`,{children:`언더스코어를 생략`}),`합니다.`]}),(0,o.jsx)(i,{title:`불러오기 예시`,language:`css`,className:`mt_m`,children:`/* 파일명: _variables.scss */
/* 불러올 때: @use "variables"; (언더스코어 생략) */

@use "variables";  /* _variables.scss 불러오기 */
@use "mixins";     /* _mixins.scss 불러오기 */
@use "buttons";    /* _buttons.scss 불러오기 */`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`SCSS 컴파일러가 `,(0,o.jsx)(`b`,{children:`자동으로 언더스코어를 찾아서`}),` 파일을 불러옵니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`네이밍 가이드`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`파셜 파일의 `,(0,o.jsx)(`b`,{children:`좋은 네이밍 예시`}),`를 살펴봅니다.`]}),(0,o.jsx)(i,{title:`좋은 네이밍 예시`,language:`css`,className:`mt_m`,children:`// 기능별 네이밍
_variables.scss    // 변수
_mixins.scss       // 믹스인
_buttons.scss      // 버튼 컴포넌트
_cards.scss        // 카드 컴포넌트

// 카테고리별 네이밍
_base.scss         // 기본 스타일
_layout.scss       // 레이아웃
_components.scss   // 컴포넌트
_utilities.scss    // 유틸리티`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`파일명만 봐도 `,(0,o.jsx)(`b`,{children:`무엇을 담고 있는지 알 수 있도록`}),` 명확하게 네이밍하는 것이 좋습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`파셜 파일의 역할`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`파셜 파일이 프로젝트에서 `,(0,o.jsx)(`b`,{children:`어떤 역할을 하는지`}),` 살펴봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`코드 모듈화`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`파셜 파일은 `,(0,o.jsx)(`b`,{children:`관련 있는 코드를 하나의 모듈로 묶어서`}),` 관리합니다.`]}),(0,o.jsx)(i,{title:`모듈화 예시`,language:`css`,className:`mt_m`,children:`// _variables.scss (변수 모듈)
$color-primary: #0a58ca;
$color-secondary: #6c757d;

// _mixins.scss (믹스인 모듈)
@mixin button-base { }
@mixin card-base { }

// _buttons.scss (버튼 모듈)
.button { }
.button-primary { }

// 각 모듈이 명확한 역할을 가짐`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`재사용성 향상`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`파셜 파일은 `,(0,o.jsx)(`b`,{children:`다른 프로젝트에서도 재사용`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`재사용 예시`,language:`css`,className:`mt_m`,children:`// 프로젝트 A에서 만든 _variables.scss
// 프로젝트 B에서도 사용 가능

// 프로젝트 B의 main.scss
@use "variables";  // 프로젝트 A의 변수 재사용

.button {
  background: variables.$color-primary;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`의존성 관리`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`파셜 파일을 사용하면 `,(0,o.jsx)(`b`,{children:`파일 간의 의존성을 명확하게`}),` 관리할 수 있습니다.`]}),(0,o.jsx)(i,{title:`의존성 관리 예시`,language:`css`,className:`mt_m`,children:`// main.scss
@use "variables";  // 변수 먼저 불러오기
@use "mixins";     // 믹스인 (변수 사용 가능)
@use "buttons";    // 버튼 (변수, 믹스인 사용 가능)

// 의존성 순서가 명확함
// variables → mixins → buttons`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsxs)(`h2`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_green`,children:`@import`}),` vs `,(0,o.jsx)(`i`,{className:`t_blue`,children:`@use`})]}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`파셜 파일을 불러오는 방법에는`,` `,(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`@import`}),`와`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`가 있습니다.`,(0,o.jsx)(`br`,{}),`각각의 차이와 사용법을 알아봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_green`,children:`@import`}),` (구식 방법)`]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`@import`}),`는 `,(0,o.jsx)(`b`,{children:`구식 방법`}),`이며, 여러 문제가 있습니다.`]}),(0,o.jsx)(i,{title:`@import 사용`,language:`css`,className:`mt_m`,children:`// @import 사용 (구식)
@import "variables";
@import "mixins";

.button {
  background: $color-primary;  // 네임스페이스 없이 사용
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`@import`}),`의 문제점:`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`전역 스코프`}),`: 모든 변수와 믹스인이 전역으로 노출됨`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`중복 로드`}),`: 같은 파일을 여러 번 불러올 수 있음`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`순서 의존성`}),`: 불러오는 순서가 중요함`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`네임스페이스 없음`}),`: 변수 이름 충돌 가능`]})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`@use`}),` (권장 방법)`]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`는 `,(0,o.jsx)(`b`,{children:`현대적인 방법`}),`이며, 여러 장점이 있습니다.`]}),(0,o.jsx)(i,{title:`@use 사용`,language:`css`,className:`mt_m`,children:`// @use 사용 (권장)
@use "variables";
@use "mixins";

.button {
  background: variables.$color-primary;  // 네임스페이스 사용
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`의 장점:`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_ms indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`네임스페이스`}),`: 변수 이름 충돌 방지`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`한 번만 로드`}),`: 같은 파일을 여러 번 불러와도 한 번만 로드`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`명확한 의존성`}),`: 파일 간 의존성이 명확함`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`순서 독립`}),`: 불러오는 순서가 중요하지 않음`]})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_darkgreen`,children:`@import`}),` vs`,` `,(0,o.jsx)(`i`,{className:`t_blue`,children:`@use`}),` 비교`]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`두 방법의 차이를 `,(0,o.jsx)(`b`,{children:`표로 비교`}),`해봅니다.`]}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`구분`}),(0,o.jsx)(`li`,{className:`cell content`,children:`@import`}),(0,o.jsx)(`li`,{className:`cell content`,children:`@use`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`네임스페이스`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@import`,children:`없음 (전역)`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@use`,children:`있음 (파일명)`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`중복 로드`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@import`,children:`가능 (여러 번 로드)`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@use`,children:`불가능 (한 번만 로드)`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`순서 의존성`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@import`,children:`중요함`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@use`,children:`중요하지 않음`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`권장 여부`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@import`,children:`권장하지 않음`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@use`,children:`권장`})]})]})]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`현재는`,` `,(0,o.jsxs)(`b`,{children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`를 사용하는 것을 권장`]}),`합니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`파셜 파일 구조 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`실제 프로젝트에서 `,(0,o.jsx)(`b`,{children:`파셜 파일을 어떻게 구성하는지`}),` 예시를 살펴봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 파셜 파일 구조`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`작은 프로젝트에서 사용하는 `,(0,o.jsx)(`b`,{children:`기본 파셜 파일 구조`}),`입니다.`]}),(0,o.jsx)(i,{title:`기본 파셜 구조`,language:`css`,className:`mt_m`,children:`// 프로젝트 구조
scss/
  ├─ _variables.scss    // 변수
  ├─ _mixins.scss       // 믹스인
  ├─ _buttons.scss      // 버튼
  ├─ _cards.scss        // 카드
  └─ main.scss          // 메인 파일`}),(0,o.jsx)(i,{title:`main.scss`,language:`css`,className:`mt_m`,children:`/* main.scss */
@use "variables";
@use "mixins";
@use "buttons";
@use "cards";`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`카테고리별 파셜 구조`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`카테고리별로 `,(0,o.jsx)(`b`,{children:`파셜 파일을 구성`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`카테고리별 구조`,language:`css`,className:`mt_m`,children:`// 프로젝트 구조
scss/
  ├─ base/
  │   ├─ _reset.scss
  │   └─ _typography.scss
  ├─ components/
  │   ├─ _buttons.scss
  │   ├─ _cards.scss
  │   └─ _forms.scss
  ├─ layout/
  │   ├─ _header.scss
  │   ├─ _footer.scss
  │   └─ _grid.scss
  ├─ _variables.scss
  ├─ _mixins.scss
  └─ main.scss`}),(0,o.jsx)(i,{title:`main.scss`,language:`css`,className:`mt_m`,children:`/* main.scss */
@use "variables";
@use "mixins";
@use "base/reset";
@use "base/typography";
@use "components/buttons";
@use "components/cards";
@use "layout/header";`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`b`,{className:`t_blue`,children:`_partial.scss`}),` 개념에 대해 알아본 내용을 정리합니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`파셜의 개념`}),`: 다른 파일에서 불러와 사용하는 파일, 언더스코어(_)로 시작`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`언더스코어의 의미`}),`: 컴파일되지 않고 다른 파일에서만 사용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`파셜의 특징`}),`: 컴파일 안 됨, 재사용 목적, 모듈화, 네이밍 규칙`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`네이밍 규칙`}),`: 언더스코어로 시작, 불러올 때는 언더스코어 생략`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`파셜의 역할`}),`: 코드 모듈화, 재사용성 향상, 의존성 관리`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`@import vs @use`}),`: `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`를 권장 (네임스페이스, 중복 방지, 명확한 의존성)`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`파일 구조`}),`: 기본 구조, 카테고리별 구조 예시`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`@use, @forward 기본 개념과 차이`}),`를 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/09_scss_02.png`,alt:`파셜(Partial) 개념`}),(0,o.jsx)(`figcaption`,{children:`파셜(Partial) 개념`})]})]})}export{l as default,a as t};