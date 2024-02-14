OpenAI proxy on Cloudflare Pages

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`c3`](https://developers.cloudflare.com/pages/get-started/c3).

## To deploy on Cloudflare

### Using Git Repo

1. Click [Use this template](https://github.com/new?template_name=cf-proxy-openai&template_owner=iamdin) to create your own repo

2. Login to [Cloudflare](https://dash.cloudflare.com/)

3. Select `Workers & Pages` >  `Create Application` > `Pages` > `Connect to Git`

![page](<CleanShot 2024-02-15 at 00.23.10.png>)

4. Select the repo you just created.

5. In Build settings, the framework preset select `Next.js`. Other configurations use default options 

### Using CLI

```bash
npm run pages:deploy
# or
yarn pages:deploy
# or
pnpm pages:deploy
# or
bun pages:deploy
```
