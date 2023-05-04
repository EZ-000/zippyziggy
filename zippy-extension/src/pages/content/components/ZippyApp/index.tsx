import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import injectScript from '@pages/content/utils/inject-script';
import { CHAT_GPT_URL, ZP_ROOT_ID } from '@pages/constants';
import { createRoot } from 'react-dom/client';
import ContentScript from '@pages/content/components/ZippyApp/ZippyApp';

refreshOnUpdate('pages/content');

const currentUrl = window.location.href;

// 리액트의 root 심기
const addRoot = () => {
  const root = document.createElement('div');
  root.id = ZP_ROOT_ID;
  document.body.appendChild(root);

  createRoot(root).render(<ContentScript />);
};

if (currentUrl.startsWith(CHAT_GPT_URL)) {
  addRoot();
}

if (currentUrl.startsWith(CHAT_GPT_URL)) {
  // ChatGPT 사이트에서 실행할 로직
  injectScript();

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'test') {
      console.log(message);
    }
  });
}

// if (currentUrl.startsWith(ZIPPY_SITE_URL)) {
//   console.log('지피지기 kr 로직');
//   const a = document.querySelector('h1');
//   a.addEventListener('click', () => {
//     console.log(1111);
//     const token = localStorage.getItem('accessToken');
//     chrome.runtime.sendMessage({
//       type: 'test',
//       data: {
//         token,
//       },
//     });
//   });
// }