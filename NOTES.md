### Next JS Notes

## Pages & Routes

Next.js will make a `pages` folder when initiating `npx create-next-app`. You can place a Pages component there.
Pages component are component exclusively used as pages that show in browser.
All route handle in background for pages component placed in pages folder.
URL link as follow `https://website.com/[filename]`
for subpage, create a new folder inside `pages` folder and place the pages file inside it
URL link for subpage `https://website.com/[foldername]/[filename]`
URL link for index of subpage `https://website.com/[foldername]`

## Non-pages Component

To make a component that is not pages component, you can define it outside `pages` folder.
You can make component as usual like in CRA

## Internal link

Use `Link` component provided by Next.js to make a link that goes inside the website domain.
import the `Link` component from `next/link`.

## Layout component

It's good idea to make a component that have repeated component in every pages. It's called Layout component
Layout component file contain the component that will be rendered and a `{ children }` props.
Wrap the `<Component />` in app.js with Layout component

## styled-component in Next.js

You can add/install directly styled-component if you're using SSG Next.js.
For SSR look a this [example](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components)
provided by Next.js
