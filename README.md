# Setting up Mixpanel in React with Typescript

This helper file is based off of Andre Woons' wonderfully simple article, [Setting up Mixpanel in React](https://medium.com/@andrewoons/setting-up-mixpanel-in-react-3e4c5b8c2a36). I added some hacky type safety to the Mixpanel methods based on the official docs.

##Usage
1. Copy Mixpanel.ts into your project directory, placing it wherever makes organizational sense (ex. in a helpers folder).
2. Setup a Mixpanel account and copy your token into the `mixpanel.init('')` function in the Mixpanel.ts file.
2. Be sure you have node types installed; if not, run `npm i @types/node` to install.
3. Import `Mixpanel` in any of your components where you need to track an event.
4. Use `Mixpanel` as you would here: https://developer.mixpanel.com/docs/javascript
5. Optionally add any additional methods you need. I only included the Mixpanel methods I required.

## License
MIT
