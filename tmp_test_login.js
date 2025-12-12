const axios = require('axios');
(async () => {
  const base = 'https://backend-holy-fog-6984.fly.dev';
  try {
    console.log('POST', base + '/auth/test-login');
    const resp = await axios.post(base + '/auth/test-login', { email: 'massuplas@gmail.com', password: 'Dhiko35@' }, { timeout: 15000 });
    console.log('LOGIN RESPONSE:', JSON.stringify(resp.data, null, 2));
    if (resp.data && resp.data.success) {
      const token = resp.data.data.accessToken || (resp.data.accessToken || (resp.data?.data?.accessToken));
      console.log('Token:', token ? ('(len:'+token.length+')') : 'none');
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
    } else {
      console.log('Login not successful (body):', resp.data);
    }
  } catch (err) {
    if (err.response) {
      console.error('LOGIN ERROR', err.response.status, err.response.data);
    } else {
      console.error('REQUEST ERROR', err.message);
    }
  }
})();