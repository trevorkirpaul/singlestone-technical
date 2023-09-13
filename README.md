# Singlestone Technical

[![Netlify Status](https://api.netlify.com/api/v1/badges/b9597e39-7d92-4c84-a5eb-63fb7a0f17dd/deploy-status)](https://app.netlify.com/sites/fluffy-concha-7a0652/deploys)

## [Live Site](https://fluffy-concha-7a0652.netlify.app/)

## Dev Quickstart

> Ensure you have the env file set up correctly

1. install packages using `pnpm` (preferred)

```bash
pnpm install
```

2. Run dev server locally:

```bash
# npm
npm run dev

# yarn
yarn dev

# pnpm
pnpm dev
```

## ENV Values

```bash
# You can find this value in the assessment guide
# This is required for the Steps section to function
VITE_STEPS_ENDPOINT=
```

After running the "dev" script, your console will log the URL and port where you can find the app.

## Testing

You can run the test runner by executing the following command in your console:

```bash
# run the test script, here we show an example with pnpm
pnpm test
```

> It should be noted that the script is using the `watchAll` flag to make development easier.

## Developer Notes

Thanks for taking the time to look at my technical assessment!

If this was a larger project, I would use Tailwind, React-Query, and/or Redux Toolkit.

I used Vite to create the app and Jest for writing a quick unit test. I would use Cypress if this was a larger project and add some E2E.
