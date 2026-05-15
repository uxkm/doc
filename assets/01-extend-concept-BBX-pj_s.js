import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`@extend의 개념`,description:`SCSS @extend의 기본 개념을 상세히 알아봅니다. @extend가 무엇인지, 어떻게 동작하는지, 선택자 그룹화의 원리, 컴파일 과정, 그리고 실제 사용 예시를 단계별로 설명합니다.`,keyword:`scss @extend, scss extend, scss 상속, scss 확장, scss extend 개념, scss 선택자 그룹화`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(`b`,{children:`@extend`}),`는 SCSS에서`,` `,(0,o.jsx)(`b`,{children:`한 선택자의 스타일을 다른 선택자에 상속`}),`시킬 수 있는 기능입니다.`,(0,o.jsx)(`br`,{}),`믹스인이 스타일을 복사하는 것과 달리, @extend는`,` `,(0,o.jsx)(`b`,{children:`선택자를 그룹화하여 공통 스타일을 공유`}),`합니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 @extend의 기본 개념, 동작 원리, 선택자 그룹화 메커니즘, 컴파일 과정, 그리고 실제 사용 예시를 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`@extend란?`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`는 SCSS에서`,` `,(0,o.jsx)(`b`,{children:`한 선택자의 스타일을 다른 선택자에 상속`}),`시킬 수 있는 기능입니다.`,(0,o.jsx)(`br`,{}),`상속받은 선택자는 원본 선택자와 `,(0,o.jsx)(`b`,{children:`같은 그룹으로 묶여서`}),` CSS에 출력되며, 이렇게 하면 CSS 파일 크기를 줄이고`,` `,(0,o.jsx)(`b`,{children:`의미적 상속 관계를 코드로 명확하게 표현`}),`할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 개념`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`는`,` `,(0,o.jsx)(`b`,{children:`"A는 B의 한 종류"`}),` 같은 상속 관계를 표현할 때 사용합니다.`,(0,o.jsx)(`br`,{}),`예를 들어, "에러 메시지는 메시지의 한 종류"라는 관계를 @extend로 표현할 수 있습니다.`]}),(0,o.jsx)(i,{title:`@extend 기본 개념 예시`,language:`css`,className:`mt_m`,children:`// 기본 메시지 스타일
.message {
  padding: 12px;
  border-radius: 4px;
  font-weight: 500;
}

// 에러 메시지는 메시지의 한 종류
.error {
  @extend .message;
  color: #dc3545;
  background: #f8d7da;
}

