const LOG_MESSAGE = {
  REDIS_ON_SUCCESS: 'SUCCESS CONNECTION',
  REDIS_ON_ERROR:
    'FAILED TO CONNECT (MAKE SURE YOUR SERVER IS STARTED) OR TROUBLE SHOT THE FOLLOWING ERROR: ',
  SERVER_ON: 'SERVER ON LISTENING PORT: ',
};
const ERROR_LOG_ASYNC_MESSAGE = (path: string, method: string) =>
  `*** file: ${path}, method: ${method}, error: `;

const PORTS: { [key: string]: string | null | number } = {
  LOCAL: '3001',
  HEROKU: process.env.PORT ? process.env.PORT : 80,
  CENTOS: '8080',
  NAMECHEAP: null,
};

export { PORTS };

export { ERROR_LOG_ASYNC_MESSAGE, LOG_MESSAGE };
