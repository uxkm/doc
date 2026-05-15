import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`반복문을 활용한 클래스 자동 생성`,description:`SCSS 반복문(@for, @each)을 활용하여 유틸리티 클래스를 자동 생성하는 방법을 상세히 알아봅니다. 간격 유틸리티, 색상 유틸리티, 그리드 시스템, 반응형 유틸리티 등 실제 프로젝트에서 사용하는 클래스 생성 예시를 제공합니다.`,keyword:`scss 클래스 자동 생성, scss 유틸리티 클래스, scss 반복문 활용, scss 자동화`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`반복문을 활용하면 `,(0,o.jsx)(`b`,{children:`유틸리티 클래스를 자동으로 생성`}),`할 수 있습니다.`,(0,o.jsx)(`br`,{}),`수동으로 수십 개의 클래스를 작성하는 대신,`,` `,(0,o.jsx)(`b`,{children:`반복문으로 한 번에 생성`}),`하여 코드 작성 시간을 크게 줄일 수 있습니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 반복문을 활용하여 간격 유틸리티, 색상 유틸리티, 그리드 시스템, 반응형 유틸리티 등 실제 프로젝트에서 사용하는 클래스를 자동 생성하는 방법을 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`클래스 자동 생성이란?`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`클래스 자동 생성은`,` `,(0,o.jsx)(`b`,{children:`반복문을 사용하여 유사한 패턴의 클래스를 자동으로 만들어내는 것`}),`입니다.`,(0,o.jsx)(`br`,{}),`디자인 시스템의 간격·색상·그리드처럼 규칙적인 패턴을 코드로 옮길 때,`,` `,(0,o.jsx)(`b`,{children:`유틸리티 클래스를 수동 작성하는 수고를 크게 줄이고`}),` 일관성을 유지하는 데 도움이 됩니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`수동 작성 vs 자동 생성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`수동으로 작성하면 `,(0,o.jsx)(`b`,{children:`같은 패턴을 반복`}),`해야 합니다.`]}),(0,o.jsx)(i,{title:`수동 작성 예시`,language:`css`,className:`mt_m`,children:`/* 수동으로 10개 클래스 작성 */
.mt-1 { margin-top: 8px; }
.mt-2 { margin-top: 16px; }
.mt-3 { margin-top: 24px; }
.mt-4 { margin-top: 32px; }
.mt-5 { margin-top: 40px; }
.mt-6 { margin-top: 48px; }
.mt-7 { margin-top: 56px; }
.mt-8 { margin-top: 64px; }
.mt-9 { margin-top: 72px; }
.mt-10 { margin-top: 80px; }

/*
같은 패턴을 10번 반복 작성
수정 시에도 10곳을 모두 수정해야 함
*/`}),(0,o.jsx)(i,{title:`자동 생성 예시`,language:`css`,className:`mt_m`,children:`// 반복문으로 자동 생성
@for $i from 1 through 10 {
  .mt-#{$i} {
    margin-top: #{$i * 8}px;
  }
}

// 한 번만 작성하면 10개 클래스 자동 생성
// 수정도 한 곳만 수정하면 됨`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`반복문을 사용하면 `,(0,o.jsx)(`b`,{children:`코드가 훨씬 간결`}),`해지고,`,` `,(0,o.jsx)(`b`,{children:`유지보수도 쉬워집니다`}),`.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`자동 생성의 장점`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`클래스를 자동 생성하면 다음과 같은 장점이 있습니다:`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`코드 작성 시간 단축`}),`: 수십 개의 클래스를 한 번에 생성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`일관성 보장`}),`: 같은 패턴으로 생성되어 일관성 유지`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`유지보수 용이`}),`: 수정 시 한 곳만 수정하면 모든 클래스에 반영`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`실수 방지`}),`: 수동 작성 시 발생할 수 있는 오타나 누락 방지`]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`간격 유틸리티 클래스 생성`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`마진과 패딩 유틸리티 클래스를 `,(0,o.jsx)(`b`,{children:`반복문으로 자동 생성`}),`하는 방법을 알아봅니다.`,(0,o.jsx)(`br`,{}),`디자인 시스템에서 정의한 스페이싱 스케일을 기반으로,`,` `,(0,o.jsxs)(`b`,{children:[(0,o.jsx)(`code`,{children:`mt-1`}),`, `,(0,o.jsx)(`code`,{children:`mt-2`}),` 같은 규칙적인 유틸리티`]}),`를 한 번에 만들어 두면 화면 구현 속도가 크게 빨라집니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 마진/패딩 유틸리티`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@for`}),`를 사용하여`,` `,(0,o.jsx)(`b`,{children:`마진과 패딩 유틸리티를 자동 생성`}),`합니다.`]}),(0,o.jsx)(i,{title:`기본 마진/패딩 유틸리티`,language:`css`,className:`mt_m`,children:`// 마진 탑 유틸리티
@for $i from 1 through 10 {
  .mt-#{$i} {
    margin-top: #{$i * 8}px;
  }
}