// 성공 메시지도 메시지의 한 종류
.success {
  @extend .message;
  color: #28a745;
  background: #d4edda;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 작성하면 `,(0,o.jsx)(`b`,{children:`의미적 상속 관계`}),`를 코드로 명확하게 표현할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 문법`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),` 뒤에 상속받을 선택자 이름을 씁니다.`]}),(0,o.jsx)(i,{title:`@extend 기본 문법`,language:`css`,className:`mt_m`,children:`// 기본 스타일 정의
.button-base {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
}

// @extend로 상속
.button-primary {
  @extend .button-base;
  background: #0a58ca;
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.button-base, .button-primary {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
}

.button-primary {
  background: #0a58ca;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`@extend를 사용하면 `,(0,o.jsx)(`b`,{children:`선택자가 그룹화되어 공통 스타일을 공유`}),`합니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`@extend의 동작 원리`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`가 `,(0,o.jsx)(`b`,{children:`어떻게 동작하는지`}),` `,`내부 메커니즘을 상세히 알아봅니다.`,(0,o.jsx)(`br`,{}),`선택자 그룹화 과정과 컴파일 결과를 이해하면,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`를 사용할 때`,` `,(0,o.jsx)(`b`,{children:`최종 CSS가 어떻게 생성되는지 예측`}),`할 수 있어 디버깅과 최적화에 도움이 됩니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`선택자 그룹화 메커니즘`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`는 `,(0,o.jsx)(`b`,{children:`선택자를 그룹화`}),`하여 CSS를 최적화합니다.`,(0,o.jsx)(`br`,{}),`여러 선택자가 같은 스타일을 공유할 때, 하나의 선택자 그룹으로 묶어서 출력합니다.`]}),(0,o.jsx)(i,{title:`선택자 그룹화 예시`,language:`css`,className:`mt_m`,children:`// 기본 에러 스타일
.error {
  color: #dc3545;
  font-weight: 700;
  padding: 8px;
}

// 심각한 에러
.serious-error {
  @extend .error;
  border: 2px solid #dc3545;
}

// 위험한 에러
.critical-error {
  @extend .error;
  font-size: 18px;
}

// 치명적인 에러
.fatal-error {
  @extend .serious-error;
  background: #dc3545;
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.error, .serious-error, .critical-error, .fatal-error {
  color: #dc3545;
  font-weight: 700;
  padding: 8px;
}

.serious-error, .fatal-error {
  border: 2px solid #dc3545;
}

.critical-error {
  font-size: 18px;
}

.fatal-error {
  background: #dc3545;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`CSS 파일 크기가 줄어들고`}),`, 브라우저가 스타일을 더 효율적으로 처리할 수 있습니다.`,(0,o.jsx)(`br`,{}),`같은 스타일을 여러 선택자에 반복해서 쓰는 대신,`,` `,(0,o.jsx)(`b`,{children:`하나의 선택자 그룹으로 묶어서`}),` 출력하기 때문입니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`컴파일 과정 이해`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`가`,` `,(0,o.jsx)(`b`,{children:`컴파일 과정에서 어떻게 처리`}),`되는지 단계별로 알아봅니다.`]}),(0,o.jsxs)(`div`,{className:`mt_ml indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`1단계: 상속 관계 파악`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`SCSS 컴파일러는 먼저 `,(0,o.jsx)(`b`,{children:`어떤 선택자가 어떤 선택자를 상속`}),`하는지 파악합니다.`]}),(0,o.jsx)(i,{title:`상속 관계 예시`,language:`css`,className:`mt_ms`,children:`.error {
  color: #dc3545;
}

.serious-error {
  @extend .error;  // .serious-error는 .error를 상속
}`})]}),(0,o.jsxs)(`div`,{className:`mt_ml indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`2단계: 선택자 그룹 생성`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`컴파일러는 `,(0,o.jsx)(`b`,{children:`상속 관계를 기반으로 선택자 그룹을 생성`}),`합니다.`]}),(0,o.jsx)(i,{title:`선택자 그룹 생성`,language:`css`,className:`mt_ms`,children:`// .error와 .serious-error를 하나의 그룹으로 묶음
.error, .serious-error {
  color: #dc3545;
}`})]}),(0,o.jsxs)(`div`,{className:`mt_ml indent`,children:[(0,o.jsx)(`h4`,{className:`ml_mn`,children:`3단계: 개별 스타일 추가`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`각 선택자의 `,(0,o.jsx)(`b`,{children:`개별 스타일을 추가`}),`합니다.`]}),(0,o.jsx)(i,{title:`개별 스타일 추가`,language:`css`,className:`mt_ms`,children:`.serious-error {
  border: 2px solid #dc3545;  // 개별 스타일
}`})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`@extend의 특징`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`의 `,(0,o.jsx)(`b`,{children:`주요 특징`}),`들을 정리합니다.`,(0,o.jsx)(`br`,{}),`선택자 그룹화, 의미적 상속 관계 표현, CSS 최적화 등`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`만의 고유한 특성을 이해하면,`,` `,(0,o.jsx)(`b`,{children:`믹스인과의 차이를 명확히 구분`}),`하고 상황에 맞는 선택을 할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`선택자 그룹화`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`의 가장 큰 특징은`,` `,(0,o.jsx)(`b`,{children:`선택자를 그룹화`}),`한다는 것입니다.`]}),(0,o.jsx)(i,{title:`선택자 그룹화 예시`,language:`css`,className:`mt_m`,children:`.button {
  padding: 8px 16px;
}

.button-primary {
  @extend .button;
}

.button-secondary {
  @extend .button;
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.button, .button-primary, .button-secondary {
  padding: 8px 16px;
}
// 세 선택자가 하나의 그룹으로 묶임`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`CSS 파일 크기가 줄어들고`}),`, 브라우저가 스타일을 더 효율적으로 처리할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`의미적 상속 관계 표현`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`는`,` `,(0,o.jsx)(`b`,{children:`의미적 상속 관계를 코드로 표현`}),`할 수 있습니다.`]}),(0,o.jsx)(i,{title:`의미적 상속 관계 예시`,language:`css`,className:`mt_m`,children:`// 동물의 기본 특성
.animal {
  breathing: true;
  moving: true;
}

// 개는 동물의 한 종류
.dog {
  @extend .animal;
  barking: true;
}

// 고양이도 동물의 한 종류
.cat {
  @extend .animal;
  meowing: true;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 작성하면 `,(0,o.jsx)(`b`,{children:`"개는 동물이다", "고양이는 동물이다"`}),`라는 의미적 관계를 코드로 명확하게 표현할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`CSS 최적화`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`는`,` `,(0,o.jsx)(`b`,{children:`CSS 파일 크기를 줄이고 성능을 향상`}),`시킵니다.`]}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`방식`}),(0,o.jsx)(`li`,{className:`cell content`,children:`CSS 크기`}),(0,o.jsx)(`li`,{className:`cell content`,children:`설명`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsxs)(`p`,{className:`cell value t_darkgreen`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),` 사용`]}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`CSS 크기`,children:`작음`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`설명`,children:`선택자를 그룹화하여 중복 제거`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`믹스인 사용`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`CSS 크기`,children:`큼`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`설명`,children:`각 선택자마다 스타일 반복`})]})]})]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`를 사용하면`,` `,(0,o.jsx)(`b`,{children:`같은 스타일을 여러 선택자에 반복하지 않고`}),`, 하나의 선택자 그룹으로 묶어서 출력하므로 CSS 파일이 더 작아집니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실제 사용 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`를`,` `,(0,o.jsx)(`b`,{children:`실제 프로젝트에서 활용`}),`하는 예시를 살펴봅니다.`,(0,o.jsx)(`br`,{}),`에러 메시지 시스템, 버튼 시스템처럼 여러 변형이 있지만`,` `,(0,o.jsx)(`b`,{children:`공통 기반을 공유하는 컴포넌트`}),`에서`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`가 어떻게 코드 구조를 단순화하는지 확인할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`에러 메시지 시스템`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 종류의 에러 메시지를`,` `,(0,o.jsxs)(`b`,{children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`로 체계적으로 관리`]}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`에러 메시지 시스템 예시`,language:`css`,className:`mt_m`,children:`// 기본 메시지 스타일
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
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.message, .error, .warning, .success {
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 500;
  margin-bottom: 16px;
}

