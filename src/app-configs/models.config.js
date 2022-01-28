
import { APP_MESSENGING_CONST } from '../app-constants';
const {CONFIG:{MESSANGING_KEY}} =  APP_MESSENGING_CONST;

export const INIT_MESSAGE_REDUCER = () => { {[MESSANGING_KEY]: { message:{ type: '', message: '', description: '' }}} }
