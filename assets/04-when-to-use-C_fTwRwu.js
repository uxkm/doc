import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`@extend 사용이 필요한 상황`,description:`SCSS @extend를 사용해야 하는 구체적인 상황들을 상세히 알아봅니다. 의미적 상속 관계, CSS 파일 크기 최적화, 성능 최적화, 그리고 실제 프로젝트에서 @extend를 사용하는 예시를 제공합니다.`,keyword:`scss extend 언제 사용, scss extend 사용 상황, scss extend 적합한 경우, scss extend 활용`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`는`,` `,(0,o.jsx)(`b`,{children:`특정 상황에서 매우 유용`}),`합니다.`,(0,o.jsx)(`br`,{}),`의미적 상속 관계를 표현하거나, CSS 파일 크기를 최적화하거나, 성능을 향상시킬 때 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`를 사용하는 것이 적합합니다.`]}),(0,o.jsxs)(`p`,{className:`mt_s`,children:[`이 페이지에서는 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`를 사용해야 하는 구체적인 상황들을 상세히 알아보고, 각 상황에서의 실제 사용 예시를 제공합니다.`]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`의미적 상속 관계 표현`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`b`,{children:`"A는 B의 한 종류"`}),` 같은 의미적 상속 관계를 표현할 때`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`가 적합합니다.`,(0,o.jsx)(`br`,{}),`에러 메시지, 버튼 시스템처럼 여러 변형이 있지만`,` `,(0,o.jsx)(`b`,{children:`공통 기반을 명확히 공유하는 컴포넌트`}),`에서`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`를 사용하면 코드의 의미가 더 명확해지고 CSS도 최적화됩니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`에러 메시지 시스템`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 종류의 에러 메시지가 `,(0,o.jsx)(`b`,{children:`기본 메시지의 한 종류`}),`인 경우입니다.`]}),(0,o.jsx)(i,{title:`에러 메시지 시스템 예시`,language:`css`,className:`mt_m`,children:`// 기본 메시지 스타일
.message {
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 500;
  margin-bottom: 16px;
}

// 에러 메시지 (메시지의 한 종류)
.error {
  @extend .message;
  color: #dc3545;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
}

// 경고 메시지 (메시지의 한 종류)
.warning {
  @extend .message;
  color: #856404;
  background: #fff3cd;
  border: 1px solid #ffeaa7;
}

// 성공 메시지 (메시지의 한 종류)
.success {
  @extend .message;
  color: #155724;
  background: #d4edda;
  border: 1px solid #c3e6cb;
}

// 정보 메시지 (메시지의 한 종류)
.info {
  @extend .message;
  color: #0c5460;
  background: #d1ecf1;
  border: 1px solid #bee5eb;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 작성하면`,` `,(0,o.jsx)(`b`,{children:`"에러는 메시지의 한 종류", "경고는 메시지의 한 종류"`}),`라는 의미적 관계를 코드로 명확하게 표현할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`버튼 시스템`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 종류의 버튼이 `,(0,o.jsx)(`b`,{children:`기본 버튼의 한 종류`}),`인 경우입니다.`]}),(0,o.jsx)(i,{title:`버튼 시스템 예시`,language:`css`,className:`mt_m`,children:`// 기본 버튼 스타일
.button {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: background 0.3s;
}

// Primary 버튼 (버튼의 한 종류)
.button-primary {
  @extend .button;
  background: #0a58ca;
  color: #ffffff;
}

// Secondary 버튼 (버튼의 한 종류)
.button-secondary {
  @extend .button;
  background: #6c757d;
  color: #ffffff;
}

// Success 버튼 (버튼의 한 종류)
.button-success {
  @extend .button;
  background: #28a745;
  color: #ffffff;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 작성하면 `,(0,o.jsx)(`b`,{children:`모든 버튼이 공통 스타일을 공유`}),`하면서도, 각각의 고유한 색상을 가질 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`CSS 파일 크기 최적화`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`b`,{children:`CSS 파일 크기를 줄이고 싶을 때`}),` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`가 유용합니다.`,(0,o.jsx)(`br`,{}),`여러 선택자에서 같은 스타일을 사용할 때`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`는 선택자를 그룹화해 중복을 제거하므로, `,(0,o.jsx)(`b`,{children:`믹스인 대비 파일 크기를 크게 줄일 수 있어`}),` 대규모 프로젝트나 성능이 중요한 경우에 특히 도움이 됩니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`파일 크기 비교`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`같은 스타일을 여러 선택자에서 사용할 때 `,(0,o.jsx)(`b`,{children:`파일 크기 차이`}),`를 비교해봅니다.`]}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`방식`}),(0,o.jsx)(`li`,{className:`cell content`,children:`CSS 크기 (10개 선택자 예시)`}),(0,o.jsx)(`li`,{className:`cell content`,children:`설명`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`CSS 크기`,children:`약 200바이트`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`설명`,children:`선택자 그룹화로 중복 제거`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`믹스인`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`CSS 크기`,children:`약 800바이트`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`설명`,children:`각 선택자마다 스타일 반복`})]})]})]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`선택자가 많을수록`,` `,(0,o.jsxs)(`b`,{children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`의 파일 크기 이점이 더 커집니다.`]})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`실제 최적화 예시`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 선택자에서 같은 스타일을 사용할 때`,` `,(0,o.jsxs)(`b`,{children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`로 최적화하는`]}),` `,`예시입니다.`]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`최적화 전 (믹스인 사용)`}),(0,o.jsx)(i,{title:`최적화 전`,language:`css`,className:`mt_ms`,children:`@mixin card-base {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card {
  @include card-base;
}

.product-card {
  @include card-base;
}

.article-card {
  @include card-base;
}
// 각 선택자마다 스타일 반복 (큰 파일 크기)
`})]}),(0,o.jsxs)(`div`,{className:`mt_l indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`최적화 후 (@extend 사용)`}),(0,o.jsx)(i,{title:`최적화 후`,language:`css`,className:`mt_ms`,children:`%card-base {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card {
  @extend %card-base;
}

.product-card {
  @extend %card-base;
}

.article-card {
  @extend %card-base;
}
// 선택자 그룹화로 중복 제거 (작은 파일 크기)
`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`를 사용하면`,` `,(0,o.jsx)(`b`,{children:`CSS 파일 크기가 크게 줄어듭니다`}),`.`]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`성능 최적화`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`b`,{children:`브라우저 렌더링 성능을 최적화`}),`하고 싶을 때`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`가 유용합니다.`,(0,o.jsx)(`br`,{}),`선택자 그룹화로 브라우저가 스타일을 매칭하는 속도가 향상될 수 있어,`,` `,(0,o.jsx)(`b`,{children:`복잡한 페이지나 동적 콘텐츠가 많은 사이트`}),`에서 렌더링 성능 개선에 기여할 수 있습니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`아래는 브라우저가 스타일을 매칭하는 방식의 차이입니다.`}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`방식`}),(0,o.jsx)(`li`,{className:`cell content`,children:`매칭 방식`}),(0,o.jsx)(`li`,{className:`cell content`,children:`성능`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`매칭 방식`,children:`선택자 그룹으로 한 번에 매칭`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`성능`,children:`약간 더 빠름`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`믹스인`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`매칭 방식`,children:`각 선택자마다 개별 매칭`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`성능`,children:`정상`})]})]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`는 `,(0,o.jsx)(`b`,{children:`선택자를 그룹화`}),`하여 브라우저가 스타일을 매칭하는 속도가 약간 더 빠를 수 있습니다.`]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정적 스타일 재사용`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`b`,{children:`파라미터가 필요 없는 정적인 스타일`}),`을 여러 곳에서 재사용할 때`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`가 적합합니다.`,(0,o.jsx)(`br`,{}),`clearfix, 기본 레이아웃 패턴처럼 값이 고정되어 있고 여러 컴포넌트에서 동일하게 사용되는 스타일은,`,` `,(0,o.jsxs)(`b`,{children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`로 그룹화하면 파일 크기와 성능 모두에서 이점`]}),`을 얻을 수 있습니다.`]}),(0,o.jsx)(i,{title:`정적 스타일 예시`,language:`css`,className:`mt_m`,children:`// 정적인 기본 스타일 (파라미터 불필요)
%clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