// 패딩 유틸리티
@for $i from 1 through 10 {
  .p-#{$i} {
    padding: #{$i * 8}px;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS (일부)`,language:`css`,className:`mt_m`,children:`.mt-1 { margin-top: 8px; }
.mt-2 { margin-top: 16px; }
.mt-3 { margin-top: 24px; }
.mt-4 { margin-top: 32px; }
.mt-5 { margin-top: 40px; }
/* ... (생략)... */

.p-1 { padding: 8px; }
.p-2 { padding: 16px; }
.p-3 { padding: 24px; }
/* ... (생략) ... */`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`방향별 마진/패딩 유틸리티`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@each`}),`와`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@for`}),`를 조합하여`,` `,(0,o.jsx)(`b`,{children:`방향별 유틸리티를 생성`}),`합니다.`]}),(0,o.jsx)(i,{title:`방향별 유틸리티`,language:`css`,className:`mt_m`,children:`$directions: (
  t: top,
  r: right,
  b: bottom,
  l: left
);

@each $short, $full in $directions {
  @for $i from 1 through 10 {
    // 마진
    .m#{$short}-#{$i} {
      margin-#{$full}: #{$i * 8}px;
    }

    // 패딩
    .p#{$short}-#{$i} {
      padding-#{$full}: #{$i * 8}px;
    }
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS (일부)`,language:`css`,className:`mt_m`,children:`.mt-1 { margin-top: 8px; }
.mr-1 { margin-right: 8px; }
.mb-1 { margin-bottom: 8px; }
.ml-1 { margin-left: 8px; }
.mt-2 { margin-top: 16px; }
/* ... (생략) ... */

.pt-1 { padding-top: 8px; }
.pr-1 { padding-right: 8px; }
/* ... (생략) ... */`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면`,` `,(0,o.jsx)(`b`,{children:`4개 방향 × 10개 크기 = 40개의 마진 클래스와 40개의 패딩 클래스가 자동으로 생성`}),`됩니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`색상 유틸리티 클래스 생성`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`색상 유틸리티 클래스를 `,(0,o.jsx)(`b`,{children:`@each로 자동 생성`}),`하는 방법을 알아봅니다.`,(0,o.jsx)(`br`,{}),`브랜드 컬러, 피드백 컬러(성공/위험/경고 등)를 맵으로 관리하면,`,` `,(0,o.jsx)(`b`,{children:`배경·텍스트·테두리 유틸리티를 일관된 규칙으로 대량 생성`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`색상 유틸리티 예시`,language:`css`,className:`mt_m`,children:`$colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745,
  danger: #dc3545,
  warning: #ffc107,
  info: #17a2b8
);

