import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`색상, 폰트, 여백 변수 만들기`,description:`SCSS에서 색상, 폰트, 여백 변수를 실제로 만드는 방법을 상세히 알아봅니다. 각 변수 타임 선언 방법, 실제 사용 예시, 변수를 활용한 스타일 작성 방법을 단계별로 설명합니다.`,keyword:`scss 색상 변수, scss 폰트 변수, scss 여백 변수, scss 변수 만들기, scss 변수 선언, scss 변수 사용`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`SCSS에서 `,(0,o.jsx)(`b`,{children:`색상, 폰트, 여백 변수를 만드는 방법`}),`을 실제 예시와 함께 알아봅니다.`,(0,o.jsx)(`br`,{}),`각 변수 타입별로 선언 방법과 사용법을 배우고, 변수를 활용하여 일관된 스타일을 작성하는 방법을 익힙니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 색상 변수, 폰트 관련 변수(크기, 굵기, 줄간격), 여백 변수를 만드는 방법과 실제 프로젝트에서 활용하는 예시를 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`색상 변수 만들기`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`색상은 프로젝트에서 `,(0,o.jsx)(`b`,{children:`가장 자주 변경되는 값`}),` 중 하나입니다.`,(0,o.jsx)(`br`,{}),`색상 변수를 만들어 두면 브랜드 색상 변경이나 테마 변경 시 빠르게 대응할 수 있고, `,(0,o.jsx)(`b`,{children:`디자인 시스템 전체의 톤을 한 번에 조정`}),`할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 색상 변수`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`프로젝트에서 사용하는 주요 색상들을 변수로 정의합니다.`}),(0,o.jsx)(i,{title:`기본 색상 변수 예시`,language:`css`,className:`mt_m`,children:`// 메인 색상
$color-primary: #0a58ca;
$color-secondary: #6c757d;

// 상태 색상
$color-success: #28a745;
$color-danger: #dc3545;
$color-warning: #ffc107;
$color-info: #17a2b8;

