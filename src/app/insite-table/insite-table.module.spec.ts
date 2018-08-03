import { InsiteTableModule } from './insite-table.module';

describe('InsiteTableModule', () => {
  let insiteTableModule: InsiteTableModule;

  beforeEach(() => {
    insiteTableModule = new InsiteTableModule();
  });

  it('should create an instance', () => {
    expect(insiteTableModule).toBeTruthy();
  });
});
