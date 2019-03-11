import {LOCAL_STORAGE_BOOKMARKS_KEY} from 'config/constants';

const localStorageIsSupported = () => {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
};

const save = (key, value) => {
  if (localStorageIsSupported()) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      console.warn('Local Storage not supported');
    }
  }
};

const get = key => {
  if (localStorageIsSupported()) {
    try {
      var data = window.localStorage.getItem(key);
      if (data && typeof data === 'object') {
        return JSON.parse(data);
      } else {
        return data;
      }
    } catch (e) {
      console.warn('Local Storage not supported');
    }
  }
  return null;
};

export const saveBookmark = url => {
  const bookmarks = loadBookmarks();
  if (!bookmarks.includes(url)) {
    bookmarks.unshift(url);
    bookmarks.pop();
    save(LOCAL_STORAGE_BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }
};

export const loadBookmarks = () => {
  return JSON.parse(get(LOCAL_STORAGE_BOOKMARKS_KEY)) || [];
};
