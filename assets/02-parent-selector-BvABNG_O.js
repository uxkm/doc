import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`부모 선택자 &의 역할과 사용법`,description:`SCSS의 부모 선택자 참조 기호(&)를 상세히 알아봅니다. & 기호의 개념, 다양한 사용 패턴(가상 클래스, BEM 네이밍, 중첩된 선택자), 실제 활용 예시를 단계별로 설명합니다.`,keyword:`scss 부모 선택자, scss &, scss ampersand, scss 부모 참조, scss BEM, scss 가상 클래스`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(`b`,{children:`부모 선택자 참조 기호(&)`}),`는 SCSS에서`,` `,(0,o.jsx)(`b`,{children:`부모 선택자를 참조`}),`할 때 사용하는 특수 기호입니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`를 사용하면 가상 클래스(`,(0,o.jsx)(`code`,{className:`t_blue`,children:`:hover`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`:active`}),` 등)를 중첩하거나, BEM 네이밍을 간결하게 작성할 수 있습니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 & 기호의 기본 개념부터 다양한 사용 패턴, 실제 활용 예시, 그리고 주의사항까지 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`부모 선택자 참조 기호(&)란?`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),` 기호는 SCSS에서`,` `,(0,o.jsx)(`b`,{children:`부모 선택자를 참조`}),`할 때 사용하는 특수 문자입니다.`,(0,o.jsx)(`br`,{}),`컴파일 시 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`는`,` `,(0,o.jsx)(`b`,{children:`부모 선택자로 치환`}),`되어 최종 CSS 선택자가 완성됩니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`& 기호의 기본 개념`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`는`,` `,(0,o.jsx)(`b`,{children:`"현재 선택자의 부모"`}),`를 의미합니다.`,(0,o.jsx)(`br`,{}),`중첩된 선택자 안에서 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`를 사용하면 부모 선택자를 참조할 수 있습니다.`]}),(0,o.jsx)(i,{title:`& 기호 기본 사용법`,language:`css`,className:`mt_ms`,children:`.button {
  padding: 8px 16px;
  background: #0a58ca;

  &:hover {
    background: #084298;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`위 코드에서 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`&:hover`}),`는`,` `,(0,o.jsxs)(`b`,{children:[`부모 선택자인 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.button`}),`과 결합`]}),`되어 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.button:hover`}),`가 됩니다.`]}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_ms`,children:`.button {
  padding: 8px 16px;
  background: #0a58ca;
}
.button:hover {
  background: #084298;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`& 없이 작성한 경우`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`를 사용하지 않으면 어떻게 되는지 비교해봅니다.`]}),(0,o.jsx)(i,{title:`& 없이 작성 (잘못된 예시)`,language:`css`,className:`mt_ms`,children:`.button {
  padding: 8px 16px;

  :hover {  // & 없이 작성
    background: #084298;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS (의도와 다름)`,language:`css`,className:`mt_ms`,children:`.button {
  padding: 8px 16px;
}
.button :hover {  // 공백이 있어서 자식 요소의 hover가 됨
  background: #084298;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),` 없이 작성하면`,` `,(0,o.jsx)(`b`,{children:`공백이 생겨 자식 선택자`}),`가 되어버립니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`code`,{className:`t_blue`,children:`.button :hover`}),`는 "button 안의 모든 요소에 hover"를 의미하므로, 의도한 대로 동작하지 않습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`& 기호의 다양한 사용 패턴`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),` 기호는`,` `,(0,o.jsx)(`b`,{children:`다양한 상황에서 활용`}),`할 수 있습니다. 가장 많이 사용되는 패턴들을 살펴봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`가상 클래스와 함께 사용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`는`,` `,(0,o.jsxs)(`b`,{children:[`가상 클래스(`,(0,o.jsx)(`code`,{children:`:hover`}),`, `,(0,o.jsx)(`code`,{children:`:active`}),`,`,` `,(0,o.jsx)(`code`,{children:`:focus`}),` 등)와 함께`]}),` `,`자주 사용됩니다.`]}),(0,o.jsx)(i,{title:`가상 클래스 사용 예시`,language:`css`,className:`mt_ms`,children:`.button {
  padding: 8px 16px;
  background: #0a58ca;
  color: #fff;

  &:hover {
    background: #084298;
  }

  &:active {
    background: #063c86;
  }

  &:focus {
    outline: 2px solid #0a58ca;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 작성하면 `,(0,o.jsx)(`b`,{children:`버튼의 모든 상태 스타일을 한 곳에 모아`}),` 관리할 수 있어 유지보수가 편리합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`가상 요소와 함께 사용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`는`,` `,(0,o.jsxs)(`b`,{children:[`가상 요소(`,(0,o.jsx)(`code`,{children:`::before`}),`, `,(0,o.jsx)(`code`,{children:`::after`}),` 등)와도 함께`]}),` `,`사용할 수 있습니다.`]}),(0,o.jsx)(i,{title:`가상 요소 사용 예시`,language:`css`,className:`mt_ms`,children:`.button {
  position: relative;
  padding: 8px 16px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    content: "→";
    margin-left: 4px;
  }
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`BEM 네이밍과 함께 사용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`는`,` `,(0,o.jsxs)(`b`,{children:[(0,o.jsxs)(`b`,{className:`t_blue`,children:[`BEM`,(0,o.jsx)(`sup`,{className:`sup`,children:`1)`})]}),`(Block Element Modifier) 방법론`]}),`과 함께 사용할 때 특히 유용합니다.`,(0,o.jsx)(`br`,{}),`BEM의 요소(Element)와 수정자(Modifier)를 간결하게 작성할 수 있습니다.`]}),(0,o.jsxs)(`p`,{className:`mt_ms ex_box`,children:[(0,o.jsxs)(`span`,{className:`t_blue`,children:[`1) `,(0,o.jsx)(`b`,{children:`BEM`}),`이란?`]}),(0,o.jsx)(`br`,{}),`BEM은 CSS 클래스 네이밍 방법론으로, `,(0,o.jsx)(`b`,{children:`Block(블록)`}),`,`,` `,(0,o.jsx)(`b`,{children:`Element(요소)`}),`, `,(0,o.jsx)(`b`,{children:`Modifier(수정자)`}),` 세 가지 개념으로 구성 요소를 명명합니다. 예를 들어`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.card__title--large`}),`에서`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`card`}),`는 블록,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`title`}),`은 요소,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`large`}),`는 수정자입니다. BEM을 사용하면 클래스 이름만 봐도 구조와 역할을 쉽게 파악할 수 있어 유지보수가 쉬워집니다.`]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`BEM 방법론은`,` `,(0,o.jsx)(`b`,{children:`큰 프로젝트에서 CSS 클래스 이름을 체계적으로 관리`}),`하기 위한 방법입니다. SCSS의 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),` 기호를 사용하면 BEM 네이밍을 더욱 간결하고 읽기 쉽게 작성할 수 있습니다.`]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`BEM Element 작성`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&__element`}),` 형태로 요소를 작성합니다.`]}),(0,o.jsx)(i,{title:`BEM Element 예시`,language:`css`,className:`mt_ms`,children:`.card {
  padding: 16px;

  &__title {
    font-size: 18px;
  }

  &__body {
    margin-top: 8px;
  }

  &__link {
    color: #0a58ca;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`위 코드는 컴파일되면 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.card__title`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.card__body`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.card__link`}),`가 됩니다.`]}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_ms`,children:`.card {
  padding: 16px;
}

.card__title {
  font-size: 18px;
}

.card__body {
  margin-top: 8px;
}

.card__link {
  color: #0a58ca;
}`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`BEM Modifier 작성`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&--modifier`}),` 형태로 수정자를 작성합니다.`]}),(0,o.jsx)(i,{title:`BEM Modifier 예시`,language:`css`,className:`mt_ms`,children:`.button {
  padding: 8px 16px;

  &--primary {
    background: #0a58ca;
    color: #fff;
  }

  &--secondary {
    background: #6c757d;
    color: #fff;
  }

  &--large {
    padding: 12px 24px;
    font-size: 18px;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`위 코드는 컴파일되면`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.button--primary`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.button--secondary`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.button--large`}),`가 됩니다.`]}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_ms`,children:`.button {
  padding: 8px 16px;
}

.button--primary {
  background: #0a58ca;
  color: #fff;
}

.button--secondary {
  background: #6c757d;
  color: #fff;
}

.button--large {
  padding: 12px 24px;
  font-size: 18px;
}`})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`복합 선택자와 함께 사용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`는 `,(0,o.jsx)(`b`,{children:`여러 선택자와 조합`}),`하여 사용할 수 있습니다.`]}),(0,o.jsx)(i,{title:`복합 선택자 예시`,language:`css`,className:`mt_m`,children:`.button {
  padding: 8px 16px;

  // .button.active
  &.active {
    background: #28a745;
  }

  // .button.disabled
  &.disabled {
    opacity: 0.5;
  }

  // .button:hover.active
  &:hover.active {
    background: #218838;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 작성하면 `,(0,o.jsx)(`b`,{children:`여러 클래스가 동시에 적용된 상태`}),`의 스타일을 명확하게 정의할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`문맥 선택자와 함께 사용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`는`,` `,(0,o.jsx)(`b`,{children:`부모 요소의 선택자와 조합`}),`하여 사용할 수도 있습니다.`]}),(0,o.jsx)(i,{title:`문맥 선택자 예시`,language:`css`,className:`mt_m`,children:`.card {
  padding: 16px;

  // .dark-theme .card
  .dark-theme & {
    background: #333;
    color: #fff;
  }

  // .sidebar .card
  .sidebar & {
    padding: 12px;
  }
}`}),(0,o.jsx)(`p`,{className:`mt_ms`,children:`위 코드는 컴파일 시 아래 예제와 같은 형태로 변환됩니다.`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_ms`,children:`.card {
  padding: 16px;
}

.dark-theme .card {
  background: #333;
  color: #fff;
}

.sidebar .card {
  padding: 12px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`를 뒤에 두면`,` `,(0,o.jsx)(`b`,{children:`부모 선택자가 뒤에 오는 형태`}),`로 컴파일됩니다.`,(0,o.jsx)(`br`,{}),`이렇게 하면 특정 컨텍스트에서만 적용되는 스타일을 명확하게 표현할 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실제 활용 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),` 기호를 활용한`,` `,(0,o.jsx)(`b`,{children:`실제 프로젝트 예시`}),`를 살펴봅니다.`,(0,o.jsx)(`br`,{}),`버튼, input, 드롭다운처럼 자주 사용하는 컴포넌트를 예제로 보면서, 이 문법이 `,(0,o.jsx)(`b`,{children:`실제 UI 설계와 컴포넌트 구조화에 어떻게 기여하는지`}),` 감을 잡을 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`버튼 컴포넌트`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다양한 상태와 변형을 가진 버튼 컴포넌트를`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`로 작성하는 예시입니다.`]}),(0,o.jsxs)(`iframe`,{className:`codepen mt_m`,height:700,style:{width:`100%`},scrolling:`no`,title:`3.2. 부모 선택자 활용 버튼 컴포넌트`,src:`https://codepen.io/uxkm/embed/vEGqOpM?default-tab=css%2Cresult&theme-id=dark`,frameBorder:`no`,loading:`lazy`,allowTransparency:!0,children:[`See the Pen`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm/pen/vEGqOpM`,children:`3.2. 부모 선택자 활용 버튼 컴포넌트`}),` `,`by UXKM (`,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm`,children:`@uxkm`}),`) on`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io`,children:`CodePen`}),`.`]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 작성하면 `,(0,o.jsx)(`b`,{children:`버튼의 모든 변형과 상태를 한 곳에 모아`}),` 관리할 수 있어 유지보수가 편리합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`input 컴포넌트`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`BEM 방법론을 사용한 input 컴포넌트 예시입니다.`}),(0,o.jsxs)(`iframe`,{className:`codepen mt_m`,height:600,style:{width:`100%`},scrolling:`no`,title:`3.2. 부모 선택자 활용 input 컴포넌트`,src:`https://codepen.io/uxkm/embed/PwNrqRo?default-tab=css%2Cresult&theme-id=dark`,frameBorder:`no`,loading:`lazy`,allowTransparency:!0,children:[`See the Pen`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm/pen/PwNrqRo`,children:`3.2. 부모 선택자 활용 input 컴포넌트`}),` `,`by UXKM (`,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm`,children:`@uxkm`}),`) on`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io`,children:`CodePen`}),`.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Dropdown / Select 컴포넌트`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`BEM 방법론을 사용한 Dropdown / Select 컴포넌트 예시입니다.`}),(0,o.jsxs)(`iframe`,{className:`codepen mt_m`,height:500,style:{width:`100%`},scrolling:`no`,title:`3.2. 부모 선택자 활용 Dropdown / Select 컴포넌트`,src:`https://codepen.io/uxkm/embed/bNpPdyB?default-tab=css%2Cresult&theme-id=dark`,frameBorder:`no`,loading:`lazy`,allowTransparency:!0,children:[`See the Pen`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm/pen/bNpPdyB`,children:`3.2. 부모 선택자 활용 Dropdown / Select 컴포넌트`}),` `,`by UXKM (`,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm`,children:`@uxkm`}),`) on`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io`,children:`CodePen`}),`.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`& 사용 시 주의사항`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`는 매우 유용한 기능이지만, 사용할 때 `,(0,o.jsx)(`b`,{children:`몇 가지 주의해야 할 점`}),`들이 있습니다.`,(0,o.jsx)(`br`,{}),`잘못 사용하면 의도하지 않은 CSS 선택자가 생성되거나, 컴파일 에러가 발생할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`& 앞뒤 공백 주의`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),` 앞뒤의 공백에 따라`,` `,(0,o.jsx)(`b`,{children:`컴파일 결과가 달라집니다`}),`.`]}),(0,o.jsx)(i,{title:`공백 차이 예시`,language:`css`,className:`mt_m`,children:`.button {
  // & 앞에 공백 없음: .button:hover
  &:hover {
    background: #084298;
  }

  // & 앞에 공백 있음: .button :hover (자식 선택자)
  :hover {
    background: #084298;
  }

  // & 뒤에 공백 없음: .button--primary
  &--primary {
    background: #0a58ca;
  }

  // & 뒤에 공백 있음: .button --primary (잘못된 선택자)
  & --primary {
    background: #0a58ca;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`를 사용할 때는`,` `,(0,o.jsx)(`b`,{children:`앞뒤 공백을 주의`}),`해야 합니다.`,(0,o.jsx)(`br`,{}),`일반적으로 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),` 앞뒤에는 공백을 두지 않습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`중첩 깊이 고려`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`를 여러 단계 중첩해서 사용하면`,` `,(0,o.jsx)(`b`,{children:`선택자가 복잡해질 수 있습니다`}),`.`]}),(0,o.jsx)(i,{title:`복잡한 중첩 예시`,language:`css`,className:`mt_m`,children:`.card {
  &__title {
    &--large {
      &:hover {
        // .card__title--large:hover
        color: #0a58ca;
      }
    }
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`너무 깊게 중첩하면 가독성이 떨어지므로,`,` `,(0,o.jsx)(`b`,{children:`2-3단계를 넘지 않는 것`}),`을 권장합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`&는 부모 선택자만 참조`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`는`,` `,(0,o.jsx)(`b`,{children:`직접 부모 선택자만 참조`}),`합니다.`,(0,o.jsx)(`br`,{}),`할아버지나 조상 선택자는 참조하지 않습니다.`]}),(0,o.jsx)(i,{title:`& 참조 범위 예시`,language:`css`,className:`mt_m`,children:`.page {
  .section {
    .card {
      // &는 .card만 참조 (직접 부모)
      &:hover {
        // .card:hover (페이지나 섹션은 참조 안 함)
        background: #f0f0f0;
      }
    }
  }
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`SCSS 부모 선택자 참조 기호(&)에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`&의 개념`}),`: 부모 선택자를 참조하는 특수 기호, 컴파일 시 부모 선택자로 치환됨`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`주요 사용 패턴`}),`: 가상 클래스/요소, BEM 네이밍, 복합 선택자, 문맥 선택자`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`BEM과의 조합`}),`: &__element, &--modifier 형태로 BEM을 간결하게 작성 가능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`주의사항`}),`: & 앞뒤 공백 주의, 중첩 깊이 제한, 직접 부모만 참조`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`SCSS의 주석 처리 방식`}),`에 대해 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/03_scss_02.png`,alt:`SCSS 부모 선택자`}),(0,o.jsx)(`figcaption`,{children:`SCSS 부모 선택자`})]})]})}export{l as default,a as t};