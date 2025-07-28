# API Node.js Serverless para Vercel

Projeto simples que cria uma função serverless para Vercel que salva JSON no PostgreSQL.

## Configuração

1. Crie um banco PostgreSQL e a tabela:

```sql
CREATE TABLE registros (
  id SERIAL PRIMARY KEY,
  body JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

2. Crie um arquivo `.env` com:

```
DATABASE_URL=postgres://usuario:senha@host:porta/banco
```

3. Instale dependências:

```bash
npm install
```

4. Teste localmente:

```bash
npm run dev
```

5. Faça POST para:

```
http://localhost:3000/api/registrar
```

Exemplo de curl:

```bash
curl -X POST http://localhost:3000/api/registrar \
  -H "Content-Type: application/json" \
  -d '{"teste": "funcionando"}'
```

6. Para deploy na Vercel, rode:

```bash
vercel login
vercel --prod
```

Configure a variável de ambiente `DATABASE_URL` na dashboard da Vercel antes do deploy.
