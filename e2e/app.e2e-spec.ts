import { Ng2ComponentPage } from './app.po';

describe('ng2-component App', () => {
  let page: Ng2ComponentPage;

  beforeEach(() => {
    page = new Ng2ComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
