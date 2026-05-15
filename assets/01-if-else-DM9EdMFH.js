import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`@if, @else 조건문 이해하기`,description:`SCSS 조건문(@if, @else, @else if)을 상세히 알아봅니다. 조건문의 기본 개념, 문법, 다양한 사용 예시, 믹스인과 함께 사용하는 방법, 그리고 초급자가 이해하기 쉬운 예제 중심으로 설명합니다.`,keyword:`scss 조건문, scss @if, scss @else, scss 조건, scss if else, scss 제어문`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(`b`,{children:`조건문`}),`은 SCSS에서 `,(0,o.jsx)(`b`,{children:`조건에 따라 다른 스타일을 적용`}),`할 수 있게 해주는 기능입니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`code`,{className:`t_blue`,children:`@if`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@else`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@else if`}),`를 사용하여`,` `,(0,o.jsx)(`b`,{children:`상황에 맞는 스타일을 동적으로 생성`}),`할 수 있습니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 조건문의 기본 개념, 문법, 다양한 사용 예시, 믹스인과 함께 사용하는 방법을 초급자가 이해하기 쉬운 예제 중심으로 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`조건문이란?`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`조건문은 `,(0,o.jsx)(`b`,{children:`"만약 ~라면"`}),`이라는 조건에 따라 다른 코드를 실행하는 기능입니다.`,(0,o.jsx)(`br`,{}),`SCSS에서 조건문을 사용하면 `,(0,o.jsx)(`b`,{children:`상황에 따라 다른 스타일을 적용`}),`할 수 있고, 테마나 상태에 따라 스타일을 분기하는 등`,` `,(0,o.jsx)(`b`,{children:`유연한 디자인 구현`}),`이 가능해집니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`조건문의 기본 개념`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`일상 생활에서도 조건문을 사용합니다:`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsx)(`li`,{children:(0,o.jsx)(`b`,{children:`"만약 비가 오면 우산을 가져가고, 그렇지 않으면 가져가지 않는다"`})}),(0,o.jsx)(`li`,{children:(0,o.jsx)(`b`,{children:`"만약 점수가 90점 이상이면 A, 80점 이상이면 B, 그렇지 않으면 C"`})})]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`SCSS 조건문도 같은 원리입니다.`,` `,(0,o.jsx)(`b`,{children:`조건을 확인하고 그에 맞는 스타일을 적용`}),`합니다.`]}),(0,o.jsx)(i,{title:`조건문 기본 예시`,language:`css`,className:`mt_m`,children:`// 만약 $theme가 'dark'라면 어두운 배경 사용
$theme: 'dark';

