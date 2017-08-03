import { Page } from './app.po';

describe('Front-end of the elle app', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to elle!!'))
      .then(done, done.fail);
  });
});
