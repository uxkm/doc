import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`CSS 변수와 SCSS 변수의 차이`,description:`CSS Custom Properties(CSS 변수)와 SCSS 변수의 차이를 상세히 비교합니다. 각각의 특징, 사용 시기, 장단점, 그리고 함께 사용하는 방법을 예시와 함께 설명합니다.`,keyword:`css 변수, scss 변수, css custom properties, css 변수 vs scss 변수, css --variable, scss $variable`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`CSS와 SCSS 모두 `,(0,o.jsx)(`b`,{children:`변수 기능을 제공`}),`하지만, 각각의 특징과 사용 방법이 다릅니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`b`,{children:`CSS Custom Properties`}),`(`,(0,o.jsx)(`code`,{className:`t_blue`,children:`--variable`}),`)는 브라우저에서 직접 실행되는 변수이고, `,(0,o.jsx)(`b`,{children:`SCSS 변수`}),`(`,(0,o.jsx)(`code`,{className:`t_blue`,children:`$variable`}),`)는 컴파일 시점에 값으로 치환됩니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 CSS 변수와 SCSS 변수의 차이를 상세히 비교하고, 각각의 장단점, 사용 시기, 그리고 함께 사용하는 방법을 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsxs)(`h2`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`SCSS 변수`}),`와`,` `,(0,o.jsx)(`i`,{className:`t_green`,children:`CSS 변수`}),`의 기본 차이`]}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`CSS 변수와 SCSS 변수는 `,(0,o.jsx)(`b`,{children:`근본적으로 다른 방식`}),`으로 동작합니다.`,(0,o.jsx)(`br`,{}),`어떤 상황에서 어떤 변수를 써야 할지 판단하려면, 두 변수가`,` `,(0,o.jsx)(`b`,{children:`어느 시점에, 어떤 규칙으로 값이 결정되는지`}),`를 먼저 이해하는 것이 중요합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn t_blue`,children:`SCSS 변수 ($variable)`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`SCSS 변수는 `,(0,o.jsx)(`b`,{children:`컴파일 시점에 값으로 치환`}),`됩니다.`,(0,o.jsx)(`br`,{}),`최종 CSS 파일에는 변수명이 아닌 실제 값이 들어갑니다.`]}),(0,o.jsx)(i,{title:`SCSS 변수 예시`,language:`css`,className:`mt_m`,children:`// SCSS
$primary-color: #0a58ca;

.button {
  background: $primary-color;
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`/* CSS */
.button {
  background: #0a58ca;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`SCSS 변수는 `,(0,o.jsx)(`b`,{children:`컴파일 전에만 존재`}),`하며, 브라우저는 변수 자체를 볼 수 없습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn t_green`,children:`CSS 변수 (--variable)`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`CSS Custom Properties는 `,(0,o.jsx)(`b`,{children:`브라우저에서 실행되는 변수`}),`입니다.`,(0,o.jsx)(`br`,{}),`최종 CSS 파일에도 변수명이 그대로 남아있고, 브라우저가 런타임에 값을 해석합니다.`]}),(0,o.jsx)(i,{title:`CSS 변수 예시`,language:`css`,className:`mt_m`,children:`/* CSS */
:root {
  --primary-color: #0a58ca;
}

.button {
  background: var(--primary-color);
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`CSS 변수는 `,(0,o.jsx)(`b`,{children:`브라우저에서 직접 읽고 사용`}),`할 수 있으며, JavaScript로도 동적으로 변경할 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`주요 차이점 비교`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`b`,{className:`t_green`,children:`CSS 변수`}),`와`,` `,(0,o.jsx)(`b`,{className:`t_blue`,children:`SCSS 변수`}),`의 `,(0,o.jsx)(`b`,{children:`주요 차이점`}),`을 체계적으로 비교해봅니다.`,(0,o.jsx)(`br`,{}),`처리 시점, 동적 변경, 스코프, 호환성처럼 자주 헷갈리는 항목들을 표로 정리해 두면, `,(0,o.jsx)(`b`,{children:`실무에서 변수 전략을 세울 때 빠르게 참고`}),`할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`처리 시점`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`가장 큰 차이는 `,(0,o.jsx)(`b`,{children:`변수가 처리되는 시점`}),`입니다.`]}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`변수 타입`}),(0,o.jsx)(`li`,{className:`cell content`,children:`처리 시점`}),(0,o.jsx)(`li`,{className:`cell content`,children:`최종 CSS`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_blue weight-600`,children:`SCSS 변수`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`처리 시점`,children:`컴파일 시점 (빌드 타임)`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`최종 CSS`,children:`실제 값으로 치환됨`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen weight-600`,children:`CSS 변수`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`처리 시점`,children:`런타임 (브라우저에서 실행)`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`최종 CSS`,children:`변수명이 그대로 유지됨`})]})]})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`동적 변경 가능 여부`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`CSS 변수는 `,(0,o.jsx)(`b`,{children:`JavaScript로 동적으로 변경`}),`할 수 있지만, SCSS 변수는 컴파일 후에는 변경할 수 없습니다.`]}),(0,o.jsx)(i,{title:`CSS 변수 동적 변경 예시`,language:`css`,className:`mt_m`,children:`/* CSS */
:root {
  --primary-color: #0a58ca;
}

.button {
  background: var(--primary-color);
}

// JavaScript
document.documentElement.style.setProperty('--primary-color', '#0066cc');
// 버튼 색상이 즉시 변경됨
`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`CSS 변수는 `,(0,o.jsx)(`b`,{children:`테마 전환, 다크 모드, 사용자 설정`}),` 등 런타임에 값을 변경해야 할 때 유용합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`스코프(Scope)`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`두 변수 모두 `,(0,o.jsx)(`b`,{children:`스코프를 가지지만`}),`, 동작 방식이 다릅니다.`]}),(0,o.jsx)(i,{title:`SCSS 변수 스코프`,language:`css`,className:`mt_m`,children:`// 전역 변수
$primary-color: #0a58ca;

.button {
  // 지역 변수 (이 블록 안에서만 사용 가능)
  $local-color: #084298;
  background: $local-color;
}

// $local-color는 여기서 사용 불가
`}),(0,o.jsx)(i,{title:`CSS 변수 스코프`,language:`css`,className:`mt_m`,children:`/* 전역 변수 */
:root {
  --primary-color: #0a58ca;
}

.button {
  /* 지역 변수 (이 요소와 자식 요소에서 사용 가능) */
  --local-color: #084298;
  background: var(--local-color);
}

/* 자식 요소에서도 --local-color 사용 가능 */
`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`CSS 변수는 `,(0,o.jsx)(`b`,{children:`상속되므로 자식 요소에서도 사용`}),`할 수 있지만, SCSS 변수는 선언된 범위에서만 사용 가능합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`브라우저 호환성`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`브라우저 호환성도 중요한 차이점입니다.`}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`변수 타입`}),(0,o.jsx)(`li`,{className:`cell content`,children:`호환성`}),(0,o.jsx)(`li`,{className:`cell content`,children:`설명`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_blue weight-600`,children:`SCSS 변수`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`호환성`,children:`모든 브라우저`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`설명`,children:`컴파일되어 일반 CSS가 되므로 모든 브라우저에서 동작`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen weight-600`,children:`CSS 변수`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`호환성`,children:`IE11 미지원`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`설명`,children:`모던 브라우저에서만 지원 (Chrome 49+, Firefox 31+, Safari 9.1+)`})]})]})]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`IE11을 지원해야 하는 프로젝트에서는 `,(0,o.jsx)(`b`,{children:`SCSS 변수를 사용`}),`하거나, CSS 변수와 함께 폴백 값을 제공해야 합니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`각 변수의 장단점`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`b`,{className:`t_green`,children:`CSS 변수`}),`와`,` `,(0,o.jsx)(`b`,{className:`t_blue`,children:`SCSS 변수`}),` 각각의 `,(0,o.jsx)(`b`,{children:`장점과 단점`}),`을 정리합니다.`,(0,o.jsx)(`br`,{}),`두 변수 중 하나만 고집하기보다는,`,` `,(0,o.jsx)(`b`,{children:`어떤 역할은 SCSS 변수로, 어떤 역할은 CSS 변수로 맡길지`}),`를 결정할 때 기준점으로 삼을 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`SCSS 변수`}),`의 장단점`]}),(0,o.jsx)(`p`,{className:`mt_m`,children:`SCSS 변수를 사용할 때의 장점과 단점입니다.`}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`구분`}),(0,o.jsx)(`li`,{className:`cell content`,children:`내용`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_blue`,children:`장점`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`내용`,children:[`• 모든 브라우저 호환`,(0,o.jsx)(`br`,{}),`• 컴파일 시점에 최적화 가능`,(0,o.jsx)(`br`,{}),`• SCSS 문법과 자연스럽게 통합 (연산, 함수 등)`,(0,o.jsx)(`br`,{}),`• 미사용 변수 자동 제거 가능`]})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_blue`,children:`단점`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`내용`,children:[`• 런타임에 변경 불가`,(0,o.jsx)(`br`,{}),`• JavaScript로 접근 불가`,(0,o.jsx)(`br`,{}),`• 컴파일 과정 필요`]})]})]})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_green`,children:`CSS 변수`}),`의 장단점`]}),(0,o.jsx)(`p`,{className:`mt_m`,children:`CSS 변수를 사용할 때의 장점과 단점입니다.`}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`구분`}),(0,o.jsx)(`li`,{className:`cell content`,children:`내용`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`장점`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`내용`,children:[`• 런타임에 동적 변경 가능`,(0,o.jsx)(`br`,{}),`• JavaScript로 접근 및 수정 가능`,(0,o.jsx)(`br`,{}),`• 상속을 통한 스코프 관리`,(0,o.jsx)(`br`,{}),`• 컴파일 불필요 (순수 CSS)`]})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`단점`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`내용`,children:[`• IE11 미지원`,(0,o.jsx)(`br`,{}),`• SCSS 연산/함수와 직접 사용 불가`,(0,o.jsx)(`br`,{}),`• 성능 오버헤드 (약간)`]})]})]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`언제 어떤 변수를 사용할까?`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`상황에 따라 `,(0,o.jsx)(`b`,{children:`어떤 변수를 사용하는 것이 적합한지`}),` 가이드라인을 제시합니다.`]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`SCSS 변수를 사용하는 경우`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`IE11 지원이 필요한 경우`}),`: CSS 변수는 IE11에서 동작하지 않으므로 SCSS 변수 사용`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`컴파일 시점에 최적화가 필요한 경우`}),`: SCSS 연산이나 함수를 사용해야 할 때`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`런타임 변경이 불필요한 경우`}),`: 정적인 값만 필요한 경우`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`기존 SCSS 프로젝트`}),`: 이미 SCSS 변수를 사용 중인 프로젝트`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`CSS 변수를 사용하는 경우`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`다크 모드나 테마 전환이 필요한 경우`}),`: 런타임에 값을 변경해야 할 때`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`JavaScript로 동적 제어가 필요한 경우`}),`: 사용자 설정이나 실시간 변경이 필요할 때`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`모던 브라우저만 지원하는 경우`}),`: IE11 지원이 필요 없을 때`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`순수 CSS 프로젝트`}),`: SCSS를 사용하지 않는 프로젝트`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`함께 사용하는 방법`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`SCSS 변수와 CSS 변수를 `,(0,o.jsx)(`b`,{children:`함께 사용`}),`할 수도 있습니다.`,(0,o.jsx)(`br`,{}),`각각의 장점을 활용하는 방법을 알아봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`SCSS 변수로 CSS 변수 생성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`SCSS 변수를 사용하여 `,(0,o.jsx)(`b`,{children:`CSS 변수를 동적으로 생성`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`SCSS 변수로 CSS 변수 생성`,language:`css`,className:`mt_m`,children:`// SCSS 변수
$primary-color: #0a58ca;
$spacing-md: 16px;