@if $theme == 'dark' {
  body {
    background: #000000;
    color: #ffffff;
  }
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`조건문이 필요한 이유`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`조건문을 사용하면 `,(0,o.jsx)(`b`,{children:`하나의 믹스인이나 함수로 여러 상황을 처리`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`조건문 없이 작성`,language:`css`,className:`mt_m`,children:`// 조건문 없이 여러 믹스인을 만들어야 함
@mixin button-primary {
  background: #0a58ca;
  color: #ffffff;
}

@mixin button-secondary {
  background: #6c757d;
  color: #ffffff;
}

@mixin button-success {
  background: #28a745;
  color: #ffffff;
}

// 각각 따로 사용해야 함
.button-primary {
  @include button-primary;
}`}),(0,o.jsx)(i,{title:`조건문 사용`,language:`css`,className:`mt_m`,children:`// 조건문으로 하나의 믹스인으로 처리
@mixin button($type) {
  @if $type == 'primary' {
    background: #0a58ca;
  } @else if $type == 'secondary' {
    background: #6c757d;
  } @else if $type == 'success' {
    background: #28a745;
  }

  color: #ffffff;
}

.button-primary {
  @include button('primary');
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`조건문을 사용하면 `,(0,o.jsx)(`b`,{children:`하나의 믹스인으로 여러 상황을 처리`}),`할 수 있어 코드가 훨씬 간결해집니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`@if 기본 문법`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@if`}),`는 `,(0,o.jsx)(`b`,{children:`가장 기본적인 조건문`}),`입니다.`,(0,o.jsx)(`br`,{}),`조건을 어떻게 작성하고, 어떤 블록이 실행되는지 이해해 두면 이후`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@else`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@else if`}),`를 조합할 때도`,` `,(0,o.jsx)(`b`,{children:`예측 가능한 스타일 분기`}),`를 만들 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 구조`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@if`}),` 뒤에 조건을 쓰고, 중괄호 안에 실행할 코드를 작성합니다.`]}),(0,o.jsx)(i,{title:`@if 기본 구조`,language:`css`,className:`mt_m`,children:`@if 조건 {
  // 조건이 참일 때 실행할 코드
}`}),(0,o.jsx)(i,{title:`실제 예시`,language:`css`,className:`mt_m`,children:`$is-dark: true;

@if $is-dark {
  body {
    background: #000000;
    color: #ffffff;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`$is-dark`}),`가`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`true`}),`이면 중괄호 안의 코드가 실행됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`비교 연산자`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`조건문에서 사용할 수 있는 `,(0,o.jsx)(`b`,{children:`비교 연산자`}),`들입니다.`]}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`연산자`}),(0,o.jsx)(`li`,{className:`cell content`,children:`의미`}),(0,o.jsx)(`li`,{className:`cell content`,children:`예시`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value`,children:(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`==`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`의미`,children:`같다`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`예시`,children:(0,o.jsx)(`code`,{children:`$color == 'red'`})})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value`,children:(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`!=`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`의미`,children:`다르다`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`예시`,children:(0,o.jsx)(`code`,{children:`$color != 'red'`})})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value`,children:(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`>`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`의미`,children:`보다 크다`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`예시`,children:(0,o.jsx)(`code`,{children:`$size > 10`})})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value`,children:(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`<`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`의미`,children:`보다 작다`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`예시`,children:(0,o.jsx)(`code`,{children:`$size < 10`})})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value`,children:(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`>=`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`의미`,children:`보다 크거나 같다`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`예시`,children:(0,o.jsx)(`code`,{children:`$size >= 10`})})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value`,children:(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`<=`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`의미`,children:`보다 작거나 같다`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`예시`,children:(0,o.jsx)(`code`,{children:`$size <= 10`})})]})]})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`간단한 예시`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`조건문을 사용한 `,(0,o.jsx)(`b`,{children:`간단한 예시`}),`를 살펴봅니다.`]}),(0,o.jsx)(i,{title:`간단한 조건문 예시`,language:`css`,className:`mt_m`,children:`$theme: 'dark';

@if $theme == 'dark' {
  body {
    background: #000000;
    color: #ffffff;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`body {
  background: #000000;
  color: #ffffff;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`$theme`}),`가`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`'dark'`}),`이므로 조건이 참이 되어 스타일이 적용됩니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`@else 사용하기`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@else`}),`는 `,(0,o.jsx)(`b`,{children:`조건이 거짓일 때 실행`}),`할 코드를 작성합니다.`,(0,o.jsx)(`br`,{}),`다크/라이트 테마처럼 두 가지 경우를 나누는 상황에서, @else를 함께 사용하면 `,(0,o.jsx)(`b`,{children:`모든 경우를 빠짐없이 처리`}),`할 수 있어 스타일 누락을 방지할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`@else 기본 구조`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@if`}),` 뒤에`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@else`}),`를 추가하여 두 가지 경우를 처리할 수 있습니다.`]}),(0,o.jsx)(i,{title:`@else 기본 구조`,language:`css`,className:`mt_m`,children:`@if 조건 {
  // 조건이 참일 때
} @else {
  // 조건이 거짓일 때
}`}),(0,o.jsx)(i,{title:`실제 예시`,language:`css`,className:`mt_m`,children:`$theme: 'light';

@if $theme == 'dark' {
  body {
    background: #000000;
    color: #ffffff;
  }
} @else {
  body {
    background: #ffffff;
    color: #000000;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`body {
  background: #ffffff;
  color: #000000;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`$theme`}),`가`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`'dark'`}),`가 아니므로`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@else`}),` 블록이 실행됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`실제 활용 예시`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@else`}),`를 사용한 `,(0,o.jsx)(`b`,{children:`실제 활용 예시`}),`를 살펴봅니다.`]}),(0,o.jsx)(i,{title:`버튼 크기 예시`,language:`css`,className:`mt_m`,children:`@mixin button($size) {
  @if $size == 'large' {
    padding: 12px 24px;
    font-size: 18px;
  } @else {
    padding: 8px 16px;
    font-size: 16px;
  }
}

.button-large {
  @include button('large');
}

.button-normal {
  @include button('normal');
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`크기에 따라 다른 패딩과 폰트 크기`}),`를 적용할 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`@else if 사용하기`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@else if`}),`는`,` `,(0,o.jsx)(`b`,{children:`여러 조건을 순차적으로 확인`}),`할 때 사용합니다.`,(0,o.jsx)(`br`,{}),`등급, 상태, 크기처럼 경우의 수가 셋 이상인 상황에서,`,` `,(0,o.jsx)(`b`,{children:`조건 순서와 범위를 잘 설계`}),`하면 유지보수가 쉬운 분기 구조를 만들 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`@else if 기본 구조`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@if`}),`와`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@else`}),` 사이에`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@else if`}),`를 추가하여 여러 조건을 확인할 수 있습니다.`]}),(0,o.jsx)(i,{title:`@else if 기본 구조`,language:`css`,className:`mt_m`,children:`@if 조건1 {
  // 조건1이 참일 때
} @else if 조건2 {
  // 조건2가 참일 때
} @else {
  // 모든 조건이 거짓일 때
}`}),(0,o.jsx)(i,{title:`실제 예시`,language:`css`,className:`mt_m`,children:`$size: 'medium';

@if $size == 'small' {
  .container {
    padding: 8px;
  }
} @else if $size == 'medium' {
  .container {
    padding: 16px;
  }
} @else if $size == 'large' {
  .container {
    padding: 24px;
  }
} @else {
  .container {
    padding: 16px;  // 기본값
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.container {
  padding: 16px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`$size`}),`가`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`'medium'`}),`이므로 두 번째 조건이 참이 되어 해당 스타일이 적용됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`여러 조건 확인 예시`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@else if`}),`를 여러 번 사용하여`,` `,(0,o.jsx)(`b`,{children:`여러 조건을 확인`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`여러 조건 예시`,language:`css`,className:`mt_m`,children:`@mixin button($type) {
  @if $type == 'primary' {
    background: #0a58ca;
    color: #ffffff;
  } @else if $type == 'secondary' {
    background: #6c757d;
    color: #ffffff;
  } @else if $type == 'success' {
    background: #28a745;
    color: #ffffff;
  } @else if $type == 'danger' {
    background: #dc3545;
    color: #ffffff;
  } @else {
    background: #f8f9fa;
    color: #212529;
  }
}

.button-primary {
  @include button('primary');
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.button-primary {
  background: #0a58ca;
  color: #ffffff;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`버튼 타입에 따라 다른 색상`}),`을 적용할 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`논리 연산자 사용`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`b`,{children:`논리 연산자`}),`를 사용하여 더 복잡한 조건을 만들 수 있습니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`code`,{className:`t_blue`,children:`and`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`or`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`not`}),` 같은 연산자를 이해해 두면,`,` `,(0,o.jsx)(`b`,{children:`디자인 시스템의 다양한 상태 조합`}),`을 깔끔하게 표현할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`and 연산자`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`and`}),`는 `,(0,o.jsx)(`b`,{children:`모든 조건이 참일 때`}),`만 실행합니다.`]}),(0,o.jsx)(i,{title:`and 연산자 예시`,language:`css`,className:`mt_m`,children:`$theme: 'dark';
$size: 'large';

@if $theme == 'dark' and $size == 'large' {
  body {
    background: #000000;
    font-size: 18px;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`$theme`}),`가`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`'dark'`}),`이고`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`$size`}),`가`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`'large'`}),`일 때만 실행됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`or 연산자`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`or`}),`는 `,(0,o.jsx)(`b`,{children:`하나라도 조건이 참이면`}),` `,`실행합니다.`]}),(0,o.jsx)(i,{title:`or 연산자 예시`,language:`css`,className:`mt_m`,children:`$device: 'mobile';