@each $name, $color in $colors {
  // 배경색
  .bg-#{$name} {
    background-color: $color;
  }

  // 텍스트 색상
  .text-#{$name} {
    color: $color;
  }

  // 테두리 색상
  .border-#{$name} {
    border-color: $color;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS (일부)`,language:`css`,className:`mt_m`,children:`.bg-primary {
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
/* ... (생략) ... */`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`이렇게 하면`,` `,(0,o.jsx)(`b`,{children:`6개 색상 × 3가지 유틸리티 = 18개의 클래스가 자동으로 생성`}),`됩니다.`]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`그리드 시스템 클래스 생성`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`그리드 컬럼 클래스를 `,(0,o.jsx)(`b`,{children:`반복문으로 자동 생성`}),`하는 방법을 알아봅니다.`,(0,o.jsx)(`br`,{}),`12컬럼 레이아웃처럼 규칙적인 비율을 사용하는 경우, 반복문으로 컬럼·오프셋 클래스를 만들면 `,(0,o.jsx)(`b`,{children:`레이아웃 변경에도 유연하게 대응`}),`할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`12컬럼 그리드 시스템`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@for`}),`를 사용하여`,` `,(0,o.jsx)(`b`,{children:`12컬럼 그리드 시스템을 생성`}),`합니다.`]}),(0,o.jsx)(i,{title:`12컬럼 그리드 예시`,language:`css`,className:`mt_m`,children:`// 기본 그리드 컬럼
@for $i from 1 through 12 {
  .col-#{$i} {
    width: percentage($i / 12);
  }
}

