import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`@each 반복문 사용법`,description:`SCSS @each 반복문을 상세히 알아봅니다. @each의 기본 개념, 문법, 리스트와 맵을 순회하는 방법, 중첩 구조 처리, 실제 사용 예시를 초급자가 이해하기 쉬운 예제 중심으로 설명합니다.`,keyword:`scss @each, scss each loop, scss 리스트 순회, scss 맵 순회, scss 반복문`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(`b`,{children:`@each 반복문`}),`은 SCSS에서`,` `,(0,o.jsx)(`b`,{children:`리스트나 맵의 각 항목을 하나씩 순회`}),`하면서 코드를 실행하는 기능입니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`code`,{className:`t_blue`,children:`@for`}),`가 숫자를 증가시키면서 반복하는 것과 달리, `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@each`}),`는`,` `,(0,o.jsx)(`b`,{children:`데이터 구조의 각 항목을 처리`}),`합니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 @each 반복문의 기본 개념, 문법, 리스트와 맵을 순회하는 방법, 중첩 구조 처리, 실제 사용 예시를 초급자가 이해하기 쉬운 예제 중심으로 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`@each 반복문이란?`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@each`}),`는`,` `,(0,o.jsx)(`b`,{children:`리스트나 맵의 각 항목을 하나씩 가져와서`}),` 코드를 실행하는 반복문입니다.`,(0,o.jsx)(`br`,{}),`색상 팔레트, 간격 리스트, 브레이크포인트 맵처럼 데이터 구조를 기반으로 클래스를 만들 때,`,` `,(0,o.jsx)(`b`,{children:`데이터 정의만 바꿔도 전체 스타일이 함께 바뀌도록`}),` 만들어 주는 핵심 도구입니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 개념`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`일상 생활에서의 예시로 이해해봅니다:`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`"장바구니에 있는 각 물건을 하나씩 꺼내서 계산한다"`}),` → 장바구니(리스트)의 각 물건(항목)을 처리`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`"학생 명단의 각 학생 이름을 하나씩 불러본다"`}),` → 명단(리스트)의 각 이름(항목)을 처리`]})]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`SCSS의 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@each`}),`도 같은 원리입니다.`,` `,(0,o.jsx)(`b`,{children:`리스트나 맵의 각 항목을 하나씩 가져와서 처리`}),`합니다.`]}),(0,o.jsx)(i,{title:`@each 기본 예시`,language:`css`,className:`mt_m`,children:`// 색상 리스트
$colors: red, blue, green;

// 각 색상을 하나씩 처리
@each $color in $colors {
  .text-#{$color} {
    color: $color;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.text-red {
  color: red;
}

.text-blue {
  color: blue;
}

.text-green {
  color: green;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`반복문을 사용하면`,` `,(0,o.jsx)(`b`,{children:`리스트의 각 항목에 대해 클래스를 자동으로 생성`}),`할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`@for와 @each의 차이`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@for`}),`와`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@each`}),`의 차이를 비교해봅니다.`]}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`구분`}),(0,o.jsx)(`li`,{className:`cell content`,children:`@for`}),(0,o.jsx)(`li`,{className:`cell content`,children:`@each`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`반복 방식`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@for`,children:`숫자를 증가시키면서 반복`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@each`,children:`리스트/맵의 각 항목을 순회`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`사용 시기`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@for`,children:`숫자 기반 반복이 필요할 때`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@each`,children:`데이터 구조를 순회할 때`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`예시`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@for`,children:(0,o.jsx)(`code`,{children:`@for $i from 1 through 5`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@each`,children:(0,o.jsx)(`code`,{children:`@each $color in $colors`})})]})]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`리스트 순회하기`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@each`}),`를 사용하여`,` `,(0,o.jsx)(`b`,{children:`리스트의 각 항목을 순회`}),`하는 방법을 알아봅니다.`,(0,o.jsx)(`br`,{}),`색상·크기·간격처럼 순서 있는 값들을 리스트로 관리하면,`,` `,(0,o.jsx)(`b`,{children:`클래스 이름 규칙과 값 규칙을 한 번에 설계`}),`할 수 있어 디자인 시스템을 구현하기 수월해집니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 문법`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@each`}),` 뒤에 변수명과 리스트를 지정합니다.`]}),(0,o.jsx)(i,{title:`@each 기본 문법`,language:`css`,className:`mt_m`,children:`@each $변수명 in 리스트 {
  // 반복할 코드
}`}),(0,o.jsx)(i,{title:`실제 예시`,language:`css`,className:`mt_m`,children:`$colors: red, blue, green;

@each $color in $colors {
  .bg-#{$color} {
    background-color: $color;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.bg-red {
  background-color: red;
}

.bg-blue {
  background-color: blue;
}

.bg-green {
  background-color: green;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`$color`}),`는`,` `,(0,o.jsx)(`b`,{children:`리스트의 각 항목(red, blue, green)을 하나씩 가져옵니다`}),`.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`문자열 리스트 순회`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`문자열로 이루어진 리스트를 순회하는 예시입니다.`}),(0,o.jsx)(i,{title:`문자열 리스트 예시`,language:`css`,className:`mt_m`,children:`$sizes: small, medium, large;

@each $size in $sizes {
  @if $size == 'small' {
    .text-#{$size} {
      font-size: 14px;
    }
  } @else if $size == 'medium' {
    .text-#{$size} {
      font-size: 16px;
    }
  } @else {
    .text-#{$size} {
      font-size: 18px;
    }
  }
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`숫자 리스트 순회`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`숫자로 이루어진 리스트를 순회하는 예시입니다.`}),(0,o.jsx)(i,{title:`숫자 리스트 예시`,language:`css`,className:`mt_m`,children:`$spacings: 8px, 16px, 24px, 32px;

@each $spacing in $spacings {
  .p-#{$spacing} {
    padding: $spacing;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`숫자 리스트를 순회하면 `,(0,o.jsx)(`b`,{children:`각 숫자 값에 대해 클래스를 생성`}),`할 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`맵(Map) 순회하기`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@each`}),`를 사용하여`,` `,(0,o.jsx)(`b`,{children:`맵의 각 키-값 쌍을 순회`}),`하는 방법을 알아봅니다.`,(0,o.jsx)(`br`,{}),`맵은 이름과 값을 함께 다룰 수 있기 때문에, 버튼 타입·알림 타입·브랜드 색상처럼 `,(0,o.jsx)(`b`,{children:`의미 있는 이름과 토큰 값을 연결`}),`할 때 특히 유용합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`맵이란?`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`맵은 `,(0,o.jsx)(`b`,{children:`키(key)와 값(value)의 쌍`}),`으로 이루어진 데이터 구조입니다.`,(0,o.jsx)(`br`,{}),`JavaScript의 객체나 Python의 딕셔너리와 비슷합니다.`]}),(0,o.jsx)(i,{title:`맵 기본 예시`,language:`css`,className:`mt_m`,children:`// 맵 정의
$colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745
);`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`맵은 `,(0,o.jsx)(`b`,{children:`관련 있는 데이터를 키-값 쌍으로 묶어서 관리`}),`할 때 유용합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`맵 순회 기본 문법`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`맵을 순회할 때는 `,(0,o.jsx)(`b`,{children:`키와 값을 각각 변수로 받습니다`}),`.`]}),(0,o.jsx)(i,{title:`맵 순회 기본 문법`,language:`css`,className:`mt_m`,children:`@each $키변수, $값변수 in 맵 {
  /* 반복할 코드 */
}`}),(0,o.jsx)(i,{title:`실제 예시`,language:`css`,className:`mt_m`,children:`$colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745
);

@each $name, $color in $colors {
  .btn-#{$name} {
    background-color: $color;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.btn-primary {
  background-color: #0a58ca;
}

.btn-secondary {
  background-color: #6c757d;
}

.btn-success {
  background-color: #28a745;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`$name`}),`은 키(primary, secondary, success)를, `,(0,o.jsx)(`code`,{className:`t_blue`,children:`$color`}),`는 값(#0a58ca, #6c757d, #28a745)을 가져옵니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`맵 순회 활용 예시`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`맵을 순회하여 `,(0,o.jsx)(`b`,{children:`버튼 스타일을 자동 생성`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`버튼 스타일 자동 생성`,language:`css`,className:`mt_m`,children:`$button-types: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745,
  danger: #dc3545
);

@each $type, $color in $button-types {
  .button-#{$type} {
    background: $color;
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 4px;

    &:hover {
      background: darken($color, 10%);
    }
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,filename:`컴파일된 CSS`,defaultOpen:!1,language:`css`,className:`mt_m`,children:`.button-primary {
  background: #0a58ca;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
}
.button-primary:hover {
  background: #084298; /* darken(#0a58ca, 10%) */
}

.button-secondary {
  background: #6c757d;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
}
.button-secondary:hover {
  background: #565e64; /* darken(#6c757d, 10%) */
}

/* ... 이하 생략 ... */`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`4개의 버튼 타입에 대한 스타일이 자동으로 생성`}),`됩니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`중첩 리스트/맵 순회`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`b`,{children:`중첩된 리스트나 맵`}),`을 순회하는 방법을 알아봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`중첩 리스트 순회`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`리스트 안에 리스트가 있는 경우,`,` `,(0,o.jsx)(`b`,{children:`여러 변수로 각 항목을 받을 수 있습니다`}),`.`]}),(0,o.jsx)(i,{title:`중첩 리스트 예시`,language:`css`,className:`mt_m`,children:`// 중첩 리스트: (이름, 색상) 쌍
$color-list: (primary #0a58ca), (secondary #6c757d), (success #28a745);

@each $name, $color in $color-list {
  .text-#{$name} {
    color: $color;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.text-primary {
  color: #0a58ca;
}

.text-secondary {
  color: #6c757d;
}

.text-success {
  color: #28a745;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`중첩 리스트를 순회하면 `,(0,o.jsx)(`b`,{children:`여러 값을 한 번에 처리`}),`할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`중첩 맵 순회`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`맵 안에 맵이 있는 경우도 순회할 수 있습니다.`}),(0,o.jsx)(i,{title:`중첩 맵 예시`,language:`css`,className:`mt_m`,children:`$theme-colors: (
  light: (
    bg: #ffffff,
    text: #000000
  ),
  dark: (
    bg: #000000,
    text: #ffffff
  )
);

@each $theme-name, $colors in $theme-colors {
  [data-theme="#{$theme-name}"] {
    background: map-get($colors, bg);
    color: map-get($colors, text);
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`[data-theme="light"] {
  background: #ffffff;
  color: #000000;
}

[data-theme="dark"] {
  background: #000000;
  color: #ffffff;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`중첩된 맵 구조도 순회`}),`할 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실제 활용 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@each`}),`를 `,(0,o.jsx)(`b`,{children:`실제 프로젝트에서 활용`}),`하는 예시를 살펴봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`색상 팔레트 자동 생성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`색상 맵을 순회하여 `,(0,o.jsx)(`b`,{children:`색상 유틸리티 클래스를 자동 생성`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`색상 팔레트 예시`,language:`css`,className:`mt_m`,children:`$color-palette: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745,
  danger: #dc3545,
  warning: #ffc107
);

@each $name, $color in $color-palette {
  .bg-#{$name} {
    background-color: $color;
  }

  .text-#{$name} {
    color: $color;
  }

  .border-#{$name} {
    border-color: $color;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,filename:`컴파일된 CSS`,defaultOpen:!1,language:`css`,className:`mt_m`,children:`.bg-primary {
  background-color: #0a58ca;
}

.text-primary {
  color: #0a58ca;
}

.border-primary {
  border-color: #0a58ca;
}

.bg-secondary {
  background-color: #6c757d;
}

.text-secondary {
  color: #6c757d;
}

.border-secondary {
  border-color: #6c757d;
}

.bg-success {
  background-color: #28a745;
}

.text-success {
  color: #28a745;
}

.border-success {
  border-color: #28a745;
}

.bg-danger {
  background-color: #dc3545;
}

.text-danger {
  color: #dc3545;
}

.border-danger {
  border-color: #dc3545;
}

.bg-warning {
  background-color: #ffc107;
}

.text-warning {
  color: #ffc107;
}

.border-warning {
  border-color: #ffc107;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면`,` `,(0,o.jsx)(`b`,{children:`5개 색상에 대해 3가지 유틸리티(배경, 텍스트, 테두리)가 자동으로 생성`}),`되어 총 15개의 클래스가 만들어집니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`아이콘 폰트 클래스 생성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`아이콘 이름 리스트를 순회하여 `,(0,o.jsx)(`b`,{children:`아이콘 클래스를 자동 생성`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`아이콘 클래스 예시`,language:`css`,className:`mt_m`,children:`$icons: home, user, settings, search, menu;

@each $icon in $icons {
  .icon-#{$icon}::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url("icons/#{$icon}.svg");
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,filename:`컴파일된 CSS`,defaultOpen:!1,language:`css`,className:`mt_ms`,children:`.icon-home::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("icons/home.svg");
}

.icon-user::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("icons/user.svg");
}

.icon-settings::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("icons/settings.svg");
}

