export interface IServer {
  id: string;
  name: string;
  description: string;
  isUp: boolean;
  uptimeMinutes: number;
}

export const MOCK_SERVERS: IServer[] = [
  {
    id: `w001`,
    name: `Web-001`,
    description: `Main web server`,
    isUp: true,
    uptimeMinutes: 345600
  }, {
    id: `w002`,
    name: `Web-002`,
    description: `Secondary web server`,
    isUp: true,
    uptimeMinutes: 604800
  }, {
    id: `db001`,
    name: `DB-001`,
    description: `Database server`,
    isUp: false,
    uptimeMinutes: 0
  },
  {
    id: `db002`,
    name: `DB-002`,
    description: `Secondary database server`,
    isUp: true,
    uptimeMinutes: 240
  },
];
