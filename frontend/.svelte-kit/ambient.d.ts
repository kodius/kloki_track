
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
	export const GOOGLE_ANALYTICS_ID: string;
	export const NVM_INC: string;
	export const MANPATH: string;
	export const LDFLAGS: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_dependencies_bits_ui: string;
	export const TERM_PROGRAM: string;
	export const npm_package_devDependencies_typescript_eslint: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const NVM_CD_FLAGS: string;
	export const AWS_S3_DEFAULT_REGION: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_config_version_git_tag: string;
	export const SHELL: string;
	export const TERM: string;
	export const npm_package_devDependencies_vite: string;
	export const CATALINA_HOME: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const ERL_AFLAGS: string;
	export const CPPFLAGS: string;
	export const PERL5LIB: string;
	export const ELASTIC_SERVER_NAME: string;
	export const npm_config_init_license: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_dependencies_tailwind_variants: string;
	export const npm_package_scripts_dev: string;
	export const PUMA_MIN_THREADS: string;
	export const TERM_SESSION_ID: string;
	export const npm_package_dependencies_lucide_svelte: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_private: string;
	export const npm_config_registry: string;
	export const ZSH: string;
	export const npm_package_readmeFilename: string;
	export const npm_package_devDependencies_globals: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const npm_package_description: string;
	export const LS_COLORS: string;
	export const LD_LIBRARY_PATH: string;
	export const npm_package_devDependencies__eslint_js: string;
	export const npm_package_scripts_check_watch: string;
	export const COMMAND_MODE: string;
	export const GOSJAR_TOPOLOGIJA: string;
	export const PUMA_WORKERS: string;
	export const USER_NAME: string;
	export const SSH_AUTH_SOCK: string;
	export const LOCAL_OFFICE_PATH: string;
	export const npm_package_dependencies_lodash: string;
	export const npm_package_dependencies_graphql_request: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const REDIS_URL: string;
	export const ELASTICSEARCH_URL: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies_graphql_codegen_typescript_common: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_execpath: string;
	export const npm_package_dependencies_graphql: string;
	export const npm_package_devDependencies_tslib: string;
	export const PAGER: string;
	export const npm_package_devDependencies_svelte: string;
	export const WORKON_HOME: string;
	export const LSCOLORS: string;
	export const PROJECT_HOME: string;
	export const npm_package_devDependencies__graphql_codegen_cli: string;
	export const GOOGLE_API_KEY: string;
	export const npm_package_dependencies_tailwind_merge: string;
	export const PATH: string;
	export const NPM_TOKEN: string;
	export const npm_config_argv: string;
	export const MAILCHIMP_API_KEY: string;
	export const _: string;
	export const npm_config_engine_strict: string;
	export const __CFBundleIdentifier: string;
	export const SECRET_KEY_BASE: string;
	export const AWS_DEFAULT_REGION: string;
	export const PWD: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const JAVA_HOME: string;
	export const npm_package_devDependencies__types_lodash: string;
	export const npm_package_scripts_preview: string;
	export const EDITOR: string;
	export const AWS_SECRET_ACCESS_KEY: string;
	export const npm_lifecycle_event: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_name: string;
	export const ITERM_PROFILE: string;
	export const npm_package_scripts_build: string;
	export const npm_config_version_commit_hooks: string;
	export const XPC_FLAGS: string;
	export const npm_config_bin_links: string;
	export const MAILCHIMP_AUDIENCE_ID: string;
	export const FURY_AUTH: string;
	export const RBENV_SHELL: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const ENVIRONMENT: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_version: string;
	export const DISCOVERY_DEVELOPMENT: string;
	export const AWS_ACCESS_KEY_ID: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_devDependencies__zerodevx_svelte_toast: string;
	export const COLORFGBG: string;
	export const HOME: string;
	export const SHLVL: string;
	export const npm_package_type: string;
	export const LC_TERMINAL_VERSION: string;
	export const RAILS_ENV: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_config_version_git_message: string;
	export const ITERM_SESSION_ID: string;
	export const LOGNAME: string;
	export const LESS: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_scripts_format: string;
	export const AWS_S3_SECRET_ACCESS_KEY: string;
	export const AWS_STORAGE_BUCKET_NAME: string;
	export const npm_lifecycle_script: string;
	export const LC_CTYPE: string;
	export const PROTO_LIB: string;
	export const PKG_CONFIG_PATH: string;
	export const GITHUB_TOKEN: string;
	export const PGDATA: string;
	export const NVM_BIN: string;
	export const VIMCLOJURE_SERVER_JAR: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const npm_package_dependencies_clsx: string;
	export const npm_package_scripts_types: string;
	export const DISPLAY: string;
	export const LC_TERMINAL: string;
	export const PUMA_MAX_THREADS: string;
	export const POS_TAGGER: string;
	export const npm_config_init_version: string;
	export const npm_config_ignore_optional: string;
	export const npm_package_scripts_check: string;
	export const COLORTERM: string;
	export const AWS_S3_ACCESS_KEY_ID: string;
	export const npm_node_execpath: string;
	export const npm_config_version_tag_prefix: string;
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
		GOOGLE_ANALYTICS_ID: string;
		NVM_INC: string;
		MANPATH: string;
		LDFLAGS: string;
		npm_package_devDependencies_prettier: string;
		npm_package_dependencies_bits_ui: string;
		TERM_PROGRAM: string;
		npm_package_devDependencies_typescript_eslint: string;
		NODE: string;
		INIT_CWD: string;
		NVM_CD_FLAGS: string;
		AWS_S3_DEFAULT_REGION: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_config_version_git_tag: string;
		SHELL: string;
		TERM: string;
		npm_package_devDependencies_vite: string;
		CATALINA_HOME: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		ERL_AFLAGS: string;
		CPPFLAGS: string;
		PERL5LIB: string;
		ELASTIC_SERVER_NAME: string;
		npm_config_init_license: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_dependencies_tailwind_variants: string;
		npm_package_scripts_dev: string;
		PUMA_MIN_THREADS: string;
		TERM_SESSION_ID: string;
		npm_package_dependencies_lucide_svelte: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_private: string;
		npm_config_registry: string;
		ZSH: string;
		npm_package_readmeFilename: string;
		npm_package_devDependencies_globals: string;
		USER: string;
		NVM_DIR: string;
		npm_package_description: string;
		LS_COLORS: string;
		LD_LIBRARY_PATH: string;
		npm_package_devDependencies__eslint_js: string;
		npm_package_scripts_check_watch: string;
		COMMAND_MODE: string;
		GOSJAR_TOPOLOGIJA: string;
		PUMA_WORKERS: string;
		USER_NAME: string;
		SSH_AUTH_SOCK: string;
		LOCAL_OFFICE_PATH: string;
		npm_package_dependencies_lodash: string;
		npm_package_dependencies_graphql_request: string;
		__CF_USER_TEXT_ENCODING: string;
		REDIS_URL: string;
		ELASTICSEARCH_URL: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies_graphql_codegen_typescript_common: string;
		npm_package_devDependencies_eslint: string;
		npm_execpath: string;
		npm_package_dependencies_graphql: string;
		npm_package_devDependencies_tslib: string;
		PAGER: string;
		npm_package_devDependencies_svelte: string;
		WORKON_HOME: string;
		LSCOLORS: string;
		PROJECT_HOME: string;
		npm_package_devDependencies__graphql_codegen_cli: string;
		GOOGLE_API_KEY: string;
		npm_package_dependencies_tailwind_merge: string;
		PATH: string;
		NPM_TOKEN: string;
		npm_config_argv: string;
		MAILCHIMP_API_KEY: string;
		_: string;
		npm_config_engine_strict: string;
		__CFBundleIdentifier: string;
		SECRET_KEY_BASE: string;
		AWS_DEFAULT_REGION: string;
		PWD: string;
		npm_package_devDependencies_tailwindcss: string;
		JAVA_HOME: string;
		npm_package_devDependencies__types_lodash: string;
		npm_package_scripts_preview: string;
		EDITOR: string;
		AWS_SECRET_ACCESS_KEY: string;
		npm_lifecycle_event: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_name: string;
		ITERM_PROFILE: string;
		npm_package_scripts_build: string;
		npm_config_version_commit_hooks: string;
		XPC_FLAGS: string;
		npm_config_bin_links: string;
		MAILCHIMP_AUDIENCE_ID: string;
		FURY_AUTH: string;
		RBENV_SHELL: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		ENVIRONMENT: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_version: string;
		DISCOVERY_DEVELOPMENT: string;
		AWS_ACCESS_KEY_ID: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_devDependencies__zerodevx_svelte_toast: string;
		COLORFGBG: string;
		HOME: string;
		SHLVL: string;
		npm_package_type: string;
		LC_TERMINAL_VERSION: string;
		RAILS_ENV: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		HOMEBREW_PREFIX: string;
		npm_config_version_git_message: string;
		ITERM_SESSION_ID: string;
		LOGNAME: string;
		LESS: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_scripts_format: string;
		AWS_S3_SECRET_ACCESS_KEY: string;
		AWS_STORAGE_BUCKET_NAME: string;
		npm_lifecycle_script: string;
		LC_CTYPE: string;
		PROTO_LIB: string;
		PKG_CONFIG_PATH: string;
		GITHUB_TOKEN: string;
		PGDATA: string;
		NVM_BIN: string;
		VIMCLOJURE_SERVER_JAR: string;
		npm_config_version_git_sign: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		npm_package_dependencies_clsx: string;
		npm_package_scripts_types: string;
		DISPLAY: string;
		LC_TERMINAL: string;
		PUMA_MAX_THREADS: string;
		POS_TAGGER: string;
		npm_config_init_version: string;
		npm_config_ignore_optional: string;
		npm_package_scripts_check: string;
		COLORTERM: string;
		AWS_S3_ACCESS_KEY_ID: string;
		npm_node_execpath: string;
		npm_config_version_tag_prefix: string;
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
