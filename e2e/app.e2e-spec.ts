import { AppPage } from './app.po';

describe('for-you-see App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('4YouSee Challenge');
  });
});
