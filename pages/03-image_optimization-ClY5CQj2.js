import{n as e}from"./editor-vendor-B43TTzmv.js";import{t}from"./path-CX4eWZRa.js";import{t as n}from"./CodeBlock-DQqduuZ6.js";import{t as r}from"./useGulpPageMeta-CFU50P7p.js";import{t as i}from"./TerminalBlock-jMk5cv4D.js";/* empty css                              */var a=e();function o(){return r(),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`blockquote`,{className:`uk_note mt_xxl`,role:`note`,children:[(0,a.jsx)(`h2`,{className:`sound_only`,children:`요약 설명`}),(0,a.jsxs)(`p`,{children:[`이미지 최적화는 Gulp 작업뿐만 아니라 모든 웹 및 모바일 환경에서 권장되는 작업으로, 성능 향상에 도움이 됩니다.`,(0,a.jsx)(`br`,{}),`Gulp를 사용하면 더 편리하게 이미지 최적화 환경을 설정할 수 있습니다.`]})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`6.3.1. 이미지 최적화가 필요한 이유`}),(0,a.jsxs)(`ol`,{className:`ol_lst info_lst gap-column-important-ms mt_m`,children:[(0,a.jsxs)(`li`,{className:`t_black_before weight-600-before`,children:[(0,a.jsx)(`strong`,{children:`로딩 속도 개선`}),(0,a.jsx)(`p`,{children:`최적화되지 않은 이미지는 파일 크기가 크기 때문에 웹 페이지의 로딩 속도를 늦출 수 있습니다. 이미지 최적화를 통해 파일 크기를 줄여 더 빠른 로딩을 구현할 수 있습니다.`})]}),(0,a.jsxs)(`li`,{className:`t_black_before weight-600-before`,children:[(0,a.jsx)(`strong`,{children:`대역폭 절약`}),(0,a.jsx)(`p`,{children:`이미지 최적화는 파일 크기를 감소시키므로, 사용자가 데이터를 다운로드하는 데 필요한 대역폭을 절약할 수 있습니다. 특히 모바일 사용자와 저속 인터넷 연결을 갖고 있는 사용자들에게 도움이 됩니다.`})]}),(0,a.jsxs)(`li`,{className:`t_black_before weight-600-before`,children:[(0,a.jsx)(`strong`,{children:`검색 엔진 최적화 (SEO)`}),(0,a.jsx)(`p`,{children:`웹 페이지의 로딩 속도는 검색 엔진 최적화에도 영향을 미칩니다. 최적화된 이미지를 사용하면 검색 엔진에서 더 긍정적으로 평가할 수 있습니다.`})]}),(0,a.jsxs)(`li`,{className:`t_black_before weight-600-before`,children:[(0,a.jsx)(`strong`,{children:`사용자 경험 향상`}),(0,a.jsx)(`p`,{children:`이미지 최적화를 통해 웹 페이지의 성능이 향상되면 사용자 경험이 개선됩니다. 빠른 로딩 이미지는 사용자가 더 빨리 콘텐츠를 볼 수 있도록 도와줍니다.`})]})]})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`6.3.2. 패키지 설치`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[(0,a.jsx)(`b`,{className:`terminal`,children:`터미널`}),`에서 아래 명령을 실행하여 `,(0,a.jsx)(`mark`,{children:(0,a.jsx)(`code`,{children:`gulp-image`})}),` 패키지를 설치합니다.`]}),(0,a.jsx)(i,{className:`terminal_code_box mt_m`,children:`npm install gulp-imagemin@7.1.0 -D  // 이미지 최적화를 위한 패키지
      				npm install gulp-newer -D           // 변경된 파일만 파이프라인 통과, 변경되지 않은 파일은 건너뛰기

      				// shorthand
      				npm i gulp-imagemin@7.1.0 gulp-newer -D`}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`gulp-imagemin`}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[(0,a.jsx)(`code`,{className:`t_blue`,children:`gulp-imagemin`}),`은 `,(0,a.jsx)(`b`,{children:`Gulp를 사용하여 이미지 최적화를 수행하는 플러그인`}),`으로,`,(0,a.jsx)(`b`,{children:`다양한 이미지 형식을 지원`}),`하고 `,(0,a.jsx)(`b`,{children:`Gulp의 파이프라인을 활용하여 이미지 최적화 작업을 자동화`}),`할 수 있습니다.`]}),(0,a.jsxs)(`ul`,{className:`dot_lst indent_small mt_sm`,children:[(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`b`,{children:`이미지 최적화`}),`: `,(0,a.jsx)(`code`,{className:`t_blue`,children:`gulp-imagemin`}),`은 `,(0,a.jsx)(`b`,{children:`다양한 이미지 최적화 도구 및 알고리즘을 사용하여 이미지를 압축하고 최적화`}),`합니다.`]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`b`,{children:`다양한 이미지 형식 지원`}),`: `,(0,a.jsx)(`b`,{children:`JPEG, PNG, GIF, SVG 등 다양한 이미지 형식을 지원`}),`하며, 각 형식에 대한 최적화를 수행할 수 있습니다.`]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`b`,{children:`Gulp 파이프라인 통합`}),`: `,(0,a.jsx)(`b`,{children:`Gulp의 파이프라인을 활용하여 이미지 최적화 작업을 다른 Gulp 작업과 연결하여 자동화`}),`할 수 있습니다.`]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`b`,{children:`옵션 설정`}),`: `,(0,a.jsx)(`b`,{children:`최적화 옵션을 설정하여 이미지 처리의 세부적인 동작을 조정`}),`할 수 있습니다.`]})]})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`gulp-newer`}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[(0,a.jsx)(`code`,{className:`t_blue`,children:`gulp-newer`}),`는 `,(0,a.jsx)(`b`,{children:`변경된 파일만을 필터링하여 통과시키는 Gulp 플러그인`}),`입니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`b`,{children:`변경된 이미지 파일만 최적화하여 전체 이미지를 다시 처리하지 않아도 되므로 빌드 시간을 단축`}),`할 수 있습니다.`]}),(0,a.jsxs)(`ul`,{className:`dot_lst indent_small mt_sm`,children:[(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`b`,{children:`변경된 파일만 전달`}),`: `,(0,a.jsx)(`b`,{children:`대상 폴더에 있는 파일을 기준으로 소스 파일과 대상 파일을 비교`}),`합니다. `,(0,a.jsx)(`b`,{children:`소스 파일이 대상 파일보다 최신인 경우에만 해당 파일을 통과`}),`시킵니다.`]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`b`,{children:`변경 감지`}),`: `,(0,a.jsx)(`b`,{children:`파일의 수정 시간을 기준으로 변경 여부를 감지`}),`합니다. `,(0,a.jsx)(`b`,{children:`이전 실행에서 생성된 대상 파일과 수정된 소스 파일을 비교하여 변경된 파일만을 선택`}),`합니다.`]}),(0,a.jsxs)(`li`,{children:[(0,a.jsx)(`b`,{children:`빌드 최적화`}),`: 주로 `,(0,a.jsx)(`b`,{children:`이미지 최적화나 파일 복사와 같은 작업에서 사용되어 변경된 파일만을 선택하여 처리함으로써 빌드 시간을 최적화`}),`합니다.`]})]})]})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn t_red`,children:`6.3.3. gulpfile.babel.js 세팅 방향 선택`}),(0,a.jsx)(`p`,{className:`mt_ml notice_red`,children:`중요합니다!`}),(0,a.jsxs)(`p`,{className:`mt_sm`,children:[(0,a.jsx)(`b`,{className:`underline`,children:`이미지는 웹 사이트 대부분의 용량을 차지합니다.`}),(0,a.jsx)(`br`,{}),`본 커리큘럼에서는 하나의 이미지만 사용하기 때문에 큰 문제가 되지 않지만, 실제 웹사이트에서는 이미지 총 용량이 2~5MB를 넘는 경우가 흔합니다.`,(0,a.jsx)(`br`,{}),`이미지가 많고 용량이 클 경우, `,(0,a.jsx)(`b`,{children:`이미지 최적화 작업으로 인해 Gulp의 초기 빌드 속도가 느려질 수 있습니다.`})]}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`그래서 이번엔 두 가지 방식으로 `,(0,a.jsx)(`b`,{className:`filename`,children:`gulpfile.babel.js`}),`를 세팅합니다.`]}),(0,a.jsxs)(`ol`,{className:`ol_lst indent`,children:[(0,a.jsxs)(`li`,{className:`before_blue before_bold`,children:[(0,a.jsx)(`b`,{className:`t_blue`,children:`실시간 이미지 최적화 프로세스 설정`}),`: `,(0,a.jsx)(`b`,{children:`image task`}),`가 실행될 때 이미지 최적화도 같이 진행됩니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`i`,{className:`t_blue`,children:`(단, 이미지가 많고 용량이 클 경우 그만큼 초기 빌드 시간이 늘어납니다.)`})]}),(0,a.jsxs)(`li`,{className:`before_green before_bold`,children:[(0,a.jsx)(`b`,{className:`t_green`,children:`독립적인 이미지 최적화 프로세스 설정`}),`: `,(0,a.jsx)(`b`,{children:`image task`}),`가 실행되어도 이미지 최적화는 실행되지 않습니다. 이미지 최적화는 필요할 때 별도로 진행합니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`i`,{className:`t_green`,children:`(필요할 때만 이미지 최적화를 실행하기 때문에 초기 빌드 속도에 영향을 미치지 않습니다.)`})]})]}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`본 Gulp 커리큘럼은 조금 더 이해하기 쉬운 `,(0,a.jsx)(`b`,{className:`t_blue`,children:`1번 방식`}),`으로 마무리되지만, 실제 프로젝트에서 사용하고 이미지가 많다면 `,(0,a.jsx)(`b`,{className:`t_green`,children:`2번 방식`}),`을 추천합니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`i`,{className:`t_red`,children:`※ 아래 세팅 방법 중에서 프로젝트에 가장 적합한 방법을 선택하여 진행해 주세요.`})]})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn t_blue`,children:`6.3.4-1. 실시간 이미지 최적화 프로세스 설정`}),(0,a.jsxs)(`article`,{className:`mt_m indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`gulpfile.babel.js 세팅`}),(0,a.jsx)(n,{filename:`gulpfile.babel.js`,title:`gulpfile.babel.js`,language:`javascript`,className:`mt_m`,defaultOpen:!1,linkedFullCodeId:`assets-image-live-gulpfile-full`,children:`// import -----------------------------------------------------------
      					// ··· 기존 import 생략 ···
      					--add--
      					import imagemin from "gulp-imagemin";
      					import newer from "gulp-newer";


      					// routes -----------------------------------------------------------
      					--no_change--


      					// etc --------------------------------------------------------------
      					--no_change--


      					// task -------------------------------------------------------------

      					// html task --no_change--

      					// css task --no_change--

      					// js task --no_change--

      					// image task --add--
      					const image = () => {
      						return gulp.src( path_src.images + '/**/*' )         // 최적화 이미지 대상
      						.pipe( newer( path_dist.images ) )                   // 변경된 파일만 통과, 변경되지 않은 파일 건너뛰기
      						.pipe( imagemin( { verbose:true } ) )                // 이미지 최적화 ( 최적화 된 이미지의 정보 기록 옵션 적용 )
      						.pipe( gulp.dest( path_dist.images ) );              // 최적화 후 생성될 목적지 설정
      					}

      					// clean task --no_change--

      					// webserver task --no_change--

      					// watch task --edit-- --edit_txt:image watch 추가
      					const watch = () => {
      						// njk(html) watch  --no_change--
      						const html_watcher = gulp.watch(path_src.html + "/**/*", html);
      						file_management(html_watcher, path_src.html, path_dist.html);

      						// sass watch --no_change--
      						const scss_watcher = gulp.watch(path_src.css + "/**/*", css);
      						file_management(scss_watcher, path_src.css, path_dist.css);

      						// js watch --no_change--
      						const js_watcher = gulp.watch(path_src.js + "/**/*", js);
      						file_management(js_watcher, path_src.js, path_dist.js);

      						// image watch --add--
      						const image_watcher = gulp.watch(path_src.images + "/**/*", image);
      						file_management(image_watcher, path_src.images, path_dist.images);
      					}
      					// watch - 파일 감시 및 삭제를 위한 함수 --no_change--


      					// series & parallel (task 그룹화) ----------------------------------

      					// 순차적으로 실행되어야 하는 task 그룹 --edit-- --edit_txt:image task 추가
      					const prepare = gulp.series([ clean, image ]);

      					// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹 --no_change--

      					// 동시에 여러 개의 task가 실행되어야 하는 그룹 (병렬로 실행) --no_change--


      					// export (gulp 실행 명령어) ----------------------------------------

      					// gulp build 실행 (prepare 실행 후 assets 실행) - build만 실행 --no_change--

      					// gulp dev 실행 (build 실행 후 live 실행) - build 실행 후 live 실행 --no_change--`}),(0,a.jsx)(n,{id:`assets-image-live-gulpfile-full`,filename:`gulpfile.babel.js - full code`,title:`gulpfile.babel.js - full code`,language:`javascript`,className:`full_code_layer`,isFullCodeLayer:!0,children:`// import -----------------------------------------------------------
      					import gulp from "gulp";
      					import nunjucksRender from "gulp-nunjucks-render";
      					import plumber from "gulp-plumber";
      					import data from "gulp-data";
      					import cached from "gulp-cached";
      					import fs from "fs";
      					import del from "del";
      					import ws from "gulp-webserver";
      					import path from "path";
      					import gulpSass from "gulp-sass";
      					import dartSass from "dart-sass";
      					import sourcemaps from "gulp-sourcemaps";
      					import minificss from "gulp-minify-css";
      					import autoprefixer from "autoprefixer";
      					import postCss from "gulp-postcss";
      					import rename from "gulp-rename";
      					import dependents from "gulp-dependents";
      					import bro from "gulp-bro";
      					import babelify from "babelify";
      					import minify from "gulp-minify";
      					import imagemin from "gulp-imagemin";
      					import newer from "gulp-newer";


      					// routes -----------------------------------------------------------
      					const src = './src';
      					const dist = './dist';
      					const ass = '/assets';

      					// src 폴더의 경로 설정
      					const path_src = {
      						html: src + '/html',
      						css: src + ass + '/css',
      						images: src + ass + '/images',
      						js: src + ass + '/js',
      					}

      					// 빌드될 dist 폴더의 경로 설정
      					const path_dist = {
      						html: dist,
      						css: dist + ass + '/css',
      						images: dist + ass + '/images',
      						js: dist + ass + '/js',
      					};


      					// etc --------------------------------------------------------------
      					const onErrorHandler = (error) => console.log(error);  // plumber option (에러 발생 시 에러 로그 출력)


      					// task -------------------------------------------------------------

      					// html task
      					const html = () => {
      						// 들여쓰기(Tab Indent) 조정을 위한 함수
      						const manageEnvironment = (environment) => {
      							environment.addFilter('tabIndent', (str, numOfIndents, firstLine) => {
      								str = str.replace(/^(?=.)/gm, new Array(numOfIndents + 1).join('	'));
      								if(!firstLine) {
      									str = str.replace(/^s+/, "");
      								}
      								return str;
      							});
      						};

      						// _gnb.json 파일 적용을 위한 변수
      						const gnbJson = JSON.parse(fs.readFileSync(path_src.html + '/_templates/_json/_gnb.json'));
      						const json_all = {...gnbJson};
      						const datafile = () => {
      							return json_all;
      						}

      						// njk 빌드
      						return gulp.src([
      							path_src.html + '/**/*',                           // 빌드할 njk 파일 경로
      							'!' + path_src.html + '/**/_*',                    // 경로 중 제외할 njk 파일(빌드 때 병합될 파일)
      							'!' + path_src.html + '/**/_*/**/*'                // 경로 중 제외할 폴더 및 폴더의 njk 파일(빌드 때 병합될 파일)
      						])
      						.pipe( plumber({errorHandler:onErrorHandler}) )      // 에러 발생 시 gulp 종료 방지 및 에러 핸들링
      						.pipe( data( datafile) )                             // _gnb.json 적용
      						.pipe( nunjucksRender({                              // njk 적용
      							envOptions: {                                      // njk 옵션 설정
      								autoescape: false,                               // njk 문법의 오류가 있더라도 진행
      							},
      							manageEnv: manageEnvironment,                      // 들여쓰기(Tab Indent) 함수 적용
      							path: [path_src.html],                             // html 폴더 전체 경로
      						}) )
      						.pipe( cached('html') )                              // 변경된 파일 캐시 저장
      						.pipe( gulp.dest(path_dist.html) )                   // 빌드 후 html 파일이 생성될 목적지 설정
      					}

      					// css task
      					const css = () => {
      						//scss 옵션 정의
      						const sass = gulpSass(dartSass);                        // ECMAScript 모듈(최신 Node.js 14 이상에서 지원됨)에서 사용하기 위해 선언
      						const options = {
      							scss : {
      								outputStyle: "expanded",                            // 컴파일 스타일: nested(default), expanded, compact, compressed
      								indentType: "space",                                // 들여쓰기 스타일: space(default), tab
      								indentWidth: 2,                                     // 들여쓰기 칸 수 (Default : 2)
      								precision: 8,                                       // 컴파일 된 CSS 의 소수점 자리수 (Type : Integer , Default : 5)
      								sourceComments: true,                               // 주석 제거 여부 (Default : false)
      								compiler: dartSass,                                 // 컴파일 도구
      							},
      							postcss: [ autoprefixer({
      								overrideBrowserslist: 'last 2 versions',            // 최신 브라우저 기준 하위 2개의 버전까지 컴파일
      							}) ]
      						};

      						return gulp.src(
      							path_src.css + '/**/*.scss',                          // 컴파일 대상 scss파일 찾기
      							{ since: gulp.lastRun(css) }                          // 변경된 파일에 대해서만 컴파일 진행
      						)
      						.pipe( plumber({errorHandler:onErrorHandler}) )         // 에러 발생 시 gulp 종료 방지 및 에러 핸들링
      						// *.css 생성
      						.pipe( dependents() )                                   // 현재 스트림에 있는 파일에 종속되는 모든 파일을 추가
      						.pipe( sourcemaps.init() )                              // 소스맵 작성
      						.pipe( sass(options.scss).on('error', sass.logError) )  // scss 옵션 적용 및 에러 발생 시 watch가 멈추지 않도록 logError 설정
      						.pipe( postCss(options.postcss) )                       // 하위 브라우저 고려
      						.pipe( sourcemaps.write() )                             // 소스맵 적용
      						.pipe( gulp.dest(path_dist.css) )                       // 컴파일 후 css파일이 생성될 목적지 설정
      						// *.min.css 생성
      						.pipe( minificss() )                                    // 컴파일된 css 압축
      						.pipe( rename({ suffix: '.min' }) )                     // 압축파일 *.min.css 생성
      						.pipe( sourcemaps.write() )                             // 소스맵 적용
      						.pipe( gulp.dest(path_dist.css) );                      // 컴파일 후 css파일이 생성될 목적지 설정
      					}

      					// js task
      					const js = () => {
      						return gulp.src([
      							path_src.js + '/main.js'                                  // 트렌스파일 대상 경로 (util.js 는 main.js 에 import 하기 때문에 호출 안함)
      						])
      						.pipe( sourcemaps.init({ loadMaps: true }) )                // 소스맵 초기화 (기존의 소스 맵을 유지하고 수정하는 데 사용하기 위해 옵션 설정)
      						.pipe( bro({                                                // 트렌스파일 시작
      							transform: [
      								babelify.configure({ presets: ['@babel/preset-env'] }), // ES6 이상의 문법을 일반 브라우저가 코드를 이해할 수 있도록 변환
      								[ 'uglifyify', { global: true } ]                       // 코드 최소화 및 난독화
      							]
      						}) )
      						.pipe( sourcemaps.write('./') )                             // 소스맵 작성
      						.pipe(minify({                                              // 트렌스파일된 코드 압축 및 min 파일 생성
      							ext: { min: '.min.js' },                                  // 축소된 파일을 출력하는 파일 이름의 접미사 설정
      							ignoreFiles: ['-min.js']                                  // 해당 패턴과 일치하는 파일을 축소하지 않음
      						}))
      						.pipe( gulp.dest(path_dist.js) );                           // 트렌스파일 후 생성될 목적지 설정
      					}

      					// image task
      					const image = () => {
      						return gulp.src( path_src.images + '/**/*' )         // 최적화 이미지 대상
      						.pipe( newer( path_dist.images ) )                   // 변경된 파일만 통과, 변경되지 않은 파일 건너뛰기
      						.pipe( imagemin( { verbose:true } ) )                // 이미지 최적화 ( 최적화 된 이미지의 정보 기록 옵션 적용 )
      						.pipe( gulp.dest( path_dist.images ) );              // 최적화 후 생성될 목적지 설정
      					}

      					// clean task
      					const clean = () => del([dist]);                       // dist 폴더 삭제

      					// webserver task
      					const webserver = () => {
      					return gulp.src(dist)                                // webserver를 실행할 폴더 경로
      					.pipe(
      						ws({                                               // webserver 옵션 설정
      							// port: 8000,                                   // 기본 8000, 필요 시 변경 가능
      							livereload: true,                                // 작업 중 파일 저장 시 브라우저 자동 새로고침 (기본 false)
      							open: true                                       // Gulp 실행 시 자동으로 브라우저를 열고 localhost 서버 시작 (기본 false)
      						})
      					);
      					}

      					// watch task
      					const watch = () => {
      						// njk(html) watch
      						const html_watcher = gulp.watch(path_src.html + "/**/*", html);
      						file_management(html_watcher, path_src.html, path_dist.html);

      						// sass watch
      						const scss_watcher = gulp.watch(path_src.css + "/**/*", css);
      						file_management(scss_watcher, path_src.css, path_dist.css);

      						// js watch
      						const js_watcher = gulp.watch(path_src.js + "/**/*", js);
      						file_management(js_watcher, path_src.js, path_dist.js);

      						// image watch
      						const image_watcher = gulp.watch(path_src.images + "/**/*", image);
      						file_management(image_watcher, path_src.images, path_dist.images);
      					}
      					// watch - 파일 감시 및 삭제를 위한 함수
      					const file_management = (watcher_target, src_path, dist_path) => {
      						watcher_target.on('unlink', (filepath) => {
      							const filePathFromSrc = path.relative(path.resolve(src_path), filepath);
      							const extension_type = filePathFromSrc.split('.')[filePathFromSrc.split('.').length-1];

      							// scss 삭제 (min 파일까지 삭제)
      							if( extension_type === 'scss' ){
      								const destFilePath_css = path.resolve(dist_path, filePathFromSrc).replace('.scss','.css');
      								del.sync(destFilePath_css);
      								const destFilePath_minCss = path.resolve(dist_path, filePathFromSrc).replace('.scss','.min.css');
      								del.sync(destFilePath_minCss);
      							}

      							// js 삭제 (min 파일까지 삭제)
      							else if( extension_type === 'js' ){
      								const destFilePath_js = path.resolve(dist_path, filePathFromSrc);
      								del.sync(destFilePath_js);
      								const destFilePath_minJs = path.resolve(dist_path, filePathFromSrc).replace('.js','.min.js');
      								del.sync(destFilePath_minJs);
      							}

      							// njk(html) 삭제
      							else if( extension_type === 'njk' ){
      								const destFilePath_html = path.resolve(dist_path, filePathFromSrc).replace('.njk','.html');
      								del.sync(destFilePath_html);
      							}

      							// 위 파일 외 삭제
      							else{
      								const destFilePath = path.resolve(dist_path, filePathFromSrc);
      								del.sync(destFilePath);
      							}
      						});
      					}


      					// series & parallel (task 그룹화) ----------------------------------

      					// 순차적으로 실행되어야 하는 task 그룹
      					const prepare = gulp.series([ clean, image ]);

      					// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹
      					const assets = gulp.series([ html, css, js ]);

      					// 동시에 여러 개의 task가 실행되어야 하는 그룹 (병렬로 실행)
      					const live = gulp.parallel([ webserver, watch ]);


      					// export (gulp 실행 명령어) ----------------------------------------

      					// gulp build 실행 (prepare 실행 후 assets 실행) - build만 실행
      					export const build = gulp.series([ prepare, assets ]);

      					// gulp dev 실행 (build 실행 후 live 실행) - build 실행 후 live 실행
      					export const dev = gulp.series([ build, live ]);`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_blue`,children:`gulp dev 실행`}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[(0,a.jsx)(`i`,{className:`filename`,children:`gulpfile.babel.js`}),` 파일을 세팅한 후 `,(0,a.jsx)(`b`,{className:`terminal`,children:`터미널`}),`에서 아래 명령을 실행합니다.`]}),(0,a.jsx)(i,{className:`terminal_code_box mt_m`,children:`gulp dev`}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[`Gulp가 실행되고 `,(0,a.jsx)(`b`,{className:`terminal`,children:`터미널`}),`에 Gulp의 작업 내용이 출력됩니다.`]}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_image_run_dev_cmd1.png`,alt:`gulp dev 실행시 터미널에 작업내용 출력`})}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[(0,a.jsx)(`code`,{children:`clean`}),` 다음으로 `,(0,a.jsx)(`mark`,{children:(0,a.jsx)(`code`,{children:`image task`})}),`가 실행되고,`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`mark`,{children:(0,a.jsx)(`code`,{children:`gulp-imagemin`})}),`이 `,(0,a.jsx)(`i`,{className:`filename`,children:`visual.png`}),` 파일을 어느 정도 최적화했는지에 대한 메시지가 출력됩니다.`]})]})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn t_green`,children:`6.3.4-2. 독립적인 이미지 최적화 프로세스 설정`}),(0,a.jsxs)(`article`,{className:`mt_m indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_green`,children:`gulpfile.babel.js 세팅`}),(0,a.jsx)(n,{filename:`gulpfile.babel.js`,title:`gulpfile.babel.js`,language:`javascript`,className:`mt_m`,defaultOpen:!1,linkedFullCodeId:`assets-image-min-gulpfile-full`,children:`// import -----------------------------------------------------------
      					// ··· 기존 import 생략 ···
      					--add--
      					import imagemin from "gulp-imagemin";


      					// routes -----------------------------------------------------------
      					--no_change--


      					// etc --------------------------------------------------------------
      					--no_change--


      					// task -------------------------------------------------------------

      					// html task --no_change--

      					// css task --no_change--

      					// js task --no_change--

      					// image task --add--
      					// 이미지를 단순히 src에서 dist로 이동
      					const image = () => {
      						return gulp.src( path_src.images + '/**/*' )         // dist로 이동할 이미지 대상
      						.pipe( gulp.dest( path_dist.images ) );              // 이동 목적지 설정
      					}
      					// 이미지 최적화 후 dist로 이동
      					const image_optimization = () => {
      						return gulp.src( path_src.images + '/**/*' )         // 최적화 이미지 대상
      						.pipe( imagemin( { verbose:true } ) )                // 이미지 최적화 ( 최적화 된 이미지의 정보 기록 옵션 적용 )
      						.pipe( gulp.dest( path_dist.images ) );              // 최적화 후 생성될 목적지 설정
      					}

      					// clean task --no_change--

      					// webserver task --no_change--

      					// watch task --edit-- --edit_txt:image watch 추가
      					const watch = () => {
      						// njk(html) watch  --no_change--
      						const html_watcher = gulp.watch(path_src.html + "/**/*", html);
      						file_management(html_watcher, path_src.html, path_dist.html);

      						// sass watch --no_change--
      						const scss_watcher = gulp.watch(path_src.css + "/**/*", css);
      						file_management(scss_watcher, path_src.css, path_dist.css);

      						// js watch --no_change--
      						const js_watcher = gulp.watch(path_src.js + "/**/*", js);
      						file_management(js_watcher, path_src.js, path_dist.js);

      						// image watch --add--
      						const image_watcher = gulp.watch(path_src.images + "/**/*", image);
      						file_management(image_watcher, path_src.images, path_dist.images);
      					}
      					// watch - 파일 감시 및 삭제를 위한 함수 --no_change--


      					// series & parallel (task 그룹화) ----------------------------------

      					// 순차적으로 실행되어야 하는 task 그룹 --edit-- --edit_txt:image task 추가
      					const prepare = gulp.series([ clean, image ]);

      					// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹 --no_change--

      					// 동시에 여러 개의 task가 실행되어야 하는 그룹 (병렬로 실행) --no_change--


      					// export (gulp 실행 명령어) ----------------------------------------

      					// gulp build 실행 (prepare 실행 후 assets 실행) - build만 실행 --no_change--

      					// gulp dev 실행 (build 실행 후 live 실행) - build 실행 후 live 실행 --no_change--

      					// gulp image_min 실행 (이미지 최적화 하나만을 위한 명령) --add--
      					export const image_min = gulp.series([ image_optimization ]);`}),(0,a.jsx)(n,{id:`assets-image-min-gulpfile-full`,filename:`gulpfile.babel.js - full code`,title:`gulpfile.babel.js - full code`,language:`javascript`,className:`full_code_layer`,isFullCodeLayer:!0,children:`// import -----------------------------------------------------------
      					import gulp from "gulp";
      					import nunjucksRender from "gulp-nunjucks-render";
      					import plumber from "gulp-plumber";
      					import data from "gulp-data";
      					import cached from "gulp-cached";
      					import fs from "fs";
      					import del from "del";
      					import ws from "gulp-webserver";
      					import path from "path";
      					import gulpSass from "gulp-sass";
      					import dartSass from "dart-sass";
      					import sourcemaps from "gulp-sourcemaps";
      					import minificss from "gulp-minify-css";
      					import autoprefixer from "autoprefixer";
      					import postCss from "gulp-postcss";
      					import rename from "gulp-rename";
      					import dependents from "gulp-dependents";
      					import bro from "gulp-bro";
      					import babelify from "babelify";
      					import minify from "gulp-minify";
      					import imagemin from "gulp-imagemin";


      					// routes -----------------------------------------------------------
      					const src = './src';
      					const dist = './dist';
      					const ass = '/assets';

      					// src 폴더의 경로 설정
      					const path_src = {
      						html: src + '/html',
      						css: src + ass + '/css',
      						images: src + ass + '/images',
      						js: src + ass + '/js',
      					}

      					// 빌드될 dist 폴더의 경로 설정
      					const path_dist = {
      						html: dist,
      						css: dist + ass + '/css',
      						images: dist + ass + '/images',
      						js: dist + ass + '/js',
      					};


      					// etc --------------------------------------------------------------
      					const onErrorHandler = (error) => console.log(error);  // plumber option (에러 발생 시 에러 로그 출력)


      					// task -------------------------------------------------------------

      					// html task
      					const html = () => {
      						// 들여쓰기(Tab Indent) 조정을 위한 함수
      						const manageEnvironment = (environment) => {
      							environment.addFilter('tabIndent', (str, numOfIndents, firstLine) => {
      								str = str.replace(/^(?=.)/gm, new Array(numOfIndents + 1).join('	'));
      								if(!firstLine) {
      									str = str.replace(/^s+/, "");
      								}
      								return str;
      							});
      						};

      						// _gnb.json 파일 적용을 위한 변수
      						const gnbJson = JSON.parse(fs.readFileSync(path_src.html + '/_templates/_json/_gnb.json'));
      						const json_all = {...gnbJson};
      						const datafile = () => {
      							return json_all;
      						}

      						// njk 빌드
      						return gulp.src([
      							path_src.html + '/**/*',                           // 빌드할 njk 파일 경로
      							'!' + path_src.html + '/**/_*',                    // 경로 중 제외할 njk 파일(빌드 때 병합될 파일)
      							'!' + path_src.html + '/**/_*/**/*'                // 경로 중 제외할 폴더 및 폴더의 njk 파일(빌드 때 병합될 파일)
      						])
      						.pipe( plumber({errorHandler:onErrorHandler}) )      // 에러 발생 시 gulp 종료 방지 및 에러 핸들링
      						.pipe( data( datafile) )                             // _gnb.json 적용
      						.pipe( nunjucksRender({                              // njk 적용
      							envOptions: {                                      // njk 옵션 설정
      								autoescape: false,                               // njk 문법의 오류가 있더라도 진행
      							},
      							manageEnv: manageEnvironment,                      // 들여쓰기(Tab Indent) 함수 적용
      							path: [path_src.html],                             // html 폴더 전체 경로
      						}) )
      						.pipe( cached('html') )                              // 변경된 파일 캐시 저장
      						.pipe( gulp.dest(path_dist.html) )                   // 빌드 후 html 파일이 생성될 목적지 설정
      					}

      					// css task
      					const css = () => {
      						//scss 옵션 정의
      						const sass = gulpSass(dartSass);                        // ECMAScript 모듈(최신 Node.js 14 이상에서 지원됨)에서 사용하기 위해 선언
      						const options = {
      							scss : {
      								outputStyle: "expanded",                            // 컴파일 스타일: nested(default), expanded, compact, compressed
      								indentType: "space",                                // 들여쓰기 스타일: space(default), tab
      								indentWidth: 2,                                     // 들여쓰기 칸 수 (Default : 2)
      								precision: 8,                                       // 컴파일 된 CSS 의 소수점 자리수 (Type : Integer , Default : 5)
      								sourceComments: true,                               // 주석 제거 여부 (Default : false)
      								compiler: dartSass,                                 // 컴파일 도구
      							},
      							postcss: [ autoprefixer({
      								overrideBrowserslist: 'last 2 versions',            // 최신 브라우저 기준 하위 2개의 버전까지 컴파일
      							}) ]
      						};

      						return gulp.src(
      							path_src.css + '/**/*.scss',                          // 컴파일 대상 scss파일 찾기
      							{ since: gulp.lastRun(css) }                          // 변경된 파일에 대해서만 컴파일 진행
      						)
      						.pipe( plumber({errorHandler:onErrorHandler}) )         // 에러 발생 시 gulp 종료 방지 및 에러 핸들링
      						// *.css 생성
      						.pipe( dependents() )                                   // 현재 스트림에 있는 파일에 종속되는 모든 파일을 추가
      						.pipe( sourcemaps.init() )                              // 소스맵 작성
      						.pipe( sass(options.scss).on('error', sass.logError) )  // scss 옵션 적용 및 에러 발생 시 watch가 멈추지 않도록 logError 설정
      						.pipe( postCss(options.postcss) )                       // 하위 브라우저 고려
      						.pipe( sourcemaps.write() )                             // 소스맵 적용
      						.pipe( gulp.dest(path_dist.css) )                       // 컴파일 후 css파일이 생성될 목적지 설정
      						// *.min.css 생성
      						.pipe( minificss() )                                    // 컴파일된 css 압축
      						.pipe( rename({ suffix: '.min' }) )                     // 압축파일 *.min.css 생성
      						.pipe( sourcemaps.write() )                             // 소스맵 적용
      						.pipe( gulp.dest(path_dist.css) );                      // 컴파일 후 css파일이 생성될 목적지 설정
      					}

      					// js task
      					const js = () => {
      						return gulp.src([
      							path_src.js + '/main.js'                                  // 트렌스파일 대상 경로 (util.js 는 main.js 에 import 하기 때문에 호출 안함)
      						])
      						.pipe( sourcemaps.init({ loadMaps: true }) )                // 소스맵 초기화 (기존의 소스 맵을 유지하고 수정하는 데 사용하기 위해 옵션 설정)
      						.pipe( bro({                                                // 트렌스파일 시작
      							transform: [
      								babelify.configure({ presets: ['@babel/preset-env'] }), // ES6 이상의 문법을 일반 브라우저가 코드를 이해할 수 있도록 변환
      								[ 'uglifyify', { global: true } ]                       // 코드 최소화 및 난독화
      							]
      						}) )
      						.pipe( sourcemaps.write('./') )                             // 소스맵 작성
      						.pipe(minify({                                              // 트렌스파일된 코드 압축 및 min 파일 생성
      							ext: { min: '.min.js' },                                  // 축소된 파일을 출력하는 파일 이름의 접미사 설정
      							ignoreFiles: ['-min.js']                                  // 해당 패턴과 일치하는 파일을 축소하지 않음
      						}))
      						.pipe( gulp.dest(path_dist.js) );                           // 트렌스파일 후 생성될 목적지 설정
      					}

      					// image task
      					// 이미지를 단순히 src에서 dist로 이동
      					const image = () => {
      						return gulp.src( path_src.images + '/**/*' )         // dist로 이동할 이미지 대상
      						.pipe( gulp.dest( path_dist.images ) );              // 이동 목적지 설정
      					}
      					// 이미지 최적화 후 dist로 이동
      					const image_optimization = () => {
      						return gulp.src( path_src.images + '/**/*' )         // 최적화 이미지 대상
      						.pipe( imagemin( { verbose:true } ) )                // 이미지 최적화 ( 최적화 된 이미지의 정보 기록 옵션 적용 )
      						.pipe( gulp.dest( path_dist.images ) );              // 최적화 후 생성될 목적지 설정
      					}

      					// clean task
      					const clean = () => del([dist]);                       // dist 폴더 삭제

      					// webserver task
      					const webserver = () => {
      						return gulp.src(dist)                                // webserver를 실행 할 폴더 경로
      						.pipe(
      							ws({                                               // webserver 옵션 설정
      								port: 8300,                                      // 기본 8000, 필요 시 변경 가능
      								livereload: true,                                // 작업 중 파일 저장 시 브라우저 자동 새로고침 (기본 false)
      								open: true                                       // Gulp 실행 시 자동으로 브라우저를 띄우고 localhost 서버 열기 (기본 false)
      							})
      						);
      					}

      					// watch task
      					const watch = () => {
      						// njk(html) watch
      						const html_watcher = gulp.watch(path_src.html + "/**/*", html);
      						file_management(html_watcher, path_src.html, path_dist.html);

      						// sass watch
      						const scss_watcher = gulp.watch(path_src.css + "/**/*", css);
      						file_management(scss_watcher, path_src.css, path_dist.css);

      						// js watch
      						const js_watcher = gulp.watch(path_src.js + "/**/*", js);
      						file_management(js_watcher, path_src.js, path_dist.js);

      						// image watch
      						const image_watcher = gulp.watch(path_src.images + "/**/*", image);
      						file_management(image_watcher, path_src.images, path_dist.images);
      					}
      					// watch - 파일 감시 및 삭제를 위한 함수
      					const file_management = (watcher_target, src_path, dist_path) => {
      						watcher_target.on('unlink', (filepath) => {
      							const filePathFromSrc = path.relative(path.resolve(src_path), filepath);
      							const extension_type = filePathFromSrc.split('.')[filePathFromSrc.split('.').length-1];

      							// scss 삭제 (min 파일까지 삭제)
      							if( extension_type === 'scss' ){
      								const destFilePath_css = path.resolve(dist_path, filePathFromSrc).replace('.scss','.css');
      								del.sync(destFilePath_css);
      								const destFilePath_minCss = path.resolve(dist_path, filePathFromSrc).replace('.scss','.min.css');
      								del.sync(destFilePath_minCss);
      							}

      							// js 삭제 (min 파일까지 삭제)
      							else if( extension_type === 'js' ){
      								const destFilePath_js = path.resolve(dist_path, filePathFromSrc);
      								del.sync(destFilePath_js);
      								const destFilePath_minJs = path.resolve(dist_path, filePathFromSrc).replace('.js','.min.js');
      								del.sync(destFilePath_minJs);
      							}

      							// njk(html) 삭제
      							else if( extension_type === 'njk' ){
      								const destFilePath_html = path.resolve(dist_path, filePathFromSrc).replace('.njk','.html');
      								del.sync(destFilePath_html);
      							}

      							// 위 파일 외 삭제
      							else{
      								const destFilePath = path.resolve(dist_path, filePathFromSrc);
      								del.sync(destFilePath);
      							}
      						});
      					}


      					// series & parallel (task 그룹화) ----------------------------------

      					// 순차적으로 실행되어야 하는 task 그룹
      					const prepare = gulp.series([ clean, image ]);

      					// 위 prepare 실행 완료 후 순차적으로 실행되어야 하는 task 그룹
      					const assets = gulp.series([ html, css, js ]);

      					// 동시에 여러 개의 task가 실행되어야 하는 그룹 (병렬로 실행)
      					const live = gulp.parallel([ webserver, watch ]);


      					// export (gulp 실행 명령어) ----------------------------------------

      					// gulp build 실행 (prepare 실행 후 assets 실행) - build만 실행
      					export const build = gulp.series([ prepare, assets ]);

      					// gulp dev 실행 (build 실행 후 live 실행) - build 실행 후 live 실행
      					export const dev = gulp.series([ build, live ]);

      					// gulp image_min 실행 (이미지 최적화 하나만을 위한 명령)
      					export const image_min = gulp.series([ image_optimization ]);`})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_green`,children:`gulp dev 실행`}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[(0,a.jsx)(`i`,{className:`filename`,children:`gulpfile.babel.js`}),` 파일을 세팅한 후 `,(0,a.jsx)(`b`,{className:`terminal`,children:`터미널`}),`에서 아래 명령을 실행합니다.`]}),(0,a.jsx)(i,{className:`terminal_code_box mt_m`,children:`gulp dev`}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[`Gulp가 실행되고 `,(0,a.jsx)(`b`,{className:`terminal`,children:`터미널`}),`에 Gulp의 작업 내용이 출력됩니다.`]}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_image_run_dev_cmd2.png`,alt:`gulp dev 실행시 터미널에 작업내용 출력`})}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[(0,a.jsx)(`code`,{children:`clean`}),` 다음으로 `,(0,a.jsx)(`mark`,{children:(0,a.jsx)(`code`,{children:`image task`})}),`가 실행됩니다.`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`i`,{className:`t_blue`,children:`실시간 이미지 최적화 프로세스 설정`}),`과는 달리, 이미지 최적화 작업을 하지 않고 단순히 `,(0,a.jsx)(`b`,{children:`src 폴더의 이미지를 dist 폴더로 옮기는 작업만 진행`}),`하기에 `,(0,a.jsx)(`mark`,{children:(0,a.jsx)(`code`,{children:`image task`})}),`의 작업 시간도 짧습니다.`]})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn t_green`,children:`gulp image_min 실행 (이미지 최적화)`}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[(0,a.jsxs)(`mark`,{children:[`프로젝트 작업 중 이미지 최적화가 필요한 시점에 `,(0,a.jsx)(`code`,{children:`gulp dev`}),`를 종료하지 않고`]}),`, 새로운 `,(0,a.jsx)(`b`,{className:`terminal`,children:`터미널`}),`을 열고 아래 명령을 실행합니다.`,(0,a.jsx)(`br`,{}),`(같은 폴더에 여러 개의 터미널을 열 수 있습니다.)`]}),(0,a.jsx)(i,{className:`terminal_code_box mt_m`,children:`gulp image_min`}),(0,a.jsxs)(`p`,{className:`mt_ms`,children:[(0,a.jsx)(`code`,{children:`image_min`}),`이 단독으로 실행되고 `,(0,a.jsx)(`b`,{className:`terminal`,children:`터미널`}),`에 `,(0,a.jsx)(`code`,{children:`image_min`}),`의 작업 내용이 출력됩니다.`]}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_image_run_dev_cmd3.png`,alt:`gulp image_min 실행시 터미널에 작업내용 출력`})}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsxs)(`b`,{children:[(0,a.jsx)(`i`,{className:`filename`,children:`visual.png`}),` 파일에 대한 이미지 최적화가 진행되고, 이미지 최적화를 마친 `,(0,a.jsx)(`code`,{children:`image_min`}),` 프로세스는 자동으로 종료됩니다.`]})}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`이렇게 `,(0,a.jsx)(`b`,{className:`t_green`,children:`이미지 최적화 프로세스를 별도로 실행하는 방식`}),`은,`,(0,a.jsx)(`b`,{children:`빌드 시간 단축과 작업 효율성 측면에서 유리합니다.`}),`다만, `,(0,a.jsx)(`i`,{className:`underline`,children:`이미지 최적화를 수동으로 실행해야 하는 번거로움이 있다는 단점도 존재`}),`합니다.`,(0,a.jsx)(`br`,{}),`이처럼 각 방식에는 장단점이 있으며, 프로젝트의 성격이나 팀의 작업 방식에 따라 어떤 방식이 더 적합할지 판단해 선택하면 됩니다.`]}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`위의 두 가지 방법 외에도,`,(0,a.jsx)(`b`,{children:`배포 단계에서만 이미지 최적화를 자동으로 실행하도록 설정할 수도 있습니다.`}),(0,a.jsx)(`br`,{}),`다만, 이 방법은 응용 단계에 해당하므로 본 커리큘럼에서는 다루지 않습니다.`]})]})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`6.3.5. 빌드된 image 결과물 확인`}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn`,children:`6.3.5.1. image가 적용된 브라우저 확인`}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[(0,a.jsx)(`code`,{children:`image task`}),`를 세팅하기 전에는 `,(0,a.jsx)(`b`,{children:`브라우저에서 이미지를 찾지 못해 Console에 경고 메시지가 표시`}),`되었지만,`,(0,a.jsx)(`br`,{}),`이제는 `,(0,a.jsx)(`b`,{className:`t_blue`,children:`이미지가 정상적으로 표시되며 경고 메시지도 사라졌습니다.`})]}),(0,a.jsxs)(`figure`,{className:`img_figure mt_ms browser_figure`,children:[(0,a.jsxs)(`figure`,{children:[(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_css_run_dev_browser_after.png`,alt:`image 적용 전`}),(0,a.jsx)(`figcaption`,{className:`t_red weight-bold`,children:`[image 적용 전]`})]}),(0,a.jsxs)(`figure`,{children:[(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_image_run_dev_browser_after.png`,alt:`image 적용 후`}),(0,a.jsx)(`figcaption`,{className:`t_blue weight-bold`,children:`[image 적용 후]`})]})]}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`또한, 이미지 용량이 `,(0,a.jsx)(`i`,{className:`t_red`,children:`886KB`}),`에서 `,(0,a.jsx)(`i`,{className:`t_blue`,children:`854KB`}),`로 줄어든 것을 확인할 수 있습니다.`]}),(0,a.jsx)(`p`,{className:`mt_s`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_image_run_dev_imagemin.png`,alt:`gulp-imagemin을 적용하여 visual.png의 이미지 용량이 886KB 에서 854KB 로 줄어듬`})})]}),(0,a.jsxs)(`article`,{className:`mt_ml indent`,children:[(0,a.jsx)(`h3`,{className:`ml_mn`,children:`6.3.5.2. dist > assets 폴더와 image 파일 확인`}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[(0,a.jsx)(`i`,{className:`folder`,children:`dist > assets > images`}),` 폴더 안에 `,(0,a.jsx)(`i`,{className:`filename`,children:`visual.png`}),` 파일이 있는 것을 확인할 수 있습니다.`]}),(0,a.jsx)(`p`,{className:`mt_ms`,children:(0,a.jsx)(`img`,{src:`${t.GULP}/gulp_image_run_folder.png`,alt:`빌드 후 dist > assets > image 폴더 확인`})})]})]}),(0,a.jsxs)(`section`,{className:`indent mt_xxl`,children:[(0,a.jsx)(`h2`,{className:`ml_mn`,children:`6.3.6. 로컬 작업을 위한 Gulp 세팅을 마치며`}),(0,a.jsxs)(`p`,{className:`mt_m`,children:[(0,a.jsx)(`b`,{children:`여기까지 로컬 환경에서의 Gulp 설정을 성공적으로 완료했습니다.`}),(0,a.jsx)(`br`,{}),`처음 접하는 시스템과 언어로 낯설 수 있었지만, `,(0,a.jsx)(`b`,{children:`웹 퍼블리싱을 위한 기본적인 세팅을 잘 마무리`}),`하였습니다.`]}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`아직 Gulp가 익숙하지 않고, 커리큘럼 없이 혼자 세팅하는 것은 당연히 어렵게 느껴질 수 있습니다.`,(0,a.jsx)(`br`,{}),`하지만 `,(0,a.jsx)(`b`,{children:`한 번의 세팅으로 끝나는 것이 아니라 반복하고 응용하는 과정을 거치다 보면 점차 Gulp에 익숙해지고 자연스럽게 활용할 수 있게 될 것입니다.`})]}),(0,a.jsx)(`p`,{className:`mt_ms notice_blue`,children:(0,a.jsx)(`b`,{children:`Gulp는 여기까지만 해도 충분합니다. 다음 커리큘럼은 선택사항입니다.`})}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`다음 섹션에서는 `,(0,a.jsx)(`code`,{className:`t_blue`,children:`gulp-gh-pages`}),` 패키지를 활용하여 `,(0,a.jsx)(`b`,{children:`Gulp로 빌드한 결과물을 GitHub에 배포하는 방법`}),`을 다룹니다.`,(0,a.jsx)(`br`,{}),(0,a.jsxs)(`span`,{className:`t_blue`,children:[(0,a.jsx)(`b`,{children:`이 과정은 Git과 GitHub의 기본적인 사용법을 알고 있다는 전제 하에 진행됩니다.`}),(0,a.jsx)(`br`,{}),`따라서 Git이나 GitHub 사용이 익숙하지 않다면, 본격적인 커리큘럼을 따라가기 전에 `,(0,a.jsx)(`b`,{children:`Git과 GitHub의 기본 개념과 사용법을 먼저 익히는 것을 권장`}),`합니다.`]})]}),(0,a.jsxs)(`p`,{className:`mt_s`,children:[`※ 다음 커리큘럼에서는 `,(0,a.jsx)(`b`,{children:`[실시간 이미지 최적화 프로세스로 설정]`}),`한`,(0,a.jsx)(`i`,{className:`filename t_blue`,children:`gulpfile.babel.js`}),` 파일을 기준으로 이어서 진행하며,`,(0,a.jsx)(`b`,{className:`t_red`,children:`Git과 GitHub를 설명하는 내용은 다루지 않습니다.`})]})]}),(0,a.jsxs)(`figure`,{className:`img_figure mt_l`,children:[(0,a.jsx)(`img`,{src:`${t.GULP}/06_gulp_03.png`,alt:`이미지 최적화 설정`}),(0,a.jsx)(`figcaption`,{children:`이미지 최적화 설정`})]})]})}export{o as default};