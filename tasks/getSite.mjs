import { NetlifyAPI } from 'netlify'
import getScreenshot from './getScreenshot.cjs'

const client = new NetlifyAPI('IBcbGJWliCeRTbOqft3f32KTBwHROcDwNphF8-qSMpM')
const sites = await client.listSites()
// Find the site with the given name
const site = sites.find(site => site.name === 'srishtiarchivev2')
// List all builds for the site
console.log(site.id)
// List all builds for the site where errror: null
const builds = await client.listSiteBuilds({ 
    site_id: site.id,
})

// Remove builds where error is not null
const filteredBuilds = builds.filter(build => build.error === null)


const baseURL = '--srishtiarchivev2.netlify.com/'
// Collect all deploy IDs in builds to an array
const deployIDs = filteredBuilds.map(build => build.deploy_id)
// Add the base URL to each deploy ID
const deployURLs = deployIDs.map(deployID => `https://${deployID}${baseURL}`)
// Reverse the array so that the latest deploy is first
deployURLs.reverse()

// Generate screenshots for each deploy URL
await getScreenshot(deployURLs, 'screenshots', 'screenshot', 'png')