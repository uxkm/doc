import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`Vue / React 컴포넌트 스타일 구조`,description:`지금까지 배운 SCSS가 Vue/React 같은 프레임워크에서도 그대로 사용될 수 있음을 보여줍니다. 프레임워크 환경에서의 현실적인 스타일 구조와 컴포넌트 단위 SCSS 연결 방식을 설명합니다.`,keyword:`vue scss, react scss, 프레임워크 scss, component scss, vue component style, react component style`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`SCSS는 프레임워크에 종속되지 않는 독립적인 스타일 시스템입니다.`,(0,o.jsx)(`br`,{}),`Vue나 React 같은 프레임워크를 사용하더라도,`,` `,(0,o.jsx)(`b`,{children:`지금까지 배운 SCSS 구조를 그대로 활용`}),`할 수 있습니다.`,(0,o.jsx)(`br`,{}),`컴포넌트 구조와 스타일 구조를 1:1로 맞추면, 유지보수성과 일관성을 크게 향상시킬 수 있습니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 Framework 공통 SCSS, 컴포넌트 단위 SCSS 연결 방식, Vue/React 컴포넌트 예시를 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`SCSS와 프레임워크의 관계`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`SCSS는 CSS 전처리기이므로, 어떤 프레임워크를 사용하든 상관없이 동작합니다.`,(0,o.jsx)(`br`,{}),`Vue의 Single File Component나 React의 CSS Module에서도 SCSS를 그대로 사용할 수 있습니다.`,(0,o.jsx)(`br`,{}),`중요한 것은 프레임워크가 아니라 `,(0,o.jsx)(`b`,{children:`스타일 구조를 올바르게 설계`}),`하는 것입니다.`]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`프레임워크별 SCSS 사용 방식`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`Vue`}),`: Single File Component의`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`<style lang="scss">`}),`에서 사용`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`React`}),`: CSS Module, styled-components, 또는 일반 SCSS 파일로 사용`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`공통점`}),`: 모두 SCSS 문법과 구조를 그대로 사용 가능`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`공통 SCSS 구조`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`프레임워크를 사용하더라도, tokens, base, layout, themes는 공통으로 관리합니다.`,(0,o.jsx)(`br`,{}),`이 부분은 모든 컴포넌트에서 공유하므로, 프로젝트 루트에 두고 전역으로 import합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`공통 SCSS 파일 구조`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`프로젝트 루트의 공통 SCSS 구조입니다.`}),(0,o.jsx)(i,{title:`공통 SCSS 구조`,language:`plaintext`,className:`mt_m`,lineNumbers:!1,children:`scss/
  ├─ tokens/              // 공통 토큰
  │   ├─ _tokens-color.scss
  │   ├─ _tokens-typography.scss
  │   └─ _tokens.scss
  │
  ├─ base/                // 공통 기본 스타일
  │   ├─ _reset.scss
  │   └─ _base.scss
  │
  ├─ layout/              // 공통 레이아웃
  │   └─ _container.scss
  │
  ├─ themes/              // 공통 테마
  │   ├─ _theme-light.scss
  │   └─ _theme-dark.scss
  │
  └─ main.scss            // 전역 스타일`}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`이 구조는 프레임워크와 무관하게 동일하게 사용할 수 있습니다.`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`전역 스타일 설정`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`프레임워크의 진입점(main.js, index.js 등)에서 공통 SCSS를 import합니다.`}),(0,o.jsx)(i,{title:`main.js (Vue)`,language:`javascript`,className:`mt_m`,children:`// Vue main.js
import { createApp } from 'vue'
import App from './App.vue'
import './scss/main.scss'  // 전역 SCSS import

createApp(App).mount('#app')`}),(0,o.jsx)(i,{title:`index.js (React)`,language:`jsx`,className:`mt_m`,children:`// React index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/main.scss'  // 전역 SCSS import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`컴포넌트 단위 SCSS`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`각 컴포넌트의 스타일은 컴포넌트 파일과 함께 두거나, 별도 SCSS 파일로 분리할 수 있습니다.`,(0,o.jsx)(`br`,{}),`컴포넌트 구조와 스타일 구조를 1:1로 맞추면 파일을 찾고 관리하기가 쉬워집니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Vue Single File Component`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`Vue에서는 컴포넌트 파일 내부에 SCSS를 작성할 수 있습니다.`}),(0,o.jsx)(i,{title:`Button.vue`,language:`html`,className:`mt_m`,children:`<template>
  <button :class="['button', \`button--\${type}\`, \`button--\${size}\`]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: { type: String, default: 'primary' },
    size: { type: String, default: 'md' }
  }
}
<\/script>

