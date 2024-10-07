import { createRunner, parse, PuppeteerRunnerExtension } from '@puppeteer/replay';
import puppeteer from 'puppeteer';

export default class Extension extends PuppeteerRunnerExtension {
    async beforeAllSteps(flow) {
      if (!this.browser) {
        this.browser = await puppeteer.launch();
      }
      if (!this.page) {
        this.page = await this.browser.newPage();
        
      }
      await super.beforeAllSteps(flow);
      console.log(flow.title);  
    }
  
    async beforeEachStep(step, flow) {
      await super.beforeEachStep(step, flow);

      // timeout. Wait for 2 seconds so UI5 loads and the elements are loaded and clickable
      await new Promise(r => setTimeout(r, 2000));
    }


    async afterEachStep(step, flow) {
      await super.afterEachStep(step, flow);
    }

    async afterAllSteps(flow) {
        await super.afterAllSteps(flow);
        await this.browser.close();
    }

    
  }
