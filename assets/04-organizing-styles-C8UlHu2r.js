import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`반복되는 스타일을 믹스인으로 정리하기`,description:`프로젝트에서 반복되는 스타일 패턴을 믹스인으로 정리하는 방법을 상세히 알아봅니다. 어떤 스타일을 믹스인으로 만들지 판단하는 기준, 믹스인으로 정리하는 과정, 그리고 실제 예시를 단계별로 설명합니다.`,keyword:`scss 믹스인 정리, scss 반복 스타일, scss 코드 중복 제거, scss 믹스인 리팩토링`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`프로젝트를 진행하다 보면 `,(0,o.jsx)(`b`,{children:`같은 스타일 패턴이 여러 곳에서 반복`}),`되는 경우가 많습니다.`,(0,o.jsx)(`br`,{}),`이런 반복되는 스타일을 `,(0,o.jsx)(`b`,{children:`믹스인으로 정리`}),`하면 코드 중복을 줄이고 유지보수성을 크게 향상시킬 수 있습니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 어떤 스타일을 믹스인으로 만들지 판단하는 기준, 반복되는 스타일을 찾아내는 방법, 믹스인으로 정리하는 과정, 그리고 실제 예시를 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`믹스인으로 정리할 스타일 찾기`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`프로젝트에서 `,(0,o.jsx)(`b`,{children:`어떤 스타일을 믹스인으로 만들지 판단`}),`하는 기준을 알아봅니다.`,(0,o.jsx)(`br`,{}),`모든 코드를 믹스인으로 만들 필요는 없기 때문에, 반복되는 패턴과 고유한 스타일을 구분하는 기준을 세워 두면`,` `,(0,o.jsx)(`b`,{children:`코드 구조가 훨씬 깔끔해집니다`}),`.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`반복되는 패턴 식별`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음과 같은 경우에는 `,(0,o.jsx)(`b`,{children:`믹스인으로 정리`}),`하는 것이 좋습니다:`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`3회 이상 반복`}),`: 같은 스타일이 3곳 이상에서 사용되는 경우`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`복잡한 패턴`}),`: 여러 속성이 함께 사용되는 복잡한 패턴`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`의미 있는 단위`}),`: 하나의 의미 있는 기능을 수행하는 스타일 묶음`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`변경 가능성`}),`: 나중에 변경될 가능성이 있는 스타일`]})]}),(0,o.jsx)(i,{title:`반복되는 패턴 예시`,language:`css`,className:`mt_m`,children:`// 같은 패턴이 여러 곳에서 반복됨
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;  // 동일한 패턴 반복
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;  // 동일한 패턴 반복
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이런 경우 `,(0,o.jsx)(`b`,{children:`믹스인으로 정리`}),`하면 코드 중복을 줄일 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`믹스인으로 만들지 말아야 할 경우`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음과 같은 경우에는 `,(0,o.jsx)(`b`,{children:`믹스인을 만들지 않는 것이 좋습니다`}),`:`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`1-2회만 사용`}),`: 한두 곳에서만 사용되는 스타일`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`단순한 속성`}),`: 속성 하나만 있는 단순한 경우`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`고유한 스타일`}),`: 특정 컴포넌트에만 고유한 스타일`]})]}),(0,o.jsx)(i,{title:`믹스인 불필요 예시`,language:`css`,className:`mt_m`,children:`// 한 곳에서만 사용되는 스타일
.unique-component {
  background: #f8f9fa;
  padding: 20px;
}
// 이런 경우는 믹스인으로 만들 필요 없음`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`믹스인으로 정리하는 과정`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`반복되는 스타일을 `,(0,o.jsx)(`b`,{children:`믹스인으로 정리하는 단계별 과정`}),`을 알아봅니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`i`,{className:`t_black`,children:`공통 패턴 찾기`}),` →`,` `,(0,o.jsx)(`i`,{className:`t_black`,children:`믹스인 정의`}),` →`,` `,(0,o.jsx)(`i`,{className:`t_black`,children:`적용까지의 흐름`}),`을 차근차근 따라가 보면, 실무 코드에서도 `,(0,o.jsx)(`b`,{children:`어디부터 리팩터링을 시작할지`}),` 감을 잡기 쉬워집니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`1단계: 공통 패턴 찾기`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`먼저 `,(0,o.jsx)(`b`,{children:`반복되는 공통 패턴을 찾아냅니다`}),`.`]}),(0,o.jsx)(i,{title:`공통 패턴 찾기`,language:`css`,className:`mt_m`,children:`// 여러 버튼에서 공통으로 사용되는 속성 찾기
.button-primary {
  padding: 8px 16px;           // 공통
  border-radius: 4px;          // 공통
  font-weight: 700;            // 공통
  background-color: #0a58ca;   // 배경 색상 다름
  color: #ffffff;              // 공통
}

