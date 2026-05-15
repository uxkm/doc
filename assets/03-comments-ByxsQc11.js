import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`주석 처리 방식 (//, /* */)`,description:`SCSS의 주석 처리 방식을 상세히 알아봅니다. 한 줄 주석(//)과 블록 주석(/* */)의 차이, 컴파일 시 처리 방식, 실제 사용 예시, 그리고 주석을 활용한 문서화 방법을 설명합니다.`,keyword:`scss 주석, scss comment, scss //, scss /* */, scss 문서화, scss 코멘트`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`SCSS는 `,(0,o.jsx)(`b`,{children:`두 가지 주석 방식을 지원`}),`합니다:`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`//`}),` (한 줄 주석)과`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`/* */`}),` (블록 주석).`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`code`,{className:`t_blue`,children:`//`}),` 주석은 컴파일 시 제거되지만,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`/* */`}),` 주석은 CSS 파일에 그대로 포함됩니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 두 주석 방식의 차이, 컴파일 시 처리 방식, 실제 사용 예시, 그리고 주석을 활용한 코드 문서화 방법을 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`SCSS 주석의 두 가지 방식`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`SCSS는 `,(0,o.jsx)(`b`,{children:`CSS와 달리 두 가지 주석 방식을 모두 지원`}),`합니다.`,(0,o.jsx)(`br`,{}),`각각의 특징과 사용 시기를 알아봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`한 줄 주석 (//)`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`//`}),`는 `,(0,o.jsx)(`b`,{children:`한 줄 주석`}),`으로, 해당 줄의 끝까지를 주석으로 처리합니다.`,(0,o.jsx)(`br`,{}),`이 주석은 `,(0,o.jsx)(`b`,{children:`컴파일 시 CSS 파일에 포함되지 않습니다`}),`.`]}),(0,o.jsx)(i,{title:`한 줄 주석 예시`,language:`css`,className:`mt_m`,children:`.button {
  padding: 8px 16px;
  // 배경색 설정
  background: #0a58ca;
  // 호버 시 색상 변경
  &:hover {
    background: #084298;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS (주석 제거됨)`,language:`css`,className:`mt_m`,children:`.button {
  padding: 8px 16px;
  background: #0a58ca;
}
.button:hover {
  background: #084298;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`//`}),` 주석은`,` `,(0,o.jsx)(`b`,{children:`개발 중에만 보이고 최종 CSS에는 포함되지 않으므로`}),`, 개발용 메모나 임시 설명에 적합합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`블록 주석 (/* */)`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`/* */`}),`는 `,(0,o.jsx)(`b`,{children:`블록 주석`}),`으로, 여러 줄에 걸쳐 주석을 작성할 수 있습니다.`,(0,o.jsx)(`br`,{}),`이 주석은 `,(0,o.jsx)(`b`,{children:`컴파일 시 CSS 파일에 그대로 포함`}),`됩니다.`]}),(0,o.jsx)(i,{title:`블록 주석 예시`,language:`css`,className:`mt_m`,children:`/* 버튼 컴포넌트 스타일
   기본 버튼 스타일과 변형을 정의합니다. */
.button {
  padding: 8px 16px;
  background: #0a58ca;
  /* 호버 상태 스타일 */
  &:hover {
    background: #084298;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS (주석 포함됨)`,language:`css`,className:`mt_m`,children:`/* 버튼 컴포넌트 스타일
   기본 버튼 스타일과 변형을 정의합니다. */
.button {
  padding: 8px 16px;
  background: #0a58ca;
  /* 호버 상태 스타일 */
}
.button:hover {
  background: #084298;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`/* */`}),` 주석은`,` `,(0,o.jsx)(`b`,{children:`최종 CSS에도 포함되므로`}),`, 사용자나 다른 개발자가 볼 수 있는 공개 문서에 적합합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`b`,{className:`t_blue`,children:`한 줄 주석`}),`과`,` `,(0,o.jsx)(`b`,{className:`t_blue`,children:`블록 주석`}),` 방식의 비교`]}),(0,o.jsx)(`p`,{className:`mt_m`,children:`두 주석 방식의 차이를 명확히 비교해봅니다.`}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`주석 방식`}),(0,o.jsx)(`li`,{className:`cell content`,children:`표기법`}),(0,o.jsx)(`li`,{className:`cell content`,children:`컴파일 시 처리`}),(0,o.jsx)(`li`,{className:`cell content`,children:`사용 시기`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`한 줄 주석`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`표기법`,children:(0,o.jsx)(`code`,{children:`// 주석 내용`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`컴파일 시 처리`,children:`CSS에 포함되지 않음 (제거됨)`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`사용 시기`,children:`개발용 메모, 임시 설명, 디버깅용 주석`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`블록 주석`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`표기법`,children:(0,o.jsx)(`code`,{children:`/* 주석 내용 */`})}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`컴파일 시 처리`,children:`CSS에 포함됨 (그대로 유지)`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`사용 시기`,children:`공개 문서, 라이선스 정보, 사용자 가이드`})]})]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`주석 사용 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`이제 실제 프로젝트에서 주석을 어떻게 활용하는지 `,(0,o.jsx)(`b`,{children:`다양한 예시`}),`를 살펴봅니다.`,(0,o.jsx)(`br`,{}),`주석은 단순히 코드를 설명하는 것을 넘어서,`,` `,(0,o.jsx)(`b`,{children:`프로젝트의 문서화와 협업 효율성`}),`을 높이는 중요한 도구입니다.`]}),(0,o.jsxs)(`p`,{className:`mt_s`,children:[`아래 예시들은 실제 개발 현장에서 자주 사용되는 주석 패턴들입니다.`,(0,o.jsx)(`br`,{}),`각 예시는 `,(0,o.jsx)(`b`,{children:`특정 상황에서 주석을 어떻게 작성하면 좋은지`}),`를 보여주며, 프로젝트의 규모와 팀의 협업 방식에 따라 적절히 선택하여 사용할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`컴포넌트 설명 주석`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`컴포넌트의 목적과 사용법을 설명하는 주석입니다.`}),(0,o.jsxs)(`iframe`,{className:`codepen mt_m`,height:400,style:{width:`100%`},scrolling:`no`,title:`3.3. 컴포넌트 설명 주석`,src:`https://codepen.io/uxkm/embed/KwzjdMZ?default-tab=css&theme-id=dark`,frameBorder:`no`,loading:`lazy`,allowTransparency:!0,children:[`See the Pen`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm/pen/KwzjdMZ`,children:`3.3. 컴포넌트 설명 주석`}),` `,`by UXKM (`,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm`,children:`@uxkm`}),`) on`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io`,children:`CodePen`}),`.`]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이런 주석은 `,(0,o.jsx)(`b`,{children:`프로젝트의 스타일 가이드나 문서`}),`로 활용할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`섹션 구분 주석`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`파일 내에서 섹션을 구분하는 주석입니다.`}),(0,o.jsx)(i,{title:`섹션 구분 주석`,language:`css`,className:`mt_m`,children:`// ============================================
// Variables
// ============================================
$primary-color: #0a58ca;
$font-size-base: 16px;

// ============================================
// Mixins
// ============================================
@mixin flex-center {
  // ...
}

// ============================================
// Components
// ============================================
.button {
  // ...
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`섹션 구분 주석을 사용하면`,` `,(0,o.jsx)(`b`,{children:`큰 파일에서도 원하는 부분을 빠르게 찾을 수 있습니다`}),`.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`인라인 설명 주석`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`인라인 설명 주석은 `,(0,o.jsx)(`b`,{children:`코드 옆에 간단한 설명을 추가`}),`하는 주석입니다.`,(0,o.jsx)(`br`,{}),`특정 속성이나 값의 의미를 바로 옆에 적어두면,`,` `,(0,o.jsx)(`b`,{children:`코드를 읽는 사람이 빠르게 이해`}),`할 수 있습니다.`]}),(0,o.jsxs)(`p`,{className:`mt_s`,children:[`이 방식은 `,(0,o.jsx)(`b`,{children:`왜 이 값을 사용했는지`}),`,`,` `,(0,o.jsx)(`b`,{children:`이 속성이 어떤 역할을 하는지`}),`를 간결하게 설명할 때 특히 유용합니다.`,(0,o.jsx)(`br`,{}),`단, 너무 많은 인라인 주석은 코드를 지저분하게 만들 수 있으므로,`,` `,(0,o.jsx)(`b`,{children:`정말 필요한 부분에만`}),` 사용하는 것이 좋습니다.`]}),(0,o.jsx)(i,{title:`인라인 설명 주석`,language:`css`,className:`mt_m`,children:`.card {
  padding: 16px;
  margin-bottom: 24px; // 카드 간 간격
  border-radius: 8px; // 둥근 모서리

  // 제목 스타일
  &__title {
    font-size: 18px;
    font-weight: 700; // 굵은 글씨
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`인라인 주석은 `,(0,o.jsx)(`b`,{children:`특정 속성의 목적이나 이유를 설명`}),`할 때 유용합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`TODO 및 FIXME 주석`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`나중에 수정하거나 개선할 부분을 표시하는 주석입니다.`}),(0,o.jsx)(i,{title:`TODO 주석 예시`,language:`css`,className:`mt_m`,children:`.button {
  padding: 8px 16px;
  // TODO: 다크 모드 색상 추가 필요
  background: #0a58ca;

  // FIXME: 모바일에서 터치 영역이 작음
  &:active {
    background: #084298;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`TODO나 FIXME 주석을 사용하면`,` `,(0,o.jsx)(`b`,{children:`나중에 개선할 부분을 쉽게 찾을 수 있습니다`}),`.`,(0,o.jsx)(`br`,{}),`많은 에디터는 이런 주석을 하이라이팅하거나 검색 기능으로 찾을 수 있게 해줍니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`라이선스 및 저작권 주석`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`파일 상단에 라이선스 정보를 표시하는 주석입니다.`}),(0,o.jsx)(i,{title:`라이선스 주석 예시`,language:`css`,className:`mt_m`,children:`/*!
 * 프로젝트명: My Project
 * 설명: 메인 스타일시트
 * 저작권: © 2024 Company Name
 * 라이선스: MIT License
 */

// 또는

/**
 * @fileoverview 메인 스타일시트
 * @author Your Name
 * @version 1.0.0
 */`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`라이선스 주석은 `,(0,o.jsx)(`b`,{children:`블록 주석(/* */)을 사용`}),`하여 최종 CSS에도 포함되도록 합니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`주석을 활용한 문서화`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`주석을 활용하여 `,(0,o.jsx)(`b`,{children:`코드를 문서화`}),`하는 방법을 알아봅니다.`,(0,o.jsx)(`br`,{}),`문서화된 코드는 시간이 지나도`,` `,(0,o.jsx)(`b`,{children:`어떤 의도로 작성되었는지 빠르게 파악`}),`할 수 있고, 새로운 팀원이 합류했을 때도 `,(0,o.jsx)(`b`,{children:`학습 비용을 크게 줄여줍니다`}),`.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`변수 문서화`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`변수의 용도와 사용 예시를 주석으로 설명합니다.`}),(0,o.jsx)(i,{title:`변수 문서화 예시`,language:`css`,className:`mt_m`,children:`// 메인 브랜드 색상
// 버튼, 링크 등 주요 인터랙션 요소에 사용
$primary-color: #0a58ca;

// 기본 폰트 크기
// body와 대부분의 텍스트 요소에 적용
$font-size-base: 16px;

// 카드 간 기본 간격
// margin-bottom 값으로 사용
$card-spacing: 24px;`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`믹스인 문서화`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`믹스인의 파라미터와 사용법을 주석으로 설명합니다.`}),(0,o.jsx)(i,{title:`믹스인 문서화 예시`,language:`css`,className:`mt_m`,children:`// Flexbox 중앙 정렬 믹스인
// @param $direction: flex-direction 값 (기본값: row)
// @example
//   .container {
//     @include flex-center;
//   }
@mixin flex-center($direction: row) {
  display: flex;
  flex-direction: $direction;
  align-items: center;
  justify-content: center;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`컴포넌트 문서화`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`컴포넌트의 구조와 사용법을 주석으로 설명합니다.`}),(0,o.jsxs)(`iframe`,{className:`codepen mt_m`,height:400,style:{width:`100%`},scrolling:`no`,title:`Untitled`,src:`https://codepen.io/uxkm/embed/dPMBYOy?default-tab=css&theme-id=dark`,frameBorder:`no`,loading:`lazy`,allowTransparency:!0,children:[`See the Pen`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm/pen/dPMBYOy`,children:`Untitled`}),` by UXKM (`,(0,o.jsx)(`a`,{href:`https://codepen.io/uxkm`,children:`@uxkm`}),`) on`,` `,(0,o.jsx)(`a`,{href:`https://codepen.io`,children:`CodePen`}),`.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`주석 사용 시 주의사항`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`주석을 효과적으로 사용하기 위한 `,(0,o.jsx)(`b`,{children:`주의사항`}),`을 정리합니다.`,(0,o.jsx)(`br`,{}),`주석은 많다고 해서 항상 좋은 것이 아니기 때문에,`,` `,(0,o.jsx)(`b`,{children:`언제, 어떤 내용을, 어느 정도 수준으로 남길지`}),`에 대한 기준을 세워두면 코드 품질과 협업 효율을 함께 높일 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`과도한 주석 피하기`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`주석은 유용하지만,`,` `,(0,o.jsx)(`b`,{children:`과도하게 사용하면 오히려 코드를 읽기 어렵게`}),` 만들 수 있습니다.`,(0,o.jsx)(`br`,{}),`코드 자체가 명확하다면 주석 없이도 이해할 수 있어야 합니다.`]}),(0,o.jsx)(i,{title:`과도한 주석 예시`,language:`css`,className:`mt_ms`,children:`// 버튼 스타일 시작
.button {
  // 패딩 설정
  padding: 8px 16px; // 상하 8px, 좌우 16px
  // 배경색 설정
  background: #0a58ca; // 파란색
}
// 버튼 스타일 끝`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`위 예시처럼`,` `,(0,o.jsx)(`b`,{children:`코드만 봐도 알 수 있는 내용을 주석으로 달 필요는 없습니다`}),`.`,(0,o.jsx)(`br`,{}),`주석은 "왜" 이렇게 작성했는지, "어떤 목적"인지를 설명할 때 사용하는 것이 좋습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`주석은 최신 상태로 유지`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`코드를 수정할 때는 `,(0,o.jsx)(`b`,{children:`관련된 주석도 함께 업데이트`}),`해야 합니다.`,(0,o.jsx)(`br`,{}),`오래된 주석은 오히려 혼란을 줄 수 있습니다.`]}),(0,o.jsx)(i,{title:`오래된 주석 예시`,language:`css`,className:`mt_ms`,children:`// 메인 색상 (빨간색)
$primary-color: #0a58ca; // 실제로는 파란색인데 주석은 빨간색이라고 함`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이런 불일치는 `,(0,o.jsx)(`b`,{children:`코드를 이해하는 데 방해`}),`가 되므로, 주석을 정기적으로 검토하고 업데이트해야 합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`일관된 주석 스타일 유지`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`프로젝트 전체에서 `,(0,o.jsx)(`b`,{children:`일관된 주석 스타일을 유지`}),`하면 가독성이 향상됩니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_s indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`주석 표기법 통일`}),`: 섹션 구분은`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`// ===`}),` 형태로 통일`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`주석 위치 통일`}),`: 컴포넌트 설명은 위에, 인라인 설명은 옆에 배치`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`주석 언어 통일`}),`: 팀에서 정한 언어(한국어/영어)로 통일`]})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`민감한 정보 주석 금지`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`/* */`}),` 주석은 CSS에 포함되므로,`,` `,(0,o.jsx)(`b`,{children:`민감한 정보는 주석에 포함하지 않아야`}),` 합니다.`]}),(0,o.jsx)(i,{title:`나쁜 예시`,language:`css`,className:`mt_ms`,children:`/* API 키: abc123xyz
   관리자 비밀번호: secret123 */
.button {
  // ...
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이런 정보는 `,(0,o.jsx)(`b`,{children:`CSS 파일을 다운로드한 누구나 볼 수 있으므로`}),` 절대 포함하지 않아야 합니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`SCSS 주석 처리 방식에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`한 줄 주석 (//)`}),`: 컴파일 시 제거됨, 개발용 메모에 적합`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`블록 주석 (/* */)`}),`: 컴파일 시 CSS에 포함됨, 공개 문서에 적합`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`사용 예시`}),`: 컴포넌트 설명, 섹션 구분, 인라인 설명, TODO/FIXME, 라이선스 정보`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`문서화 활용`}),`: 변수, 믹스인, 컴포넌트의 용도와 사용법을 주석으로 설명`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`주의사항`}),`: 과도한 주석 피하기, 주석 최신 상태 유지, 일관된 스타일, 민감한 정보 금지`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`SCSS 문법을 사용할 때 주의해야 할 점`}),`들을 종합적으로 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/03_scss_03.png`,alt:`SCSS 주석`}),(0,o.jsx)(`figcaption`,{children:`SCSS 주석`})]})]})}export{l as default,a as t};