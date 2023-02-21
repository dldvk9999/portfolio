import { nanoid } from 'nanoid';

// LOGIN DATA
export const loginData = {
  title: '인증키를 입력해주세요.',
  placeholder: 'Auth Key',
  auth: '인증',
};

// HEAD DATA
export const headData = {
  title: "JongGeun's Portfolio",
  lang: 'ko',
  description: 'This page is portfolio for JongGeun Park.',
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  title2: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  name: '',
  birth: '',
  degree: '',
  career1: '',
  career2: '',
  activity1: '',
  activity2: '',
  activity3: '',
  activity4: '',
  tel: '',
  email: '',
  blog: '',
  tistory: '',
  resume: '',
};

// CERTIFICATES DATA
export const certificatesData = [
  {
    id: nanoid(),
    img: '',
    title: '',
    info: '',
    info2: '',
    info3: '',
    info4: '',
    info5: '',
    url: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '본 포트폴리오를 방문해주셔서 감사합니다!',
  btn: '이메일 보내기',
  email: 'dldvk9999@naver.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dldvk9999',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false,
};
