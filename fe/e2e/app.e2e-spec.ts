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

  describe('Header component', () => {
    beforeEach(() => {
      page = new Page();
      page.go('/');
    });

    it('should only display the title when the screen is < 700px wide', done => {
      page.setWidth(699);
      page.getTextFrom('app-header h1')
        .then(t => expect(t).toEqual('elle'))
        .then(done, done.fail);
    });

    it('should display `elle english language learning engine` when the screen is >= 700px wide', done => {
      // media queries are a bit finicky here, so allow some `wiggle room`
      page.setWidth(710);
      page.getTextFrom('app-header h1')
        .then(t => expect(t).toEqual('elle english language learning engine'))
        .then(done, done.fail);
    });

    it('should display `Sign Up`, and `Sign In` in the menu', done => {
      page.getTextFrom('app-header .header-nav')
        .then(t => expect(t).toEqual('Sign up\nSign in'))
        .then(done, done.fail);
    });
  });

  describe('Home component', () => {
    beforeEach(() => {
      page = new Page();
      page.go('/');
    });

    it('should prompt user to sign up or sign in', done => {
      page.getTextFrom('app-home')
        .then(t => expect(t).toBe('Please Sign Up or Sign In to get started'))
        .then(done, done.fail);
    });
  });

  describe('Teacher Home component', () => {
    beforeEach(() => {
      page = new Page();
      page.go('/teacher');
    });

    it('should have a welcome message', done => {
      page.getTextFrom('app-teacher-home h2')
        .then(t => expect(t).toBe('Welcome to your Teacher Portal!'))
        .then(done, done.fail);
    });

    it('should have links to `Classes`, `Exams`, and `Profile` pages', done => {
      page.getTextFrom('app-teacher-home nav')
        .then(t => expect(t).toBe('Classes\nExams\nProfile'))
        .then(done, done.fail);
    });

    it('should have shortcuts to add a class, add an exam, and edit profile', done => {
      page.getTextFrom('app-teacher-home .content')
        .then(t => expect(t).toBe('Add Class\nAdd Exam\nEdit Profile'))
        .then(done, done.fail);
    });
  });
});
