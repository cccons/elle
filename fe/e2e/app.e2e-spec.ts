import { Page } from './app.po';

describe('Front-end of the elle app', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
    page.go('/');
  });

  it('should display welcome message', done => {
    page.getTextFrom('app-root h1')
      .then(msg => expect(msg).toEqual('Welcome to elle!!'))
      .then(done, done.fail);
  });

  it('should have a title of `elle: english language learning engine`', done => {
    page.title()
      .then(t => expect(t).toEqual('elle: english language learning engine'))
      .then(done, done.fail);
  });
});
