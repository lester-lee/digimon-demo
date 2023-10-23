# RTK Query with React Router

This repo is an example of using RTK Query to fetch an array of data, and providing a details view for a single item routed via React Router.

It uses [this Digimon API](https://digimon-api.com/).

# Example Steps

1. Create new Vite project and delete unused files.
1. Create empty components to test with (DigimonList, DigimonDetails).
1. Use React Router to route between the components & nest them in a Root layout.
1. Use RTK Query to get the data from the API.`
   1. Initialize empty api slice & store.
   2. Provide them to the app.
   3. Create slices for each endpoint & inject them into the api slice.
1. Use the exported `useQuery` hooks in React components to get the data.
