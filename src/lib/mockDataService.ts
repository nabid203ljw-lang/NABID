import { Member, ResearchArea, Publication, News, LabInfo, GalleryImage } from '../types';

// Initial Data
const initialLabInfo: LabInfo = {
  name: "NABID",
  description: "Nano Advanced Biodrug Innovative Delivery Lab (NABID)",
  address: "고려대학교 세종캠퍼스 약학대학 (세종특별자치시 세종로 2511)",
  email: "ljw1112@korea.ac.kr",
  phone: "044-860-1621",
  professorName: "이재우",
  affiliation: "고려대학교 세종캠퍼스 약학대학",
  primaryColor: "#8B0029",
  logoUrl: "https://lh3.googleusercontent.com/pw/AP1GczPe1sdvNQYPRYioGOkYsnA2q_qp6J_92NTRWEdv5dJ29Jgs7BBnxRU3d6IDcbQtvZj_HQGQDYqywhO5ToGQDchM26NMxSy4hujJu9dMU0WSV0e59iWIA8GXOe9LW58Et9Sfy2Se-VjnbeBr_uWzIxZf0bPyPFPmSD9G16jv4Pm9CFzD4Q-mV3r833__SITyNmB8qWrs2KJQ7xBKW-9eA2sZopoolzpi54o_vggsT0PYNIT9DEOwD2hfOamzXKyOarNLrtfklZTn4Zdi_tPoRqLXmsHtcYV30Fk5t169LlMqRpnC7RW7t2AXIZ87PorgevRMKH8Oo84Ntl6nw2t52yLnaqrXQnOGEod35vklmfKJx_cMA4rdYVZPA8hLuvc0APWiebU8eeN9iK9OgKn5o9fznvxsOZJTJdLYbruTbOFz3YDVmPb5Bcov0sA2EysEDqQE4_w5xT2n61URlGEbLrNH2x21cHt6zNkIsHjiGjeSmbLJ-3KZdv6bb2FumTNGQXVWI4I6Xqxahev5RXo677ch0sCmImi1KyyZ2ZyaDYkUwMhcefR7DQgNgEb_xhGEfE7QKLPbuVkCjYIVJ_lcys3AeJVYu_ZbJPYnoWX8QEjh3WJMGRYlKm53NxSEA9B3oXXAgz9QOWIYcMmBVKAwrWJK9toQcDGwWW53yivJKJA653ONfmi1fcWzXDTGQJVPASpikg2iWS7KC5pFOvCehn-HTQajqVuzqbYXCbV0O5rY0a2cDXIZL3ERwzat5IWArjDAt9wZJzAlh0kmyyIizo5T5qBpi6Td3ZBfN4PRX6ITJLlkRcSoPCKOV8btAKDYSFGDe5FwjIL2lAvnlAmoy495jmYE_iI_2P10oDMr6KcQRqIxmKIw6pIYwfNEOBo5c64PShuBaN1qy7HdtOLEZDaLzq8kEDl-x7lyw0aLv806LpmfHuvgZdQe=w256-h256-s-no?authuser=0",
  kuLogoUrl: "https://lh3.googleusercontent.com/pw/AP1GczOchQB_GoqzJpMf-PYhFN8jrndutZbmr_px3AyLFwa84Jr4pTAShFQ6tmA_6mUyeK6yvILn8tCpLJAfOWmx6tRq6MGs1IsphRxW4r1i2kz1w2E3LzifgPGmK8NUsLlzvobUORaUoXwknFo4AM6bpcY0wVtgWab4L95_NeknTa3rDxM984GeAXkGkuR7nv7uF1TOvGWzeZZJj6JklXurF-BfpwM9dUMp8YDrs9XQ6VzAzOtEbDZ25NAxAqTLV0H-DYgvX_U3i9KNPeFusemgvkhZvCBnPto-I3Zy8lfevnotqNFraxRo-USnZrmu-LlqJmMyQetWU7mBB45BjA9vpTBWICBuWHhwvmzEjSQhCZ0kJ5breSXVq_-vgTPNDotkJCUnLiMG0U0VfhjBd6iybjTFtSlD7eDJIKVYqoTiQNav4fDgIORTBnod-YepkXK1JQqMP-ex1VbznNoRCrj5ztIENRb0pm2mU_fahRWPxCewVmTK3GgPfzNgJisP9JXbNfhB07AvBi-C-e8PqjWUgCtoSp31qDZHSqD_EwceMaeu_vwGacimV1PWxU9rLLQ6bgWzVQCJZqpU31GTZl6TuNdSPiO1J2p9Oj7xtFB4NsLrkTE6wZCNlTE5bTf0wueSCjkxPaozxvpf3rTcdBPfJnDCYe8JTPlLnQH_ZUqUJK30BBHXwjhp3FyxOyi6s6qqfXGuOLVD4ozZ0ixaW_bFUJM-ND-xFg43vnekHmT5XfJhyIqQIduB_PGWL7UUjU-IJm1_9ToVmGXan5ruavefzjuChSJBomMihPPr17XNlBy_Hfwaa3jMi3eOi9KwedQPTlx9npLydnJBddZy__LUfjcV6pHp6urMWBX6c-3ZBxeOgQAOlcrpqKVxLzGTYPpHHmVNo9ZxLqg1yAIhJRU26w43Wdw7tM-QN9pWQBqHqpKkjf7Uh7G6eCBr=w614-h194-s-no?authuser=0"
};

