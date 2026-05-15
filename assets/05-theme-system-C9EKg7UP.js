import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`테마 시스템 (Light / Dark)`,description:`기존 SCSS 구조를 변경하지 않고 Light/Dark 테마를 확장하는 방법을 알아봅니다. 컬러 토큰 교체와 data-theme 기반 테마 전환을 상세히 설명합니다.`,keyword:`테마 시스템, theme system, 다크 모드, dark mode, light theme, dark theme, scss 테마`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`테마 시스템은 `,(0,o.jsx)(`b`,{children:`기존 컴포넌트 SCSS 구조를 변경하지 않고`}),` 테마를 확장하는 방식입니다.`,(0,o.jsx)(`br`,{}),`"다크 모드는 새 CSS를 작성하는 것이 아니라 토큰을 교체하는 것"이라는 개념이 핵심입니다.`,(0,o.jsx)(`br`,{}),`컴포넌트 SCSS는 변하지 않고, 테마는 토큰 레이어의 책임입니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 Light/Dark 컬러 토큰 정의, data-theme 기반 테마 전환, 동일 컴포넌트의 테마별 결과를 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`테마 시스템의 개념`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`테마 시스템은 `,(0,o.jsx)(`b`,{children:`색상 토큰만 교체하여 전체 디자인을 변경`}),`하는 방식입니다.`,(0,o.jsx)(`br`,{}),`컴포넌트 코드는 변경하지 않고, CSS 변수나 데이터 속성을 통해 토큰 값만 변경합니다.`,(0,o.jsx)(`br`,{}),`이 방식의 장점은 기존 구조를 유지하면서도 여러 테마를 지원할 수 있다는 점입니다.`]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`테마 시스템의 원칙`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`토큰 레이어의 책임`}),`: 테마는 토큰에서만 정의되고 관리됨`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`컴포넌트 독립성`}),`: 컴포넌트 SCSS는 테마에 의존하지 않음`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`동적 전환`}),`: CSS 변수나 데이터 속성으로 런타임에 테마 전환 가능`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`확장성`}),`: 새로운 테마 추가 시 토큰만 추가하면 됨`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`CSS 변수를 사용한 테마 시스템`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`CSS 변수를 활용하면 런타임에 테마를 전환할 수 있습니다.`,(0,o.jsx)(`br`,{}),`SCSS 변수 대신`,` `,(0,o.jsx)(`b`,{className:`t_blue`,children:`CSS 변수를 사용하고, 테마별로 CSS 변수 값만 변경합니다.`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Light 테마 토큰 정의`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`Light 테마의 색상 토큰을 CSS 변수로 정의합니다.`}),(0,o.jsx)(i,{title:`_theme-light.scss`,language:`scss`,className:`mt_m`,children:`:root {
  // Primary 색상
  --color-primary: #0a58ca;
  --color-primary-light: #74afff;
  --color-primary-dark: #06367c;

  // Neutral 색상
  --color-text: #212529;
  --color-text-secondary: #6c757d;
  --color-border: #dee2e6;
  --color-background: #ffffff;
  --color-surface: #f8f9fa;

  // Semantic 색상
  --color-success: #28a745;
  --color-error: #dc3545;
  --color-warning: #ffc107;
  --color-info: #17a2b8;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Dark 테마 토큰 정의`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`Dark 테마의 색상 토큰을 정의합니다. Light 테마와 변수명은 동일하지만 값만 다릅니다.`}),(0,o.jsx)(i,{title:`_theme-dark.scss`,language:`scss`,className:`mt_m`,children:`[data-theme="dark"] {
  // Primary 색상
  --color-primary: #5da3ff;
  --color-primary-light: #8bc4ff;
  --color-primary-dark: #2d7fd9;

  // Neutral 색상 (반전)
  --color-text: #ffffff;
  --color-text-secondary: #adb5bd;
  --color-border: #495057;
  --color-background: #121212;
  --color-surface: #1e1e1e;

  // Semantic 색상
  --color-success: #4caf50;
  --color-error: #f44336;
  --color-warning: #ff9800;
  --color-info: #2196f3;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`[data-theme="dark"]`}),` 속성 선택자를 사용하여 Dark 테마를 적용합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`컴포넌트에서 CSS 변수 사용`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`컴포넌트에서는 CSS 변수를 사용하여 테마별로 자동으로 색상이 변경되도록 합니다.`}),(0,o.jsx)(i,{title:`_button.scss`,language:`scss`,className:`mt_m`,children:`.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  background-color: var(--color-primary);
  color: #ffffff;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: var(--color-primary-dark);
    border-color: var(--color-primary-dark);
    opacity: 1;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(10, 88, 202, 0.25);
  }
}

.button--secondary {
  background-color: #ffffff;
  color: var(--color-primary);
  border-color: var(--color-primary);

  &:hover {
    background-color: var(--color-primary);
    color: #ffffff;
    border-color: var(--color-primary);
    opacity: 1;
  }
}`}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`컴포넌트 코드는 변경하지 않고, CSS 변수만 사용하면 테마 전환이 자동으로 적용됩니다.`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`data-theme 전환 방법`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`HTML 요소에 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`data-theme`}),` 속성을 추가하거나 변경하여 테마를 전환합니다.`,(0,o.jsx)(`br`,{}),`일반적으로 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`<html>`}),` 또는`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`<body>`}),` 요소에 적용합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`HTML 구조`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`테마 전환을 위한 HTML 구조입니다.`}),(0,o.jsx)(i,{title:`HTML 예시`,language:`html`,className:`mt_m`,children:`<!-- Light 테마 -->
<html data-theme="light">
  <body>
    <button class="button button--primary">Primary Button</button>
  </body>
</html>

