import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>m}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`디자인 시스템 구조`,description:`지금까지 만든 코드들을 실제 디자인 시스템 구조로 정리하는 방법을 알아봅니다. tokens, base, layout, components, themes 폴더의 역할과 import/use 흐름을 상세히 설명합니다.`,keyword:`디자인 시스템 구조, design system structure, scss 폴더 구조, tokens base layout components, scss import use`},l=`scss/
  ├─ tokens/              // 디자인 토큰 (가장 아래 레이어)
  │   ├─ _tokens-color.scss
  │   ├─ _tokens-typography.scss
  │   ├─ _tokens-spacing.scss
  │   ├─ _tokens-radius.scss
  │   ├─ _tokens-breakpoints.scss
  │   └─ _tokens.scss
  │
  ├─ base/                // 기본 스타일
  │   ├─ _reset.scss
  │   └─ _base.scss
  │
  ├─ layout/              // 레이아웃 시스템
  │   ├─ _layout-app.scss
  │   ├─ _layout-grid.scss
  │   └─ _container.scss
  │
  ├─ components/          // UI 컴포넌트
  │   ├─ _button.scss
  │   ├─ _card.scss
  │   ├─ _input.scss
  │   ├─ _checkbox.scss
  │   └─ ...
  │
  ├─ themes/              // 테마
  │   ├─ _theme-light.scss
  │   ├─ _theme-dark.scss
  │   └─ _themes.scss
  │
  └─ main.scss            // 메인 파일`,u=`// 1. 디자인 토큰 (가장 먼저)
@use "tokens/tokens";

// 2. 테마 (토큰 이후, base 이전)
@use "themes/themes";

// 3. 기본 스타일 (토큰과 테마 사용)
@use "base/reset";
@use "base/base";

// 4. 레이아웃 시스템
@use "layout/layout-app";
@use "layout/layout-grid";
@use "layout/container";

// 5. UI 컴포넌트
@use "components/button";
@use "components/card";
@use "components/input";
@use "components/checkbox";
@use "components/radio";
// ... 나머지 컴포넌트`,d=`// tokens/_tokens.scss
@forward "tokens-color";
@forward "tokens-typography";
@forward "tokens-spacing";
@forward "tokens-radius";
@forward "tokens-breakpoints";`,f=`// 간소화된 main.scss
@use "tokens/tokens";
@use "themes/themes";
@use "base/reset";
@use "base/base";
@use "layout/layout-app";
@use "components/button";
// ...`,p=`tokens/          ← (의존 없음, 최하위)
  ↑
themes/         ← tokens 사용
  ↑
base/           ← tokens, themes 사용
  ↑
layout/         ← tokens, themes, base 사용
  ↑
components/     ← tokens, themes, base 사용
  ↑
main.scss       ← 모든 것 사용`;function m(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`디자인 시스템은`,` `,(0,o.jsx)(`b`,{children:`지금까지 배운 모든 요소들을 체계적으로 정리한 결과물`}),`입니다.`,(0,o.jsx)(`br`,{}),`SCSS는 파일 구조가 곧 설계이므로, 각 폴더의 역할을 명확히 하고 책임을 분리하는 것이 중요합니다.`,(0,o.jsx)(`br`,{}),`역할이 섞이면 유지보수가 불가능해지므로, 처음부터 올바른 구조로 설계해야 합니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 tokens, base, layout, components, themes 폴더의 역할, 각 폴더에 들어갈 파일, 그리고 import/use 흐름을 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`디자인 시스템 폴더 구조`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`디자인 시스템의 전체 폴더 구조와 각 폴더의 역할입니다.`,(0,o.jsx)(`br`,{}),`각 폴더는 명확한 책임을 가지며, 다른 폴더에 의존하지 않는 독립적인 구조를 유지합니다.`]}),(0,o.jsx)(i,{title:`디자인 시스템 구조`,className:`mt_m`,lineNumbers:!1,children:l}),(0,o.jsx)(`p`,{className:`mt_m`,children:`위에서 아래로 순서대로 의존성이 흐릅니다. tokens가 가장 아래 레이어이고, main.scss가 모든 것을 결합합니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`각 폴더의 역할`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`각 폴더가 담당하는 역할과 책임을 명확히 정의합니다.`,(0,o.jsx)(`br`,{}),`폴더별로 무엇이 들어가야 하고 무엇이 들어가면 안 되는지 이해하는 것이 중요합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`tokens/ 폴더`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`b`,{children:`역할`}),`: 디자인 시스템의 모든 값을 정의하는 폴더입니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`포함해야 할 것`}),`: 색상, 타이포그래피, 간격, 둥근 모서리, breakpoint 등의 값 정의`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`포함하면 안 될 것`}),`: 실제 CSS 스타일 규칙, 컴포넌트 스타일`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`의존성`}),`: 다른 폴더에 의존하지 않음 (가장 아래 레이어)`]})]}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`tokens 폴더는 순수한 값 정의만 포함하며, 실제 스타일을 작성하지 않습니다.`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`base/ 폴더`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`b`,{children:`역할`}),`: 기본 HTML 요소의 스타일을 정의하는 폴더입니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`포함해야 할 것`}),`: Reset 스타일, 기본 HTML 요소(body, h1-h6, p, a 등) 스타일`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`포함하면 안 될 것`}),`: 컴포넌트 스타일, 레이아웃 스타일`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`의존성`}),`: tokens 폴더만 의존`]})]}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`base 폴더는 프로젝트의 기본 스타일을 정의하며, 모든 컴포넌트의 기반이 됩니다.`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`layout/ 폴더`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`b`,{children:`역할`}),`: 페이지 레이아웃과 구조를 정의하는 폴더입니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`포함해야 할 것`}),`: App Layout, Grid, Flex 레이아웃, Container`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`포함하면 안 될 것`}),`: 컴포넌트 내부 레이아웃, 개별 컴포넌트 스타일`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`의존성`}),`: tokens, base 폴더 의존`]})]}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`layout 폴더는 페이지 전체 구조를 담당하며, 반응형 로직도 여기에서 관리합니다.`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`components/ 폴더`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`b`,{children:`역할`}),`: 재사용 가능한 UI 컴포넌트를 정의하는 폴더입니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`포함해야 할 것`}),`: Button, Card, Input, Checkbox 등 독립적인 컴포넌트`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`포함하면 안 될 것`}),`: 페이지 특정 스타일, 레이아웃 스타일`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`의존성`}),`: tokens, base 폴더 의존 (layout은 선택적)`]})]}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`components 폴더의 각 파일은 독립적으로 동작하며, 다른 컴포넌트에 의존하지 않습니다.`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`themes/ 폴더`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`b`,{children:`역할`}),`: 테마별 토큰 값을 정의하는 폴더입니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`포함해야 할 것`}),`: Light/Dark 등 테마별 CSS 변수 정의`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`포함하면 안 될 것`}),`: 컴포넌트 스타일, 레이아웃 스타일`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`의존성`}),`: tokens 폴더 의존 (토큰의 값을 재정의)`]})]}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`themes 폴더는 tokens의 값을 테마별로 재정의하며, 컴포넌트 코드는 변경하지 않습니다.`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`main.scss 구성`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`main.scss는 모든 파일을 올바른 순서로 import하는 메인 파일입니다.`,(0,o.jsx)(`br`,{}),`의존성 순서를 고려하여 import해야 하며, 일반적으로 tokens → base → layout → components → themes 순서로 구성합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`main.scss 작성`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`의존성 순서를 고려한 main.scss 구성입니다.`}),(0,o.jsx)(i,{title:`main.scss`,language:`scss`,className:`mt_m`,children:u}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`이 순서를 지켜야 각 레이어가 필요한 값을 사용할 수 있습니다.`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`@forward를 활용한 구조`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`각 폴더에 index 파일을 만들어 @forward로 정리하면 더 체계적으로 관리할 수 있습니다.`}),(0,o.jsx)(i,{title:`tokens/_tokens.scss`,language:`scss`,className:`mt_m`,children:d}),(0,o.jsx)(i,{title:`main.scss (간소화)`,language:`scss`,className:`mt_m`,children:f}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{children:`@forward`}),`를 사용하면 각 폴더의 내부 구조를 숨기고, 폴더 단위로 관리할 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`의존성 흐름 시각화`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`각 레이어 간의 의존성 관계를 이해하면 올바른 구조를 설계할 수 있습니다.`,(0,o.jsx)(`br`,{}),`의존성은 단방향으로만 흐르며, 아래 레이어는 위 레이어에 의존하지 않습니다.`,(0,o.jsx)(`br`,{}),`아래는 레이어 간 의존성 관계입니다.`]}),(0,o.jsx)(i,{title:`의존성 흐름 다이어그램`,className:`mt_m`,lineNumbers:!1,children:p}),(0,o.jsx)(`p`,{className:`mt_m`,children:`이 구조를 지키면 의존성 순환 문제를 방지하고, 각 레이어를 독립적으로 테스트하고 수정할 수 있습니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실무 적용 팁`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`디자인 시스템 구조를 실무에 적용할 때 주의할 사항들입니다.`}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`폴더 역할 혼동 방지`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`components에 레이아웃 넣지 않기`}),`: 페이지 구조는 layout 폴더에만`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`tokens에 스타일 넣지 않기`}),`: 값만 정의하고 CSS 규칙은 작성하지 않음`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`base에 컴포넌트 넣지 않기`}),`: 기본 HTML 요소만 정의`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsxs)(`dt`,{className:`font-16 mb_s`,children:[`점진적 확장 :`,` `,(0,o.jsx)(`span`,{className:`t_666 weight-500`,children:`처음부터 완벽한 구조를 만들기보다, 점진적으로 확장하는 것이 현실적입니다.`})]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`초기`}),`: tokens, base, components만으로 시작`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`확장`}),`: 필요에 따라 layout, themes 추가`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`리팩토링`}),`: 구조가 커지면 폴더별로 세분화`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`디자인 시스템 SCSS 구조에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`폴더 구조`}),`: tokens, base, layout, components, themes로 역할 분리`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`각 폴더의 역할`}),`: 명확한 책임 범위 정의`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`main.scss 구성`}),`: 의존성 순서를 고려한 import 순서`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`의존성 흐름`}),`: 단방향 의존성으로 순환 문제 방지`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`@forward 활용`}),`: 폴더 단위로 관리하여 구조 간소화`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`실무 적용`}),`: 폴더 역할 혼동 방지, 점진적 확장`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`Vue/React 컴포넌트 스타일 구조`}),`를 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/10_scss_06.png`,alt:`디자인 시스템 폴더 구조`}),(0,o.jsx)(`figcaption`,{children:`디자인 시스템 폴더 구조`})]})]})}export{m as default,a as t};