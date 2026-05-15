import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`@for 반복문의 기본 구조`,description:`SCSS @for 반복문을 상세히 알아봅니다. @for의 기본 개념, 문법, through와 to의 차이, 실제 사용 예시, 클래스 자동 생성, 그리고 초급자가 이해하기 쉬운 예제 중심으로 설명합니다.`,keyword:`scss 반복문, scss @for, scss for loop, scss through, scss to, scss 반복`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(`b`,{children:`@for 반복문`}),`은 SCSS에서 `,(0,o.jsx)(`b`,{children:`같은 코드를 여러 번 반복 실행`}),`할 수 있게 해주는 기능입니다.`,(0,o.jsx)(`br`,{}),`숫자를 증가시키면서 반복하므로, `,(0,o.jsx)(`b`,{children:`유사한 스타일을 자동으로 생성`}),`할 때 매우 유용합니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 @for 반복문의 기본 개념, 문법, through와 to의 차이, 실제 사용 예시를 초급자가 이해하기 쉬운 예제 중심으로 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`반복문이란?`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`반복문은 `,(0,o.jsx)(`b`,{children:`"~번 반복해서 실행"`}),`이라는 의미입니다.`,(0,o.jsx)(`br`,{}),`SCSS에서 반복문을 이해해 두면 간격, 컬럼, 유틸리티 클래스처럼`,` `,(0,o.jsx)(`b`,{children:`규칙적인 패턴을 자동으로 생성`}),`할 수 있어 실무에서 코드 생산성이 크게 올라갑니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`반복문의 기본 개념`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`일상 생활에서의 반복문 예시:`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`"1부터 10까지 숫자를 세어본다"`}),` → 1, 2, 3, 4, 5, 6, 7, 8, 9, 10`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`"5번 반복해서 운동한다"`}),` → 1번째, 2번째, 3번째, 4번째, 5번째`]})]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`SCSS의 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`@for`}),` 반복문도 같은 원리입니다. `,(0,o.jsx)(`b`,{children:`숫자를 증가시키면서 같은 코드를 반복 실행`}),`합니다.`]}),(0,o.jsx)(i,{title:`반복문 기본 예시`,language:`css`,className:`mt_m`,children:`// 1부터 5까지 반복
@for $i from 1 through 5 {
  // $i는 1, 2, 3, 4, 5로 증가
  .item-#{$i} {
    margin-bottom: #{$i * 8}px;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.item-1 {
  margin-bottom: 8px;
}

.item-2 {
  margin-bottom: 16px;
}

.item-3 {
  margin-bottom: 24px;
}

.item-4 {
  margin-bottom: 32px;
}

