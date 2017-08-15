import { TeacherModule } from './teacher.module';

describe('TeacherModule', () => {
  let teacherModule: TeacherModule;

  beforeEach(() => {
    teacherModule = new TeacherModule();
  });

  it('should create an instance', () => {
    expect(teacherModule).toBeTruthy();
  });
});
