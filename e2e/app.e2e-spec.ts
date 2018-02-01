import { LazyloadAppPage } from './app.po';

describe('lazyload-app App', () => {
  let page: LazyloadAppPage;

  beforeEach(() => {
    page = new LazyloadAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