.item-5 {
  margin-bottom: 40px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`반복문을 사용하면 `,(0,o.jsx)(`b`,{children:`비슷한 스타일을 자동으로 생성`}),`할 수 있어 코드 작성 시간을 크게 줄일 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`반복문이 필요한 이유`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`반복문 없이 작성하면 `,(0,o.jsx)(`b`,{children:`같은 패턴의 코드를 여러 번 반복`}),`해야 합니다.`]}),(0,o.jsx)(i,{title:`반복문 없이 작성`,language:`css`,className:`mt_m`,children:`/* 반복문 없이 수동으로 작성 */
.mt-1 {
  margin-top: 8px;
}

.mt-2 {
  margin-top: 16px;
}

.mt-3 {
  margin-top: 24px;
}

.mt-4 {
  margin-top: 32px;
}

.mt-5 {
  margin-top: 40px;
}
/* 같은 패턴을 5번 반복 작성 */`}),(0,o.jsx)(i,{title:`반복문 사용`,language:`css`,className:`mt_m`,children:`// 반복문으로 자동 생성
@for $i from 1 through 5 {
  .mt-#{$i} {
    margin-top: #{$i * 8}px;
  }
}
// 한 번만 작성하면 5개 클래스 자동 생성`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`반복문을 사용하면 `,(0,o.jsx)(`b`,{children:`코드가 훨씬 간결`}),`해지고,`,` `,(0,o.jsx)(`b`,{children:`수정도 한 곳만 하면`}),` 됩니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`@for 기본 문법`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@for`}),` 반복문의 `,(0,o.jsx)(`b`,{children:`기본 문법`}),`을 알아봅니다.`,(0,o.jsx)(`br`,{}),`시작 값, 끝 값, 증가 방향을 정확히 이해해 두면,`,` `,(0,o.jsx)(`b`,{children:`원하는 개수만큼 규칙적인 클래스를 생성`}),`할 수 있어 실전 유틸리티 작성에 바로 활용할 수 있습니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기본 구조`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@for`}),` 뒤에 변수명, 시작 숫자, 끝 숫자를 지정합니다.`]}),(0,o.jsx)(i,{title:`@for 기본 구조`,language:`css`,className:`mt_m`,children:`@for $변수명 from 시작 through 끝 {
  // 반복할 코드
}`}),(0,o.jsx)(i,{title:`실제 예시`,language:`css`,className:`mt_m`,children:`@for $i from 1 through 5 {
  .item-#{$i} {
    padding: #{$i * 8}px;
  }
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`$i`}),`는 `,(0,o.jsx)(`b`,{children:`1부터 5까지 증가`}),`하면서 중괄호 안의 코드를 반복 실행합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`변수명 규칙`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`반복문에서 사용하는 변수명은`,` `,(0,o.jsxs)(`b`,{children:[`일반적으로 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`$i`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`$j`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`$k`})]}),`를 사용합니다.`,(0,o.jsx)(`br`,{}),`하지만 의미 있는 이름을 사용하는 것도 좋습니다.`]}),(0,o.jsx)(i,{title:`변수명 예시`,language:`css`,className:`mt_m`,children:`// 일반적인 변수명
@for $i from 1 through 5 {
  // ...
}

// 의미 있는 변수명
@for $index from 1 through 5 {
  // ...
}

@for $column from 1 through 12 {
  // ...
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsxs)(`h2`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{className:`t_blue`,children:`through`}),` vs `,(0,o.jsx)(`i`,{className:`t_blue`,children:`to`})]}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@for`}),`에는`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`through`}),`와`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`to`}),(0,o.jsx)(`b`,{children:` 두 가지 방식`}),`이 있습니다. 이 둘의 차이를 이해하는 것이 중요합니다.`,(0,o.jsx)(`br`,{}),`반복 범위를 하나만 잘못 지정해도 클래스 개수가 달라지기 때문에,`,` `,(0,o.jsx)(`b`,{children:`디자인 시스템의 스텝 수나 컬럼 수를 정확히 맞추기 위해`}),` 꼭 짚고 넘어가야 하는 개념입니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{children:`through`}),` - `,(0,o.jsx)(`i`,{className:`t_blue`,children:`끝 숫자 포함`})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`through`}),`는 `,(0,o.jsx)(`b`,{children:`끝 숫자를 포함`}),`하여 반복합니다.`]}),(0,o.jsx)(i,{title:`through 예시`,language:`css`,className:`mt_m`,children:`@for $i from 1 through 5 {
  .item-#{$i} {
    // $i는 1, 2, 3, 4, 5
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.item-1 { }
.item-2 { }
.item-3 { }
.item-4 { }
.item-5 { }
/* 5까지 포함하여 총 5번 반복 */`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`through`}),`는 `,(0,o.jsx)(`b`,{children:`끝 숫자를 포함`}),`하므로, `,(0,o.jsx)(`code`,{className:`t_blue`,children:`1 through 5`}),`는`,` `,(0,o.jsx)(`b`,{children:`5번 반복`}),`합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{children:`to`}),` - `,(0,o.jsx)(`i`,{className:`t_blue`,children:`끝 숫자 제외`})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`to`}),`는 `,(0,o.jsx)(`b`,{children:`끝 숫자를 제외`}),`하고 반복합니다.`]}),(0,o.jsx)(i,{title:`to 예시`,language:`css`,className:`mt_m`,children:`@for $i from 1 to 5 {
  .item-#{$i} {
    // $i는 1, 2, 3, 4 (5는 제외)
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.item-1 { }
.item-2 { }
.item-3 { }
.item-4 { }
/* 5는 제외하여 총 4번 반복 */`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`to`}),`는 `,(0,o.jsx)(`b`,{children:`끝 숫자를 제외`}),`하므로,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`1 to 5`}),`는 `,(0,o.jsx)(`b`,{children:`4번 반복`}),`합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`through vs to 비교`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`두 방식의 차이를 `,(0,o.jsx)(`b`,{children:`표로 비교`}),`해봅니다.`]}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`방식`}),(0,o.jsx)(`li`,{className:`cell content`,children:`반복 횟수`}),(0,o.jsx)(`li`,{className:`cell content`,children:`변수 값`}),(0,o.jsx)(`li`,{className:`cell content`,children:`사용 시기`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`through`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`반복 횟수`,children:`끝 숫자 포함`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`변수 값`,children:[(0,o.jsx)(`code`,{children:`1 through 5`}),` → 1, 2, 3, 4, 5`]}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`사용 시기`,children:`끝 숫자까지 포함해야 할 때`})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`to`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`반복 횟수`,children:`끝 숫자 제외`}),(0,o.jsxs)(`p`,{className:`cell content`,"data-title":`변수 값`,children:[(0,o.jsx)(`code`,{children:`1 to 5`}),` → 1, 2, 3, 4`]}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`사용 시기`,children:`끝 숫자 전까지만 필요할 때`})]})]})]}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`일반적으로`,` `,(0,o.jsxs)(`b`,{children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`through`}),`를 더 많이 사용`]}),`합니다. 끝 숫자를 포함하는 것이 더 직관적이기 때문입니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`인터폴레이션 사용`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`반복문에서 변수를 사용할 때는 `,(0,o.jsx)(`b`,{children:`인터폴레이션(`}),(0,o.jsxs)(`code`,{className:`t_blue`,children:[`#`,`{}`]}),(0,o.jsx)(`b`,{children:`)`}),`을 사용해야 합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`인터폴레이션이 필요한 이유`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`변수를 `,(0,o.jsx)(`b`,{children:`선택자 이름이나 문자열 안에서 사용`}),`할 때는 인터폴레이션이 필요합니다.`]}),(0,o.jsx)(i,{title:`인터폴레이션 사용 예시`,language:`css`,className:`mt_m`,children:`@for $i from 1 through 5 {
  // 선택자 이름에 변수 사용 (인터폴레이션 필요)
  .item-#{$i} {
    // 값으로 사용할 때는 인터폴레이션 불필요
    margin: $i * 8px;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.item-1 {
  margin: 8px;
}

.item-2 {
  margin: 16px;
}

.item-3 {
  margin: 24px;
}

.item-4 {
  margin: 32px;
}

.item-5 {
  margin: 40px;
}`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`.item-#{$i}`}),`에서`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`#{$i}`}),`는`,` `,(0,o.jsx)(`b`,{children:`변수 값을 문자열로 변환`}),`하여 선택자 이름에 삽입합니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`인터폴레이션 사용 규칙`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`인터폴레이션은 `,(0,o.jsx)(`b`,{children:`언제 사용해야 하는지`}),` 규칙을 정리합니다.`]}),(0,o.jsxs)(`div`,{className:`table_summary value_150 mt_m`,children:[(0,o.jsxs)(`ul`,{className:`lst_hd`,children:[(0,o.jsx)(`li`,{className:`cell value`,children:`사용 위치`}),(0,o.jsx)(`li`,{className:`cell content`,children:`인터폴레이션 필요 여부`}),(0,o.jsx)(`li`,{className:`cell content`,children:`예시`})]}),(0,o.jsxs)(`ul`,{className:`lst_bd`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`선택자 이름`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`인터폴레이션 필요 여부`,children:`필요`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`예시`,children:(0,o.jsx)(`code`,{children:`.item-#{$i}`})})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`속성 값`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`인터폴레이션 필요 여부`,children:`불필요`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`예시`,children:(0,o.jsx)(`code`,{children:`margin: $i * 8px;`})})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`문자열 안`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`인터폴레이션 필요 여부`,children:`필요`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`예시`,children:(0,o.jsx)(`code`,{children:`content: "#{$i}번째";`})})]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`p`,{className:`cell value t_darkgreen`,children:`calc() 안`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`인터폴레이션 필요 여부`,children:`필요`}),(0,o.jsx)(`p`,{className:`cell content`,"data-title":`예시`,children:(0,o.jsx)(`code`,{children:`width: calc(100% - #{$i}px);`})})]})]})]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실제 활용 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{className:`t_blue`,children:`@for`}),` 반복문을`,` `,(0,o.jsx)(`b`,{children:`실제 프로젝트에서 활용`}),`하는 예시를 살펴봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`간격 유틸리티 클래스 생성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`마진과 패딩 유틸리티 클래스를 `,(0,o.jsx)(`b`,{children:`반복문으로 자동 생성`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`간격 유틸리티 예시`,language:`css`,className:`mt_m`,children:`// 마진 탑 유틸리티
@for $i from 1 through 10 {
  .mt-#{$i} {
    margin-top: #{$i * 8}px;
  }
}

