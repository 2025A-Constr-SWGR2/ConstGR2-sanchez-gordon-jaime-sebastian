import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // console.log('log!');
    console.warn('warn!');
    // console.info('info!');
    // console.debug('debug!');
    console.error('error!');
    return 'Hello World!';
  }
}
