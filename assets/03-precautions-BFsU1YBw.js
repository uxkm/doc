import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`@extend 사용 시 주의사항`,description:`SCSS에서 @extend를 사용할 때 주의해야 할 사항들을 상세히 알아봅니다. 의도하지 않은 그룹화, 복잡한 선택자, 유지보수 문제 등을 예시와 함께 설명하고, 플레이스홀더 선택자와 믹스인으로 대체하는 전략을 제시합니다.`,keyword:`scss extend 주의사항, scss 플레이스홀더, scss extend 문제, scss extend vs mixin, scss 유지보수`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`는 강력한 기능이지만, 잘못 사용하면 `,(0,o.jsx)(`b`,{children:`예상치 못한 CSS 출력과 유지보수 문제`}),`를 일으킬 수 있습니다.`,(0,o.jsx)(`br`,{}),`특히 의도하지 않은 선택자 그룹화나 복잡한 선택자 생성은`,` `,(0,o.jsx)(`b`,{children:`대규모 프로젝트에서 디버깅을 어렵게 만들 수 있는 중요한 리스크`}),`입니다.`]}),(0,o.jsxs)(`p`,{className:`mt_s`,children:[`이 페이지에서는 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),` 사용 시 주의해야 할 사항들을 실제 예제와 함께 살펴보고, 플레이스홀더 선택자, 믹스인, 유틸리티 클래스 등으로 `,(0,o.jsx)(`b`,{children:`문제를 예방하거나 해결하는 전략`}),`을 정리합니다.`]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`의도하지 않은 그룹화`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`의 가장 큰 문제 중 하나는`,` `,(0,o.jsx)(`b`,{children:`의도하지 않은 선택자 그룹화`}),`입니다.`,(0,o.jsx)(`br`,{}),`하나의 선택자를 extend하면, 그 선택자가 포함된`,` `,(0,o.jsx)(`b`,{children:`모든 선택자 조합에 스타일이 퍼져 나갈 수 있어`}),`, 예상치 못한 곳에 스타일이 적용될 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`문제 상황 예시`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 예시는 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),` 사용으로 인해`,` `,(0,o.jsx)(`b`,{children:`원하지 않는 곳까지 스타일이 퍼지는 문제`}),`를 보여줍니다.`]}),(0,o.jsx)(i,{title:`의도하지 않은 그룹화 예시 (SCSS)`,language:`css`,className:`mt_m`,children:`.button {
  padding: 8px 16px;
  border-radius: 4px;
}

// 여러 곳에서 @extend 사용
.sidebar .button-secondary {
  @extend .button;
}

.header .button-primary {
  @extend .button;
}`}),(0,o.jsx)(i,{title:`의도하지 않은 그룹화 예시 (컴파일된 CSS)`,language:`css`,className:`mt_m`,children:`.button,
.sidebar .button-secondary,
.header .button-primary {
  padding: 8px 16px;
  border-radius: 4px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이제 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.button`}),`을 어디에서 사용하든`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.sidebar .button-secondary`}),`와`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.header .button-primary`}),`가`,` `,(0,o.jsx)(`b`,{children:`항상 함께 묶여`}),` 스타일을 공유하게 됩니다.`,(0,o.jsx)(`br`,{}),`나중에 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.button`}),`을 다른 곳에 추가하면,`,` `,(0,o.jsx)(`b`,{children:`예상치 못한 요소까지 스타일이 함께 적용`}),`될 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`해결 방법 1: 플레이스홀더 선택자 사용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`이 문제를 해결하려면 `,(0,o.jsx)(`b`,{children:`플레이스홀더 선택자`}),`를 사용하는 것이 좋습니다.`,(0,o.jsx)(`br`,{}),(0,o.jsxs)(`span`,{className:`underline`,children:[`플레이스홀더 선택자는 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`%`}),`로 시작하는`,` `,(0,o.jsx)(`b`,{children:`컴파일되지 않는 가상 선택자`}),`로,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`의 대상이 되기 전까지는 실제 CSS에 출력되지 않습니다.`]})]}),(0,o.jsxs)(`p`,{className:`mt_s`,children:[`즉, 플레이스홀더 선택자는`,` `,(0,o.jsx)(`b`,{children:`"상속 전용 베이스 스타일"을 정의하는 용도`}),`로 사용되며,`,(0,o.jsx)(`br`,{}),`일반 클래스와 달리 직접 HTML에서 사용되지 않기 때문에`,` `,(0,o.jsx)(`b`,{children:`의도하지 않은 그룹화나 스타일 누출을 방지`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`플레이스홀더 선택자 사용`,language:`css`,className:`mt_m`,children:`// 플레이스홀더 선택자 (컴파일되지 않음)
%button-base {
  padding: 8px 16px;
  border-radius: 4px;
}

// 원하는 선택자만 extend
.sidebar .button {
  @extend %button-base;
}

.header .button-primary {
  @extend %button-base;
}`}),(0,o.jsx)(i,{title:`플레이스홀더 선택자 사용 (컴파일된 CSS)`,language:`css`,className:`mt_m`,children:`.sidebar .button,
.header .button-primary {
  padding: 8px 16px;
  border-radius: 4px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`플레이스홀더 선택자를 사용하면`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.button`}),` 같은 `,`"실제 클래스"`,`를 extend하지 않고도, `,(0,o.jsx)(`b`,{children:`원하는 선택자만 명시적으로 그룹화`}),`할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`해결 방법 2: 믹스인으로 대체`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`또 다른 방법은 `,(0,o.jsx)(`b`,{children:`믹스인으로 공통 스타일을 캡슐화`}),`하고, 필요한 곳에서 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@include`}),`로 호출하는 것입니다.`]}),(0,o.jsx)(i,{title:`믹스인으로 대체`,language:`css`,className:`mt_m`,children:`@mixin button-base {
  padding: 8px 16px;
  border-radius: 4px;
}

.sidebar .button-secondary {
  @include button-base;
}

.header .button-primary {
  @include button-base;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`믹스인은 선택자를 그룹화하지 않고 `,(0,o.jsx)(`b`,{children:`스타일만 복사`}),`하므로, 어디에 어떤 스타일이 적용되는지 `,(0,o.jsx)(`b`,{children:`CSS 출력 결과를 더 직관적으로 파악`}),`할 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`복잡한 선택자와 유지보수 문제`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`를 과도하게 사용하면`,` `,(0,o.jsx)(`b`,{children:`복잡한 선택자와 유지보수 문제`}),`가 발생할 수 있습니다.`,(0,o.jsx)(`br`,{}),`특히 중첩된 선택자나 BEM 스타일 네이밍을 사용할 때는`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`가 예상치 못한 결과를 만들 수 있어 주의가 필요합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`복잡한 선택자 예시`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 예시는 중첩된 선택자에 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`를 사용했을 때 `,(0,o.jsx)(`b`,{children:`선택자가 어떻게 복잡해지는지`}),` 보여줍니다.`]}),(0,o.jsx)(i,{title:`복잡한 선택자 예시 (SCSS)`,language:`css`,className:`mt_m`,children:`.nav {
  &__item {
    padding: 8px 16px;
  }
}

.footer-nav__item {
  @extend .nav__item;
}`}),(0,o.jsx)(i,{title:`복잡한 선택자 예시 (컴파일된 CSS)`,language:`css`,className:`mt_m`,children:`.nav__item,
.nav .footer-nav__item {
  padding: 8px 16px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`.footer-nav__item`}),`이`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.nav`}),` 안에 있을 것이라고 가정한 선택자가 생성되어, `,(0,o.jsx)(`b`,{children:`실제 HTML 구조와 다른 CSS`}),`가 만들어졌습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`해결 방법: 유틸리티 클래스 사용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`이런 경우에는 `,(0,o.jsx)(`b`,{children:`유틸리티 클래스`}),`를 사용하는 것이 더 안전한 방법일 수 있습니다.`]}),(0,o.jsx)(i,{title:`유틸리티 클래스 사용`,language:`css`,className:`mt_m`,children:`.u-nav-item {
  padding: 8px 16px;
}

.nav__item {
  @extend .u-nav-item;
}

.footer-nav__item {
  @extend .u-nav-item;
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.u-nav-item,
.nav__item,
.footer-nav__item {
  padding: 8px 16px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`공통 스타일을 `,(0,o.jsx)(`b`,{children:`유틸리티 클래스`}),`로 분리하면, 의미적 클래스와 스타일 클래스가 분리되어 `,(0,o.jsx)(`b`,{children:`역할이 더 명확`}),`해집니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실무에서의 @extend 사용 가이드`}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`사용을 고려해볼 수 있는 경우`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`의미적 상속 관계`}),`: `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.btn`}),` →`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.btn-primary`}),`처럼 명확한 상속 관계가 있을 때`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`스타일 변경 빈도가 낮은 베이스 컴포넌트`}),`에만 사용할 때`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`파일 크기 최적화`}),`가 중요한 프로젝트에서 선택자 그룹화를 통해 이득을 볼 수 있을 때`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`사용을 피하는 것이 좋은 경우`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`깊게 중첩된 선택자`}),`가 많은 경우`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`BEM 네이밍`}),`처럼 구조가 명확한 클래스를 사용하는 경우`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`동적으로 값이 자주 변경되는 스타일`}),` (예: 색상, 간격, 폰트 크기 등)`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`권장 패턴`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`공통 스타일`}),`은 가능한 한 `,(0,o.jsx)(`b`,{children:`믹스인`}),`이나`,` `,(0,o.jsx)(`b`,{children:`유틸리티 클래스`}),`로 관리`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`정적이고 변경 가능성이 낮은 베이스 스타일`}),`에 한해`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),` 사용`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`플레이스홀더 선택자`}),`를 적극적으로 활용해 의도하지 않은 그룹화 방지`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),` 사용 시 주의사항에 대해 알아본 내용을 정리합니다.`,(0,o.jsx)(`br`,{}),`@extend의 동작 방식과 문제점을 이해하고, 플레이스홀더 선택자, 믹스인, 유틸리티 클래스 등을 적절히 조합하면`,` `,(0,o.jsx)(`b`,{children:`유지보수하기 쉽고 예측 가능한 SCSS 구조`}),`를 만들 수 있습니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`의도하지 않은 그룹화`}),`: 일반 클래스를 직접 extend하면 예기치 않은 곳까지 스타일이 퍼질 수 있음`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`플레이스홀더 선택자`}),`: `,(0,o.jsx)(`code`,{className:`t_blue`,children:`%`}),`로 시작하는 컴파일되지 않는 베이스 스타일로, 안전한 상속에 사용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`믹스인 대체`}),`: 스타일을 복사하는 방식으로, CSS 출력 결과를 더 직관적으로 제어 가능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`복잡한 선택자 문제`}),`: 중첩 선택자와 함께 사용 시 예상치 못한 선택자가 생성될 수 있음`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`유틸리티 클래스`}),`: 공통 스타일을 분리해 의미적 클래스와 스타일 클래스를 분리`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`실무 가이드`}),`: 정적인 베이스 스타일에는 @extend, 동적인 스타일과 유틸리티에는 믹스인/유틸리티 클래스 권장`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는`,` `,(0,o.jsx)(`b`,{children:`실제 프로젝트에서 @extend와 믹스인을 어떻게 조합해 사용하는지`}),`에 대한 실무 예시를 살펴봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/07_scss_03.png`,alt:`@extend 사용 시 주의사항`}),(0,o.jsx)(`figcaption`,{children:`@extend 사용 시 주의사항`})]})]})}export{l as default,a as t};