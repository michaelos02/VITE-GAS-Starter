Get started by customizing your environment (defined in the .idx/dev.nix file) with the tools and IDE extensions you'll need for your project!

Learn more at https://firebase.google.com/docs/studio/customize-workspace

### NOTES:
This project is all about creating a starter template for GAS projects.  It uses VITE and mock google-script-run for simulating the GAS API.
I wanted to start using a more advanced IDE than the GAS IDE however all my coding work is connected to creating solutions using Google Apps Script.
All the examples or templates I found were just WAY to involved OR requred a LOT of work to set up!!  I did not have time to learn all the ins and outs of Parcel or node or ... 
So this was my creation.  I decided on VITE for its "scalabiltiy" but also for its straightforward basic set up to ge started.  I was already famiialr with CLASP from my earlier attempts of using VSCode... those did not work out well!!
My goal for this starter/template was to keep it as simple as possible easy to reuse!
I do believe I have achieved my goal!
If you have any questions please reach out to me: michael@mroresolutions.rocks



### How to USE:
1. Clone the repo
1. Run npm install
1. Run npm run dev
1. Create a WEP APP in the gas folder using CLASP
    + use: npx clasp create --title "My Web App" --type webapp --rootDir gas


### Issues:
1. Had to really work with the vite.config.js file.  Needed to add an entry to tell the dev server where to "start" from.