.icon-search::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("icons/search.svg");
}

.icon-menu::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("icons/menu.svg");
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`브레이크포인트별 스타일 생성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`브레이크포인트 맵을 순회하여 `,(0,o.jsx)(`b`,{children:`반응형 유틸리티를 자동 생성`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`브레이크포인트 예시`,language:`css`,className:`mt_m`,children:`$breakpoints: (
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
);

@each $name, $size in $breakpoints {
  @media (min-width: $size) {
    .container-#{$name} {
      max-width: $size;
    }
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,filename:`컴파일된 CSS`,defaultOpen:!1,language:`css`,className:`mt_ms`,children:`@media (min-width: 576px) {
  .container-sm {
    max-width: 576px;
  }
}

@media (min-width: 768px) {
  .container-md {
    max-width: 768px;
  }
}

@media (min-width: 992px) {
  .container-lg {
    max-width: 992px;
  }
}

@media (min-width: 1200px) {
  .container-xl {
    max-width: 1200px;
  }
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`조건문과 함께 사용`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@each`}),` 안에서 `,(0,o.jsx)(`b`,{children:`조건문을 사용`}),`하여 더 유연한 코드를 작성할 수 있습니다.`,(0,o.jsx)(`br`,{}),`아래는 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@each`}),` 안에서`,` `,(0,o.jsx)(`b`,{children:`조건문으로 특정 항목만 처리`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`조건문과 @each 조합`,language:`css`,className:`mt_m`,children:`$colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745,
  danger: #dc3545
);

@each $name, $color in $colors {
  // primary와 success만 처리
  @if $name == 'primary' or $name == 'success' {
    .button-#{$name} {
      background: $color;
    }
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`특정 조건을 만족하는 항목만 처리`}),`할 수 있습니다.`]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`@for와 @each 비교`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@for`}),`와`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@each`}),`를 `,(0,o.jsx)(`b`,{children:`언제 사용할지`}),` `,`비교해봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`@for를 사용하는 경우`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음과 같은 경우에는 `,(0,o.jsx)(`b`,{children:`@for를 사용`}),`하는 것이 좋습니다:`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`숫자 기반 반복`}),`: 1부터 10까지 같은 패턴으로 반복`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`순차적 증가`}),`: 숫자가 1씩 증가하면서 반복`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`계산 기반`}),`: 숫자를 계산하여 값 생성`]})]}),(0,o.jsx)(i,{title:`@for 사용 예시`,language:`css`,className:`mt_m`,children:`// @for 사용 적합
@for $i from 1 through 10 {
  .mt-#{$i} {
    margin-top: #{$i * 8}px;
  }
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`@each를 사용하는 경우`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음과 같은 경우에는 `,(0,o.jsx)(`b`,{children:`@each를 사용`}),`하는 것이 좋습니다:`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`데이터 구조 순회`}),`: 리스트나 맵의 각 항목을 처리`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`이름 기반 반복`}),`: 색상 이름, 아이콘 이름 등 의미 있는 이름으로 반복`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`키-값 쌍 처리`}),`: 맵의 키와 값을 함께 사용`]})]}),(0,o.jsx)(i,{title:`@each 사용 예시`,language:`css`,className:`mt_m`,children:`// @each 사용 적합
$colors: (
  primary: #0a58ca,
  secondary: #6c757d
);

