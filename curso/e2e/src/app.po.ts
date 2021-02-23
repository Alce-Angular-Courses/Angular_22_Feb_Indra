import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('.toolbar span')).getText();
  }

  async getInfoText(): Promise<string> {
    return element(by.css('.content span')).getText();
  }
}
