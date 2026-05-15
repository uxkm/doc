import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`SCSS에서 가능한 연산 (+, -, *, /)`,description:`SCSS에서 사용할 수 있는 산술 연산자를 상세히 알아봅니다. 덧셈, 뺄셈, 곱셈, 나눗셈의 사용법, 다양한 단위 연산, 연산 우선순위, 실제 활용 예시를 단계별로 설명합니다.`,keyword:`scss 연산, scss 산술 연산, scss +, scss -, scss *, scss /, scss 계산, scss 수학 연산`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`SCSS는 `,(0,o.jsx)(`b`,{children:`산술 연산(덧셈, 뺄셈, 곱셈, 나눗셈)`}),`을 지원합니다.`,(0,o.jsx)(`br`,{}),`변수와 연산을 함께 사용하면 `,(0,o.jsx)(`b`,{children:`동적으로 값을 계산`}),`하여 스타일을 작성할 수 있어, 일관된 디자인 시스템을 구축하는 데 유용합니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 SCSS의 산술 연산자 사용법, 다양한 단위 연산, 연산 우선순위, 그리고 실제 프로젝트에서 활용하는 예시를 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`SCSS 연산이란?`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`SCSS 연산은 `,(0,o.jsx)(`b`,{children:`컴파일 시점에 수학적 계산을 수행`}),`하여 최종 CSS 값으로 변환합니다.`,(0,o.jsx)(`br`,{}),`변수와 함께 사용하면 `,(0,o.jsx)(`b`,{children:`관계 있는 값들을 자동으로 계산`}),`할 수 있어 유지보수가 편리합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`연산의 기본 개념`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`SCSS에서는 `,(0,o.jsx)(`b`,{children:`산술 연산자를 사용하여 값을 계산`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`기본 연산 예시`,language:`css`,className:`mt_m`,children:`$base-size: 16px;

.container {
  width: $base-size * 2;        // 32px (곱하기)
  height: $base-size + 8px;     // 24px (더하기)
  padding: $base-size / 2;      // 8px  (나누기)
  margin: $base-size - 4px;     // 12px (빼기)
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.container {
  width: 32px;
  height: 24px;
  padding: 8px;
  margin: 12px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`연산은 `,(0,o.jsx)(`b`,{children:`컴파일 시점에 계산`}),`되어 최종 CSS에는 계산된 값만 들어갑니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`산술 연산자`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`SCSS에서 사용할 수 있는 `,(0,o.jsx)(`b`,{children:`네 가지 기본 산술 연산자`}),`를 알아봅니다.`,(0,o.jsx)(`br`,{}),`여기서 다루는 연산자는 간격, 너비, 폰트 크기 등을`,` `,(0,o.jsx)(`b`,{children:`규칙적으로 계산·관리`}),`할 때 가장 자주 사용되는 도구입니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`덧셈 (+)`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`덧셈 연산자는 `,(0,o.jsx)(`b`,{children:`두 값을 더합니다`}),`.`]}),(0,o.jsx)(i,{title:`덧셈 연산 예시`,language:`css`,className:`mt_m`,children:`$spacing-sm: 8px;
$spacing-md: 16px;

.card {
  padding: $spacing-sm + $spacing-md;  // 24px
  margin-top: 10px + 5px;              // 15px
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`덧셈은 `,(0,o.jsx)(`b`,{children:`같은 단위끼리만 가능`}),`합니다.`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`10px + 5`}),`처럼`,` `,(0,o.jsx)(`b`,{className:`t_red`,children:`단위가 다르면 에러가 발생`}),`합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`뺄셈 (-)`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`뺄셈 연산자는 `,(0,o.jsx)(`b`,{children:`두 값의 차이를 계산`}),`합니다.`]}),(0,o.jsx)(i,{title:`뺄셈 연산 예시`,language:`css`,className:`mt_m`,children:`$container-width: 1200px;
$sidebar-width: 300px;

.main-content {
  width: $container-width - $sidebar-width;  // 900px
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`뺄셈도 `,(0,o.jsx)(`b`,{children:`같은 단위끼리만 가능`}),`합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`곱셈 (*)`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`곱셈 연산자는 `,(0,o.jsx)(`b`,{children:`두 값을 곱합니다`}),`.`]}),(0,o.jsx)(i,{title:`곱셈 연산 예시`,language:`css`,className:`mt_m`,children:`$base-spacing: 8px;

.card {
  padding: $base-spacing * 2;   // 16px
  margin: $base-spacing * 3;    // 24px
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`곱셈은 `,(0,o.jsx)(`b`,{children:`하나의 값만 단위를 가져야 합니다`}),`.`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`10px * 5px`}),`처럼`,` `,(0,o.jsx)(`b`,{className:`t_red`,children:`둘 다 단위가 있으면 에러가 발생`}),`합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`나눗셈 (/)`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`나눗셈 연산자는 `,(0,o.jsx)(`b`,{children:`두 값을 나눕니다`}),`.`,(0,o.jsx)(`br`,{}),`나눗셈은 CSS의 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`font: 12px/1.5`}),` 같은 문법과 충돌할 수 있어 주의가 필요합니다.`]}),(0,o.jsx)(i,{title:`나눗셈 연산 예시`,language:`css`,className:`mt_m`,children:`$base-size: 16px;

.text {
  font-size: $base-size / 2;    // 8px
  padding: (20px / 2);          // 10px (괄호 필요)
  margin: (24px / 2);           // 12px
}`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`나눗셈을 사용할 때는 `,(0,o.jsx)(`b`,{children:`괄호로 감싸거나 변수와 함께 사용`}),`해야 SCSS가 연산으로 인식합니다.`,(0,o.jsx)(`br`,{}),`그렇지 않으면 CSS의 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`/`}),` 문법으로 해석될 수 있습니다.`]}),(0,o.jsx)(i,{title:`괄호가 필요한 이유`,language:`css`,className:`mt_m`,children:`// ❌ 잘못된 예시: CSS 문법으로 해석됨
.text {
  font: 12px / 1.5 Arial;        // CSS font shorthand (정상)
  padding: 20px / 2;             // 에러! CSS 문법으로 해석됨
  line-height: 16px / 2;         // 에러! CSS 문법으로 해석됨
}

// ✅ 올바른 예시: 괄호로 연산임을 명시
.text {
  padding: (20px / 2);           // 10px (연산으로 인식)
  line-height: (16px / 2);       // 8px (연산으로 인식)
}

// ✅ 올바른 예시: 변수와 함께 사용하면 괄호 불필요
$base-size: 16px;
.text {
  font-size: $base-size / 2;     // 8px (변수가 있으면 연산으로 인식)
}`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`SCSS는 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`/`}),` 기호를 만나면`,` `,(0,o.jsx)(`b`,{children:`CSS의 문법인지 연산인지 자동으로 판단`}),`합니다.`,(0,o.jsx)(`br`,{}),`하지만 `,(0,o.jsx)(`b`,{children:`숫자만 나열된 경우`}),`(예:`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`20px / 2`}),`)는 CSS의`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`font: 12px/1.5`}),` 같은 문법과 혼동될 수 있어 `,(0,o.jsx)(`b`,{className:`t_red`,children:`연산으로 인식하지 않습니다`}),`.`]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`b`,{children:`괄호를 사용하면`}),` SCSS가 명확하게 `,(0,o.jsx)(`b`,{children:`"이것은 연산이다"`}),`라고 인식할 수 있습니다.`,(0,o.jsx)(`br`,{}),`또한 `,(0,o.jsx)(`b`,{children:`변수와 함께 사용`}),`하면(예:`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`$base-size / 2`}),`) 변수가 포함되어 있어 CSS 문법이 아니라는 것을 자동으로 판단하므로 괄호 없이도 연산으로 인식됩니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`다양한 단위 연산`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`SCSS는 `,(0,o.jsx)(`b`,{children:`다양한 단위 간 연산`}),`을 지원합니다.`,(0,o.jsx)(`br`,{}),`픽셀, 퍼센트, 단위 없는 숫자를 함께 사용할 때 어떤 제약이 있는지 이해해 두면, `,(0,o.jsx)(`b`,{children:`의도치 않은 계산 결과나 에러`}),`를 미리 막을 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`같은 단위 연산`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`가장 안전한 방법은 `,(0,o.jsx)(`b`,{children:`같은 단위끼리 연산`}),`하는 것입니다.`]}),(0,o.jsx)(i,{title:`같은 단위 연산`,language:`css`,className:`mt_m`,children:`$spacing-sm: 8px;
$spacing-md: 16px;

.container {
  padding: $spacing-sm + $spacing-md;  // 24px
  margin: $spacing-md - $spacing-sm;   // 8px
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`퍼센트 연산`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`퍼센트와 다른 단위를 연산할 수 있습니다.`}),(0,o.jsx)(i,{title:`퍼센트 연산 예시`,language:`css`,className:`mt_m`,children:`.container {
  width: 50% + 20px;        // ❌ 에러 발생
  width: calc(50% + 20px);  // ✅ CSS calc() 사용
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`퍼센트와 다른 단위를 직접 연산할 수는 없지만,`,` `,(0,o.jsxs)(`b`,{children:[`CSS의 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`calc()`}),` 함수`]}),`를 사용하면 됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`단위 없는 숫자 연산`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`단위 없는 숫자(예: `,(0,o.jsx)(`code`,{className:`t_blue`,children:`1.5`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`2`}),`)는 `,(0,o.jsx)(`b`,{children:`다른 단위와 연산`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`단위 없는 숫자 연산`,language:`css`,className:`mt_m`,children:`$base-size: 16px;
$line-height: 1.5;

.text {
  font-size: $base-size;
  line-height: $line-height;  // 1.5 (단위 없음)
  padding: $base-size * 1.5;  // 24px
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`연산 우선순위`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`여러 연산이 함께 사용될 때 `,(0,o.jsx)(`b`,{children:`연산 우선순위`}),`를 이해하는 것이 중요합니다. SCSS의 연산 우선순위는 일반적인`,` `,(0,o.jsx)(`b`,{children:`사칙연산 우선순위와 동일`}),`합니다.`,(0,o.jsx)(`br`,{}),`우선순위를 잘못 이해하면 숫자는 맞는데`,` `,(0,o.jsx)(`b`,{children:`디자인은 어색한 미묘한 버그`}),`가 생기기 쉬우므로, 기본 규칙을 한 번 정리해 두는 것이 좋습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`SCSS 연산 우선순위`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`SCSS 연산은 다음과 같은 우선순위를 가집니다.`}),(0,o.jsx)(`div`,{className:`mt_sm indent_small`,children:(0,o.jsxs)(`ol`,{className:`ol_lst`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`strong`,{children:`괄호 ( )`}),` = 가장 높은 우선순위`]}),(0,o.jsx)(`li`,{children:(0,o.jsx)(`strong`,{children:`곱셈 *, 나눗셈 /`})}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`strong`,{children:`덧셈 +, 뺄셈 -`}),` = 가장 낮은 우선순위`]})]})}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`기본 우선순위 예시`}),(0,o.jsxs)(`p`,{className:`mt_s`,children:[`일반적인 수학 규칙과 동일하게`,` `,(0,o.jsx)(`b`,{children:`곱셈과 나눗셈이 덧셈과 뺄셈보다 우선`}),`합니다.`]}),(0,o.jsx)(i,{title:`연산 우선순위 예시`,language:`css`,className:`mt_ms`,children:`$base: 10px;

.container {
  padding: $base + 5px * 2;  // 20px (5px * 2가 먼저 계산)
  margin: ($base + 5px) * 2; // 30px (괄호 안이 먼저 계산)
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`위 예시에서 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`$base + 5px * 2`}),`는`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`10px + (5px * 2) = 20px`}),`로 계산됩니다.`]})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`우선순위별 상세 예시`}),(0,o.jsx)(`p`,{className:`mt_s`,children:`다양한 연산이 섞여 있을 때의 계산 순서를 확인해봅니다.`}),(0,o.jsx)(i,{title:`우선순위별 예시`,language:`css`,className:`mt_ms`,children:`$base: 16px;
$multiplier: 2;

.element {
  // 1. 괄호가 가장 먼저 계산됨
  padding: ($base + 4px) * $multiplier;
  // 계산: (16px + 4px) * 2 = 40px

  // 2. 곱셈/나눗셈이 덧셈/뺄셈보다 먼저 계산됨
  margin: $base + 4px * $multiplier;
  // 계산: 16px + (4px * 2) = 24px

  // 3. 같은 우선순위는 왼쪽에서 오른쪽으로
  width: $base * 2 / 4 + 8px;
  // 계산: ((16px * 2) / 4) + 8px = 8px + 8px = 16px

  // 4. 괄호로 명확하게 표현하는 것이 좋음
  height: ($base * $multiplier) / 2 - 4px;
  // 계산: ((16px * 2) / 2) - 4px = 16px - 4px = 12px
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`복잡한 연산일수록 `,(0,o.jsx)(`b`,{children:`괄호를 사용하여 우선순위를 명확히`}),` `,`표현하는 것이 좋습니다. 이렇게 하면 코드를 읽는 사람도 의도를 쉽게 이해할 수 있습니다.`]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실제 활용 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`연산을 `,(0,o.jsx)(`b`,{children:`실제 프로젝트에서 활용`}),`하는 예시를 살펴봅니다.`,(0,o.jsx)(`br`,{}),`여기서는 간격, 레이아웃, 타이포그래피처럼 디자인 시스템에서 자주 쓰이는 값들을 연산으로 관리해 `,(0,o.jsx)(`b`,{children:`코드를 어떻게 단순화할 수 있는지`}),`를 확인합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`간격 시스템 구축`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`기본 간격을 기준으로 `,(0,o.jsx)(`b`,{children:`배수 관계의 간격을 자동 계산`}),`합니다.`]}),(0,o.jsx)(i,{title:`간격 시스템 예시`,language:`css`,className:`mt_m`,children:`$base-spacing: 8px;

// 간격 변수 자동 생성
$spacing-1: $base-spacing;        // 8px
$spacing-2: $base-spacing * 2;    // 16px
$spacing-3: $base-spacing * 3;    // 24px
$spacing-4: $base-spacing * 4;    // 32px

.card {
  padding: $spacing-2;           // 16px
  margin-bottom: $spacing-3;     // 24px
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`기본 간격만 변경하면 모든 간격이 자동으로 조정`}),`됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`반응형 컨테이너 너비`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`기본 너비를 기준으로 `,(0,o.jsx)(`b`,{children:`여백을 계산하여 컨테이너 너비를 결정`}),`합니다.`]}),(0,o.jsx)(i,{title:`컨테이너 너비 계산 예시`,language:`css`,className:`mt_m`,children:`$container-max-width: 1200px;
$container-padding: 16px;

.container {
  max-width: $container-max-width;
  width: $container-max-width - ($container-padding * 2);
  padding: 0 $container-padding;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`폰트 크기 스케일`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`기본 폰트 크기를 기준으로 `,(0,o.jsx)(`b`,{children:`비율에 맞춰 폰트 크기를 계산`}),`합니다.`]}),(0,o.jsx)(i,{title:`폰트 크기 스케일 예시`,language:`css`,className:`mt_m`,children:`$font-size-base: 16px;
$scale-factor: 1.25;

.text-sm {
  font-size: $font-size-base / $scale-factor;  // 12.8px
}

.text-base {
  font-size: $font-size-base;  // 16px
}

.text-lg {
  font-size: $font-size-base * $scale-factor;  // 20px
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`SCSS에서 가능한 연산에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`산술 연산자`}),`: 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/) 네 가지 기본 연산 지원`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`단위 연산`}),`: 같은 단위끼리 연산 가능, 단위 없는 숫자는 다른 단위와 연산 가능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`연산 우선순위`}),`: 곱셈/나눗셈이 덧셈/뺄셈보다 우선, 괄호로 명확히 지정 가능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`활용 예시`}),`: 간격 시스템, 컨테이너 너비, 폰트 크기 스케일 등에서 유용`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`단위 연산 시 주의사항`}),`을 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/05_scss_01.png`,alt:`SCSS 연산`}),(0,o.jsx)(`figcaption`,{children:`SCSS 연산`})]})]})}export{l as default,a as t};