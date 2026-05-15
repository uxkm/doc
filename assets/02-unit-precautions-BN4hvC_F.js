import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`단위 연산 시 주의사항`,description:`SCSS에서 단위 연산 시 주의해야 할 사항들을 상세히 알아봅니다. 단위 호환성, 나눗셈 연산의 특수성, calc() 함수 사용, 일반적인 실수와 해결 방법을 예시와 함께 설명합니다.`,keyword:`scss 단위 연산, scss 단위 주의사항, scss 나눗셈, scss calc, scss 단위 에러, scss 연산 오류`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`SCSS에서 단위 연산을 할 때는 `,(0,o.jsx)(`b`,{children:`여러 주의사항`}),`이 있습니다.`,(0,o.jsx)(`br`,{}),`단위 호환성, 나눗셈 연산의 특수성, CSS의`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`calc()`}),` 함수와의 차이 등을 이해하면 연산 오류를 방지할 수 있습니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 단위 연산 시 발생할 수 있는 문제와 그 해결 방법, 일반적인 실수와 주의사항을 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`단위 호환성`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`SCSS에서 연산을 할 때는 `,(0,o.jsx)(`b`,{children:`단위 호환성`}),`을 고려해야 합니다.`,(0,o.jsx)(`br`,{}),`모든 단위가 서로 연산 가능한 것은 아닙니다. 단위 규칙을 잘 이해해 두면 연산 오류를 줄이고, `,(0,o.jsx)(`b`,{children:`반응형 레이아웃에서 예기치 않은 결과`}),`가 나오는 상황을 예방할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`같은 단위끼리만 연산 가능`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`일반적으로 `,(0,o.jsx)(`b`,{children:`같은 단위끼리만 연산`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`같은 단위 연산 (✅ 가능)`,language:`css`,className:`mt_m`,children:`$size-1: 10px;
$size-2: 20px;

.container {
  width: $size-1 + $size-2;  // 30px (가능)
}`}),(0,o.jsx)(i,{title:`다른 단위 연산 (❌ 에러)`,language:`css`,className:`mt_m`,children:`$size-px: 10px;
$size-em: 2em;

.container {
  width: $size-px + $size-em;  // 에러 발생
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`px`}),`와`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`em`}),`처럼`,` `,(0,o.jsx)(`b`,{children:`다른 단위는 직접 연산할 수 없습니다`}),`.`,(0,o.jsx)(`br`,{}),`이런 경우 CSS의 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`calc()`}),` 함수를 사용해야 합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`호환 가능한 단위`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`일부 단위는 `,(0,o.jsx)(`b`,{children:`호환되어 연산이 가능`}),`합니다.`]}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`단위 그룹`}),(0,o.jsx)(`li`,{className:`cell content`,children:`호환 단위`}),(0,o.jsx)(`li`,{className:`cell content`,children:`설명`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`절대 길이`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`호환 단위`,children:[(0,o.jsx)(`code`,{children:`px`}),`, `,(0,o.jsx)(`code`,{children:`cm`}),`, `,(0,o.jsx)(`code`,{children:`mm`}),`,`,` `,(0,o.jsx)(`code`,{children:`in`}),`, `,(0,o.jsx)(`code`,{children:`pt`}),`, `,(0,o.jsx)(`code`,{children:`pc`})]}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`설명`,children:`절대 길이 단위끼리는 연산 가능`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`상대 길이`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`호환 단위`,children:[(0,o.jsx)(`code`,{children:`em`}),`, `,(0,o.jsx)(`code`,{children:`rem`}),`, `,(0,o.jsx)(`code`,{children:`%`})]}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`설명`,children:`상대 길이 단위끼리는 연산 가능`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`혼합`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`호환 단위`,children:`절대 길이와 상대 길이는 연산 불가`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`설명`,children:[(0,o.jsx)(`code`,{children:`px + em`}),` 같은 연산은 불가능`]})]})]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`나눗셈 연산의 특수성`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`나눗셈 연산은 `,(0,o.jsx)(`b`,{children:`특별한 주의가 필요`}),`합니다.`,(0,o.jsx)(`br`,{}),`CSS의 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`font: 12px/1.5`}),` 같은 문법과 충돌할 수 있기 때문입니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`나눗셈이 연산으로 인식되지 않는 경우`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`나눗셈은 `,(0,o.jsx)(`b`,{children:`특정 조건에서만 연산으로 인식`}),`됩니다.`]}),(0,o.jsx)(i,{title:`나눗셈 인식 조건`,language:`css`,className:`mt_m`,children:`$base-size: 16px;

