import { LogType } from './log_type';

export const projectLog: LogType[] = [
        {
    date: '2024-05-03',
    text: `Complete basic room and map design
1. Room and map would be placed at first. Some items would be changed later to connect interaction with players
2. The design of character has been completed. In the next step it would be used in game
3. Some basic texture has been used. About the other would be adjusted later`,
    images: ['pby-log-1.png', 'pby-log-2.png', 'pby-log-3.png'],
  },
        {
    date: '2024-05-01',
    text: `Improve player operation logic
1. The button will be displayed based on the presence or absence of walls around it
2. Added action point mechanism, randomly generating action points at the beginning of the turn, and consuming action points through actions
3. Add a prompt system, which will prompt players when they operate improperly`,
    images: ['lzh-log-5.png', 'lzh-log-6.png'],
  },
  {
    date: '2024-04-29',
    text: `Automatic planning of motion animation paths in rooms using artificial intelligence techniques`,
    images: [],
  },
  {
    date: '2024-04-28',
    text: `Monster Movement Design - Second Draft
1. Monster will be put randomly in the maze as game starts
2. Every 5 turn points consumed by players, monster move for a distance
3. Every time monster encounters a crossroad, randomly pick an available direction and move`,
    images: [],
  },
  {
    date: '2024-04-27',
    text: `Implementing object interaction logic:
    1. Implementing a Door Opening and Closing Script
    2. Implementing a drawer fetch script
    3. Implementing the Hiding Cabinet Script`,
    images: ['log-6.png', 'log-7.png', 'log-8.png', 'log-9.png'],
  },
  {
    date: '2024-04-26',
    text: `Completed the external network connection features:
    1. Connection of players in two different network environments
    2. Synchronization of newly generated objects
    3. Player state synchronization`,
    images: ['external_network_connection.png'],
  },
  {
    date: '2024-04-19',
    text: `Realisation of item detection:
    1. Add a button to interact with the door
    2. Implementation of door distance and direction detection scripts`,
    images: ['log-4.png', 'log-5.png'],
  },
  {
    date: '2024-04-06',
    text: `Monster Movement Design - First Draft
1. Algorithm So Far: Determine the relationship between monster and player through dot product, and then make monster move towards player
2. Change state when detect player`,
    images: [],
  },
    {
    date: '2024-04-02',
    text: `Completed game design and some player operations
1. Initial game design proposal
2. Simple click button to achieve movement
3. Conceptual design of UI`,
    images: ['lzh-log-1.png', 'lzh-log-2.png', 'lzh-log-3.png', 'lzh-log-4.png'],
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
    date: '2024-03-31',
    text: `Complete basic map design. Try to use drunk crawling algorithm in map generation`,
    images: [],
  },
  {
    date: '2024-03-25',
    text: `Completion of the connection between the host and client in the local network environment:
    1. The player Connection in local
    2. Object synchronization
    3. Player state synchronization`,
    images: ['local_network_connection.png']
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
