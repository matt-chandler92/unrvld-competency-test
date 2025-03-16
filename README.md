## Prerequisties

Node version v23.9.0

## Installation

clone down the solution
CD into `/mock-shop`
run `npm install`

## Running

`npm start`
Runs the app in the development mode.\
 Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm run storybook`
Launches the component library built in storybook
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

## Authors Comments

Running the start script will land you on the root of the site which displays the Carousel with some limited static content.
Going to the path `/shop` or clicking on the "Shop the collection" CTA will take you to the product listing page displaying the filters and the product grid.

I used React Create App to get started, if this were going to production I'd have removed a lot of the out of box bloat that create react app provides.
