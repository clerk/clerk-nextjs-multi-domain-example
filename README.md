<p align="center">
  <a href="https://clerk.dev?utm_source=github&utm_medium=multi-domain" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./images/clerk-logo-dark.png">
      <img src="./images/clerk-logo-light.png" height="64">
    </picture>
  </a>
  <br />
</p>

# Clerk Multi Domain Example

This example project shows how to use [Clerk](https://www.clerk.dev/?utm_source=github&utm_medium=starter_repos&utm_campaign=multi-domain) with [Clerk's multi domain feature](https://clerk.com/docs/advanced-usage/satellite-domains).This repo contains two Next.js applications, one for the primary and one for the satellite domain.

[![chat on Discord](https://img.shields.io/discord/856971667393609759.svg?logo=discord)](https://discord.com/invite/b5rXHjAg7A)
[![documentation](https://img.shields.io/badge/documentation-clerk-green.svg)](https://docs.clerk.dev)
[![twitter](https://img.shields.io/twitter/follow/ClerkDev?style=social)](https://twitter.com/intent/follow?screen_name=ClerkDev)

---

## Pre-requisites  
To run the example you need to:

1. Sign up at Clerk.dev.
2. Go to your Clerk dashboard and create an application.
3. Use the Publishable Key and Secret key in both .env 


## Set up

1. Install [turbo](https://turbo.build/).

```
npm i -g turbo
```

2. Install dependencies 

```
npm install 
```

## Development

Build all apps with

```
turbo build
```

Start all apps in development mode

```
turbo dev
```

## Configuration

The following environment variables are supported.

| Name                              | Type   | Description                                                                                                                                                |
| --------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY | string | Required. The publishable key for your instance. You can find it in the Clerk dashboard, under API keys.                                                   |
| CLERK_SECRET_KEY                  | string | Required. The instance's secret key. You can find it in the Clerk dashboard, under API keys.                                                               |
| NEXT_PUBLIC_CLERK_DOMAIN          | string | Required for applications that run on a satellite domain. Set this to `<your-domain>`.                                                                     |
| NEXT_PUBLIC_CLERK_SIGN_IN_URL     | string | Required for applications that run on a satellite domain. This is the primary application's sign in url. Example: `https://<your-primary-domain>/sign-in`. |
| NEXT_PUBLIC_CLERK_IS_SATELLITE    | string | Required for applications that run on a satellite domain. Set this to `true`.                                                                              |
