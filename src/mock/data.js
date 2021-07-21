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
  career1: '18.05.21~20.01.15 육군본부(계룡대 근무지원단) 정보보호병 만기 전역',
  career2: '20.05.13~20.11.30 한이음 ICT 멘토링 프로젝트 수행',
  career3: '20.06.08~20.06.14 KISA 온라인 일방향 침해사고 대응 훈련(중급) 수료',
  career4: '20.11.06~20.11.07 한국정보처리학회 2020 온라인 추계학술대회 논문 투고',
  career5: '21.02.15~현재 웹프로그래밍 외주업체 PM직',
  career6: '21.07.02 K-Shield Jr. 6기 수료',
  tel: '연락처 : 010-7184-6533',
  email: '이메일 : dldvk9999@naver.com',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// CERTIFICATES DATA
export const certificatesData = [
  {
    id: nanoid(),
    img: 'Army.jpg',
    title: '군 경력 증명서',
    info: '2018.05.21~2020.01.15 (19개월) 간 정보보호 특기병으로 군생활을 하며 실제 보안 근무 및 보안훈련 등에 대한 증명서입니다.',
    info2: '2018.12.13에는 사이버 보안관제 부분 전군 우수 부대표창 수상 경력이 있습니다.',
    info3:
      '근무 내용으로 크게 보안 관제, INFOCON 격상 대응, 사이버 훈련 (총 3회), UTM 및 IPS 정책 설정 등이 있습니다. ',
    info4:
      '보통 관제 업무를 진행하였으며, 주/야간 2교대 근무로 한달 평균 약 160시간 정도 근무하였습니다.',
    info5:
      '이러한 군 생활을 통해 실제 사이버 보안에 있어서 침해사고 발생시 대응하는 전략, 보안 강화의 흐름, 초기대응의 중요성, 보안 장비 숙련, 관제 간 신 취약점 발견 및 대응 등 보안 업무에 있어 핵심 업무들을 많이 배울 수 있었고 보안에 흥미를 더 돋굴 수 있는 계기가 되었습니다.',
    url: '',
  },
  {
    id: nanoid(),
    img: 'Hanium.png',
    title: '한이음 ICT멘토링 수행 확인서',
    info: '2020.05.13~2020.11.30 (약 6개월) 간 한이음 ICT멘토링 한 것에 대한 수행 확인서 입니다.',
    info2:
      '한이음이란 대학생(멘티)이 ICT기업전문가(멘토)와 팀을 이루어 프로젝트를 수행함으로써 ICT실무역량을 향상 시키는 대한민국 ICT분야 대표 멘토링 프로그램입니다.',
    info3:
      '이 멘토링을 통해 "디바이스 드라이버를 활용한 랩톱 보안 소프트웨어"라는 프로젝트를 수행하였고, 아쉽게도 드라이버 개발에서 완료를 짓지 못하였지만 PC 프로그램 및 스마트폰 어플 개발은 모두 완료하여 개인적으로 개발에 있어 많이 성장한 시간이었다고 생각합니다.',
    info4:
      '또한 처음으로 팀프로젝트로 진행하여 개발에 있어 팀으로 진행할때 어떤 식으로 진행해야할지, 개발 계획서 작성법 등 멘토님에게서 많은 가르침도 받았던 시간이였습니다.',
    info5: '해당 프로젝트의 소스코드는 하단에 PROJECT 섹션에 Github URL로 첨부해놓았습니다.',
    url: '',
  },
  {
    id: nanoid(),
    img: 'KISA.png',
    title: 'KISA 침해사고 대응 훈련(중급) 수료증',
    info: '2020.06.08~2020.06.14 (21시간) 간 KISA에서 제공하는 온라인 훈련장을 통해 일방향 침해사고 대응 훈련에 대한 수료증입니다.',
    info2:
      '본 훈련은 APT침투, 악성코드헌팅, 로그분석 이렇게 3가지 과목으로 구성되어 있으며 각 과목 모두 수료 기준을 통과하였습니다.',
    info3:
      '비록 짧은 시간이였지만 오히려 한이음 ICT멘토링과 병행하며 실습하였기 때문에 부담감이 덜 하였고 개발뿐만이 아닌 보안의 안목도 넓힐 수 있었습니다.',
    info4:
      '본 훈련의 가장 큰 장점으로 온라인 가상환경을 통해 직접 공격 및 분석하는 것이 가능했기에 더 의미있는 시간이지 않았나 생각했습니다.',
    url: '',
  },
  {
    id: nanoid(),
    img: 'Conference.png',
    title: '2020 온라인 추계학술대회 참가 증명서',
    info: '2020.11.06~2020.11.07 (2일) 간 한국정보처리학회에서 주최하는 2020 온라인 추계학술발표대회 참가 증명서입니다.',
    info2:
      '본 학술대회는 한이음 ICT멘토링을 진행하면서 한이음 측과 연계되는 대회로 진행하는 프로젝트를 가지고 정보처리학회에 논문을 투고하는 방식입니다. ',
    info3:
      '초기 일정에는 현장에 모두 모여서 발표하는 것으로 계획되었으나 코로나19의 여파로 모두 온라인으로 전환되어 특정 시간 내에 사이트에서 서로의 논문 자료를 볼 수 있도록 진행되었습니다.',
    info4:
      '이는 한이음 측 학술발표대회와 정보처리학회 측 학술대회발표 이렇게 2번 진행되었으며 처음쓰는 논문과 처음하는 학술발표대회였기 때문에 아주 의미가 큰 활동중에 하나였습니다.',
    info5: '오른쪽 증명서 이미지를 클릭하시면 당시 제출했던 논문을 보실 수 있습니다.',
    url: 'https://drive.google.com/file/d/1Ywxvw58XGYMcZ5b4zHW-9pjKgDlA7QZX/view?usp=sharing',
  },
  {
    id: nanoid(),
    img: 'Business.png',
    title: '웹프로그래밍 외주 PM직 사업자등록증',
    info: '2021.02.09~현재까지 진행하고 있는 웹프로그래밍 외주에 대한 사업자 등록증입니다.',
    info2:
      '현재 서울에 있는 모 법인 회사와 웹서비스 개발 계약을 맺고 있으며 같이 일하는 직원 3명이 있습니다.',
    info3:
      '직원은 각각 디자이너, Front-end 개발, Back-end 개발을 맡고 있고, 저는 PM(Project Manager)를 맡아 외부 회사와 직원들과의 소통, 프로젝트 성공에 대한 책임 및 주도 등을 하고 있습니다.',
    info4:
      '처음 사업자등록을 할때는 저는 아무것도 모르고 시작했기 때문에 너무나도 힘이 들었지만 남들 몇년에 걸쳐 배우는 것을 저는 단 몇개월만에 배웠기때문에 더 많이 경험하고 빠르게 성장할 수 있었던 것 같습니다.',
    info5:
      'PM직을 통해 프로젝트의 매니저는 어떤식으로 행동해야할지 사업장을 차린 대표로써 어떤 마음을 가지는지 실제로 겪어보았기 때문에 회사에 입사한다면 매우 큰 도움이 될 것으로 생각합니다.',
    url: '',
  },
  {
    id: nanoid(),
    img: 'KShield.jpg',
    title: '사이버보안 실무인재 양성(K-Shield 주니어) 수료증',
    info: '2021.03.08~2021.05.18 (200시간) 간 과학기술정보통신부가 주최하고 한국인터넷진흥원이 주관한 K-Shield Jr. 의 수료증입니다.',
    info2:
      '본 과정은 차세대 보안리더 양성 프로그램(BoB) 과정과 유사하지만 보안리더가 아닌 "실무인재 양성"에 더 초점을 둔 과정으로 과정 수료 후 바로 실무에 투입될 수 있도록 해주는 과정입니다.',
    info3:
      '본 과정을 통해 정보보안 기초, 기업보안업무 기초, 관리 보안 운영, 기술 보안 운영, 정보시스템 취약점 진단, 모의해킹을 배웠습니다.',
    info4:
      '또한 과정 마지막에 팀프로젝트로 포스트 코로나에 맞는 기업 취약점 진단 및 발표도 진행하여 훈련 사이트에 직접 모의해킹을 한 후 취약점 점검 및 보고서 작성을 작성해보기도 하였습니다.',
    info5:
      '정보보안 컨설턴트의 관점에서 해당 기업을 어떤 식으로 진단할지, 내놓아야할 솔루션이 어떤 것이 있을지 등을 깊이있게 배웠던 시간이였고 실무에 있어 도움이 되는 좋은 경험을 했다고 생각합니다.',
    url: '',
  },
];

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