// 패딩 유틸리티
@for $i from 1 through 10 {
  .p-#{$i} {
    padding: #{$i * 8}px;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.mt-1 { margin-top: 8px; }
.mt-2 { margin-top: 16px; }
.mt-3 { margin-top: 24px; }
.mt-4 { margin-top: 32px; }
.mt-5 { margin-top: 40px; }
.mt-6 { margin-top: 48px; }
.mt-7 { margin-top: 56px; }
.mt-8 { margin-top: 64px; }
.mt-9 { margin-top: 72px; }
.mt-10 { margin-top: 80px; }

.p-1 { padding: 8px; }
.p-2 { padding: 16px; }
/* ... (생략)... */`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면`,` `,(0,o.jsx)(`b`,{children:`10개의 마진 클래스와 10개의 패딩 클래스가 자동으로 생성`}),`됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`폰트 크기 유틸리티 생성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`폰트 크기 유틸리티 클래스를 `,(0,o.jsx)(`b`,{children:`반복문으로 자동 생성`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`폰트 크기 유틸리티 예시`,language:`css`,className:`mt_m`,children:`@for $i from 1 through 6 {
  .text-#{$i} {
    font-size: #{$i * 4 + 12}px;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.text-1 { font-size: 16px; }
.text-2 { font-size: 20px; }
.text-3 { font-size: 24px; }
.text-4 { font-size: 28px; }
.text-5 { font-size: 32px; }
.text-6 { font-size: 36px; }`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`그리드 시스템 생성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`그리드 컬럼 클래스를 `,(0,o.jsx)(`b`,{children:`반복문으로 자동 생성`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`그리드 시스템 예시`,language:`css`,className:`mt_m`,children:`// 12컬럼 그리드 시스템
@for $i from 1 through 12 {
  .col-#{$i} {
    width: percentage($i / 12);
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.col-1 { width: 8.33333%; }
.col-2 { width: 16.66667%; }
.col-3 { width: 25%; }
.col-4 { width: 33.33333%; }
.col-5 { width: 41.66667%; }
.col-6 { width: 50%; }
.col-7 { width: 58.33333%; }
.col-8 { width: 66.66667%; }
.col-9 { width: 75%; }
.col-10 { width: 83.33333%; }
.col-11 { width: 91.66667%; }
.col-12 { width: 100%; }`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`12개의 그리드 컬럼 클래스가 자동으로 생성`}),`됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`z-index 레이어 생성`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`z-index 값을 `,(0,o.jsx)(`b`,{children:`반복문으로 자동 생성`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`z-index 예시`,language:`css`,className:`mt_m`,children:`@for $i from 1 through 10 {
  .z-#{$i} {
    z-index: $i * 10;
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.z-1 { z-index: 10; }
.z-2 { z-index: 20; }
.z-3 { z-index: 30; }
.z-4 { z-index: 40; }
.z-5 { z-index: 50; }
.z-6 { z-index: 60; }
.z-7 { z-index: 70; }
.z-8 { z-index: 80; }
.z-9 { z-index: 90; }
.z-10 { z-index: 100; }`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`중첩 반복문`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`반복문 안에 `,(0,o.jsx)(`b`,{children:`또 다른 반복문을 중첩`}),`하여 사용할 수 있습니다.`,(0,o.jsx)(`br`,{}),`예를 들어, 여러 방향(top, right, bottom, left)을 순회하면서 각 방향마다 다시 여러 크기를 순회해야 할 때 중첩 반복문이 유용합니다. 이렇게 하면 `,(0,o.jsx)(`b`,{children:`두 가지 이상의 변수를 조합`}),`하여 체계적인 유틸리티 클래스를 대량으로 생성할 수 있어, 수동으로 작성할 경우 수백 줄이 필요한 작업을 몇 줄의 코드로 처리할 수 있습니다.`]}),(0,o.jsx)(i,{title:`중첩 반복문 예시`,language:`css`,className:`mt_m`,children:`// 방향별 마진 유틸리티
$directions: top, right, bottom, left;

@each $direction in $directions {
  @if $direction == top {
    /* margin-top */
  } @else if $direction == right {
    /* margin-right */
  } @else if $direction == bottom {
    /* margin-bottom */
  } @else if $direction == left {
    /* margin-left */
  }

  @for $i from 1 through 5 {
    .m#{str-slice($direction, 1, 1)}-#{$i} {
      margin-#{$direction}: #{$i * 8}px;
    }
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS (일부)`,language:`css`,className:`mt_m`,children:`/* margin-top */
.mt-1 { margin-top: 8px; }
.mt-2 { margin-top: 16px; }
.mt-3 { margin-top: 24px; }
.mt-4 { margin-top: 32px; }
.mt-5 { margin-top: 40px; }

/* margin-right */
.mr-1 { margin-right: 8px; }
.mr-2 { margin-right: 16px; }
.mr-3 { margin-right: 24px; }
.mr-4 { margin-right: 32px; }
.mr-5 { margin-right: 40px; }

/* margin-bottom */
.mb-1 { margin-bottom: 8px; }
.mb-2 { margin-bottom: 16px; }
.mb-3 { margin-bottom: 24px; }
.mb-4 { margin-bottom: 32px; }
.mb-5 { margin-bottom: 40px; }

/* margin-left */
.ml-1 { margin-left: 8px; }
.ml-2 { margin-left: 16px; }
.ml-3 { margin-left: 24px; }
.ml-4 { margin-left: 32px; }
.ml-5 { margin-left: 40px; }`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 하면`,` `,(0,o.jsx)(`b`,{children:`방향별로 5개씩, 총 20개의 마진 클래스가 자동으로 생성`}),`됩니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`code`,{className:`t_blue`,children:`@each`}),`문의 자세한 내용은 다음 섹션`,` `,(0,o.jsx)(`b`,{className:`t_blue`,children:`[@each 반복문 사용법]`}),`에서 자세하게 안내합니다.`]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`조건문과 함께 사용`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`반복문 안에서 `,(0,o.jsx)(`b`,{children:`조건문을 사용`}),`하여 더 유연한 코드를 작성할 수 있습니다.`,(0,o.jsx)(`br`,{}),`아래는 반복문 안에서 `,(0,o.jsx)(`b`,{children:`조건문으로 특정 경우만 처리`}),`하는 예시입니다.`]}),(0,o.jsx)(i,{title:`조건문과 반복문 조합`,language:`css`,className:`mt_m`,children:`@for $i from 1 through 10 {
  // 짝수일 때만 생성
  @if $i % 2 == 0 {
    .spacing-#{$i} {
      margin: #{$i * 8}px;
    }
  }
}`}),(0,o.jsx)(i,{title:`컴파일된 CSS`,language:`css`,className:`mt_m`,children:`.spacing-2 { margin: 16px; }
.spacing-4 { margin: 32px; }
.spacing-6 { margin: 48px; }
.spacing-8 { margin: 64px; }
.spacing-10 { margin: 80px; }
// 홀수는 생성되지 않음`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`이렇게 하면 `,(0,o.jsx)(`b`,{children:`특정 조건을 만족하는 클래스만 생성`}),`할 수 있습니다.`]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`반복문 사용 시 주의사항`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`반복문을 사용할 때 `,(0,o.jsx)(`b`,{children:`주의해야 할 사항`}),`들을 정리합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`반복 횟수 제한`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`반복 횟수가 너무 많으면 `,(0,o.jsx)(`b`,{children:`CSS 파일 크기가 커질 수 있습니다`}),`.`,(0,o.jsx)(`br`,{}),`일반적으로 `,(0,o.jsx)(`b`,{children:`10-20번 이하`}),`로 제한하는 것이 좋습니다.`]}),(0,o.jsx)(i,{title:`반복 횟수 제한 예시`,language:`css`,className:`mt_m`,children:`// 적절한 반복 횟수
@for $i from 1 through 10 {
  // ...
}

// 너무 많은 반복 (주의)
@for $i from 1 through 100 {
  // CSS 파일이 매우 커짐
}`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`인터폴레이션 사용`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`선택자 이름이나 문자열에 변수를 사용할 때는`,` `,(0,o.jsx)(`b`,{children:`반드시 인터폴레이션을 사용`}),`해야 합니다.`]}),(0,o.jsx)(i,{title:`인터폴레이션 사용 예시`,language:`css`,className:`mt_m`,children:`@for $i from 1 through 5 {
  // 올바른 사용
  .item-#{$i} {
    margin: $i * 8px;
  }

  // 잘못된 사용 (에러 발생)
  .item-$i {
    // 인터폴레이션 없이 사용 불가
  }
}`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[(0,o.jsx)(`code`,{children:`@for`}),` 반복문의 기본 구조에 대해 알아본 내용을 정리합니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`반복문의 개념`}),`: 같은 코드를 여러 번 반복 실행하는 기능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`기본 문법`}),`: `,(0,o.jsx)(`code`,{children:`@for`}),` $변수명 `,(0,o.jsx)(`code`,{children:`from`}),` 시작`,` `,(0,o.jsx)(`code`,{children:`through`}),`/`,(0,o.jsx)(`code`,{children:`to`}),` 끝`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`through vs to`}),`: `,(0,o.jsx)(`code`,{children:`through`}),`는 끝 숫자 포함,`,` `,(0,o.jsx)(`code`,{children:`to`}),`는 끝 숫자 제외`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`인터폴레이션`}),`: 선택자 이름이나 문자열에 변수 사용 시`,` `,(0,o.jsxs)(`code`,{children:[`#`,`{}`]}),` 필요`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`활용 예시`}),`: 간격 유틸리티, 폰트 크기, 그리드 시스템,`,` `,(0,o.jsx)(`code`,{children:`z-index`}),` 생성`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`중첩 반복문`}),`: 반복문 안에 또 다른 반복문 사용 가능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`조건문과 조합`}),`: 반복문 안에서 조건문 사용 가능`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`주의사항`}),`: 반복 횟수 제한, 인터폴레이션 사용`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`@each 반복문 사용법`}),`을 자세히 알아봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/08_scss_02.png`,alt:`@for 반복문`}),(0,o.jsx)(`figcaption`,{children:`@for 반복문`})]})]})}export{l as default,a as t};