const initialMembers: Member[] = [
  {
    id: '1',
    name: '이재우',
    role: 'Professor',
    email: 'ljw1112@korea.ac.kr',
    bio: '고려대학교 세종캠퍼스 약학대학 교수. 나노 약물 전달 시스템 전문가.',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNqRqnyOshUBuHpVaFp12BYmmdnABOeQDoTug6O32Jv9S_0ovtsCVhFQCmTcr3zFpXsinA9fsszP-yQOr-fDr2RD0PTqRrMDeyakOE8ZW5U31p4V3ir1DpzVc3BUqbks6IOjXOYYCrrdgiwjn5pAGoDTTOXZFusS3fd7XVJZxEuqTSUwCOTFFKnZSLsvCGncxtQJntR7zfivA-vV4AEz1yHTbUEhwLSG13C40JG8qDu9b5ibQE79P_1sxgw2PjKAJO1XyUY091G574uVPtGlrO38JHeCpaBhMtL4vJqQXQ8DOyQwTABZu3qscyp2fvG_V76iG3kGj2PY6_Xl2f63kDKBdQcMJUPDWDiy0NDVCF3eg9PqAxoV6HltFEe1UmIz9lsHHf1dhTIq9DzBnDAUYDJ9xtKeOXQWd7hAkt3_28bjuxEq03AAFI186ndm_BvlwzesMq_jitA9Cs-7oFIzsFzp5q8gIN-CBbk6CP4fN-MJcU2ZxgXZMTPudn_qK0SxssZwNBMWT88XX0v87nrbWs-Lbv79nPNwI2vBuxUxGVSV4vUOb64VhlG2mGxYqgazNaCUzmbh-lQ4xmKaCh_Vz2nx6L77viiK-meWit1dpu-nGu2kOmVRK2w7MYbIzCfGEcqyHZ90OYGAId6ZuEK5wUzU2wiYCbHMZW0gz5dvwSz3-ivuUiJTGKE3YM3D_TsW2AhiQk_daRsCZoAhjgxu3ejTsTL6ygAmYSNZmQHarSbiV9f-6sgWr1PpF9kK31-TnfaXgMio3L1fz2odtXXv0JNPVshAGLkaWeBlLeGl-yDs_hkZqV70IbAjuvbzztcitryLvBiUJlU5V42vu68HEWnK1qKX7vqsZDclVULpw0FGjw3pH20kKdiarErVm0smwv1zhryeAwqEe4dEB0_532ePFAEbZSll05nOXdXD3NCfRmc0RyC3MI=w492-h530-s-no?authuser=0',
    order: 0
  },
  {
    id: '2',
    name: '박시현',
    role: 'Integrated M.S.-Ph.D. Student',
    email: 'sihyun321@korea.ac.kr',
    bio: '나노 입자 합성 및 특성 분석 연구.',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMiOO4Rmc45QvfmSlJiOLgdF6kugilDPbaJVilIclfktdMwDr8py4ClY4Y-_np_honRcj5GjGvFkOjvHm2FIC68DtfGB_5HQzmtm8MjjmfpOzStHyiPnKsyN-o2gKazJEPdpwEUkRUf5EUX70-i6mbsuc-ZyQevuiJzfVCOqAILuRH36MI-KfhQfCPBnZ9swKBChrUwxXlIacfn_FBnkanaVtLLBfm-xY5rcoEhSjJShMG0zxTIhpz85mEO1f7QVMVsh28tLpEjwa9c2YTQrbOeUHpVtwUq3e42W-2pdjGXLV0BGpeQXWPQf76UQGUX0tcRPg11v7rWwnLd0aBVyH8zPVyxmRlbGzhGLYOPOr7OTrs4TP-zZcoVAapzuzYqWrjVvi0K3jy6OhwgFHf3O5ILggB2rZmxmcp0xTS8t_QzpZYRZjxjijJkzo5HwVe49bgz4dAVyMByOaMDZae330ivcI9h_K0mOhM3R-_9atB4oDiZaYVqOl3fQONjhp3O9KbIKjodRpdHW4rYVWA7RDzkDxFEmSWAMW4yBceswI_8Mqlj4d1FDl7fiTZ7IoOFecyahH2fr2dn2vqYXlVlB0tEHkTwCWdF1ooDbVD8VH8wd3fHvcmhywlOJMkLappODSt9MGcah3T9K5FdSIfSJPIIe9IYZ8qyqdKO4LMztkqiAhfViTK1dkR7mm89zac2HQU2CSh4ZFsUi3zle8tTOURUVvPkrrupfd1cgTmM9WD5mSACM9XyOglzpqm6nVe_3oBU98TEeoojQEk_UgyyCearVyoDgoEb8yRJkGLsXVnSYJqrfto97635lzYEua4AUSSwEbqFj_Acm_FGnBvrQvZDgBYq847eWj4vYth6oWQA1fEl9ArGKb_l_4qSfok-1UZUXiE33XdGHgeepKrTWewZcFoljGpb_5odNVIAHhyLdiEudg6XtXY=w1080-h1440-s-no?authuser=0',
    order: 1
  },
  {
    id: '4',
    name: '이우근',
    role: 'Integrated M.S.-Ph.D. Student',
    email: 'dnrms4824@korea.ac.kr',
    bio: '바이오 소재 응용 및 효능 평가 연구.',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNlGg9ozMkYHrgNlojt1hxZ-hKFLcleMV9FlkJ4UDrYdgt442EeRcNb7GCcwQ_v2qB9l6LWqtkrXiv-XHEI285gE7iuwnJSh3iWPdrpe3aYAjzFq8jIT3J_bpcF5Ph2BhcorH3Nx9OKvVniZ-7XzGsSrtkvgGPG7yqKBLEKeMHL8SOCO8ny80qX5hX6eege65AwNYwsPtgwwlZdO6c3DmBsEYFk7irAft3JM3q5u8a0CLattLaOwV3M-5dc1TFiaxy-ES1pIKajz61iLLY0utCRNr9z_OG8jOVW8FVgkt1grjbB2FnVBWo34gqwRXHnfwrQgvL7MRgvjAdNgJbsOJlZna8N6ubsDCuYommAzawUpgCf4Ck_cZYwclS6u_QWdk9zR-fzAn_7lGC5NBsPFYNWaP3pa23hmpV6e3p8A2zsJUb9uoVHeqviEiLyVv5D-EGD_OQemqPkFcwuMm_JbbXfI1pk-6hiLVUFy9FJmNCiYEmcfVOSfrkpmLaBaN4LDj4n0UtKAzr0MpI3OYso2TMhgXg2TU_rSQC91cK7p8OTvwaKloZ4-DgfPdxGi6aKHlIV__0A6hnrp5iGQs7_ll2IMmdZANd5syHg7eddXzZLwO2L4aTQGCQPo4Q8iskF20xosxuNHo51iJMV2njyDPhNGuWW55w1idlkdJ5ZAEosAEvtO6cQMoTl1RinwejXJlmP2pj1a6pAzxCNgE7LXZfodxXwnFKnBrS0ChqZpaXkUdm5F9QbR22jU_WtaKHYdHwjK5NOyxacO-9_fD7OMyxxtuWFv-0PhM2G84dFiG8UJBfPG6BGekxPfuyU28eX8cYYUfnBl7jk4a1WS8hNi1V7gpsYzrE1MFvXyfnz40aRD_MChRPOBgDkNwUXk1i953ZDPxDXo1w-Z_HLqgC2Nfl6z2pjL-Hphq1f2OSZRz_dld7Ky6SqzxQ=w1200-h1800-s-no?authuser=0',
    order: 2
  },
  {
    id: '3',
    name: '우민지',
    role: 'Integrated M.S.-Ph.D. Student',
    email: 'woo4360@korea.ac.kr',
    bio: '표적 지향적 약물 전달체 개발 연구.',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNda_w_2PKeCvjpFU5sIgBWQaGZilZPFcujyeXpi2bHSQOsQ0PPXbetOLsi78nTbc4MukNnUTydxPVhYce8Dn6mQyyqXlFUj1eZs_PT9ygRwu41jCdqGz2ozHCD8plW_tiF2E5yfhIbOC8UpJwP5o1SxfSs-ln9zdJ1nqyd1XahgOZEnsZec3y-jNrVWlVK_c2HovXakyA5Sw20abMZcfXpt6Bg4cH3r4FjlVEsg6C3eN5MPrdhHAGCAAAKeIZ_u31IBbdRqOlK8tGmnGuXluLQoAnj4MU7exVHb1NRMfMmKrNJ9DTtBNiTOpdyeQ1C8EgX7nz-6fYy2Juhp4f4sQEyuTGl-z5zv5yeuFhuS-WtuBnHxJAqKm5u4RjcVmfAfl04JYRoZLUIBfo_Sd5HLEeSJowcd8taWboEGQLOi1ywbPsjfV8DH-jhoAUy9X7GLVxVDwE8rM8td1wNJc1IBeCTBK2N0s0JEK7RhMgUQY84ycfsUft_g6DYqeBxesGbJ1nG-lDebXlvO6rIMhyV_Kyg1PDCUIEj9PbnH-dqvk62GufPJxvGg-UHLGJmLFqiY9rT6uvLwt0JCM5DYcjRUV1NYgOcM9RgIsmOmg47TiKhXCwN26AJkXJ0SSyv2GwJMEbezp7KknItIA6xXGnTacoJIhM-mskyBj5T1IkOfny9qGMVDop7m3DfUKeSJR6A9SUcYaQTUeCHCBnGXBK1llT6lYG98GcxAzvh6eOCGD5eRLBv5r45ycLJ960_LZuMDFucSxa9hzVn81aN_pjpp_yFQjn68oUkbmkXhAr2mWk7eRQ054KqSLEgIXmAefhdYytRf7I8WAwYdPF0lXEenSQnNxlyX_3sMPBI6S8swZHlLVd4zTtGyJmXcrpW5yT0d6Pv9FVKoJnvxD-yQbaJ0R1_M3Vc7-WuZ0lzQ4ZbO8P5x4FwnFxjbvg=w496-h638-s-no?authuser=0',
    order: 3
  }
];

