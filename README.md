# Multi-domain

The repo contains two Nextjs apps, one for the primary and one for the satellite domain.

## Set up

1. Install [turbo](https://turbo.build/).

```
npm i -g turbo
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
| NEXT_PUBLIC_CLERK_DOMAIN          | string | Required for applications that run on a satellite domain. Set this to `clerk.<your-domain>`.                                                               |
| NEXT_PUBLIC_CLERK_SIGN_IN_URL     | string | Required for applications that run on a satellite domain. This is the primary application's sign in url. Example: `https://<your-primary-domain>/sign-in`. |
| CLERK_API_URL                     | string | The absolute URL of the Clerk Backend API. Defaults to https://api.clerk.com.                                                                              |
| NEXT_PUBLIC_CLERK_IS_SATELLITE    | string | Required for applications that run on a satellite domain. Set this to `true`.                                                                              |
