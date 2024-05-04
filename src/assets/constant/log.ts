import { LogType } from './log_type';

export const projectLog: LogType[] = [
        {
    date: '2024-05-01',
    text: `Improve player operation logic
1. The button will be displayed based on the presence or absence of walls around it
2. Added action point mechanism, randomly generating action points at the beginning of the turn, and consuming action points through actions
3. Add a prompt system, which will prompt players when they operate improperly`,
    images: ['lzh-log-5.png', 'lzh-log-6.png'],
  },
    {
    date: '2024-04-02',
    text: `Completed game design and some player operations
1. Initial game design proposal
2. Simple click button to achieve movement
3. Conceptual design of UI`,
    images: ['lzh-log-1.png', 'lzh-log-2.png', 'lzh-log-3.png','lzh-log-4.png'],
  },
  {
    date: '2024-04-01',
    text: `Completion of the project's official website, which includes a display of the project's progress.
Features in official website as follow:
    1. Promotional Video and Download Button
    2. Project Progress Log
    3. Team members`,
    images: ['log-1.png', 'log-2.png', 'log-3.png'],
  },
  {
    date: '2024-03-21',
    text: `Try Plastic SCM in Unity-related operations`,
    images: [],
  },
  {
    date: '2024-03-21',
    text: `1. Background research on unity version control 
2. Plastic SCM selected for version control`,
    images: [],
  },
];
