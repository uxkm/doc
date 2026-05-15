import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`SCSS 문법을 사용할 때 주의할 점`,description:`SCSS 문법을 사용할 때 주의해야 할 사항들을 종합적으로 정리합니다. 중첩 깊이, 선택자 복잡도, 성능 고려사항, 유지보수성, 일반적인 실수와 해결 방법을 상세히 설명합니다.`,keyword:`scss 주의사항, scss 모범 사례, scss best practices, scss 실수, scss 성능, scss 유지보수`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[`SCSS는 강력한 기능을 제공하지만, `,(0,o.jsx)(`b`,{children:`잘못 사용하면 오히려 문제`}),`가 될 수 있습니다.`,(0,o.jsx)(`br`,{}),`과도한 중첩, 복잡한 선택자, 성능 저하, 유지보수 어려움 등은 주의해야 할 주요 사항입니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 SCSS 문법을 사용할 때 주의해야 할 사항들을 종합적으로 정리하고, 각 문제에 대한 해결 방법과 모범 사례를 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`중첩 깊이 제한`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`중첩은 유용하지만, `,(0,o.jsx)(`b`,{children:`너무 깊게 중첩하면 문제`}),`가 발생할 수 있습니다.`,(0,o.jsx)(`br`,{}),`선택자가 길어질수록 코드가 복잡해지고, 나중에 수정하거나 디버깅할 때`,` `,(0,o.jsx)(`b`,{children:`어디에서 스타일이 적용됐는지 찾기 어려워질 수 있습니다`}),`.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`깊은 중첩의 문제점`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`너무 깊은 중첩은 다음과 같은 문제를 일으킬 수 있습니다:`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`가독성 저하`}),`: 코드가 복잡해져 이해하기 어려워짐`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`긴 선택자 생성`}),`: 컴파일된 CSS 선택자가 불필요하게 길어짐`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`성능 저하`}),`: 브라우저가 긴 선택자를 해석하는 데 시간이 걸림`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`유지보수 어려움`}),`: 수정 시 영향 범위를 파악하기 어려움`]})]}),(0,o.jsx)(i,{title:`나쁜 예시 (너무 깊은 중첩)`,language:`css`,className:`mt_m`,children:`.page {
  .section {
    .article {
      .card {
        .card__header {
          .card__title {
            font-size: 18px;
          }
        }
      }
    }
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`위 코드는 컴파일되면`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`.page .section .article .card .card__header .card__title`}),`처럼 `,(0,o.jsx)(`b`,{children:`매우 긴 선택자`}),`가 됩니다.`]}),(0,o.jsx)(i,{title:`나쁜 예시 (컴파일 후)`,language:`css`,className:`mt_m`,children:`.page .section .article .card .card__header .card__title {
  font-size: 18px;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`권장 중첩 깊이`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`일반적으로 `,(0,o.jsx)(`b`,{children:`중첩은 3단계를 넘지 않는 것`}),`을 권장합니다.`,(0,o.jsx)(`br`,{}),`컴포넌트 단위로 중첩을 제한하면 코드가 더 명확해집니다.`]}),(0,o.jsx)(i,{title:`좋은 예시 (적절한 중첩)`,language:`css`,className:`mt_m`,children:`.card {
  padding: 16px;

  .card__header {
    margin-bottom: 8px;

    .card__title {
      font-size: 18px;
    }
  }

  .card__body {
    margin-top: 8px;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 작성하면 `,(0,o.jsx)(`b`,{children:`컴포넌트 구조가 명확`}),`하고, 선택자도 적절한 길이를 유지합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`중첩 대신 BEM 사용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`깊은 중첩 대신 `,(0,o.jsx)(`b`,{children:`BEM 방법론을 사용`}),`하면 클래스명 자체가 의미를 담고 있어 중첩 없이도 명확하게 스타일을 구분할 수 있습니다.`]}),(0,o.jsx)(i,{title:`BEM 사용 예시`,language:`css`,className:`mt_m`,children:`// 중첩 없이도 명확함
.card__title {
  font-size: 18px;
}

.card__header {
  margin-bottom: 8px;
}

.card__body {
  margin-top: 8px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`BEM을 사용하면 `,(0,o.jsx)(`b`,{children:`중첩 없이도 컴포넌트 구조를 명확하게 표현`}),`할 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`선택자 복잡도 관리`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`선택자가 너무 복잡하면 `,(0,o.jsx)(`b`,{children:`성능과 유지보수에 문제`}),`가 될 수 있습니다.`,(0,o.jsx)(`br`,{}),`한 번 만들어 놓은 선택자는 프로젝트 전반에 영향을 주기 때문에, 처음부터 `,(0,o.jsx)(`b`,{children:`간단하고 명확한 형태`}),`로 설계하는 것이 중요합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`복잡한 선택자의 문제`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`복잡한 선택자는 다음과 같은 문제를 일으킬 수 있습니다:`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`성능 저하`}),`: 브라우저가 복잡한 선택자를 해석하는 데 시간이 걸림`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`특이성(Specificity) 증가`}),`: 나중에 스타일을 덮어쓰기 어려워짐`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`재사용 어려움`}),`: 특정 컨텍스트에 종속되어 다른 곳에서 사용하기 어려움`]})]}),(0,o.jsx)(i,{title:`복잡한 선택자 예시`,language:`css`,className:`mt_m`,children:`/* 너무 복잡한 선택자 */
.page .section .article .card .card__header .card__title .card__title-text {
  font-size: 18px;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`간단한 선택자 사용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`가능하면 `,(0,o.jsx)(`b`,{children:`간단하고 명확한 선택자`}),`를 사용하는 것이 좋습니다.`]}),(0,o.jsx)(i,{title:`간단한 선택자 예시`,language:`css`,className:`mt_m`,children:`/* 간단하고 명확한 선택자 */
.card__title-text {
  font-size: 18px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`BEM 방법론을 사용하면 `,(0,o.jsx)(`b`,{children:`클래스명 자체가 충분히 구체적`}),`이어서 긴 선택자 체인이 필요 없습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`성능 고려사항`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`SCSS 코드가 `,(0,o.jsx)(`b`,{children:`최종 CSS 성능에 미치는 영향`}),`을 고려해야 합니다.`,(0,o.jsx)(`br`,{}),`작성하는 순간에는 티 나지 않더라도, 누적된 스타일과 선택자는`,` `,(0,o.jsx)(`b`,{children:`파일 크기와 렌더링 속도`}),`에 직접적인 영향을 줍니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`불필요한 중첩 피하기`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`모든 것을 중첩할 필요는 없습니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`b`,{children:`독립적인 스타일은 중첩 없이`}),` 작성하는 것이 더 효율적일 수 있습니다.`]}),(0,o.jsx)(i,{title:`불필요한 중첩 예시`,language:`css`,className:`mt_m`,children:`// 불필요한 중첩
.button {
  .button--primary {
    background: #0a58ca;
  }
}`}),(0,o.jsx)(i,{title:`더 나은 방법`,language:`css`,className:`mt_m`,children:`// 중첩 없이 작성
.button--primary {
  background: #0a58ca;
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`파일 크기 최적화`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`불필요하게 긴 선택자나 중복 코드는 `,(0,o.jsx)(`b`,{children:`최종 CSS 파일 크기를 증가`}),`시킵니다. 파일 크기가 커지면 로딩 시간이 길어질 수 있습니다.`,(0,o.jsx)(`br`,{}),`프로덕션 환경에서는 `,(0,o.jsx)(`b`,{children:`압축(compressed) 형식`}),`으로 컴파일하여 파일 크기를 최소화하는 것이 좋습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`유지보수성 고려사항`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`코드는 `,(0,o.jsx)(`b`,{children:`나중에 수정하기 쉬워야`}),` 합니다.`,(0,o.jsx)(`br`,{}),`작성한 사람이 아니더라도 구조를 빠르게 이해하고,`,` `,(0,o.jsx)(`b`,{children:`안전하게 수정·추가할 수 있는 상태`}),`를 유지하는 것이 중요합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`일관된 네이밍 규칙`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`프로젝트 전체에서 `,(0,o.jsx)(`b`,{children:`일관된 네이밍 규칙을 사용`}),`하면 코드를 이해하고 수정하기 쉬워집니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`BEM 방법론`}),`: Block__Element--Modifier 형태로 통일`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`변수명`}),`: 소문자와 하이픈 사용 (`,(0,o.jsx)(`code`,{className:`t_blue`,children:`$primary-color`}),`)`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`믹스인명`}),`: 동사 형태로 명명 (`,(0,o.jsx)(`code`,{className:`t_blue`,children:`@mixin flex-center`}),`)`]})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`모듈화 및 파일 분리`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`큰 파일보다는 `,(0,o.jsx)(`b`,{children:`기능별로 파일을 나누어`}),` 관리하는 것이 좋습니다.`]}),(0,o.jsx)(i,{title:`파일 분리 예시`,language:`css`,className:`mt_m`,children:`// _variables.scss
$primary-color: #0a58ca;

// _buttons.scss
.button {
  // ...
}

// _cards.scss
.card {
  // ...
}

// main.scss
@use "variables";
@use "buttons";
@use "cards";`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 파일을 분리하면 `,(0,o.jsx)(`b`,{children:`원하는 부분만 빠르게 찾아 수정`}),`할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`의미 있는 주석 작성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`복잡한 로직이나 특별한 이유가 있는 코드에는`,` `,(0,o.jsx)(`b`,{children:`의미 있는 주석을 작성`}),`하면 나중에 이해하기 쉬워집니다.`]}),(0,o.jsx)(i,{title:`의미 있는 주석 예시`,language:`css`,className:`mt_m`,children:`.card {
  // 모바일에서 터치 영역을 충분히 확보하기 위해
  // 최소 높이를 44px로 설정
  min-height: 44px;

  // 다크 모드 지원을 위해 CSS 변수 사용
  background: var(--card-bg, #fff);
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`일반적인 실수와 해결 방법`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`SCSS를 사용할 때 자주 발생하는 `,(0,o.jsx)(`b`,{children:`실수와 그 해결 방법`}),`을 정리합니다.`,(0,o.jsx)(`br`,{}),`처음에는 사소해 보이지만, 프로젝트 규모가 커질수록 이런 실수들이`,` `,(0,o.jsx)(`b`,{children:`디버깅 시간을 크게 늘리는 원인`}),`이 되기 쉽습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`& 기호 앞뒤 공백 실수`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),` 기호 앞뒤의 공백에 따라 컴파일 결과가 달라집니다.`]}),(0,o.jsx)(i,{title:`잘못된 사용 예시`,language:`css`,className:`mt_m`,children:`.button {
  // & 앞에 공백: .button :hover (자식 선택자)
  :hover {
    background: #084298;
  }

  // & 뒤에 공백: .button --primary (잘못된 선택자)
  & --primary {
    background: #0a58ca;
  }
}`}),(0,o.jsx)(i,{title:`올바른 사용 예시`,language:`css`,className:`mt_m`,children:`.button {
  // & 앞뒤 공백 없음
  &:hover {
    background: #084298;
  }

  &--primary {
    background: #0a58ca;
  }
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`변수 스코프 오해`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`변수는 `,(0,o.jsx)(`b`,{children:`선언된 위치에 따라 사용 범위가 달라집니다`}),`.`]}),(0,o.jsx)(i,{title:`변수 스코프 예시`,language:`css`,className:`mt_m`,children:`// 전역 변수
$primary-color: #0a58ca;

.button {
  // 지역 변수 (이 블록 안에서만 사용 가능)
  $local-color: #084298;
  background: $local-color;
}

// $local-color는 여기서 사용 불가
.card {
  background: $primary-color; // 전역 변수는 사용 가능
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`중첩된 선택자에서 부모 참조 오류`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`&`}),`는 `,(0,o.jsx)(`b`,{children:`직접 부모만 참조`}),`합니다.`]}),(0,o.jsx)(i,{title:`잘못된 이해 예시`,language:`css`,className:`mt_m`,children:`.page {
  .section {
    .card {
      // &는 .card만 참조 (할아버지 .page는 참조 안 함)
      // &:hover → .card:hover 로 컴파일

      // .page .card가 되려면?
      // .page & { } 형태로 작성해야 함
    }
  }
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`파셜 파일 불러오기 실수`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`파셜 파일을 불러올 때 `,(0,o.jsx)(`b`,{children:`경로와 파일명을 정확히`}),` 지정해야 합니다.`]}),(0,o.jsx)(i,{title:`파셜 불러오기 예시`,language:`css`,className:`mt_m`,children:`// _variables.scss 파일을 불러올 때
@use "variables";      // ✅ _와 확장자 생략

// 잘못된 예시
@use "_variables";     // ❌ _ 포함하면 안 됨
@use "variables.scss"; // ❌ 확장자 포함하면 안 됨`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`모범 사례 요약`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`SCSS를 효과적으로 사용하기 위한 `,(0,o.jsx)(`b`,{children:`모범 사례`}),`를 요약합니다.`,(0,o.jsx)(`br`,{}),`앞에서 다룬 내용을 한 번에 정리해 두면, 새로운 파일을 작성할 때마다`,` `,(0,o.jsx)(`b`,{children:`체크리스트처럼 참고`}),`할 수 있습니다.`,(0,o.jsx)(`br`,{}),`이 섹션의 내용을 팀 규칙이나 스타일 가이드에 반영해 두면,`,` `,(0,o.jsx)(`b`,{children:`프로젝트 전반의 코드 품질을 일정 수준 이상으로 유지`}),`하는 데 도움이 됩니다.`]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`코드 작성 원칙`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`중첩 깊이 제한`}),`: 3단계를 넘지 않기`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`간단한 선택자`}),`: BEM 방법론 활용하여 긴 선택자 체인 피하기`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`모듈화`}),`: 기능별로 파일 분리하여 관리`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`일관성`}),`: 프로젝트 전체에서 일관된 네이밍과 구조 유지`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`의미 있는 주석`}),`: 복잡한 로직이나 특별한 이유에 주석 추가`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`성능 최적화`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`불필요한 중첩 피하기`}),`: 독립적인 스타일은 중첩 없이 작성`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`파일 크기 최적화`}),`: 프로덕션에서는 압축 형식 사용`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`선택자 복잡도 관리`}),`: 간단하고 명확한 선택자 사용`]})]}),(0,o.jsxs)(`dl`,{className:`dl_dot_lst mt_l`,children:[(0,o.jsx)(`dt`,{className:`font-16 mb_s`,children:`유지보수성 향상`}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`파일 구조화`}),`: abstracts, base, components, layout 등으로 체계적 분리`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`변수 활용`}),`: 반복되는 값은 변수로 관리`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`믹스인 활용`}),`: 반복되는 패턴은 믹스인으로 추출`]}),(0,o.jsxs)(`dd`,{children:[(0,o.jsx)(`b`,{children:`문서화`}),`: 복잡한 컴포넌트나 믹스인은 주석으로 문서화`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`SCSS 문법을 사용할 때 주의해야 할 점에 대해 알아본 내용을 정리합니다.`,(0,o.jsx)(`br`,{}),`지금까지 살펴본 내용은 모두 거창한 규칙이라기보다,`,` `,(0,o.jsx)(`b`,{children:`실제 프로젝트에서 문제를 줄이기 위해`}),` 많은 팀들이 공통으로 합의한 경험칙에 가깝습니다.`,(0,o.jsx)(`br`,{}),`처음부터 모든 것을 완벽하게 지키는 것보다,`,` `,(0,o.jsx)(`b`,{children:`중요한 원칙들부터 하나씩 습관으로 만드는 것`}),`을 목표로 삼으면 좋습니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`중첩 깊이 제한`}),`: 3단계를 넘지 않기, BEM 방법론 활용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`선택자 복잡도 관리`}),`: 간단하고 명확한 선택자 사용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`성능 고려`}),`: 불필요한 중첩 피하기, 파일 크기 최적화`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`유지보수성`}),`: 일관된 네이밍, 모듈화, 의미 있는 주석`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`일반적인 실수`}),`: `,`&`,` 공백, 변수 스코프, 파셜 불러오기 등 주의`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`모범 사례`}),`: 코드 작성 원칙, 성능 최적화, 유지보수성 향상 방법`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 섹션에서는 `,(0,o.jsx)(`b`,{children:`변수(Variables)로 스타일을 관리`}),`하는 방법을 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/03_scss_04.png`,alt:`SCSS 문법을 사용할 때 주의할 점`}),(0,o.jsx)(`figcaption`,{children:`SCSS 문법을 사용할 때 주의할 점`})]})]})}export{l as default,a as t};