import {Toast as toast, showDialog, showConfirmDialog} from 'vant';

export const $toast = (msg, options = {}) => {
  toast({
    message: msg,
    duration: 2000,
    ...options,
  });
  return () => toast.clear();
};

export const $loading = (title = '加载中', options) => {
  toast.loading({
    message: title,
    forbidClick: true,
    loadingType: 'spinner',
  });
  return () => toast.clear();
};

export const $alert = (title, message = '', options = {}) => {
  if (message && typeof message === 'object') {
    Object.assign(options, message);
    message = '';
  }
  return showDialog({
    title,
    message,
    ...options,
  });
};

export const $confirm = (title, message = '', options = {}) => {
  if (message && typeof message === 'object') {
    Object.assign(options, message);
    message = '';
  }
  return showConfirmDialog({
    title,
    message,
    ...options,
  });
};

export const $prompt = (title) => {
  return new Promise((resolve, reject) => {
    const res = prompt(title);
    if (res) {
      resolve(res);
    } else {
      reject(res);
    }
  });
};

export default {
  $toast,
  $alert,
  $confirm,
  $prompt,
  $loading,
};
