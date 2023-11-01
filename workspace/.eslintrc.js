module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // var 선언 쓸꺼얌
    'no-var': 'off',
    // let이라고 선언하고 값 변경이 일어나지않으면 const로 사용하라고 경고
    'prefer-const': 'warn',
    // 선언하고 사용하지않는 변수 경고
    '@typescript-eslint/no-unused-vars': 'warn',
    // 함수에 return 값이 없으면 경고
    '@typescript-eslint/explicit-function-return-type': 'warn',
    // 타입스크립트에서 변수 할당 시 기본데이터 타입에 값을 할당해도 경고안줘도돼
    '@typescript-eslint/no-inferrable-types': 'warn',
    // 데이터 타입 any 사용할수있엉
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};