@if $device == 'mobile' or $device == 'tablet' {
  .container {
    width: 100%;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`$device`}),`가`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`'mobile'`}),`이거나`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`'tablet'`}),`이면 실행됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`not 연산자`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`not`}),`은 `,(0,o.jsx)(`b`,{children:`조건을 반대로`}),` 만듭니다.`]}),(0,o.jsx)(i,{title:`not 연산자 예시`,language:`css`,className:`mt_m`,children:`$is-mobile: false;

@if not $is-mobile {
  .container {
    max-width: 1200px;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`$is-mobile`}),`가`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`false`}),`이면 (즉, 모바일이 아니면) 실행됩니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`믹스인과 함께 사용`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`조건문은 `,(0,o.jsx)(`b`,{children:`믹스인과 함께 사용`}),`하면 매우 강력합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`파라미터에 따른 조건 분기`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`믹스인의 파라미터에 따라 `,(0,o.jsx)(`b`,{children:`조건문으로 다른 스타일을 적용`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`믹스인과 조건문 예시`,language:`css`,className:`mt_m`,children:`@mixin button($type, $size: 'medium') {
  // 타입에 따른 색상
  @if $type == 'primary' {
    background: #0a58ca;
  } @else if $type == 'secondary' {
    background: #6c757d;
  } @else {
    background: #f8f9fa;
  }

  // 크기에 따른 패딩
  @if $size == 'small' {
    padding: 6px 12px;
    font-size: 14px;
  } @else if $size == 'large' {
    padding: 12px 24px;
    font-size: 18px;
  } @else {
    padding: 8px 16px;
    font-size: 16px;
  }

  color: #ffffff;
  border-radius: 4px;
}

.button {
  @include button('primary', 'large');
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`타입과 크기에 따라 다양한 버튼 스타일`}),`을 하나의 믹스인으로 만들 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`조건부 속성 적용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`조건에 따라 `,(0,o.jsx)(`b`,{children:`특정 속성만 적용`}),`할 수도 있습니다.`]}),(0,o.jsx)(i,{title:`조건부 속성 예시`,language:`css`,className:`mt_m`,children:`@mixin card($shadow: true) {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;

  @if $shadow {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}

.card-with-shadow {
  @include card(true);
}

.card-no-shadow {
  @include card(false);
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실제 활용 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`조건문을 `,(0,o.jsx)(`b`,{children:`실제 프로젝트에서 활용`}),`하는 예시를 살펴봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`반응형 그리드 시스템`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`컬럼 개수에 따라 `,(0,o.jsx)(`b`,{children:`다른 그리드 스타일을 적용`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`반응형 그리드 예시`,language:`css`,className:`mt_m`,children:`@mixin grid($columns) {
  display: grid;
  gap: 16px;

  @if $columns == 1 {
    grid-template-columns: 1fr;
  } @else if $columns == 2 {
    grid-template-columns: repeat(2, 1fr);
  } @else if $columns == 3 {
    grid-template-columns: repeat(3, 1fr);
  } @else if $columns == 4 {
    grid-template-columns: repeat(4, 1fr);
  } @else {
    grid-template-columns: repeat(12, 1fr);
  }
}

.grid-2 {
  @include grid(2);
}

.grid-3 {
  @include grid(3);
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`테마 시스템`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`테마에 따라 `,(0,o.jsx)(`b`,{children:`다른 색상을 적용`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`테마 시스템 예시`,language:`css`,className:`mt_m`,children:`@mixin theme($theme-name) {
  @if $theme-name == 'light' {
    --bg-color: #ffffff;
    --text-color: #000000;
  } @else if $theme-name == 'dark' {
    --bg-color: #000000;
    --text-color: #ffffff;
  } @else if $theme-name == 'blue' {
    --bg-color: #0a58ca;
    --text-color: #ffffff;
  }
}

:root {
  @include theme('light');
}

[data-theme="dark"] {
  @include theme('dark');
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`유틸리티 클래스 생성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`조건문을 사용하여 `,(0,o.jsx)(`b`,{children:`유틸리티 클래스를 동적으로 생성`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`유틸리티 클래스 예시`,language:`css`,className:`mt_m`,children:`@mixin spacing-utility($direction, $size) {
  @if $direction == 'margin' {
    margin: $size;
  } @else if $direction == 'padding' {
    padding: $size;
  }

  @if $size == 'small' {
    $value: 8px;
  } @else if $size == 'medium' {
    $value: 16px;
  } @else {
    $value: 24px;
  }
}

.mt-small {
  @include spacing-utility('margin', 'small');
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`조건문 사용 시 주의사항`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`조건문을 사용할 때 `,(0,o.jsx)(`b`,{children:`주의해야 할 사항`}),`들을 정리합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`조건 순서`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`조건은 `,(0,o.jsx)(`b`,{children:`위에서 아래로 순차적으로 확인`}),`됩니다.`,(0,o.jsx)(`br`,{}),`먼저 만족하는 조건이 실행되므로, `,(0,o.jsx)(`b`,{children:`순서가 중요`}),`합니다.`]}),(0,o.jsx)(i,{title:`조건 순서 예시`,language:`css`,className:`mt_m`,children:`$size: 15;

// 잘못된 순서
@if $size > 10 {
  // 이 조건이 먼저 실행됨
} @else if $size > 20 {
  // 이 조건은 실행되지 않음
}

// 올바른 순서
@if $size > 20 {
  // 더 구체적인 조건을 먼저
} @else if $size > 10 {
  // 그 다음 조건
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본값 처리`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`모든 조건이 만족되지 않을 경우를 대비하여`,` `,(0,o.jsx)(`b`,{children:`@else로 기본값을 제공`}),`하는 것이 좋습니다.`]}),(0,o.jsx)(i,{title:`기본값 처리 예시`,language:`css`,className:`mt_m`,children:`@mixin button($type) {
  @if $type == 'primary' {
    background: #0a58ca;
  } @else if $type == 'secondary' {
    background: #6c757d;
  } @else {
    // 예상하지 못한 값에 대한 기본값
    background: #f8f9fa;
  }
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{children:`@if`}),`, `,(0,o.jsx)(`code`,{children:`@else`}),` 조건문에 대해 알아본 내용을 정리합니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`조건문의 개념`}),`: 조건에 따라 다른 스타일을 적용하는 기능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`@if 기본 문법`}),`: 조건이 참일 때 실행할 코드 작성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`@else`}),`: 조건이 거짓일 때 실행할 코드 작성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`@else if`}),`: 여러 조건을 순차적으로 확인`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`논리 연산자`}),`: `,(0,o.jsx)(`code`,{children:`and`}),`, `,(0,o.jsx)(`code`,{children:`or`}),`,`,` `,(0,o.jsx)(`code`,{children:`not`}),`을 사용하여 복잡한 조건 생성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`믹스인과 함께 사용`}),`: 파라미터에 따라 조건 분기, 조건부 속성 적용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`활용 예시`}),`: 반응형 그리드, 테마 시스템, 유틸리티 클래스 생성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`주의사항`}),`: 조건 순서, 기본값 처리`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`@for 반복문의 기본 구조`}),`를 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/08_scss_01.png`,alt:`@if, @else 조건문`}),(0,o.jsx)(`figcaption`,{children:`@if, @else 조건문`})]})]})}export{l as default,a as t};