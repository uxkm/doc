import{n as e}from"./editor-vendor-B43TTzmv.js";import{t}from"./path-CX4eWZRa.js";import{t as n}from"./CodeBlock-BHW3gD7l.js";import{t as r}from"./useGulpPageMeta-4G9ekGu7.js";import{t as i}from"./TerminalBlock-jMk5cv4D.js";var a=e();function o(){return r(),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,a.jsx)(`h2`,{className:`sound_only`,children:`요약 설명`}),(0,a.jsxs)(`p`,{children:[`현재 Gulp는 5버전까지 출시되었지만, `,(0,a.jsxs)(`b`,{children:[`UXKM에서는 안정성이 검증된 `,(0,a.jsx)(`i`,{className:`underline`,children:`Gulp 4버전으로 커리큘럼을 진행`}),`합니다.`]})]}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[(0,a.jsx)(`b`,{children:`이 페이지부터 본격적으로 Gulp 세팅을 시작합니다.`}),(0,a.jsx)(`br`,{}),`Gulp를 전역(global)과 지역(local)에 설치하고, 프로젝트 디렉터리 구조와 기초 파일을 생성합니다.`]})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`2.4.1. gulp-cli 전역(global) 설치`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[(0,a.jsx)(`b`,{className:`t_blue`,children:`gulp-cli`}),`는 `,(0,a.jsx)(`i`,{className:`t_blue`,children:`Gulp`}),`를 `,(0,a.jsx)(`i`,{className:`terminal`,children:`터미널`}),`에서 편리하게 실행할 수 있게 해주는 유틸리티 도구입니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`i`,{className:`terminal`,children:`터미널`}),`에서 아래 명령어를 입력해서 `,(0,a.jsx)(`b`,{className:`t_blue`,children:`gulp-cli`}),`를 `,(0,a.jsx)(`i`,{className:`t_black`,children:`전역(global) NPM Package에 설치합니다.`}),(0,a.jsx)(`br`,{}),`(`,(0,a.jsxs)(`mark`,{children:[(0,a.jsx)(`b`,{className:`t_blue`,children:`gulp-cli`}),` 설치는 해당 PC에서 Gulp를 사용한 적이 없을 경우 최초 한 번만 진행하면 됩니다.`]}),`)`]}),(0,a.jsx)(i,{className:`terminal_code_box mt_ms`,children:`npm install gulp-cli -g   // gulp-cli 전역 설치 (입력 후 엔터)`}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsx)(`b`,{className:`t_blue`,children:`위 명령어 입력 예시`})}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_scaffolding_cmd_ex1.png`,alt:`명령어 입력 예시`})})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`2.4.2. gulp 설치`}),(0,a.jsx)(`p`,{className:`mt_ml notice_blue`,children:`현재 Gulp는 5버전까지 출시되었지만, UXKM에서는 안정성이 검증된 4버전으로 커리큘럼을 진행합니다.`}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[(0,a.jsx)(`b`,{className:`t_blue`,children:`gulp`}),`는 `,(0,a.jsx)(`i`,{className:`t_blue`,children:`gulp-cli`}),`와 다르게 전역으로 설치하지 않고,`,(0,a.jsx)(`b`,{className:`folder`,children:`gulp_setting`}),` 폴더에만 설치하면 됩니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`code`,{children:`--save-dev(-D)`}),` 옵션을 추가하는 이유는`,(0,a.jsxs)(`mark`,{children:[(0,a.jsx)(`b`,{className:`t_blue`,children:`gulp`}),`가 개발 단계에서만 필요한 패키지`]}),`이기 때문입니다.`]}),(0,a.jsx)(i,{className:`terminal_code_box mt_ms`,children:`npm install gulp@4.0.2 -D   // 해당 폴더에 Gulp 설치`}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[`설치가 완료되면 `,(0,a.jsx)(`b`,{className:`folder`,children:`gulp_setting`}),` 폴더 하위로 `,(0,a.jsx)(`b`,{className:`folder t_blue`,children:`node_modules`}),` 폴더와`,(0,a.jsx)(`b`,{className:`filename t_blue`,children:`package-lock.json`}),` 파일이 생성됩니다.`]}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_scaffolding_gulp_dev1.png`,alt:`프로젝트 폴더에 Gulp 설치`})}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[`또한, `,(0,a.jsx)(`b`,{className:`filename t_blue`,children:`package.json`}),`의 `,(0,a.jsx)(`code`,{className:`t_blue`,children:`devDependencies`}),` 부분에 방금 설치한 `,(0,a.jsx)(`b`,{className:`t_blue`,children:`gulp`}),`가 업데이트됩니다.`]}),(0,a.jsx)(n,{title:`package.json devDependencies`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      					"devDependencies": {
      						"gulp": "^4.0.2"
      					}
      				}`})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`2.4.3. 작업 폴더 생성 및 기초 파일 세팅`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[(0,a.jsx)(`b`,{className:`folder`,children:`gulp_setting`}),` 폴더 하위로 `,(0,a.jsx)(`b`,{className:`folder t_blue`,children:`src`}),` 폴더를 생성합니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`b`,{className:`folder t_blue`,children:`src`}),` 폴더는 실제 작업 파일이 위치하는 폴더입니다. (html, css, js, images 등)`,(0,a.jsx)(`br`,{}),(0,a.jsxs)(`b`,{className:`t_black underline`,children:[(0,a.jsx)(`b`,{className:`folder t_blue`,children:`src 폴더`}),`에서 코딩을 하면, `,(0,a.jsx)(`i`,{className:`t_blue`,children:`gulp`}),`는 `,(0,a.jsx)(`b`,{className:`folder t_blue`,children:`src 폴더`}),`의 작업 파일을`,(0,a.jsx)(`b`,{className:`folder t_blue`,children:`dist 폴더`}),`로 빌드하게 됩니다.`]})]}),(0,a.jsx)(`div`,{className:`mt_s warning block_warning t_blue`,children:(0,a.jsxs)(`p`,{children:[`'`,(0,a.jsx)(`b`,{children:`dist`}),`'라는 폴더명은 'distribute(배포)'의 약자이며 고정된 이름이 아닙니다. 세팅하면서 자유롭게 이름을 지정할 수 있습니다.`,(0,a.jsx)(`br`,{}),`다만 대부분의 환경(Gulp, Vue, React 등)에서 '`,(0,a.jsx)(`b`,{children:`dist`}),`'로 사용하기에 UXKM에서도 '`,(0,a.jsx)(`b`,{children:`dist`}),`'로 진행합니다.`,(0,a.jsx)(`br`,{})]})}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`아래 구조대로 폴더와 파일을 생성한 후 각각의 `,(0,a.jsx)(`i`,{className:`filename`,children:`파일(scss, js, html)`}),`에 아래의 `,(0,a.jsx)(`i`,{className:`icon_code`,children:`코드`}),`를 복사하세요.`]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`폴더 구조 및 파일 생성`}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_folder.png`,alt:`폴더 구조 및 파일 생성`})}),(0,a.jsx)(n,{filename:`Copy folders and file names`,title:`src folder`,language:`scss`,className:`uk_gist_code_box mt_ms`,children:`/* 폴더명, 파일명을 복사하여 세팅하세요. */
      					gulp_setting __folder_name__  // 각자 세팅한 폴더명
      						src __folder_name__
      							assets __folder_name__
      								css __folder_name__
      									style.scss __file_name__
      									_reset.scss __file_name__
      									_variable.scss __file_name__
      								images __folder_name__
      									visual.png __file_name__  // 'images 파일 세팅'에서 다운로드
      								js __folder_name__
      									main.js __file_name__
      									util.js __file_name__
      							html __folder_name__
      								_templates __folder_name__
      								index.html __file_name__`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`css 파일 세팅`}),(0,a.jsx)(n,{filename:`_reset.scss`,title:`_reset.scss`,language:`scss`,className:`uk_gist_code_box mt_ms`,children:`html, body, div, span, applet, object, iframe,
      					h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      					a, abbr, acronym, address, big, cite, code,
      					del, dfn, em, img, ins, kbd, q, s, samp,
      					small, strike, strong, sub, sup, tt, var,
      					b, u, i, center,
      					dl, dt, dd, ol, ul, li,
      					fieldset, form, label, legend,
      					table, caption, tbody, tfoot, thead, tr, th, td,
      					article, aside, canvas, details, embed,
      					figure, figcaption, footer, header, hgroup,
      					menu, nav, output, ruby, section, summary,
      					time, mark, audio, video {
      						margin: 0;
      						padding: 0;
      						border: 0;
      						font-size: 100%;
      						font: inherit;
      						vertical-align: baseline;
      					}
      					/* HTML5 display-role reset for older browsers */
      					article, aside, details, figcaption, figure,
      					footer, header, hgroup, menu, nav, section {
      						display: block;
      					}
      					body {
      						line-height: 1;
      					}
      					ol, ul {
      						list-style: none;
      					}
      					blockquote, q {
      						quotes: none;
      					}
      					blockquote:before, blockquote:after,
      					q:before, q:after {
      						content: '';
      						content: none;
      					}
      					table {
      						border-collapse: collapse;
      						border-spacing: 0;
      					}`}),(0,a.jsx)(n,{filename:`_variable.scss`,title:`_variable.scss`,language:`scss`,className:`uk_gist_code_box mt_ms`,children:`$bg-color: #eee;
      					$font-color: #006be2;`}),(0,a.jsx)(n,{filename:`style.scss`,title:`style.scss`,language:`scss`,className:`uk_gist_code_box mt_ms`,children:`@charset "utf-8";
      					@import '_reset';
      					@import '_variable';

      					html {
      						background-color: $bg-color;
      					}

      					.wrap {
      						margin:0 20px;

      						.header {
      							display: flex;
      							align-items: center;
      							justify-content: space-between;
      							padding: 15px;
      							background-color: #ccc;
      						}

      						.container {
      							h1 {
      								margin-top: 20px;
      								font-size: 26px;
      								font-weight: bolder;
      								color: $font-color;
      							}
      							.image_box {
      								overflow:hidden;
      								display: flex;
      								flex-direction: column;
      								margin-top: 20px;
      								padding: 10px;
      								background-color: #fff;
      								box-shadow: 0 0 10px rgba(0,0,0,.1);
      								border-radius: 10px;
      							}
      						}

      						.footer {
      							margin-top: 20px;
      						}
      					}`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`images 파일 세팅`}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[`아래 링크를 클릭하여 이미지를 다운로드하세요.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`a`,{href:`${t.GULP}/visual.png`,className:`underline`,download:!0,children:(0,a.jsx)(`b`,{className:`t_blue`,children:`visual.png 다운로드`})})]})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`js 파일 세팅`}),(0,a.jsx)(n,{filename:`util.js`,title:`util.js`,language:`javascript`,className:`uk_gist_code_box mt_ms`,children:`export const random = max => Math.floor(Math.random() * max);`}),(0,a.jsx)(n,{filename:`main.js`,title:`main.js`,language:`javascript`,className:`uk_gist_code_box mt_ms`,children:`import {random} from './util';

      					const randomOne = random(10);
      					const randomTwo = random(20);

      					console.log( \`\${randomOne} \${randomTwo}\` );`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`html 파일 세팅`}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[`HTML 파일은 '`,(0,a.jsx)(`a`,{href:`/buildSystem/gulp/04-gulp_njk/01-njk_setting`,className:`underline weight-bold t_black`,children:`Gulp NJK 세팅`}),`' 페이지에서 진행합니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`a`,{href:`/buildSystem/gulp/04-gulp_njk/01-njk_setting`,className:`box_link mt_s`,children:`Gulp NJK 세팅 바로가기`})]})]})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`2.4.4. gulpfile.js 생성`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[(0,a.jsx)(`i`,{className:`filename t_blue`,children:`gulpfile.js`}),`는 `,(0,a.jsx)(`b`,{children:`Gulp의 설정 파일`}),`로,`,(0,a.jsx)(`b`,{children:`Gulp가 수행해야 할 모든 작업을 정의하는 역할`}),`을 합니다.`,(0,a.jsx)(`br`,{}),`이 파일에서는 `,(0,a.jsx)(`code`,{className:`t_blue`,children:`npm`}),`으로 설치한 각 패키지의 역할을 선언하여,`,(0,a.jsxs)(`b`,{children:[`예를 들어 `,(0,a.jsx)(`code`,{className:`t_blue`,children:`SCSS`}),`나 `,(0,a.jsx)(`code`,{className:`t_blue`,children:`LESS`}),`를 `,(0,a.jsx)(`code`,{className:`t_blue`,children:`CSS`}),`로 변환`]}),`하거나,`,(0,a.jsxs)(`b`,{children:[(0,a.jsx)(`code`,{className:`t_blue`,children:`ES6`}),` 문법을 일반 JavaScript 문법으로 변환 및 압축(minify)`]}),`할 수 있습니다.`,(0,a.jsx)(`br`,{}),`또한 `,(0,a.jsx)(`b`,{children:`이미지 파일을 무손실 압축하여 전체 이미지 용량을 줄이는`}),` 등의 작업도 가능합니다.`,(0,a.jsx)(`br`,{}),`위에서 언급한 내용은 일부에 불과하며, `,(0,a.jsx)(`b`,{children:`실제로는 더욱 다양한 편리한 작업들을 정의`}),`할 수 있습니다.`]}),(0,a.jsx)(i,{className:`terminal_code_box mt_ms`,children:`npx -p touch nodetouch gulpfile.js`}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[(0,a.jsx)(`i`,{className:`terminal`,children:`터미널`}),`에서 위 명령을 실행하면 아래처럼 `,(0,a.jsx)(`b`,{className:`filename t_blue`,children:`gulpfile.js`}),`가 생성됩니다.`]}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_gulpfile.png`,alt:`gulpfile.js 생성`})}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[`생성된 `,(0,a.jsx)(`b`,{className:`filename t_blue`,children:`gulpfile.js`}),`에 아래 코드를 붙여넣습니다.`]}),(0,a.jsx)(n,{filename:`gulpfile.js`,title:`gulpfile.js test`,language:`javascript`,className:`uk_gist_code_box mt_ms`,children:`const gulp = require('gulp');

      				gulp.task('dev', function(){
      					return console.log('gulp dev test !!!');
      				});

      				// 위 코드는 테스트용 코드로 곧 삭제될 코드입니다.`})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`2.4.5. package.json에 gulp 실행 명령어 추가`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[(0,a.jsx)(`i`,{className:`terminal`,children:`터미널`}),`에서 `,(0,a.jsx)(`i`,{className:`t_blue`,children:`Gulp`}),`를 실행하기 위해 앞서 `,(0,a.jsx)(`b`,{className:`t_blue`,children:`gulp-cli`}),`를 전역(global)로 설치했습니다.`,(0,a.jsx)(`br`,{}),`이제는 `,(0,a.jsx)(`i`,{className:`t_blue`,children:`Gulp`}),` 실행 명령어를 `,(0,a.jsx)(`b`,{className:`filename t_blue`,children:`package.json`}),`의 `,(0,a.jsx)(`code`,{children:`scripts`}),`에 추가합니다.`]}),(0,a.jsx)(n,{filename:`package.json script`,title:`package.json script`,language:`json`,className:`uk_gist_code_box mt_ms`,children:`{
      					"scripts": {
      						"test": "echo \\"Error: no test specified\\" && exit 1", // 이 줄은 삭제합니다.
      						"dev": "gulp dev",     // 추가
      						"build": "gulp build"  // 추가
      					},
      				}`}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[(0,a.jsx)(`i`,{className:`terminal`,children:`터미널`}),`에서 방금 추가한 `,(0,a.jsx)(`code`,{children:`gulp dev`}),` 명령을 입력한 후, 엔터 키를 눌러 실행합니다.`]}),(0,a.jsx)(i,{className:`terminal_code_box mt_ms`,children:`gulp dev`}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_gulpfile_test.png`,alt:`gulpfile.js 테스트`})}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[(0,a.jsx)(`b`,{className:`filename t_blue`,children:`gulpfile.js`}),`가 실행되고,`,(0,a.jsx)(`i`,{className:`terminal`,children:`터미널`}),`에 `,(0,a.jsx)(`mark`,{children:(0,a.jsx)(`code`,{children:`gulp dev test !!!`})}),` 텍스트가 출력이 된다면 여기까지의 세팅이 성공적으로 진행된 것입니다.`,(0,a.jsx)(`br`,{}),`다만, `,(0,a.jsx)(`b`,{className:`t_red`,children:`빨간색 에러 메시지`}),`는 `,(0,a.jsx)(`code`,{children:`dev`}),`라는 `,(0,a.jsx)(`b`,{children:`task`}),`에 대한 구체적인 설정이나`,(0,a.jsx)(`b`,{className:`filename t_blue`,children:`gulpfile.js`}),` 내 `,(0,a.jsx)(`b`,{children:`전체적인 작업 정의가 아직 이루어지지 않았기 때문이므로, 정상적인 현상입니다.`})]})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`2.4.6. .gitignore 파일 생성`}),(0,a.jsxs)(`blockquote`,{className:`uk_note mt_m`,role:`note`,children:[(0,a.jsx)(`h2`,{className:`sound_only`,children:`요약 설명`}),(0,a.jsxs)(`p`,{children:[(0,a.jsx)(`b`,{children:`.gitignore`}),`는 `,(0,a.jsx)(`b`,{children:`Git 버전 관리 시스템에서 특정 파일이나 디렉터리를 추적하지 않도록 설정하는 파일입니다.`}),(0,a.jsx)(`br`,{}),`프로젝트를 Git으로 관리할 때, 빌드 결과물, 개인 설정 파일, 로그 파일 등 버전 관리에 포함할 필요가 없는 파일들이 있을 수 있습니다. 이 경우 `,(0,a.jsx)(`b`,{className:`filename`,children:`.gitignore`}),` 파일에 해당 항목을 명시하여 Git이 이러한 파일을 무시하도록 할 수 있습니다.`,(0,a.jsx)(`br`,{}),`(`,(0,a.jsxs)(`i`,{className:`underline`,children:[(0,a.jsx)(`b`,{className:`filename`,children:`.gitignore`}),` 파일은 확장자가 없습니다.`]}),`)`]}),(0,a.jsxs)(`div`,{className:`mt_ms`,children:[`예를 들면,`,(0,a.jsxs)(`ul`,{className:`dot_lst`,children:[(0,a.jsx)(`li`,{children:`NodeJS-Express로 개발할 때 npm module`}),(0,a.jsx)(`li`,{children:`Java 컴파일된(.class) 파일`}),(0,a.jsx)(`li`,{children:`AWS 비밀 키, JWT 비밀 키 등등이 있습니다.`})]})]}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[`npm 모듈은 용량이 크고, 일반적으로 `,(0,a.jsx)(`i`,{className:`filename`,children:`package.json`}),`과`,(0,a.jsx)(`i`,{className:`filename`,children:`package-lock.json`}),` 파일을 통해 의존성을 관리할 수 있기 때문에, Git 저장소에는 포함하지 않고 프로젝트를 클론한 후 `,(0,a.jsx)(`code`,{children:`npm install`}),` 명령어로 필요한 모듈을 설치하는 것이 더 효율적입니다.`,(0,a.jsx)(`br`,{}),`또한, AWS 키나 JWT 비밀 키 같은 민감한 정보는 GitHub와 같은 공개 저장소에 노출될 경우 악용될 위험이 있으므로 절대 업로드해서는 안 됩니다.`,(0,a.jsx)(`br`,{}),`이러한 민감 정보는 `,(0,a.jsx)(`i`,{className:`filename`,children:`.env`}),` 파일 등 외부 설정 파일로 분리하고, 해당 파일은 `,(0,a.jsx)(`i`,{className:`filename`,children:`.gitignore`}),`에 추가하여 버전 관리에서 제외하는 것이 안전합니다.`]})]}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[`아직 Git 저장소를 활용하여 Gulp 세팅을 진행하고 있지는 않지만, 추후 버전 관리를 위해 반드시 알아두어야 할 내용이므로 기초 세팅 단계에서`,(0,a.jsx)(`b`,{className:`filename t_blue`,children:`.gitignore`}),` 파일을 세팅합니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`b`,{className:`folder`,children:`gulp_setting`}),` 폴더 하위로 `,(0,a.jsx)(`b`,{className:`filename t_blue`,children:`.gitignore`}),` 파일을 생성합니다.`]}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_gitignore.png`,alt:`.gitignore 파일 생성`})}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[`생성된 `,(0,a.jsx)(`b`,{className:`filename t_blue`,children:`.gitignore`}),` 파일에 아래의 코드를 적용합니다. (주석은 제외합니다.)`]}),(0,a.jsx)(n,{filename:`.gitignore`,title:`.gitignore`,language:`javascript`,className:`uk_gist_code_box mt_ms`,children:`/.idea             # Jet Brains 계열 에디터의 설정 폴더
      				/node_modules      # 용량이 큰 npm module (패키지 설치기 자동 생성)
      				/.publish          # 배포(deploy) 단계에서 임시로 사용될 폴더
      				/.git              # git 설정 폴더 (git 세팅 시 자동 생성)
      				/dist              # 컴파일 결과물 폴더
      				package-lock.json`})]}),(0,a.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,a.jsx)(`img`,{src:`${t.GULP}/02_gulp_04.png`,alt:`Gulp 기초 세팅`}),(0,a.jsx)(`figcaption`,{children:`Gulp 기초 세팅`})]})]})}export{o as default};