<style lang="scss" scoped>
@use '../../scss/tokens/tokens' as *;

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 10px 20px;
  font-size: $font-size-base;
  font-weight: 500;
  line-height: 1.5;
  border: 1px solid transparent;
  border-radius: $radius-md;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  white-space: nowrap;

  &:hover {
    opacity: 0.85;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(10, 88, 202, 0.25);
  }
}

.button--primary {
  background-color: $color-primary;
  color: #ffffff;
  border-color: $color-primary;

  &:hover {
    background-color: $color-primary-dark;
    border-color: $color-primary-dark;
    opacity: 1;
  }
}
</style>`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`scoped`}),` 속성을 사용하면 해당 컴포넌트에만 스타일이 적용됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Vue에서 별도 SCSS 파일 사용`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`컴포넌트별로 SCSS 파일을 분리하는 방법입니다.`}),(0,o.jsx)(i,{title:`Button.vue`,language:`html`,className:`mt_m`,children:`<template>
  <button :class="['button', \`button--\${type}\`]">
    <slot></slot>
  </button>
</template>

<script>
export default { name: 'Button', props: { type: String } }
<\/script>

<style lang="scss" src="./Button.scss"></style>`}),(0,o.jsx)(i,{title:`Button.scss`,language:`scss`,className:`mt_m`,children:`@use '../../scss/tokens/tokens' as *;

