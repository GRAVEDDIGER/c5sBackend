import {  TokenIndexer } from 'morgan'
import logger from './LoggerConfig.js'

export function morganWinston (
  tokens:TokenIndexer, 
  req: any, 
  res:any):any {
  const objeto = [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
  logger.info.info({ level: 'info', message: objeto })
}