@each $name, $color in $colors {
  .btn-#{$name} {
    background: $color;
  }
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{children:`@each`}),` 반복문 사용법에 대해 알아본 내용을 정리합니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`@each의 개념`}),`: 리스트나 맵의 각 항목을 하나씩 순회하면서 코드 실행`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`리스트 순회`}),`: `,(0,o.jsx)(`code`,{children:`@each $변수 in`}),` 리스트 형태로 순회`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`맵 순회`}),`: `,(0,o.jsx)(`code`,{children:`@each $키, $값 in 맵`}),` 형태로 키-값 쌍 순회`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`중첩 구조`}),`: 중첩된 리스트나 맵도 순회 가능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`활용 예시`}),`: 색상 팔레트, 아이콘 클래스, 브레이크포인트별 스타일 생성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`조건문과 조합`}),`: @each 안에서 조건문 사용 가능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`@for와 비교`}),`: 숫자 기반은 `,(0,o.jsx)(`code`,{children:`@for`}),`, 데이터 구조는`,` `,(0,o.jsx)(`code`,{children:`@each`})]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`반복문을 활용한 클래스 자동 생성`}),`을 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/08_scss_03.png`,alt:`@each 반복문`}),(0,o.jsx)(`figcaption`,{children:`@each 반복문`})]})]})}export{l as default,a as t};