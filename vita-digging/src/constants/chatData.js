export const mockMessages = [
  {
    type: 'bot',
    text: '현재 소화불량 질환을 앓고 계시는군요. 그 외 보완하고 싶은 건강 문제는 있으신가요?',
  },
  {
    type: 'user',
    text: '자다가 새벽에 자꾸 깨서 수면의 질이 낮아요. 그리고 현재 칼슘제를 복용하고 있어서 같이 복용해도 괜찮은 영양제를 원해요.',
  },
  {
    type: 'user',
    text: '자다가 새벽에 자꾸 깨서 수면의 질이 낮아요. 그리고 현재 칼슘제를 복용하고 있어서 같이 복용해도 괜찮은 영양제를 원해요.',
  },
  {
    type: 'result',
    text: {
      title: 'OOO 님에게 이 영양제를 추천합니다.',
      desc: '진행한 설문을 기반으로 추천된 영양제입니다.',
    },
  },
];


export const mockChats = [
  {
    id: 1,
    status: 'progress', 
    date: '25/03/11',
    content: '자다가 새벽에 자꾸 깨서 수면의 질이 낮아요. 그리고 현재 칼슘제를 복용하고 있어서 같이 복용해도...',
  },
  {
    id: 2,
    status: 'done', 
    date: '25/02/09',
    content: 'OOO 님에게 이 영양제를 추천합니다. 아스타잔틴 12mg, 눈피로 플로라루테인...',
  },
  {
    id: 3,
    status: 'done',
    date: '24/12/25',
    content: 'OOO 님에게 이 영양제를 추천합니다. 아스타잔틴 12mg, 눈피로 플로라루테인...',
  },
];
