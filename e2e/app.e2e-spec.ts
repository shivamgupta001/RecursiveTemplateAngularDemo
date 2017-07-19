import { Proj8Page } from './app.po';

describe('proj8 App', () => {
  let page: Proj8Page;

  beforeEach(() => {
    page = new Proj8Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
