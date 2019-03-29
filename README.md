# YAML2CV

[DEMO - Default](https://yaml2cv-demo.netlify.com/)

[DEMO - High Tech Company](https://yaml2cv-demo.netlify.com/hightechcompany/)

---

## ToDos
Do you want some new features? Create an issue :)
- [ ] LinkedIn Import
- [ ] Generate pages and CVs automatically for each folder in content
- [ ] Disable coverletter on production
- [ ] Overflow warning for pages
- [x] add field for address and telephone
- [x] add new layout with: skill level, timeline
- [x] add responsiveness
- [x] explain how to add new informations

---

## Customize the CV
1. Go to `content` and edit the all files, but never delete files or delete attributes (just delete the content if you don't want them):
   1. `company.yml`: company specific information <- should be customized for each company you apply, used for: *coverletter*
   2. `education.yml`: educational background, used for: *firstpage on cv*
   3. `experienceFirstPage.yml`: work experiences, used for: *firstpage on cv*
   4. `experienceSecondPage.yml`: work experiences if there isn't enough space on the first page. Could also be used two show something different like projects on the page. If you don't need it just delete the segments, but not the file, used for: *secondpage on cv*
   5. `footer.yml`: links in footer, is very flexible, used for: *each page*
   6. `person.yml`: your personal information, used for: *coverletter, firstpage on cv*
   7. `settings.yml`: your central hub to manage most of the stuff you can see, everything is explained in this file, used for: *everywhere*
   8. `skills.yml`: all your skills, used for: *firstpage on cv*
   9. `voluntary.yml`: like education and experience just for your voluntary work, used for: *secondpage on cv*`components/Footer.vue` to your logo.
2. If you want to apply for many different jobs/positions you have to follow this steps:
   1. Create a folder for this job/position where you copy the files you want to customize. In this repository there is the example `HighTechCompany` where the `company.yml`, `coverletter.yml` and `skills.yml` are customized.
   2. Duplicate the `pages/index.vue` in `pages` and customize the following lines to match yout new files (here from the HighTechCompany example):
      ```
        import settings from '~/content/settings.yml'
        import coverletter from '~/content/HighTechCompany/coverletter.yml' //CUSTOMIZED
        import company from '~/content/HighTechCompany/company.yml' //CUSTOMIZED
        import person from '~/content/person.yml'
        import experienceFirstPage from '~/content/experienceFirstPage.yml'
        import experienceSecondPage from '~/content/experienceSecondPage.yml'
        import education from '~/content/education.yml'
        import skills from '~/content/HighTechCompany/skills.yml' //CUSTOMIZED
        import voluntary from '~/content/voluntary.yml'
        import footer from '~/content/footer.yml'
      ```
    1. After that you can access this page by adding the file name to your url, in this example for the page `HighTechCompany.vue` add `/HighTechCompany` to your url to get `http://localhost:3000/HighTechCompany`.
    2. So you have to repead this for each jobs/position.
3. Change the colors in `assets/scss/_settings.scss`, mainly the `$c-primary` color but you can change everything you want, but I suspect that it will destroy the layout.
4. In the same file you can change the font but than you have to add the Google Font in the `nuxt.config.js` file (just replace the url you find there).

---

## Run locally
1. Install all dependencies `npm install` - you only have to do this once
2. Run `npm run dev` and go to localhost:3000

---

## Generate CV - tested in Chrome Version 71.0.3578.98 on MacOs and Windows
1. Open the print dialog
2. Click on `More settings`
3. And select
    1. Paper size: A4
    2. Margins: None
    3. Scale: 100
    4. Options: (true) Background graphics
4. Select `Save as PDF` as print destination
5. And that's it :)

---

## Use it on production server
- You can deploy it via [Netlify](https://nuxtjs.org/faq/netlify-deployment/), a free account is enough and you can add your own domain if you want
- Everything will be public and could be seen, so be careful about the data which is in `content`
- The Coverletter isn't optimized for Mobile Devices

### Run on a server
1. `npm run build`
2. `npm run start`

### Generate static HTML
1. `npm run generate`
2. Copy the files from the `dist` folder to your webserver

## Technical Concepts
- Content should be managed per page, so it can be easily customized centrally
- No complex properties like objects, just primitives. If an object is required the property has a custom validator to check if the expect keys exist
 
## Technology
This project uses [Vue.js](https://vuejs.org/) in [Nuxt.js](https://nuxtjs.org). 
