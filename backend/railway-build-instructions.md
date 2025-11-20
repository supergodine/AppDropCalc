# Railway Build Instructions

**Build command:**
```
npm install && npm run build
```

**Start command:**
```
npm run start:prod
```

**Node version:**
```
18.x
```

**Observações:**
- O projeto está configurado para Node 18 via campo "engines" no package.json.
- O build utiliza apenas `npm install` (sem npm ci) e `npm run build`.
- O start utiliza `node dist/main.js` via script `start:prod`.
- O arquivo package-lock.json foi regenerado e está válido.
- Dependências duplicadas/obsoletas removidas.
- O campo "main" está correto: `dist/main.js`.
- Scripts e configs ajustados para compatibilidade Railway/Nixpacks.
