# Changelog

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