.button {
  // Button 스타일
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`React CSS Module`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`React에서 CSS Module을 사용하는 방법입니다.`}),(0,o.jsx)(i,{title:`Button.jsx`,language:`jsx`,className:`mt_m`,children:`import React from 'react'
import styles from './Button.module.scss'

const Button = ({ type = 'primary', children }) => {
  return (
    <button className={\`\${styles.button} \${styles[\`button--\${type}\`]}\`}>
      {children}
    </button>
  )
}

export default Button`}),(0,o.jsx)(i,{title:`Button.module.scss`,language:`scss`,className:`mt_m`,children:`@use '../../scss/tokens/tokens' as *;

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 10px 20px;
  font-size: $font-size-base;
  font-weight: 500;
  line-height: 1.5;
  border: 1px solid transparent;
  border-radius: $radius-md;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  white-space: nowrap;

  &:hover {
    opacity: 0.85;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(10, 88, 202, 0.25);
  }
}

.button--primary {
  background-color: $color-primary;
  color: #ffffff;
  border-color: $color-primary;

  &:hover {
    background-color: $color-primary-dark;
    border-color: $color-primary-dark;
    opacity: 1;
  }
}`}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`CSS Module을 사용하면 클래스명이 자동으로 고유하게 변환되어 스타일 충돌을 방지할 수 있습니다.`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`React 일반 SCSS 파일`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`일반 SCSS 파일을 import하여 사용하는 방법입니다.`}),(0,o.jsx)(i,{title:`Button.jsx`,language:`jsx`,className:`mt_m`,children:`import React from 'react'
import './Button.scss'

const Button = ({ type = 'primary', children }) => {
  return (
    <button className={\`button button--\${type}\`}>
      {children}
    </button>
  )
}

export default Button`}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`일반 SCSS 파일은 전역으로 적용되므로, BEM 네이밍 컨벤션을 따르는 것이 중요합니다.`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`프레임워크별 폴더 구조`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`프레임워크 프로젝트에서 SCSS 파일을 구성하는 방법입니다.`,(0,o.jsx)(`br`,{}),`컴포넌트 구조와 스타일 구조를 1:1로 맞추면 찾고 관리하기가 쉬워집니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Vue 프로젝트 구조`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`Vue 프로젝트의 일반적인 SCSS 구조입니다.`}),(0,o.jsx)(i,{title:`Vue 프로젝트 구조`,language:`plaintext`,className:`mt_m`,lineNumbers:!1,children:`src/
  ├─ components/
  │   ├─ Button/
  │   │   ├─ Button.vue
  │   │   └─ Button.scss        // 선택적
  │   └─ Card/
  │       ├─ Card.vue
  │       └─ Card.scss
  │
  ├─ scss/                      // 공통 SCSS
  │   ├─ tokens/
  │   ├─ base/
  │   ├─ layout/
  │   └─ main.scss
  │
  └─ main.js`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`React 프로젝트 구조`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`React 프로젝트의 일반적인 SCSS 구조입니다.`}),(0,o.jsx)(i,{title:`React 프로젝트 구조`,language:`plaintext`,className:`mt_m`,lineNumbers:!1,children:`src/
  ├─ components/
  │   ├─ Button/
  │   │   ├─ Button.jsx
  │   │   └─ Button.module.scss  // CSS Module
  │   └─ Card/
  │       ├─ Card.jsx
  │       └─ Card.module.scss
  │
  ├─ scss/                      // 공통 SCSS
  │   ├─ tokens/
  │   ├─ base/
  │   ├─ layout/
  │   └─ main.scss
  │
  └─ index.js`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`토큰 공유하기`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`공통 토큰을 컴포넌트에서 사용하는 방법입니다.`,(0,o.jsx)(`br`,{}),`절대 경로나 별칭(alias)을 사용하면 import 경로를 간단하게 유지할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`상대 경로 사용`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`상대 경로로 토큰을 import하는 방법입니다.`}),(0,o.jsx)(i,{title:`Button.scss`,language:`scss`,className:`mt_m`,children:`/* components/Button/Button.scss */
@use '../../scss/tokens/tokens' as *;`}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`상대 경로는 간단하지만, 폴더 구조가 변경되면 경로를 수정해야 합니다.`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`절대 경로 또는 별칭 사용`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`별칭을 설정하여 더 간단하게 import하는 방법입니다.`}),(0,o.jsx)(i,{title:`vite.config.js`,language:`javascript`,className:`mt_m`,children:`/* vite.config.js (Vite 사용 시) */
export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@scss': path.resolve(__dirname, 'src/scss')
    }
  }
}`}),(0,o.jsx)(i,{title:`Button.scss (별칭 사용)`,language:`scss`,className:`mt_m`,children:`/* 별칭을 사용한 import */
@use '@scss/tokens/tokens' as *;`}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`별칭을 사용하면 폴더 구조가 변경되어도 import 경로를 유지할 수 있습니다.`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`프레임워크에서 SCSS 사용에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`SCSS 독립성`}),`: SCSS는 프레임워크에 종속되지 않는 독립적 시스템`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`공통 SCSS`}),`: tokens, base, layout, themes는 전역으로 공유`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`컴포넌트 SCSS`}),`: 컴포넌트별로 분리하거나 컴포넌트 파일 내부에 작성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`Vue`}),`: Single File Component의`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`<style>`}),` 또는 별도 SCSS 파일`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`React`}),`: CSS Module 또는 일반 SCSS 파일`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`폴더 구조`}),`: 컴포넌트 구조와 스타일 구조를 1:1로 맞추기`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`토큰 공유`}),`: 상대 경로 또는 별칭으로 공통 토큰 import`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`실제 페이지 구성(종합 쇼케이스)`}),`을 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/10_scss_07.png`,alt:`컴포넌트 스타일 구조`}),(0,o.jsx)(`figcaption`,{children:`컴포넌트 스타일 구조`})]})]})}export{l as default,a as t};