import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskAiComponent } from './ask-ai.component';

describe('AskAiComponent', () => {
  let component: AskAiComponent;
  let fixture: ComponentFixture<AskAiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AskAiComponent]
    });
    fixture = TestBed.createComponent(AskAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