// 연산으로 인식됨
.text {
  font-size: $base-size / 2;        // ✅ 변수와 함께 사용
  padding: (20px / 2);              // ✅ 괄호 사용
  margin: 24px / 2;                 // ✅ 단위가 있는 값
}

// 연산으로 인식 안 됨 (CSS 문법으로 해석)
.text {
  font: 12px/1.5;                   // ❌ CSS의 font 문법 (font-size, line-height의 shorthand 선언)
  border-radius: 10px / 5px;        // ❌ CSS의 border-radius 문법 (가로 / 세로 반지름)
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`나눗셈을 연산으로 사용하려면`,` `,(0,o.jsx)(`b`,{children:`변수와 함께 사용하거나 괄호로 감싸야`}),` 합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`안전한 나눗셈 사용법`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`나눗셈을 안전하게 사용하는 방법을 알아봅니다.`}),(0,o.jsx)(i,{title:`안전한 나눗셈 사용법`,language:`css`,className:`mt_m`,children:`$base-size: 16px;
$half-size: $base-size / 2;  // 변수에 저장

.text {
  // 방법 1: 변수 사용
  font-size: $half-size;

  // 방법 2: 괄호 사용
  padding: (20px / 2);

  // 방법 3: 변수와 직접 연산
  margin: $base-size / 2;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`가장 안전한 방법은 `,(0,o.jsx)(`b`,{children:`나눗셈 결과를 변수에 저장`}),`하거나`,` `,(0,o.jsx)(`b`,{children:`괄호로 명확히 표시`}),`하는 것입니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`calc() 함수와의 차이`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`SCSS 연산과 CSS의 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`calc()`}),` 함수는`,` `,(0,o.jsx)(`b`,{children:`다른 방식으로 동작`}),`합니다.`,(0,o.jsx)(`br`,{}),`두 방식을 언제 선택해야 하는지 알면, 브라우저에서만 가능한 계산과 `,(0,o.jsx)(`b`,{children:`빌드 타임에 미리 처리해 둘 계산`}),`을 깔끔하게 나눌 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`SCSS 연산 vs calc()`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`두 방식의 차이를 비교해봅니다.`}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`구분`}),(0,o.jsx)(`li`,{className:`cell content`,children:`SCSS 연산`}),(0,o.jsx)(`li`,{className:`cell content`,children:`calc()`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`처리 시점`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`SCSS 연산`,children:`컴파일 시점 (빌드 타임)`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`calc()`,children:`런타임 (브라우저에서 실행)`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`단위 제한`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`SCSS 연산`,children:`같은 단위끼리만 연산 가능`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`calc()`,children:`다른 단위도 연산 가능 (px + %, em + rem 등)`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`결과`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`SCSS 연산`,children:`계산된 값이 CSS에 포함`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`calc()`,children:`calc() 표현식이 CSS에 그대로 유지`})]})]})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`calc() 사용 예시`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다른 단위를 연산해야 할 때는 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`calc()`}),`를 사용합니다.`]}),(0,o.jsx)(i,{title:`calc() 사용 예시`,language:`css`,className:`mt_m`,children:`$sidebar-width: 300px;

