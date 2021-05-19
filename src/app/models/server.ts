export interface IServer {
  id: string;
  name: string;
  description: string;
  isUp: boolean;
  uptime: number; // in seconds
}

export const MOCK_SERVERS: IServer[] = [
  {
    id: `w001`,
    name: `Web-001`,
    description: `Main web server`,
    isUp: true,
    uptime: 345600
  }, {
    id: `w002`,
    name: `Web-002`,
    description: `Secondary web server`,
    isUp: true,
    uptime: 604800
  }, {
    id: `db001`,
    name: `DB-001`,
    description: `Database server`,
    isUp: false,
    uptime: 0
  },
  {
    id: `db002`,
    name: `DB-002`,
    description: `Secondary database server`,
    isUp: true,
    uptime: 240
  },
];
