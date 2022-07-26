const isDev = process.env.VITE_USER_NODE_ENV === 'development';

module.exports = {
  'root': true,
  'env': {
    browser: true,
    node: true,
    es6: true,
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'extends': [
    'eslint:recommended',
    'google',
    'plugin:vue/vue3-strongly-recommended',
  ],
  'rules': {
    'no-console': isDev ? 0 : 2,
    'no-debugger': isDev ? 0 : 2,
    'max-len': 0,
    'no-prototype-builtins': 0,
    'vue/multi-word-component-names': 0,
  },
  'globals': {
    $ref: true,
    $shallowRef: true,
    $computed: true,
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    $loading: 'readonly',
  },
};