const initialResearchAreas: ResearchArea[] = [
  {
    id: '1',
    title: 'Anti-Aging & Senescence',
    description: '노화(Aging) 및 세포 노화 과정에 개입하여 건강 수명을 연장하기 위한 바이오 의약품 및 나노 기술 기반 솔루션을 탐구합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200',
    icon: 'Zap',
    bullets: ['Senolytic drug delivery systems', 'Mitochondrial rejuvenation'],
    order: 0
  },
  {
    id: '2',
    title: 'Fibrosis',
    description: '다양한 장기에서 발생하는 섬유화(Fibrosis)의 기전을 연구하고, 이를 억제하기 위한 혁신적인 약물 전달 시스템을 개발합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200',
    icon: 'ShieldCheck',
    bullets: ['Organ-specific targeting', 'Extracellular matrix remodeling'],
    order: 1
  },
  {
    id: '3',
    title: 'Innovative Drug Delivery',
    description: '표적 치료 효율을 극대화하기 위한 나노 입자 설계 및 혁신적인 약물 전달 플랫폼 기술을 연구합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=1200',
    icon: 'Beaker',
    bullets: ['Lipid Nanoparticles (LNP)', 'Polymeric micelles'],
    order: 2
  }
];

const initialNews: News[] = [
  {
    id: 'recruitment-2026',
    title: '🚀 NABID LAB (Nano Advanced Biodrug Innovative Delivery Lab)',
    date: '2026-04-20T00:00:00Z',
    author: 'Admin',
    content: `<p>NABID Lab에서 지도교수님과 함께 비상하며 ‘존버의 승리’를 증명할 창의적인 인재를 찾습니다.</p>
    
    <h4>🧬 주요 연구 분야</h4>
    <p><strong>주요 연구 주제:</strong> 나노/마이크로 입자 기반 약물전달 시스템: 항암면역, 간 섬유화, 자가면역, 비만, 탈모 치료제 개발</p>
    <p><strong>수행 중인 국가 과제:</strong> 알키미스트 프로젝트(역노화 기술 개발), 한국연구재단(폐섬유화 선택적 약물전달)</p>
    <p><strong>목표 학술지:</strong> Cell, Nature, Science (CNS) 게재를 목표로 하는 기발하고 창의적인 연구</p>

    <h4>👤 NABID가 찾는 인재</h4>
    <ul>
      <li><strong>협력형 인재:</strong> 구성원들과 즐겁게 어울리며 시너지를 낼 수 있는 분</li>
      <li><strong>능동적 연구자:</strong> 수동적인 참여보다 브레인스토밍을 통해 자기 연구를 주도할 분</li>
      <li><strong>창의적 사고:</strong> NABID의 정체성 안에서 번뜩이는 아이디어를 제안할 분</li>
      <li><strong>끈기:</strong> ‘존버는 승리한다’는 명제를 함께 증명하실 분</li>
    </ul>

    <h4>🚫 NABID에 '없는' 4가지</h4>
    <ul>
      <li><strong>석사과정 학생:</strong> 2026년 신설된 Brand New 연구실로, 현재 전원 석박사 통합과정입니다.</li>
      <li><strong>반목과 갈등:</strong> "함께 멀리 가는" 가치를 지향하며, 교수가 직접 분위기를 책임집니다.</li>
      <li><strong>박사과정 선배:</strong> 선배가 없는 것은 시행착오를 뜻하지만, 동시에 연구적 자립성을 키울 최고의 기회입니다. (외부 협력 연구실 박사님들과 교류 지원)</li>
      <li><strong>고정된 출퇴근 시간:</strong> 정해진 등하교 시간 대신 자유와 책임 기반의 자율 일과를 보장합니다.</li>
    </ul>

    <h4>💰 지원 혜택 (Benefits)</h4>
    <ul>
      <li><strong>물질적 지원:</strong> 등록금 전액 지원 + 생활비 보조</li>
      <li><strong>정신적 지원:</strong> 부모의 마음으로 학생을 모시는 지도교수의 극진한 케어와 서포트</li>
    </ul>

    <h4>📄 제출 서류 및 지원 방법</h4>
    <p><strong>제출 서류:</strong></p>
    <ul>
      <li>자기소개서</li>
      <li>이력서 (CV)</li>
      <li>학위증명서 및 성적증명서</li>
      <li>추천서 (자유 형식): 부모, 형제, 친구, 은사, 종교인 등 본인을 잘 아는 분 누구나 가능</li>
    </ul>
    <p><strong>지원 방법:</strong> 이메일 접수 (<a href="mailto:ljw1112@korea.ac.kr">ljw1112@korea.ac.kr</a>)</p>

    <h4>❗ 권장 사항</h4>
    <p>학위 시작 전 인턴 연구원으로 실험실 경험 후 입학하는 것을 권장합니다.</p>
    
    <br/>
    <p><i>"빨리 가려면 혼자 가고, 멀리 가려면 함께 가라."</i></p>
    <p><strong>NABID Lab은 여러분의 능동적인 연구와 성장을 끝까지 지원합니다.</strong></p>`,
    imageUrl: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1200'
  }
];

