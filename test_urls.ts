import https from 'https';
import fs from 'fs';

const urls = [
  'https://lh3.googleusercontent.com/sitesv/APaQ0SQnAcgLs6Q8ELZuKN4TgS2T2Dr6aT5hiU6g8ZW03X8fWPUU9Z_R1tSBUDuwIxU9PJcuYd4fybfUOn01MYvMxKdNXzzEVi4QfHJuOYJskhE0_MnyvUKQ-C2pKE4U98oTY2SIaX8lLFKTb4XJWJU4KQeUZLR76gEOD9fhZDXac2xYwh_Ueftm70A5SlWhKDD3M22FhMzaJvyekcVV7FI',
  'https://lh3.googleusercontent.com/sitesv/APaQ0SQw0-PDtTlhXeMFukPwfXnyvvxE0InmTr-7CltN_l2VG-i3mzaoV2SKJuh5y70ncrlCzk06RlX2W5Jws8nbmsWSxHAk_yGMbSD67UAkqn4jvy0BpqxFieBL8kxj6ry9m5uGdP80sVCnyw8Bh44DyrHyu41pHzJSuALoQVx2pNHZJlEALM-BpwKFK4A=w16383',
  'https://lh3.googleusercontent.com/sitesv/APaQ0SRbR_y06oKJNRfEL4hmEt2dBzU3_smQbinCZPX9Kga2Iu_wJ6N-46pGcMjlH4yXLeeA6zvLmxz9Z6tRyTKUK5x0RBYM9fmGEMQ7N4o5g4JCrTweGjL-prYRXcUkMcAy8ntKrtBOUkwyPGqu0NaTnDrV-aaD-TPFZTzWI0qcwyWfVINZN-ckxMu8=w16383',
  'https://lh3.googleusercontent.com/sitesv/APaQ0SRvijy_bbve4Lfcd_c1NkONibon7vrBvnYDJhasteQ2xp1n8ZxQQOtNU8c6Cnob4BgnL6UmWrV3_D48ELoo6Aa81NfdiCynVPtTc53bnrIkiCuY3tMrL3OGcEqDBQ-jK4yHb8mNiMWr7iPeSkvCactKV9XDhYgzNQBSAL6DIS4rs_D9SEtl6X5X=w16383',
  'https://lh3.googleusercontent.com/sitesv/APaQ0ST91P1JAySoQyhiLny4wyO4l6nQoCcoqPZxhpic14iAoWw7wQTI4w-I18_mtK6mDiv6JAaceVfbnkZDSid58rk_BaELub8ZPceNLova2mTBWor35YlEF2QUBaDrFB4kuSOwCSQAF0w7FzFEX5Iek7wZRZUfx7eFalpMCFxjm1EXSMzzdSYR-NbElMhy6ygrCXqWTYGUOpcFyLDk-lTexuJ0PiPyjYF0NpOv=w1280'
];

urls.forEach((url, i) => {
  https.get(url, (res) => {
    console.log(`URL ${i}: ${res.statusCode}`);
  });
});
