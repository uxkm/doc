import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`SCSS 파일을 분리하는 이유`,description:`SCSS 파일을 분리하는 이유와 필요성을 상세히 알아봅니다. 단일 파일의 문제점, 파일 분리의 장점, 유지보수성 향상, 협업 효율성, 그리고 실제 프로젝트에서의 효과를 예시와 함께 설명합니다.`,keyword:`scss 파일 분리, scss 구조, scss 파일 관리, scss 모듈화, scss 유지보수`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`프로젝트가 커지면`,` `,(0,o.jsx)(`b`,{children:`하나의 SCSS 파일에 모든 스타일을 작성하는 것은 비효율적`}),`입니다.`,(0,o.jsx)(`br`,{}),`파일을 분리하면 `,(0,o.jsx)(`b`,{children:`코드를 체계적으로 관리`}),`할 수 있고,`,` `,(0,o.jsx)(`b`,{children:`유지보수성과 협업 효율성`}),`이 크게 향상됩니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 단일 파일의 문제점, 파일 분리의 장점, 유지보수성 향상, 협업 효율성, 그리고 실제 프로젝트에서의 효과를 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`단일 파일의 문제점`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`모든 스타일을 `,(0,o.jsx)(`b`,{children:`하나의 파일에 작성`}),`할 때 발생하는 문제점들을 살펴봅니다.`,(0,o.jsx)(`br`,{}),`파일 크기 증가, 코드 찾기 어려움, 협업 충돌, 재사용 어려움 등은 프로젝트가 커질수록 `,(0,o.jsx)(`b`,{children:`개발 속도와 유지보수 비용에 직접적인 영향을`}),` `,`미치기 때문에 먼저 이해해 두는 것이 중요합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`파일 크기 문제`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`프로젝트가 커지면 `,(0,o.jsx)(`b`,{children:`하나의 파일이 수천 줄`}),`이 될 수 있습니다.`]}),(0,o.jsx)(i,{title:`단일 파일 예시`,language:`css`,className:`mt_m`,children:`// styles.scss (3000줄 이상)
// 변수 정의
$color-primary: #0a58ca;
$color-secondary: #6c757d;
// ... (수백 줄)

// 믹스인 정의
@mixin button { }
@mixin card { }
// ... (수백 줄)

// 컴포넌트 스타일
.button { }
.card { }
.nav { }
// ... (수천 줄)

// 유틸리티
.mt-1 { }
.mt-2 { }
// ... (수백 줄)`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 되면 `,(0,o.jsx)(`b`,{children:`파일을 열고 찾는 데 시간이 오래 걸리고`}),`,`,` `,(0,o.jsx)(`b`,{children:`에디터가 느려질 수 있습니다`}),`.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`코드 찾기 어려움`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`수천 줄의 파일에서 `,(0,o.jsx)(`b`,{children:`특정 스타일을 찾는 것은 매우 어렵습니다`}),`.`]}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`작업`}),(0,o.jsx)(`li`,{className:`cell content`,children:`단일 파일`}),(0,o.jsx)(`li`,{className:`cell content`,children:`파일 분리`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`버튼 스타일 찾기`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`단일 파일`,children:`3000줄 파일에서 검색 필요`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`파일 분리`,children:`_button.scss 파일 바로 열기`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`변수 수정`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`단일 파일`,children:`파일 상단에서 찾아야 함`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`파일 분리`,children:`_variables.scss 파일 열기`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`믹스인 추가`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`단일 파일`,children:`적절한 위치 찾기 어려움`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`파일 분리`,children:`_mixins.scss에 추가`})]})]})]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`파일을 분리하면 `,(0,o.jsx)(`b`,{children:`원하는 코드를 빠르게 찾을 수 있습니다`}),`.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`협업 시 충돌`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 명이 함께 작업할 때 `,(0,o.jsx)(`b`,{children:`같은 파일을 수정하면 충돌`}),`이 발생합니다.`]}),(0,o.jsx)(i,{title:`협업 충돌 시나리오`,language:`css`,className:`mt_m`,children:`// styles.scss (3000줄)
// 개발자 A: 버튼 스타일 수정 (1000줄 근처)
.button {
  background: #0a58ca;  // 수정
}

// 개발자 B: 카드 스타일 수정 (1500줄 근처)
.card {
  padding: 16px;  // 수정
}

// Git 충돌 발생!
// 같은 파일의 다른 부분을 수정했지만 충돌 발생 가능`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`파일을 분리하면 각자 맞은 역할에 따라 다른 파일을 수정하게 되어`,` `,(0,o.jsx)(`b`,{children:`Git 충돌 발생 가능성이 낮아집니다`}),`.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`재사용 어려움`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`하나의 파일에 모든 것이 있으면`,` `,(0,o.jsx)(`b`,{children:`특정 부분만 재사용하기 어렵습니다`}),`.`,(0,o.jsx)(`br`,{}),`예를 들어, 다른 프로젝트에서 버튼 스타일만 가져오고 싶어도`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`styles.scss`}),` 파일(3000줄)에서 버튼 부분만 찾아서 복사해야 하고, 불필요한 코드도 함께 가져올 위험이 있습니다.`]}),(0,o.jsxs)(`p`,{className:`mt_s`,children:[`파일을 분리하면 `,(0,o.jsx)(`b`,{children:`필요한 파일만 가져와서 재사용`}),`할 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`파일 분리의 장점`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`파일을 분리하면 얻을 수 있는 `,(0,o.jsx)(`b`,{children:`주요 장점`}),`들을 살펴봅니다.`,(0,o.jsx)(`br`,{}),`코드 조직화, 유지보수성 향상, 협업 효율성, 재사용성 등은 단일 파일의 문제점을 해결하면서도, `,(0,o.jsx)(`b`,{children:`프로젝트 규모가 커져도 안정적으로 관리`}),`할 수 있는 기반을 만들어 줍니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`코드 조직화`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`파일을 분리하면 `,(0,o.jsx)(`b`,{children:`관련 있는 코드끼리 묶어서 관리`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`파일 분리 예시`,language:`css`,className:`mt_m`,children:`// ❌ 파일 분리 전: styles.scss (3000줄)
// 모든 것이 섞여 있음

// ✅ 파일 분리 후:
_variables.scss    // 변수만 모음
_mixins.scss       // 믹스인만 모음
_buttons.scss      // 버튼 스타일만 모음
_cards.scss        // 카드 스타일만 모음
_layout.scss       // 레이아웃만 모음
// 각 파일이 명확한 역할을 가짐`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`어떤 파일에 무엇이 있는지 바로 알 수 있습니다`}),`.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`유지보수성 향상`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`파일을 분리하면 `,(0,o.jsx)(`b`,{children:`수정할 때 해당 파일만 열면 됩니다`}),`.`]}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`작업`}),(0,o.jsx)(`li`,{className:`cell content`,children:`단일 파일`}),(0,o.jsx)(`li`,{className:`cell content`,children:`파일 분리`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`버튼 색상 변경`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`단일 파일`,children:`3000줄 파일에서 버튼 부분 찾기`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`파일 분리`,children:[(0,o.jsx)(`i`,{className:`filename`,children:`_buttons.scss`}),` 파일만 열기`]})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`새 변수 추가`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`단일 파일`,children:`파일 상단에서 적절한 위치 찾기`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`파일 분리`,children:[(0,o.jsx)(`i`,{className:`filename`,children:`_variables.scss`}),`에 추가`]})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`믹스인 수정`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`단일 파일`,children:`믹스인 섹션 찾기`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`파일 분리`,children:[(0,o.jsx)(`i`,{className:`filename`,children:`_mixins.scss`}),`에서 수정`]})]})]})]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`파일을 분리하면 `,(0,o.jsx)(`b`,{children:`수정 시간이 크게 단축`}),`됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`협업 효율성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 명이 함께 작업할 때 `,(0,o.jsx)(`b`,{children:`각자 다른 파일을 수정`}),`할 수 있어 충돌이 줄어듭니다.`]}),(0,o.jsx)(i,{title:`협업 효율성 예시`,language:`css`,className:`mt_m`,children:`// 파일 분리 후 협업
// 개발자 A: _buttons.scss 수정
// 개발자 B: _cards.scss 수정
// 개발자 C: _variables.scss 수정

// 각자 다른 파일을 수정하므로 충돌 없음
// 병렬 작업 가능`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`여러 명이 동시에 작업`}),`할 수 있어 프로젝트 진행 속도가 빨라집니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`재사용성 향상`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`파일을 분리하면 `,(0,o.jsx)(`b`,{children:`필요한 파일만 가져와서 재사용`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`재사용성 예시`,language:`css`,className:`mt_m`,children:`// 다른 프로젝트에서 버튼 스타일만 재사용
// _buttons.scss 파일만 복사하면 됨

// 또는 변수만 재사용
// _variables.scss 파일만 복사

// 불필요한 코드 없이 필요한 것만 가져올 수 있음`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`테스트와 디버깅 용이`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`파일을 분리하면 `,(0,o.jsx)(`b`,{children:`특정 부분만 테스트하거나 디버깅`}),`하기 쉽습니다.`]}),(0,o.jsx)(i,{title:`테스트 예시`,language:`css`,className:`mt_m`,children:`// 버튼 스타일에 문제가 있을 때
// _buttons.scss 파일만 확인하면 됨

// 변수에 문제가 있을 때
// _variables.scss 파일만 확인하면 됨

// 문제 범위를 빠르게 좁힐 수 있음`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`파일 분리 전후 비교`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`파일을 분리하기 전과 후를 `,(0,o.jsx)(`b`,{children:`구체적으로 비교`}),`해봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`파일 분리 전`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`모든 스타일이 `,(0,o.jsx)(`b`,{children:`하나의 파일에 있는 경우`}),`입니다.`]}),(0,o.jsx)(i,{title:`파일 분리 전 구조`,language:`css`,className:`mt_m`,children:`// styles.scss (3000줄)
// ============================================
// 변수 (100줄)
// ============================================
$color-primary: #0a58ca;
$color-secondary: #6c757d;
// ... (100줄)

// ============================================
// 믹스인 (200줄)
// ============================================
@mixin button { }
@mixin card { }
// ... (200줄)

// ============================================
// 컴포넌트 (2000줄)
// ============================================
.button { }
.card { }
.nav { }
// ... (2000줄)

// ============================================
// 유틸리티 (700줄)
// ============================================
.mt-1 { }
.mt-2 { }
// ... (700줄)`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 되면 `,(0,o.jsx)(`b`,{children:`파일이 너무 길어서`}),` 작업하기 어렵습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`파일 분리 후`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`관련 있는 코드끼리 `,(0,o.jsx)(`b`,{children:`파일로 분리한 경우`}),`입니다.`]}),(0,o.jsx)(i,{title:`_variables.scss (100줄)`,language:`css`,className:`mt_m`,children:`$color-primary: #0a58ca;
$color-secondary: #6c757d;
// ...`}),(0,o.jsx)(i,{title:`_mixins.scss (200줄)`,language:`css`,className:`mt_ms`,children:`@mixin button { }
@mixin card { }
// ...`}),(0,o.jsx)(i,{title:`_buttons.scss (300줄)`,language:`css`,className:`mt_ms`,children:`.button { }
// ...`}),(0,o.jsx)(i,{title:`_cards.scss (400줄)`,language:`css`,className:`mt_ms`,children:`.card { }
// ...`}),(0,o.jsx)(i,{title:`_utilities.scss (700줄)`,language:`css`,className:`mt_ms`,children:`.mt-1 { }
.mt-2 { }
// ...`}),(0,o.jsx)(i,{title:`main.scss (10줄)`,language:`css`,className:`mt_ms`,children:`@use "variables";
@use "mixins";
@use "buttons";
@use "cards";
@use "utilities";`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`각 파일이 작고 명확한 역할`}),`을 가지게 됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`작업 효율성 비교`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`파일 분리 전후의 `,(0,o.jsx)(`b`,{children:`작업 효율성`}),`을 비교해봅니다.`]}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`작업`}),(0,o.jsx)(`li`,{className:`cell content`,children:`파일 분리 전`}),(0,o.jsx)(`li`,{className:`cell content`,children:`파일 분리 후`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`버튼 스타일 찾기`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`파일 분리 전`,children:`3000줄 파일에서 검색 (30초)`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`파일 분리 후`,children:[(0,o.jsx)(`i`,{className:`filename`,children:`_buttons.scss`}),` 열기 (2초)`]})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`변수 추가`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`파일 분리 전`,children:`파일 상단 찾기 (20초)`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`파일 분리 후`,children:[(0,o.jsx)(`i`,{className:`filename`,children:`_variables.scss`}),` 열기 (2초)`]})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`협업 충돌`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`파일 분리 전`,children:`자주 발생`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`파일 분리 후`,children:`거의 없음`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`코드 이해`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`파일 분리 전`,children:`전체 구조 파악 어려움`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`파일 분리 후`,children:`파일명으로 역할 파악 가능`})]})]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`파일 분리의 실제 효과`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`파일을 분리했을 때 `,(0,o.jsx)(`b`,{children:`실제 프로젝트에서 얻을 수 있는 효과`}),`를 살펴봅니다.`]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`개발 속도 향상`}),(0,o.jsxs)(`dd`,{children:[`파일을 분리하면 `,(0,o.jsx)(`b`,{children:`코드를 찾는 시간이 줄어`}),` 개발 속도가 향상됩니다.`]}),(0,o.jsxs)(`dd`,{children:[`예를 들어, 버튼 스타일을 수정할 때 3000줄 파일에서 찾는 것보다`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`_buttons.scss`}),` 파일을 여는 것이 훨씬 빠릅니다.`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`버그 감소`}),(0,o.jsxs)(`dd`,{children:[`파일을 분리하면 `,(0,o.jsx)(`b`,{children:`실수로 다른 코드를 수정할 위험이 줄어듭니다`}),`.`]}),(0,o.jsxs)(`dd`,{children:[`하나의 큰 파일에서는 실수로 다른 부분을 수정할 수 있지만, 작은 파일에서는 `,(0,o.jsx)(`b`,{children:`해당 파일의 코드만 보이므로`}),` 실수 가능성이 줄어듭니다.`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`온보딩 시간 단축`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsxs)(`p`,{children:[`새로운 팀원이 프로젝트에 합류할 때`,` `,(0,o.jsx)(`b`,{children:`파일 구조만 보면 프로젝트를 빠르게 이해`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`파일 구조로 이해`,language:`css`,className:`mt_ms`,children:`// 파일 구조만 봐도 프로젝트 이해 가능
_variables.scss    // 변수 관리
_mixins.scss       // 믹스인 관리
_buttons.scss      // 버튼 컴포넌트
_cards.scss        // 카드 컴포넌트
_layout.scss       // 레이아웃

// 각 파일의 역할이 명확함`})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`언제 파일을 분리해야 할까?`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`b`,{children:`언제 파일을 분리하는 것이 좋은지`}),` 가이드라인을 제시합니다.`]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`파일 분리가 필요한 경우`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`파일이 500줄 이상`}),`: 파일이 너무 길어서 작업하기 어려울 때`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`명확한 기능 구분`}),`: 변수, 믹스인, 컴포넌트 등 기능이 명확히 구분될 때`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`여러 명이 작업`}),`: 여러 명이 동시에 작업할 때`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`재사용 필요`}),`: 특정 부분을 다른 프로젝트에서 재사용할 때`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`유지보수 어려움`}),`: 코드를 찾거나 수정하기 어려울 때`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`파일 분리가 불필요한 경우`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`작은 프로젝트`}),`: 파일이 200줄 이하인 작은 프로젝트`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`단순한 구조`}),`: 구조가 단순해서 분리할 필요가 없을 때`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`개인 프로젝트`}),`: 혼자 작업하는 작은 프로젝트`]})]}),(0,o.jsxs)(`p`,{className:`mt_s indent_small`,children:[`하지만 `,(0,o.jsx)(`b`,{children:`나중에 커질 가능성을 고려`}),`하면 처음부터 분리하는 것도 좋은 방법입니다.`]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`SCSS 파일을 분리하는 이유에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`단일 파일의 문제점`}),`: 파일 크기 문제, 코드 찾기 어려움, 협업 시 충돌, 재사용 어려움`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`파일 분리의 장점`}),`: 코드 조직화, 유지보수성 향상, 협업 효율성, 재사용성 향상, 테스트와 디버깅 용이`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`작업 효율성`}),`: 파일 분리 후 작업 시간이 크게 단축`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`실제 효과`}),`: 개발 속도 향상, 버그 감소, 온보딩 시간 단축`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`파일 분리 시기`}),`: 파일이 500줄 이상, 명확한 기능 구분, 여러 명이 작업할 때`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`_partial.scss 개념`}),`을 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/09_scss_01.png`,alt:`SCSS 파일 분리의 필요성`}),(0,o.jsx)(`figcaption`,{children:`SCSS 파일 분리의 필요성`})]})]})}export{l as default,a as t};