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
provided by Next.js<br>
**Correction**: You need to SSR if using styled-component.

## Custom 404 pages

To make a custom 404, you can just create `404.js` pages component in `pages` folder root

## Redirecting users

`useRouter` hooks from `next/router` can be used to redirect users.
Two method can be use to redirect user are `.go` and `.push`.
`go` method will move users in between browser history.
`push` method accept string that is a url to page you want to redirect

## Images and Metadata

Use `Images` component provided by `next/image` to use Next.js image optimization. **Required** to pass `width` and height props.
Use `Head` component provided by `next/head` to insert any `<head>` element to a component/pages

## Fetching data (getStaticProps)

For fetching data in Next.js you can export a function called `getStaticProps` which is a async function.
Get static props will run on the build time which is good for SSG.
You can only use `getStaticProps` in pages component.

## Dynamic routes

To make dynamic route similiar to url parameters, name your template file wrapped it square bracket `location/[params]`.
use Link that have href of `locaction/[params you want to pass]` in the parent pages of the specific pages

## getStaticPaths

getStaticPaths is a function that run at buildtime and is async function, it will fetch all data and all parameters in this function
and then it will return to Next.js for make a specific data and pages.

The required return value for getStaticPahts are

```js
return {
  paths: [
    { params: { [paramater]: value } }, // object with params key are required, [parameter] must the same as the name pass in [name].js
  ], // required array of object
};
```

The paths key determines which paths will be pre-rendered. Then Next.js will statically generate somelink/1 and somelink/2 at build time using the page component in somelink/[params].js.<br>
**Note** that the value for each params must match the parameters used in the page name.

## Fetching single data

After you send a collection of params from getStaticPaths, to fetch the individual data you can export getStaticProps function.
Accept a parameter called context coming from getStaticPaths `getStaticProps(context)` and use it to get the url param.
And then fetch the single data using the url param from context