.container {
  @extend %clearfix;
}

.section {
  @extend %clearfix;
}

.article {
  @extend %clearfix;
}`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`이런 경우에는`,` `,(0,o.jsxs)(`b`,{children:[`파라미터가 필요 없으므로 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`가 적합합니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실무 활용 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`실무에서`,` `,(0,o.jsxs)(`b`,{children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`를 활용하는`]}),` `,`구체적인 예시를 살펴봅니다.`,(0,o.jsx)(`br`,{}),`알림 시스템, 폼 요소 시스템처럼 실제 프로젝트에서 자주 등장하는 패턴을 기준으로,`,` `,(0,o.jsxs)(`b`,{children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`가 어떻게 코드 구조를 단순화하고 최적화하는지`]}),` `,`확인할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`알림 시스템`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 종류의 알림이 `,(0,o.jsx)(`b`,{children:`기본 알림의 한 종류`}),`인 경우입니다.`]}),(0,o.jsx)(i,{title:`알림 시스템 예시`,language:`css`,className:`mt_m`,children:`// 기본 알림 스타일
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  animation: slideIn 0.3s ease;
}

// 성공 알림 (알림의 한 종류)
.notification-success {
  @extend .notification;
  background: #d4edda;
  color: #155724;
  border-left: 4px solid #28a745;
}

