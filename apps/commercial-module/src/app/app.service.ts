import { Injectable } from '@nestjs/common';
import { SubmitDataEvent } from './events/submit-data.event';

@Injectable()
export class AppService {
  constructor(@Inject('OCR') private readonly ocrClient: ClientProxy,){}

  getData(): { message: string } {
    return { message: 'Hello API' };
  }
  
  
  handleSubmitData(data: SubmitDataEvent) {
    console.log('received data: ' + data.data + ' from UI Module');
    this.ocrClient.emit('submit_data', new SubmitDataEvent(data.data));
  }
}
