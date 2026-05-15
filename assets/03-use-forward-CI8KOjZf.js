import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`@use, @forward 기본 이해`,description:`SCSS @use와 @forward의 기본 개념을 상세히 알아봅니다. @use의 기본 문법, 네임스페이스, as 키워드, @forward의 개념과 사용법, @use와 @forward의 차이, 그리고 실제 사용 예시를 설명합니다.`,keyword:`scss @use, scss @forward, scss use, scss forward, scss 모듈 시스템, scss 네임스페이스`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(`b`,{children:`@use`}),`와 `,(0,o.jsx)(`b`,{children:`@forward`}),`는 SCSS의 모듈 시스템에서`,` `,(0,o.jsx)(`b`,{children:`파일을 불러오고 전달하는 기능`}),`입니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`는 파일을 불러와서 사용하고,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`는 파일을 다른 곳에서 사용할 수 있게 전달합니다.`]}),(0,o.jsxs)(`p`,{className:`mt_s`,children:[`이 페이지에서는 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`의 기본 문법, 네임스페이스, `,(0,o.jsx)(`code`,{className:`t_blue`,children:`as`}),` 키워드,`,(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`의 개념과 사용법,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`와`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`의 차이, 그리고 실제 사용 예시를 상세히 알아봅니다.`]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`@use 기본 이해`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`는`,` `,(0,o.jsx)(`b`,{children:`파셜 파일을 불러와서 사용`}),`하는 기능입니다.`,(0,o.jsx)(`br`,{}),`네임스페이스, `,(0,o.jsx)(`code`,{children:`as`}),` 키워드, 네임스페이스 제거 등 기본 문법을 이해해 두면,`,(0,o.jsxs)(`b`,{children:[(0,o.jsx)(`code`,{children:`@import`}),` 대신 `,(0,o.jsx)(`code`,{children:`@use`}),`를 사용하는 이유와 모듈 시스템의 장점`]}),`을 실무에서 바로 활용할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`@use의 기본 개념`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`는`,` `,(0,o.jsx)(`b`,{children:`"이 파일을 사용하겠다"`}),`는 의미입니다.`,(0,o.jsx)(`br`,{}),`다른 파일에서 정의한 변수, 믹스인, 함수를 가져와서 사용할 수 있습니다.`]}),(0,o.jsx)(i,{title:`@_variables.scss`,language:`css`,className:`mt_m`,children:`// _variables.scss
$color-primary: #0a58ca;
$color-secondary: #6c757d;`}),(0,o.jsx)(i,{title:`@use 기본 예시`,language:`css`,className:`mt_m`,children:`/* main.scss */
@use "variables";

.button {
  background: variables.$color-primary;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@use "variables"`}),`는`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`_variables.scss`}),` 파일을 불러와서 사용한다는 의미입니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 문법`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`의 기본 문법은 다음과 같습니다.`]}),(0,o.jsx)(i,{title:`@use 기본 문법`,language:`css`,className:`mt_m`,children:`@use "파일명";
// 언더스코어와 확장자는 생략 가능`}),(0,o.jsx)(i,{title:`실제 예시`,language:`css`,className:`mt_m`,children:`/* 파일명: _variables.scss */
/* 불러오기: @use "variables"; */

@use "variables";  /* _variables.scss 불러오기 */
@use "mixins";     /* _mixins.scss 불러오기 */
@use "buttons";    /* _buttons.scss 불러오기 */`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`언더스코어(`,(0,o.jsx)(`code`,{className:`t_blue`,children:`_`}),`)와 확장자(`,(0,o.jsx)(`code`,{className:`t_blue`,children:`.scss`}),`)는 `,(0,o.jsx)(`b`,{children:`생략할 수 있습니다`}),`.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`네임스페이스 사용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`로 불러온 변수나 믹스인은`,` `,(0,o.jsx)(`b`,{children:`네임스페이스(파일명)를 붙여서 사용`}),`해야 합니다.`]}),(0,o.jsx)(i,{title:`_variables.scss`,language:`css`,className:`mt_m`,children:`// _variables.scss
$color-primary: #0a58ca;
$spacing-md: 16px;`}),(0,o.jsx)(i,{title:`네임스페이스 사용 예시`,language:`css`,className:`mt_m`,children:`// main.scss
@use "variables";

.button {
  // 네임스페이스 사용
  background: variables.$color-primary;
  padding: variables.$spacing-md;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`네임스페이스를 사용하면 `,(0,o.jsx)(`b`,{children:`어떤 파일에서 온 변수인지 명확`}),`하고,`,` `,(0,o.jsx)(`b`,{children:`변수 이름 충돌을 방지`}),`할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`as 키워드로 네임스페이스 변경`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`as`}),` 키워드를 사용하여`,` `,(0,o.jsx)(`b`,{children:`네임스페이스를 변경`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`_variables.scss`,language:`css`,className:`mt_m`,children:`// _variables.scss
$color-primary: #0a58ca;`}),(0,o.jsx)(i,{title:`as 키워드 사용 예시`,language:`css`,className:`mt_m`,children:`// main.scss
@use "variables" as vars;  // 네임스페이스를 vars로 변경

.button {
  background: vars.$color-primary;  // vars 사용
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`긴 파일명을 `,(0,o.jsx)(`b`,{children:`짧은 네임스페이스로 변경`}),`하여 사용할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`네임스페이스 제거`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`as *`}),`를(을) 사용하여`,` `,(0,o.jsx)(`b`,{children:`네임스페이스를 제거`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`_variables.scss`,language:`css`,className:`mt_m`,children:`// _variables.scss
$color-primary: #0a58ca;`}),(0,o.jsx)(i,{title:`네임스페이스 제거 예시`,language:`css`,className:`mt_m`,children:`// main.scss
@use "variables" as *;  // 네임스페이스 제거

.button {
  background: $color-primary;  // 네임스페이스 없이 사용
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`네임스페이스를 제거하면 `,(0,o.jsx)(`b`,{children:`@import처럼 사용`}),`할 수 있지만,`,` `,(0,o.jsx)(`b`,{children:`변수 이름 충돌 위험이 있으므로 주의`}),`가 필요합니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`@forward 기본 이해`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`는`,` `,(0,o.jsx)(`b`,{children:`파일을 다른 곳에서 사용할 수 있게 전달`}),`하는 기능입니다.`,(0,o.jsx)(`br`,{}),`여러 파셜을 하나의 모듈로 묶어서 전달할 때 사용하므로,`,` `,(0,o.jsx)(`b`,{children:`변수·믹스인을 카테고리별로 그룹화`}),`하거나 라이브러리처럼 제공할 때 특히 유용합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`@forward의 기본 개념`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`는`,` `,(0,o.jsx)(`b`,{children:`"이 파일의 내용을 다른 곳에서도 사용할 수 있게 전달한다"`}),`는 의미입니다.`,(0,o.jsx)(`br`,{}),`중간 파일에서 여러 파셜을 모아서 하나의 모듈로 만들 때 사용합니다.`]}),(0,o.jsx)(i,{title:`_colors.scss`,language:`css`,className:`mt_m`,children:`// _colors.scss
$color-primary: #0a58ca;
$color-secondary: #6c757d;`}),(0,o.jsx)(i,{title:`_spacing.scss`,language:`css`,className:`mt_m`,children:`// _spacing.scss
$spacing-md: 16px;
$spacing-lg: 24px;`}),(0,o.jsx)(i,{title:`@forward 기본 예시`,language:`css`,className:`mt_m`,children:`/* _variables.scss (위 두개의 파셜 파일을 묶어 전달하는 역할) */
@forward "colors";
@forward "spacing";`}),(0,o.jsx)(i,{title:`main.scss`,language:`css`,className:`mt_m`,children:`// main.scss
@use "variables";

.button {
  background: variables.$color-primary;  // colors에서
  padding: variables.$spacing-md;        // spacing에서
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`_variables.scss`}),`가`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`_colors.scss`}),`와`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`_spacing.scss`}),`를 `,(0,o.jsx)(`b`,{children:`전달`}),`하여,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`main.scss`}),`에서는`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`variables`}),` 하나만 불러와도 두 파일의 내용을 모두 사용할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`@forward의 기본 문법`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`의 기본 문법은`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`와 동일합니다.`]}),(0,o.jsx)(i,{title:`@forward 기본 문법`,language:`css`,className:`mt_m`,children:`@forward "파일명";
// 언더스코어와 확장자는 생략 가능`}),(0,o.jsx)(i,{title:`실제 예시`,language:`css`,className:`mt_ms`,children:`// _variables.scss
@forward "colors";
@forward "spacing";
@forward "typography";

// 여러 파일을 하나로 묶어서 전달`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`@use와 @forward의 차이`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`와`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`의 `,(0,o.jsx)(`b`,{children:`차이점`}),`을 명확히 이해하는 것이 중요합니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`는 현재 파일에서 직접 사용하고,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`는 다른 파일에서 사용할 수 있게 전달하는데, 이 차이를 이해하면`,` `,(0,o.jsx)(`b`,{children:`모듈 구조를 설계할 때 어떤 것을 선택할지`}),` 명확하게 판단할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`@use: 사용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`는`,` `,(0,o.jsx)(`b`,{children:`파일을 불러와서 현재 파일에서 사용`}),`합니다.`]}),(0,o.jsx)(i,{title:`_variables.scss`,language:`css`,className:`mt_m`,children:`// _colors.scss
$color-primary: #0a58ca;`}),(0,o.jsx)(i,{title:`@use 사용 예시`,language:`css`,className:`mt_m`,children:`// _buttons.scss
@use "color";  // colors 불러와서 사용

.button {
  background: color.$color-primary;  // 현재 파일에서 사용
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`는 `,(0,o.jsx)(`b`,{children:`현재 파일에서만 사용`}),`할 수 있게 합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`@forward: 전달`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`는`,` `,(0,o.jsx)(`b`,{children:`파일을 다른 곳에서 사용할 수 있게 전달`}),`합니다.`]}),(0,o.jsx)(i,{title:`_colors.scss`,language:`css`,className:`mt_m`,children:`// _colors.scss
$color-primary: #0a58ca;`}),(0,o.jsx)(i,{title:`@forward 사용 예시`,language:`css`,className:`mt_m`,children:`// _variables.scss
@forward "colors";  // colors를 다른 곳에서 사용할 수 있게 전달`}),(0,o.jsx)(i,{title:`main.scss`,language:`css`,className:`mt_m`,children:`// main.scss
@use "variables";  // variables를 사용

.button {
  background: variables.$color-primary;  // colors의 변수 사용 가능
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`는`,` `,(0,o.jsx)(`b`,{children:`다른 파일에서도 사용할 수 있게 전달`}),`합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`차이점 비교`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`두 기능의 차이를 `,(0,o.jsx)(`b`,{children:`표로 비교`}),`해봅니다.`]}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`구분`}),(0,o.jsx)(`li`,{className:`cell content`,children:`@use`}),(0,o.jsx)(`li`,{className:`cell content`,children:`@forward`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`의미`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@use`,children:`사용`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@forward`,children:`전달`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`사용 범위`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@use`,children:`현재 파일에서만 사용`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@forward`,children:`다른 파일에서도 사용 가능`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`용도`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@use`,children:`파일을 불러와서 직접 사용`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`@forward`,children:`여러 파일을 묶어서 전달`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`사용 예시`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`@use`,children:[(0,o.jsx)(`i`,{className:`filename`,children:`main.scss`}),`에서 variables 사용`]}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`@forward`,children:[(0,o.jsx)(`i`,{className:`filename`,children:`_variables.scss`}),`에서 colors, spacing 전달`]})]})]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`@use와 @forward 함께 사용`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`와`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`를`,` `,(0,o.jsx)(`b`,{children:`같은 파일에서 함께 사용`}),`할 수 있습니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`로 다른 파일에 전달하면서,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`로 현재 파일에서도 사용하는 예시입니다.`]}),(0,o.jsxs)(`ol`,{className:`ol_lst info_lst gap-column-important-l mt_xl`,children:[(0,o.jsxs)(`li`,{className:`weight-700-before font-18-before t_black_before`,children:[(0,o.jsx)(`strong`,{className:`font-18`,children:`색상 변수 파일 생성`}),(0,o.jsx)(i,{title:`_colors.scss`,language:`css`,className:`mt_ms`,children:`// _colors.scss
$color-primary: #0a58ca;
$color-secondary: #6c757d;`})]}),(0,o.jsxs)(`li`,{className:`weight-600-before font-18-before`,children:[(0,o.jsx)(`strong`,{className:`font-18`,children:`변수 파일에서 @forward와 @use 함께 사용`}),(0,o.jsxs)(`p`,{className:`mt_s`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`로 colors를 전달하고,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`로 현재 파일에서도 사용합니다.`]}),(0,o.jsx)(i,{title:`_variables.scss`,language:`css`,className:`mt_ms`,children:`// _variables.scss
@forward "colors";      // colors를 다른 파일에서 사용할 수 있게 전달
@use "colors" as *;     // colors를 현재 파일에서도 사용 (as *로 네임스페이스 생략)

// 현재 파일에서 colors의 변수 사용
$custom-color: $color-primary;`})]}),(0,o.jsxs)(`li`,{className:`weight-600-before font-18-before`,children:[(0,o.jsx)(`strong`,{className:`font-18`,children:`메인 파일에서 variables를 통해 colors 사용`}),(0,o.jsxs)(`p`,{className:`mt_s`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`variables`}),`를 통해`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`colors`}),`의 변수를 사용할 수 있습니다.`]}),(0,o.jsx)(i,{title:`main.scss`,language:`css`,className:`mt_ms`,children:`// main.scss
@use "variables";

.button {
  background: variables.$color-primary;  // variables를 통해 colors의 변수 사용
}`})]})]}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`이렇게 하면 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`_variables.scss`}),`에서 colors의 변수를 사용하면서, 동시에 다른 파일에서도`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`variables`}),`를 통해 colors의 변수에 접근할 수 있습니다.`]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실제 활용 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`와`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`를`,` `,(0,o.jsx)(`b`,{children:`실제 프로젝트에서 활용`}),`하는 예시를 살펴봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`변수 모듈 구성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 변수 파일을 `,(0,o.jsx)(`b`,{children:`하나의 모듈로 묶어서`}),` 사용하는 예시입니다.`]}),(0,o.jsx)(i,{title:`_colors.scss`,language:`css`,className:`mt_m`,children:`// _colors.scss
$color-primary: #0a58ca;
$color-secondary: #6c757d;`}),(0,o.jsx)(i,{title:`_spacing.scss`,language:`css`,className:`mt_m`,children:`// _spacing.scss
$spacing-md: 16px;
$spacing-lg: 24px;`}),(0,o.jsx)(i,{title:`_typography.scss`,language:`css`,className:`mt_m`,children:`// _typography.scss
$font-size-base: 16px;
$font-weight-bold: 700;`}),(0,o.jsx)(i,{title:`_variables.scss (중간 파일)`,language:`css`,className:`mt_m`,children:`/* _variables.scss (중간 파일) */
@forward "colors";
@forward "spacing";
@forward "typography";`}),(0,o.jsx)(i,{title:`main.scss`,language:`css`,className:`mt_m`,children:`/* main.scss */
@use "variables";

.button {
  background: variables.$color-primary;
  padding: variables.$spacing-md;
  font-size: variables.$font-size-base;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`여러 변수 파일을 하나의 모듈로 묶어서`}),` 관리할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`컴포넌트 모듈 구성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 컴포넌트 파일을 `,(0,o.jsx)(`b`,{children:`하나의 모듈로 묶어서`}),` 사용하는 예시입니다.`]}),(0,o.jsx)(i,{title:`_buttons.scss`,language:`css`,className:`mt_m`,children:`/* _buttons.scss */
.button { }`}),(0,o.jsx)(i,{title:`_cards.scss`,language:`css`,className:`mt_m`,children:`/* _cards.scss */
.card { }`}),(0,o.jsx)(i,{title:`_forms.scss`,language:`css`,className:`mt_m`,children:`/* _forms.scss */
.input { }`}),(0,o.jsx)(i,{title:`_components.scss (중간 파일)`,language:`css`,className:`mt_m`,children:`/* _components.scss (중간 파일) */
@forward "buttons";
@forward "cards";
@forward "forms";`}),(0,o.jsx)(i,{title:`main.scss`,language:`css`,className:`mt_m`,children:`// main.scss
@use "variables";
@use "components";

// components 모듈의 모든 컴포넌트 사용 가능`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`@forward의 고급 기능`}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`show와 hide`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`show`}),`와`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`hide`}),`를 사용하여`,` `,(0,o.jsx)(`b`,{children:`특정 항목만 전달하거나 제외`}),`할 수 있습니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`code`,{className:`t_blue`,children:`show`}),`는 `,(0,o.jsx)(`b`,{children:`지정한 항목만 전달`}),`하고, `,(0,o.jsx)(`code`,{className:`t_blue`,children:`hide`}),`는`,` `,(0,o.jsx)(`b`,{children:`지정한 항목을 제외`}),`하여 나머지를 전달합니다.`]}),(0,o.jsx)(i,{title:`_variables.scss`,language:`css`,className:`mt_m`,children:`// _variables.scss
$color-primary: #0a58ca;
$color-secondary: #6c757d;
$internal-var: #000000;  // 내부용 변수`}),(0,o.jsx)(i,{title:`show와 hide 예시`,language:`css`,className:`mt_m`,children:`// show
@forward "variables" show $color-primary, $color-secondary;
// $color-primary와 $color-secondary만 전달
// $internal-var는 전달되지 않음

// hide
@forward "variables" hide $internal-var;
// $internal-var를 제외하고 모두 전달`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`내부용 변수나 믹스인을 숨기고`}),`,`,` `,(0,o.jsx)(`b`,{children:`공개할 항목만 전달`}),`할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`as 키워드로 네임스페이스 변경`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`에서도`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`as`}),` 키워드를 사용할 수 있습니다.`]}),(0,o.jsx)(i,{title:`_colors.scss`,language:`css`,className:`mt_m`,children:`// _colors.scss
$color-primary: #0a58ca;`}),(0,o.jsx)(i,{title:`@forward에서 as 사용`,language:`css`,className:`mt_m`,children:`// _variables.scss
@forward "colors" as color-*;
// colors의 모든 항목을 color- 접두사로 전달`}),(0,o.jsx)(i,{title:`color- 접두사 추가`,language:`css`,className:`mt_m`,children:`// main.scss
@use "variables";

.button {
  background: variables.$color-primary-color;  // color- 접두사 추가
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsxs)(`h2`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`@use`}),`와 `,(0,o.jsx)(`i`,{className:`t_blue`,children:`@forward`}),` `,`사용 가이드`]}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`와`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`를 `,(0,o.jsx)(`b`,{children:`언제 어떻게 사용할지`}),` `,`가이드라인을 제시합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`@use를 사용하는 경우`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음과 같은 경우에는 `,(0,o.jsx)(`b`,{children:`@use를 사용`}),`합니다:`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`직접 사용`}),`: 파일을 불러와서 현재 파일에서 직접 사용할 때`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`메인 파일`}),`: main.scss 같은 메인 파일에서 파셜을 불러올 때`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`컴포넌트 파일`}),`: 컴포넌트 파일에서 변수나 믹스인을 사용할 때`]})]}),(0,o.jsx)(i,{title:`@use 사용 예시`,language:`css`,className:`mt_m`,children:`// main.scss
@use "variables";
@use "mixins";
@use "buttons";

// 직접 사용`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`@forward를 사용하는 경우`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음과 같은 경우에는 `,(0,o.jsx)(`b`,{children:`@forward를 사용`}),`합니다:`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`모듈 구성`}),`: 여러 파일을 하나의 모듈로 묶을 때`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`중간 파일`}),`: 중간 파일에서 여러 파셜을 전달할 때`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`라이브러리 구성`}),`: 라이브러리처럼 여러 파일을 묶어서 제공할 때`]})]}),(0,o.jsx)(i,{title:`@forward 사용 예시`,language:`css`,className:`mt_m`,children:`// _variables.scss (중간 파일)
@forward "colors";
@forward "spacing";
@forward "typography";

// 여러 파일을 하나로 묶어서 전달`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),` 기본 이해에 대해 알아본 내용을 정리합니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`@use 기본 개념`}),`: 파일을 불러와서 사용하는 기능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`네임스페이스`}),`: 파일명을 네임스페이스로 사용하여 변수 이름 충돌 방지`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`as 키워드`}),`: 네임스페이스 변경 또는 제거 (`,(0,o.jsx)(`code`,{className:`t_blue`,children:`as *`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`as 별명`}),`)`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`@forward 기본 개념`}),`: 파일을 다른 곳에서 사용할 수 있게 전달하는 기능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`@use vs @forward`}),`: `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`는 사용, `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`는 전달`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`함께 사용`}),`: 같은 파일에서 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`와 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@forward`}),`를 함께 사용 가능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`고급 기능`}),`: `,(0,o.jsx)(`code`,{className:`t_blue`,children:`show`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`hide`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`as`}),` 키워드로 세밀한 제어 가능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`사용 가이드`}),`: 직접 사용은 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@use`}),`, 모듈 구성은 @forward`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`기본적인 SCSS 폴더 구조 예시`}),`를 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/09_scss_03.png`,alt:`@forward 기본 이해`}),(0,o.jsx)(`figcaption`,{children:`@forward 기본 이해`})]})]})}export{l as default,a as t};