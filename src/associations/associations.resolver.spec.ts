import { Test, TestingModule } from '@nestjs/testing';
import { AssociationsResolver } from './associations.resolver';
import { AssociationsService } from './associations.service';

describe('AssociationsResolver', () => {
  let resolver: AssociationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssociationsResolver, AssociationsService],
    }).compile();

    resolver = module.get<AssociationsResolver>(AssociationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
