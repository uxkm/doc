import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`SCSS의 기본 내장 함수`,description:`SCSS의 기본 내장 함수를 상세히 알아봅니다. 색상 함수(lighten, darken, mix, rgba), 숫자 함수(round, ceil, floor), 문자열 함수, 리스트 함수 등을 예시와 함께 설명합니다.`,keyword:`scss 함수, scss 내장 함수, scss lighten, scss darken, scss mix, scss 색상 함수, scss 숫자 함수`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`SCSS는 `,(0,o.jsx)(`b`,{children:`다양한 내장 함수`}),`를 제공합니다.`,(0,o.jsx)(`br`,{}),`색상 조작, 숫자 계산, 문자열 처리 등`,` `,(0,o.jsx)(`b`,{children:`자주 사용하는 작업을 함수로 쉽게 처리`}),`할 수 있어, 코드 작성 효율이 크게 향상됩니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 SCSS의 주요 내장 함수들을 카테고리별로 나누어 상세히 알아보고, 각 함수의 사용법과 실제 활용 예시를 제공합니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`SCSS 내장 함수란?`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`SCSS 내장 함수는 `,(0,o.jsx)(`b`,{children:`컴파일 시점에 실행되는 함수`}),`입니다.`,(0,o.jsx)(`br`,{}),`색상 조작, 숫자 계산, 문자열 처리 등 다양한 작업을 수행할 수 있습니다. 반복해서 등장하는 계산을 함수로 맡기면,`,` `,(0,o.jsx)(`b`,{children:`스타일을 더 적은 코드로, 더 일관되게`}),` 관리할 수 있습니다.`,(0,o.jsx)(`br`,{}),`SCSS 함수는 `,(0,o.jsx)(`b`,{children:`함수명(인자)`}),` 형태로 사용합니다.`]}),(0,o.jsx)(i,{title:`함수 사용 예시`,language:`css`,className:`mt_m`,children:`$primary-color: #0a58ca;

.button {
  // lighten 함수 사용
  background: lighten($primary-color, 10%);
}`}),(0,o.jsx)(i,{title:`컴파일 후 CSS`,language:`css`,className:`mt_m`,children:`/* #0a58ca 색상을 10% 밝게 조정한 결과(#136ef3)가 적용됩니다. */
.button {
  background: #136ef3;
}`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`함수는 `,(0,o.jsx)(`b`,{children:`컴파일 시점에 계산`}),`되어 최종 CSS에는 결과값만 들어갑니다.`]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`색상 함수`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`색상을 조작하는 `,(0,o.jsx)(`b`,{children:`가장 많이 사용되는 함수들`}),`을 알아봅니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`code`,{children:`hover·active`}),` 상태나 다크 모드 색상을 일일이 손으로 계산하는 대신, `,(0,o.jsx)(`b`,{children:`함수를 이용해 규칙적으로 생성`}),`하는 방법을 익히는 것이 목표입니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`lighten()`}),` - 색상을 밝게`]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`lighten()`}),` 함수는`,` `,(0,o.jsx)(`b`,{children:`색상을 지정한 비율만큼 밝게`}),` 만듭니다.`]}),(0,o.jsx)(i,{title:`lighten() 예시`,language:`css`,className:`mt_m`,children:`$primary-color: #0a58ca;

