import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`SCSS 파일 구조와 확장자 이해`,description:`SCSS 파일의 확장자(.scss, .sass), 파일 구조, 파셜(Partials) 파일의 역할과 네이밍 규칙, 그리고 프로젝트에서 SCSS 파일을 어떻게 구성하는지 상세히 알아봅니다.`,keyword:`scss 파일 구조, scss 확장자, scss 파일명, 파셜 파일, partials, scss 프로젝트 구조`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`SCSS 파일은 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.scss`}),` 확장자를 사용하며, 프로젝트 규모가 커질수록 `,(0,o.jsx)(`b`,{children:`여러 파일로 나누어 관리`}),`하는 것이 중요합니다.`,(0,o.jsx)(`br`,{}),`파셜(Partials) 파일은 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`_`}),`로 시작하는 네이밍 규칙을 따르며,`,` `,(0,o.jsx)(`b`,{children:`직접 컴파일되지 않고 다른 파일에서 불러와 사용`}),`됩니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 SCSS 파일의 확장자 종류, 파일 구조와 네이밍 규칙, 파셜 파일의 역할, 그리고 실제 프로젝트에서 어떻게 파일을 구성하는지 단계별로 살펴봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`SCSS 파일 확장자`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`SCSS 파일은 `,(0,o.jsx)(`b`,{children:`확장자로 파일 종류를 구분`}),`합니다. 같은 Sass 언어이지만 문법 형식이 다르기 때문에 확장자도 다릅니다.`,(0,o.jsx)(`br`,{}),`어떤 확장자를 쓰느냐에 따라`,` `,(0,o.jsx)(`b`,{children:`코드를 읽는 방식과 팀에서 합의해야 할 규칙`}),`이 달라지기 때문에, 기본 개념을 먼저 이해해 두면 이후 설정과 협업이 훨씬 수월해집니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`.scss 확장자`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`.scss`}),`는`,` `,(0,o.jsx)(`b`,{children:`가장 널리 사용되는 SCSS 파일 확장자`}),`입니다.`,(0,o.jsx)(`br`,{}),`일반 CSS와 거의 동일한 문법을 사용하므로, 기존 CSS 파일을`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.scss`}),`로 바꾸면 바로 SCSS 파일로 사용할 수 있습니다.`]}),(0,o.jsx)(i,{title:`.scss 파일 예시`,language:`css`,className:`mt_m`,children:`// style.scss
$primary-color: #0a58ca;
$font-size-base: 16px;

body {
  font-size: $font-size-base;
  color: $primary-color;
}

.button {
  background: $primary-color;
  padding: 8px 16px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`위 예시처럼 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.scss`}),` 파일은`,` `,(0,o.jsx)(`b`,{children:`중괄호와 세미콜론을 사용`}),`하며, CSS와 동일한 구조로 작성합니다.`,(0,o.jsx)(`br`,{}),`변수, 중첩, 믹스인 등 SCSS 기능을 추가해도 기본 구조는 CSS와 같아서`,` `,(0,o.jsx)(`b`,{children:`기존 CSS 지식을 그대로 활용`}),`할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`.sass 확장자`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`.sass`}),`는`,` `,(0,o.jsx)(`b`,{children:`인덴트(들여쓰기) 문법을 사용하는 Sass 파일`}),`입니다.`,(0,o.jsx)(`br`,{}),`중괄호와 세미콜론 없이 들여쓰기만으로 블록을 구분하므로, 문법이 다소 생소할 수 있습니다.`]}),(0,o.jsx)(i,{title:`.sass 파일 예시`,language:`css`,className:`mt_m`,children:`// style.sass
$primary-color: #0a58ca
$font-size-base: 16px

body
  font-size: $font-size-base
  color: $primary-color

.button
  background: $primary-color
  padding: 8px 16px`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`.sass`}),` 파일은`,` `,(0,o.jsx)(`b`,{children:`들여쓰기에 매우 민감`}),`하며, 탭과 스페이스가 섞이면 에러가 발생할 수 있습니다.`,(0,o.jsx)(`br`,{}),`실무에서는`,` `,(0,o.jsxs)(`b`,{children:[`CSS와 가장 유사한 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.scss`}),` 형식을 주로 사용`]}),`하므로, 본 커리큘럼에서도 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.scss`}),`를 기준으로 설명합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`확장자 선택 가이드`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`프로젝트에서 어떤 확장자를 사용할지 결정할 때는 다음을 고려하세요.`}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`확장자`}),(0,o.jsx)(`li`,{className:`cell content`,children:`특징`}),(0,o.jsx)(`li`,{className:`cell content`,children:`추천 상황`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value`,children:(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`.scss`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`특징`,children:`CSS와 동일한 문법, 중괄호·세미콜론 사용, 기존 CSS 코드 재사용 용이`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`추천 상황`,children:`대부분의 프로젝트, CSS에서 전환하는 경우, 팀 협업 시`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value`,children:(0,o.jsx)(`code`,{className:`t_darkgreen`,children:`.sass`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`특징`,children:`인덴트 문법, 중괄호·세미콜론 없음, 코드가 더 간결함`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`추천 상황`,children:`Python/Ruby 개발자에게 친숙, 코드 간결성을 중시하는 경우`})]})]})]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsxs)(`b`,{children:[`초보자이거나 팀 프로젝트라면 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.scss`}),`를 선택하는 것을 권장`]}),`합니다.`,(0,o.jsx)(`br`,{}),`CSS 지식이 있다면 바로 시작할 수 있고, 팀원들도 쉽게 이해할 수 있어 협업이 원활합니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`SCSS 파일 구조와 네이밍`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`프로젝트 규모가 커질수록 `,(0,o.jsx)(`b`,{children:`SCSS 파일을 체계적으로 구성`}),`하는 것이 중요합니다.`,(0,o.jsx)(`br`,{}),`파일 구조와 네이밍 규칙을 일관되게 유지하면,`,` `,(0,o.jsx)(`b`,{children:`코드를 찾고 수정하는 시간을 크게 줄일 수 있습니다`}),`.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`일반 SCSS 파일`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`일반 SCSS 파일은 `,(0,o.jsx)(`b`,{children:`직접 컴파일되어 CSS 파일로 변환`}),`됩니다.`,(0,o.jsx)(`br`,{}),`파일명은 `,(0,o.jsx)(`b`,{children:`소문자와 하이픈(-)`}),`을 사용하는 것이 일반적이며, 의미 있는 이름을 붙입니다.`]}),(0,o.jsx)(i,{title:`일반 SCSS 파일 예시`,language:`css`,className:`mt_m`,children:`// main.scss (메인 스타일 파일)
// style.scss (스타일 파일)
// components.scss (컴포넌트 모음)
// layout.scss (레이아웃 스타일)`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`일반적으로 `,(0,o.jsx)(`b`,{children:`프로젝트의 진입점이 되는 메인 파일`}),`은`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`main.scss`}),` 또는`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`style.scss`}),`로 명명합니다.`,(0,o.jsx)(`br`,{}),`이 파일에서 다른 파셜 파일들을 불러와 최종 CSS로 컴파일합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`파셜(Partials) 파일`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`파셜 파일은`,` `,(0,o.jsxs)(`b`,{children:[`언더스코어(`,(0,o.jsx)(`code`,{className:`t_blue`,children:`_`}),`)로 시작하는 파일명`]}),`을 사용하며, `,(0,o.jsx)(`b`,{children:`직접 컴파일되지 않습니다`}),`.`,(0,o.jsx)(`br`,{}),`다른 SCSS 파일에서 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),` 또는`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@import`}),`로 불러와 사용합니다.`]}),(0,o.jsx)(i,{title:`파셜 파일 예시`,language:`css`,className:`mt_m`,children:`// _variables.scss (변수 정의)
// _mixins.scss (믹스인 정의)
// _buttons.scss (버튼 컴포넌트)
// _cards.scss (카드 컴포넌트)
// _layout.scss (레이아웃 스타일)`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`파셜 파일의 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`_`}),` 접두사는`,` `,(0,o.jsx)(`b`,{children:`"이 파일은 단독으로 컴파일하지 않는다"`}),`는 의미입니다.`,(0,o.jsx)(`br`,{}),`불러올 때는 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`_`}),`와 확장자를 생략하고 파일명만 사용합니다.`]}),(0,o.jsx)(i,{title:`파셜 파일 불러오기 예시`,language:`css`,className:`mt_ms`,children:`/* main.scss */
@use "variables";  /* _variables.scss 불러오기 */
@use "mixins";     /* _mixins.scss 불러오기 */
@use "buttons";    /* _buttons.scss 불러오기 */`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`파일 네이밍 규칙`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`일관된 네이밍 규칙을 따르면 `,(0,o.jsx)(`b`,{children:`파일을 빠르게 찾고 이해`}),`할 수 있습니다.`]}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`규칙`}),(0,o.jsx)(`li`,{className:`cell content`,children:`설명`}),(0,o.jsx)(`li`,{className:`cell content`,children:`예시`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`소문자 사용`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`설명`,children:`파일명은 소문자로 작성하여 운영체제 간 호환성을 높입니다`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`예시`,children:[(0,o.jsx)(`code`,{children:`button.scss`}),` (O), `,(0,o.jsx)(`code`,{children:`Button.scss`}),` (X)`]})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`하이픈(-) 사용`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`설명`,children:`단어 구분은 하이픈을 사용하며, 언더스코어는 파셜 접두사에만 사용`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`예시`,children:[(0,o.jsx)(`code`,{children:`button-group.scss`}),` (O),`,` `,(0,o.jsx)(`code`,{children:`button_group.scss`}),` (X)`]})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`의미 있는 이름`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`설명`,children:`파일 내용을 바로 알 수 있도록 명확한 이름을 사용`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`예시`,children:[(0,o.jsx)(`code`,{children:`primary-button.scss`}),` (O), `,(0,o.jsx)(`code`,{children:`btn1.scss`}),` `,`(X)`]})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`파셜 접두사`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`설명`,children:[`파셜 파일은 반드시 `,(0,o.jsx)(`code`,{children:`_`}),`로 시작`]}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`예시`,children:[(0,o.jsx)(`code`,{children:`_variables.scss`}),` (O), `,(0,o.jsx)(`code`,{children:`variables.scss`}),` `,`(일반 파일)`]})]})]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`프로젝트 파일 구조 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`실제 프로젝트에서 SCSS 파일을 어떻게 구성하는지`,` `,(0,o.jsx)(`b`,{children:`폴더 구조와 함께`}),` 살펴봅니다.`,(0,o.jsx)(`br`,{}),`작은 프로젝트부터 중간 규모, 대규모까지 여러 예시를 비교해 보면서,`,` `,(0,o.jsx)(`b`,{children:`내가 진행하는 프로젝트에 어떤 구조가 어울리는지`}),` 감을 잡을 수 있도록 구성했습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 구조`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`작은 프로젝트에서는`,` `,(0,o.jsx)(`b`,{children:`모든 SCSS 파일을 하나의 폴더에 모아두는 것`}),`도 충분합니다.`]}),(0,o.jsx)(i,{title:`기본 폴더 구조`,language:`text`,className:`mt_m`,children:`project/
├─ scss/
│  ├── _variables.scss
│  ├── _mixins.scss
│  └── main.scss
└─ css/
   ├── main.css (컴파일 결과 : 일반)
   └── main.min.css (컴파일 결과 : 압축)`}),(0,o.jsx)(i,{title:`main.scss 내용`,language:`css`,className:`mt_m`,children:`@use "variables";
@use "mixins";

body {
  font-size: variables.$font-size-base;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`중간 규모 프로젝트 구조`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`프로젝트가 커지면 `,(0,o.jsx)(`b`,{children:`기능별로 폴더를 나누어 관리`}),`하는 것이 좋습니다.`]}),(0,o.jsx)(i,{title:`중간 규모 폴더 구조`,language:`text`,className:`mt_m`,children:`project/
├─ scss/
│  ├─ abstracts/
│  │  ├── _variables.scss
│  │  ├── _mixins.scss
│  │  └── _functions.scss
│  ├─ base/
│  │  ├── _reset.scss
│  │  └── _typography.scss
│  ├─ components/
│  │  ├── _buttons.scss
│  │  ├── _cards.scss
│  │  └── _forms.scss
│  ├─ layout/
│  │  ├── _header.scss
│  │  ├── _footer.scss
│  │  └── _grid.scss
│  └─ main.scss
└─ css/
   ├── main.css
   └── main.min.css`}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_m`,children:[(0,o.jsx)(`dt`,{children:`각 폴더의 역할은 다음과 같습니다:`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`abstracts`}),`: 변수, 믹스인, 함수 등 재사용 가능한 추상화 요소`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`base`}),`: 리셋, 타이포그래피 등 프로젝트 전반에 적용되는 기본 스타일`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`components`}),`: 버튼, 카드, 폼 등 재사용 가능한 UI 컴포넌트`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`layout`}),`: 헤더, 푸터, 그리드 등 레이아웃 관련 스타일`]})]}),(0,o.jsxs)(`div`,{className:`mt_ml indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`main.scss`}),(0,o.jsx)(i,{title:`main.scss 내용`,language:`css`,className:`mt_ms`,children:`// Abstracts
@use "abstracts/variables";
@use "abstracts/mixins";

// Base
@use "base/reset";
@use "base/typography";

// Components
@use "components/buttons";
@use "components/cards";

// Layout
@use "layout/header";
@use "layout/footer";`})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`대규모 프로젝트 구조`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`대규모 프로젝트에서는 `,(0,o.jsx)(`b`,{children:`더 세분화된 폴더 구조`}),`를 사용할 수 있습니다.`]}),(0,o.jsx)(i,{title:`대규모 프로젝트 구조`,language:`text`,className:`mt_m`,children:`project/
├─ scss/
│  ├─ abstracts/
│  │  ├─ _variables.scss
│  │  ├─ _mixins.scss
│  │  └─ _functions.scss
│  ├─ base/
│  │  ├─ _reset.scss
│  │  └─ _typography.scss
│  ├─ components/
│  │  ├─ buttons/
│  │  │  ├── _button-base.scss
│  │  │  ├── _button-primary.scss
│  │  │  └── _button-secondary.scss
│  │  └─ cards/
│  │     ├── _card-base.scss
│  │     └── _card-featured.scss
│  ├─ pages/
│  │  ├─ _home.scss
│  │  └─ _about.scss
│  ├─ themes/
│  │  └─ _dark.scss
│  └─ main.scss
└─ css/
   ├── main.css
   └── main.min.css`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`대규모 프로젝트에서는 `,(0,o.jsx)(`b`,{children:`컴포넌트를 하위 폴더로 더 세분화`}),`하고, 페이지별 스타일이나 테마 파일도 별도로 관리합니다.`,(0,o.jsx)(`br`,{}),`이렇게 구성하면`,` `,(0,o.jsx)(`b`,{children:`수백 개의 파일이 있어도 필요한 부분을 빠르게 찾을 수 있습니다`}),`.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`파일 구조 설계 팁`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`효율적인 SCSS 파일 구조를 만들기 위한 `,(0,o.jsx)(`b`,{children:`실용적인 가이드라인`}),`을 정리합니다.`,(0,o.jsx)(`br`,{}),`앞에서 본 예시 구조들을 그대로 복사해 쓰는 것보다는, 이 섹션의 팁을 참고해 `,(0,o.jsx)(`b`,{children:`팀 규모와 프로젝트 특성에 맞게 구조를 조정`}),`하는 것이 중요합니다.`]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`작은 프로젝트부터 시작하기`}),(0,o.jsxs)(`dd`,{children:[`처음에는 `,(0,o.jsx)(`b`,{children:`간단한 구조로 시작`}),`하고, 프로젝트가 커지면서 점진적으로 폴더를 추가하는 것이 좋습니다.`]}),(0,o.jsx)(`dd`,{children:`너무 복잡한 구조는 오히려 관리가 어려울 수 있습니다.`})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`일관된 네이밍 규칙 유지`}),(0,o.jsxs)(`dd`,{children:[`팀 프로젝트라면 `,(0,o.jsx)(`b`,{children:`파일명과 폴더 구조 규칙을 문서화`}),`하고 모든 팀원이 동일하게 따르도록 합니다.`]}),(0,o.jsxs)(`dd`,{children:[`예를 들어 "컴포넌트는 단수형으로 명명" 또는 "파셜 파일은 항상 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`_`}),`로 시작" 같은 규칙을 정하면 됩니다.`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`main.scss는 최소한으로 유지`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsxs)(`p`,{children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`main.scss`}),` 파일은`,` `,(0,o.jsx)(`b`,{children:`다른 파일들을 불러오는 역할만`}),` 하도록 구성합니다.`,(0,o.jsx)(`br`,{}),`실제 스타일 코드는 각 파셜 파일에 작성하고,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`main.scss`}),`에서는`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`로만 연결합니다.`]}),(0,o.jsx)(i,{title:`✅ 좋은 예시`,language:`css`,className:`mt_s`,children:`/* ✅ main.scss (좋은 예시) */
@use "variables";
@use "mixins";
@use "components/buttons";`}),(0,o.jsx)(i,{title:`❌ 나쁜 예시`,language:`css`,className:`mt_ms`,children:`/* ❌ main.scss (나쁜 예시) */
@use "variables";

/* 스타일 코드를 직접 작성하지 말 것 */
.button {
  background: variables.$primary;
}`})]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`관련 파일은 함께 두기`}),(0,o.jsxs)(`dd`,{children:[`같은 기능이나 컴포넌트와 관련된 파일들은`,` `,(0,o.jsx)(`b`,{children:`같은 폴더에 모아두는 것`}),`이 좋습니다.`]}),(0,o.jsxs)(`dd`,{children:[`예를 들어 버튼 관련 모든 스타일(`,(0,o.jsx)(`code`,{className:`t_blue`,children:`_button-base.scss`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`_button-primary.scss`}),` 등)은`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`components/buttons/`}),` 폴더에 함께 둡니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`SCSS 파일 구조와 확장자에 대해 알아본 내용을 정리합니다.`,(0,o.jsx)(`br`,{}),`여기에서 다룬 개념들은 이후 챕터에서 SCSS 문법을 더 깊게 배울 때도 계속해서 반복해 쓰이므로, `,(0,o.jsx)(`b`,{children:`파일을 어떻게 나누고 이름을 붙일지`}),` 한 번쯤은 자신만의 기준을 정리해 두면 좋습니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`확장자`}),`: `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.scss`}),`는 CSS와 유사한 문법, `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.sass`}),`는 인덴트 문법. 실무에서는 주로 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.scss`}),` 사용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`파셜 파일`}),`: `,(0,o.jsx)(`code`,{className:`t_blue`,children:`_`}),`로 시작하며 직접 컴파일되지 않음. 다른 파일에서 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`로 불러와 사용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`파일 구조`}),`: 프로젝트 규모에 따라 단순한 구조부터 세분화된 구조까지 선택 가능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`네이밍 규칙`}),`: 소문자, 하이픈 사용, 의미 있는 이름으로 일관성 유지`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`SCSS 파일이 어떻게 CSS로 컴파일되는지`}),`, 그리고 컴파일 과정에서 어떤 일이 일어나는지 자세히 살펴봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/02_scss_01.png`,alt:`SCSS 파일 구조`}),(0,o.jsx)(`figcaption`,{children:`SCSS 파일 구조`})]})]})}export{l as default,a as t};