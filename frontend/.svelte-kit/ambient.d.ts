
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const GOOGLE_ANALYTICS_ID: string;
	export const LDFLAGS: string;
	export const MANPATH: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const AWS_S3_DEFAULT_REGION: string;
	export const NVM_CD_FLAGS: string;
	export const TERM: string;
	export const SHELL: string;
	export const CATALINA_HOME: string;
	export const CPPFLAGS: string;
	export const ERL_AFLAGS: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const ELASTIC_SERVER_NAME: string;
	export const PERL5LIB: string;
	export const TERM_PROGRAM_VERSION: string;
	export const PUMA_MIN_THREADS: string;
	export const COLOR: string;
	export const TERM_SESSION_ID: string;
	export const npm_config_noproxy: string;
	export const npm_config_local_prefix: string;
	export const ZSH: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const LD_LIBRARY_PATH: string;
	export const LS_COLORS: string;
	export const PUMA_WORKERS: string;
	export const GOSJAR_TOPOLOGIJA: string;
	export const COMMAND_MODE: string;
	export const npm_config_globalconfig: string;
	export const USER_NAME: string;
	export const LOCAL_OFFICE_PATH: string;
	export const SSH_AUTH_SOCK: string;
	export const ELASTICSEARCH_URL: string;
	export const REDIS_URL: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const PAGER: string;
	export const WORKON_HOME: string;
	export const PROJECT_HOME: string;
	export const LSCOLORS: string;
	export const GOOGLE_API_KEY: string;
	export const NPM_TOKEN: string;
	export const PATH: string;
	export const npm_package_json: string;
	export const _: string;
	export const MAILCHIMP_API_KEY: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const AWS_DEFAULT_REGION: string;
	export const SECRET_KEY_BASE: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const PWD: string;
	export const JAVA_HOME: string;
	export const npm_lifecycle_event: string;
	export const AWS_SECRET_ACCESS_KEY: string;
	export const EDITOR: string;
	export const npm_package_name: string;
	export const ITERM_PROFILE: string;
	export const npm_config_npm_version: string;
	export const XPC_FLAGS: string;
	export const FURY_AUTH: string;
	export const MAILCHIMP_AUDIENCE_ID: string;
	export const npm_config_node_gyp: string;
	export const RBENV_SHELL: string;
	export const npm_package_version: string;
	export const ENVIRONMENT: string;
	export const XPC_SERVICE_NAME: string;
	export const AWS_ACCESS_KEY_ID: string;
	export const DISCOVERY_DEVELOPMENT: string;
	export const SHLVL: string;
	export const HOME: string;
	export const COLORFGBG: string;
	export const RAILS_ENV: string;
	export const LC_TERMINAL_VERSION: string;
	export const HOMEBREW_PREFIX: string;
	export const ITERM_SESSION_ID: string;
	export const npm_config_cache: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const AWS_STORAGE_BUCKET_NAME: string;
	export const AWS_S3_SECRET_ACCESS_KEY: string;
	export const LC_CTYPE: string;
	export const PROTO_LIB: string;
	export const NVM_BIN: string;
	export const PGDATA: string;
	export const GITHUB_TOKEN: string;
	export const PKG_CONFIG_PATH: string;
	export const npm_config_user_agent: string;
	export const VIMCLOJURE_SERVER_JAR: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const PUMA_MAX_THREADS: string;
	export const LC_TERMINAL: string;
	export const DISPLAY: string;
	export const POS_TAGGER: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const AWS_S3_ACCESS_KEY_ID: string;
	export const COLORTERM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		GOOGLE_ANALYTICS_ID: string;
		LDFLAGS: string;
		MANPATH: string;
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		AWS_S3_DEFAULT_REGION: string;
		NVM_CD_FLAGS: string;
		TERM: string;
		SHELL: string;
		CATALINA_HOME: string;
		CPPFLAGS: string;
		ERL_AFLAGS: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		ELASTIC_SERVER_NAME: string;
		PERL5LIB: string;
		TERM_PROGRAM_VERSION: string;
		PUMA_MIN_THREADS: string;
		COLOR: string;
		TERM_SESSION_ID: string;
		npm_config_noproxy: string;
		npm_config_local_prefix: string;
		ZSH: string;
		NVM_DIR: string;
		USER: string;
		LD_LIBRARY_PATH: string;
		LS_COLORS: string;
		PUMA_WORKERS: string;
		GOSJAR_TOPOLOGIJA: string;
		COMMAND_MODE: string;
		npm_config_globalconfig: string;
		USER_NAME: string;
		LOCAL_OFFICE_PATH: string;
		SSH_AUTH_SOCK: string;
		ELASTICSEARCH_URL: string;
		REDIS_URL: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		PAGER: string;
		WORKON_HOME: string;
		PROJECT_HOME: string;
		LSCOLORS: string;
		GOOGLE_API_KEY: string;
		NPM_TOKEN: string;
		PATH: string;
		npm_package_json: string;
		_: string;
		MAILCHIMP_API_KEY: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		AWS_DEFAULT_REGION: string;
		SECRET_KEY_BASE: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		PWD: string;
		JAVA_HOME: string;
		npm_lifecycle_event: string;
		AWS_SECRET_ACCESS_KEY: string;
		EDITOR: string;
		npm_package_name: string;
		ITERM_PROFILE: string;
		npm_config_npm_version: string;
		XPC_FLAGS: string;
		FURY_AUTH: string;
		MAILCHIMP_AUDIENCE_ID: string;
		npm_config_node_gyp: string;
		RBENV_SHELL: string;
		npm_package_version: string;
		ENVIRONMENT: string;
		XPC_SERVICE_NAME: string;
		AWS_ACCESS_KEY_ID: string;
		DISCOVERY_DEVELOPMENT: string;
		SHLVL: string;
		HOME: string;
		COLORFGBG: string;
		RAILS_ENV: string;
		LC_TERMINAL_VERSION: string;
		HOMEBREW_PREFIX: string;
		ITERM_SESSION_ID: string;
		npm_config_cache: string;
		LESS: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		AWS_STORAGE_BUCKET_NAME: string;
		AWS_S3_SECRET_ACCESS_KEY: string;
		LC_CTYPE: string;
		PROTO_LIB: string;
		NVM_BIN: string;
		PGDATA: string;
		GITHUB_TOKEN: string;
		PKG_CONFIG_PATH: string;
		npm_config_user_agent: string;
		VIMCLOJURE_SERVER_JAR: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		PUMA_MAX_THREADS: string;
		LC_TERMINAL: string;
		DISPLAY: string;
		POS_TAGGER: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		AWS_S3_ACCESS_KEY_ID: string;
		COLORTERM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}