// 오프셋 컬럼
@for $i from 1 through 11 {
  .offset-#{$i} {
    margin-left: percentage($i / 12);
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS (일부)`,language:`css`,className:`mt_m`,children:`.col-1 { width: 8.33333%; }
.col-2 { width: 16.66667%; }
.col-3 { width: 25%; }
.col-4 { width: 33.33333%; }
.col-5 { width: 41.66667%; }
.col-6 { width: 50%; }
/* ... (생략) ... */

.offset-1 { margin-left: 8.33333%; }
.offset-2 { margin-left: 16.66667%; }
/* ... (생략) ... */`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`반응형 그리드 시스템`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`브레이크포인트별로 `,(0,o.jsx)(`b`,{children:`그리드 클래스를 생성`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`반응형 그리드 예시`,language:`css`,className:`mt_m`,children:`$breakpoints: (
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
);

@each $name, $size in $breakpoints {
  @media (min-width: $size) {
    @for $i from 1 through 12 {
      .col-#{$name}-#{$i} {
        width: percentage($i / 12);
      }
    }
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS (일부)`,filename:`컴파일된 CSS`,defaultOpen:!1,language:`css`,className:`mt_m`,children:`@media (min-width: 576px) {
  .col-sm-1 {
    width: 8.3333333333%;
  }

  .col-sm-2 {
    width: 16.6666666667%;
  }

  .col-sm-3 {
    width: 25%;
  }

  .col-sm-4 {
    width: 33.3333333333%;
  }

  .col-sm-5 {
    width: 41.6666666667%;
  }

  .col-sm-6 {
    width: 50%;
  }

  .col-sm-7 {
    width: 58.3333333333%;
  }

  .col-sm-8 {
    width: 66.6666666667%;
  }

  .col-sm-9 {
    width: 75%;
  }

  .col-sm-10 {
    width: 83.3333333333%;
  }

  .col-sm-11 {
    width: 91.6666666667%;
  }

  .col-sm-12 {
    width: 100%;
  }
}

@media (min-width: 768px) {
  .col-md-1 {
    width: 8.3333333333%;
  }

  .col-md-2 {
    width: 16.6666666667%;
  }

  .col-md-3 {
    width: 25%;
  }

  .col-md-4 {
    width: 33.3333333333%;
  }

  .col-md-5 {
    width: 41.6666666667%;
  }

  .col-md-6 {
    width: 50%;
  }

  .col-md-7 {
    width: 58.3333333333%;
  }

  .col-md-8 {
    width: 66.6666666667%;
  }

  .col-md-9 {
    width: 75%;
  }

  .col-md-10 {
    width: 83.3333333333%;
  }

  .col-md-11 {
    width: 91.6666666667%;
  }

  .col-md-12 {
    width: 100%;
  }
}

/* col-lg-* 와 col-xl-* 도 동일한 패턴으로 생성됩니다 */`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면`,` `,(0,o.jsx)(`b`,{children:`4개 브레이크포인트 × 12개 컬럼 = 48개의 반응형 그리드 클래스가 자동으로 생성`}),`됩니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`폰트 크기 유틸리티 생성`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`폰트 크기 유틸리티 클래스를 `,(0,o.jsx)(`b`,{children:`반복문으로 자동 생성`}),`하는 방법을 알아봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 폰트 크기 유틸리티`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@for`}),`를 사용하여`,` `,(0,o.jsx)(`b`,{children:`폰트 크기 유틸리티를 생성`}),`합니다.`]}),(0,o.jsx)(i,{title:`폰트 크기 유틸리티 예시`,language:`css`,className:`mt_m`,children:`@for $i from 1 through 6 {
  .text-#{$i} {
    font-size: #{$i * 4 + 12}px;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.text-1 { font-size: 16px; }
.text-2 { font-size: 20px; }
.text-3 { font-size: 24px; }
.text-4 { font-size: 28px; }
.text-5 { font-size: 32px; }
.text-6 { font-size: 36px; }`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`의미 기반 폰트 크기`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@each`}),`를 사용하여`,` `,(0,o.jsx)(`b`,{children:`의미 기반 폰트 크기를 생성`}),`합니다.`]}),(0,o.jsx)(i,{title:`의미 기반 폰트 크기 예시`,language:`css`,className:`mt_m`,children:`$font-sizes: (
  xs: 12px,
  sm: 14px,
  base: 16px,
  lg: 18px,
  xl: 20px,
  xxl: 24px
);

@each $name, $size in $font-sizes {
  .text-#{$name} {
    font-size: $size;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.text-xs { font-size: 12px; }
.text-sm { font-size: 14px; }
.text-base { font-size: 16px; }
.text-lg { font-size: 18px; }
.text-xl { font-size: 20px; }
.text-xxl { font-size: 24px; }`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`복합 스페이싱 시스템`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`b`,{children:`여러 반복문을 조합`}),`하면 복잡한 유틸리티 클래스를 효율적으로 생성할 수 있습니다.`,(0,o.jsx)(`br`,{}),`이번 예시에서는 방향과 크기를 조합하여`,` `,(0,o.jsx)(`b`,{children:`완전한 스페이싱 시스템을 생성`}),`하는 방법을 알아봅니다.`]}),(0,o.jsx)(i,{title:`스페이싱 시스템 예시`,language:`css`,className:`mt_m`,children:`$spacing-scale: (
  0: 0,
  1: 4px,
  2: 8px,
  3: 16px,
  4: 24px,
  5: 32px
);

$directions: (
  t: top,
  r: right,
  b: bottom,
  l: left,
  x: (left, right),
  y: (top, bottom)
);

@each $dir-name, $dir-value in $directions {
  @each $scale, $size in $spacing-scale {
    @if type-of($dir-value) == 'list' {
      // x, y는 두 방향
      .m#{$dir-name}-#{$scale} {
        @each $d in $dir-value {
          margin-#{$d}: $size;
        }
      }
    } @else {
      // 단일 방향
      .m#{$dir-name}-#{$scale} {
        margin-#{$dir-value}: $size;
      }
    }
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,filename:`컴파일된 CSS`,defaultOpen:!1,language:`css`,className:`mt_m`,children:`.mt-0 { margin-top: 0; }
.mt-1 { margin-top: 4px; }
.mt-2 { margin-top: 8px; }
.mt-3 { margin-top: 16px; }
.mt-4 { margin-top: 24px; }
.mt-5 { margin-top: 32px; }
.mr-0 { margin-right: 0; }
.mr-1 { margin-right: 4px; }
.mr-2 { margin-right: 8px; }
.mr-3 { margin-right: 16px; }
.mr-4 { margin-right: 24px; }
.mr-5 { margin-right: 32px; }
.mb-0 { margin-bottom: 0; }
.mb-1 { margin-bottom: 4px; }
.mb-2 { margin-bottom: 8px; }
.mb-3 { margin-bottom: 16px; }
.mb-4 { margin-bottom: 24px; }
.mb-5 { margin-bottom: 32px; }
.ml-0 { margin-left: 0; }
.ml-1 { margin-left: 4px; }
.ml-2 { margin-left: 8px; }
.ml-3 { margin-left: 16px; }
.ml-4 { margin-left: 24px; }
.ml-5 { margin-left: 32px; }
.mx-0 { margin-left: 0; margin-right: 0; }
.mx-1 { margin-left: 4px; margin-right: 4px; }
.mx-2 { margin-left: 8px; margin-right: 8px; }
.mx-3 { margin-left: 16px; margin-right: 16px; }
.mx-4 { margin-left: 24px; margin-right: 24px; }
.mx-5 { margin-left: 32px; margin-right: 32px; }
.my-0 { margin-top: 0; margin-bottom: 0; }
.my-1 { margin-top: 4px; margin-bottom: 4px; }
.my-2 { margin-top: 8px; margin-bottom: 8px; }
.my-3 { margin-top: 16px; margin-bottom: 16px; }
.my-4 { margin-top: 24px; margin-bottom: 24px; }
.my-5 { margin-top: 32px; margin-bottom: 32px; }`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`이렇게 하면`,` `,(0,o.jsx)(`b`,{children:`6개 방향 × 6개 크기 = 36개의 마진 유틸리티 클래스가 자동으로 생성`}),`됩니다.`]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실무 통합 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`실무에서는 `,(0,o.jsx)(`b`,{children:`여러 반복문을 조합`}),`하여 간격, 색상, 폰트 크기, 그리드 등의 유틸리티를 `,(0,o.jsx)(`b`,{children:`하나의 파일에 통합`}),`하여 사용합니다.`,(0,o.jsx)(`br`,{}),`아래 예시는 실제 프로젝트에서 활용할 수 있는`,` `,(0,o.jsx)(`b`,{children:`완전한 유틸리티 클래스 시스템`}),`의 구조입니다.`]}),(0,o.jsx)(i,{title:`완전한 유틸리티 시스템`,language:`css`,className:`mt_m`,children:`// ============================================
// 간격 유틸리티
// ============================================
@for $i from 1 through 10 {
  .mt-#{$i} { margin-top: #{$i * 8}px; }
  .mb-#{$i} { margin-bottom: #{$i * 8}px; }
  .ml-#{$i} { margin-left: #{$i * 8}px; }
  .mr-#{$i} { margin-right: #{$i * 8}px; }
  .p-#{$i} { padding: #{$i * 8}px; }
}

// ============================================
// 색상 유틸리티
// ============================================
$colors: (
  primary: #0a58ca,
  secondary: #6c757d,
  success: #28a745,
  danger: #dc3545
);

@each $name, $color in $colors {
  .bg-#{$name} { background-color: $color; }
  .text-#{$name} { color: $color; }
  .border-#{$name} { border-color: $color; }
}

// ============================================
// 폰트 크기 유틸리티
// ============================================
$font-sizes: (
  sm: 14px,
  base: 16px,
  lg: 18px,
  xl: 20px
);

@each $name, $size in $font-sizes {
  .text-#{$name} {
    font-size: $size;
  }
}

// ============================================
// 그리드 시스템
// ============================================
@for $i from 1 through 12 {
  .col-#{$i} {
    width: percentage($i / 12);
  }
}

// ============================================
// z-index 유틸리티
// ============================================
@for $i from 1 through 10 {
  .z-#{$i} {
    z-index: $i * 10;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`이렇게 구성하면`,` `,(0,o.jsx)(`b`,{children:`프로젝트에서 사용할 모든 유틸리티 클래스를 자동으로 생성`}),`할 수 있습니다.`]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`반복문을 활용한 클래스 자동 생성에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`클래스 자동 생성의 개념`}),`: 반복문으로 유사한 패턴의 클래스를 자동 생성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`간격 유틸리티`}),`: 마진, 패딩 유틸리티를`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@for`}),`로 자동 생성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`색상 유틸리티`}),`: 색상 맵을`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@each`}),`로 순회하여 배경, 텍스트, 테두리 유틸리티 생성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`그리드 시스템`}),`: 12컬럼 그리드와 반응형 그리드를 자동 생성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`폰트 크기 유틸리티`}),`: 폰트 크기 유틸리티를 자동 생성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`복합 유틸리티`}),`: 여러 반복문을 조합하여 복잡한 유틸리티 생성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`실무 통합`}),`: 모든 유틸리티를 하나의 시스템으로 통합`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`초급자가 이해하기 쉬운 예제 중심 설명`}),`을 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/08_scss_04.png`,alt:`클래스 생성`}),(0,o.jsx)(`figcaption`,{children:`클래스 생성`})]})]})}export{l as default,a as t};