const initialGallery: GalleryImage[] = [
  {
    id: '1',
    title: 'Lab Dinner',
    description: 'Celebrating our latest publication success.',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    date: '2024-03-15',
    order: 0
  },
  {
    id: '2',
    title: 'Conference 2024',
    description: 'Presenting our research at the international conference.',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200',
    date: '2024-02-20',
    order: 1
  }
];

// Mock Service using LocalStorage
const STORAGE_KEY = 'nabid_lab_data';
const DATA_VERSION = '1.0.7'; // Increment this to force storage reset/sync

const initialPublications: Publication[] = [
  {
    id: 'pub-1',
    title: "Anti-inflammatory macrophage-derived exosomes modified with self-antigen peptides for treatment of experimental autoimmune encephalomyelitis",
    authors: "Qiaoyun Li, Jinwon Park, Jung Suk Kim, Quoc-Viet Le, Jaiwoo Lee*, Yu-Kyoung Oh*",
    journal: "Adv Sci (Weinh)",
    year: 2025,
    doi: "e2415265",
    link: "https://doi.org/10.1002/advs.202415265",
    type: "Journal"
  },
  {
    id: 'pub-2',
    title: "Pathological Microenvironment-Remodeling Nanoparticles to Alleviate Liver Fibrosis: Reversing Hepatocytes-Hepatic Stellate Cells Malignant Crosstalk",
    authors: "Ling-Feng Zhang, Wen-Qi Deng, Xing-Huan Wang, Qing-Wen Huang, Su-Qing Liang, Ze-Quan Ding, Liang Qi, Yi Wang, Tian-Jiao Zhou, Lei Xing, Jaiwoo Lee, Yu-Kyoung Oh*, Hu-Lin Jiang*",
    journal: "Adv Sci (Weinh)",
    year: 2025,
    doi: "e2408898",
    link: "https://doi.org/10.1002/advs.202408898",
    type: "Journal"
  },
  {
    id: 'pub-3',
    title: "Hybrid lipid nanoparticles with tumor antigen-primed dendritic cell membranes for post-surgical tumor immunotherapy",
    authors: "Dongyoon Kim, Jaehyun Choi, Dongun Jin, Enzhen Xu, Jaiwoo Lee*, Junho Byun*, Yu-Kyoung Oh*",
    journal: "J. Control. Release",
    year: 2025,
    doi: "S0168-3659(25)00029-X",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-4',
    title: "NET formation-mediated in situ protein delivery to the inflamed central nervous system",
    authors: "Yina Wu, Jinwon Park, Junho Byun, Jaehyun Choi, Enzhen Xu, Jaiwoo Lee*, Yu-Kyoung Oh*",
    journal: "Nat. Commun.",
    year: 2024,
    doi: "15(1): 10747",
    link: "https://doi.org/10.1038/s41467-024-55112-x",
    type: "Journal"
  },
  {
    id: 'pub-5',
    title: "Cell membrane-coated mRNA nanoparticles for enhanced delivery to dendritic cells and immunotherapy",
    authors: "Qiaoyun Li, Junho Byun, Dongyoon Kim, Yina Wu, Jaiwoo Lee*, Yu-Kyoung Oh*",
    journal: "Asian J Pharm Sci.",
    year: 2024,
    doi: "19(6): 100968",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-6',
    title: "Cytoskeleton-modulating nanomaterials and their therapeutic potentials",
    authors: "Jinwon Park, Yina Wu, Jung Suk Kim, Junho Byun*, Jaiwoo Lee*, Yu-Kyoung Oh*",
    journal: "Adv Drug Deliv Rev.",
    year: 2024,
    doi: "211: 115362",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-7',
    title: "Size-Dependent Effect of Indocyanine Green Nanoimaging Agent for Metastatic Lymph Node Detection",
    authors: "Quoc-Viet Le, Sungtaek Kang, Jaeseong Lee, Hyeseon Park, Jeong Gil Sun, Jaiwoo Lee*, Gayong Shim*",
    journal: "Biomater. Res.",
    year: 2024,
    doi: "28: 0022",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-8',
    title: "Nanoparticle drug delivery systems responsive to tumor microenvironment: Promising alternatives in the treatment of triple-negative breast cancer",
    authors: "Ye Cao, Fansu Meng, Tiange Cai, Lanwen Gao, Jaiwoo Lee, Sergey O Solomevich, Uladzislau E Aharodnikau, Tingting Guo, Meng Lan, Fengjie Liu, Qianwen Li, Timoshenko Viktor, Detang Li, Yu Cai*",
    journal: "Wiley Interdiscip Rev Nanomed Nanobiotechnol.",
    year: 2024,
    doi: "16(2): e1950",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-9',
    title: "Nanomodulator-mediated restructuring of adipose tissue immune microenvironments for anti-obesity treatment",
    authors: "Qiaoyun Li, Junho Byun, Jaehyun Choi, Jinwon Park, Jaiwoo Lee, Yu-Kyoung Oh*",
    journal: "ACS Nano",
    year: 2024,
    doi: "18(13): 9311-9330",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-10',
    title: "RNA Nanomedicine: Delivery Strategies and Applications",
    authors: "Junho Byun, Yina Wu, Jinwon Park, Jung Suk Kim, Qiaoyun Li, Jaehyun Choi, Namjo Shin, Meng Lan, Yu Cai, Jaiwoo Lee*, Yu-Kyoung Oh*",
    journal: "AAPS J",
    year: 2023,
    doi: "25(6): 95",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-11',
    title: "Lysyl oxidase-responsive anchoring nanoparticles for modulation of the tumor immune microenvironment",
    authors: "Jinwon Park, Jung Suk Kim, Geon Yang, Hobin Lee, Gayong Shim, Jaiwoo Lee*, Yu-Kyoung Oh*",
    journal: "J. Control. Release",
    year: 2023,
    doi: "360: 376-391",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-12',
    title: "Tannic Acid-Based Nanomaterials for Tolerogenic Immunotherapy of Rheumatoid Arthritis",
    authors: "Yina Wu, Jinwon Park, Dongun Jin, Jaiwoo Lee, Quoc-Viet Le*, Yu-Kyoung Oh*",
    journal: "Advanced Functional Materials",
    year: 2023,
    doi: "e202305563",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-13',
    title: "External cold atmospheric plasma-responsive on-site hydrogel for remodeling tumor immune microenvironment",
    authors: "Junho Byun, Yina Wu, Jaiwoo Lee, Jung Suk Kim, Gayong Shim*, Yu-Kyoung Oh*",
    journal: "Biomaterials",
    year: 2023,
    doi: "299: 122162",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-14',
    title: "Tolerogenic Nanovaccine for Prevention and Treatment of Autoimmune Encephalomyelitis",
    authors: "Jinwon Park, Quoc-Viet Le, Yina Wu, Jaiwoo Lee, Yu-Kyoung Oh*",
    journal: "Advanced Materials",
    year: 2023,
    doi: "35(1); e2202670",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-15',
    title: "Nanomaterials for antigen-specific immune tolerance therapy",
    authors: "Jinwon Park, Yina Wu, Qiaoyun Li, Jaehyun Choi, Heymin Ju, Yu Cai, Jaiwoo Lee, Yu-Kyoung Oh*",
    journal: "Drug. Deliv. Transl. Res.",
    year: 2023,
    doi: "13(7); 1859-1881",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-16',
    title: "Enzyme-responsive macrocyclic metal complexes for biomedical imaging",
    authors: "Quoc-Viet Le, Jaiwoo Lee, Seungbeom Ko, Hyunjung Kim, Thien Y Vu, Yearn Seong Choe, Yu-Kyoung Oh*, Gayong Shim*",
    journal: "Bioeng. Transl. Med.",
    year: 2022,
    doi: "8(5); e10478",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-17',
    title: "Blood-declustering excretable metal clusters assembled in DNA matrix",
    authors: "Jaiwoo Lee, Quoc-Viet Le, Seungbeom Ko, Sungtaek Kang, Robert B. Macgregor Jr., Gayong Shim*, Yu-Kyoung Oh*",
    journal: "Biomaterials",
    year: 2022,
    doi: "289: 121754",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-18',
    title: "Sequential Nano-Penetrators of Capillarized Liver Sinusoids and Extracellular Matrix Barriers for Liver Fibrosis Therapy",
    authors: "Ling-Feng Zhang, Xing-Huan Wang, Cheng-Lu Zhang, Jaiwoo Lee, Bo-Wen Duan, Lei Xing, Ling Li, Yu-Kyoung Oh*, Hu-Lin Jiang*",
    journal: "ACS Nano",
    year: 2022,
    doi: "16(9): 14029-14042",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-19',
    title: "In vivo fate and intracellular trafficking of vaccine delivery systems",
    authors: "Jaiwoo Lee, Dongyoon Kim, Junho Byun, Yina Wu, Jinwon Park, Yu-Kyoung Oh*",
    journal: "Adv Drug Deliv Rev.",
    year: 2022,
    doi: "186: 114325",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-20',
    title: "Fibroblast activation protein activated antifibrotic peptide delivery attenuates fibrosis in mouse models of liver fibrosis",
    authors: "Jaiwoo Lee, Junho Byun, Gayong Shim, Yu-Kyoung Oh*",
    journal: "Nat. Commun.",
    year: 2022,
    doi: "13(1): 1516",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-21',
    title: "DNA-based artificial dendritic cells for in situ cytotoxic T cell stimulation and immunotherapy",
    authors: "Quoc-Viet Le, Jaiwoo Lee, Junho Byun, Gayong Shim*, Yu-Kyoung Oh*",
    journal: "Bioac. Mater.",
    year: 2022,
    doi: "15: 160-172",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-22',
    title: "Nanotherapeutics for immune network modulation in tumor microenvironments",
    authors: "Jaiwoo Lee, Dongyoon Kim, Quoc-Viet Le*, Yu-Kyoung Oh*",
    journal: "Semin. Cancer Biol.",
    year: 2022,
    doi: "86: 1066-1087",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-23',
    title: "Gene therapy strategies for rare monogenic disorders with nuclear or mitochondrial gene mutations",
    authors: "Yi Wang, Li-Fan Hu, Tian-Jiao Zhou, Lian-Yu Qi, Lei Xing, Jaiwoo Lee, Feng-Zhen Wang, Yu-Kyoung Oh*, Hu-Lin Jiang*",
    journal: "Biomaterials",
    year: 2021,
    doi: "277: 121108",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-24',
    title: "Photosensitizer-free phototherapy with peptide micelle nanoadjuvants for cancer vaccine against metastasis of melanoma",
    authors: "Quoc-Viet Le, Dongyoon Kim, Jaiwoo Lee, Gayong Shim*, Yu-Kyoung Oh*",
    journal: "Advanced Therapeutics",
    year: 2021,
    doi: "4: 2000288",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-25',
    title: "Cell membrane-derived vesicles for delivery of therapeutic agents",
    authors: "Quoc-Viet Le, Jaiwoo Lee, Hobin Lee, Gayong Shim*, Yu-Kyoung Oh*",
    journal: "Acta Pharm Sin B",
    year: 2021,
    doi: "8: 2096-2113",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-26',
    title: "Hyperbranched lipoid-based lipid nanoparticles for bidirectional regulation of collagen accumulation in liver fibrosis",
    authors: "Jian-Bin Qiao, Qian-Qian Fan, Cheng-Lu Zhang, Jaiwoo Lee, Junho Byun, Lei Xing, Xiang-Dong Gao, Yu-Kyoung Oh*, Hu-Lin Jiang*",
    journal: "J. Control. Release",
    year: 2020,
    doi: "321: 629-640",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-27',
    title: "Cas9-edited immune checkpoint blockade PD-1 DNA polyaptamer hydrogel for cancer immunotherapy",
    authors: "Jaiwoo Lee, Quoc-Viet Le, Geon Yang, Yu-Kyoung Oh*",
    journal: "Biomaterials",
    year: 2019,
    doi: "218: 119359",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-28',
    title: "Applications of pi-pi stacking interactions in the design of drug-delivery systems",
    authors: "Wan-Ru Zhuang, Yi Wang, Peng-Fei Cui, Lei Xing, Jaiwoo Lee, Dongyoon Kim, Hu-Lin Jiang*, Yu-Kyoung Oh*",
    journal: "J. Control. Release",
    year: 2019,
    doi: "294: 311-326",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-29',
    title: "Light-switchable systems for remotely controlled drug delivery",
    authors: "Gayong Shim, Seungbeom Ko, Dongyoon Kim, Quoc-Viet Le, Gyu Thae Park, Jaiwoo Lee, Taekhyun Kwon, Han-Gon Choi, Young Bong Kim, Yu-Kyoung Oh*",
    journal: "J. Control. Release",
    year: 2017,
    doi: "267: 67-69",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-30',
    title: "Biodegradable graphene oxide and polyaptamer DNA hybrid hydrogels for implantable drug delivery",
    authors: "Mi-Gyeong Kim, Yuna Shon, Wenjun Miao, Jaiwoo Lee, Yu-Kyoung Oh*",
    journal: "Carbon",
    year: 2016,
    doi: "105: 14-22",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-31',
    title: "Functionalization of nano-graphenes by chimeric peptide engineering",
    authors: "Gayong Shim, Jaiwoo Lee, Jinyoung Kim, Hee-Jung Lee, Young Bong Kim, Yu-Kyoung Oh*",
    journal: "RSC Advances",
    year: 2015,
    doi: "5 (61): 49905-49913",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-32',
    title: "Polyaptamer DNA nanothread-anchored, reduced graphene oxide nanosheets for targeted delivery",
    authors: "Mi-Gyeong Kim, Joo Yeon Park, Wenjun Miao, Jaiwoo Lee, Yu-Kyoung Oh*",
    journal: "Biomaterials",
    year: 2015,
    doi: "48: 129-136",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-33',
    title: "Double stranded aptamer-anchored reduced graphene oxide as target-specific nano detector",
    authors: "Mi-Gyeong Kim, Yuna Shon, Jaiwoo Lee, Youngro Byun, Byeong-Sun Choi, Young Bong Kim, Yu-Kyoung Oh*",
    journal: "Biomaterials",
    year: 2014,
    doi: "35: 2999-3004",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-34',
    title: "Preclinical pharmacokinetics and biodistribution of human papillomavirus DNA vaccine delivered in human endogenous retrovirus envelope-coated baculovirus vector",
    authors: "Hee-Jeong Cho, Soondong Lee, Saewon Im, Mi-Gyeong Kim, Jaewoo Lee, Hee-Jung Lee, Keyong Ho Lee, Su Jeong Kim, Young Bong Kim, Yu-Kyoung Oh*",
    journal: "Pharm. Res.",
    year: 2012,
    doi: "29: 585-593",
    link: "",
    type: "Journal"
  },
  {
    id: 'pub-35',
    title: "Nanomedicines for Receptor-Mediated Tumor Targeting",
    authors: "Gayong Shim, Sangbin Lee, Hyunwoo Choi, Jaiwoo Lee, Chan-wha Kim, Youngro Byun, Yu-Kyoung Oh*",
    journal: "Recent Pat. Nanomed.",
    year: 2011,
    doi: "1: 138-148",
    link: "",
    type: "Journal"
  }
];

