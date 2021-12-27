const ERROR_LOG_ASYNC_MESSAGE = (path: string, method: string) =>
  `*** file: ${path}, method: ${method}, error: `;

const LOG_MESSAGE = {
  SERVER_ON: 'SERVER ON LISTENING PORT: ',
};

export { ERROR_LOG_ASYNC_MESSAGE, LOG_MESSAGE };