.error {
  color: #dc3545;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
}

.warning {
  color: #856404;
  background: #fff3cd;
  border: 1px solid #ffeaa7;
}

.success {
  color: #155724;
  background: #d4edda;
  border: 1px solid #c3e6cb;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 작성하면 `,(0,o.jsx)(`b`,{children:`모든 메시지가 공통 스타일을 공유`}),`하면서도, 각각의 고유한 스타일을 가질 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`버튼 시스템`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여러 종류의 버튼을`,` `,(0,o.jsxs)(`b`,{children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`로 체계적으로 관리`]}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`버튼 시스템 예시`,language:`css`,className:`mt_m`,children:`// 기본 버튼 스타일
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

  &:hover {
    background: #084298;
  }
}

// Secondary 버튼 (버튼의 한 종류)
.button-secondary {
  @extend .button;
  background: #6c757d;
  color: #ffffff;

  &:hover {
    background: #545b62;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 작성하면 `,(0,o.jsx)(`b`,{children:`모든 버튼이 공통 스타일을 공유`}),`하면서도, 각각의 고유한 색상과 호버 효과를 가질 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`@extend의 장단점`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`를 사용할 때의`,` `,(0,o.jsx)(`b`,{children:`장점과 단점`}),`을 정리합니다.`,(0,o.jsx)(`br`,{}),`CSS 파일 크기 감소와 성능 향상 같은 장점과 파라미터 사용 불가, 미디어 쿼리 제한 같은 단점을 비교해 보면,`,` `,(0,o.jsxs)(`b`,{children:[`프로젝트에서 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`를 언제 도입할지 판단`]}),`하는 기준이 됩니다.`]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`장점`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`CSS 파일 크기 감소`}),`: 선택자를 그룹화하여 중복을 줄임`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`성능 향상`}),`: 브라우저가 스타일을 더 효율적으로 처리`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`의미적 관계 표현`}),`: 상속 관계를 코드로 명확하게 표현`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`유지보수성 향상`}),`: 공통 스타일을 한 곳에서 관리`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`단점`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`파라미터 사용 불가`}),`: 동적으로 값을 변경할 수 없음`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`복잡한 선택자 생성`}),`: 여러 번 extend하면 복잡한 선택자 그룹이 생성될 수 있음`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`의도하지 않은 상속`}),`: 원하지 않는 선택자까지 그룹화될 수 있음`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`미디어 쿼리 제한`}),`: 미디어 쿼리 안에서 extend 사용 시 제한이 있음`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`의 개념에 대해 알아본 내용을 정리합니다.`,(0,o.jsx)(`br`,{}),`선택자 그룹화를 통한 CSS 최적화와 의미적 상속 관계 표현이라는`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@extend`}),`의 핵심 가치를 다시 한 번 정리해 두면, `,(0,o.jsx)(`b`,{children:`다음 단계인 믹스인과의 비교`}),`를 더 명확하게 이해할 수 있습니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsxs)(`b`,{children:[(0,o.jsx)(`code`,{className:`t_blue t_600`,children:`@extend`}),`의 개념`]}),`: 한 선택자의 스타일을 다른 선택자에 상속시키는 기능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`동작 원리`}),`: 선택자를 그룹화하여 공통 스타일을 공유`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`주요 특징`}),`: 선택자 그룹화, 의미적 상속 관계 표현, CSS 최적화`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`활용 예시`}),`: 에러 메시지 시스템, 버튼 시스템 등에서 활용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`장단점`}),`: CSS 파일 크기 감소, 성능 향상 등의 장점과 파라미터 사용 불가 등의 단점`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`믹스인과의 차이점`}),`을 더 자세히 비교해봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/07_scss_01.png`,alt:`@extend의 개념`}),(0,o.jsx)(`figcaption`,{children:`@extend의 개념`})]})]})}export{l as default,a as t};