// 중성 색상
$color-white: #ffffff;
$color-black: #000000;
$color-gray: #6c757d;
`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`색상 변수는 `,(0,o.jsx)(`b`,{children:`용도별로 그룹화`}),`하여 관리하면 나중에 찾기 쉽습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`색상 변수 사용 예시`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`정의한 색상 변수를 실제 스타일에 적용해봅니다.`}),(0,o.jsx)(i,{title:`색상 변수 사용`,language:`css`,className:`mt_m`,children:`$color-primary: #0a58ca;
$color-success: #28a745;
$color-danger: #dc3545;
$color-white: #ffffff;

.button-primary {
  background: $color-primary;
  color: $color-white;
}

.button-success {
  background: $color-success;
  color: $color-white;
}

.button-danger {
  background: $color-danger;
  color: $color-white;
}

.link {
  color: $color-primary;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 작성하면 `,(0,o.jsx)(`b`,{children:`색상을 변경할 때 변수 선언 부분만 수정`}),`하면 모든 버튼과 링크에 자동으로 반영됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`색상 변형 변수`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`같은 색상의 `,(0,o.jsx)(`b`,{children:`밝기나 어두움을 조절한 변형`}),`도 변수로 만들 수 있습니다.`]}),(0,o.jsx)(i,{title:`색상 변형 변수 예시`,language:`css`,className:`mt_m`,children:`// 기본 색상
$color-primary: #0a58ca;

// 변형 색상
$color-primary-light: #3d7dd8;
$color-primary-dark: #084298;
$color-primary-lighter: #6ba3e8;
$color-primary-darker: #063c86;
`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`또는 SCSS의 내장 함수를 사용하여 자동으로 변형 색상을 만들 수도 있습니다. (이에 대해서는`,` `,(0,o.jsx)(`b`,{className:`t_blue`,children:`[연산과 함수 기초]`}),` 섹션에서 자세히 알아봅니다)`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`폰트 변수 만들기`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`폰트 크기, 굵기, 줄간격 등 `,(0,o.jsx)(`b`,{children:`폰트 관련 값들을 변수로 관리`}),`하면 일관된 타이포그래피를 유지할 수 있습니다.`,(0,o.jsx)(`br`,{}),`이 섹션에서는 제목·본문·보조 텍스트 등 역할에 따라 폰트 변수를 어떻게 나누면 좋은지 예시와 함께 살펴봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`폰트 크기 변수`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`프로젝트에서 사용하는 폰트 크기들을 변수로 정의합니다.`}),(0,o.jsx)(i,{title:`폰트 크기 변수 예시`,language:`css`,className:`mt_m`,children:`// 기본 폰트 크기
$font-size-base: 16px;

// 작은 크기
$font-size-sm: 14px;
$font-size-xs: 12px;

// 큰 크기
$font-size-lg: 18px;
$font-size-xl: 20px;
$font-size-xxl: 24px;

// 제목 크기
$font-size-h1: 32px;
$font-size-h2: 28px;
$font-size-h3: 24px;
`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`폰트 크기는`,` `,(0,o.jsx)(`b`,{children:`기본 크기를 기준으로 작은/큰 크기를 체계적으로 정의`}),`하면 일관성을 유지하기 쉽습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`폰트 굵기 변수`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`폰트 굵기도 변수로 관리할 수 있습니다.`}),(0,o.jsx)(i,{title:`폰트 굵기 변수 예시`,language:`css`,className:`mt_m`,children:`$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`줄간격(Line Height) 변수`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`줄간격도 변수로 관리하면 `,(0,o.jsx)(`b`,{children:`일관된 가독성`}),`을 유지할 수 있습니다.`]}),(0,o.jsx)(i,{title:`줄간격 변수 예시`,language:`css`,className:`mt_m`,children:`$line-height-tight: 1.2;
$line-height-normal: 1.5;
$line-height-relaxed: 1.8;
`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`폰트 변수 사용 예시`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`정의한 폰트 변수들을 실제 스타일에 적용해봅니다.`}),(0,o.jsx)(i,{title:`폰트 변수 사용`,language:`css`,className:`mt_m`,children:`$font-size-base: 16px;
$font-size-lg: 18px;
$font-weight-bold: 700;
$line-height-normal: 1.5;

body {
  font-size: $font-size-base;
  line-height: $line-height-normal;
}

.heading {
  font-size: $font-size-lg;
  font-weight: $font-weight-bold;
}

.small-text {
  font-size: $font-size-sm;
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`여백 변수 만들기`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`여백(`,(0,o.jsx)(`code`,{children:`margin`}),`, `,(0,o.jsx)(`code`,{children:`padding`}),`) 값들을 변수로 관리하면`,` `,(0,o.jsx)(`b`,{children:`일관된 간격 시스템`}),`을 구축할 수 있습니다.`,(0,o.jsx)(`br`,{}),`여백이 정리되면 화면 전체의 리듬감이 안정되기 때문에, 디자인과 구현 모두에서 `,(0,o.jsx)(`b`,{children:`레이아웃 품질을 높이는 핵심 요소`}),`가 됩니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 여백 변수`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`프로젝트에서 사용하는 여백 값들을 `,(0,o.jsx)(`b`,{children:`크기별로 체계적으로 정의`}),`합니다.`]}),(0,o.jsx)(i,{title:`여백 변수 예시`,language:`css`,className:`mt_m`,children:`// 작은 여백
$spacing-xs: 4px;
$spacing-sm: 8px;

// 기본 여백
$spacing-md: 16px;

// 큰 여백
$spacing-lg: 24px;
$spacing-xl: 32px;
$spacing-xxl: 48px;
`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`여백 변수는 `,(0,o.jsx)(`b`,{children:`일정한 배수 관계`}),`로 정의하면 더 체계적입니다. 예를 들어 `,(0,o.jsx)(`code`,{children:`4px`}),`, `,(0,o.jsx)(`code`,{children:`8px`}),`, `,(0,o.jsx)(`code`,{children:`16px`}),`,`,` `,(0,o.jsx)(`code`,{children:`32px`}),`처럼 2배씩 증가하는 방식입니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`여백 변수 사용 예시`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`정의한 여백 변수를 실제 스타일에 적용해봅니다.`}),(0,o.jsx)(i,{title:`여백 변수 사용`,language:`css`,className:`mt_m`,children:`$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;

.card {
  padding: $spacing-md;
  margin-bottom: $spacing-lg;
}

.button {
  padding: $spacing-sm $spacing-md;
  margin-right: $spacing-sm;
}

.section {
  margin-top: $spacing-lg;
  margin-bottom: $spacing-lg;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 작성하면 `,(0,o.jsx)(`b`,{children:`여백 값이 일관되게 유지`}),`되고, 나중에 간격 시스템을 조정할 때도 변수만 수정하면 됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`컨테이너 너비 변수`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`레이아웃에서 사용하는 `,(0,o.jsx)(`b`,{children:`컨테이너 최대 너비`}),`도 변수로 관리할 수 있습니다.`]}),(0,o.jsx)(i,{title:`컨테이너 너비 변수 예시`,language:`css`,className:`mt_m`,children:`$container-sm: 540px;
$container-md: 720px;
$container-lg: 960px;
$container-xl: 1140px;

.container {
  max-width: $container-lg;
  margin: 0 auto;
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`변수를 파일로 분리하기`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`변수가 많아지면 `,(0,o.jsx)(`b`,{children:`별도의 파일로 분리`}),`하여 관리하는 것이 좋습니다.`,(0,o.jsx)(`br`,{}),`파셜 파일을 사용하여 변수를 체계적으로 관리하는 방법을 알아봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`변수 파일 생성`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`변수만 모아둔 파셜 파일을 만듭니다.`}),(0,o.jsxs)(`div`,{className:`mt_ml indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`_variables.scss`}),(0,o.jsx)(i,{title:`변수 파일 예시`,language:`css`,className:`mt_ms`,children:`// ============================================
// 색상 변수
// ============================================
$color-primary: #0a58ca;
$color-secondary: #6c757d;
$color-success: #28a745;
$color-danger: #dc3545;

// ============================================
// 폰트 변수
// ============================================
$font-size-base: 16px;
$font-size-sm: 14px;
$font-size-lg: 18px;
$font-weight-bold: 700;

// ============================================
// 여백 변수
// ============================================
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
`})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,"data-conlist-h4":`true`,children:`변수 파일 불러오기`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`메인 SCSS 파일에서 변수 파일을 불러와 사용합니다.`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`를 사용할 때는`,` `,(0,o.jsx)(`b`,{children:`네임스페이스를 사용하는 방법`}),`과 `,(0,o.jsx)(`b`,{children:`생략하는 방법`}),` 두 가지가 있습니다.`]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`방법 1. 네임스페이스 사용`}),(0,o.jsx)(`p`,{className:`mt_s`,children:`네임스페이스(파일명)를 붙여서 변수를 사용하는 방법입니다.`}),(0,o.jsx)(i,{title:`네임스페이스 사용`,language:`css`,className:`mt_ms`,children:`// 변수 파일 불러오기
@use "variables";

// 변수 사용 (네임스페이스 필요)
.button {
  background: variables.$color-primary;
  padding: variables.$spacing-sm variables.$spacing-md;
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`방법 2. 네임스페이스 생략`}),(0,o.jsxs)(`p`,{className:`mt_s`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`as *`}),`를 사용하면 네임스페이스 없이 변수를 사용할 수 있습니다.`]}),(0,o.jsx)(i,{title:`네임스페이스 생략`,language:`css`,className:`mt_ms`,children:`// 변수 파일 불러오기 (네임스페이스 생략)
@use "variables" as *;

// 변수 사용 (네임스페이스 없이)
.button {
  background: $color-primary;
  padding: $spacing-sm $spacing-md;
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`두 방법의 장단점 비교`}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_ms`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`구분`}),(0,o.jsx)(`li`,{className:`cell content`,children:`네임스페이스 사용`}),(0,o.jsx)(`li`,{className:`cell content`,children:`네임스페이스 생략`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:(0,o.jsx)(`strong`,{children:`장점`})}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`네임스페이스 사용`,children:[`• 변수 출처가 명확함`,(0,o.jsx)(`br`,{}),`• 여러 파일에서 같은 이름의 변수를 사용해도 충돌 없음`,(0,o.jsx)(`br`,{}),`• 코드 가독성과 유지보수성 향상`]}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`네임스페이스 생략`,children:[`• 코드 작성이 간결함`,(0,o.jsx)(`br`,{}),`• 변수 사용이 직관적이고 빠름`,(0,o.jsx)(`br`,{}),`• 기존 Sass 문법과 유사한 느낌`]})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:(0,o.jsx)(`strong`,{children:`단점`})}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`네임스페이스 사용`,children:[`• 변수명이 길어짐 (예: variables.$color-primary)`,(0,o.jsx)(`br`,{}),`• 코드 작성 시 타이핑이 많아짐`]}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`네임스페이스 생략`,children:[`• 변수 출처 파악이 어려움`,(0,o.jsx)(`br`,{}),`• 여러 파일에서 같은 이름의 변수가 있으면 충돌 가능`,(0,o.jsx)(`br`,{}),`• 대규모 프로젝트에서 혼란 가능성 증가`]})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:(0,o.jsx)(`strong`,{children:`추천 상황`})}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`네임스페이스 사용`,children:[`• 여러 팀원이 협업하는 프로젝트`,(0,o.jsx)(`br`,{}),`• 대규모 프로젝트`,(0,o.jsx)(`br`,{}),`• 명확한 변수 출처 추적이 필요한 경우`]}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`네임스페이스 생략`,children:[`• 소규모 프로젝트`,(0,o.jsx)(`br`,{}),`• 단독 작업`,(0,o.jsx)(`br`,{}),`• 빠른 프로토타이핑`]})]})]})]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`변수 조합 사용 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`여러 변수를 `,(0,o.jsx)(`b`,{children:`조합하여 사용`}),`하는 실제 예시를 살펴봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`버튼 컴포넌트 예시`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`색상, 여백, 폰트 변수를 조합하여 버튼 스타일을 작성합니다.`}),(0,o.jsx)(i,{title:`변수 조합 예시`,language:`css`,className:`mt_m`,children:`$color-primary: #0a58ca;
$color-white: #ffffff;
$spacing-sm: 8px;
$spacing-md: 16px;
$font-size-base: 16px;
$font-weight-bold: 700;

.button {
  // 색상 변수
  background: $color-primary;
  color: $color-white;

  // 여백 변수
  padding: $spacing-sm $spacing-md;

  // 폰트 변수
  font-size: $font-size-base;
  font-weight: $font-weight-bold;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 작성하면 `,(0,o.jsx)(`b`,{children:`모든 값이 변수로 관리`}),`되어, 디자인 변경 시 빠르게 대응할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`카드 컴포넌트 예시`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`카드 컴포넌트에서도 여러 변수를 조합하여 사용합니다.`}),(0,o.jsx)(i,{title:`카드 변수 조합 예시`,language:`css`,className:`mt_m`,children:`$spacing-md: 16px;
$spacing-lg: 24px;
$color-white: #ffffff;
$color-gray: #e9ecef;
$font-size-lg: 18px;
$font-weight-bold: 700;

.card {
  padding: $spacing-md;
  margin-bottom: $spacing-lg;
  background: $color-white;
  border: 1px solid $color-gray;

  .card__title {
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
    margin-bottom: $spacing-md;
  }
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`색상, 폰트, 여백 변수를 만드는 방법에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`색상 변수`}),`: 메인 색상, 상태 색상, 중성 색상을 변수로 정의하여 일관성 유지`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`폰트 변수`}),`: 폰트 크기, 굵기, 줄간격을 변수로 관리하여 타이포그래피 일관성 유지`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`여백 변수`}),`: 간격 시스템을 변수로 구축하여 일관된 여백 유지`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`파일 분리`}),`: 변수가 많아지면 파셜 파일로 분리하여 체계적으로 관리`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`변수 조합`}),`: 여러 변수를 조합하여 컴포넌트 스타일 작성`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`변수 네이밍 규칙`}),`에 대해 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/04_scss_02.png`,alt:`색상, 폰트, 여백 변수를 만드는 방법`}),(0,o.jsx)(`figcaption`,{children:`색상, 폰트, 여백 변수를 만드는 방법`})]})]})}export{l as default,a as t};