# Husky config.

## A. Set eslint and prettier to run on every commit.

1. Run

   ```
   yarn add -D @typescript-eslint/parser husky lint-staged prettier
   ```

2. Add scripts: ( To `package.json` scripts )</br>

   ```
   "prettier:check": "prettier --check ."
   "prettier:write": "prettier --write ."
   "prepare": "husky install"
   ```

</br>

3. Add To `package.json`</br>

   ```
   "prettier": "@spotify/prettier-config",</br>
   "lint-staged": {
        "_.{js,jsx,ts,tsx}": [
            "eslint --fix",
            "prettier --write"
        ],
        "_.{json,md}": [
            "prettier --write"
        ]
   }
   ```

4. Run
   ```
   yarn prepare
   ```
5. Add hook
   ```
   npx husky add .husky/pre-commit "yarn lint-staged"
   ```

</br>

## B. Set commit message linter to run on every commit

1. Run
   ```
   yarn add @commitlint/cli
   ```
2. Run
   ```
   yarn add @commitlint/config-conventional
   ```
3. Create
   ```
   commitlint.config.js
   ```
4. Add to `commitlint.config.js`
   ```
   module.exports = {extends: ['@commitlint/config-conventional']};
   ```
5. Run
   ```
   yarn add husky
   ```
6. Add
   ```
   "husky": {
        "hooks": {
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
   }
   ```
7. Add hook
   ```
   yarn husky add .husky/commit-msg "yarn commitlint --edit $1"
   ```
8. Enjoy clean commits.