.button {
  background: $primary-color;
  // 10% 더 밝게
  &:hover {
    background: lighten($primary-color, 10%);
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.button {
  background: #0a58ca;
}
.button:hover {
  background: #3d7dd8;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`lighten()`}),`은`,` `,(0,o.jsx)(`b`,{children:`호버 상태나 활성 상태의 색상을 자동으로 생성`}),`할 때 유용합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`darken()`}),` - 색상을 어둡게`]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`darken()`}),` 함수는`,` `,(0,o.jsx)(`b`,{children:`색상을 지정한 비율만큼 어둡게`}),` 만듭니다.`]}),(0,o.jsx)(i,{title:`darken() 예시`,language:`css`,className:`mt_m`,children:`$primary-color: #0a58ca;

.button {
  background: $primary-color;
  // 10% 더 어둡게
  &:active {
    background: darken($primary-color, 10%);
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.button {
  background: #0a58ca;
}
.button:active {
  background: #0844a0;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`darken()`}),`은`,` `,(0,o.jsx)(`b`,{children:`활성 상태나 강조된 요소의 색상을 자동으로 생성`}),`할 때 유용합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`mix()`}),` - 두 색상 섞기`]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`mix()`}),` 함수는`,` `,(0,o.jsx)(`b`,{children:`두 색상을 지정한 비율로 섞습니다`}),`.`]}),(0,o.jsx)(i,{title:`mix() 예시`,language:`css`,className:`mt_m`,children:`$color-primary: #0a58ca;
$color-white: #ffffff;

.button {
  // 80% primary, 20% white
  background: mix($color-primary, $color-white, 80%);
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.button {
  background: #2d6fd4;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`mix()`}),`는`,` `,(0,o.jsx)(`b`,{children:`색상의 투명도나 밝기를 조절`}),`할 때 유용합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`rgba()`}),` - 투명도 조절`]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`SCSS의 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`rgba()`}),` 함수는`,` `,(0,o.jsx)(`b`,{children:`색상에 투명도를 추가`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`rgba() 예시`,language:`css`,className:`mt_m`,children:`$primary-color: #0a58ca;

.overlay {
  background: rgba($primary-color, 0.5);  // 50% 투명도
}

.text {
  color: rgba($primary-color, 0.8);  // 80% 불투명도
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.overlay {
  background: rgba(10, 88, 202, 0.5);
}

.text {
  color: rgba(10, 88, 202, 0.8);
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`SCSS의 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`rgba()`}),` 함수는`,` `,(0,o.jsx)(`b`,{children:`색상 변수를 직접 사용`}),`하여 투명도를 조절할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기타 색상 함수`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`다른 유용한 색상 함수들도 있습니다.`}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`함수`}),(0,o.jsx)(`li`,{className:`cell content`,children:`설명`}),(0,o.jsx)(`li`,{className:`cell content`,children:`예시`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value`,children:(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`saturate()`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`설명`,children:`색상의 채도를 높임`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`예시`,children:(0,o.jsx)(`code`,{children:`saturate($color, 20%)`})})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value`,children:(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`desaturate()`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`설명`,children:`색상의 채도를 낮춤`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`예시`,children:(0,o.jsx)(`code`,{children:`desaturate($color, 20%)`})})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value`,children:(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`adjust-hue()`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`설명`,children:`색상의 색조를 조절`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`예시`,children:(0,o.jsx)(`code`,{children:`adjust-hue($color, 30deg)`})})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value`,children:(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`complement()`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`설명`,children:`보색(complementary color) 반환`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`예시`,children:(0,o.jsx)(`code`,{children:`complement($color)`})})]})]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`숫자 함수`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`숫자를 처리하는 `,(0,o.jsx)(`b`,{children:`유용한 함수들`}),`을 알아봅니다.`,(0,o.jsx)(`br`,{}),`폰트 크기, 간격, 비율 계산처럼 스타일 곳곳에서 사용하는 숫자들을`,` `,(0,o.jsx)(`b`,{children:`반올림·올림·내림·퍼센트 변환`}),`으로 정리하면, 보다 자연스러운 값들을 만들 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`round()`}),` - 반올림`]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`round()`}),` 함수는`,` `,(0,o.jsx)(`b`,{children:`숫자를 가장 가까운 정수로 반올림`}),`합니다.`]}),(0,o.jsx)(i,{title:`round() 예시`,language:`css`,className:`mt_m`,children:`$base-size: 16px;

.text {
  font-size: round($base-size * 1.5);  // 24px
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.text {
  font-size: 24px;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`ceil()`}),` - 올림`]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`ceil()`}),` 함수는 `,(0,o.jsx)(`b`,{children:`숫자를 올림`}),`합니다.`]}),(0,o.jsx)(i,{title:`ceil() 예시`,language:`css`,className:`mt_m`,children:`$base-size: 16px;

.text {
  font-size: ceil($base-size * 1.3);  // 21px (20.8px 올림)
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.text {
  font-size: 21px;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`floor()`}),` - 내림`]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`floor()`}),` 함수는 `,(0,o.jsx)(`b`,{children:`숫자를 내림`}),`합니다.`]}),(0,o.jsx)(i,{title:`floor() 예시`,language:`css`,className:`mt_m`,children:`$base-size: 16px;

.text {
  font-size: floor($base-size * 1.3);  // 20px (20.8px 내림)
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.text {
  font-size: 20px;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`percentage()`}),` - 퍼센트 변환`]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`percentage()`}),` 함수는`,` `,(0,o.jsx)(`b`,{children:`소수를 퍼센트로 변환`}),`합니다.`]}),(0,o.jsx)(i,{title:`percentage() 예시`,language:`css`,className:`mt_m`,children:`$ratio: 0.5;

.container {
  width: percentage($ratio);  // 50%
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.container {
  width: 50%;
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`문자열 함수`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`문자열을 처리하는 `,(0,o.jsx)(`b`,{children:`유용한 함수들`}),`을 알아봅니다.`,(0,o.jsx)(`br`,{}),`아이콘 폰트, 데이터 속성, content 값처럼 문자열을 많이 다루는 경우,`,` `,(0,o.jsx)(`b`,{children:`따옴표 추가·제거나 대소문자 변환`}),`을 함수로 처리하면 실수를 줄일 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`quote()`}),` /`,` `,(0,o.jsx)(`i`,{className:`t_blue`,children:`unquote()`})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`quote()`}),`는 문자열에 따옴표를 추가하고, `,(0,o.jsx)(`code`,{className:`t_blue`,children:`unquote()`}),`는 따옴표를 제거합니다.`]}),(0,o.jsx)(i,{title:`quote/unquote 예시`,language:`css`,className:`mt_m`,children:`$font-family: Arial;

.text {
  font-family: quote($font-family);  // "Arial"
  font-family: unquote("Arial");    // Arial
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.text {
  font-family: "Arial";
  font-family: Arial;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`to-upper-case()`}),` /`,` `,(0,o.jsx)(`i`,{className:`t_blue`,children:`to-lower-case()`})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`문자열을 대문자(`,(0,o.jsx)(`code`,{className:`t_blue`,children:`to-upper-case()`}),`)나 소문자(`,(0,o.jsx)(`code`,{className:`t_blue`,children:`to-lower-case()`}),`)로 변환합니다.`]}),(0,o.jsx)(i,{title:`대소문자 변환 예시`,language:`css`,className:`mt_m`,children:`$text: "Hello";

.text::before {
  content: to-upper-case($text);  // "HELLO"
}
.text::before {
  content: to-lower-case($text);  // "hello"
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.text::before {
  content: "HELLO";
}
.text::before {
  content: "hello";
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`리스트 함수`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`리스트(배열)를 처리하는 `,(0,o.jsx)(`b`,{children:`함수들`}),`을 알아봅니다.`,(0,o.jsx)(`br`,{}),`여러 개의 간격·색상·브레이크포인트를 리스트로 관리하면,`,` `,(0,o.jsx)(`b`,{children:`반복문과 함께 사용`}),`하여 유틸리티 클래스를 자동 생성하기 쉬워집니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`length()`}),` - 리스트 길이`]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`length()`}),` 함수는`,` `,(0,o.jsx)(`b`,{children:`리스트의 항목 개수를 반환`}),`합니다.`]}),(0,o.jsx)(i,{title:`length() 예시`,language:`css`,className:`mt_m`,children:`$spacings: 8px, 16px, 24px, 32px;

// 리스트 길이: 4
$count: length($spacings);`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`nth()`}),` - n번째 항목 가져오기`]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`nth()`}),` 함수는`,` `,(0,o.jsx)(`b`,{children:`리스트의 n번째 항목을 반환`}),`합니다.`]}),(0,o.jsx)(i,{title:`nth() 예시`,language:`css`,className:`mt_m`,children:`$spacings: 8px, 16px, 24px, 32px;

.card {
  padding: nth($spacings, 2);  // 16px (두 번째 항목)
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.card {
  padding: 16px;
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실제 활용 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`내장 함수를 `,(0,o.jsx)(`b`,{children:`실제 프로젝트에서 활용`}),`하는 예시를 살펴봅니다.`,(0,o.jsx)(`br`,{}),`버튼 상태 색상, 카드 그림자 등 구체적인 컴포넌트를 통해, 함수가`,` `,(0,o.jsx)(`b`,{children:`디자인 토큰과 컴포넌트 스타일을 연결`}),`하는 모습까지 함께 보게 됩니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`버튼 상태 색상 자동 생성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`기본 색상에서 `,(0,o.jsx)(`b`,{children:`함수를 사용하여 상태별 색상을 자동 생성`}),`합니다.`]}),(0,o.jsx)(i,{title:`상태 색상 자동 생성`,language:`css`,className:`mt_m`,children:`$color-primary: #0a58ca;

.button {
  background: $color-primary;

  &:hover {
    background: lighten($color-primary, 10%);
  }

  &:active {
    background: darken($color-primary, 10%);
  }

  &:disabled {
    background: desaturate($color-primary, 50%);
    opacity: 0.5;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.button {
  background: #0a58ca;
}
.button:hover {
  background: #3d7dd8;
}
.button:active {
  background: #0844a0;
}
.button:disabled {
  background: #4d6a8a;
  opacity: 0.5;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면`,` `,(0,o.jsx)(`b`,{children:`기본 색상만 변경하면 모든 상태 색상이 자동으로 조정`}),`됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`그림자 색상 생성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`배경 색상에 맞춰 `,(0,o.jsx)(`b`,{children:`그림자 색상을 자동으로 생성`}),`합니다.`]}),(0,o.jsx)(i,{title:`그림자 색상 생성`,language:`css`,className:`mt_m`,children:`$bg-color: #ffffff;

.card {
  background: $bg-color;
  box-shadow: 0 4px 6px rgba(darken($bg-color, 50%), 0.1);
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.card {
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(128, 128, 128, 0.1);
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`함수 조합(중첩) 사용`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`여러 함수를 `,(0,o.jsx)(`b`,{children:`조합(중첩)하여 사용`}),`하는 예시를 살펴봅니다.`,(0,o.jsx)(`br`,{}),`lighten, rgba 등 여러 함수를 한 줄에서 함께 사용하면,`,` `,(0,o.jsx)(`b`,{children:`디자인 시안에 가까운 미묘한 효과`}),`도 코드로 깔끔하게 표현할 수 있습니다.`]}),(0,o.jsx)(i,{title:`함수 중첩 예시`,language:`css`,className:`mt_m`,children:`$primary-color: #0a58ca;

.button {
  // lighten과 rgba를 조합
  background: rgba(lighten($primary-color, 20%), 0.8);
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.button {
  background: rgba(70, 130, 230, 0.8);
}`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`SCSS 기본 내장 함수에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`색상 함수`}),`: `,(0,o.jsx)(`code`,{children:`lighten()`}),`, `,(0,o.jsx)(`code`,{children:`darken()`}),`,`,` `,(0,o.jsx)(`code`,{children:`mix()`}),`, `,(0,o.jsx)(`code`,{children:`rgba()`}),` 등으로 색상 조작`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`숫자 함수`}),`: `,(0,o.jsx)(`code`,{children:`round()`}),`, `,(0,o.jsx)(`code`,{children:`ceil()`}),`,`,` `,(0,o.jsx)(`code`,{children:`floor()`}),`, `,(0,o.jsx)(`code`,{children:`percentage()`}),` 등으로 숫자 처리`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`문자열 함수`}),`: `,(0,o.jsx)(`code`,{children:`quote()`}),`, `,(0,o.jsx)(`code`,{children:`unquote()`}),`,`,` `,(0,o.jsx)(`code`,{children:`to-upper-case()`}),` 등으로 문자열 처리`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`리스트 함수`}),`: `,(0,o.jsx)(`code`,{children:`length()`}),`, `,(0,o.jsx)(`code`,{children:`nth()`}),` 등으로 리스트 처리`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`활용 예시`}),`: 버튼 상태 색상 자동 생성, 그림자 색상 생성 등`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`함수 조합`}),`: 여러 함수를 중첩하여 사용 가능`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`연산과 함수를 활용한 스타일 관리 예제`}),`를 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/05_scss_03.png`,alt:`SCSS 기본 내장 함수`}),(0,o.jsx)(`figcaption`,{children:`SCSS 기본 내장 함수`})]})]})}export{l as default,a as t};