:root {
  // SCSS 변수를 CSS 변수로 변환
  --primary-color: #{$primary-color};
  --spacing-md: #{$spacing-md};
}

.button {
  // CSS 변수 사용
  background: var(--primary-color);
  padding: var(--spacing-md);
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면`,` `,(0,o.jsx)(`b`,{children:`SCSS의 컴파일 시점 최적화와 CSS 변수의 런타임 유연성`}),`을 모두 활용할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`다크 모드 예시`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`SCSS 변수와 CSS 변수를 함께 사용하여 `,(0,o.jsx)(`b`,{children:`다크 모드를 구현`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`다크 모드 구현 예시`,language:`css`,className:`mt_m`,children:`// SCSS 변수로 기본 색상 정의
$color-primary: #0a58ca;
$color-bg-light: #ffffff;
$color-bg-dark: #212529;
$color-text-light: #212529;
$color-text-dark: #ffffff;

:root {
  // 라이트 모드 CSS 변수
  --primary-color: #{$color-primary};
  --bg-color: #{$color-bg-light};
  --text-color: #{$color-text-light};
}

[data-theme="dark"] {
  // 다크 모드 CSS 변수
  --primary-color: #{$color-primary};
  --bg-color: #{$color-bg-dark};
  --text-color: #{$color-text-dark};
}

.body {
  background: var(--bg-color);
  color: var(--text-color);
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 구성하면`,` `,(0,o.jsxs)(`b`,{children:[`JavaScript로 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`data-theme`}),` 속성만 변경해도 전체 테마가 즉시 전환됩니다.`]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실무 사용 가이드`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`실무에서 `,(0,o.jsx)(`b`,{children:`어떻게 변수를 선택하고 사용할지`}),` 가이드라인을 제시합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`하이브리드 접근법`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`실무에서는 `,(0,o.jsx)(`b`,{children:`두 변수를 함께 사용`}),`하는 하이브리드 접근법이 효과적입니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`SCSS 변수`}),`: 컴파일 시점에 결정되는 값 (색상 팔레트, 간격 시스템, 폰트 크기 등)`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`CSS 변수`}),`: 런타임에 변경될 수 있는 값 (테마 색상, 사용자 설정 등)`]})]}),(0,o.jsx)(i,{title:`하이브리드 접근법 예시`,language:`css`,className:`mt_m`,children:`// SCSS 변수: 정적인 디자인 토큰
$color-primary: #0a58ca;
$color-bg-light: #ffffff;
$spacing-sm: 8px;
$spacing-md: 16px;
$font-size-base: 16px;

:root {
  // CSS 변수: 동적으로 변경 가능한 값
  --theme-primary: #{$color-primary};
  --theme-bg: #{$color-bg-light};
}

.button {
  // SCSS 변수 사용 (정적 값)
  padding: $spacing-sm $spacing-md;
  font-size: $font-size-base;

  // CSS 변수 사용 (동적 값)
  background: var(--theme-primary);
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`마이그레이션 전략`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`기존 SCSS 변수 프로젝트에서 CSS 변수로 전환하는 전략입니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`점진적 전환`}),`: 새로운 기능부터 CSS 변수 사용, 기존 코드는 유지`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`하이브리드 유지`}),`: 두 변수를 함께 사용하여 각각의 장점 활용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`폴백 제공`}),`: IE11 지원이 필요한 경우 CSS 변수와 함께 기본값 제공`]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`CSS 변수와 SCSS 변수의 차이에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`처리 시점`}),`: SCSS 변수는 컴파일 시점, CSS 변수는 런타임`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`동적 변경`}),`: CSS 변수는 JavaScript로 런타임 변경 가능, SCSS 변수는 불가`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`브라우저 호환`}),`: SCSS 변수는 모든 브라우저, CSS 변수는 IE11 미지원`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`사용 시기`}),`: SCSS 변수는 정적 값, CSS 변수는 동적 변경이 필요한 경우`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`함께 사용`}),`: 하이브리드 접근법으로 각각의 장점 활용 가능`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 섹션에서는 `,(0,o.jsx)(`b`,{children:`SCSS의 연산과 함수`}),`에 대해 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/04_scss_05.png`,alt:`CSS 변수와 SCSS 변수 비교`}),(0,o.jsx)(`figcaption`,{children:`CSS 변수와 SCSS 변수 비교`})]})]})}export{l as default,a as t};