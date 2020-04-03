/**
 * https://github.com/typicode/husky
 * https://github.com/sudo-suhas/lint-staged-multi-pkg
 * https://github.com/okonet/lint-staged
 */
module.exports = {
  hooks: {
    // 'pre-commit': 'lint-staged', // too slow
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
}
