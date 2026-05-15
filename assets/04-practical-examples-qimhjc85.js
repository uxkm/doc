import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`연산과 함수를 활용한 스타일 관리 예제`,description:`SCSS의 연산과 함수를 실제 프로젝트에서 활용하는 방법을 상세히 알아봅니다. 간격 시스템, 색상 팔레트 자동 생성, 반응형 타이포그래피, 동적 컴포넌트 스타일 등 실무 예제를 제공합니다.`,keyword:`scss 연산 활용, scss 함수 활용, scss 실무 예제, scss 스타일 관리, scss 디자인 시스템, scss 자동화`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`SCSS의 연산과 함수를 활용하면 `,(0,o.jsx)(`b`,{children:`디자인 시스템을 자동화`}),`하고,`,` `,(0,o.jsx)(`b`,{children:`관계 있는 값들을 동적으로 계산`}),`할 수 있습니다.`,(0,o.jsx)(`br`,{}),`기본 값만 정의하면 나머지는 자동으로 계산되어, 유지보수가 훨씬 편해집니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 연산과 함수를 활용한 실무 예제를 단계별로 상세히 살펴보고, 각 예제가 어떻게 동작하는지, 어떤 장점이 있는지 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`간격 시스템 자동 생성`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`기본 간격을 기준으로 `,(0,o.jsx)(`b`,{children:`배수 관계의 간격을 자동으로 생성`}),`하는 시스템을 만들어봅니다.`,(0,o.jsx)(`br`,{}),`한두 개의 기준 값만 정해 두고 나머지는 연산으로 계산하면,`,` `,(0,o.jsx)(`b`,{children:`디자인 수정이나 리디자인 시에도 간격을 일관되게 유지`}),`할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`8px 기반 간격 시스템`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`기본 간격 8px를 기준으로`,` `,(0,o.jsx)(`b`,{children:`곱셈 연산을 사용하여 간격 변수를 자동 생성`}),`합니다.`]}),(0,o.jsx)(i,{title:`간격 시스템 자동 생성`,language:`css`,className:`mt_m`,children:`// 기본 간격
$base-spacing: 8px;

// 간격 변수 자동 생성
$spacing-1: $base-spacing;        // 8px
$spacing-2: $base-spacing * 2;    // 16px
$spacing-3: $base-spacing * 3;    // 24px
$spacing-4: $base-spacing * 4;    // 32px
$spacing-5: $base-spacing * 5;    // 40px
$spacing-6: $base-spacing * 6;    // 48px

.card {
  padding: $spacing-2;            // 16px
  margin-bottom: $spacing-3;      // 24px
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`기본 간격만 변경하면 모든 간격이 자동으로 조정`}),`됩니다.`,(0,o.jsx)(`br`,{}),`예를 들어 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`$base-spacing: 4px;`}),`로 변경하면 모든 간격이 절반으로 줄어듭니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`간격 시스템 활용 예시`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`생성한 간격 변수를 실제 컴포넌트에 활용합니다.`}),(0,o.jsx)(i,{title:`간격 시스템 활용`,language:`css`,className:`mt_m`,children:`$spacing-1: 8px;
$spacing-2: 16px;
$spacing-3: 24px;

.card {
  padding: $spacing-2;
  margin-bottom: $spacing-3;

  .card__title {
    margin-bottom: $spacing-1;
  }

  .card__body {
    margin-top: $spacing-1;
  }
}