<!-- Dark 테마 -->
<html data-theme="dark">
  <body>
    <button class="button button--primary">Primary Button</button>
  </body>
</html>`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`JavaScript로 테마 전환`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`JavaScript를 사용하여 런타임에 테마를 전환하는 방법입니다.`}),(0,o.jsx)(i,{title:`JavaScript 예시`,language:`javascript`,className:`mt_m`,children:`// 테마 전환 함수
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
}

// 로컬 스토리지에 테마 저장
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// 페이지 로드 시 저장된 테마 적용
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);`}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`테마를 로컬 스토리지에 저장하면 사용자가 선택한 테마를 다음 방문 시에도 유지할 수 있습니다.`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`테마 전환 통합 예시`}),(0,o.jsx)(`p`,{className:`mt_m t_blue`,children:`※ 코드펜에서는 SCSS 파셜을 사용할 수 없으므로, 이 예시는 사용되는 토큰만을 하나의 SCSS 파일에 모아 작성한 예제입니다.`}),(0,o.jsxs)(`iframe`,{className:`codepen mt_m`,height:650,style:{width:`100%`},scrolling:`no`,title:`10.5. 테마 전환 통합 예시`,src:`https://codepen.io/uxkm/embed/ogLNpXR?default-tab=css%2Cresult&theme-id=dark`,frameBorder:`no`,loading:`lazy`,allowTransparency:!0,children:[`See the Pen`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm/pen/ogLNpXR`,children:`10.5. 테마 전환 통합 예시`}),` `,`by UXKM (`,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm`,children:`@uxkm`}),`) on`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io`,children:`CodePen`}),`.`]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`코드펜에서는 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`를 사용할 수 없으므로, 모든 토큰과 컴포넌트 스타일을 하나의 SCSS 파일에 작성합니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`b`,{children:`헤더의 테마 전환 버튼`}),`을 클릭하면 Light/Dark 테마가 전환되며,`,` `,(0,o.jsx)(`b`,{children:`배경색, 텍스트 색상, 테두리 색상, 컴포넌트 색상`}),` 등이 모두 변경되는 것을 확인할 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`SCSS 변수와 CSS 변수 혼합 사용`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`실무에서는 SCSS 변수와 CSS 변수를 함께 사용하는 경우가 많습니다.`,(0,o.jsx)(`br`,{}),`SCSS 변수는 컴파일 타임에 결정되는 값(폰트 크기, 간격 등)에 사용하고, CSS 변수는 런타임에 변경되는 값(색상 등)에 사용합니다.`]}),(0,o.jsx)(i,{title:`_card.scss`,language:`scss`,className:`mt_m`,children:`@use "../tokens/spacing" as spacing;
@use "../tokens/radius" as radius;
@use "../tokens/typography" as typo;

.card {
  display: flex;
  flex-direction: column;
  // SCSS 변수: 컴파일 타임에 결정
  padding: 1.25rem;
  border-radius: radius.$radius-lg;
  font-size: typo.$font-size-base;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

  // CSS 변수: 런타임에 변경 가능
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text);
}`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`이렇게 하면 레이아웃과 간격은 고정되면서, 색상만 테마에 따라 변경됩니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`다중 테마 지원`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`Light와 Dark 외에도 여러 테마를 지원하려면, 각 테마별로 CSS 변수 값을 정의하면 됩니다.`}),(0,o.jsx)(i,{title:`_theme-blue.scss`,language:`scss`,className:`mt_m`,children:`[data-theme="blue"] {
  --color-primary: #1976d2;
  --color-primary-light: #64b5f6;
  --color-primary-dark: #0d47a1;
  --color-text: #212529;
  --color-background: #ffffff;
  // ... 나머지 색상
}

[data-theme="green"] {
  --color-primary: #388e3c;
  --color-primary-light: #81c784;
  --color-primary-dark: #1b5e20;
  --color-text: #212529;
  --color-background: #ffffff;
  // ... 나머지 색상
}`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`컴포넌트 코드는 변경하지 않고, 새로운 테마 토큰만 추가하면 여러 테마를 지원할 수 있습니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`테마 파일 구조`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`테마 파일들을 체계적으로 정리하는 방법입니다.`,(0,o.jsx)(`br`,{}),`각 테마를 별도 파일로 분리하여 관리합니다.`]}),(0,o.jsx)(i,{title:`테마 파일 구조`,language:`scss`,className:`mt_m`,children:`themes/
  ├─ _theme-light.scss
  ├─ _theme-dark.scss
  ├─ _theme-blue.scss
  └─ _themes.scss        /* 모든 테마를 한 번에 import */`}),(0,o.jsx)(i,{title:`_themes.scss`,language:`scss`,className:`mt_ms`,children:`@forward "theme-light";
@forward "theme-dark";
@forward "theme-blue";`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`테마 시스템 구성에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`테마 시스템의 개념`}),`: 토큰만 교체하여 전체 디자인 변경`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`CSS 변수 사용`}),`: 런타임에 테마 전환 가능하도록 CSS 변수 활용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`Light/Dark 토큰`}),`: 동일한 변수명으로 다른 값 정의`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`data-theme 전환`}),`: HTML 속성으로 테마 전환 제어`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`컴포넌트 독립성`}),`: 컴포넌트 SCSS는 테마에 의존하지 않음`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`SCSS/CSS 변수 혼합`}),`: 컴파일 타임 값은 SCSS, 런타임 값은 CSS 변수`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`다중 테마 지원`}),`: 새로운 테마 추가 시 토큰만 추가`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`디자인 시스템 SCSS 구조`}),`를 정리하는 방법을 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/10_scss_05.png`,alt:`테마 시스템의 개념`}),(0,o.jsx)(`figcaption`,{children:`테마 시스템의 개념`})]})]})}export{l as default,a as t};