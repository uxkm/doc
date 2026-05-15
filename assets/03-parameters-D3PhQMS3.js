import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`파라미터가 있는 믹스인`,description:`SCSS 믹스인에 파라미터를 전달하는 방법을 상세히 알아봅니다. 기본 파라미터, 여러 파라미터, 기본값 설정, 키워드 인자, 그리고 실제 활용 예시를 단계별로 설명합니다.`,keyword:`scss 믹스인 파라미터, scss mixin parameter, scss 믹스인 인자, scss 기본값, scss 키워드 인자`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`믹스인에 `,(0,o.jsx)(`b`,{children:`파라미터(인자)를 전달`}),`하면,`,` `,(0,o.jsx)(`b`,{children:`같은 패턴을 다양한 값으로 재사용`}),`할 수 있습니다.`,(0,o.jsx)(`br`,{}),`파라미터를 사용하면 더 유연하고 강력한 믹스인을 만들 수 있습니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 파라미터가 있는 믹스인의 기본 문법, 기본값 설정, 여러 파라미터 사용, 키워드 인자, 그리고 실제 활용 예시를 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`파라미터 기본 문법`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`믹스인에 `,(0,o.jsx)(`b`,{children:`파라미터를 전달`}),`하는 기본 방법을 알아봅니다.`,(0,o.jsx)(`br`,{}),`같은 믹스인으로 색상·크기·간격 등을 바꿔 쓰려면 파라미터 문법을 이해하는 것이 필수이기 때문에, 이후 예제를 보기 전에`,` `,(0,o.jsx)(`b`,{children:`기본 형태와 동작 방식`}),`을 먼저 정리합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`단일 파라미터`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`믹스인 이름 뒤에 `,(0,o.jsx)(`b`,{children:`괄호 안에 파라미터 이름`}),`을 작성합니다.`]}),(0,o.jsx)(i,{title:`단일 파라미터 예시`,language:`css`,className:`mt_m`,children:`// 파라미터가 있는 믹스인 정의
@mixin button($bg-color) {
  padding: 8px 16px;
  background-color: $bg-color;
  color: #ffffff;
  border-radius: 4px;
}

// 파라미터와 함께 사용
.button-primary {
  @include button(#0a58ca);
}

.button-success {
  @include button(#28a745);
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.button-primary {
  padding: 8px 16px;
  background-color: #0a58ca; // 배경 색상만 다르게 적용
  color: #ffffff;
  border-radius: 4px;
}

.button-success {
  padding: 8px 16px;
  background-color: #28a745; // 배경 색상만 다르게 적용
  color: #ffffff;
  border-radius: 4px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`파라미터를 사용하면 `,(0,o.jsx)(`b`,{children:`같은 패턴을 다양한 값으로 재사용`}),`할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`여러 파라미터`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`믹스인에 `,(0,o.jsx)(`b`,{children:`여러 파라미터를 전달`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`여러 파라미터 예시`,language:`css`,className:`mt_m`,children:`// 여러 파라미터가 있는 믹스인
@mixin button($bg-color, $text-color, $padding) {
  padding: $padding;
  background: $bg-color;
  color: $text-color;
  border-radius: 4px;
}

.button-primary {
  @include button(#0a58ca, #ffffff, 8px 16px);
}

.button-outline {
  @include button(transparent, #0a58ca, 10px 20px);
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`여러 파라미터를 사용할 때는`,` `,(0,o.jsx)(`b`,{className:`t_red`,children:`반드시 파라미터 순서대로 값을 전달`}),`해야 합니다.`,(0,o.jsx)(`br`,{}),`순서를 잘못 전달하면 의도하지 않은 결과가 나올 수 있습니다.`]}),(0,o.jsx)(i,{title:`잘못된 예시 (❌ 순서 오류)`,language:`css`,className:`mt_m`,children:`@mixin button($bg-color, $text-color, $padding) {
  padding: $padding;
  background: $bg-color;
  color: $text-color;
}

// ❌ 잘못된 순서: 배경색과 텍스트 색상이 바뀜
.button {
  @include button(#ffffff, #0a58ca, 8px 16px);
  // 의도: 배경 #0a58ca, 텍스트 #ffffff
  // 실제: 배경 #ffffff, 텍스트 #0a58ca (반대로 적용됨)
}`}),(0,o.jsx)(i,{title:`올바른 예시 (✅ 순서 준수)`,language:`css`,className:`mt_m`,children:`// ✅ 올바른 순서: 파라미터 정의 순서대로 전달
.button {
  @include button(#0a58ca, #ffffff, 8px 16px);
  // 배경 #0a58ca, 텍스트 #ffffff (의도한 대로 적용됨)
}`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`따라서 여러 파라미터를 사용할 때는`,` `,(0,o.jsx)(`b`,{children:`믹스인 정의에서 선언한 파라미터 순서를 정확히 따라야`}),` 합니다.`]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`하지만 파라미터가 많아질수록`,` `,(0,o.jsx)(`b`,{children:`순서를 기억하기 어렵고 가독성이 떨어집니다`}),`.`,(0,o.jsx)(`br`,{}),`예를 들어`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@include button(#0a58ca, #ffffff, 8px 16px, 4px, solid, 2px)`}),`처럼 여러 값을 나열하면,`,` `,(0,o.jsx)(`b`,{children:`각 값이 어떤 파라미터에 해당하는지 구분하기 어렵습니다`}),`.`]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이런 경우에는 `,(0,o.jsx)(`b`,{className:`t_blue`,children:`키워드 인자`}),`를 사용하는 것이 좋습니다.`,(0,o.jsx)(`br`,{}),`키워드 인자를 사용하면 `,(0,o.jsx)(`b`,{children:`파라미터 이름을 명시`}),`하여 순서에 상관없이 값을 전달할 수 있고,`,` `,(0,o.jsx)(`b`,{children:`코드의 가독성과 유지보수성이 크게 향상`}),`됩니다.`,(0,o.jsx)(`br`,{}),`키워드 인자의 사용 방법은 아래`,` `,(0,o.jsx)(`b`,{className:`t_blue`,children:`[키워드 인자]`}),` 섹션에서 자세히 설명합니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`기본값 설정`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`파라미터에 `,(0,o.jsx)(`b`,{children:`기본값을 설정`}),`하면, 값을 전달하지 않아도 됩니다.`,(0,o.jsx)(`br`,{}),`자주 쓰는 값은 기본값으로 두고, 필요할 때만 덮어쓰면 믹스인을`,` `,(0,o.jsx)(`b`,{children:`더 단순한 문법으로, 더 다양한 상황에`}),` 적용할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본값 문법`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`파라미터 이름 뒤에 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`:`}),`를 쓰고 기본값을 지정합니다.`]}),(0,o.jsx)(i,{title:`기본값 설정 예시`,language:`css`,className:`mt_m`,children:`// 기본값이 있는 믹스인
@mixin button($bg-color: #0a58ca, $text-color: #ffffff) {
  padding: 8px 16px;
  background-color: $bg-color;
  color: $text-color;
  border-radius: 4px;
}

// 기본값 사용
.button-default {
  @include button;  // 모든 파라미터 기본값 사용
}

// 일부만 변경
.button-custom {
  @include button(#28a745);  // 첫 번째 파라미터만 변경
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.button-default {
  padding: 8px 16px;
  background-color: #0a58ca;
  color: #ffffff;
  border-radius: 4px;
}

.button-custom {
  padding: 8px 16px;
  background-color: #28a745;
  color: #ffffff;
  border-radius: 4px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`기본값을 설정하면 `,(0,o.jsx)(`b`,{children:`필요한 파라미터만 전달`}),`할 수 있어 사용이 편리합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`일부 파라미터만 기본값 설정`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`모든 파라미터에 기본값을 설정할 필요는 없습니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`b`,{children:`일부 파라미터만 기본값을 설정`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`일부 기본값 예시`,language:`css`,className:`mt_m`,children:`// 첫 번째는 필수, 두 번째는 기본값
@mixin button($bg-color, $text-color: #ffffff) {
  padding: 8px 16px;
  background-color: $bg-color;
  color: $text-color;
}

.button {
  @include button(#0a58ca);  // $text-color는 기본값 사용
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.button {
  padding: 8px 16px;
  background-color: #0a58ca;
  color: #ffffff;            // $text-color는 기본값 사용
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`b`,{children:`기본값이 없는 파라미터는 반드시 전달`}),`해야 하고, 기본값이 있는 파라미터는 선택적으로 전달할 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`키워드 인자`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`키워드 인자는 `,(0,o.jsx)(`b`,{children:`파라미터 이름을 명시`}),`하여 값을 전달하는 방식입니다.`,(0,o.jsx)(`br`,{}),`위치 인자처럼 순서에 의존하지 않고,`,` `,(0,o.jsx)(`b`,{className:`t_blue`,children:`$파라미터명: 값`}),` 형태로 전달합니다.`,(0,o.jsx)(`br`,{}),(0,o.jsxs)(`mark`,{children:[`인자가 많아졌을 때 순서에 의존하지 않고 코드를 읽기 쉽게 만들 수 있어서, `,(0,o.jsx)(`b`,{children:`팀 프로젝트나 장기 유지보수`}),`에서 특히 도움이 됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`키워드 인자란?`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`키워드 인자는 `,(0,o.jsx)(`b`,{children:`파라미터 이름과 값을 함께 명시`}),`하여 전달하는 방식입니다. 위치 인자와 달리 `,(0,o.jsx)(`b`,{children:`순서에 상관없이`}),` 값을 전달할 수 있어, 코드의 가독성과 안정성이 크게 향상됩니다.`,(0,o.jsx)(`br`,{}),`키워드 인자를 사용하면`,` `,(0,o.jsx)(`b`,{children:`각 값이 어떤 파라미터에 해당하는지 명확하게 알 수 있어`}),` 코드를 읽고 이해하기 쉬워집니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`키워드 인자 기본 사용법`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`키워드 인자는 `,(0,o.jsx)(`b`,{className:`t_blue`,children:`$파라미터명: 값`}),` 형태로 사용하며, `,(0,o.jsx)(`b`,{children:`순서에 상관없이 전달`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`키워드 인자 예시`,language:`css`,className:`mt_m`,children:`@mixin button($bg-color, $text-color, $padding) {
  padding: $padding;
  background-color: $bg-color;
  color: $text-color;
}

// 순서대로 전달 (위치 인자)
.button1 {
  @include button(#0a58ca, #ffffff, 8px 16px);
}

// 키워드 인자로 전달 (순서 무관)
.button2 {
  @include button($padding: 10px 20px, $bg-color: #28a745, $text-color: #ffffff);
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.button1 {
  padding: 8px 16px;
  background-color: #0a58ca;
  color: #ffffff;
}

.button2 {
  padding: 10px 20px;
  background-color: #28a745;
  color: #ffffff;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`키워드 인자를 사용하면 `,(0,o.jsx)(`b`,{children:`파라미터가 많을 때 가독성이 향상`}),`되고, 실수로 순서를 잘못 전달하는 것을 방지할 수 있습니다.`,(0,o.jsx)(`br`,{}),`또한 `,(0,o.jsx)(`b`,{children:`파라미터 이름을 명시`}),`하므로, 나중에 코드를 다시 읽을 때 각 값의 의미를 쉽게 파악할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`키워드 인자의 장점`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`키워드 인자를 사용하면 다음과 같은 장점이 있습니다.`}),(0,o.jsx)(i,{title:`파라미터가 많을 때 비교`,language:`css`,className:`mt_m`,children:`@mixin card($bg-color, $padding, $border-radius, $box-shadow, $margin) {
  background: $bg-color;
  padding: $padding;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  margin: $margin;
}

// ❌ 위치 인자: 각 값이 무엇인지 알기 어려움
.card1 {
  @include card(#ffffff, 16px, 8px, 0 2px 4px rgba(0,0,0,0.1), 20px);
}

// ✅ 키워드 인자: 각 값의 의미가 명확함
.card2 {
  @include card(
    $bg-color: #ffffff,
    $padding: 16px,
    $border-radius: 8px,
    $box-shadow: 0 2px 4px rgba(0,0,0,0.1),
    $margin: 20px
  );
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.card1 {
  background: #ffffff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
}

.card2 {
  background: #ffffff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`위치 인자로는`,` `,(0,o.jsx)(`b`,{children:`각 값이 어떤 파라미터에 해당하는지 알기 어렵지만`}),`, 키워드 인자를 사용하면 `,(0,o.jsx)(`b`,{children:`코드를 읽는 사람이 각 값의 의미를 즉시 이해`}),`할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`키워드 인자와 위치 인자 혼합`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`키워드 인자와 위치 인자를 `,(0,o.jsx)(`b`,{children:`함께 사용`}),`할 수 있습니다.`]}),(0,o.jsxs)(`p`,{className:`mt_s`,children:[`다만 `,(0,o.jsx)(`b`,{className:`t_red`,children:`키워드 인자는 반드시 위치 인자 뒤에`}),` `,`와야 합니다.`,(0,o.jsx)(`br`,{}),`이 규칙이 필요한 이유는`,` `,(0,o.jsx)(`b`,{children:`위치 인자가 순서에 따라 파라미터에 매핑`}),`되기 때문입니다.`]}),(0,o.jsxs)(`p`,{className:`mt_s`,children:[`만약 키워드 인자가 먼저 오면, 그 뒤에 오는 위치 인자가`,` `,(0,o.jsx)(`b`,{children:`어느 파라미터에 해당하는지 모호`}),`해집니다.`,(0,o.jsx)(`br`,{}),`예를 들어`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@include button($bg-color: #0a58ca, #ffffff)`}),`처럼 키워드 인자 뒤에 위치 인자가 오면,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`#ffffff`}),`가`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`$text-color`}),`인지`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`$padding`}),`인지 구분할 수 없어 에러가 발생합니다.`]}),(0,o.jsx)(i,{title:`혼합 사용 예시`,language:`css`,className:`mt_m`,children:`@mixin button($bg-color, $text-color, $padding) {
  padding: $padding;
  background: $bg-color;
  color: $text-color;
}

// ✅ 올바른 사용: 첫 번째는 위치 인자, 나머지는 키워드 인자
.button {
  @include button(#0a58ca, $padding: 10px 20px, $text-color: #ffffff);
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.button {
  padding: 10px 20px;
  background: #0a58ca;
  color: #ffffff;
}`}),(0,o.jsx)(i,{title:`잘못된 사용 (❌ 에러)`,language:`css`,className:`mt_m`,children:`// ❌ 에러: 키워드 인자가 위치 인자 앞에 오면 안 됨
.button {
  @include button($bg-color: #0a58ca, #ffffff, $padding: 10px 20px);
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실제 활용 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`파라미터가 있는 믹스인을 `,(0,o.jsx)(`b`,{children:`실제 프로젝트에서 활용`}),`하는 예시를 살펴봅니다.`,(0,o.jsx)(`br`,{}),`버튼, 카드, 레이아웃처럼 다양한 변형이 필요한 컴포넌트에 파라미터 믹스인을 적용하면, `,(0,o.jsx)(`b`,{children:`클래스 수는 줄이고 표현력은 높이는`}),` 패턴을 경험할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`버튼 믹스인`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`색상과 크기를 파라미터로 받는 `,(0,o.jsx)(`b`,{children:`버튼 믹스인`}),` 예시입니다.`]}),(0,o.jsx)(i,{title:`버튼 믹스인 예시`,language:`css`,className:`mt_m`,children:`@mixin button($bg-color: #0a58ca, $text-color: #ffffff, $padding: 8px 16px) {
  padding: $padding;
  background: $bg-color;
  color: $text-color;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  border: none;

  &:hover {
    background: darken($bg-color, 10%);
  }
}

.button-primary {
  @include button;
}

.button-success {
  @include button(#28a745);
}

.button-large {
  @include button($padding: 12px 24px);
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`그림자 믹스인`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`그림자 속성을 파라미터로 받는 `,(0,o.jsx)(`b`,{children:`그림자 믹스인`}),` 예시입니다.`]}),(0,o.jsx)(i,{title:`그림자 믹스인 예시`,language:`css`,className:`mt_m`,children:`@mixin shadow($x: 0, $y: 4px, $blur: 6px, $spread: 0, $color: rgba(0, 0, 0, 0.1)) {
  box-shadow: $x $y $blur $spread $color;
}

.card {
  @include shadow;
}

.modal {
  @include shadow(0, 10px, 15px, 0, rgba(0, 0, 0, 0.2));
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`반응형 미디어 쿼리 믹스인`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`브레이크포인트를 파라미터로 받는 `,(0,o.jsx)(`b`,{children:`반응형 믹스인`}),` 예시입니다.`]}),(0,o.jsx)(i,{title:`반응형 믹스인 예시`,language:`css`,className:`mt_m`,children:`@mixin responsive($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

.container {
  width: 100%;

  @include responsive(768px) {
    max-width: 720px;
    margin: 0 auto;
  }

  @include responsive(1024px) {
    max-width: 1140px;
  }
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Flexbox 레이아웃 믹스인`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`Flexbox 속성을 파라미터로 받는 `,(0,o.jsx)(`b`,{children:`레이아웃 믹스인`}),` 예시입니다.`]}),(0,o.jsx)(i,{title:`Flexbox 믹스인 예시`,language:`css`,className:`mt_m`,children:`@mixin flex($direction: row, $justify: flex-start, $align: stretch, $gap: 0) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
  gap: $gap;
}

.container {
  @include flex(row, space-between, center, 16px);
}

.vertical-center {
  @include flex($justify: center, $align: center);
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`파라미터 사용 시 주의사항`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`파라미터를 사용할 때 `,(0,o.jsx)(`b`,{children:`주의해야 할 사항`}),`들을 정리합니다.`]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`필수 파라미터는 앞에 배치`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsxs)(`p`,{children:[`기본값이 없는 `,(0,o.jsx)(`b`,{children:`필수 파라미터는 앞에 배치`}),`하는 것이 좋습니다.`]}),(0,o.jsx)(i,{title:`좋은 예시`,language:`css`,className:`mt_s`,children:`// 필수 파라미터가 앞에 있음
@mixin button($bg-color, $text-color: #ffffff) {
  // ...
}`}),(0,o.jsx)(i,{title:`나쁜 예시`,language:`css`,className:`mt_ms`,children:`// 필수 파라미터가 뒤에 있음 (사용이 불편함)
@mixin button($text-color: #ffffff, $bg-color) {
  // ...
}`})]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`파라미터 개수 제한`}),(0,o.jsxs)(`dd`,{children:[`파라미터가 너무 많으면 `,(0,o.jsx)(`b`,{children:`사용하기 어려워집니다`}),`. 일반적으로`,` `,(0,o.jsx)(`b`,{children:`3-5개 이하`}),`가 적절합니다.`]}),(0,o.jsxs)(`dd`,{children:[`파라미터가 많다면 `,(0,o.jsx)(`b`,{children:`객체나 맵을 사용`}),`하거나,`,` `,(0,o.jsx)(`b`,{children:`여러 개의 작은 믹스인으로 분리`}),`하는 것을 고려해보세요.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`파라미터가 있는 믹스인에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`기본 문법`}),`: 괄호 안에 파라미터 이름 작성,`,` `,(0,o.jsx)(`code`,{children:`@include`}),` 사용 시 값 전달`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`여러 파라미터`}),`: 쉼표로 구분하여 여러 파라미터 전달 가능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`기본값 설정`}),`: 파라미터 이름 뒤에 : 기본값 형태로 설정`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`키워드 인자`}),`: 파라미터 이름과 함께 값을 전달하여 순서 무관하게 사용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`활용 예시`}),`: 버튼, 그림자, 반응형, Flexbox 등에서 활용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`주의사항`}),`: 필수 파라미터는 앞에 배치, 파라미터 개수 제한`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`반복되는 스타일을 믹스인으로 정리하는 방법`}),`을 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/06_scss_03.png`,alt:`파라미터가 있는 믹스인`}),(0,o.jsx)(`figcaption`,{children:`파라미터가 있는 믹스인`})]})]})}export{l as default,a as t};