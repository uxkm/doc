import{r as e}from"./rolldown-runtime-BYbx6iT9.js";import{n as t}from"./editor-vendor-NExbC2Bo.js";import{n}from"./PageMeta-CwOXcC1J.js";import{t as r}from"./path-BMcoVFKm.js";import{t as i}from"./CodeBlock-LqoApAt5.js";var a=e({default:()=>l}),o=t(),s={mainClass:`scss_start`,type:`publishing`,info:!1,note:!1,sideMenu:!0,reference:!0,contentList:!0,depth3Last:!1,bottomEditor:!1},c={title:`변수 네이밍 규칙`,description:`SCSS 변수 네이밍 규칙을 상세히 알아봅니다. 좋은 변수명의 특징, 네이밍 컨벤션, 실제 프로젝트에서 사용하는 네이밍 패턴, 그리고 팀 프로젝트에서 일관된 네이밍을 유지하는 방법을 설명합니다.`,keyword:`scss 변수 네이밍, scss 변수명, scss 네이밍 규칙, scss 변수 컨벤션, scss 변수명 규칙`};function l(){return n({...c,layout:s}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,o.jsx)(`strong`,{className:`sound_only`,children:`요약 설명`}),(0,o.jsxs)(`p`,{children:[(0,o.jsx)(`b`,{children:`변수 네이밍 규칙`}),`은 코드의 가독성과 유지보수성에 큰 영향을 미칩니다.`,(0,o.jsx)(`br`,{}),`좋은 변수명은 `,(0,o.jsx)(`b`,{children:`값의 의미를 명확하게 전달`}),`하고, 나중에 코드를 읽을 때도 쉽게 이해할 수 있게 해줍니다.`]}),(0,o.jsx)(`p`,{className:`mt_s`,children:`이 페이지에서는 좋은 변수명의 특징, 다양한 네이밍 컨벤션, 실제 프로젝트에서 사용하는 네이밍 패턴, 그리고 팀 프로젝트에서 일관된 네이밍을 유지하는 방법을 상세히 알아봅니다.`})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`좋은 변수명의 특징`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`좋은 변수명은 `,(0,o.jsx)(`b`,{children:`값의 의미를 명확하게 전달`}),`하고,`,` `,(0,o.jsx)(`b`,{children:`코드를 읽는 사람이 쉽게 이해`}),`할 수 있어야 합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`의미가 명확한 이름`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`변수명은 `,(0,o.jsx)(`b`,{children:`무엇을 의미하는지 바로 알 수 있어야`}),` 합니다.`]}),(0,o.jsx)(i,{title:`❌ 나쁜 예시`,language:`css`,className:`mt_m`,children:`$c1: #0a58ca;             // ❌ 무엇을 의미하는지 알 수 없음
$s1: 16px;                // ❌ 크기? 여백? 불명확
$val: 8px;                // ❌ 너무 일반적인 이름
`}),(0,o.jsx)(i,{title:`✅ 좋은 예시`,language:`css`,className:`mt_m`,children:`$color-primary: #0a58ca;  // ✅ 메인 색상임을 명확히 알 수 있음
$font-size-base: 16px;    // ✅ 기본 폰트 크기임을 알 수 있음
$spacing-sm: 8px;         // ✅ 작은 여백임을 알 수 있음
`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`의미 있는 이름을 사용하면`,` `,(0,o.jsx)(`b`,{children:`코드를 읽는 사람이 변수의 용도를 바로 이해`}),`할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`일관된 네이밍 패턴`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`프로젝트 전체에서 `,(0,o.jsx)(`b`,{children:`일관된 네이밍 패턴을 사용`}),`하면 변수를 찾고 이해하기 쉬워집니다.`]}),(0,o.jsx)(i,{title:`일관된 네이밍 예시`,language:`css`,className:`mt_m`,children:`// 색상: color-로 시작
$color-primary: #0a58ca;
$color-secondary: #6c757d;

// 폰트 크기: font-size-로 시작
$font-size-base: 16px;
$font-size-lg: 18px;

// 여백: spacing-로 시작
$spacing-sm: 8px;
$spacing-md: 16px;
`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`일관된 접두사를 사용하면`,` `,(0,o.jsx)(`b`,{children:`에디터의 자동 완성에서도 쉽게 찾을 수 있고`}),`, 변수의 종류를 빠르게 파악할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`적절한 길이`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`변수명은 `,(0,o.jsx)(`b`,{children:`너무 짧지도 길지도 않게`}),` 적절한 길이로 작성합니다.`]}),(0,o.jsx)(i,{title:`변수명 길이 비교`,language:`css`,className:`mt_m`,children:`// ❌ 너무 짧음 (의미 불명확)
$c: #0a58ca;
$s: 16px;

// ✅ 적절한 길이
$color-primary: #0a58ca;
$font-size-base: 16px;

// ❌ 너무 김 (불필요하게 장황함)
$the-primary-brand-color-that-we-use: #0a58ca;
`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`일반적으로 `,(0,o.jsx)(`b`,{children:`2-4단어 조합`}),`이 적절하며, 의미를 전달하는 데 필요한 만큼만 길게 작성합니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`네이밍 컨벤션`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`프로젝트에서 사용할 수 있는 `,(0,o.jsx)(`b`,{children:`다양한 네이밍 컨벤션`}),`을 알아봅니다.`,(0,o.jsx)(`br`,{}),(0,o.jsx)(`b`,{children:`camelCase`}),`, `,(0,o.jsx)(`b`,{children:`kebab-case`}),`, `,(0,o.jsx)(`b`,{children:`snake_case`}),`처럼 자주 등장하는 패턴을 비교해 보고,`,` `,(0,o.jsx)(`b`,{children:`SCSS와 가장 잘 맞는 방식이 무엇인지`}),`를 정리합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`카멜 케이스 (camelCase)`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`첫 단어는 소문자로 시작하고, 이후 단어의 첫 글자는 대문자로 작성하는 방식입니다.`}),(0,o.jsx)(i,{title:`카멜 케이스 예시`,language:`css`,className:`mt_m`,children:`$primaryColor: #0a58ca;
$fontSizeBase: 16px;
$spacingSmall: 8px;
`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`카멜 케이스는 JavaScript와 호환성이 좋지만, SCSS에서는`,` `,(0,o.jsx)(`b`,{className:`t_blue`,children:`하이픈을 사용하는 케밥 케이스가 더 일반적`}),`입니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsxs)(`h3`,{className:`ml_mn`,children:[(0,o.jsx)(`i`,{children:`케밥 케이스 (kebab-case)`}),` `,(0,o.jsx)(`i`,{className:`t_blue`,children:`추천`})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`모든 단어를 소문자로 작성하고, 단어 사이를 하이픈(`,(0,o.jsx)(`code`,{children:`-`}),`)으로 구분하는 방식입니다.`]}),(0,o.jsx)(i,{title:`케밥 케이스 예시`,language:`css`,className:`mt_m`,children:`$primary-color: #0a58ca;
$font-size-base: 16px;
$spacing-small: 8px;
`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`케밥 케이스는 `,(0,o.jsx)(`b`,{children:`SCSS에서 가장 널리 사용되는 방식`}),`이며, CSS 클래스명과도 일관성을 유지할 수 있습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`스네이크 케이스 (snake_case)`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`모든 단어를 소문자로 작성하고, 단어 사이를 언더스코어(`,(0,o.jsx)(`code`,{children:`_`}),`)로 구분하는 방식입니다.`]}),(0,o.jsx)(i,{title:`스네이크 케이스 예시`,language:`css`,className:`mt_m`,children:`$primary_color: #0a58ca;
$font_size_base: 16px;
$spacing_small: 8px;
`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`스네이크 케이스는 Python이나 Ruby 개발자에게 친숙하지만, SCSS에서는`,` `,(0,o.jsx)(`b`,{className:`t_blue`,children:`하이픈을 사용하는 케밥 케이스가 더 일반적`}),`입니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`변수 타입별 네이밍 패턴`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`변수의 타입(색상, 폰트, 여백 등)에 따라 `,(0,o.jsx)(`b`,{children:`일관된 네이밍 패턴`}),`을 사용하면 더 체계적으로 관리할 수 있습니다.`,(0,o.jsx)(`br`,{}),`이 섹션에서는 색상·폰트·여백 등 자주 쓰이는 타입별로 추천 접두사와 예시를 정리해, `,(0,o.jsx)(`b`,{children:`팀에서 바로 가져다 쓸 수 있는 규칙`}),`을 제안합니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`색상 변수 네이밍`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`색상 변수는 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`color-`}),` 접두사를 사용하고, 용도나 이름을 붙입니다.`]}),(0,o.jsx)(i,{title:`색상 변수 네이밍 예시`,language:`css`,className:`mt_m`,children:`// 용도별 네이밍
$color-primary: #0a58ca;
$color-secondary: #6c757d;
$color-success: #28a745;
$color-danger: #dc3545;

// 색상 이름 네이밍
$color-blue: #0a58ca;
$color-gray: #6c757d;
$color-green: #28a745;

// 변형 색상
$color-primary-light: #3d7dd8;
$color-primary-dark: #084298;
`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`용도별 네이밍(`,(0,o.jsx)(`code`,{className:`t_blue`,children:`primary`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`secondary`}),`)은`,` `,(0,o.jsx)(`b`,{children:`디자인 시스템과 잘 맞아`}),` 실무에서 많이 사용됩니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`폰트 변수 네이밍`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`폰트 관련 변수는 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`font-`}),` 접두사를 사용합니다.`]}),(0,o.jsx)(i,{title:`폰트 변수 네이밍 예시`,language:`css`,className:`mt_m`,children:`// 폰트 크기
$font-size-base: 16px;
$font-size-sm: 14px;
$font-size-lg: 18px;

// 폰트 굵기
$font-weight-normal: 400;
$font-weight-bold: 700;

// 줄간격
$line-height-normal: 1.5;
$line-height-tight: 1.2;
`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`여백 변수 네이밍`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`여백 변수는 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`spacing-`}),` 접두사를 사용하고, 크기를 나타내는 접미사를 붙입니다.`]}),(0,o.jsx)(i,{title:`여백 변수 네이밍 예시`,language:`css`,className:`mt_m`,children:`$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;
`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`크기 접미사(`,(0,o.jsx)(`code`,{className:`t_blue`,children:`xs`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`sm`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`md`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`lg`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`xl`}),`)는 `,(0,o.jsx)(`b`,{children:`일관되게 사용`}),`하면 이해하기 쉽습니다.`]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`기타 변수 네이밍`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`다른 타입의 변수들도 일관된 패턴으로 네이밍합니다.`}),(0,o.jsx)(i,{title:`기타 변수 네이밍 예시`,language:`css`,className:`mt_m`,children:`// 테두리
$border-radius-sm: 4px;
$border-radius-md: 8px;
$border-width: 1px;

// 그림자
$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);

// 전환 시간
$transition-fast: 0.15s;
$transition-normal: 0.3s;
`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`실무 네이밍 패턴 예시`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`실제 프로젝트에서 사용하는 `,(0,o.jsx)(`b`,{children:`네이밍 패턴`}),`을 예시로 살펴봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`Bootstrap 스타일 네이밍`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`Bootstrap과 유사한 네이밍 패턴입니다.`}),(0,o.jsx)(i,{title:`Bootstrap 스타일 네이밍`,language:`css`,className:`mt_m`,children:`// 색상
$blue: #0a58ca;
$indigo: #6610f2;
$purple: #6f42c1;

// 그레이스케일
$gray-100: #f8f9fa;
$gray-200: #e9ecef;
$gray-500: #adb5bd;
$gray-900: #212529;

// 여백
$spacer: 1rem;
$spacer-sm: $spacer * 0.5;
$spacer-lg: $spacer * 1.5;
`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`의미 중심 네이밍`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`용도나 의미를 중심으로 네이밍하는 패턴입니다.`}),(0,o.jsx)(i,{title:`의미 중심 네이밍`,language:`css`,className:`mt_m`,children:`// 브랜드 색상
$brand-primary: #0a58ca;
$brand-secondary: #6c757d;

// 텍스트 색상
$text-primary: #212529;
$text-secondary: #6c757d;
$text-muted: #adb5bd;

// 배경 색상
$bg-primary: #ffffff;
$bg-secondary: #f8f9fa;
`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`크기 기반 네이밍`}),(0,o.jsx)(`p`,{className:`mt_m`,children:`크기를 중심으로 네이밍하는 패턴입니다.`}),(0,o.jsx)(i,{title:`크기 기반 네이밍`,language:`css`,className:`mt_m`,children:`// 작은 크기
$size-xs: 4px;
$size-sm: 8px;

// 기본 크기
$size-md: 16px;

// 큰 크기
$size-lg: 24px;
$size-xl: 32px;
`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`네이밍 시 주의사항`}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`예약어 사용 금지`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`SCSS의 `,(0,o.jsx)(`b`,{className:`t_blue`,children:`예약어`}),(0,o.jsx)(`sup`,{className:`sup`,children:`1)`}),`는 변수명으로 사용할 수 없습니다.`]}),(0,o.jsxs)(`p`,{className:`mt_ms ex_box`,children:[(0,o.jsxs)(`span`,{className:`t_blue`,children:[`1) `,(0,o.jsx)(`b`,{children:`예약어`}),`란?`]}),(0,o.jsx)(`br`,{}),(0,o.jsx)(`b`,{children:`SCSS(또는 CSS) 문법에서 이미 특정한 의미로 사용`}),`되고 있어`,` `,(0,o.jsx)(`mark`,{children:`변수명이나 일반 식별자로 사용할 수 없거나, 사용 시 주의가 필요한 단어`}),`를 말합니다.`]}),(0,o.jsx)(i,{title:`예약어 예시`,language:`css`,className:`mt_m`,children:`// 사용 불가능한 예약어
$if: #0a58ca;     // ❌
$for: 16px;       // ❌
$each: 8px;       // ❌
$while: #fff;     // ❌
$return: 1.5;     // ❌
`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`숫자로 시작 금지`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`변수명은 `,(0,o.jsx)(`b`,{children:`숫자로 시작할 수 없습니다`}),`.`]}),(0,o.jsx)(i,{title:`잘못된 예시`,language:`css`,className:`mt_m`,children:`$1st-color: #0a58ca;    // ❌ 숫자로 시작
$16px-size: 16px;       // ❌ 숫자로 시작
`}),(0,o.jsx)(i,{title:`올바른 예시`,language:`css`,className:`mt_m`,children:`$color-first: #0a58ca;  // ✅
$font-size-16: 16px;    // ✅ 숫자는 중간이나 끝에 가능
`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`일관성 유지`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`프로젝트 전체에서 `,(0,o.jsx)(`b`,{children:`일관된 네이밍 규칙을 유지`}),`해야 합니다.`]}),(0,o.jsx)(i,{title:`❌ 일관성 없는 예시`,language:`css`,className:`mt_m`,children:`// ❌ 일관성 없음
$primaryColor: #0a58ca;      // 카멜 케이스
$font-size-base: 16px;       // 케밥 케이스
$spacing_small: 8px;         // 스네이크 케이스
`}),(0,o.jsx)(i,{title:`✅ 일관된 예시`,language:`css`,className:`mt_m`,children:`// ✅ 모두 케밥 케이스로 통일
$primary-color: #0a58ca;
$font-size-base: 16px;
$spacing-small: 8px;
`})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`약어 사용 주의`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`약어는 `,(0,o.jsx)(`b`,{children:`팀에서 공통으로 이해하는 것만 사용`}),`하고, 모호한 약어는 피하는 것이 좋습니다.`]}),(0,o.jsx)(i,{title:`약어 사용 예시`,language:`css`,className:`mt_m`,children:`// ❌ 모호한 약어
$bg-clr: #0a58ca;    // bg-clr이 무엇인지 불명확

// ✅ 명확한 약어
$bg-color: #0a58ca;  // background-color의 약어임을 알 수 있음
`})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`팀 프로젝트에서의 네이밍 규칙`}),(0,o.jsxs)(`p`,{className:`mt_l`,children:[`여러 명이 함께 작업할 때 `,(0,o.jsx)(`b`,{children:`일관된 네이밍을 유지`}),`하는 방법을 알아봅니다.`]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`네이밍 규칙 문서화`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`프로젝트 시작 시 `,(0,o.jsx)(`b`,{children:`네이밍 규칙을 문서로 정리`}),`하고 모든 팀원이 공유합니다.`]}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_sm indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`컨벤션 선택`}),`: 케밥 케이스, 카멜 케이스 등 어떤 방식을 사용할지 결정`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`접두사 규칙`}),`: 색상은 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`color-`}),`, 폰트는 `,(0,o.jsx)(`code`,{className:`t_blue`,children:`font-`}),` 등 접두사 규칙 정리`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`크기 표기`}),`: `,(0,o.jsx)(`code`,{className:`t_blue`,children:`xs`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`sm`}),`,`,` `,(0,o.jsx)(`code`,{className:`t_blue`,children:`md`}),` 등 크기 표기법 통일`]})]})]}),(0,o.jsxs)(`article`,{className:`mt_xl indent`,children:[(0,o.jsx)(`h3`,{className:`ml_mn`,children:`변수 목록 관리`}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`프로젝트에서 사용하는 모든 변수를`,` `,(0,o.jsx)(`b`,{children:`한 파일에 모아두고 주석으로 설명`}),`을 추가합니다.`]}),(0,o.jsx)(i,{title:`변수 목록 예시`,language:`css`,className:`mt_m`,children:`// ============================================
// 색상 변수
// ============================================
// 메인 브랜드 색상, 버튼, 링크 등에 사용
$color-primary: #0a58ca;