.button-secondary {
  padding: 8px 16px;           // 공통
  border-radius: 4px;          // 공통
  font-weight: 700;            // 공통
  background-color: #6c757d;   // 배경 색상 다름
  color: #ffffff;              // 공통
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`2단계: 공통 부분을 믹스인으로 정의`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`공통으로 사용되는 속성들을 `,(0,o.jsx)(`b`,{children:`믹스인으로 정의`}),`합니다.`]}),(0,o.jsx)(i,{title:`믹스인 정의`,language:`css`,className:`mt_m`,children:`// 공통 속성을 믹스인으로 정의
@mixin button-base {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  color: #ffffff;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`3단계: 믹스인 적용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`정의한 믹스인을 `,(0,o.jsx)(`b`,{children:`각 선택자에 적용`}),`합니다.`]}),(0,o.jsx)(i,{title:`믹스인 적용`,language:`css`,className:`mt_m`,children:`.button-primary {
  @include button-base;
  background-color: #0a58ca;  // 개별 속성만 추가
}

.button-secondary {
  @include button-base;
  background-color: #6c757d;  // 개별 속성만 추가
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`공통 스타일은 믹스인으로, 개별 스타일은 직접 작성`}),`하여 코드가 간결해집니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실제 정리 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`실제 프로젝트에서 `,(0,o.jsx)(`b`,{children:`반복되는 스타일을 믹스인으로 정리`}),`하는 예시를 살펴봅니다.`,(0,o.jsx)(`br`,{}),`Flexbox 레이아웃, 카드 스타일처럼 현업에서 자주 등장하는 패턴을 기준으로, 믹스인 적용 전·후 코드를 비교해 보면서 `,(0,o.jsx)(`b`,{children:`리팩터링 효과`}),`를 직접 확인할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Flexbox 레이아웃 정리`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 곳에서 사용되는 `,(0,o.jsx)(`b`,{children:`Flexbox 레이아웃 패턴`}),`을 정리합니다.`]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`정리 전`}),(0,o.jsx)(i,{title:`정리 전 코드`,language:`css`,className:`mt_ms`,children:`.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`정리 후`}),(0,o.jsx)(i,{title:`정리 후 코드`,language:`css`,className:`mt_ms`,children:`@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.header {
  @include flex-between;
}

.navigation {
  @include flex-between;
}

.footer {
  @include flex-between;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 정리하면 `,(0,o.jsx)(`b`,{children:`코드가 훨씬 간결`}),`해지고, 레이아웃을 변경할 때도 믹스인 한 곳만 수정하면 됩니다.`]})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`카드 스타일 정리`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 카드 컴포넌트에서 사용되는 `,(0,o.jsx)(`b`,{children:`공통 스타일`}),`을 정리합니다.`]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`정리 전`}),(0,o.jsx)(i,{title:`정리 전 코드`,language:`css`,className:`mt_ms`,children:`.card {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}

/* 위, 아래 모두 같은 속성과 값을 가지고 있음 */

.product-card {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`정리 후`}),(0,o.jsx)(i,{title:`정리 후 코드`,language:`css`,className:`mt_ms`,children:`@mixin card-base {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}

.card {
  @include card-base;
}

.product-card {
  @include card-base;
}`})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`반응형 미디어 쿼리 정리`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 곳에서 사용되는 `,(0,o.jsx)(`b`,{children:`반응형 미디어 쿼리`}),`를 정리합니다.`]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`정리 전`}),(0,o.jsx)(i,{title:`정리 전 코드`,language:`css`,className:`mt_ms`,children:`.container {
  width: 100%;

  @media (min-width: 768px) {
    max-width: 720px;
    margin: 0 auto;
  }
}

.section {
  padding: 16px;

  @media (min-width: 768px) {
    padding: 24px;
  }
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`정리 후`}),(0,o.jsx)(i,{title:`정리 후 코드`,language:`css`,className:`mt_ms`,children:`@mixin tablet {
  @media (min-width: 768px) {
    @content;
  }
}

.container {
  width: 100%;

  @include tablet {
    max-width: 720px;
    margin: 0 auto;
  }
}

.section {
  padding: 16px;

  @include tablet {
    padding: 24px;
  }
}`})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`믹스인 네이밍 가이드`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`믹스인 이름을 `,(0,o.jsx)(`b`,{children:`명확하고 일관되게`}),` 짓는 방법을 알아봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`좋은 네이밍 예시`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`믹스인 이름은 `,(0,o.jsx)(`b`,{children:`무엇을 하는지 명확하게`}),` 전달해야 합니다.`]}),(0,o.jsx)(i,{title:`✅ 좋은 네이밍 예시`,language:`css`,className:`mt_m`,children:`// ✅ 용도가 명확함
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin card-shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@mixin button-base {
  padding: 8px 16px;
  border-radius: 4px;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`나쁜 네이밍 예시`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`의미가 불명확한 이름은 피해야 합니다.`}),(0,o.jsx)(i,{title:`❌ 나쁜 네이밍 예시`,language:`css`,className:`mt_m`,children:`// ❌ 무엇을 하는지 알 수 없음
@mixin style1 { }
@mixin mixin1 { }
@mixin helper { }`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`반복되는 스타일을 믹스인으로 정리하는 방법에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`믹스인으로 정리할 스타일`}),`: 3회 이상 반복, 복잡한 패턴, 의미 있는 단위, 변경 가능성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`정리 과정`}),`: 공통 패턴 찾기 → 믹스인 정의 → 적용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`실제 예시`}),`: Flexbox 레이아웃, 카드 스타일, 반응형 미디어 쿼리 등`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`네이밍 가이드`}),`: 용도가 명확한 이름 사용, 의미 불명확한 이름 피하기`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`실무에서 자주 사용하는 믹스인 예제`}),`를 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/06_scss_04.png`,alt:`반복되는 스타일을 믹스인으로 정리하는 방법`}),(0,o.jsx)(`figcaption`,{children:`반복되는 스타일을 믹스인으로 정리하는 방법`})]})]})}export{l as default,a as t};