.main-content {
  // SCSS 연산 불가능 (px와 %는 다른 단위)
  // width: 100% - $sidebar-width;  // 에러

  // calc() 사용
  width: calc(100% - #{$sidebar-width});
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`SCSS 변수를 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`calc()`}),` 안에서 사용할 때는`,` `,(0,o.jsxs)(`b`,{children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`인터폴레이션`}),`(`,(0,o.jsx)(`code`,{className:`t_blue`,children:`#{}`}),`)을 사용해야 합니다.`]})]}),(0,o.jsxs)(`p`,{className:`mt_ms ex_box`,children:[(0,o.jsx)(`b`,{className:`t_blue`,children:`인터폴레이션`}),`을 사용해야 하는 이유에 대해서는 아래 `,(0,o.jsx)(`b`,{className:`t_blue`,children:`[인터폴레이션 사용]`}),` 섹션에서 자세히 설명합니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`일반적인 실수와 해결 방법`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`단위 연산 시 자주 발생하는 `,(0,o.jsx)(`b`,{children:`실수와 그 해결 방법`}),`을 정리합니다.`,(0,o.jsx)(`br`,{}),`실제 프로젝트에서 자주 마주치는 에러 패턴을 미리 알아두면, 나중에 같은 문제가 생겼을 때 `,(0,o.jsx)(`b`,{children:`어디부터 의심해야 하는지`}),`를 빠르게 떠올릴 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`곱셈에서 두 값 모두 단위를 가진 경우`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`곱셈은 `,(0,o.jsx)(`b`,{children:`하나의 값만 단위를 가져야`}),` 합니다.`]}),(0,o.jsx)(i,{title:`잘못된 곱셈`,language:`css`,className:`mt_m`,children:`// 에러 발생
width: 10px * 5px;  // ❌ 둘 다 단위가 있음`}),(0,o.jsx)(i,{title:`올바른 곱셈`,language:`css`,className:`mt_m`,children:`// 올바른 방법
width: 10px * 5;    // ✅ 하나만 단위
width: 10 * 5px;    // ✅ 하나만 단위`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`나눗셈에서 CSS 문법과 충돌`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`나눗셈이 CSS 문법으로 해석되는 경우입니다.`}),(0,o.jsx)(i,{title:`나눗셈 충돌 예시`,language:`css`,className:`mt_m`,children:`// CSS 문법으로 해석됨 (연산 아님)
.text {
  font: 12px/1.5;  // CSS의 font 문법  (font-size, line-height의 shorthand 선언)
}

// 연산으로 인식하려면
.text {
  font-size: (12px / 1.5);  // 괄호 사용 (12px ÷ 1.5) = 8px
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`퍼센트와 다른 단위 연산`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`퍼센트는 `,(0,o.jsx)(`b`,{children:`다른 단위와 직접 연산할 수 없습니다`}),`.`]}),(0,o.jsx)(i,{title:`퍼센트 연산 에러`,language:`css`,className:`mt_m`,children:`// 에러 발생
width: 50% + 20px;  // X: 퍼센트와 px는 연산 불가`}),(0,o.jsx)(i,{title:`calc() 사용`,language:`css`,className:`mt_m`,children:`$padding: 20px;

.container {
  // calc() 사용
  width: calc(50% + #{$padding});
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`0 값의 단위 처리`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`0`}),` 값은 `,(0,o.jsx)(`b`,{children:`단위가 없어도 됩니다`}),`.`]}),(0,o.jsx)(i,{title:`0 값 처리`,language:`css`,className:`mt_m`,children:`// 둘 다 동일하게 동작
.container {
  margin: 0;
  margin: 0px;
}

// 연산에서도 0은 단위 없이 사용 가능
$base: 16px;
.container {
  padding: $base - 0;  // 16px
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`인터폴레이션 사용`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`인터폴레이션(`,(0,o.jsx)(`code`,{className:`t_blue`,children:`#{}`}),`)은`,` `,(0,o.jsx)(`b`,{children:`SCSS 변수를 문자열이나 특정 문맥에서 사용`}),`할 때 필요한 문법입니다.`,(0,o.jsx)(`br`,{}),`일반적인 CSS 속성 값에서는 변수를 그대로 사용할 수 있지만,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`calc()`}),` 함수나 문자열, 선택자, 속성명 등에서는 `,(0,o.jsx)(`b`,{children:`인터폴레이션을 사용해야`}),` 변수가 올바르게 해석됩니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`인터폴레이션이란?`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`인터폴레이션은 `,(0,o.jsx)(`b`,{children:`변수 값을 문자열로 변환하여 삽입`}),`하는 기능입니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`code`,{className:`t_blue`,children:`#{$variable}`}),` 형태로 사용하며, 변수의 값을 그대로 텍스트로 치환합니다.`]}),(0,o.jsx)(i,{title:`인터폴레이션 기본 개념`,language:`css`,className:`mt_m`,children:`$size: 16px;

// 일반적인 사용 (인터폴레이션 불필요)
.text {
  font-size: $size;  // 16px (정상 작동)
}

// calc() 안에서 사용 (인터폴레이션 필요)
.container {
  width: calc(100% - #{$size});  // calc(100% - 16px)
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`일반 CSS 속성에서는 변수를 그대로 사용해도 되지만,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`calc()`}),` 같은 함수 안에서는`,` `,(0,o.jsx)(`b`,{children:`인터폴레이션이 필요`}),`합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`인터폴레이션이 필요한 이유`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`인터폴레이션을 사용하지 않으면 `,(0,o.jsx)(`b`,{children:`SCSS가 변수를 연산으로 해석`}),`하려고 시도하거나, `,(0,o.jsx)(`b`,{children:`문법 오류가 발생`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`인터폴레이션 없이 사용 (❌ 에러)`,language:`css`,className:`mt_m`,children:`$size: 16px;

.container {
  // ❌ 에러: SCSS가 연산으로 해석하려고 시도
  width: calc(100% - $size);
}`}),(0,o.jsx)(i,{title:`인터폴레이션 사용 (✅ 정상)`,language:`css`,className:`mt_m`,children:`$size: 16px;

.container {
  // ✅ 정상: 변수 값이 문자열로 삽입됨
  width: calc(100% - #{$size});
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.container {
  width: calc(100% - 16px);
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`인터폴레이션을 사용하면 `,(0,o.jsx)(`b`,{children:`변수 값이 그대로 문자열로 치환`}),`되어`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`calc()`}),` 함수에 올바르게 전달됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`인터폴레이션이 필요한 경우`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음과 같은 경우에는 `,(0,o.jsx)(`b`,{children:`반드시 인터폴레이션을 사용`}),`해야 합니다.`]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn t_blue`,children:`calc() 함수 안에서 사용`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`calc()`}),` 함수 안에서는 변수를 직접 사용할 수 없고, `,(0,o.jsx)(`b`,{children:`인터폴레이션으로 변수 값을 문자열로 변환`}),`해야 합니다.`]}),(0,o.jsx)(i,{title:`calc() 함수 안에서 사용`,language:`css`,className:`mt_m`,children:`$size: 16px;
$padding: 20px;

.container {
  width: calc(100% - #{$size} - #{$padding});
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn t_blue`,children:`문자열 안에서 사용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`문자열 안에서 변수를 사용할 때는`,` `,(0,o.jsx)(`b`,{children:`인터폴레이션으로 변수 값을 텍스트로 삽입`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`문자열 안에서 사용`,language:`css`,className:`mt_m`,children:`$size: 16px;
$color: #0a58ca;

.element::before {
  content: "#{$size} 크기의 텍스트";
  background-image: url("image-#{$color}.png");
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.element::before {
  content: "16px 크기의 텍스트";
  background-image: url("image-#0a58ca.png");
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn t_blue`,children:`선택자 안에서 사용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`선택자 이름이나 미디어 쿼리 조건에서 변수를 사용할 때도`,` `,(0,o.jsx)(`b`,{children:`인터폴레이션이 필요`}),`합니다.`]}),(0,o.jsx)(i,{title:`선택자 안에서 사용`,language:`css`,className:`mt_m`,children:`$size: 16px;
$breakpoint: md;

.element-#{$size} {
  padding: $size;
}

@media (min-width: #{$breakpoint}) {
  .container { width: 100%; }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.element-16px {
  padding: 16px;
}

@media (min-width: md) {
  .container { width: 100%; }
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn t_blue`,children:`속성명에서 사용`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`속성명을 변수로 만들 때도 `,(0,o.jsx)(`b`,{children:`인터폴레이션을 사용`}),`해야 합니다.`]}),(0,o.jsx)(i,{title:`속성명에서 사용`,language:`css`,className:`mt_m`,children:`$property: margin;

.container {
  #{$property}: 16px;
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.container {
  margin: 16px;
}`})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`인터폴레이션 사용 시 주의사항`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`인터폴레이션을 사용할 때 주의해야 할 점들을 알아봅니다.`}),(0,o.jsx)(i,{title:`인터폴레이션 주의사항`,language:`css`,className:`mt_m`,children:`$size: 16px;

// ✅ 올바른 사용
.container {
  width: calc(100% - #{$size});
}

// ❌ 잘못된 사용: 인터폴레이션 안에서 연산 불가
.container {
  width: calc(100% - #{$size * 2});  // 에러
}

// ✅ 해결 방법: 연산을 먼저 수행
$double-size: $size * 2;
.container {
  width: calc(100% - #{$double-size});
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`인터폴레이션 안에서는 `,(0,o.jsx)(`b`,{children:`연산을 직접 수행할 수 없습니다`}),`.`,(0,o.jsx)(`br`,{}),`연산이 필요한 경우 `,(0,o.jsx)(`b`,{children:`변수에 먼저 계산한 값을 저장`}),`한 후 인터폴레이션으로 사용해야 합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`인터폴레이션 vs 일반 변수 사용`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`언제 인터폴레이션을 사용하고, 언제 일반 변수를 사용하는지 비교해봅니다.`}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`사용 위치`}),(0,o.jsx)(`li`,{className:`cell content`,children:`일반 변수`}),(0,o.jsx)(`li`,{className:`cell content`,children:`인터폴레이션`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`일반 CSS 속성 값`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`일반 변수`,children:[(0,o.jsx)(`code`,{children:`$size`}),` ✅`]}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`인터폴레이션`,children:[(0,o.jsx)(`code`,{children:`#{$size}`}),` (불필요하지만 가능)`]})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`calc() 함수`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`일반 변수`,children:[(0,o.jsx)(`code`,{children:`$size`}),` ❌ 에러`]}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`인터폴레이션`,children:[(0,o.jsx)(`code`,{children:`#{$size}`}),` ✅ 필수`]})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`문자열 안`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`일반 변수`,children:[(0,o.jsx)(`code`,{children:`$size`}),` ❌ 에러`]}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`인터폴레이션`,children:[(0,o.jsx)(`code`,{children:`#{$size}`}),` ✅ 필수`]})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`선택자`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`일반 변수`,children:[(0,o.jsx)(`code`,{children:`$size`}),` ❌ 에러`]}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`인터폴레이션`,children:[(0,o.jsx)(`code`,{children:`#{$size}`}),` ✅ 필수`]})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`속성명`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`일반 변수`,children:[(0,o.jsx)(`code`,{children:`$property`}),` ❌ 에러`]}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`인터폴레이션`,children:[(0,o.jsx)(`code`,{children:`#{$property}`}),` ✅ 필수`]})]})]})]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`일반 CSS 속성 값에서는 변수를 그대로 사용하는 것이 일반적이지만,`,` `,(0,o.jsx)(`b`,{children:`특수한 문맥에서는 인터폴레이션이 필수`}),`입니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`모범 사례`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`단위 연산을 안전하고 효율적으로 사용하기 위한 `,(0,o.jsx)(`b`,{children:`모범 사례`}),`를 정리합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`같은 단위 사용하기`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`가능하면 `,(0,o.jsx)(`b`,{children:`같은 단위를 사용`}),`하여 연산하는 것이 가장 안전합니다.`]}),(0,o.jsx)(i,{title:`같은 단위 사용 예시`,language:`css`,className:`mt_m`,children:`// 좋은 예시: 모두 px 사용
$base: 16px;
$padding: 8px;
$margin: 24px;

.container {
  padding: $base + $padding;  // 24px
  margin: $margin;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`괄호로 명확히 표시`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`복잡한 연산은 `,(0,o.jsx)(`b`,{children:`괄호로 우선순위를 명확히`}),` 표시합니다.`]}),(0,o.jsx)(i,{title:`괄호 사용 예시`,language:`css`,className:`mt_m`,children:`$base: 16px;

.container {
  padding: ($base + 8px) * 2;  // 명확한 우선순위
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`calc()와 SCSS 연산 조합`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`필요한 경우 `,(0,o.jsx)(`b`,{children:`SCSS 연산과 calc()를 함께 사용`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`조합 사용 예시`,language:`css`,className:`mt_m`,children:`$base: 16px;
$padding: $base * 2;  // SCSS 연산

.container {
  width: calc(100% - #{$padding});  // calc() 사용
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`단위 연산 시 주의사항에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`단위 호환성`}),`: 같은 단위끼리만 연산 가능, 다른 단위는`,` `,(0,o.jsx)(`code`,{children:`calc()`}),` 사용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`나눗셈 특수성`}),`: 변수와 함께 사용하거나 괄호로 감싸야 연산으로 인식`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`calc()와의 차이`}),`: SCSS 연산은 컴파일 시점, calc()는 런타임`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`일반적인 실수`}),`: 곱셈에서 두 값 모두 단위, 나눗셈 충돌, 퍼센트 연산 등`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`인터폴레이션`}),`: calc()나 문자열에서 변수 사용 시`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`#{}`}),` 필요`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`모범 사례`}),`: 같은 단위 사용, 괄호로 명확히 표시, calc()와 조합`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`SCSS의 기본 내장 함수`}),`에 대해 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/05_scss_02.png`,alt:`단위 사용 시 주의사항`}),(0,o.jsx)(`figcaption`,{children:`단위 사용 시 주의사항`})]})]})}export{l as default,a as t};