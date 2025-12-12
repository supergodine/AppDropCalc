const axios = require('axios');
(async () => {
  const base = 'https://backend-holy-fog-6984.fly.dev/api';
  try {
    console.log('POST', base + '/auth/login');
    const resp = await axios.post(base + '/auth/login', { email: 'massuplas@gmail.com', password: 'Dhiko35@' }, { timeout: 15000 });
    console.log('LOGIN RESPONSE:', JSON.stringify(resp.data, null, 2));
    const token = resp.data?.accessToken || resp.data?.data?.accessToken || resp.data?.data?.accessToken;
    if (token) {
      console.log('Token length:', token.length ? token.length : 'no token');
      try {
        const logs = await axios.get(base + '/admin-logs', { headers: { Authorization: `Bearer ${token}` }, timeout: 15000 });
        console.log('ADMIN LOGS:', JSON.stringify(logs.data, null, 2));
      } catch (err) {
        if (err.response) {
          console.error('ADMIN-LOGS ERROR', err.response.status, err.response.data);
        } else {
          console.error('ADMIN-LOGS ERR', err.message);
        }
      }
    }
  } catch (err) {
    if (err.response) {
      console.error('LOGIN ERROR', err.response.status, err.response.data);
    } else {
      console.error('REQUEST ERROR', err.message);
    }
  }
})();