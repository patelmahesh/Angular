import { PopupsNModalsModule } from './popups-n-modals.module';

describe('PopupsNModalsModule', () => {
  let popupsNModalsModule: PopupsNModalsModule;

  beforeEach(() => {
    popupsNModalsModule = new PopupsNModalsModule();
  });

  it('should create an instance', () => {
    expect(popupsNModalsModule).toBeTruthy();
  });
});
