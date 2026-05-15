import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`디자인 토큰과 기본 스타일`,description:`디자인 시스템의 기반이 되는 디자인 토큰(Color, Typography, Spacing, Radius)과 기본 스타일(Base/Reset)을 SCSS로 구성하는 방법을 알아봅니다. 실무에서 사용하는 토큰 구조와 적용 예시를 제공합니다.`,keyword:`디자인 토큰, design tokens, scss 토큰, 기본 스타일, base styles, reset css, scss 변수`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`이 장은 `,(0,o.jsx)(`b`,{children:`실무 예제로 SCSS를 마무리`}),`하는 단계입니다.`,(0,o.jsx)(`br`,{}),`지금까지 학습한 내용을 복습하면서, `,(0,o.jsx)(`b`,{children:`실무에서 사용하는 방식`}),`으로 단계별로 진행합니다.`,(0,o.jsx)(`br`,{}),`중요한 점은`,` `,(0,o.jsx)(`b`,{children:`이 페이지부터 설정되는 모든 변수와 토큰이 다음 페이지들에서도 그대로 이어져 활용`}),`된다는 것입니다.`,(0,o.jsx)(`br`,{}),`각 페이지가 독립적이기보다는 하나의 완성된 디자인 시스템을 구성하는 연속된 과정임을 이해하고 따라가시기 바랍니다.`]}),(0,o.jsxs)(`p`,{className:`mt_s`,children:[`디자인 토큰은 `,(0,o.jsx)(`b`,{children:`디자인 시스템의 가장 아래 레이어`}),`로, 모든 스타일의 기준이 되는 값들입니다.`,(0,o.jsx)(`br`,{}),`색상, 타이포그래피, 간격, 둥근 모서리 등의 값을 토큰으로 정의하면, 디자인 변경 시 한 곳만 수정해도 전체에 반영됩니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 Color Tokens, Typography Tokens, Spacing/Radius Tokens를 정의하고, Base/Reset 스타일을 구성하는 방법을 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`디자인 토큰이란?`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`b`,{className:`t_blue`,children:`디자인 토큰`}),`은 디자인 시스템에서 사용하는 모든 값(색상, 폰트 크기, 간격 등)을 의미 있는 이름으로 정의한 것입니다.`,(0,o.jsx)(`br`,{}),`컴포넌트나 페이지 스타일에서는 이 토큰들을 사용하여 일관된 디자인을 유지하고, 디자인 변경이 필요할 때는 토큰만 수정하면 전체 디자인이 한 번에 업데이트됩니다.`,(0,o.jsx)(`br`,{}),`실무에서는 모든 컴포넌트·테마·프레임워크 스타일의 공통 기반이 되므로, 가장 먼저 정리해야 할 요소입니다.`]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`토큰의 장점`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`일관성 유지`}),`: 같은 의미의 값은 항상 같은 토큰을 사용하여 디자인의 일관성을 보장`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`유지보수성 향상`}),`: 디자인 변경 시 토큰 정의만 수정하면 모든 곳에 자동 반영`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`확장성`}),`: 테마나 브랜드 변경 시 토큰만 교체하면 전체 디자인 적용`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`협업 효율성`}),`: 디자이너와 개발자가 공통 언어로 소통 가능`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`Color Tokens`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`색상 토큰은 `,(0,o.jsx)(`b`,{children:`의미에 따라 분류`}),`하여 정의합니다.`,(0,o.jsx)(`br`,{}),`Primary(주요), Neutral(중립), Semantic(의미적) 색상으로 구분하면, 각 색상의 역할이 명확해지고 유지보수가 쉬워집니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Primary Colors`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`브랜드의 주요 색상을 정의합니다. 버튼, 링크 등 주요 인터랙션 요소에 사용됩니다.`}),(0,o.jsx)(i,{title:`_tokens-color.scss`,language:`scss`,className:`mt_m`,children:`// Primary 색상 토큰
$color-primary-50: #e7f1ff;
$color-primary-100: #c4dfff;
$color-primary-200: #9cc7ff;
$color-primary-300: #74afff;
$color-primary-400: #4c97ff;
$color-primary-500: #0a58ca;  // 기본 primary
$color-primary-600: #0847a3;
$color-primary-700: #06367c;
$color-primary-800: #042554;
$color-primary-900: #02142d;

// Primary 별칭 (실무에서 자주 사용하는 값)
$color-primary: $color-primary-500;
$color-primary-light: $color-primary-300;
$color-primary-dark: $color-primary-700;`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`색상을 50부터 900까지 단계별로 정의하면, 밝기와 어두움에 따라 일관된 명도 변화를 유지할 수 있습니다.`,(0,o.jsx)(`br`,{}),`별칭을 만들어 자주 사용하는 값은 더 간단한 이름으로 접근할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Neutral Colors`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`텍스트, 배경, 테두리 등 중립적인 용도로 사용하는 회색 계열 색상을 정의합니다.`}),(0,o.jsx)(i,{title:`_tokens-color.scss`,language:`scss`,className:`mt_m`,children:`// Neutral 색상 토큰
$color-neutral-50: #f8f9fa;
$color-neutral-100: #e9ecef;
$color-neutral-200: #dee2e6;
$color-neutral-300: #ced4da;
$color-neutral-400: #adb5bd;
$color-neutral-500: #6c757d;  // 기본 neutral
$color-neutral-600: #495057;
$color-neutral-700: #343a40;
$color-neutral-800: #212529;
$color-neutral-900: #000000;

// Neutral 별칭
$color-text: $color-neutral-900;        // 기본 텍스트
$color-text-secondary: $color-neutral-600;
$color-border: $color-neutral-200;      // 기본 테두리
$color-background: $color-neutral-50;   // 기본 배경`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`텍스트, 배경, 테두리 등은 의미를 가진 별칭으로 정의하면 코드의 가독성이 향상됩니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`code`,{className:`t_blue`,children:`$color-text`}),`는`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`$color-neutral-900`}),`보다 의도가 명확하게 전달됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Semantic Colors`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`성공, 경고, 오류, 정보 등 특정 의미를 전달하는 색상을 정의합니다.`}),(0,o.jsx)(i,{title:`_tokens-color.scss`,language:`scss`,className:`mt_m`,children:`// Semantic 색상 토큰
$color-success: #28a745;
$color-success-light: #d4edda;
$color-success-dark: #155724;

$color-warning: #ffc107;
$color-warning-light: #fff3cd;
$color-warning-dark: #856404;

$color-error: #dc3545;
$color-error-light: #f8d7da;
$color-error-dark: #721c24;

$color-info: #17a2b8;
$color-info-light: #d1ecf1;
$color-info-dark: #0c5460;`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`Semantic 색상은 사용자에게 특정 상태나 결과를 시각적으로 전달하는 역할을 합니다.`,(0,o.jsx)(`br`,{}),`각 색상의 light, dark 변형을 함께 정의하면, 배경이나 테두리 등 다양한 용도로 활용할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`색상 토큰 SCSS 코드 예시`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`정의한 색상 토큰을 컴포넌트에서 사용하는 방법입니다.`}),(0,o.jsx)(i,{title:`_button.scss`,language:`scss`,className:`mt_m`,children:`// 토큰 파일에서 색상 가져오기
@use "../tokens/color" as color;
@use "../tokens/spacing" as spacing;
@use "../tokens/radius" as radius;

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  background-color: color.$color-primary;
  color: #ffffff;
  border: 1px solid color.$color-primary;
  border-radius: radius.$radius-md;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: color.$color-primary-dark;
    border-color: color.$color-primary-dark;
    opacity: 1;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(10, 88, 202, 0.25);
  }

  &.button--success {
    background-color: color.$color-success;
    border-color: color.$color-success;

    &:hover {
      background-color: color.$color-success-dark;
      border-color: color.$color-success-dark;
    }
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`컴포넌트에서는 하드코딩된 색상 값 대신 토큰을 사용합니다.`,(0,o.jsx)(`br`,{}),`나중에 브랜드 색상이 변경되어도`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`_tokens-color.scss`}),` 파일만 수정하면 모든 버튼에 자동으로 반영됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`색상 토큰 적용 버튼 예시`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`b`,{style:{color:`#0a58ca`},children:`Primary`}),` /`,` `,(0,o.jsx)(`b`,{style:{color:`#28a745`},children:`Success`}),` /`,` `,(0,o.jsx)(`b`,{style:{color:`#d79f00`},children:`Warning`}),` /`,` `,(0,o.jsx)(`b`,{style:{color:`#dc3545`},children:`Error`}),` /`,` `,(0,o.jsx)(`b`,{style:{color:`#17a2b8`},children:`Info`}),(0,o.jsx)(`b`,{children:`상태별 버튼`}),`을 각각의 Modifier 클래스로 분리해 사용합니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`span`,{className:`t_blue`,children:`※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 이 예시는 사용되는 토큰만을 하나의 SCSS 파일에 모아 작성한 예제입니다.`})]}),(0,o.jsxs)(`iframe`,{className:`codepen mt_m`,height:400,style:{width:`100%`},scrolling:`no`,title:`Untitled`,src:`https://codepen.io/uxkm/embed/PwzooQo?default-tab=css%2Cresult&theme-id=dark`,frameBorder:`no`,loading:`lazy`,allowTransparency:!0,children:[`See the Pen`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm/pen/PwzooQo`,children:`10.1. 색상 토큰 적용 버튼 예시`}),` `,`by UXKM (`,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm`,children:`@uxkm`}),`) on`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io`,children:`CodePen`}),`.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`Typography Tokens`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`타이포그래피 토큰은 `,(0,o.jsx)(`b`,{children:`폰트 크기, 줄 간격, 폰트 두께`}),` 등을 정의합니다.`,(0,o.jsx)(`br`,{}),`일관된 타이포그래피 시스템을 구축하면, 텍스트의 가독성과 디자인 일관성을 유지할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Font Size Tokens`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`폰트 크기를 단계별로 정의합니다. 실무에서는 4px 또는 8px 단위로 증가하는 시스템을 많이 사용합니다.`}),(0,o.jsx)(i,{title:`_tokens-typography.scss`,language:`scss`,className:`mt_m`,children:`// Font Size 토큰
$font-size-xs: 12px;
$font-size-sm: 14px;
$font-size-base: 16px;      // 기본 폰트 크기
$font-size-md: 18px;
$font-size-lg: 20px;
$font-size-xl: 24px;
$font-size-xxl: 32px;
$font-size-xxxl: 40px;

// 또는 rem 단위 사용 (접근성 향상)
$font-size-xs: 0.75rem;    // 12px
$font-size-sm: 0.875rem;   // 14px
$font-size-base: 1rem;     // 16px
$font-size-md: 1.125rem;   // 18px
$font-size-lg: 1.25rem;    // 20px
$font-size-xl: 1.5rem;     // 24px
$font-size-xxl: 2rem;      // 32px
$font-size-xxxl: 2.5rem;   // 40px`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`rem 단위를 사용하면 사용자의 브라우저 폰트 크기 설정을 존중하여 접근성을 향상시킬 수 있습니다.`,(0,o.jsx)(`br`,{}),`기본 폰트 크기를 16px로 설정하면, 1rem = 16px가 됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Line Height Tokens`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`줄 간격을 정의합니다. 폰트 크기에 비례하여 정의하거나, 고정값으로 정의할 수 있습니다.`}),(0,o.jsx)(i,{title:`_tokens-typography.scss`,language:`scss`,className:`mt_m`,children:`// Line Height 토큰
$line-height-tight: 1.2;      // 제목용 (좁은 간격)
$line-height-normal: 1.5;     // 본문용 (일반 간격)
$line-height-relaxed: 1.75;   // 여유로운 간격
$line-height-loose: 2;        // 넓은 간격

// 또는 고정값 사용
$line-height-xs: 16px;
$line-height-sm: 20px;
$line-height-base: 24px;
$line-height-lg: 32px;`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`비율 값(1.5 등)을 사용하면 폰트 크기가 변경되어도 자동으로 적절한 줄 간격이 적용됩니다.`,(0,o.jsx)(`br`,{}),`제목은 좁은 간격(1.2), 본문은 넓은 간격(1.5~1.75)을 사용하는 것이 일반적입니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Font Weight Tokens`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`폰트 두께를 정의합니다. 숫자 값 대신 의미 있는 이름을 사용하면 코드 가독성이 향상됩니다.`}),(0,o.jsx)(i,{title:`_tokens-typography.scss`,language:`scss`,className:`mt_m`,children:`// Font Weight 토큰
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
$font-weight-extrabold: 800;`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`font-weight: 700`}),`보다`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`font-weight: $font-weight-bold`}),`가 의도가 더 명확합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`타이포그래피 토큰 SCSS 코드 예시`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`타이포그래피 토큰을 실제 컴포넌트에 적용하는 방법입니다.`}),(0,o.jsx)(i,{title:`_heading.scss`,language:`scss`,className:`mt_m`,children:`@use "../tokens/typography" as typo;

.heading {
  font-weight: typo.$font-weight-bold;
  line-height: typo.$line-height-tight;

  &.heading--xl {
    font-size: typo.$font-size-xxxl;
  }

  &.heading--lg {
    font-size: typo.$font-size-xxl;
  }

  &.heading--md {
    font-size: typo.$font-size-xl;
  }
}`}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`토큰을 사용하면 제목의 크기를 변경할 때도 토큰 파일만 수정하면 모든 제목에 일괄 적용됩니다.`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`타이포그래피 토큰 적용 예시`}),(0,o.jsx)(`p`,{className:`mt_m t_blue`,children:`※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 이 예시는 사용되는 토큰만을 하나의 SCSS 파일에 모아 작성한 예제입니다.`}),(0,o.jsxs)(`iframe`,{className:`codepen mt_m`,height:400,style:{width:`100%`},scrolling:`no`,title:`10.1. 타이포그래피 토큰 실제 적용 예시`,src:`https://codepen.io/uxkm/embed/raLNxXX?default-tab=css%2Cresult&theme-id=dark`,frameBorder:`no`,loading:`lazy`,allowTransparency:!0,children:[`See the Pen`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm/pen/raLNxXX`,children:`10.1. 타이포그래피 토큰 실제 적용 예시`}),` `,`by UXKM (`,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm`,children:`@uxkm`}),`) on`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io`,children:`CodePen`}),`.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`Spacing & Radius Tokens`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`간격(Spacing)과 둥근 모서리(Radius) 토큰은`,` `,(0,o.jsx)(`b`,{children:`레이아웃과 컴포넌트의 시각적 일관성`}),`을 유지하는 데 중요한 역할을 합니다.`,(0,o.jsx)(`br`,{}),`일관된 간격 시스템을 사용하면 디자인이 더 체계적이고 전문적으로 보입니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Spacing Tokens`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`간격을 `,(0,o.jsx)(`code`,{children:`4px`}),` 또는 `,(0,o.jsx)(`code`,{children:`8px`}),` 단위로 정의합니다. 마진, 패딩 등 모든 간격에서 이 토큰들을 사용합니다.`]}),(0,o.jsx)(i,{title:`_tokens-spacing.scss`,language:`scss`,className:`mt_m`,children:`// Spacing 토큰 (4px 단위)
$spacing-0: 0;
$spacing-1: 4px;
$spacing-2: 8px;
$spacing-3: 12px;
$spacing-4: 16px;      // 기본 간격
$spacing-5: 20px;
$spacing-6: 24px;
$spacing-8: 32px;
$spacing-10: 40px;
$spacing-12: 48px;
$spacing-16: 64px;

// 또는 8px 단위 (더 큰 간격)
$spacing-0: 0;
$spacing-1: 8px;
$spacing-2: 16px;
$spacing-3: 24px;
$spacing-4: 32px;
$spacing-5: 40px;
$spacing-6: 48px;
$spacing-8: 64px;`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`간격 시스템을 일관되게 유지하면, 여러 컴포넌트를 조합할 때 자연스러운 레이아웃이 됩니다.`,(0,o.jsx)(`br`,{}),`4px 단위는 더 세밀한 제어가 가능하고, 8px 단위는 더 빠르게 선택할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Radius Tokens`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`둥근 모서리 반경을 정의합니다. 버튼, 카드, 입력 필드 등에서 일관된 둥근 모서리를 적용할 수 있습니다.`}),(0,o.jsx)(i,{title:`_tokens-radius.scss`,language:`scss`,className:`mt_m`,children:`// Radius 토큰
$radius-none: 0;
$radius-sm: 4px;       // 작은 요소 (태그, 작은 버튼)
$radius-md: 8px;       // 기본 (버튼, 입력 필드)
$radius-lg: 12px;      // 큰 요소 (카드)
$radius-xl: 16px;      // 매우 큰 요소
$radius-full: 9999px;  // 완전한 원형 (프로필 이미지 등)`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`일관된 radius 값을 사용하면 디자인의 통일감이 향상됩니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`code`,{className:`t_blue`,children:`radius-full`}),`은 매우 큰 값으로 설정하여 항상 완전한 원형이 되도록 합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Spacing & Radius SCSS 코드 예시`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`간격과 둥근 모서리 토큰을 실제 컴포넌트에 적용하는 방법입니다.`}),(0,o.jsx)(i,{title:`_card.scss`,language:`scss`,className:`mt_m`,children:`@use "../tokens/spacing" as spacing;
@use "../tokens/radius" as radius;
@use "../tokens/color" as color;

.card {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: radius.$radius-lg;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  margin-bottom: spacing.$spacing-6;

  .card__header {
    padding: 1rem 1.25rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    background-color: rgba(0, 0, 0, 0.03);
    margin-bottom: 0;
  }

  .card__body {
    padding: 1.25rem;
    flex: 1;
    margin-bottom: 0;
  }

  .card__footer {
    padding: 0.75rem 1.25rem;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    background-color: rgba(0, 0, 0, 0.03);
  }
}`}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`모든 간격과 둥근 모서리를 토큰으로 관리하면, 디자인 변경 시 일관되게 업데이트할 수 있습니다.`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Spacing & Radius 적용 예시`}),(0,o.jsx)(`p`,{className:`mt_m t_blue`,children:`※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 이 예시는 사용되는 토큰만을 하나의 SCSS 파일에 모아 작성한 예제입니다.`}),(0,o.jsxs)(`iframe`,{className:`codepen mt_m`,height:500,style:{width:`100%`},scrolling:`no`,title:`10.1. Spacing & Radius 적용 예시`,src:`https://codepen.io/uxkm/embed/bNeGwNg?default-tab=css%2Cresult&theme-id=dark`,frameBorder:`no`,loading:`lazy`,allowTransparency:!0,children:[`See the Pen`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm/pen/bNeGwNg`,children:`10.1. Spacing & Radius 적용 예시`}),` `,`by UXKM (`,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm`,children:`@uxkm`}),`) on`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io`,children:`CodePen`}),`.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`Base & Reset 스타일`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`Base 스타일은 `,(0,o.jsx)(`b`,{children:`기본 HTML 요소에 적용되는 기본 스타일`}),`입니다.`,(0,o.jsx)(`br`,{}),`브라우저 기본 스타일을 초기화하고, 프로젝트의 기본 스타일을 정의하여 일관된 기반을 마련합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,"data-conlist-h4":`true`,children:`Reset 스타일`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`브라우저마다 다른 기본 스타일을 초기화하여 일관된 시작점을 만듭니다.`}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsxs)(`h4`,{className:`ml_mn`,children:[(0,o.jsx)(`b`,{children:`Josh Comeau’s Modern CSS Reset`}),` `,(0,o.jsx)(`b`,{className:`t_blue`,children:`(가장 인기)`})]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`Josh Comeau가 제안한 리셋으로,`,` `,(0,o.jsx)(`b`,{children:`요즘 프론트엔드에서 가장 널리 쓰이는 현대적인 리셋`}),`입니다.`,(0,o.jsx)(`br`,{}),`기본 여백 제거뿐 아니라,`,` `,(0,o.jsx)(`b`,{children:`텍스트 렌더링 개선, 미디어 요소의 기본 동작 통일, 폼 요소의 폰트 상속, 루트 스태킹 컨텍스트 보장`}),`까지 한 번에 처리해 줍니다.`,(0,o.jsx)(`br`,{}),`크로스 브라우저에서 일관된 베이스를 만들고 싶다면, 이 리셋을 그대로 가져다 써도 될 정도로 잘 정리된 패턴입니다.`]}),(0,o.jsx)(i,{title:`_reset.scss`,language:`css`,className:`mt_m`,children:`/* =========================
  Modern CSS Reset
  Based on Josh Comeau’s
  ========================= */

/* 1. Box sizing */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Remove default margin */
* {
  margin: 0;
}

/* 3. Improve text rendering */
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/* 4. Media defaults */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 5. Form typography */
input, button, textarea, select {
  font: inherit;
}

/* 6. Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* 7. Root stacking context */
#root, #__next {
  isolation: isolate;
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`Andy Bell’s Modern CSS Reset`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`Andy Bell이 제안한 리셋으로, `,(0,o.jsx)(`b`,{children:`“필요한 것만 최소한으로 리셋”`}),`하는 데 초점을 둔 버전입니다.`,(0,o.jsx)(`br`,{}),`헤딩·문단·리스트 등 `,(0,o.jsx)(`b`,{children:`타이포그래피 관련 기본 마진을 정리`}),`하고, `,(0,o.jsx)(`b`,{children:`body의 최소 높이/라인하이트`}),`를 설정해 레이아웃이 안정적으로 보이도록 만들어 줍니다.`,(0,o.jsx)(`br`,{}),`기본 HTML 구조를 많이 사용하는 콘텐츠 페이지나 블로그 형식의 사이트에서 쓰기 좋은, 균형 잡힌 리셋입니다.`]}),(0,o.jsx)(i,{title:`_reset.scss`,language:`css`,className:`mt_m`,children:`/* =========================
  Modern CSS Reset
  Based on Andy Bell’s
  ========================= */

/* Box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1, h2, h3, h4, p,
figure, blockquote, dl, dd {
  margin: 0;
}

/* Core body defaults */
body {
  min-height: 100vh;
  line-height: 1.5;
  text-rendering: optimizeSpeed;
}

/* Remove list styles */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Images */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts */
input, button, textarea, select {
  font: inherit;
}`})]}),(0,o.jsxs)(`p`,{className:`mt_ml`,children:[`Reset 스타일은 브라우저 기본 스타일을 "0"으로 만드는 것이 목적입니다.`,(0,o.jsx)(`br`,{}),`이렇게 하면 모든 브라우저에서 동일한 시작점을 가지게 되어, 예상치 못한 스타일 차이를 방지할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Base 스타일`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`프로젝트에서 사용할 기본 HTML 요소 스타일을 정의합니다. 토큰을 활용하여 일관된 기본 스타일을 만듭니다.`}),(0,o.jsx)(i,{title:`_base.scss`,language:`scss`,className:`mt_m`,children:`@use "../tokens/color" as color;
@use "../tokens/typography" as typo;
@use "../tokens/spacing" as spacing;

// 기본 body 스타일
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: $font-size-base;
  line-height: $line-height-normal;
  color: $color-text;
  background-color: $color-background;
}

// 제목 스타일
h1, h2, h3, h4, h5, h6 {
  font-weight: $font-weight-bold;
  line-height: $line-height-tight;
  margin-bottom: $spacing-4;
}

h1 { font-size: $font-size-xxxl; }
h2 { font-size: $font-size-xxl; }
h3 { font-size: $font-size-xl; }
h4 { font-size: $font-size-lg; }
h5 { font-size: $font-size-md; }
h6 { font-size: $font-size-base; }

// 문단 스타일
p {
  margin-bottom: $spacing-4;
}

// 리스트 스타일
ul {
  margin: $spacing-4 0;
  padding-left: $spacing-4;
  list-style: none;

  li {
    position: relative;
    margin-bottom: 4px;
    padding-left: 12px;
    &nbsp;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.65em;
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background-color: $color-primary;
      transform: translateY(-50%);
    }
  }
}

// 링크 스타일
a {
  color: $color-primary;
  &:hover {
    color: $color-primary-dark;
    text-decoration: underline;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`Base 스타일에서 토큰을 사용하면, 기본 HTML 요소들도 디자인 시스템의 일부가 됩니다.`,(0,o.jsx)(`br`,{}),`토큰을 변경하면 기본 요소들도 함께 업데이트되어 일관성이 유지됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Base 스타일 결과 확인`}),(0,o.jsx)(`p`,{className:`mt_m t_blue`,children:`※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 이 예시는 사용되는 토큰만을 하나의 SCSS 파일에 모아 작성한 예제입니다.`}),(0,o.jsxs)(`iframe`,{className:`codepen mt_m`,height:500,style:{width:`100%`},scrolling:`no`,title:`10.1. Base 스타일 결과 확인`,src:`https://codepen.io/uxkm/embed/LEZYZMM?default-tab=css%2Cresult&theme-id=dark`,frameBorder:`no`,loading:`lazy`,allowTransparency:!0,children:[`See the Pen`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm/pen/LEZYZMM`,children:`10.1. Base 스타일 결과 확인`}),` `,`by UXKM (`,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm`,children:`@uxkm`}),`) on`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io`,children:`CodePen`}),`.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`토큰 파일 구조`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`토큰 파일들을 체계적으로 정리하는 방법입니다.`,(0,o.jsx)(`br`,{}),`각 토큰을 별도 파일로 분리하거나, 하나의 파일에 모아서 관리할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`파일별 분리 구조`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`각 토큰 타입을 별도 파일로 분리하면 관리가 용이합니다.`}),(0,o.jsx)(i,{title:`토큰 파일 구조`,language:`scss`,className:`mt_m`,children:`tokens/
  ├─ _tokens-color.scss
  ├─ _tokens-typography.scss
  ├─ _tokens-spacing.scss
  ├─ _tokens-radius.scss
  └─ _tokens.scss  /* 모든 토큰을 한 번에 export */`}),(0,o.jsx)(i,{title:`_tokens.scss`,language:`scss`,className:`mt_ms`,children:`// 모든 토큰을 한 번에 forward
@forward "tokens-color";
@forward "tokens-typography";
@forward "tokens-spacing";
@forward "tokens-radius";`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 다른 파일에서는`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@use "tokens"`}),` 한 줄로 모든 토큰을 가져올 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`디자인 토큰과 기본 스타일 구성에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`디자인 토큰의 역할`}),`: 모든 스타일의 기준이 되는 값 정의 (색상, 타이포그래피, 간격, 둥근 모서리)`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`Color Tokens`}),`: Primary, Neutral, Semantic 색상으로 분류하여 의미 있게 정의`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`Typography Tokens`}),`: Font Size, Line Height, Font Weight를 단계별로 정의`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`Spacing & Radius Tokens`}),`: 일관된 간격과 둥근 모서리 시스템 구축`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`Base & Reset 스타일`}),`: 브라우저 기본 스타일 초기화 및 기본 HTML 요소 스타일 정의`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`토큰의 장점`}),`: 일관성 유지, 유지보수성 향상, 확장성, 협업 효율성`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`레이아웃 시스템과 반응형 구조`}),`를 구성하는 방법을 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/10_scss_01.png`,alt:`디자인 토큰과 기본 스타일`}),(0,o.jsx)(`figcaption`,{children:`디자인 토큰과 기본 스타일`})]})]})}export{l as default,a as t};