// 에러 알림 (알림의 한 종류)
.notification-error {
  @extend .notification;
  background: #f8d7da;
  color: #721c24;
  border-left: 4px solid #dc3545;
}

// 경고 알림 (알림의 한 종류)
.notification-warning {
  @extend .notification;
  background: #fff3cd;
  color: #856404;
  border-left: 4px solid #ffc107;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`폼 요소 시스템`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 종류의 폼 요소가 `,(0,o.jsx)(`b`,{children:`기본 폼 요소의 한 종류`}),`인 경우입니다.`]}),(0,o.jsx)(i,{title:`폼 요소 시스템 예시`,language:`css`,className:`mt_m`,children:`// 기본 폼 요소 스타일
.form-control {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
}

// 입력 필드 (폼 요소의 한 종류)
.input {
  @extend .form-control;
}

// 텍스트 영역 (폼 요소의 한 종류)
.textarea {
  @extend .form-control;
  min-height: 100px;
  resize: vertical;
}

// 셀렉트 박스 (폼 요소의 한 종류)
.select {
  @extend .form-control;
  background-image: url("data:image/svg+xml...");
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`@extend 사용 체크리스트`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`를 사용하기 전에`,` `,(0,o.jsx)(`b`,{children:`확인해야 할 사항`}),`들을 정리합니다.`,(0,o.jsx)(`br`,{}),`의미적 상속 관계, 정적 스타일, 여러 선택자 사용 등`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`가 적합한 조건과, 파라미터 필요, 미디어 쿼리 사용 등 `,(0,o.jsx)(`b`,{children:`믹스인이 더 나은 경우를 명확히 구분`}),`할 수 있는 체크리스트를 제공합니다.`]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`@extend 사용이 적합한 경우`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`의미적 상속 관계`}),`: `,`"A는 B의 한 종류"`,` 같은 관계가 명확함`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`정적 스타일`}),`: 파라미터가 필요 없는 고정된 스타일`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`여러 선택자에서 사용`}),`: 3개 이상의 선택자에서 같은 스타일 사용`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`파일 크기 최적화 필요`}),`: CSS 파일 크기를 줄이고 싶음`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`미디어 쿼리 외부`}),`: 미디어 쿼리 안에서 사용하지 않음`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`믹스인 사용이 적합한 경우`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`파라미터 필요`}),`: 동적으로 값을 변경해야 함`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`미디어 쿼리 내부`}),`: 미디어 쿼리 안에서 사용해야 함`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`복잡한 로직`}),`: 조건문이나 반복문이 필요함`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`@content 필요`}),`: 동적 콘텐츠 삽입이 필요함`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`유틸리티 함수`}),`: 여러 곳에서 다양한 값으로 사용됨`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),` 사용이 필요한 상황에 대해 알아본 내용을 정리합니다.`,(0,o.jsx)(`br`,{}),`의미적 상속 관계, CSS 파일 크기 최적화, 성능 최적화 등`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`가 빛을 발하는 상황을 정리해 두면,`,` `,(0,o.jsxs)(`b`,{children:[`실무에서 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`와 믹스인 중 어떤 것을 선택할지`]}),` `,`더 확신을 가지고 결정할 수 있습니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`의미적 상속 관계`}),`: `,`"A는 B의 한 종류"`,` 같은 관계를 표현할 때`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`CSS 파일 크기 최적화`}),`: 파일 크기를 줄이고 싶을 때`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`성능 최적화`}),`: 브라우저 렌더링 성능을 최적화하고 싶을 때`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`정적 스타일 재사용`}),`: 파라미터가 필요 없는 고정된 스타일을 재사용할 때`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`실무 활용`}),`: 알림 시스템, 폼 요소 시스템 등에서 활용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`체크리스트`}),`: 의미적 상속, 정적 스타일, 여러 선택자 사용 등의 조건 확인`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 섹션에서는 `,(0,o.jsx)(`b`,{children:`조건문과 반복문`}),`에 대해 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/07_scss_04.png`,alt:`@extend 사용이 필요한 상황`}),(0,o.jsx)(`figcaption`,{children:`@extend 사용이 필요한 상황`})]})]})}export{l as default,a as t};