import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "JongGeun's Portfolio", // e.g: 'Name | Developer'
  lang: 'ko', // e.g: en, es, fr, jp
  description: 'This page is portfolio for JongGeun Park.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'JongGeun Park',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  name: '이름 : 박종근',
  birth: '생년월일 : 1998년 1월 5일',
  degree: '최종학력 : 수원대학교 정보보호학과 졸업 예정',
  career: '경력사항 : ',
  career1: '18.05.21~20.01.15 육군본부 정보보호병',
  career2: '21.02.15~ 웹프로그래밍 외주업체 PM직',
  career3: '21.07.02 K-Shield Jr. 6기 수료',
  tel: '연락처 : 010-7184-6533',
  email: '이메일 : dldvk9999@naver.com',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