// 보조 색상, 덜 중요한 요소에 사용
$color-secondary: #6c757d;

// ============================================
// 폰트 변수
// ============================================
// 기본 폰트 크기, body 텍스트에 사용
$font-size-base: 16px;
`}),(0,o.jsxs)(`p`,{className:`mt_ms`,children:[`이렇게 정리해 두면`,` `,(0,o.jsx)(`b`,{children:`새로운 팀원도 빠르게 프로젝트의 디자인 시스템을 이해`}),`할 수 있습니다.`]})]})]}),(0,o.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,o.jsx)(`h2`,{className:`ml_mn t_blue`,children:`정리`}),(0,o.jsx)(`p`,{className:`mt_l`,children:`SCSS 변수 네이밍 규칙에 대해 알아본 내용을 정리합니다.`}),(0,o.jsxs)(`ul`,{className:`dot_lst mt_m indent_small`,children:[(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`좋은 변수명의 특징`}),`: 의미가 명확하고, 일관된 패턴을 따르며, 적절한 길이`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`네이밍 컨벤션`}),`: 케밥 케이스(kebab-case)가 SCSS에서 가장 일반적`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`타입별 네이밍`}),`: 색상은 `,(0,o.jsx)(`code`,{children:`color-`}),`, 폰트는`,` `,(0,o.jsx)(`code`,{children:`font-`}),`, 여백은 `,(0,o.jsx)(`code`,{children:`spacing-`}),` 접두사 사용`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`주의사항`}),`: 예약어 사용 금지, 숫자로 시작 금지, 일관성 유지, 약어 사용 주의`]}),(0,o.jsxs)(`li`,{children:[(0,o.jsx)(`b`,{children:`팀 프로젝트`}),`: 네이밍 규칙 문서화, 변수 목록 관리로 일관성 유지`]})]}),(0,o.jsxs)(`p`,{className:`mt_m`,children:[`다음 페이지에서는 `,(0,o.jsx)(`b`,{children:`실무에서 자주 사용하는 변수 구성 예시`}),`를 살펴봅니다.`]})]}),(0,o.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,o.jsx)(`img`,{src:r.SCSS+`/04_scss_03.png`,alt:`변수 네이밍 규칙`}),(0,o.jsx)(`figcaption`,{children:`변수 네이밍 규칙`})]})]})}export{l as default,a as t};