
import axios from 'axios';

import { getCookie } from '../stores/auth/GetCookie';
const instance = axios.create({});


instance.defaults.headers.post['X-CSRFToken']=getCookie("csrftoken")
instance.defaults.headers.delete['X-CSRFToken']=getCookie("csrftoken")
instance.defaults.headers.put['X-CSRFToken']=getCookie("csrftoken")
instance.defaults.headers.patch['X-CSRFToken']=getCookie("csrftoken")

instance.defaults.headers.common['X-CSRFToken']=getCookie("csrftoken")

export default instance;