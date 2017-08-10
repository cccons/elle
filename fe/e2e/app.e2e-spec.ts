import { Page } from './app.po';

describe('Front-end of the elle app', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
    page.go('/');
  });

  it('should have a title of `elle: english language learning engine`', done => {
    page.title()
      .then(t => expect(t).toEqual('elle: english language learning engine'))
      .then(done, done.fail);
  });

  it('should only display the title when the screen is < 600px wide', done => {
    page.setWidth(599);
    page.getTextFrom('app-header h1')
      .then(t => expect(t).toEqual('elle'))
      .then(done, done.fail);
  });

  it('should display `elle english language learning engine` when the screen is >= 600px wide', done => {
    // media queries are a bit finicky here, so allow some `wiggle room`
    page.setWidth(610);
    page.getTextFrom('app-header h1')
      .then(t => expect(t).toEqual('elle english language learning engine'))
      .then(done, done.fail);
  });

  it('should display `Exams`, `Classes`, `Students`, and `Profile` in the menu', done => {
    page.getTextFrom('.header-nav')
      .then(t => expect(t).toEqual('Exams\nClasses\nStudents\nProfile'))
      .then(done, done.fail);
  });
});
