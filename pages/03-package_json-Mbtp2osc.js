import{n as e}from"./editor-vendor-B43TTzmv.js";import{t}from"./path-CX4eWZRa.js";import{t as n}from"./CodeBlock-DtynhfDL.js";import{t as r}from"./useGulpPageMeta-CN3lvT_B.js";import{t as i}from"./TerminalBlock-jMk5cv4D.js";var a=e();function o(){return r(),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,a.jsx)(`h2`,{className:`sound_only`,children:`요약 설명`}),(0,a.jsxs)(`p`,{children:[(0,a.jsx)(`b`,{className:`t_black`,children:`package.json`}),`이란 현재 프로젝트에 관한 정보와 패키지 매니저(npm, yarn)를 통해 설치한 패키지들의 의존성을 관리하는 파일입니다.`,(0,a.jsx)(`br`,{}),`간단하게 '`,(0,a.jsx)(`mark`,{children:`현재 프로젝트에 대한 정보를 저장하는 파일`}),`'입니다.`]})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`2.3.1. package.json 생성`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[(0,a.jsx)(`b`,{className:`folder`,children:`gulp_setting`}),` 폴더에서 `,(0,a.jsx)(`b`,{className:`terminal`,children:`터미널`}),`을 열고 아래 명령을 실행합니다. (아래 명령 중 첫 번째 명령을 실행합니다.)`]}),(0,a.jsx)(i,{className:`terminal_code_box mt_ms`,children:`npm init      // package.json 생성 (각 항목의 내용을 입력하면서 package.json 생성 ← 이 명령어를 이용하세요)
      				npm init -y   // package.json 생성 (내용 입력 없이 바로 package.json 생성)`}),(0,a.jsxs)(`p`,{className:`mt_ml`,children:[(0,a.jsx)(`code`,{children:`npm init`}),` 명령이 실행되면 아래처럼 `,(0,a.jsx)(`b`,{className:`filename t_blue`,children:`package.json`}),` 생성이 시작됩니다.`]}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_scaffolding_package1.png`,alt:`package.json 생성 첫 단계`})}),(0,a.jsxs)(`p`,{className:`mt_ml`,children:[`여기부터는 `,(0,a.jsx)(`b`,{className:`t_blue`,children:`엔터`}),`만 연타하면 마무리가 됩니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`code`,{children:`version`}),`, `,(0,a.jsx)(`code`,{children:`description`}),` 등 모든 항목은 `,(0,a.jsx)(`b`,{className:`filename t_blue`,children:`package.json`}),` 생성 완료 후 수정이 가능합니다.`]}),(0,a.jsx)(`p`,{className:`notice_red mt_ml`,children:`주의할 점!!`}),(0,a.jsxs)(`p`,{children:[(0,a.jsx)(`code`,{className:`t_blue`,children:`package name`}),`은 폴더명으로 괄호 안에 자동 적용되기 때문에 바로 엔터를 누르면 되지만,`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`i`,{className:`t_red`,children:`_gulp_setting`}),`처럼 `,(0,a.jsxs)(`i`,{className:`t_red`,children:[(0,a.jsx)(`b`,{children:`밑줄( _ )로 폴더명을 시작할 경우`}),` 엔터를 눌러도 다음 단계로 진행되지 않습니다.`]}),(0,a.jsx)(`br`,{}),`(`,(0,a.jsxs)(`i`,{className:`t_red warning`,children:[(0,a.jsx)(`b`,{children:`띄어쓰기`}),`나 `,(0,a.jsx)(`b`,{children:`대문자`}),`가 있어도 다음 단계로 진행되지 않습니다.`]}),`)`,(0,a.jsx)(`br`,{}),`이런 경우 아래 이미지처럼 따로 `,(0,a.jsx)(`code`,{className:`t_blue`,children:`package name`}),`을 작성한 후 엔터를 누르면 됩니다.`]}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_scaffolding_package2.png`,alt:`package.json 생성 두번째 단계`})}),(0,a.jsxs)(`p`,{className:`mt_ml`,children:[`위 단계까지 마무리가 되면 `,(0,a.jsx)(`b`,{className:`folder`,children:`gulp_setting `}),`폴더에 `,(0,a.jsx)(`b`,{className:`filename t_blue`,children:`package.json`}),` 파일이 생성된 것을 확인할 수 있습니다.`]}),(0,a.jsx)(`p`,{className:`mt_ms`,id:`package_json`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_scaffolding_package3.png`,alt:`package.json 생성 확인`})}),(0,a.jsxs)(`p`,{className:`mt_ml`,children:[`아래는 `,(0,a.jsx)(`b`,{className:`filename t_blue`,children:`package.json`}),`의 구조를 설명하는 섹션으로 읽으면 도움이 되지만,`,(0,a.jsxs)(`span`,{className:`underline`,children:[`건너뛰어도 나머지 `,(0,a.jsx)(`i`,{className:`t_blue`,children:`Gulp`}),`를 이해하는 데 문제는 없습니다.`]})]})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`2.3.2. package.json의 구조`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[`위 순서대로 진행하여 `,(0,a.jsx)(`b`,{className:`filename t_blue`,children:`package.json`}),`이 생성되면 아래와 같은 구성으로 파일이 생성됩니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`code`,{children:`JSON`}),` 포맷으로 이루어져 있으며, 각각의 정보는 키와 값의 쌍으로 저장되는 단일 `,(0,a.jsx)(`code`,{children:`JSON`}),` 객체로 구성됩니다.`]}),(0,a.jsx)(n,{title:`package.json`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      					"name": "폴더명 또는 직접 작성한 프로젝트명",
      					"version": "1.0.0",
      					"description": "",
      					"main": "index.js",
      					"scripts": {
      						"test": "echo \\"Error: no test specified\\" && exit 1"
      					},
      					"author": "",
      					"license": "ISC"
      				}`}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"name"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`mark`,{children:`프로젝트의 이름을 정의하며, 매우 중요한 항목입니다.`}),`중앙 저장소(npm)에 배포할 때는 `,(0,a.jsx)(`code`,{children:`version`}),`과 함께 반드시 포함되어야 합니다.`]}),(0,a.jsxs)(`li`,{children:[`이 이름은 URL 경로나 설치 시 생성되는 디렉토리 이름으로 사용되므로,`,(0,a.jsx)(`i`,{className:`t_red`,children:`URL이나 디렉토리에서 사용할 수 없는 형식은 피해야 합니다.`})]}),(0,a.jsxs)(`li`,{children:[`이름은 214자보다 짧아야 하며, 점(`,(0,a.jsx)(`code`,{children:`.`}),`)이나 밑줄(`,(0,a.jsx)(`code`,{children:`_`}),`)로 시작할 수 없고, 대문자를 포함해서는 안 됩니다.`]}),(0,a.jsxs)(`li`,{children:[`또한 `,(0,a.jsx)(`code`,{children:`require()`}),` 함수에서 사용되므로, 짧고 알기 쉬운 이름을 사용하는 것이 좋습니다.`]}),(0,a.jsxs)(`li`,{children:[`참고로 `,(0,a.jsx)(`code`,{children:`node`}),`나 `,(0,a.jsx)(`code`,{children:`js`}),`가 들어간 이름도 사용할 수 있지만, 과도한 사용은 피하는 것이 권장됩니다.`]})]})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"version"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsx)(`li`,{children:`프로젝트의 현재 버전을 정의하는 항목입니다.`}),(0,a.jsxs)(`li`,{children:[`버전 번호는 일반적으로 세 자리 숫자로 구성되며, 이는 `,(0,a.jsx)(`b`,{children:`SemVer(Semantic Versioning)`}),` 방식의 버전 체계를 따르기 때문입니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`b`,{children:`SemVer`}),`는 "의미 있는 버전 관리"를 뜻하며, 세 자리는 각각 `,(0,a.jsx)(`b`,{children:`주버전(Major)`}),`, `,(0,a.jsx)(`b`,{children:`부버전(Minor)`}),`, `,(0,a.jsx)(`b`,{children:`수정버전(Patch)`}),`을 나타내어 각 숫자에 명확한 의미가 부여됩니다.`]})]}),(0,a.jsx)(n,{title:`package.json - version`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"version": "2.7.4"
      					}`}),(0,a.jsxs)(`div`,{className:`mt_ms`,children:[`위 버전의,`,(0,a.jsx)(`br`,{}),(0,a.jsxs)(`ul`,{className:`dot_lst`,children:[(0,a.jsxs)(`li`,{children:[`첫 번째 자리인 `,(0,a.jsx)(`code`,{children:`2`}),`는 `,(0,a.jsxs)(`mark`,{children:[(0,a.jsx)(`strong`,{children:`Major(주 버전)`}),`를 의미`]}),`합니다. 만약 숫자가 `,(0,a.jsx)(`code`,{children:`0`}),`이면 아직 초기 개발(beta) 단계라는 뜻이고, `,(0,a.jsx)(`code`,{children:`1`}),`부터는 정식 릴리스를 의미합니다.`,(0,a.jsx)(`br`,{}),(0,a.jsxs)(`i`,{className:`underline`,children:[(0,a.jsx)(`b`,{children:`Major`}),` 버전이 올라간다는 것은 `,(0,a.jsx)(`b`,{children:`기존 버전과 호환되지 않을 수 있는 큰 변화나 수정`}),`이 있었다는 것을 뜻합니다.`]}),(0,a.jsx)(`br`,{}),`예를 들어, `,(0,a.jsx)(`code`,{children:`1.5.0`}),`을 사용하던 사용자가 `,(0,a.jsx)(`code`,{children:`2.0.0`}),`으로 업데이트할 경우, 코드가 정상적으로 작동하지 않거나 에러가 발생할 수 있습니다.`]}),(0,a.jsxs)(`li`,{children:[`두 번째 자리인 `,(0,a.jsx)(`code`,{children:`7`}),`은 `,(0,a.jsxs)(`mark`,{children:[(0,a.jsx)(`strong`,{children:`Minor(부 버전)`}),`를 의미`]}),`합니다. 새로운 기능이 추가되었지만, 기존 기능과의 하위 호환성은 유지되는 경우에 `,(0,a.jsx)(`b`,{children:`Minor`}),` 버전이 증가합니다.`]}),(0,a.jsxs)(`li`,{children:[`세 번째 자리인 `,(0,a.jsx)(`code`,{children:`4`}),`는 `,(0,a.jsxs)(`mark`,{children:[(0,a.jsx)(`strong`,{children:`Patch(수정 버전)`}),`를 의미`]}),`합니다. 기존 기능에 문제가 생겨 버그 수정이나 사소한 개선이 이루어졌을 때 `,(0,a.jsx)(`b`,{children:`Patch`}),` 버전을 올립니다.`]})]})]})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"description"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsx)(`li`,{children:`프로젝트에 대한 간단한 설명을 담는 문자열 항목입니다.`}),(0,a.jsxs)(`li`,{children:[`이 설명은 `,(0,a.jsx)(`code`,{children:`npm search`}),` 결과나 `,(0,a.jsx)(`b`,{children:`npm`}),` 패키지 페이지에 표시되므로,`,(0,a.jsx)(`b`,{children:`다른 사람들이 패키지를 쉽게 찾고 이해하는 데 도움이 됩니다.`})]})]})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"keywords"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[`프로젝트를 검색할 때 참조되는 `,(0,a.jsx)(`b`,{children:`연관 키워드 목록`}),`입니다.`]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`code`,{className:`t_blue weight-600`,children:`description`}),`과 마찬가지로,`,(0,a.jsx)(`code`,{children:`npm search`}),` 결과에 영향을 주어 `,(0,a.jsx)(`b`,{children:`사용자가 관련 패키지를 쉽게 찾을 수 있도록 도와줍니다.`})]})]}),(0,a.jsx)(n,{title:`package.json - keywords`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"keywords": ["fruits", "Apple", "Persimmon", "Pomegranate", "Jujube", "Mango", "Yuja"]
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"homepage"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[`프로젝트의 공식 홈페이지나 관련 문서를 안내하는 `,(0,a.jsx)(`strong`,{children:`웹사이트 주소(URL)`}),`를 지정하는 항목입니다.`]}),(0,a.jsxs)(`li`,{children:[`사용자나 개발자가 프로젝트에 대해 더 자세히 알아볼 수 있는 `,(0,a.jsx)(`b`,{children:`외부 링크를 제공`}),`합니다.`]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`code`,{children:`url`}),` 필드와는 다르며, `,(0,a.jsx)(`code`,{children:`url`}),`을 잘못 설정할 경우 예상치 못한 동작이 발생할 수 있으므로 주의해야 합니다.`]})]}),(0,a.jsx)(n,{title:`package.json - homepage`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"homepage": "https://your-package.org"
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"bugs"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[`프로젝트의 `,(0,a.jsx)(`b`,{children:`버그나 이슈를 보고하거나 확인할 수 있는 URL`}),` 또는 `,(0,a.jsx)(`b`,{children:`연락용 이메일 주소`}),`를 설정하는 항목입니다.`]}),(0,a.jsxs)(`li`,{children:[`패키지 사용자가 문제를 발견했을 때, `,(0,a.jsx)(`b`,{children:`신속하게 도움을 받거나 개발자에게 제보할 수 있도록 돕습니다.`})]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`code`,{children:`url`}),`, `,(0,a.jsx)(`code`,{children:`email`}),` 중 하나만 지정할 수도 있고, `,(0,a.jsx)(`b`,{children:`둘 다 함께 설정할 수도 있습니다.`})]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`code`,{children:`url`}),`이 설정되어 있으면, 사용자는 `,(0,a.jsx)(`code`,{children:`npm bugs`}),` 명령어로 해당 페이지를 빠르게 열 수 있습니다.`]})]}),(0,a.jsx)(n,{title:`package.json - bugs`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`// url, email 모두 사용
      					{
      						"bugs": {
      							"url" : "https://github.com/owner/project/issues",
      							"email" : "project@hostname.com"
      						}
      					}

      					// url 만 사용
      					{
      						"bugs": {
      							"url" : "https://github.com/owner/project/issues"
      						},
      						// 또는
      						"bugs": "https://github.com/owner/project/issues"
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"license"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[`배포한 패키지를 사용하는 사람이`,(0,a.jsxs)(`b`,{children:[`어떤 권한을 갖고, 어떤 제한을 따라야 하는지를 명확히 하기 위해`,(0,a.jsx)(`code`,{className:`weight-600`,children:`license`}),`를 지정해야 합니다.`]})]}),(0,a.jsxs)(`li`,{children:[`패키지의 `,(0,a.jsx)(`b`,{children:`법적 사용 조건을 명시하는 중요한 항목`}),`으로, 사용자가 자유롭게 사용할 수 있는지, 수정·재배포가 가능한지를 판단하는 기준이 됩니다.`]})]}),(0,a.jsx)(n,{title:`package.json - license`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"license": "MIT",
      						"license": "(MIT or GPL-3.0)",
      						"license": "SEE LICENSE IN LICENSE_FILENAME.txt",
      						"license": "UNLICENSED"
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"author"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[`프로젝트의 `,(0,a.jsx)(`b`,{children:`작성자 정보를 나타내는 항목`}),`으로, 한 사람만 지정할 수 있습니다.`]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`code`,{children:`name`}),`은 반드시 포함해야 하며, 선택적으로 `,(0,a.jsx)(`code`,{children:`email`}),`과 `,(0,a.jsx)(`code`,{children:`url`}),`을 함께 작성할 수 있습니다.`]})]}),(0,a.jsx)(n,{title:`package.json - author`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"author": {
      							"name": "Your Name",
      							"email": "you@example.com",
      							"url": "http://your-website.com"
      						},
      						// 또는
      						"author": "Your Name <you@example.com> (http://your-website.com)"
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"contributors"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[`프로젝트에 `,(0,a.jsx)(`strong`,{children:`직접 기여한 여러 공헌자(contributors)`}),`의 정보를 나타내는 항목입니다.`]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`b`,{children:`여러 사람을 배열 형태로 나열할 수 있으며`}),`, 각 항목은 `,(0,a.jsx)(`b`,{className:`t_blue`,children:`작성자`}),`와 마찬가지로 `,(0,a.jsx)(`code`,{children:`name`}),`, `,(0,a.jsx)(`code`,{children:`email`}),`, `,(0,a.jsx)(`code`,{children:`url`}),` 정보를 포함할 수 있습니다.`]})]}),(0,a.jsx)(n,{title:`package.json - author`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"contributors": [
      							{ "name": "Your Friend", "email": "friend@example.com", "url": "http://friends-website.com" }
      							{ "name": "Other Friend", "email": "other@example.com", "url": "http://other-website.com" }
      						],
      						// 또는
      						"contributors": [
      							"Your Friend <friend@example.com> (http://friends-website.com)",
      							"Other Friend <other@example.com> (http://other-website.com)"
      						]
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"files"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[`패키지를 배포할 때 `,(0,a.jsx)(`b`,{children:`포함할 파일이나 디렉터리를 지정하는 항목`}),`입니다.`]}),(0,a.jsxs)(`li`,{children:[`단일 파일, 특정 디렉터리, 또는 와일드카드(`,(0,a.jsx)(`code`,{children:`*`}),`)를 사용하여 `,(0,a.jsx)(`b`,{children:`조건에 맞는 여러 파일을 포함`}),`할 수 있습니다.`]}),(0,a.jsxs)(`li`,{children:[`이 항목을 사용하면, 불필요한 파일을 제외하고`,(0,a.jsx)(`b`,{children:`필요한 파일만 선택적으로 배포`}),`할 수 있어 패키지 용량을 줄이고 관리가 쉬워집니다.`]})]}),(0,a.jsx)(n,{title:`package.json - author`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"files": ["filename.js", "directory/", "glob/*.{js,json}"]
      						// 단일 파일, 특정 폴더, 기준을 충족하는 파일
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"main"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[`패키지를 불러올 때(`,(0,a.jsx)(`code`,{children:`require`}),` 또는 `,(0,a.jsx)(`code`,{children:`import`}),`)`,(0,a.jsx)(`strong`,{children:`기본적으로 참조되는 진입점 파일(모듈 ID)`}),`을 지정하는 항목입니다.`]}),(0,a.jsxs)(`li`,{children:[`일반적으로 라이브러리의 핵심 기능을 담고 있는 `,(0,a.jsx)(`b`,{children:`최상위 JS 파일 경로`}),`를 지정하며, 상대 경로가 아닌 패키지 루트 기준의 경로를 사용합니다.`]})]}),(0,a.jsx)(n,{title:`package.json - main`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"main": "filename.js"
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"bin"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[`많은 npm 패키지는 `,(0,a.jsx)(`b`,{children:`명령줄에서 실행 가능한 하나 이상의 파일`}),`을 제공합니다. npm은 이러한 CLI 도구를 매우 쉽게 구현할 수 있도록 `,(0,a.jsx)(`code`,{children:`bin`}),` 항목을 지원합니다.`]}),(0,a.jsxs)(`li`,{children:[`실제로 이 기능은 `,(0,a.jsx)(`code`,{children:`npm`}),` 자체를 설치할 때도 사용됩니다.`]}),(0,a.jsxs)(`li`,{children:[`실행 가능한 CLI 도구를 만들기 위해서는 `,(0,a.jsx)(`code`,{children:`package.json`}),`에 `,(0,a.jsx)(`code`,{children:`bin`}),` 항목을 명시해야 합니다.`]}),(0,a.jsxs)(`li`,{children:[`패키지를 설치할 때, npm은 `,(0,a.jsx)(`code`,{children:`bin`}),`에 지정된 파일에 대해 `,(0,a.jsx)(`strong`,{children:`심볼릭 링크(symlink)`}),`를 생성합니다.`,(0,a.jsxs)(`ul`,{className:`dot_lst dot_lst_inner mt_sm`,children:[(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`b`,{children:`전역 설치 시`}),` : `,(0,a.jsx)(`code`,{children:`<prefix>/bin`}),` (예: `,(0,a.jsx)(`code`,{children:`/usr/local/bin`}),`)`]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`b`,{children:`로컬 설치 시`}),` : `,(0,a.jsx)(`code`,{children:`./node_modules/.bin/`})]})]})]})]}),(0,a.jsx)(n,{title:`package.json - bin`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"bin": { "myapp": "./cli.js" }
      					}`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_ms`,children:[(0,a.jsxs)(`li`,{children:[`위 예시의 경우, 전역 설치 시 `,(0,a.jsx)(`code`,{children:`/usr/local/bin/myapp`}),`에 `,(0,a.jsx)(`code`,{children:`cli.js`}),`의 링크가 생성됩니다.`]}),(0,a.jsxs)(`li`,{children:[`이렇게 하면 사용자는 터미널에서 `,(0,a.jsx)(`code`,{children:`myapp`}),` 명령어로 `,(0,a.jsx)(`code`,{children:`cli.js`}),`를 실행할 수 있습니다.`]})]}),(0,a.jsx)(n,{title:`package.json - bin`,language:`json`,className:`uk_gist_code_box mt_m`,children:`{
      						"bin": {
      							"command-name": "bin/command-name.js",
      							"other-command": "bin/other-command"
      						}
      					}`}),(0,a.jsx)(`p`,{className:`mt_ms`,children:`하나의 패키지에 여러 CLI 명령어를 제공할 경우, 각 실행 파일에 대해 이름을 지정해 줄 수 있습니다.`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"directories"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[`CommonJS Packages 스펙에서는 `,(0,a.jsx)(`code`,{children:`"directories"`}),` 객체를 사용해 패키지 내 주요 디렉토리의 위치를 명시할 수 있습니다.`]}),(0,a.jsxs)(`li`,{children:[`npm의 `,(0,a.jsx)(`code`,{children:`package.json`}),`에서도 `,(0,a.jsx)(`code`,{children:`doc`}),`, `,(0,a.jsx)(`code`,{children:`lib`}),`, `,(0,a.jsx)(`code`,{children:`man`}),` 등의 디렉토리 구성을 확인할 수 있습니다.`]}),(0,a.jsx)(`li`,{children:`이 정보는 현재는 주로 문서화 용도로 사용되지만, 앞으로 다양한 창의적인 방법으로 활용될 가능성이 있습니다.`})]}),(0,a.jsx)(n,{title:`package.json - directories`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"directories": {
      							"lib": "path/to/lib/",
      							// 모듈이나 패키지에서 사용하는 라이브러리(코드) 파일들이 위치한 경로입니다.
      							// 특별한 동작이 있는 건 아니고, 메타데이터 용도로 경로를 알려주는 역할을 합니다.
      							&nbsp;
      							"bin": "path/to/bin/",
      							// 실행 파일들이 위치하는 경로입니다.
      							// directories.bin에 경로를 지정하면 해당 폴더 내 모든 파일이 실행 파일로 간주되어 추가됩니다.
      							// 그런데 만약 bin과 directories.bin 둘 다 지정하면 충돌이 발생해 오류가 납니다.
      							// 특정 실행 파일들만 개별적으로 지정하려면 bin을, 전체 폴더 내 모든 파일을 실행 파일로 지정하려면 directories.bin을 사용합니다.
      							&nbsp;
      							"man": "path/to/man/",
      							// man 페이지(도움말 문서)들이 위치하는 폴더 경로입니다.
      							// 여러 개의 man 문서 경로를 배열로 만드는 것보다 이 방법이 간편합니다.
      							&nbsp;
      							"doc": "path/to/doc/",
      							// 문서화된 마크다운(md) 파일들이 위치하는 폴더 경로입니다.
      							&nbsp;
      							"example": "path/to/example/"
      							// 예제 파일들이 위치하는 경로입니다.
      						}
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"repository"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[`프로젝트의 `,(0,a.jsx)(`b`,{children:`소스 코드가 저장된 저장소 정보`}),`를 명시합니다.`]}),(0,a.jsxs)(`li`,{children:[`주로 Git 저장소(GitHub, GitLab 등)를 지정하며, `,(0,a.jsx)(`b`,{children:`패키지에 기여하고자 하는 사람들에게 유용한 정보`}),`가 됩니다.`]}),(0,a.jsxs)(`li`,{children:[`만약 GitHub 저장소로 설정되어 있다면,`,(0,a.jsx)(`code`,{children:`npm docs`}),` 명령어를 통해 해당 GitHub 페이지로 쉽게 접근할 수 있습니다.`]})]}),(0,a.jsx)(n,{title:`package.json - repository`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"type": "git",
          				"url": "https://github.com/user/project-name.git"
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"scripts"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`code`,{children:`"scripts"`}),`는 빌드, 테스트, 개발 서버 실행 등과 같은 `,(0,a.jsx)(`b`,{children:`프로젝트 관련 작업을 자동화`}),`할 수 있는 항목입니다.`]}),(0,a.jsxs)(`li`,{children:[`자주 사용하는 명령어를 미리 정의해 두면, `,(0,a.jsx)(`code`,{children:`npm run`}),` 명령으로 `,(0,a.jsx)(`b`,{children:`간편하게 실행`}),`할 수 있습니다.`]})]}),(0,a.jsx)(n,{title:`package.json - scripts`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"scripts": {
      							"dev": "gulp dev",
      							"build": "gulp build",
      							"deploy": "gulp deploy"
      						}
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"config"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`code`,{children:`"config"`}),`는 `,(0,a.jsx)(`b`,{children:`npm 스크립트에서 사용할 수 있는 구성 값이나 매개변수`}),`를 정의하는 데 사용됩니다.`]}),(0,a.jsxs)(`li`,{children:[`이 항목에 정의된 값은 `,(0,a.jsx)(`code`,{children:`npm_package_config_키이름`}),` 형식의 환경 변수로 스크립트 내에서 참조할 수 있습니다.`]})]}),(0,a.jsx)(n,{title:`package.json - config`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"config": {
      							"port": "8080"
      						}
      					}`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[`아래와 같이 설정하면, `,(0,a.jsx)(`code`,{children:`npm run start`}),` 명령어 실행 시 `,(0,a.jsx)(`code`,{children:`--port=8080`}),`이 자동으로 전달됩니다.`]}),(0,a.jsx)(n,{title:`package.json - config`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"config": {
      							"port": "8080"
      						},
      						"scripts": {
      							"start": "node server.js --port=$npm_package_config_port"
      						}
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"dependencies"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`strong`,{children:`프로젝트 실행에 필요한 외부 패키지(라이브러리)`}),`를 정의하는 부분입니다.`]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`code`,{children:`npm install`}),` 또는 `,(0,a.jsx)(`code`,{children:`yarn add`}),` 명령어로 패키지를 설치하면, 해당 패키지가 자동으로 이 목록에 추가됩니다.`]}),(0,a.jsxs)(`li`,{children:[`여기에 등록된 패키지는 다른 사람이 프로젝트를 설치할 때 자동으로 함께 설치되어,`,(0,a.jsx)(`b`,{children:`일관된 실행 환경을 보장`}),`합니다.`]})]}),(0,a.jsx)(i,{className:`terminal_code_box mt_ms`,children:`npm install module_name --save  // 로컬 설치의 경우 --save는 아래 처럼 생략 가능합니다.
      					// or
      					npm install module_name`}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[`예를 들어, `,(0,a.jsxs)(`mark`,{children:[(0,a.jsx)(`code`,{children:`npm`}),`으로 `,(0,a.jsx)(`b`,{children:`uxkm-sass`}),`라는 패키지를 설치하면`]}),` 아래처럼 `,(0,a.jsx)(`code`,{className:`t_blue`,children:`dependencies`}),`에 `,(0,a.jsx)(`code`,{children:`uxkm-sass`}),`가 등록됩니다.`]}),(0,a.jsx)(n,{title:`package.json - dependencies`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"dependencies": {
      							"uxkm-sass": "^1.0.2"
      							// 패키지명 : 설치된 버전
      						}
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"devDependencies"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`b`,{children:`프로젝트를 개발하거나 테스트할 때만 필요한 패키지`}),`를 정의하는 항목입니다.`]}),(0,a.jsx)(`li`,{children:`예를 들어, 코드 빌드 도구, 테스트 프레임워크, 린터(linter)와 같은 도구들이 여기에 포함됩니다.`}),(0,a.jsxs)(`li`,{children:[`이 항목에 포함된 패키지는 `,(0,a.jsx)(`code`,{children:`npm install --production`}),` 명령으로 설치할 경우 생략되며, 프로덕션(배포) 환경에서는 설치되지 않습니다.`]})]}),(0,a.jsx)(i,{className:`terminal_code_box mt_ms`,children:`npm install module_name --save-dev  // --save-dev는 아래처럼 -D로 줄여 쓰기가 가능합니다.
      					// or
      					npm install module_name -D`}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[`예를 들어, `,(0,a.jsxs)(`mark`,{children:[(0,a.jsx)(`code`,{children:`npm`}),`으로 `,(0,a.jsx)(`b`,{children:`uxkm-gulp`}),`라는 패키지를 설치하면`]}),` 아래처럼 `,(0,a.jsx)(`code`,{className:`t_blue`,children:`devDependencies`}),`에 `,(0,a.jsx)(`code`,{children:`uxkm-gulp`}),`가 등록됩니다.`]}),(0,a.jsx)(n,{title:`package.json - devDependencies`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"devDependencies": {
      							"uxkm-gulp": "^1.0.2"
      							// 패키지명 : 설치된 버전
      						}
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"engine"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`b`,{children:`패키지나 애플리케이션이 작동하기 위해 필요한 Node.js 또는 npm 등의 버전을 지정`}),`하는 항목입니다.`]}),(0,a.jsxs)(`li`,{children:[`이를 통해 `,(0,a.jsx)(`b`,{children:`호환되지 않는 환경에서의 실행을 방지`}),`하고, 예상된 버전에서만 작동하도록 유도할 수 있습니다.`]}),(0,a.jsx)(`li`,{children:`일부 패키지 매니저는 지정된 엔진 버전과 현재 환경이 맞지 않으면 경고를 출력하거나 설치를 막기도 합니다.`})]}),(0,a.jsx)(n,{title:`package.json - engine`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"engines": {
      							"node": ">= 18.18.0", // 예) Node.js 18 버전 이상 권장
      							"npm": ">= 9.8.1",    // 예) npm 9 버전 이상 권장
      						}
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`"private"`}),(0,a.jsxs)(`ul`,{className:`dot_lst mt_s`,children:[(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`code`,{children:`"private": true`}),`로 설정하면, 해당 패키지는 `,(0,a.jsx)(`b`,{children:`npm과 같은 공개 패키지 저장소에 게시할 수 없도록 막아줍니다.`})]}),(0,a.jsxs)(`li`,{children:[`개인용 프로젝트나 내부용 패키지를 `,(0,a.jsx)(`b`,{children:`실수로 외부에 배포하는 것을 방지`}),`하는 용도로 사용됩니다.`]}),(0,a.jsxs)(`li`,{children:[`또한, 이 설정이 된 패키지는 `,(0,a.jsx)(`code`,{children:`npm publish`}),` 명령 실행 시 오류가 발생하여 게시되지 않습니다.`]})]}),(0,a.jsx)(n,{title:`package.json - private`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      						"private": true
      					}`})]})]}),(0,a.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,a.jsx)(`img`,{src:`${t.GULP}/02_gulp_03.png`,alt:`package.json 생성`}),(0,a.jsx)(`figcaption`,{children:`package.json 생성`})]})]})}export{o as default};