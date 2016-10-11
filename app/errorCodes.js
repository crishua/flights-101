module.exports = {
  session: {
    '201': 'Created – The session has been created',
    '400': 'Bad Request – Input validation failed',
    '403': 'Forbidden – The API Key was not supplied, or it was invalid, or it is not authorized to access the service.',
    '415': 'Unsupported media type',
    '429': 'Too Many Requests – There have been too many requests in the last minute.',
    '500': 'Server Error – An internal server error has occurred which has been logged.'
  },
  polling: {
    '200': 'Success',
    '204': 'No Content – The session is still being created (wait and try again).',
    '304': 'Not Modified – The results have not been modified since the last poll.',
    '400': 'Bad Request – Input validation failed.',
    '403': 'Forbidden – The API Key was not supplied, or it was invalid, or it is not authorized to access the service.',
    '410': 'Gone – The session has expired. A new session must be created.',
    '429': 'Too Many Requests – There have been too many requests in the last minute.',
    '500': 'Server Error – An internal server error has occurred which has been logged.'
  }
};
