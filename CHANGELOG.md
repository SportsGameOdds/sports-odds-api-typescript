# Changelog

## 2.2.0 (2026-07-19)

Full Changelog: [v2.1.0...v2.2.0](https://github.com/SportsGameOdds/sports-odds-api-typescript/compare/v2.1.0...v2.2.0)

### Features

* **stlc:** configurable CI runner and private-production-repo support in workflow templates ([33c18ef](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/33c18ef1ba78c8ae9ba3f08970c5702dd03c2799))

## [2.1.0](https://github.com/SportsGameOdds/sports-odds-api-typescript/compare/v2.0.1...v2.1.0) (2026-07-19)


### Features

* add support for the /markets endpoint ([bc6c1e0](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/bc6c1e0541433989ec068a7c1e01e751ab461f7a))
* initial stlc build ([c41f369](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/c41f369764d25bf27e563c01a03e77003c4d7f33))


### Chores

* format package.json with prettier ([f0cd4d2](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/f0cd4d2469e98e2034b6aae1dc2cc9b01135b396))
* format README with prettier ([5bd269b](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/5bd269ba4076c099c27decc9c19fb71c42aa1a8e))
* format release-doctor workflow ([7e6b9c3](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/7e6b9c3a445a7374ec99fb0c00cf0e4444db8ddd))

## 2.0.1 (2026-07-11)

Full Changelog: [v2.0.0...v2.0.1](https://github.com/SportsGameOdds/sports-odds-api-typescript/compare/v2.0.0...v2.0.1)

### Bug Fixes

* **ci:** bump @arethetypeswrong/cli to ^0.18.0 and run CI workflows on Node 24 ([e655ed7](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/e655ed7d99e7d2669f25b4486219d354b5fb4b0f))


### Chores

* **internal:** codegen related update ([03bca00](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/03bca0033faa956d77469ab5d2ff5efeec8cd40a))

## 2.0.0 (2026-02-14)

Full Changelog: [v1.4.0...v2.0.0](https://github.com/SportsGameOdds/sports-odds-api-typescript/compare/v1.4.0...v2.0.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **mcp:** add initial server instructions ([93f21cc](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/93f21cc46cb40703dd2cfb6b1b122a3ee5e3c11c))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([262b320](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/262b320c66ba46e642f1ab23171dcce59af07ddf))
* **client:** avoid removing abort listener too early ([f22fffc](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/f22fffc2e4397070a9a7995810ebb0d84d6eefc2))
* **docs:** fix mcp installation instructions for remote servers ([0bf8190](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/0bf81909eed8e2d7517826eea3eb77eb7a943731))
* **mcp:** allow falling back for required env variables ([ecbf522](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/ecbf5223f59920116848bce5c67f2491f6007bbd))
* **mcp:** correct code tool api output types ([4a8cc28](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/4a8cc28c7c9c582974fdb947cade96d606b62217))
* **mcp:** fix options parsing ([241a9cf](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/241a9cf405f4ef3f74bac0805d38f894a95341f7))
* **mcp:** pass base url to code tool ([267e8a8](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/267e8a8d61f5e7cd3434a5d5f6e96ac2f91ffe74))
* **mcp:** update code tool prompt ([1f8e375](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/1f8e375603022256eb5b09f58f9c2a055ae51507))


### Chores

* break long lines in snippets into multiline ([aa14f33](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/aa14f33f8e3e1e9bde2171e5af38792496ab5f72))
* **ci:** upgrade `actions/github-script` ([492a1ee](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/492a1ee4986928d26f42740ebe2395d28e3e37e4))
* **client:** do not parse responses with empty content-length ([00908d5](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/00908d5726707df808788bbc8fef7515ceac56c1))
* **client:** restructure abort controller binding ([f3f7b5b](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/f3f7b5bf14f004ba20ea603af1902ac3122843b0))
* **internal:** add health check to MCP server when running in HTTP mode ([0ce18bd](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/0ce18bd657820706e36e440324a83f9f7947ab54))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([b985714](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/b985714b7f817e369cab56bd9a5ce47df5a7064b))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([fbe695c](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/fbe695ccb35ff2fcaf94009b585541f9f40588d6))
* **internal:** avoid type checking errors with ts-reset ([53fce92](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/53fce92115d778d4b67d614588d85c46fee04767))
* **internal:** codegen related update ([d9cc424](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/d9cc4245143aba47c4573444d3d915658c3c9097))
* **internal:** codegen related update ([ea3cc8a](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/ea3cc8adc6d4825505a692251d89550e87f110af))
* **internal:** codegen related update ([808cb96](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/808cb9601d122a926210f9fd980c0a2a141afd73))
* **internal:** codegen related update ([ed6515f](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/ed6515f084d4189b571567b2f3234b2a781a3a0f))
* **internal:** codegen related update ([75199c9](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/75199c9c0079d52d2dbf3b2804d5c45efec29b3e))
* **internal:** codegen related update ([7428b89](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/7428b89f22fc13ef30f2bb6a868e7deaff5940fc))
* **internal:** fix pagination internals not accepting option promises ([0ecde6e](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/0ecde6eccda8d43d1255da981baa29638cfcfa19))
* **internal:** improve layout of generated MCP server files ([0761324](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/07613240ef306e2180abd34ac9c5fce9fbe47a3e))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([6d27223](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/6d27223e05d6d2c8bfd94bcc8eac500c808a28e1))
* **internal:** support oauth authorization code flow for MCP servers ([cbff324](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/cbff324e707fdd49c4f8d2d4b338c493622d6433))
* **internal:** update `actions/checkout` version ([38272f2](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/38272f24d2ee3a2798b6db97b9cdcb7d20627959))
* **internal:** update lock file ([b224746](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/b2247465566155b0854698904774403e3335d1d0))
* **internal:** upgrade babel, qs, js-yaml ([10aeab8](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/10aeab84a9f1e776da0e144eb12b07314172eeb9))
* **mcp:** add intent param to execute tool ([9d5e813](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/9d5e8132bcf88209f59b04abe7b3dc74e6e66593))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([038c32e](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/038c32e07742a7a03cfdbe4c65458fd9a404b6b6))
* **mcp:** pass intent param to execute handler ([ece66a2](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/ece66a2391c037418b7713a5618fedac3bab820c))
* **mcp:** remove deprecated tool schemes ([2601a2e](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/2601a2e4d2fd2ac35c73aef343398116683f8179))
* **mcp:** up tsconfig lib version to es2022 ([c210772](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/c2107729370acab0f9090d5a8fb78cc95d5173ab))
* **mcp:** upgrade dependencies ([6ba26e6](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/6ba26e66304df9054ff30afa28378e86cc5e4be8))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([b6fc9a9](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/b6fc9a92c8fa50bac813793749e8bf2a94e7afcc))

## 1.4.0 (2025-12-11)

Full Changelog: [v1.3.0...v1.4.0](https://github.com/SportsGameOdds/sports-odds-api-typescript/compare/v1.3.0...v1.4.0)

### Features

* **mcp:** add detail field to docs search tool ([e08aa2e](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/e08aa2e5a31bab61066a816ba202513f1578311e))
* **mcp:** add typescript check to code execution tool ([9e5bc79](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/9e5bc79e162e5ff1ddb5889ffd9f42957176063e))
* **mcp:** handle code mode calls in the Stainless API ([5241597](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/5241597060fa6979947cec4940fb6a7fa5e80595))
* **mcp:** return logs on code tool errors ([0886029](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/08860291a2a5bd367842a85ccadcfa06a67b3ef8))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([f105681](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/f105681535ede26dd5b28113279abea7dedd905d))
* **mcp:** correct code tool API endpoint ([97f150b](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/97f150b577a4273c160fed0337d85470070d1bbe))
* **mcp:** return correct lines on typescript errors ([2746f51](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/2746f512c8715d10f4097843bab70e736a591359))
* **mcp:** return tool execution error on api error ([d3815ef](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/d3815ef1bb929634ffd2afe4dbd5753e4c01e785))
* **mcp:** return tool execution error on jq failure ([1be0c9d](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/1be0c9d901bfce91807773150c3c130290a74724))


### Chores

* **client:** fix logger property type ([1c9209b](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/1c9209be975da0a9b6d548e58dcc6d4886b4546a))
* **internal:** codegen related update ([de5e6d7](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/de5e6d719c6880a099d0c2ac63a64f7e8fbce253))
* **internal:** codegen related update ([e678a82](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/e678a82a9b196c88ded91cac4c5a7053cbc3f484))
* **internal:** upgrade eslint ([ac143a5](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/ac143a50c55923dd4533a978a5d2d56effc51812))
* **mcp:** update lockfile ([0292e87](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/0292e874ded177afd70316411c956e09b672d87d))
* **mcp:** upgrade jq-web ([3e47dbf](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/3e47dbfaae4fd02cee1c707ebbc231a17152f3b0))
* use latest @modelcontextprotocol/sdk ([3b75544](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/3b755446e80869170b3a649c09eacc6cd4f8ebde))

## 1.3.0 (2025-11-11)

Full Changelog: [v1.2.1...v1.3.0](https://github.com/SportsGameOdds/sports-odds-api-typescript/compare/v1.2.1...v1.3.0)

### Features

* **mcp:** enable optional code execution tool on http mcp servers ([23addbc](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/23addbc8d3855bce7a931de6f5ba77b0d2cbd89c))


### Bug Fixes

* **mcpb:** pin @anthropic-ai/mcpb version ([0f780bf](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/0f780bf4024412253595c611b86487e3d4d2245e))


### Chores

* **internal:** codegen related update ([47b4441](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/47b4441e3e12136dfd35bc97ca4f4dd22c3e711f))
* **internal:** codegen related update ([24d1299](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/24d129980c982092e6c63d1fe77e76e340fa6139))
* **internal:** grammar fix (it's -&gt; its) ([9f2d744](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/9f2d7442062323259d970218cb9d2a6ee5a8e0bc))
* mcp code tool explicit error message when missing a run function ([a882d25](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/a882d252a719e2cf2f5773f267e727760b041dc7))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([3c30509](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/3c3050993937a9e95e735537b5cbd68d19d249eb))
* **mcp:** add line numbers to code tool errors ([7479b9c](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/7479b9c0143b66bb15355cc2c89d4d77ddd8715f))
* **mcp:** clarify http auth error ([6213956](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/6213956ae86335f8764eb69e167add67127d73a1))
* use structured error when code execution tool errors ([2c1dcb5](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/2c1dcb51c6ded41e88cbe1ab21e749288da2ba58))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([759c62f](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/759c62f4bf4e749f51d53c610a837100592a9f4c))
* **mcp:** add a README link to add server to VS Code or Claude Code ([e56ab60](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/e56ab609431d0ef15e21a2d196fbfa16fcc6d3a8))

## 1.2.1 (2025-10-25)

Full Changelog: [v1.2.0...v1.2.1](https://github.com/SportsGameOdds/sports-odds-api-typescript/compare/v1.2.0...v1.2.1)

### Chores

* configure new SDK language ([fde9011](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/fde901169fb87020ca07d708ee1cd7d9fe7f35a5))

## 1.2.0 (2025-10-08)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/SportsGameOdds/sports-odds-api-typescript/compare/v1.1.0...v1.2.0)

### Features

* test ([19ef947](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/19ef94789a919cb12dd5c7ed04c51c028f2f9155))


### Chores

* **internal:** use npm pack for build uploads ([b4c1c87](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/b4c1c87a61f791a7be82bc9186d53774039caaf3))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([d61de9b](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/d61de9b4d6dc2048183e47a7ee6c7535fc106c77))

## 1.1.0 (2025-10-01)

Full Changelog: [v1.0.1...v1.1.0](https://github.com/SportsGameOdds/sports-odds-api-typescript/compare/v1.0.1...v1.1.0)

### Features

* **api:** manual updates ([e7007f1](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/e7007f1fccd7ffba0bab76afda8a9fafb4ed1aa0))


### Bug Fixes

* **mcp:** fix cli argument parsing logic ([0411622](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/0411622e2371d536e9bfb2554ef49581e60a34a2))
* **mcp:** resolve a linting issue in server code ([2d94636](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/2d94636fcf03820f279dea7600017d9c2221e02a))


### Chores

* configure new SDK language ([4fa3275](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/4fa327585a56e29b08dfa22ba304e73af435cec2))
* **internal:** codegen related update ([b8a3243](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/b8a324381f2b495d457f1b4406880b0270e6df87))
* **internal:** codegen related update ([e5b97b3](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/e5b97b3f99e49ce1b825b34afa6d90c49216b5f8))
* **internal:** fix incremental formatting in some cases ([4f18b2d](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/4f18b2d4c197e2b7484aebe0f3111e97409d85da))
* **internal:** ignore .eslintcache ([1673a7d](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/1673a7d5692e2841cf2d243b2521afb95af48eb8))
* **internal:** remove .eslintcache ([490bb2d](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/490bb2d74b99a43d171c6adbbce39c0cab257cf6))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([cddfbfe](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/cddfbfe14e590727a8cac1499fb42480f333109c))
* update lockfile ([fd37159](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/fd37159bce245938903dfd6b62a2403216cb2200))

## 1.0.1 (2025-09-22)

Full Changelog: [v1.0.0...v1.0.1](https://github.com/SportsGameOdds/sports-odds-api-typescript/compare/v1.0.0...v1.0.1)

### Chores

* ci build action ([bee14ae](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/bee14aec091663ac30255a221e3cd0523bb66a12))
* do not install brew dependencies in ./scripts/bootstrap by default ([fbe7a8d](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/fbe7a8db54b0e2a30164d928a639cba46e5638d6))
* **internal:** codegen related update ([de904cd](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/de904cdeca27aae2787c869fc774aa12e5a5fbc3))

## 1.0.0 (2025-09-02)

Full Changelog: [v0.1.0-alpha.3...v1.0.0](https://github.com/SportsGameOdds/sports-odds-api-typescript/compare/v0.1.0-alpha.3...v1.0.0)

### Features

* **api:** update via SDK Studio ([e4d7cec](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/e4d7cece238c1907c09bc69b0c37648e8c7c411a))

## 0.1.0-alpha.3 (2025-08-29)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/SportsGameOdds/sports-odds-api-typescript/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* add custom code ([eb19982](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/eb1998268bc5451010834d06be1239f26542a9d0))
* **api:** update via SDK Studio ([1f07037](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/1f07037cbf280650e74b94343598600858d77f9b))
* **api:** update via SDK Studio ([1fb5a8d](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/1fb5a8d5829671b11387a7da42b2cb8c40e227f3))
* **api:** update via SDK Studio ([ef1f58f](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/ef1f58f7812b27feb4a7f76af37a2c10f27be890))
* **api:** update via SDK Studio ([2b8212c](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/2b8212c1b5a7be50665c2dd0078c1ee4a07ac279))
* **api:** update via SDK Studio ([d3527ca](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/d3527ca2806fe37a8ba87b948b26d89ce44919de))
* **api:** update via SDK Studio ([a2a573b](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/a2a573b9802b1778bb7429f8f2612bdef5b1d890))
* **api:** update via SDK Studio ([80c5877](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/80c587772e8e062018c5015070d4a8e1be0dfc75))
* **api:** update via SDK Studio ([9413fc4](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/9413fc49396375b000ee0d0a48bc8ce6957bf416))
* **api:** update via SDK Studio ([b1da214](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/b1da2141acbd82423423192d057d8bd6ec3ff59f))
* fix helper ([be27f07](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/be27f07fc9a4dd609dab6526b691fe6b07792386))
* **mcp:** add code execution tool ([06d4b54](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/06d4b540dd070e8bd9e17ed9b4609677a0ed7506))


### Chores

* add package to package.json ([06a0ac6](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/06a0ac672269508469d073182ad19125b097c12a))
* **client:** qualify global Blob ([d16fbbe](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/d16fbbe10c39e13c3a6e8bbd5d992b94bd704fe1))
* **deps:** update dependency @types/node to v20.17.58 ([7fcf3b7](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/7fcf3b70a4864b870ab68e11d111372c660c0b6c))
* **internal:** formatting change ([69d98be](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/69d98beaa7b18815a215d68e9784453f8a15ef3c))
* **internal:** move publish config ([fe840e7](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/fe840e734afdf54d8d23d2ec86f333a8c4e6dafa))
* **internal:** remove redundant imports config ([f28c62f](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/f28c62f71ea6ccdb6134a1142a56bd6c9c55d638))
* **internal:** update comment in script ([6c6e3c7](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/6c6e3c77c6749ff5c7478fd9f31ac407ad1000ba))
* **internal:** update global Error reference ([17e399a](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/17e399ac85978876c647c6e47bfe644dce3d25eb))
* update @stainless-api/prism-cli to v5.15.0 ([9862995](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/9862995a8c5f4b43ecfca022206f689c8c219b4e))
* update CI script ([149f8de](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/149f8de77d2930fb9091d4b82c9ad3ebe3edde5c))
* update SDK settings ([d5cab3e](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/d5cab3efae3ad6a1776f25046b09f3ec9c533f13))
* update SDK settings ([9600352](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/9600352c920ed142ac6878fb3e787ab135422bdc))
* update SDK settings ([314ff33](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/314ff3307626a871054ba07649dfb232793ea860))
* update SDK settings ([28eb60a](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/28eb60a72be35ced6b272940fda468a3f2894727))

## 0.1.0-alpha.2 (2025-07-24)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/SportsGameOdds/sports-odds-api-typescript/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* add custom code ([eb19982](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/eb1998268bc5451010834d06be1239f26542a9d0))
* **api:** update via SDK Studio ([a2a573b](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/a2a573b9802b1778bb7429f8f2612bdef5b1d890))
* **api:** update via SDK Studio ([80c5877](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/80c587772e8e062018c5015070d4a8e1be0dfc75))
* fix helper ([be27f07](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/be27f07fc9a4dd609dab6526b691fe6b07792386))


### Chores

* update SDK settings ([9600352](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/9600352c920ed142ac6878fb3e787ab135422bdc))
* update SDK settings ([314ff33](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/314ff3307626a871054ba07649dfb232793ea860))

## 0.1.0-alpha.1 (2025-07-18)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/SportsGameOdds/sports-odds-api-typescript/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([9413fc4](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/9413fc49396375b000ee0d0a48bc8ce6957bf416))
* **api:** update via SDK Studio ([b1da214](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/b1da2141acbd82423423192d057d8bd6ec3ff59f))


### Chores

* update SDK settings ([28eb60a](https://github.com/SportsGameOdds/sports-odds-api-typescript/commit/28eb60a72be35ced6b272940fda468a3f2894727))
