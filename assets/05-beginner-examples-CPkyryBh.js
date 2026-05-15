import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`초급자가 이해하기 쉬운 예제 중심 설명`,description:`SCSS 조건문과 반복문을 초급자가 이해하기 쉬운 예제 중심으로 상세히 설명합니다. 일상 생활 비유, 단계별 설명, 실전 예제, 자주 하는 실수와 해결 방법을 제공합니다.`,keyword:`scss 초급자 예제, scss 조건문 예제, scss 반복문 예제, scss 기초 예제, scss 학습`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`조건문과 반복문은 처음 접하면 어려울 수 있습니다.`,(0,o.jsx)(`br`,{}),`이 페이지에서는 `,(0,o.jsx)(`b`,{children:`일상 생활 비유와 단계별 설명`}),`을 통해 초급자도 쉽게 이해할 수 있도록 설명합니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 조건문과 반복문을 초급자가 이해하기 쉬운 예제 중심으로 상세히 설명하고, 일상 생활 비유, 단계별 설명, 실전 예제, 자주 하는 실수와 해결 방법을 제공합니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`조건문을 일상 생활로 이해하기`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`조건문을 `,(0,o.jsx)(`b`,{children:`일상 생활의 예시`}),`로 먼저 이해해봅니다.`,(0,o.jsx)(`br`,{}),`코드 문법보다 익숙한 상황에서 개념을 먼저 잡으면, 이후 SCSS 예제를 읽을 때도 `,(0,o.jsx)(`b`,{children:`각 분기가 어떤 상황을 표현하는지`}),` 훨씬 쉽게 연결할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`일상 생활 예시`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`일상 생활에서도 조건문을 사용합니다:`}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`상황`}),(0,o.jsx)(`li`,{className:`cell content`,children:`조건문 표현`}),(0,o.jsx)(`li`,{className:`cell content`,children:`SCSS 코드`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`날씨에 따른 옷 입기`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`조건문 표현`,children:`만약 비가 오면 우산을 가져가고, 그렇지 않으면 가져가지 않는다`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`SCSS 코드`,children:(0,o.jsx)(`code`,{children:`@if $weather == 'rain' { 우산 } @else { 없음 }`})})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`점수에 따른 등급`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`조건문 표현`,children:`만약 점수가 90점 이상이면 A, 80점 이상이면 B, 그렇지 않으면 C`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`SCSS 코드`,children:(0,o.jsx)(`code`,{children:`@if $score >= 90 { A } @else if $score >= 80 { B } @else { C }`})})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`시간에 따른 인사`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`조건문 표현`,children:`만약 오전이면 "좋은 아침", 오후면 "좋은 오후", 저녁이면 "좋은 저녁"`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`SCSS 코드`,children:(0,o.jsx)(`code`,{children:`@if $time == 'morning' { 아침 } @else if $time == 'afternoon' { 오후 } @else { 저녁 }`})})]})]})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`SCSS 조건문으로 변환`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`일상 생활의 조건문을 `,(0,o.jsx)(`b`,{children:`SCSS 코드로 변환`}),`해봅니다.`]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`날씨 예시를 조건문으로 변환`}),(0,o.jsx)(i,{title:`날씨 예시를 SCSS로`,language:`css`,className:`mt_ms`,children:`// 일상: 만약 비가 오면 우산을 가져간다
$weather: 'rain';

@if $weather == 'rain' {
  .umbrella {
    display: block;  // 우산 표시
  }
} @else {
  .umbrella {
    display: none;  // 우산 숨김
  }
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`점수 예시를 조건문으로 변환`}),(0,o.jsx)(i,{title:`점수 예시를 SCSS로`,language:`css`,className:`mt_ms`,children:`// 일상: 점수에 따른 등급
$score: 85;

@if $score >= 90 {
  .grade {
    color: #28a745;  // A 등급 (초록색)
  }
} @else if $score >= 80 {
  .grade {
    color: #0a58ca;  // B 등급 (파란색)
  }
} @else {
  .grade {
    color: #dc3545;  // C 등급 (빨간색)
  }
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`시간 인사 예시를 조건문으로 변환`}),(0,o.jsx)(i,{title:`시간 인사 예시를 SCSS로`,language:`css`,className:`mt_ms`,children:`// 일상: 시간에 따른 인사
$time: 'afternoon';

@if $time == 'morning' {
  .greeting {
    content: "좋은 아침입니다";
    color: #ffc107;  // 아침 (노란색)
  }
} @else if $time == 'afternoon' {
  .greeting {
    content: "좋은 오후입니다";
    color: #0a58ca;  // 오후 (파란색)
  }
} @else {
  .greeting {
    content: "좋은 저녁입니다";
    color: #6c757d;  // 저녁 (회색)
  }
}`})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`반복문을 일상 생활로 이해하기`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`반복문도 `,(0,o.jsx)(`b`,{children:`일상 생활의 예시`}),`로 먼저 이해해봅니다.`,(0,o.jsx)(`br`,{}),`숫자 세기, 장바구니 물건 계산처럼 반복 구조를 떠올려 보면, SCSS에서`,` `,(0,o.jsx)(`b`,{children:`@for, @each가 실제로 무엇을 자동화하는지`}),` 직관적으로 이해할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`일상 생활 예시`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`일상 생활에서도 반복문을 사용합니다:`}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`상황`}),(0,o.jsx)(`li`,{className:`cell content`,children:`반복문 표현`}),(0,o.jsx)(`li`,{className:`cell content`,children:`SCSS 코드`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`1부터 10까지 숫자 세기`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`반복문 표현`,children:`1, 2, 3, 4, 5, 6, 7, 8, 9, 10을 하나씩 말한다`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`SCSS 코드`,children:(0,o.jsx)(`code`,{children:`@for $i from 1 through 10 { $i }`})})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`장바구니 물건 계산`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`반복문 표현`,children:`장바구니의 각 물건을 하나씩 꺼내서 가격을 더한다`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`SCSS 코드`,children:(0,o.jsx)(`code`,{children:`@each $item in $cart { 처리 }`})})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`학생 명단 불러오기`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`반복문 표현`,children:`명단의 각 학생 이름을 하나씩 불러본다`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`SCSS 코드`,children:(0,o.jsx)(`code`,{children:`@each $name in $students { $name }`})})]})]})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`SCSS 반복문으로 변환`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`일상 생활의 반복문을 `,(0,o.jsx)(`b`,{children:`SCSS 코드로 변환`}),`해봅니다.`]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`숫자 세기 예시를 반복문으로 변환`}),(0,o.jsx)(i,{title:`숫자 세기 예시를 SCSS로`,language:`css`,className:`mt_ms`,children:`// 일상: 1부터 5까지 숫자를 하나씩 말한다
@for $i from 1 through 5 {
  .number-#{$i} {
    // $i는 1, 2, 3, 4, 5로 증가
    content: "#{$i}번째";
  }
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`장바구니 예시를 반복문으로 변환`}),(0,o.jsx)(i,{title:`장바구니 예시를 SCSS로`,language:`css`,className:`mt_ms`,children:`// 일상: 장바구니의 각 물건을 하나씩 처리
$cart: apple, banana, orange;

@each $item in $cart {
  .item-#{$item} {
    // $item은 apple, banana, orange를 하나씩 가져옴
    display: block;
  }
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`학생 명단 예시를 반복문으로 변환`}),(0,o.jsx)(i,{title:`학생 명단 예시를 SCSS로`,language:`css`,className:`mt_ms`,children:`// 일상: 명단의 각 학생 이름을 하나씩 불러온다
$students: kim, lee, park, choi;

@each $name in $students {
  .student-#{$name} {
    // $name은 kim, lee, park, choi를 하나씩 가져옴
    display: list-item;
  }
}`})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`단계별 학습 예제`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`초급자를 위한 `,(0,o.jsx)(`b`,{children:`단계별 학습 예제`}),`를 제공합니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`b`,{className:`t_black`,children:`문제 상황`}),` →`,` `,(0,o.jsx)(`b`,{className:`t_black`,children:`단계별 해결`}),` →`,` `,(0,o.jsx)(`b`,{className:`t_black`,children:`컴파일 결과`}),` 순서로 따라가며 연습하면, 조건문과 반복문이 실제 프로젝트에서`,` `,(0,o.jsx)(`b`,{children:`어떻게 쓰이는지 손에 익히는 데`}),` 도움이 됩니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`예제 1: 간단한 조건문 (버튼 색상)`}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn t_blue`,children:`문제 상황`}),(0,o.jsx)(`p`,{className:`mt_ms t_blue weight-600`,children:`버튼 타입에 따라 다른 색상을 적용하고 싶습니다.`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`단계 1: 변수 정의`}),(0,o.jsx)(i,{title:`변수 정의`,language:`css`,className:`mt_ms`,children:`$button-type: 'primary';`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`단계 2: 조건문 작성`}),(0,o.jsx)(i,{title:`조건문 작성`,language:`css`,className:`mt_ms`,children:`$button-type: 'primary';

@if $button-type == 'primary' {
  .button {
    background: #0a58ca;
  }
} @else {
  .button {
    background: #6c757d;
  }
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`단계 3: 결과 확인`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_ms`,children:`.button {
  background: #0a58ca;
}
/* $button-type이 'primary'이므로 첫 번째 조건 실행 */`})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`예제 2: 간단한 반복문 (마진 클래스)`}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn t_blue`,children:`문제 상황`}),(0,o.jsx)(`p`,{className:`mt_ms t_blue weight-600`,children:`마진 탑 클래스를 5개 만들고 싶습니다 (.mt-1, .mt-2, .mt-3, .mt-4, .mt-5).`})]}),(0,o.jsxs)(`div`,{className:`mt_ml indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`단계 1: 반복문 구조 작성`}),(0,o.jsx)(i,{title:`반복문 구조`,language:`css`,className:`mt_ms`,children:`@for $i from 1 through 5 {
  // 여기에 클래스를 만들 코드 작성
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`단계 2: 클래스 이름 작성`}),(0,o.jsx)(i,{title:`클래스 이름`,language:`css`,className:`mt_ms`,children:`@for $i from 1 through 5 {
  .mt-#{$i} {
    // 마진 값 작성
  }
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`단계 3: 마진 값 계산`}),(0,o.jsx)(i,{title:`마진 값 계산`,language:`css`,className:`mt_ms`,children:`@for $i from 1 through 5 {
  .mt-#{$i} {
    margin-top: #{$i * 8}px;
  }
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`단계 4: 결과 확인`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_ms`,children:`.mt-1 { margin-top: 8px; }
.mt-2 { margin-top: 16px; }
.mt-3 { margin-top: 24px; }
.mt-4 { margin-top: 32px; }
.mt-5 { margin-top: 40px; }
/* 5개 클래스가 자동으로 생성됨 */`})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실전 예제: 버튼 시스템 만들기`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`조건문과 반복문을 함께 사용하여`,` `,(0,o.jsx)(`b`,{children:`실제로 사용할 수 있는 버튼 시스템`}),`을 만들어봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn t_blue`,children:`목표`}),(0,o.jsx)(`p`,{className:`mt_m t_blue weight-600`,children:`다음과 같은 버튼 클래스를 자동으로 생성하고 싶습니다:`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`.btn-primary`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.btn-secondary`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.btn-success`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.btn-danger`})]}),(0,o.jsx)(`li`,{children:`각 버튼은 다른 배경색을 가짐`}),(0,o.jsx)(`li`,{children:`호버 시 색상이 어두워짐`})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`단계별 구현`}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`1단계: 색상 맵 정의`}),(0,o.jsx)(i,{title:`색상 맵 정의`,language:`css`,className:`mt_ms`,children:`$button-colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745,
  danger: #dc3545
);`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`2단계: @each로 순회`}),(0,o.jsx)(i,{title:`@each로 순회`,language:`css`,className:`mt_ms`,children:`$button-colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745,
  danger: #dc3545
);

@each $name, $color in $button-colors {
  // 여기에 버튼 스타일 작성
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`3단계: 버튼 스타일 작성`}),(0,o.jsx)(i,{title:`버튼 스타일 작성`,language:`css`,className:`mt_ms`,children:`@each $name, $color in $button-colors {
  .btn-#{$name} {
    background: $color;
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 4px;

    &:hover {
      background: darken($color, 10%);
    }
  }
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`4단계: 완성된 코드`}),(0,o.jsx)(i,{title:`완성된 코드`,language:`css`,className:`mt_ms`,children:`$button-colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745,
  danger: #dc3545
);

@each $name, $color in $button-colors {
  .btn-#{$name} {
    background: $color;
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 4px;

    &:hover {
      background: darken($color, 10%);
    }
  }
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`5단계: 결과 확인`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_ms`,children:`.btn-primary {
  background: #0a58ca;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
}

.btn-primary:hover {
  background: #084298;
}

.btn-secondary {
  background: #6c757d;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
}

.btn-secondary:hover {
  background: #545b62;
}
... (나머지 버튼 생략) ...`})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`자주 하는 실수와 해결 방법`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`초급자가 `,(0,o.jsx)(`b`,{children:`자주 하는 실수와 해결 방법`}),`을 정리합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`실수 1: 인터폴레이션 빼먹기`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`선택자 이름에 변수를 사용할 때 `,(0,o.jsx)(`b`,{children:`인터폴레이션을 빼먹는 실수`}),`입니다.`]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`❌ 잘못된 예시`}),(0,o.jsx)(i,{title:`❌ 잘못된 예시`,language:`css`,className:`mt_ms`,children:`@for $i from 1 through 5 {
  .item-$i {  // 에러! 인터폴레이션 없음
    margin: $i * 8px;
  }
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`✅ 올바른 예시`}),(0,o.jsx)(i,{title:`✅ 올바른 예시`,language:`css`,className:`mt_ms`,children:`@for $i from 1 through 5 {
  .item-#{$i} {  // 올바름! 인터폴레이션 사용
    margin: $i * 8px;
  }
}`})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`실수 2: through와 to 혼동`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`through`}),`와`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`to`}),`의 차이를 모르고`,` `,(0,o.jsx)(`b`,{children:`잘못 사용하는 실수`}),`입니다.`]}),(0,o.jsx)(i,{title:`through와 to 차이`,language:`css`,className:`mt_m`,children:`// through: 끝 숫자 포함 (5번 반복)
@for $i from 1 through 5 {
  // $i는 1, 2, 3, 4, 5
}

// to: 끝 숫자 제외 (4번 반복)
@for $i from 1 to 5 {
  // $i는 1, 2, 3, 4 (5는 제외)
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`일반적으로`,` `,(0,o.jsxs)(`b`,{children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`through`}),`를 더 많이 사용합니다.`]})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`실수 3: 맵 순회 시 변수 순서`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`맵을 순회할 때 `,(0,o.jsx)(`b`,{children:`변수 순서를 잘못 쓰는 실수`}),`입니다.`]}),(0,o.jsx)(i,{title:`맵 순회 변수 순서`,language:`css`,className:`mt_m`,children:`$colors: (
  primary: #0a58ca,
  secondary: #6c757d
);

// ❌ 잘못된 순서: 값, 키 (에러 발생)
@each $color, $name in $colors {
  // 순서가 바뀌면 값이 잘못됨
}

// ✅ 올바른 순서: 키, 값
@each $name, $color in $colors {
  // $name은 키, $color는 값
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`실수 4: 조건문에서 = 와 == 혼동`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`조건문에서 `,(0,o.jsx)(`b`,{children:`비교 연산자를 잘못 사용하는 실수`}),`입니다.`]}),(0,o.jsx)(i,{title:`비교 연산자 사용`,language:`css`,className:`mt_m`,children:`$type: 'primary';

// ✅ 올바른 사용
@if $type == 'primary' {
  // == (비교 연산자): $type이 'primary'와 같은지 비교할 때 사용
  color: blue;
}

// ❌ 잘못된 사용
@if $type = 'primary' {
  // 에러 발생!
  // = 는 할당 연산자이므로 조건문에서 사용할 수 없음
  // SCSS 컴파일러가 "조건문에서 변수에 값을 할당할 수 없다"고 에러를 발생시킴
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`b`,{children:(0,o.jsx)(`code`,{className:`t_blue`,children:`=`})}),`는 `,(0,o.jsx)(`b`,{children:`할당 연산자`}),`로 변수에 값을 저장할 때 사용하고,`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`b`,{children:(0,o.jsx)(`code`,{className:`t_blue`,children:`==`})}),`는 `,(0,o.jsx)(`b`,{children:`비교 연산자`}),`로 두 값을 비교할 때 사용합니다.`,(0,o.jsx)(`br`,{}),`조건문에서는 값을 비교해야 하므로`,` `,(0,o.jsxs)(`b`,{children:[`반드시 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`==`}),`를 사용`]}),`해야 합니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`학습 체크리스트`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`조건문과 반복문을 `,(0,o.jsx)(`b`,{children:`제대로 이해했는지 확인`}),`하는 체크리스트입니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`조건문 체크리스트`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`다음 항목을 모두 이해했는지 확인하세요:`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`@if 기본 문법`}),`: `,`@if 조건 { } 형태로 작성할 수 있는가?`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`@else 사용`}),`: @else로 거짓일 때의 코드를 작성할 수 있는가?`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`@else if 사용`}),`: 여러 조건을 @else if로 확인할 수 있는가?`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`비교 연산자`}),`: ==, !=, >, < 등을 사용할 수 있는가?`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`논리 연산자`}),`: and, or, not을 사용할 수 있는가?`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`믹스인과 함께 사용`}),`: 믹스인 안에서 조건문을 사용할 수 있는가?`]})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`반복문 체크리스트`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`다음 항목을 모두 이해했는지 확인하세요:`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`@for 기본 문법`}),`: @for $i from 1 through 5 형태로 작성할 수 있는가?`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`through vs to`}),`: through와 to의 차이를 이해하는가?`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`인터폴레이션`}),`: 선택자 이름에 변수 사용 시`,` `,(0,o.jsxs)(`code`,{children:[`#`,`{}`]}),`를 사용할 수 있는가?`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`@each 기본 문법`}),`: @each $item in $list 형태로 작성할 수 있는가?`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`맵 순회`}),`: @each $key, $value in $map 형태로 맵을 순회할 수 있는가?`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`클래스 자동 생성`}),`: 반복문으로 유틸리티 클래스를 생성할 수 있는가?`]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`추가 학습 자료`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`더 깊이 학습하기 위한 `,(0,o.jsx)(`b`,{children:`추가 예제`}),`를 제공합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`연습 문제 1: 간격 유틸리티 만들기`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`다음 요구사항에 맞는 간격 유틸리티를 만들어보세요:`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`.mt-1`}),`부터`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.mt-10`}),`까지 마진 탑 클래스 생성`]}),(0,o.jsxs)(`li`,{children:[`각 클래스는 `,(0,o.jsx)(`code`,{children:`8px`}),`의 배수로 마진 값 설정 (예:`,` `,(0,o.jsx)(`code`,{children:`.mt-1 = 8px`}),`, `,(0,o.jsx)(`code`,{children:`.mt-2 = 16px`}),`)`]})]}),(0,o.jsx)(i,{title:`정답 예시`,language:`css`,className:`mt_m`,children:`@for $i from 1 through 10 {
  .mt-#{$i} {
    margin-top: #{$i * 8}px;
  }
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`연습 문제 2: 색상 유틸리티 만들기`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`다음 요구사항에 맞는 색상 유틸리티를 만들어보세요:`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsx)(`li`,{children:`primary, secondary, success 색상에 대해 배경색 클래스 생성`}),(0,o.jsxs)(`li`,{children:[`각 클래스는 `,(0,o.jsx)(`code`,{children:`.bg-primary`}),`, `,(0,o.jsx)(`code`,{children:`.bg-secondary`}),`,`,` `,(0,o.jsx)(`code`,{children:`.bg-success`}),` 형태`]})]}),(0,o.jsx)(i,{title:`정답 예시`,language:`css`,className:`mt_m`,children:`$colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745
);

@each $name, $color in $colors {
  .bg-#{$name} {
    background-color: $color;
  }
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`초급자가 이해하기 쉬운 예제 중심 설명에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`일상 생활 비유`}),`: 조건문과 반복문을 일상 생활 예시로 이해`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`단계별 학습`}),`: 간단한 예제부터 시작하여 점진적으로 복잡한 예제로`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`실전 예제`}),`: 버튼 시스템 만들기 등 실제로 사용할 수 있는 예제`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`자주 하는 실수`}),`: 인터폴레이션 빼먹기, `,(0,o.jsx)(`code`,{children:`through`}),`/`,(0,o.jsx)(`code`,{children:`to`}),` 혼동, 변수 순서 등`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`학습 체크리스트`}),`: 조건문과 반복문을 제대로 이해했는지 확인`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`추가 학습 자료`}),`: 연습 문제를 통해 실력 향상`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`이제 조건문과 반복문의 기초를 모두 배웠습니다. 다음 섹션에서는`,` `,(0,o.jsx)(`b`,{children:`파일 분리와 SCSS 구조 설계`}),`에 대해 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/08_scss_05.png`,alt:`초급자 예제 모음`}),(0,o.jsx)(`figcaption`,{children:`초급자 예제 모음`})]})]})}export{l as default,a as t};