const getStoredData = () => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  const storedVersion = localStorage.getItem(`${STORAGE_KEY}_version`);
  
  let data;
  if (storedData && storedVersion === DATA_VERSION) {
    data = JSON.parse(storedData);
    if (!data.labInfo) {
      data.labInfo = { ...initialLabInfo };
    } else {
      if (!data.labInfo.logoUrl) {
        data.labInfo.logoUrl = initialLabInfo.logoUrl;
      }
      if (!data.labInfo.kuLogoUrl) {
        data.labInfo.kuLogoUrl = initialLabInfo.kuLogoUrl;
      }
    }
  } else {
    // Version mismatch or no data - force sync/reset
    data = {
      labInfo: initialLabInfo,
      members: initialMembers,
      news: initialNews,
      publications: initialPublications,
      researchAreas: initialResearchAreas,
      gallery: initialGallery
    };
    saveToStorage(data);
    localStorage.setItem(`${STORAGE_KEY}_version`, DATA_VERSION);
  }
  
  return data;
};

const saveToStorage = (data: any) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const mockService = {
  getLabInfo: async (): Promise<LabInfo> => {
    return getStoredData().labInfo;
  },
  updateLabInfo: async (info: LabInfo) => {
    const data = getStoredData();
    data.labInfo = info;
    saveToStorage(data);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('labInfoUpdated'));
    }
  },
  getMembers: async (): Promise<Member[]> => {
    return getStoredData().members;
  },
  addMember: async (member: Omit<Member, 'id'>) => {
    const data = getStoredData();
    const newMember = { ...member, id: Math.random().toString(36).substr(2, 9) };
    data.members.push(newMember);
    saveToStorage(data);
    return newMember;
  },
  updateMember: async (id: string, member: Partial<Member>) => {
    const data = getStoredData();
    data.members = data.members.map((m: any) => m.id === id ? { ...m, ...member } : m);
    saveToStorage(data);
  },
  deleteMember: async (id: string) => {
    const data = getStoredData();
    data.members = data.members.filter((m: any) => m.id !== id);
    saveToStorage(data);
  },
  getNews: async (): Promise<News[]> => {
    return getStoredData().news;
  },
  addNews: async (news: Omit<News, 'id'>) => {
    const data = getStoredData();
    const newNews = { ...news, id: Math.random().toString(36).substr(2, 9) };
    data.news.push(newNews);
    saveToStorage(data);
    return newNews;
  },
  updateNews: async (id: string, news: Partial<News>) => {
    const data = getStoredData();
    data.news = data.news.map((n: any) => n.id === id ? { ...n, ...news } : n);
    saveToStorage(data);
  },
  deleteNews: async (id: string) => {
    const data = getStoredData();
    data.news = data.news.filter((n: any) => n.id !== id);
    saveToStorage(data);
  },
  getResearchAreas: async (): Promise<ResearchArea[]> => {
    return getStoredData().researchAreas;
  },
  addResearchArea: async (area: Omit<ResearchArea, 'id'>) => {
    const data = getStoredData();
    const newArea = { ...area, id: Math.random().toString(36).substr(2, 9) };
    data.researchAreas.push(newArea);
    saveToStorage(data);
    return newArea;
  },
  updateResearchArea: async (id: string, area: Partial<ResearchArea>) => {
    const data = getStoredData();
    data.researchAreas = data.researchAreas.map((a: any) => a.id === id ? { ...a, ...area } : a);
    saveToStorage(data);
  },
  deleteResearchArea: async (id: string) => {
    const data = getStoredData();
    data.researchAreas = data.researchAreas.filter((a: any) => a.id !== id);
    saveToStorage(data);
  },
  getPublications: async (): Promise<Publication[]> => {
    return getStoredData().publications;
  },
  addPublication: async (pub: Omit<Publication, 'id'>) => {
    const data = getStoredData();
    const newPub = { ...pub, id: Math.random().toString(36).substr(2, 9) };
    data.publications.push(newPub);
    saveToStorage(data);
    return newPub;
  },
  updatePublication: async (id: string, pub: Partial<Publication>) => {
    const data = getStoredData();
    data.publications = data.publications.map((p: any) => p.id === id ? { ...p, ...pub } : p);
    saveToStorage(data);
  },
  deletePublication: async (id: string) => {
    const data = getStoredData();
    data.publications = data.publications.filter((p: any) => p.id !== id);
    saveToStorage(data);
  },
  getGallery: async (): Promise<GalleryImage[]> => {
    return getStoredData().gallery || [];
  },
  addGalleryImage: async (image: Omit<GalleryImage, 'id'>) => {
    const data = getStoredData();
    const newImage = { ...image, id: Math.random().toString(36).substr(2, 9) };
    if (!data.gallery) data.gallery = [];
    data.gallery.push(newImage);
    saveToStorage(data);
    return newImage;
  },
  updateGalleryImage: async (id: string, image: Partial<GalleryImage>) => {
    const data = getStoredData();
    data.gallery = (data.gallery || []).map((img: any) => img.id === id ? { ...img, ...image } : img);
    saveToStorage(data);
  },
  deleteGalleryImage: async (id: string) => {
    const data = getStoredData();
    data.gallery = (data.gallery || []).filter((img: any) => img.id !== id);
    saveToStorage(data);
  }
};
