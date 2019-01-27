import { ElementsModule } from './elements.module';

describe('ElementsModule', () => {
  let elementsModule: ElementsModule;

  beforeEach(() => {
    elementsModule = new ElementsModule();
  });

  it('should create an instance', () => {
    expect(elementsModule).toBeTruthy();
  });
});
