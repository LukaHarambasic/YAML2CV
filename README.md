# YAML2CV

[DEMO](https://zealous-hermann-781626.netlify.com/)

## Customize the CV
1. Go to `assets/cv.yml` and edit the file so that it fit your life and not mine :)
2. Change the image in `static/profile.jpg`
3. If you want to use the logo in the footer leave the settings true in the YAML file and change the svg in `components/Footer.vue` to your logo.
4. Change the colors in `assets/scss/_settings.scss` mainly the `$c-primary` color.
5. In the same file you can change the font but than you have to add the Google Font in the `nuxt.config.js` file.

## Run localy
1. Install all dependencies `npm install` - you only have to do this once
2. Run `npm run dev` and go to localhost:3000

## Generate CV - tested in Chrome Version 71.0.3578.98 on MacOs
1. Open the print dialog
2. Click on `More settings`
3. And select
    1. Paper size: A4
    2. Margins: None
    3. Scale: 100
    4. Options: (true) Background graphics
4. Select `Save as PDF` as print destination
5. And that's it :)

## Use it on production server - not needed

### Run on a server
1. `npm run build`
2. `npm run start`

### Generate static HTML
1. `npm run generate`
2. copy the files from the dist folder

## ToDos
- [ ] add field for address and telephone
- [ ] add new layout with: skill level, timeline and icons
- [x] add responsiveness
- [x] explain how to add new informations
 
## Technology
This project uses [Vue.js](https://vuejs.org/) in [Nuxt.js](https://nuxtjs.org). 