.button {
  padding: $spacing-1 $spacing-2;
  margin-right: $spacing-1;
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`색상 팔레트 자동 생성`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`기본 색상에서 `,(0,o.jsx)(`b`,{children:`함수를 사용하여 색상 팔레트를 자동 생성`}),`합니다.`,(0,o.jsx)(`br`,{}),`버튼, 배너, 배경 등 여러 컴포넌트에서 같은 규칙으로 밝기·채도를 조절하면, `,(0,o.jsx)(`b`,{children:`디자인 전체의 톤이 자연스럽게 맞춰`}),` 집니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`밝기 변형 자동 생성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`lighten()`}),`과`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`darken()`}),` 함수를 사용하여`,` `,(0,o.jsx)(`b`,{children:`색상 변형을 자동 생성`}),`합니다.`]}),(0,o.jsx)(i,{title:`색상 팔레트 자동 생성`,language:`css`,className:`mt_m`,children:`// 기본 색상
$color-primary: #0a58ca;

// 색상 변형 자동 생성
$color-primary-lighter: lighten($color-primary, 20%);
$color-primary-light: lighten($color-primary, 10%);
$color-primary: $color-primary;  // 기본
$color-primary-dark: darken($color-primary, 10%);
$color-primary-darker: darken($color-primary, 20%);

.button {
  background: $color-primary;
  &:hover {
    background: $color-primary-light;
  }
  &:active {
    background: $color-primary-dark;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면`,` `,(0,o.jsx)(`b`,{children:`기본 색상만 변경하면 모든 변형 색상이 자동으로 조정`}),`됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`투명도 변형 자동 생성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`rgba()`}),` 함수를 사용하여`,` `,(0,o.jsx)(`b`,{children:`투명도가 다른 색상을 자동 생성`}),`합니다.`]}),(0,o.jsx)(i,{title:`투명도 변형 생성`,language:`css`,className:`mt_m`,children:`$color-primary: #0a58ca;

// 투명도 변형
$color-primary-10: rgba($color-primary, 0.1);
$color-primary-20: rgba($color-primary, 0.2);
$color-primary-50: rgba($color-primary, 0.5);
$color-primary-80: rgba($color-primary, 0.8);

.overlay {
  background: $color-primary-50;
}

.text-muted {
  color: $color-primary-80;
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`반응형 타이포그래피`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`연산을 사용하여 `,(0,o.jsx)(`b`,{children:`반응형 폰트 크기를 자동 계산`}),`합니다.`,(0,o.jsx)(`br`,{}),`뷰포트 크기에 따라 제목과 본문 크기를 일정한 비율로 조정하면,`,` `,(0,o.jsx)(`b`,{children:`화면 크기가 달라져도 읽기 좋은 타이포그래피`}),`를 유지할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`비율 기반 폰트 크기`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`기본 폰트 크기를 기준으로 `,(0,o.jsx)(`b`,{children:`비율에 맞춰 폰트 크기를 계산`}),`합니다.`]}),(0,o.jsx)(i,{title:`비율 기반 폰트 크기`,language:`css`,className:`mt_m`,children:`$font-size-base: 16px;
$scale-factor: 1.25;  // 타입 스케일 비율

// 폰트 크기 자동 계산
$font-size-xs: round($font-size-base / ($scale-factor * $scale-factor));
$font-size-sm: round($font-size-base / $scale-factor);
$font-size-base: $font-size-base;
$font-size-lg: round($font-size-base * $scale-factor);
$font-size-xl: round($font-size-base * $scale-factor * $scale-factor);

.text-xs { font-size: $font-size-xs; }
.text-sm { font-size: $font-size-sm; }
.text-base { font-size: $font-size-base; }
.text-lg { font-size: $font-size-lg; }
.text-xl { font-size: $font-size-xl; }`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면`,` `,(0,o.jsx)(`b`,{children:`기본 폰트 크기나 비율만 변경하면 모든 폰트 크기가 자동으로 조정`}),`됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`미디어 쿼리와 연산 조합`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`미디어 쿼리에서도 `,(0,o.jsx)(`b`,{children:`연산을 사용하여 반응형 폰트 크기를 계산`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`반응형 폰트 크기`,language:`css`,className:`mt_m`,children:`$font-size-base: 16px;

.heading {
  font-size: $font-size-base;

  @media (min-width: 768px) {
    font-size: $font-size-base * 1.25;  // 20px
  }

  @media (min-width: 1024px) {
    font-size: $font-size-base * 1.5;  // 24px
  }
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`동적 컴포넌트 스타일`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`연산과 함수를 사용하여 `,(0,o.jsx)(`b`,{children:`컴포넌트 스타일을 동적으로 생성`}),`합니다.`,(0,o.jsx)(`br`,{}),`기본 크기와 색상만 정해 두고 나머지는 계산에 맡기면,`,` `,(0,o.jsx)(`b`,{children:`버튼·카드·배지 등 변형이 많은 컴포넌트도 일관성 있게`}),` 관리할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`버튼 크기 변형 자동 생성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`기본 크기를 기준으로 `,(0,o.jsx)(`b`,{children:`버튼 크기 변형을 자동 계산`}),`합니다.`]}),(0,o.jsx)(i,{title:`버튼 크기 자동 생성`,language:`css`,className:`mt_m`,children:`$button-padding-base: 8px 16px;
$button-font-size-base: 16px;
$scale-factor: 1.2;

.button {
  padding: $button-padding-base;
  font-size: $button-font-size-base;

  // 작은 버튼
  &--small {
    padding: ($button-padding-base * 0.75);
    font-size: round($button-font-size-base / $scale-factor);
  }

  // 큰 버튼
  &--large {
    padding: ($button-padding-base * 1.5);
    font-size: round($button-font-size-base * $scale-factor);
  }
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`카드 간격 자동 계산`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`컨테이너 너비와 카드 개수를 기준으로 `,(0,o.jsx)(`b`,{children:`카드 간격을 자동 계산`}),`합니다.`]}),(0,o.jsx)(i,{title:`카드 간격 자동 계산`,language:`css`,className:`mt_m`,children:`$container-width: 1200px;
$card-width: 280px;
$cards-per-row: 4;
$card-gap: ($container-width - ($card-width * $cards-per-row)) / ($cards-per-row - 1);

.card-grid {
  display: grid;
  grid-template-columns: repeat($cards-per-row, $card-width);
  gap: $card-gap;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면`,` `,(0,o.jsx)(`b`,{children:`컨테이너 너비나 카드 개수가 변경되어도 간격이 자동으로 조정`}),`됩니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`복합 활용 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`연산과 함수를 `,(0,o.jsx)(`b`,{children:`복합적으로 활용`}),`하는 고급 예시를 살펴봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`그림자 시스템 자동 생성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`기본 그림자를 기준으로 `,(0,o.jsx)(`b`,{children:`크기별 그림자를 자동 생성`}),`합니다.`]}),(0,o.jsx)(i,{title:`그림자 시스템 자동 생성`,language:`css`,className:`mt_m`,children:`$shadow-base-x: 0;
$shadow-base-y: 4px;
$shadow-base-blur: 6px;
$shadow-base-spread: 0;
$shadow-color: rgba(0, 0, 0, 0.1);

// 그림자 크기별 자동 생성
$shadow-sm: $shadow-base-x $shadow-base-y ($shadow-base-blur / 2) $shadow-base-spread $shadow-color;
$shadow-md: $shadow-base-x $shadow-base-y $shadow-base-blur $shadow-base-spread $shadow-color;
$shadow-lg: $shadow-base-x ($shadow-base-y * 2) ($shadow-base-blur * 2) $shadow-base-spread $shadow-color;

.card {
  box-shadow: $shadow-md;
}

.modal {
  box-shadow: $shadow-lg;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`테두리 반경 시스템`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`기본 반경을 기준으로 `,(0,o.jsx)(`b`,{children:`크기별 테두리 반경을 자동 생성`}),`합니다.`]}),(0,o.jsx)(i,{title:`테두리 반경 시스템`,language:`css`,className:`mt_m`,children:`$border-radius-base: 4px;

// 테두리 반경 자동 생성
$border-radius-sm: $border-radius-base / 2;  // 2px
$border-radius-md: $border-radius-base;      // 4px
$border-radius-lg: $border-radius-base * 2;  // 8px
$border-radius-xl: $border-radius-base * 3;  // 12px

.button {
  border-radius: $border-radius-md;
}

.card {
  border-radius: $border-radius-lg;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`전환 시간 시스템`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`기본 전환 시간을 기준으로 `,(0,o.jsx)(`b`,{children:`속도별 전환 시간을 자동 생성`}),`합니다.`]}),(0,o.jsx)(i,{title:`전환 시간 시스템`,language:`css`,className:`mt_m`,children:`$transition-base: 0.3s;

// 전환 시간 자동 생성
$transition-fast: $transition-base / 2;   // 0.15s
$transition-normal: $transition-base;       // 0.3s
$transition-slow: $transition-base * 2;    // 0.6s

.button {
  transition: background $transition-normal;
}

.tooltip {
  transition: opacity $transition-fast;
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실무 통합 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`연산과 함수를 `,(0,o.jsx)(`b`,{children:`종합적으로 활용`}),`한 실무 예시를 살펴봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`완전한 디자인 토큰 시스템`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`연산과 함수를 사용하여 `,(0,o.jsx)(`b`,{children:`완전히 자동화된 디자인 토큰 시스템`}),`을 구축합니다.`]}),(0,o.jsx)(i,{title:`디자인 토큰 시스템`,language:`css`,className:`mt_m`,children:`// ============================================
// 기본 값 정의
// ============================================
$base-spacing: 8px;
$base-font-size: 16px;
$color-primary: #0a58ca;
$scale-factor: 1.25;

// ============================================
// 간격 시스템 (자동 생성)
// ============================================
$spacing-1: $base-spacing;
$spacing-2: $base-spacing * 2;
$spacing-3: $base-spacing * 3;
$spacing-4: $base-spacing * 4;

// ============================================
// 색상 팔레트 (자동 생성)
// ============================================
$color-primary-light: lighten($color-primary, 10%);
$color-primary-dark: darken($color-primary, 10%);
$color-primary-alpha: rgba($color-primary, 0.1);

// ============================================
// 폰트 크기 (자동 생성)
// ============================================
$font-size-sm: round($base-font-size / $scale-factor);
$font-size-base: $base-font-size;
$font-size-lg: round($base-font-size * $scale-factor);

// ============================================
// 컴포넌트 스타일
// ============================================
.button {
  padding: $spacing-1 $spacing-2;
  font-size: $font-size-base;
  background: $color-primary;
  border-radius: $spacing-1;

  &:hover {
    background: $color-primary-light;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 구성하면`,` `,(0,o.jsx)(`b`,{children:`기본 값만 변경하면 전체 디자인 시스템이 자동으로 조정`}),`됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`반응형 그리드 시스템`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`연산을 사용하여 `,(0,o.jsx)(`b`,{children:`반응형 그리드 간격을 자동 계산`}),`합니다.`]}),(0,o.jsx)(i,{title:`반응형 그리드 시스템`,language:`css`,className:`mt_m`,children:`$container-width: 1200px;
$grid-columns: 12;
$grid-gap: 24px;

// 컬럼 너비 자동 계산
$column-width: ($container-width - ($grid-gap * ($grid-columns - 1))) / $grid-columns;

.grid {
  display: grid;
  grid-template-columns: repeat($grid-columns, $column-width);
  gap: $grid-gap;
}

.col-6 {
  grid-column: span 6;
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,"data-conlist":`false`,children:`연산과 함수 활용의 장점`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`연산과 함수를 활용하면 얻을 수 있는 `,(0,o.jsx)(`b`,{children:`주요 장점`}),`을 정리합니다.`]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`자동화와 일관성`}),(0,o.jsxs)(`dd`,{children:[`기본 값만 정의하면 `,(0,o.jsx)(`b`,{children:`관계 있는 값들이 자동으로 계산`}),`되어 일관성이 유지됩니다.`]}),(0,o.jsxs)(`dd`,{children:[`예를 들어 기본 간격을 변경하면 모든 간격이 자동으로 조정되므로,`,` `,(0,o.jsx)(`b`,{children:`수동으로 여러 값을 수정할 필요가 없습니다`}),`.`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`유지보수성 향상`}),(0,o.jsxs)(`dd`,{children:[`값들 간의 관계가 `,(0,o.jsx)(`b`,{children:`코드로 명확하게 표현`}),`되어 나중에 수정할 때도 이해하기 쉽습니다.`]}),(0,o.jsxs)(`dd`,{children:[`"큰 간격은 기본 간격의 3배"라는 관계가 코드에 드러나 있어, `,(0,o.jsx)(`b`,{children:`디자인 변경 시에도 빠르게 대응`}),`할 수 있습니다.`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`디자인 시스템 구축`}),(0,o.jsxs)(`dd`,{children:[`연산과 함수를 활용하면 `,(0,o.jsx)(`b`,{children:`체계적인 디자인 시스템을 구축`}),`할 수 있습니다.`]}),(0,o.jsxs)(`dd`,{children:[`모든 값이 기본 값에서 파생되므로,`,` `,(0,o.jsx)(`b`,{children:`디자인 토큰을 체계적으로 관리`}),`할 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`주의사항`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`연산과 함수를 활용할 때 `,(0,o.jsx)(`b`,{children:`주의해야 할 사항`}),`들을 정리합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`과도한 자동화 피하기`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`모든 것을 자동화할 필요는 없습니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`b`,{children:`의미 있는 관계가 있는 값들만 연산으로 연결`}),`하는 것이 좋습니다.`]}),(0,o.jsx)(i,{title:`과도한 자동화 예시`,language:`css`,className:`mt_m`,children:`// 불필요한 자동화
$random-value: 13px;
$another-value: $random-value * 1.153846;  // 의미 없는 관계`}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`의미 있는 관계(예: "2배", "절반")가 있는 경우에만 연산을 사용하는 것이 좋습니다.`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`가독성 고려`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`너무 복잡한 연산은 `,(0,o.jsx)(`b`,{children:`가독성을 해칠 수 있습니다`}),`.`]}),(0,o.jsx)(i,{title:`복잡한 연산 예시`,language:`css`,className:`mt_m`,children:`// 가독성 낮음
padding: ($base * 2 + $spacing) / 1.5 * 0.8;`}),(0,o.jsx)(i,{title:`더 나은 방법`,language:`css`,className:`mt_m`,children:`// 중간 변수로 분리
$calculated-spacing: $base * 2 + $spacing;
$adjusted-spacing: $calculated-spacing / 1.5 * 0.8;
padding: $adjusted-spacing;`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`연산과 함수를 활용한 스타일 관리 예제에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`간격 시스템`}),`: 기본 간격을 기준으로 배수 관계의 간격 자동 생성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`색상 팔레트`}),`: 기본 색상에서 함수를 사용하여 변형 색상 자동 생성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`반응형 타이포그래피`}),`: 기본 폰트 크기를 기준으로 비율에 맞춰 크기 계산`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`동적 컴포넌트`}),`: 기본 값을 기준으로 변형 스타일 자동 계산`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`복합 활용`}),`: 여러 연산과 함수를 조합하여 완전한 디자인 시스템 구축`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`장점`}),`: 자동화, 일관성, 유지보수성 향상, 디자인 시스템 구축`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`주의사항`}),`: 과도한 자동화 피하기, 가독성 고려`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`이제 SCSS의 기본 문법과 변수, 연산, 함수를 모두 배웠습니다. 다음 섹션에서는 `,(0,o.jsx)(`b`,{children:`SCSS의 고급 기능`}),`들을 하나씩 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/05_scss_04.png`,alt:`연산과 함수 활용 예시`}),(0,o.jsx)(`figcaption`,{children:`연산과 함수 활용 예시`})]})]})}export{l as default,a as t};